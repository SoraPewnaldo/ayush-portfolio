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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-auto overflow-hidden">
        
        {/* Centered Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2" style={{ marginBottom: '-5px' }}>
              <span className="italic text-on-surface-variant opacity-80 font-display text-xl">ayush</span>
              <img src={sillyGif} alt="Silly gif" className="w-10 h-10 object-contain animate-[float_3s_ease-in-out_infinite]" />
            </div>
            <span className="font-bold tracking-tighter text-4xl text-primary font-display-xl">portfolio</span>
          </div>
        </div>

        {/* Scattered Folders & Items with custom mobile coordinates */}
        <FolderItem 
          label="About Me" 
          top="14%" left="8%" rotate={-6} w="w-24" h="h-20" path="/folder/about"
          peekItems={['Bio', 'Journey']}
        />
        <FolderItem 
          label="Academic" 
          top="20%" left="60%" rotate={5} w="w-28" h="h-22" path="/folder/academic"
          peekItems={['Research', 'Courses', 'Publications']}
        />
        <FolderItem 
          label="Freelance" 
          top="70%" left="8%" rotate={-7} w="w-28" h="h-22" path="/folder/freelance"
          peekItems={['Client Projects', 'Services']}
        />
        <FolderItem 
          label="Extracurricular" 
          top="74%" left="56%" rotate={4} w="w-32" h="h-22" path="/folder/extracurricular"
          peekItems={['Leadership', 'Sports', 'Clubs']}
        />

        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="scattered-item cursor-pointer flex flex-col items-center select-none z-10" style={{ top: '46%', left: '66%', transform: 'rotate(-5deg)' }}>
          <img src={jobApplicationGif} alt="Resume/Job Application" className="w-16 h-16 object-contain drop-shadow-md transition-transform active:scale-95" />
          <span className="font-label-caps text-label-caps text-on-surface mt-2 text-center w-24">resume.pdf</span>
        </a>

        {/* Scattered Decorative GIFs (Smaller for Mobile) */}
        <img src={heckerGif} alt="Hecker gif" className="scattered-item w-16 h-16 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_6s_ease-in-out_infinite]" style={{ top: '38%', left: '8%', transform: 'rotate(-12deg)' }} />
        <img src={scubaGif} alt="Scuba gif" className="scattered-item w-16 h-16 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_7s_ease-in-out_infinite]" style={{ top: '88%', left: '38%', transform: 'rotate(5deg)' }} />
        <img src={businessGif} alt="Business gif" className="scattered-item w-18 h-18 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_8s_ease-in-out_infinite]" style={{ top: '4%', left: '44%', transform: 'rotate(-8deg)' }} />
      </div>
    );
  }

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

        {/* Scattered Decorative GIFs */}
        <img src={heckerGif} alt="Hecker gif" className="scattered-item w-24 h-24 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_6s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-6" style={{ top: '22%', left: '84%', transform: 'rotate(-12deg)' }} />
        <img src={scubaGif} alt="Scuba gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_7s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:-rotate-12" style={{ top: '82%', left: '60%', transform: 'rotate(5deg)' }} />
        <img src={businessGif} alt="Business gif" className="scattered-item w-28 h-28 object-contain pointer-events-auto cursor-pointer drop-shadow-md animate-[float_8s_ease-in-out_infinite] transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ top: '25%', left: '10%', transform: 'rotate(-8deg)' }} />
      </div>
    </>
  );
}
