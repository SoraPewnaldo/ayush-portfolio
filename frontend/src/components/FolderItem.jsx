import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FolderItem({ label, top, left, rotate, path, w, h, iconProps, peekItems = [] }) {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top, left });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    const el = dragRef.current;
    if (!el) return;
    
    let startX, startY;
    let didMove = false;
    
    const handleMouseDown = (e) => {
      setIsDragging(true);
      didMove = false;
      startX = e.clientX - el.offsetLeft;
      startY = e.clientY - el.offsetTop;
      el.style.zIndex = 200;
      el.style.transition = 'none';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      didMove = true;
      el.style.left = `${e.clientX - startX}px`;
      el.style.top = `${e.clientY - startY}px`;
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        el.style.zIndex = '';
        el.style.transition = '';
      }
    };

    const handleClick = (e) => {
      if (!didMove) {
        navigate(path);
      }
    };

    el.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('click', handleClick);

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      el.removeEventListener('click', handleClick);
    };
  }, [isDragging, navigate, path]);

  return (
    <div 
      ref={dragRef}
      className="folder-wrapper cursor-pointer flex flex-col items-center group cursor-target" 
      style={{ top, left, transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative pointer-events-none">
        <svg className={`folder-icon text-folder-cyan ${w} ${h}`} fill="currentColor" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" {...iconProps}>
          <path className="folder-back opacity-80" d="M0 10C0 4.47715 4.47715 0 10 0H35.5C38.1523 0 40.6957 1.05357 42.5711 2.92893L47.0711 7.42893C48.9464 9.3043 51.4898 10.3579 54.1421 10.3579H90C95.5228 10.3579 100 14.835 100 20.3579V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V10Z"></path>
          <path className="folder-front" d="M0 25C0 19.4772 4.47715 15 10 15H90C95.5228 15 100 19.4772 100 25V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V25Z"></path>
        </svg>
        <div className="folder-peek absolute -top-16 left-1/2 -translate-x-1/2 bg-surface-container-high border border-outline-variant px-3 py-2 rounded-xl shadow-xl min-w-[120px] z-50">
          <ul className="text-[10px] font-label-caps text-on-surface-variant flex flex-col gap-0.5">
            {peekItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-primary"></span> {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className={`font-label-caps text-label-caps text-on-surface mt-2 text-center pointer-events-none ${w}`}>{label}</span>
    </div>
  );
}
