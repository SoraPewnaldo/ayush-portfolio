import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { easing } from 'maath';

import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';

function LensCursor({ modeProps = {} }) {
  const ref = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const virtualPos = useRef({ x: 0, y: 0 });
  
  // Load the lens 3D model
  const { nodes } = useGLTF('/assets/3d/lens.glb');

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to -1 to 1
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const { camera } = state;
    const v = state.viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Follow pointer globally
    const destX = (mousePos.current.x * v.width) / 2;
    const destY = (mousePos.current.y * v.height) / 2;
    
    // Smooth movement
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
    
    // Auto-rotate slightly to give it life
    easing.dampE(ref.current.rotation, [Math.PI / 2 + mousePos.current.y * 0.3, mousePos.current.x * 0.3, 0], 0.15, delta);
  });

  const { 
    scale = 0.05, 
    ior = 1.15, 
    thickness = 5,
    chromaticAberration = 0.1,
    anisotropy = 0.01,
    ...extraMat 
  } = modeProps;

  return (
    <mesh ref={ref} scale={scale} rotation-x={Math.PI / 2} geometry={nodes['Cylinder']?.geometry || nodes[Object.keys(nodes)[1]]?.geometry}>
      <MeshTransmissionMaterial
        ior={ior}
        thickness={thickness}
        chromaticAberration={chromaticAberration}
        anisotropy={anisotropy}
        roughness={0}
        transmission={1}
        clearcoat={1}
        transparent={true}
        {...extraMat}
      />
    </mesh>
  );
}

export default function FluidGlass({ modeProps = {} }) {
  return (
    <Canvas 
      camera={{ position: [0, 0, 20], fov: 15 }} 
      gl={{ alpha: true, antialias: true }} 
      style={{ pointerEvents: 'none' }}
      eventSource={document.body}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <LensCursor modeProps={modeProps} />
      <Environment preset="city" />
    </Canvas>
  );
}

useGLTF.preload('/assets/3d/lens.glb');
