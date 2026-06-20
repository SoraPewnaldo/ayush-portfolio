import React, { useState, useEffect, useRef } from 'react';

export default function DigitalFootprint({ top = '45%', left = '12%', rotate = -3 }) {
  const [ipData, setIpData] = useState({ ip: "Locating...", isp: "" });
  const [browserInfo, setBrowserInfo] = useState({
    browser: "Unknown",
    os: "Unknown",
    language: "Unknown",
    timezone: "Unknown"
  });
  
  const [position, setPosition] = useState({ top, left });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    // Fetch IP Data
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.ip) {
          setIpData({ ip: data.ip, isp: data.org || data.network || "Unknown ISP" });
        }
      })
      .catch(() => setIpData({ ip: "Encrypted", isp: "" }));

    // Extract Browser Info
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Edg")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";
    
    let os = "Unknown OS";
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("like Mac")) os = "iOS";

    setBrowserInfo({
      browser,
      os,
      language: navigator.language || "Unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown"
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
      <div className="bg-surface/90 border border-on-surface-variant/30 rounded-lg p-4 shadow-xl backdrop-blur-md min-w-[260px] font-mono text-sm relative overflow-hidden">
        {/* Terminal top bar */}
        <div className="flex items-center gap-2 mb-3 border-b border-on-surface-variant/20 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 font-bold text-[10px] text-on-surface-variant tracking-widest uppercase opacity-70">Footprint.log</span>
        </div>
        
        <div className="text-primary font-bold mb-3 uppercase text-xs tracking-widest flex items-center gap-2">
          <svg className="w-4 h-4 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          Warning: Footprint Left
        </div>
        
        <div className="space-y-1.5 text-on-surface-variant/90 text-xs">
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-1 items-center">
            <span className="opacity-70">IP Address:</span>
            <span className="text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded">{ipData.ip}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-1">
            <span className="opacity-70">Browser:</span>
            <span className="text-on-surface">{browserInfo.browser}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-1">
            <span className="opacity-70">Device:</span>
            <span className="text-on-surface">{browserInfo.os}</span>
          </div>
          <div className="flex justify-between border-b border-on-surface-variant/10 pb-1">
            <span className="opacity-70">Language:</span>
            <span className="text-on-surface">{browserInfo.language}</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-70">Timezone:</span>
            <span className="text-on-surface truncate max-w-[120px]" title={browserInfo.timezone}>{browserInfo.timezone}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-2 border-t border-on-surface-variant/20 text-[9px] text-on-surface-variant/60 text-center uppercase tracking-widest leading-relaxed">
          This info is commonly visible to websites you visit.
        </div>
        
        {/* Glitch overlay effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  );
}
