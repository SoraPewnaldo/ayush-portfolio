import React from 'react';
import { Link } from 'react-router-dom';

export default function FreelancePage() {
  return (
    <div className="text-[#5B2E2A] min-h-screen relative pt-12 pb-32 z-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png"), radial-gradient(#d6c2c0 1px, transparent 1px)', backgroundSize: 'auto, 20px 20px' }}>
      <Link to="/" className="fixed top-8 right-8 flex items-center gap-2 px-4 py-2 border border-[#5b2e2a] rounded-full text-[#5b2e2a] font-body-md hover:bg-[#5b2e2a] hover:text-white transition-all duration-300 active:scale-95 bg-surface/50 backdrop-blur-md z-50">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Desktop
      </Link>

      <main className="max-w-[1440px] mx-auto px-workspace-margin py-object-gap space-y-24">
        {/* Hero Section */}
        <section className="relative pt-16 flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-4xl space-y-8 z-10">
            <div className="space-y-2">
              <span className="font-label-caps text-[#8A6A63] uppercase tracking-widest text-sm block">CREATIVE DIRECTORY // 002</span>
              <h1 className="text-6xl md:text-[120px] font-display-xl font-bold text-primary leading-none tracking-tighter">
                Freelance <span className="italic text-[#8A6A63] font-light">Profile</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Services & Offerings (Bento Grid Style) */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-[#5B2E2A]/10 pb-4">
            <h2 className="font-headline-lg italic">Services &amp; Expertise</h2>
            <div className="text-right hidden md:block">
              <p className="font-label-caps text-[#8A6A63]">EXPERTISE // 001</p>
              <p className="font-handwriting text-[#8A6A63] text-xl">Crafting digital experiences</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Card: Video Editing */}
            <div className="lg:col-span-6 bg-white-paper p-8 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-label-caps text-[#8A6A63] text-xs">MULTIMEDIA CREATION</span>
                  <h3 className="text-4xl font-headline-md font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8A6A63]">movie</span> Video Editing
                  </h3>
                </div>
              </div>
              
              <p className="font-body-md text-[#5B2E2A]/80">
                My editing approach focuses on storytelling, pacing, audience retention, and visual quality. I aim to create content that feels engaging, polished, and professional while maintaining the original purpose and emotion of the project.
              </p>

              <div>
                <a 
                  href="https://drive.google.com/drive/folders/1Rvsq8y9H4czzUPHcUHv0tqrnbtfF5f-w?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-label-caps text-xs hover:bg-[#5B2E2A] transition-all duration-300 shadow-sm active:scale-95 hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  View Video Editing Work Samples
                </a>
              </div>

              <div>
                <h4 className="font-label-caps text-xs text-[#8A6A63] mb-3">SERVICES OFFERED</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Cinematic Video Editing', 'Wedding Highlights', 'Event Recaps', 
                    'Promotional Videos', 'Instagram Reels', 'Short Form Content', 
                    'YouTube Videos', 'Motion Graphics', 'Social Media Videos'
                  ].map(service => (
                    <span key={service} className="px-3 py-1 bg-accent-sand/10 border border-accent-sand/20 rounded-full text-xs font-body-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#5B2E2A]/10">
                <div>
                  <h4 className="font-label-caps text-[10px] text-[#8A6A63] mb-1">TOOLS</h4>
                  <p className="font-body-sm text-[#5B2E2A]/90">Premiere Pro, After Effects, Photoshop, Blender (Learning)</p>
                </div>
                <div>
                  <h4 className="font-label-caps text-[10px] text-[#8A6A63] mb-1">KEY FOCUS AREAS</h4>
                  <p className="font-body-sm text-[#5B2E2A]/90">Color Correction, Audio Sync, Dynamic Transitions, Platform Optimization</p>
                </div>
              </div>
            </div>

            {/* Right Card: Digital Design */}
            <div className="lg:col-span-6 bg-white-paper p-8 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-label-caps text-[#8A6A63] text-xs">VISUAL BRANDING</span>
                  <h3 className="text-4xl font-headline-md font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8A6A63]">brush</span> Digital Design
                  </h3>
                </div>
              </div>

              <p className="font-body-md text-[#5B2E2A]/80">
                Good design is not simply about aesthetics. It is about communicating a message clearly, creating a strong visual identity, and delivering an experience that audiences remember. Every project begins with understanding the objective.
              </p>

              <div>
                <h4 className="font-label-caps text-xs text-[#8A6A63] mb-3">SERVICES OFFERED</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Event Branding', 'Poster Design', 'Social Media Creatives', 
                    'Instagram Grid Design', 'Promotional Campaign Design', 
                    'Marketing Assets', 'Digital Advertisements', 'Event Visual Identity'
                  ].map(service => (
                    <span key={service} className="px-3 py-1 bg-[#5B2E2A]/5 border border-[#5B2E2A]/10 rounded-full text-xs font-body-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#5B2E2A]/10">
                <h4 className="font-label-caps text-[10px] text-[#8A6A63] mb-1">DESIGN PHILOSOPHY</h4>
                <p className="font-body-sm italic text-[#5B2E2A]/90">
                  Translating clear goals into visuals that are purposeful, engaging, and highly effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline & Selected Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-headline-md italic border-b border-[#5B2E2A]/10 pb-4">Professional Roles</h2>
            
            <div className="space-y-8">
              {/* Role 1 */}
              <div className="bg-white-paper p-6 rounded-xl border border-[#5B2E2A]/5 relative transform lg:-rotate-1 transition-transform hover:rotate-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold">Digital Design Lead</h3>
                    <p className="font-body-sm text-[#8A6A63] italic">siNUsoid — University Tech Fest</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-accent-sand/20 rounded font-label-caps">Lead Role</span>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside font-body-md text-[#5B2E2A]/80">
                  <li>Created high-impact promotional graphics and digital creatives for outreach</li>
                  <li>Designed consistent event branding assets and visual identity guidelines</li>
                  <li>Developed social media campaigns and managed visual consistency across platforms</li>
                  <li>Contributed directly to overall digital marketing strategy and campaigns</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="bg-white-paper p-6 rounded-xl border border-[#5B2E2A]/5 relative transform lg:rotate-1 transition-transform hover:rotate-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-sm text-lg font-bold">Digital Design Lead</h3>
                    <p className="font-body-sm text-[#8A6A63] italic">ingeNUity — University Cultural Fest</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-[#5B2E2A]/10 rounded font-label-caps">Lead Role</span>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside font-body-md text-[#5B2E2A]/80">
                  <li>Created and curated event promotional materials and branding assets</li>
                  <li>Designed custom social media campaigns and aesthetic Instagram grid layouts</li>
                  <li>Produced digital creatives targeted to boost outreach and user engagement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Highlights & Creative Skills */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-headline-md italic border-b border-[#5B2E2A]/10 pb-4">Selected Highlights</h2>
            <div className="p-6 rounded-xl bg-accent-sand/10 border border-accent-sand/30 space-y-4">
              <ul className="space-y-3">
                {[
                  'Managed branding and visual communication for major fests (siNUsoid & ingeNUity)',
                  'Designed comprehensive promotional campaigns and social media assets',
                  'Created event posters and digital marketing materials for student initiatives',
                  'Produced video content, animations, and creative media from concept to delivery'
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body-sm text-[#5B2E2A]/90">
                    <span className="material-symbols-outlined text-accent-sand text-lg mt-0.5">verified</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-headline-md italic border-b border-[#5B2E2A]/10 pb-4">Creative Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white-paper p-4 rounded-xl border border-[#5B2E2A]/5">
                <h4 className="font-label-caps text-xs text-[#8A6A63] mb-2">DESIGN</h4>
                <ul className="space-y-1 font-body-sm text-[#5B2E2A]/80">
                  <li>• Visual Communication</li>
                  <li>• Branding &amp; Identity</li>
                  <li>• Layout &amp; Typography</li>
                  <li>• Content &amp; Marketing</li>
                </ul>
              </div>
              <div className="bg-white-paper p-4 rounded-xl border border-[#5B2E2A]/5">
                <h4 className="font-label-caps text-xs text-[#8A6A63] mb-2">VIDEO PRODUCTION</h4>
                <ul className="space-y-1 font-body-sm text-[#5B2E2A]/80">
                  <li>• Cinematic Editing</li>
                  <li>• Motion Graphics</li>
                  <li>• Audio Sync &amp; Edit</li>
                  <li>• Color Correction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Portfolio Grid */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-[#5B2E2A]/10 pb-4">
            <h2 className="font-headline-lg italic">Creative Portfolio</h2>
            <div className="text-right">
              <p className="font-label-caps text-[#8A6A63]">WORK CATEGORIES</p>
              <p className="font-handwriting text-[#8A6A63] text-xl">Selected mediums &amp; campaigns</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white-paper p-6 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-[#8A6A63] text-3xl">auto_awesome</span>
              <h3 className="font-headline-sm font-bold">Event Branding</h3>
              <p className="font-body-sm text-[#5B2E2A]/80">
                Festival branding guidelines, visual identity systems, and unified marketing materials.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white-paper p-6 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-[#8A6A63] text-3xl">article</span>
              <h3 className="font-headline-sm font-bold">Poster Design</h3>
              <p className="font-body-sm text-[#5B2E2A]/80">
                Promotional materials, typography fusions, and visual messaging for university and cultural programs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white-paper p-6 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-[#8A6A63] text-3xl">campaign</span>
              <h3 className="font-headline-sm font-bold">Social Campaigns</h3>
              <p className="font-body-sm text-[#5B2E2A]/80">
                Instagram grid layouts, stories templates, and coordinated announcements for event launches.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white-paper p-6 rounded-2xl border border-[#5B2E2A]/5 shadow-sm space-y-4 hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-[#8A6A63] text-3xl">movie_filter</span>
              <h3 className="font-headline-sm font-bold">Cinematic Highlights</h3>
              <p className="font-body-sm text-[#5B2E2A]/80">
                Wedding highlights, event recaps, promotional trailers, and cinematic video stories.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
