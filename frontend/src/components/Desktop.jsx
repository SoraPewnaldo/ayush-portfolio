import React, { useState, useEffect } from 'react';
import FolderItem from './FolderItem';
import hiGif from '../assets/Hi.gif';
import heckerGif from '../assets/Hecker.gif';
import scubaGif from '../assets/Scuba.gif';
import businessGif from '../assets/bussiness.gif';
import sillyGif from '../assets/silly.gif';

import jobApplicationGif from '../assets/job-application.gif';

export default function Desktop() {
  const resumeUrl = "/Ayush Dakwal Resume.pdf";
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalData, setTerminalData] = useState({
    ip: 'Sniffing...',
    city: 'Detecting...',
    region: 'Locating...',
    country: 'Scanning...',
    isp: 'Tracing...'
  });

  useEffect(() => {
    if (showTerminal) {
      setTerminalData({
        ip: 'Sniffing...',
        city: 'Detecting...',
        region: 'Locating...',
        country: 'Scanning...',
        isp: 'Tracing...'
      });
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          setTerminalData({
            ip: data.ip || 'Unknown',
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            country: data.country_name || 'Unknown',
            isp: data.org || 'Unknown'
          });
        })
        .catch(err => {
          console.error(err);
          setTerminalData({
            ip: '127.0.0.1',
            city: 'Local Host',
            region: 'Loopback',
            country: 'Intranet',
            isp: 'Offline/Blocked'
          });
        });
    }
  }, [showTerminal]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0">
        
        {/* Cute Hi + Image section */}
        <div className="absolute -top-32 -left-32 flex flex-col items-center transform -rotate-12 z-10">
           <div className="relative w-full flex justify-start pl-4">
             <span className="font-handwriting text-5xl text-accent-sand">Hi!</span>
             <svg width="60" height="80" viewBox="0 0 100 120" fill="none" className="absolute left-16 top-4 overflow-visible">
                <path d="M 10 20 Q 80 20 80 60 Q 80 90 30 90" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-accent-sand"/>
                <path d="M 45 75 L 30 90 L 45 105" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-accent-sand"/>
             </svg>
           </div>
           <img src={hiGif} alt="Hi gif" className="w-28 h-28 object-contain mt-8 mr-12 animate-[float_4s_ease-in-out_infinite] drop-shadow-lg" />
         </div>

        <h1 className="font-display-xl text-display-xl text-primary flex flex-col items-center relative z-20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-default drop-shadow-sm hover:drop-shadow-xl">
          <div className="flex items-center gap-4" style={{ marginBottom: '-10px' }}>
            <span className="italic text-on-surface-variant opacity-80 transition-colors hover:text-primary" style={{ fontSize: '0.6em', lineHeight: '0.8' }}>ayush</span>
            <img src={sillyGif} alt="Silly gif" className="w-16 h-16 object-contain animate-[float_3s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-12" />
          </div>
          <span className="font-bold tracking-tighter transition-colors hover:text-on-surface-variant" style={{ fontSize: '1.5em', lineHeight: '0.8' }}>portfolio</span>
        </h1>
      </div>

      <div className="absolute inset-0 pointer-events-auto p-workspace-margin overflow-visible">
        <FolderItem 
          label="About Me" 
          top="12%" left="15%" rotate={-4} w="w-24" h="h-20" path="/folder/about"
          peekItems={['Bio', 'Journey']}
        />
        <FolderItem 
          label="Academic Profile" 
          top="18%" left="72%" rotate={5} w="w-28" h="h-22" path="/folder/academic"
          peekItems={['Research', 'Courses', 'Publications']}
        />
        <FolderItem 
          label="Freelance Profile" 
          top="68%" left="15%" rotate={-7} w="w-28" h="h-22" path="/folder/freelance"
          peekItems={['Client Projects', 'Services']}
        />
        <FolderItem 
          label="Extracurricular profile" 
          top="72%" left="68%" rotate={4} w="w-32" h="h-22" path="/folder/extracurricular"
          peekItems={['Leadership', 'Sports', 'Clubs']}
        />
 
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="scattered-item cursor-pointer flex flex-col items-center select-none z-10" style={{ top: '48%', left: '80%', transform: 'rotate(-5deg)' }}>
          <img src={jobApplicationGif} alt="Resume/Job Application" className="w-20 h-20 object-contain drop-shadow-md transition-transform hover:scale-110" />
          <span className="font-label-caps text-label-caps text-on-surface mt-2 text-center w-24">resume.pdf</span>
        </a>

        {/* Clickable Hecker GIF for cybersecurity doxxing gimmick */}
        <div 
          onClick={() => setShowTerminal(true)}
          className="scattered-item w-24 flex flex-col items-center pointer-events-auto cursor-pointer group"
          style={{ top: '22%', left: '84%', transform: 'rotate(-12deg)' }}
        >
          <div className="absolute -top-10 bg-slate-950 text-emerald-400 font-mono text-[10px] px-2 py-1 rounded border border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-30">
            dox_visitor.sh
          </div>
          <img src={heckerGif} alt="Hecker gif" className="w-24 h-24 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
          <span className="font-mono text-[10px] text-on-surface opacity-60 mt-1 select-none group-hover:opacity-100 group-hover:text-emerald-600 transition-colors">hecker.sh</span>
        </div>

        <img src={scubaGif} alt="Scuba gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_7s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:-rotate-12" style={{ top: '82%', left: '60%', transform: 'rotate(5deg)' }} />
        <img src={businessGif} alt="Business gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_8s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ top: '25%', left: '10%', transform: 'rotate(-8deg)' }} />
      </div>

      {/* Doxxed terminal panel */}
      {showTerminal && (
        <div className="fixed bottom-6 right-6 w-96 h-80 bg-slate-950 border-2 border-slate-800 rounded-lg shadow-2xl flex flex-col overflow-hidden z-50 font-mono text-sm text-emerald-400 pointer-events-auto select-text">
          {/* Terminal Header */}
          <div className="h-8 bg-slate-900 border-b border-slate-850 flex items-center justify-between px-3 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setShowTerminal(false)}></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-slate-400 text-xs font-semibold">dox_visitor.sh</span>
            <button 
              onClick={() => setShowTerminal(false)} 
              className="text-slate-400 hover:text-white transition-colors text-xs font-bold px-1"
            >
              ✕
            </button>
          </div>
          {/* Terminal Body */}
          <div className="flex-grow p-4 space-y-2 overflow-y-auto leading-relaxed">
            <div>
              <span className="text-purple-400">hecker@sorapew.tech</span>:<span className="text-blue-400">~</span>$ ./dox_visitor.sh
            </div>
            <div className="text-slate-400 animate-[pulse_1.5s_infinite]">
              [~] Sniffing network packets...
            </div>
            <div className="space-y-1 mt-2">
              <div><span className="text-slate-500">[+]</span> IP ADDRESS: <span className="text-yellow-300 font-bold">{terminalData.ip}</span></div>
              <div><span className="text-slate-500">[+]</span> CITY: <span className="text-white">{terminalData.city}</span></div>
              <div><span className="text-slate-500">[+]</span> REGION: <span className="text-white">{terminalData.region}</span></div>
              <div><span className="text-slate-500">[+]</span> COUNTRY: <span className="text-white">{terminalData.country}</span></div>
              <div><span className="text-slate-500">[+]</span> ISP: <span className="text-white">{terminalData.isp}</span></div>
            </div>
            <div className="text-amber-400 font-bold mt-3">
              [!] Target successfully doxxed! 😉
            </div>
            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-900 mt-4 leading-normal">
              * No data is logged to any server. This is a purely client-side cybersecurity demonstration stunt.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
