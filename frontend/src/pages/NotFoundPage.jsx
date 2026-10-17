import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-20">
      <div className="bg-white-paper p-8 sm:p-12 rounded-xl shadow-2xl border-2 border-primary-container max-w-lg w-full text-center relative overflow-hidden">
        <div className="w-16 h-16 bg-red-500/10 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">warning</span>
        </div>
        
        <div className="font-mono text-xs uppercase tracking-widest text-secondary mb-2">
          Error: 0x800404_NOT_FOUND
        </div>
        
        <h1 className="font-display-xl text-5xl sm:text-6xl text-primary font-bold mb-4 leading-none">
          404
        </h1>
        
        <p className="font-headline-md text-lg text-primary font-semibold mb-2">
          Directory or File Missing
        </p>
        
        <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
          The file path you requested does not exist in this environment or was moved during system maintenance.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-body-md font-semibold rounded-full hover:bg-primary-container transition-all shadow-md active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">desktop_windows</span>
          Return to Desktop
        </Link>
      </div>
    </div>
  );
}
