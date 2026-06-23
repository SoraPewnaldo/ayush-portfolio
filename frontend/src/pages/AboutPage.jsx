import React from 'react';
import { Link } from 'react-router-dom';
import shinchan from '../assets/shinchan.gif';
import Ayush from '../assets/Ayush.jpg';
import rangmanch from '../assets/rangmanch.jpeg';

export default function AboutPage() {
  return (
    <div className="text-primary font-body-md min-h-screen relative pb-16 pt-16 md:pb-32 md:pt-32 px-4 md:px-workspace-margin max-w-7xl mx-auto z-10 overflow-x-hidden">
      <Link to="/" className="relative md:absolute md:top-8 md:right-8 inline-flex mb-6 md:mb-0 items-center gap-2 px-4 py-2 border border-primary-container rounded-full text-primary-container font-body-md hover:bg-primary-container hover:text-white transition-all duration-300 active:scale-95 bg-surface/50 backdrop-blur-md z-50" style={{ minHeight: 44 }}>
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Desktop
      </Link>
      
      {/* Header */}
      <header className="mb-12 md:mb-24 relative z-10">
        <div className="flex items-end gap-4 mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-[135px] font-display-xl font-bold text-primary leading-none">About Me</h1>
          <img alt="Shinchan" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 hover:scale-110 transition-transform duration-300" src={shinchan}/>
        </div>
        <p className="font-body-lg text-secondary max-w-2xl mt-4">A B.Tech Computer Science student specializing in Cybersecurity, bridging the gap between digital defense, intelligent algorithms, and creative expression.</p>
      </header>
 
      {/* Content Canvas (Contextual Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left column: Intro & Skills */}
        <div className="lg:col-span-7 space-y-12">
          {/* Intro Card */}
          <div className="bg-white-paper p-8 rounded-lg shadow-folder transform lg:-rotate-1 transition-transform hover:rotate-0 duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-folder-cyan">person</span>
              <h2 className="font-headline-md text-headline-md">Introduction</h2>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              I am a Computer Science undergraduate at NIIT University with a strong focus on Cybersecurity and AI. Driven by a passion for solving complex digital challenges, my academic and project experiences span deep learning applications, forensic AI, and deepfake detection systems. I aim to contribute to the future of digital forensics and secure AI architectures, combining analytical rigor with technical expertise to build resilient, reliable software systems.
            </p>
            <div className="mt-6 w-full h-64 sm:h-96 md:h-[520px] rounded bg-surface-variant relative overflow-hidden group">
              <div className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${Ayush})`, backgroundPosition: 'center 50%' }}></div>
            </div>
          </div>
 
          {/* Focus Areas (Folders) */}
          <div className="bg-folder-cyan/20 p-8 rounded-lg border border-folder-cyan/50 shadow-folder relative transform lg:rotate-1 transition-transform hover:rotate-0 duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-tertiary">security</span>
              <h2 className="font-headline-md text-headline-md">Skills &amp; Toolkit</h2>
            </div>
            <div className="flex flex-wrap gap-2.5 font-caption">
              {/* Cybersecurity & Systems */}
              {[
                { name: 'Python', level: 'Intermediate', isCore: true },
                { name: 'Java', level: 'Intermediate', isCore: true },
                { name: 'Linux', level: 'Intermediate' },
                { name: 'Nmap', level: 'Intermediate' },
                { name: 'Ethical Hacking', level: 'Intermediate' },
                { name: 'Penetration Testing', level: 'Intermediate' },
                { name: 'Vulnerability Assessment', level: 'Intermediate' },
                { name: 'Network Security', level: 'Intermediate' },
                { name: 'Network Hardware', level: 'Intermediate' },
                { name: 'Networking', level: 'Intermediate' },
                { name: 'Cloud Security', level: 'Intermediate' },
                { name: 'Application Security', level: 'Intermediate' },
                { name: 'Antimalware', level: 'Intermediate' },
                { name: 'Access Control', level: 'Intermediate' },
                { name: 'Firewalls', level: 'Intermediate' },
                { name: 'Wireless & Mobile Security', level: 'Intermediate' },
              ].map(skill => (
                <span key={skill.name} className={`group relative px-4 py-2 bg-white-paper rounded-full border border-outline-variant/60 shadow-sm cursor-default ${skill.isCore ? 'font-semibold text-primary' : ''}`}>
                  {skill.name}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {skill.level}
                  </span>
                </span>
              ))}
              
              {/* Creative & Design */}
              {[
                { name: 'Graphic Design', level: 'Intermediate', isCore: true },
                { name: 'Video Editing', level: 'Intermediate', isCore: true },
                { name: 'Blender', level: 'Intermediate' },
                { name: 'Canva', level: 'Intermediate' },
                { name: 'Adobe Photoshop', level: 'Intermediate' },
                { name: 'Adobe Illustrator', level: 'Intermediate' },
                { name: 'Adobe Premiere Pro', level: 'Intermediate' },
                { name: 'After Effects', level: 'Intermediate' },
                { name: 'DaVinci Resolve', level: 'Intermediate' },
              ].map(skill => (
                <span key={skill.name} className={`group relative px-4 py-2 bg-white-paper rounded-full border border-outline-variant/60 shadow-sm cursor-default ${skill.isCore ? 'font-semibold text-secondary' : ''}`}>
                  {skill.name}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {skill.level}
                  </span>
                </span>
              ))}
            </div>
            <div className="absolute -bottom-8 -right-4 font-handwriting text-[#5B2E2A] text-xl -rotate-6">
                "Always learning..."
            </div>
          </div>
        </div>
 
        {/* Right column: Vitals & Beyond Tech */}
        <div className="lg:col-span-5 space-y-12 lg:pt-8">
          {/* Quick Facts (Sticky Notes) */}
          <div className="p-8 rounded relative shadow-sm transform lg:rotate-2 transition-transform hover:rotate-0 duration-300" style={{ backgroundColor: 'rgba(214, 180, 140, 0.25)', backdropFilter: 'blur(4px)', border: '1px solid rgba(214, 180, 140, 0.4)' }}>
            <svg 
              className="absolute -top-4 -right-4 w-10 h-10 drop-shadow-md select-none pointer-events-none transform rotate-[25deg]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 12C16 10.17 14.82 8.62 13 8.06V4H14C14.55 4 15 3.55 15 3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3C9 3.55 9.45 4 10 4H11V8.06C9.18 8.62 8 10.17 8 12C8 12.55 8.45 13 9 13H11V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V13H15C15.55 13 16 12.55 16 12Z" 
                fill="#E94A47"
              />
            </svg>
            <h3 className="font-label-caps text-label-caps text-primary-container mb-4 border-b border-primary-container/20 pb-2">Vitals</h3>
            <ul className="space-y-3 font-caption text-caption text-on-secondary-container">
              <li><strong className="font-bold">Name:</strong> Ayush Dakwal</li>
              <li><strong className="font-bold">Degree:</strong> B.Tech CSE (Cybersecurity)</li>
              <li><strong className="font-bold">University:</strong> NIIT University (2023-2027)</li>
              <li><strong className="font-bold">Current Focus:</strong> Cybersecurity</li>
            </ul>
          </div>
 
          {/* Theatre */}
          <div className="bg-white-paper p-8 rounded-lg shadow-folder transform lg:-rotate-1 transition-transform hover:rotate-0 duration-300">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-headline-md text-headline-md">Theatre</h2>
              <span className="material-symbols-outlined text-secondary">theater_comedy</span>
            </div>
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <p>Performance and stagecraft form a vital part of my journey. As the Secretary of Rangmanch NU, the official dramatics society of my university, I coordinate and direct theatrical productions, street plays (Nukkad Natak), and dramatic fests. Using theatre as a medium, I highlight critical social issues while building leadership, public speaking, and creative event coordination skills.</p>
              <div className="w-full h-48 rounded bg-cover bg-center mt-4" style={{ backgroundImage: `url(${rangmanch})` }}></div>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="bg-white-paper p-8 rounded-lg shadow-folder transform lg:rotate-1 transition-transform hover:rotate-0 duration-300">
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-headline-md text-headline-md">Graphic Design</h2>
              <span className="material-symbols-outlined text-secondary">palette</span>
            </div>
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <p>As a freelance creator, I develop brand identities, event designs, and multimedia campaigns. I balance composition, typography, and motion graphics to construct narratives that captivate audiences. Leveraging Photoshop, Illustrator, Premiere Pro, and Blender, I collaborate with teams to translate complex concepts into accessible visual systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
