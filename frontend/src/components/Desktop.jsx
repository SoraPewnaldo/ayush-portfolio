import React, { useState, useEffect } from 'react';
import FolderItem from './FolderItem';
import hiGif from '../assets/Hi.gif';
import heckerGif from '../assets/Hecker.gif';
import scubaGif from '../assets/Scuba.gif';
import businessGif from '../assets/bussiness.gif';
import sillyGif from '../assets/silly.gif';

import jobApplicationGif from '../assets/job-application.gif';
import DigitalFootprint from './DigitalFootprint';

export default function Desktop() {
  const resumeUrl = "/Ayush Dakwal CV.pdf";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ─── MOBILE LAYOUT ────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="flex flex-col items-center min-h-screen pt-10 pb-16 px-4 w-full overflow-x-hidden">
        {/* Title */}
        <div className="text-center mb-10 pointer-events-none select-none">
          <h1 className="font-display-xl text-primary flex flex-col items-center leading-none">
            <span className="italic text-on-surface-variant opacity-80" style={{ fontSize: '2rem' }}>ayush</span>
            <span className="font-bold tracking-tighter" style={{ fontSize: '4.5rem', lineHeight: '1' }}>portfolio</span>
          </h1>
          {/* Terminal Block */}
          <div className="mt-6 pointer-events-auto select-text flex flex-col w-full max-w-[320px] text-left bg-surface/90 border border-on-surface-variant/20 rounded-lg p-3.5 shadow-xl backdrop-blur-md font-mono text-[10.5px] leading-relaxed mx-auto">
            <div className="flex items-center gap-1.5 mb-2.5 border-b border-on-surface-variant/15 pb-2">
              <div className="w-2 h-2 rounded-full bg-[#E94A47] opacity-80"></div>
              <div className="w-2 h-2 rounded-full bg-[#E5BEB5] opacity-80"></div>
              <div className="w-2 h-2 rounded-full bg-[#9FD1BB] opacity-80"></div>
              <span className="ml-2 font-bold text-[8.5px] text-on-surface-variant/70 tracking-widest uppercase">whoami.sh</span>
            </div>
            
            <div className="space-y-1.5 text-on-surface-variant">
              <div>
                <span className="text-folder-cyan font-bold">ayush@portfolio</span>
                <span className="text-on-surface-variant">:</span>
                <span className="text-[#D6B48C]">~</span>
                <span className="text-primary font-bold">$</span> cat info.txt
              </div>
              <div className="text-primary font-bold text-xs pb-1 flex items-center justify-between">
                <span>Ayush Dakwal</span>
                <span className="text-[9px] text-secondary font-normal uppercase tracking-wider">NIIT University</span>
              </div>
              <div className="space-y-1 text-on-surface-variant/90 border-t border-on-surface-variant/10 pt-1.5">
                <div className="flex items-start gap-1">
                  <span className="text-primary font-bold">»</span>
                  <span>Aspiring SOC Analyst &amp; Penetration Tester</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-primary font-bold">»</span>
                  <span>Secretary @ Rangmanch NU (Theatre)</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-primary font-bold">»</span>
                  <span>Freelance Video Editor &amp; Graphic Designer</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-primary font-bold">»</span>
                  <span className="text-[10px] opacity-80">Python • Linux • Adobe Premiere Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Folder Grid */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-sm mb-8">
          {/* About Me */}
          <a href="/folder/about" className="flex flex-col items-center gap-2 group active:scale-95 transition-transform touch-manipulation">
            <svg className="folder-icon text-folder-cyan w-20 h-16" fill="currentColor" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
              <path className="folder-back opacity-80" d="M0 10C0 4.47715 4.47715 0 10 0H35.5C38.1523 0 40.6957 1.05357 42.5711 2.92893L47.0711 7.42893C48.9464 9.3043 51.4898 10.3579 54.1421 10.3579H90C95.5228 10.3579 100 14.835 100 20.3579V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V10Z"></path>
              <path className="folder-front" d="M0 25C0 19.4772 4.47715 15 10 15H90C95.5228 15 100 19.4772 100 25V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V25Z"></path>
            </svg>
            <span className="font-label-caps text-label-caps text-on-surface text-center w-20 text-xs">About Me</span>
          </a>

          {/* Academic Profile */}
          <a href="/folder/academic" className="flex flex-col items-center gap-2 group active:scale-95 transition-transform touch-manipulation">
            <svg className="folder-icon text-folder-cyan w-20 h-16" fill="currentColor" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
              <path className="folder-back opacity-80" d="M0 10C0 4.47715 4.47715 0 10 0H35.5C38.1523 0 40.6957 1.05357 42.5711 2.92893L47.0711 7.42893C48.9464 9.3043 51.4898 10.3579 54.1421 10.3579H90C95.5228 10.3579 100 14.835 100 20.3579V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V10Z"></path>
              <path className="folder-front" d="M0 25C0 19.4772 4.47715 15 10 15H90C95.5228 15 100 19.4772 100 25V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V25Z"></path>
            </svg>
            <span className="font-label-caps text-label-caps text-on-surface text-center w-20 text-xs">Academic</span>
          </a>

          {/* Freelance Profile */}
          <a href="/folder/freelance" className="flex flex-col items-center gap-2 group active:scale-95 transition-transform touch-manipulation">
            <svg className="folder-icon text-folder-cyan w-20 h-16" fill="currentColor" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
              <path className="folder-back opacity-80" d="M0 10C0 4.47715 4.47715 0 10 0H35.5C38.1523 0 40.6957 1.05357 42.5711 2.92893L47.0711 7.42893C48.9464 9.3043 51.4898 10.3579 54.1421 10.3579H90C95.5228 10.3579 100 14.835 100 20.3579V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V10Z"></path>
              <path className="folder-front" d="M0 25C0 19.4772 4.47715 15 10 15H90C95.5228 15 100 19.4772 100 25V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V25Z"></path>
            </svg>
            <span className="font-label-caps text-label-caps text-on-surface text-center w-20 text-xs">Freelance</span>
          </a>

          {/* Extracurricular */}
          <a href="/folder/extracurricular" className="flex flex-col items-center gap-2 group active:scale-95 transition-transform touch-manipulation">
            <svg className="folder-icon text-folder-cyan w-20 h-16" fill="currentColor" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
              <path className="folder-back opacity-80" d="M0 10C0 4.47715 4.47715 0 10 0H35.5C38.1523 0 40.6957 1.05357 42.5711 2.92893L47.0711 7.42893C48.9464 9.3043 51.4898 10.3579 54.1421 10.3579H90C95.5228 10.3579 100 14.835 100 20.3579V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V10Z"></path>
              <path className="folder-front" d="M0 25C0 19.4772 4.47715 15 10 15H90C95.5228 15 100 19.4772 100 25V70C100 75.5228 95.5228 80 90 80H10C4.47715 80 0 75.5228 0 70V25Z"></path>
            </svg>
            <span className="font-label-caps text-label-caps text-on-surface text-center w-20 text-xs">Extra&shy;curricular</span>
          </a>
        </div>

        {/* Resume Link */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 mb-10 active:scale-95 transition-transform touch-manipulation"
          style={{ minHeight: 44 }}
        >
          <img src={jobApplicationGif} alt="CV/Job Application" className="w-16 h-16 object-contain drop-shadow-md" />
          <span className="font-label-caps text-label-caps text-on-surface text-center text-xs">cv.pdf</span>
        </a>

        {/* Digital Footprint Card – in flow on mobile */}
        <div className="w-full max-w-sm">
          <DigitalFootprint top="auto" left="auto" rotate={-1} isMobileLayout />
        </div>
      </div>
    );
  }

  // ─── DESKTOP LAYOUT (unchanged except for intro) ───────────────────────────────
  return (
    <>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0`}>
        
        {/* Cute Hi + Image section */}
        <div className="absolute -top-18 -left-44 flex flex-col items-center transform -rotate-12 z-10">
           <div className="relative w-full flex justify-start pl-4">
             <span className="font-handwriting text-5xl text-accent-sand">Hi!</span>
             <svg width="60" height="80" viewBox="0 0 100 120" fill="none" className="absolute left-16 top-4 overflow-visible">
                <path d="M 10 20 Q 80 20 80 60 Q 80 90 30 90" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-accent-sand"/>
                <path d="M 45 75 L 30 90 L 45 105" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-accent-sand"/>
             </svg>
           </div>
           <img src={hiGif} alt="Hi gif" className="w-28 h-28 object-contain mt-8 mr-12 animate-[float_4s_ease-in-out_infinite] drop-shadow-lg" />
         </div>

        <h1 className={`font-display-xl text-primary flex flex-col items-center relative z-20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-default drop-shadow-sm hover:drop-shadow-xl text-display-xl`}>
          <div className="flex items-center gap-4" style={{ marginBottom: '-10px' }}>
            <span className="italic text-on-surface-variant opacity-80 transition-colors hover:text-primary" style={{ fontSize: '0.6em', lineHeight: '0.8' }}>ayush</span>
            <img src={sillyGif} alt="Silly gif" className="w-16 h-16 object-contain animate-[float_3s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-12" />
          </div>
          <span className="font-bold tracking-tighter transition-colors hover:text-on-surface-variant" style={{ fontSize: '1.5em', lineHeight: '0.8' }}>portfolio</span>
        </h1>

        {/* Terminal Block */}
        <div className="mt-6 pointer-events-auto select-text relative z-30 w-[320px] text-left animate-[float_5s_ease-in-out_infinite] bg-surface/90 border border-on-surface-variant/20 rounded-lg p-3.5 shadow-xl backdrop-blur-md font-mono text-[10.5px] leading-relaxed mx-auto">
          <div className="flex items-center gap-1.5 mb-2.5 border-b border-on-surface-variant/15 pb-2">
            <div className="w-2 h-2 rounded-full bg-[#E94A47] opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-[#E5BEB5] opacity-80"></div>
            <div className="w-2 h-2 rounded-full bg-[#9FD1BB] opacity-80"></div>
            <span className="ml-2 font-bold text-[8.5px] text-on-surface-variant/70 tracking-widest uppercase">whoami.sh</span>
          </div>
          
          <div className="space-y-1.5 text-on-surface-variant">
            <div>
              <span className="text-folder-cyan font-bold">ayush@portfolio</span>
              <span className="text-on-surface-variant">:</span>
              <span className="text-[#D6B48C]">~</span>
              <span className="text-primary font-bold">$</span> cat info.txt
            </div>
            <div className="text-primary font-bold text-xs pb-1 flex items-center justify-between">
              <span>Ayush Dakwal</span>
              <span className="text-[9px] text-secondary font-normal uppercase tracking-wider">NIIT University</span>
            </div>
            <div className="space-y-1 text-on-surface-variant/90 border-t border-on-surface-variant/10 pt-1.5">
              <div className="flex items-start gap-1">
                <span className="text-primary font-bold">»</span>
                <span>Aspiring SOC Analyst &amp; Penetration Tester</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-primary font-bold">»</span>
                <span>Secretary @ Rangmanch NU (Theatre)</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-primary font-bold">»</span>
                <span>Freelance Video Editor &amp; Graphic Designer</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-primary font-bold">»</span>
                <span className="text-[10px] opacity-80">Python • Linux • Adobe Premiere Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-auto p-workspace-margin overflow-visible">
        <FolderItem 
          label="About Me" 
          top="10%" left="30%" rotate={-4} w="w-24" h="h-20" path="/folder/about"
          peekItems={['Bio', 'Journey']}
        />
        <FolderItem 
          label="Academic Profile" 
          top="18%" left="72%" rotate={5} w="w-28" h="h-22" path="/folder/academic"
          peekItems={['Research', 'Courses', 'Publications']}
        />
        <FolderItem 
          label="Freelance Profile" 
          top="72%" left="12%" rotate={-7} w="w-28" h="h-22" path="/folder/freelance"
          peekItems={['Client Projects', 'Services']}
        />
        <FolderItem 
          label="Extracurricular profile" 
          top="72%" left="68%" rotate={4} w="w-32" h="h-22" path="/folder/extracurricular"
          peekItems={['Leadership', 'Sports', 'Clubs']}
        />
 
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="scattered-item cursor-pointer flex flex-col items-center select-none z-10" style={{ top: '48%', left: '80%', transform: 'rotate(-5deg)' }}>
          <img src={jobApplicationGif} alt="CV/Job Application" className="w-20 h-20 object-contain drop-shadow-md transition-transform hover:scale-110" />
          <span className="font-label-caps text-label-caps text-on-surface mt-2 text-center w-24">cv.pdf</span>
        </a>

        {/* Scattered Decorative GIFs */}
        <img src={heckerGif} alt="Hecker gif" className="scattered-item w-24 h-24 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_6s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-6" style={{ top: '22%', left: '84%', transform: 'rotate(-12deg)' }} />
        <img src={scubaGif} alt="Scuba gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_7s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:-rotate-12" style={{ top: '82%', left: '60%', transform: 'rotate(5deg)' }} />
        <img src={businessGif} alt="Business gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_8s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ top: '45%', left: '8%', transform: 'rotate(-8deg)' }} />
        
        {/* Digital Footprint Card */}
        <div style={{ transform: 'none', transformOrigin: 'top left', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
            <DigitalFootprint top="15%" left="5%" rotate={-2} />
          </div>
        </div>
      </div>
    </>
  );
}
