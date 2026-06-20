import React from 'react';
import { Link } from 'react-router-dom';
import rangmanch from '../assets/rangmanch.jpeg';
import dance1 from '../assets/dance1.jpg';
import dance2 from '../assets/dance2.jpg';
import theatrePresence from '../assets/theatre_presence.jpg';
import stagePresence from '../assets/stage_presence.jpg';
import winners from '../assets/winners.jpg';
import publicSpeaking from '../assets/public_speaking.jpg';
import bharatMandapam from '../assets/bharat_mandapam.jpg';

export default function ExtracurricularPage() {
  return (
    <div className="text-on-surface antialiased min-h-screen pt-24 pb-32 relative z-10">
      <Link to="/" className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 border border-primary-container rounded-full text-primary-container font-body-md hover:bg-primary-container hover:text-white transition-all duration-300 active:scale-95 bg-surface/50 backdrop-blur-md z-50">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Desktop
      </Link>

      <main className="max-w-[1400px] mx-auto px-workspace-margin relative">
        {/* Header Section */}
        <header className="mb-24 mt-12 relative max-w-4xl">
          <svg className="absolute -top-12 -left-8 w-12 h-12 text-accent-sand animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
          </svg>
          <h1 className="text-6xl md:text-[135px] font-display-xl font-bold text-primary mb-8 leading-none tracking-tighter">
              Beyond the Screen
          </h1>
          <div className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed relative z-10 p-8 bg-surface-container-low rounded-xl shadow-sm border border-surface-variant" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")" }}>
            <p>
                "While technology is a major part of my journey, some of my most valuable experiences have come from activities beyond academics. Through theatre, dance, event management, and cultural competitions, I have developed confidence, creativity, teamwork, and leadership skills that continue to influence the way I approach challenges."
            </p>
            <div className="absolute -right-12 -bottom-6 transform rotate-6 font-handwriting text-2xl text-surface-tint opacity-80">
                The art of human connection
            </div>
          </div>
        </header>

        {/* Rangmanch NU & Theatre Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-object-gap">
            <div className="md:col-span-4 md:mt-24">
              <h2 className="text-5xl font-headline-lg font-bold text-primary mb-6 tracking-tight">Theatre</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                As the Secretary of Rangmanch NU, I managed and coordinated club activities and events, led team operations, and contributed to successful event planning and execution. Theatre has been a cornerstone of my creative expression and stage presence.
              </p>
              
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/30 mb-8">
                <h3 className="font-label-caps text-secondary mb-4">Secured Awards</h3>
                <ul className="space-y-3 font-caption text-on-surface-variant">
                  <li>🏆 <strong className="font-bold">1st Prize:</strong> Theatre Competition at GD Goenka University</li>
                  <li>🥈 <strong className="font-bold">2nd Prize:</strong> Nukkad Natak at MNIT, Jaipur</li>
                  <li>🥈 <strong className="font-bold">2nd Prize:</strong> Nukkad Natak at LNMIIT, Jaipur</li>
                  <li>🥈 <strong className="font-bold">2nd Prize:</strong> Nukkad Natak at BML Munjal University</li>
                </ul>
              </div>
            </div>

            {/* Bento Gallery */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:-rotate-2">
                  <div className="w-full h-48 bg-cover bg-center mb-4 bg-surface-variant transition-all duration-500" style={{ backgroundImage: `url(${theatrePresence})` }}></div>
                  <h3 className="font-headline-sm font-bold text-primary">Theatre Performances</h3>
                </div>

                {/* Card 2 */}
                <div className="bg-surface-container-low p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:rotate-3">
                  <div className="w-full h-48 bg-cover bg-center mb-4 bg-surface-variant" style={{ backgroundImage: `url(${rangmanch})` }}></div>
                  <h3 className="font-headline-sm font-bold text-primary">Nukkad Natak</h3>
                </div>

                {/* Card 3 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:-rotate-3">
                  <div className="w-full h-48 bg-cover bg-center mb-4 bg-surface-variant transition-all duration-500" style={{ backgroundImage: `url(${stagePresence})` }}></div>
                  <h3 className="font-headline-sm font-bold text-primary">Stage Presence</h3>
                </div>

                {/* Card 4 (Sticky Note Style) */}
                <div className="bg-accent-sand/20 backdrop-blur-sm p-6 shadow-sm transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 flex flex-col justify-center rounded lg:rotate-6 min-h-[160px]">
                  <h3 className="font-headline-md text-primary mb-2">Club Secretary</h3>
                  <p className="font-handwriting text-xl text-secondary">Organizing the chaos.</p>
                </div>

                {/* Card 5 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:-rotate-1">
                  <div className="w-full h-48 bg-cover mb-4 bg-surface-variant" style={{ backgroundImage: `url(${winners})`, backgroundPosition: 'center 30%' }}></div>
                  <h3 className="font-body-lg text-primary font-bold">Team Leadership</h3>
                  <p className="font-caption text-on-surface-variant mt-1">Guiding the crew</p>
                </div>

                {/* Card 6 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:rotate-2">
                  <div className="w-full h-48 bg-cover bg-center mb-4 bg-surface-variant" style={{ backgroundImage: `url(${publicSpeaking})` }}></div>
                  <h3 className="font-body-lg text-primary font-bold">Public Speaking</h3>
                  <p className="font-caption text-on-surface-variant mt-1">Coordination &amp; anchor roles</p>
                </div>

                {/* Card 7 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 rounded lg:rotate-1 sm:col-span-2 lg:col-span-1">
                  <div className="w-full h-48 bg-cover bg-center mb-4 bg-surface-variant" style={{ backgroundImage: `url(${bharatMandapam})` }}></div>
                  <h3 className="font-body-lg text-primary font-bold">Bharat Mandapam</h3>
                  <p className="font-caption text-on-surface-variant mt-1">National Winners</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Dance Section */}
        <section className="mb-32 border-t border-surface-variant/40 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-object-gap">
            <div className="md:col-span-4 md:mt-12">
              <h2 className="text-5xl font-headline-lg font-bold text-primary mb-6 tracking-tight">Dance &amp; Rhythm</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                Dance has been a powerful outlet for artistic expression, discipline, and collaboration. Participating in competitive battles and group choreographies has refined my coordination, synchronization, and performance under pressure.
              </p>
              
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/30">
                <h3 className="font-label-caps text-secondary mb-4">Highlights</h3>
                <ul className="space-y-3 font-caption text-on-surface-variant">
                  <li className="flex items-start gap-2">✨ <span>Active participation in inter-university group choreographies.</span></li>
                  <li className="flex items-start gap-2">🏆 <span>Winner and finalist positions in high-energy group face-offs.</span></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Dance Card 1 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded lg:-rotate-1">
                  <div className="w-full h-64 bg-cover mb-4 rounded" style={{ backgroundImage: `url(${dance1})`, backgroundPosition: 'center 10%' }}></div>
                  <h3 className="font-headline-sm font-bold text-primary">Stage Choreography</h3>
                  <p className="font-caption text-on-surface-variant mt-1">Cultural fest showcases</p>
                </div>

                {/* Dance Card 2 */}
                <div className="bg-white-paper p-4 shadow-sm border border-surface-variant transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded lg:rotate-1">
                  <div className="w-full h-64 bg-cover mb-4 rounded" style={{ backgroundImage: `url(${dance2})`, backgroundPosition: 'center 15%' }}></div>
                  <h3 className="font-headline-sm font-bold text-primary">Group Synchronizations</h3>
                  <p className="font-caption text-on-surface-variant mt-1">Inter-college battles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Sentiment */}
        <section className="max-w-3xl mx-auto text-center mt-32 mb-24 relative">
          <svg className="absolute -top-10 right-10 w-8 h-8 text-accent-sand opacity-60 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
          </svg>
          <p className="font-headline-md text-primary leading-relaxed italic">
              "These experiences remind me that growth happens not only through code and research, but also through creativity, collaboration, and human connection."
          </p>
          <div className="mt-8 font-handwriting text-2xl text-secondary">
              — Moments on stage
          </div>
        </section>
      </main>
    </div>
  );
}
