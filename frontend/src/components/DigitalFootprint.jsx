import React, { useState, useEffect, useRef } from 'react';

export default function DigitalFootprint({ top = '45%', left = '12%', rotate = -3 }) {
  const [ipData, setIpData] = useState({ ip: "Locating...", isp: "" });
  const [browserInfo, setBrowserInfo] = useState({
    browser: "Unknown",
    os: "Unknown",
    language: "Unknown",
    timezone: "Unknown",
    gpu: "Unknown"
  });
  
  const [position, setPosition] = useState({ top, left });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    setPosition({ top, left });
  }, [top, left]);

  useEffect(() => {
    // Fetch IP Data with fallback
    fetch('https://ipapi.co/json/')
      .then(res => {
        if (!res.ok) throw new Error('Rate limited');
        return res.json();
      })
      .then(data => {
        if (data.ip) {
          setIpData({ ip: data.ip, isp: data.org || data.network || "Unknown ISP" });
        }
      })
      .catch(() => {
        // Fallback to ipify if ipapi.co blocks us or rate limits
        fetch('https://api.ipify.org?format=json')
          .then(res => res.json())
          .then(data => {
            if (data.ip) setIpData({ ip: data.ip, isp: "Unknown ISP" });
          })
          .catch(() => setIpData({ ip: "Encrypted", isp: "" }));
      });

    // Extract Browser Info
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Edg")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";
    
    // Brave disguises itself as Chrome for privacy, but we can detect it using its custom API
    if (navigator.brave && navigator.brave.isBrave) {
      navigator.brave.isBrave().then(isBrave => {
        if (isBrave) {
          setBrowserInfo(prev => ({ ...prev, browser: "Brave" }));
        }
      });
    }
    
    let os = "Unknown OS";
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("like Mac")) os = "iOS";

    // GPU Detection via WebGL
    let gpu = "Unknown GPU";
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          // Clean up common ugly strings (e.g. "ANGLE (NVIDIA, NVIDIA GeForce RTX 3070 Ti Laptop GPU (0x00002F58) Direct3D11 vs_5_0 ps_5_0, D3D11)")
          gpu = gpu.replace(/ANGLE \([^,]+, /, ''); // Removes "ANGLE (Vendor, "
          gpu = gpu.replace(/ \([^)]+\) Direct3D.*/, ''); // Removes " (0x...) Direct3D..."
          gpu = gpu.replace(/ Direct3D.*/, ''); // Removes " Direct3D..."
          gpu = gpu.replace(/, or similar.*/, '');
          gpu = gpu.trim();
        }
      }
    } catch (e) {}

    setBrowserInfo({
      browser,
      os,
      language: navigator.language || "Unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      gpu
    });
  }, []);

  // Dragging logic
  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;
    
    let startX, startY;
    
    const handleMouseDown = (e) => {
      setIsDragging(true);
      startX = e.clientX;
      startY = e.clientY;
      e.stopPropagation();
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      setPosition(prev => {
        const currentTop = parseFloat(prev.top);
        const currentLeft = parseFloat(prev.left);
        
        const percentX = (dx / window.innerWidth) * 100;
        const percentY = (dy / window.innerHeight) * 100;
        
        return {
          top: `${currentTop + percentY}%`,
          left: `${currentLeft + percentX}%`
        };
      });
      
      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    el.addEventListener('mousedown', handleMouseDown);
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={dragRef}
      className={`absolute cursor-move select-none z-10 transition-transform ${isDragging ? 'scale-105 z-50' : 'hover:scale-105'} group`}
      style={{ top: position.top, left: position.left, transform: `rotate(${rotate}deg)` }}
    >
      <div className="bg-surface/90 border border-on-surface-variant/30 rounded-lg p-3 shadow-xl backdrop-blur-md min-w-[240px] max-w-[280px] font-mono text-[11px] relative overflow-hidden">
        {/* Terminal top bar */}
        <div className="flex items-center gap-1.5 mb-2 border-b border-on-surface-variant/20 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          <span className="ml-2 font-bold text-[9px] text-on-surface-variant tracking-widest uppercase opacity-70">Footprint.log</span>
        </div>
        
        <div className="text-primary font-bold mb-2 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          Warning: Footprint Left
        </div>
        
        <div className="space-y-1 text-on-surface-variant/90 text-[10px]">
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-0.5 items-center">
            <span className="opacity-70">IP Address:</span>
            <span className="text-red-500 font-bold bg-red-500/10 px-1 py-0.5 rounded">{ipData.ip}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-0.5">
            <span className="opacity-70">Browser:</span>
            <span className="text-on-surface truncate max-w-[100px] text-right">{browserInfo.browser}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-0.5">
            <span className="opacity-70">Device:</span>
            <span className="text-on-surface truncate max-w-[100px] text-right">{browserInfo.os}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-0.5 items-start">
            <span className="opacity-70 mt-0.5">GPU:</span>
            <span className="text-on-surface max-w-[140px] text-right text-[9px] leading-tight" title={browserInfo.gpu}>{browserInfo.gpu}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-0.5">
            <span className="opacity-70">Lang:</span>
            <span className="text-on-surface truncate max-w-[100px] text-right">{browserInfo.language}</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-70">Timezone:</span>
            <span className="text-on-surface truncate max-w-[120px] text-right" title={browserInfo.timezone}>{browserInfo.timezone}</span>
          </div>
        </div>
        
        <div className="mt-2 pt-1.5 border-t border-on-surface-variant/20 text-[8px] text-on-surface-variant/60 text-center uppercase tracking-wider leading-tight">
          <span className="block mt-1 font-bold text-red-500/80 bg-red-500/5 p-1 rounded">*Disclaimer: Not collected or saved. Stays locally in browser.*</span>
        </div>
        
        {/* Glitch overlay effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  );
}
