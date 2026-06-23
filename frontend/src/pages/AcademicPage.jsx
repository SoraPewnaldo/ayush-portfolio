import React from 'react';
import { Link } from 'react-router-dom';
import academicBook from '../assets/academic_book.jpg';
import ciscoLogo from '../assets/cisco.png';

export default function AcademicPage() {
  return (
    <div className="font-body-md text-on-surface min-h-screen overflow-x-hidden pt-16 md:pt-32 pb-20 px-4 md:px-workspace-margin max-w-7xl mx-auto relative z-10">
      <Link to="/" className="relative md:absolute md:top-8 md:right-8 inline-flex mb-6 md:mb-0 items-center gap-2 px-4 py-2 border border-primary-container rounded-full text-primary-container font-body-md hover:bg-primary-container hover:text-white transition-all duration-300 active:scale-95 bg-surface/50 backdrop-blur-md z-50" style={{ minHeight: 44 }}>
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Desktop
      </Link>

      {/* Header Section */}
      <header className="mb-16 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-[135px] font-display-xl font-bold text-primary leading-none mb-6 tracking-tighter">
            Academic <br/> &amp; Research.
          </h1>
          <p className="font-body-lg text-secondary leading-relaxed mb-8 border-l-4 border-accent-sand pl-6 italic">
            "I am a Computer Science undergraduate specializing in Cybersecurity, developing secure systems and investigating how deep learning and forensic AI can enhance digital evidence integrity."
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="mailto:ayush.dakwal23@st.niituniversity.in" className="inline-flex items-center gap-1.5 text-sm bg-white-paper/60 px-4 py-2 border border-outline-variant rounded-full text-secondary hover:text-primary hover:bg-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">mail</span> ayush.dakwal23@st.niituniversity.in
            </a>
            <a href="https://www.linkedin.com/in/ayush-dakwal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-white-paper/60 px-4 py-2 border border-outline-variant rounded-full text-secondary hover:text-primary hover:bg-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">contacts</span> LinkedIn
            </a>
            <a href="https://github.com/SoraPewnaldo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm bg-white-paper/60 px-4 py-2 border border-outline-variant rounded-full text-secondary hover:text-primary hover:bg-white transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">terminal</span> GitHub
            </a>
          </div>
        </div>
        
        {/* Decorative Academic Book Image */}
        <div className="absolute top-0 right-0 hidden lg:block animate-pulse duration-[4000ms]">
          <img alt="Academic Book" className="w-32 h-32 object-cover rounded shadow-lg border border-outline-variant opacity-90 rotate-6" src={academicBook}/>
          <div className="mt-2 text-center font-label-caps text-secondary uppercase tracking-widest">academic_book.jpg</div>
        </div>
      </header>

      {/* Bento Grid Research Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Main Content Pane (Report Style) */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Key Engineering Projects */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <div className="absolute top-4 right-6 font-label-caps text-outline-variant select-none hidden sm:block">PROJECT ARCHIVES</div>
            <h2 className="font-headline-md text-primary mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined">terminal</span> Key Engineering Projects
            </h2>
            
            <div className="space-y-8">
              {/* Project 1 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">FORENSIC-AI: Intelligent Deepfake Video Detection</h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/SoraPewnaldo/forensic-ai-deepfake-detection" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                      <span className="material-symbols-outlined text-xs">code</span> Github
                    </a>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Developed an advanced deepfake detection framework for digital forensics. Powered by a Vision Transformer (ViT) architecture combined with transfer learning to identify manipulated audiovisual evidence.
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Tested on FaceForensics++, Celeb-DF, and DFDC datasets.</li>
                  <li>Evaluated metrics: achieved high cross-dataset generalization (AUC up to ~0.97), CLLR, and HTER.</li>
                  <li>Enhanced forensic reliability using likelihood ratio calibration.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Automated Trust Scoring Engine for Zero Trust Access</h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/SoraPewnaldo/Zero-trust" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                      <span className="material-symbols-outlined text-xs">code</span> Github
                    </a>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Built a microservice-based cybersecurity security engine enforcing Zero Trust Architecture to manage secure remote client connections.
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Implemented backend services using the MERN stack (React, Node, Express, MongoDB) alongside Python microservices (Flask/FastAPI).</li>
                  <li>Integrated and tested using OSQuery, Nmap, Docker, Docker Compose, GitHub Actions (CI/CD), and REST APIs.</li>
                  <li>Dynamically evaluates device security postures to grant/deny secure network access.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Smart Fitness and Exercise Tracker</h3>
                </div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Developed an interactive full-stack exercise tracker combining database management and hardware components.
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Coded with HTML, CSS, Java (OOP), JavaScript, Next.js, MySQL, and JDBC.</li>
                  <li>Performed hardware-software integration testing using IoT sensors and database query validation.</li>
                  <li>Gained expertise in IoT sensor interfaces, real-time data handling, and state machine validation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Relevant Coursework Modules */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">menu_book</span> Relevant Modules
            </h2>
            <p className="font-body-md text-on-surface-variant/80 mb-6">
              Core academic modules completed during B.Tech studies in Computer Science and Cybersecurity:
            </p>
            <div className="flex flex-wrap gap-2.5 font-caption">
              {[
                'Data Structures', 'Design & Analysis of Algorithms', 'Object Oriented Programming',
                'Operating Systems', 'Computer Networks and Data Communication', 'Database Management Systems',
                'Theory of Computation', 'Digital Image Processing', 'Artificial Intelligence',
                'Cryptography', 'Network Security', 'Cyber Security', 'Cloud Computing Concepts',
                'Probability and Random Process'
              ].map(module => (
                <span key={module} className="px-4 py-2 bg-surface-container/50 border border-outline-variant/60 rounded-lg text-xs font-semibold text-primary-container">
                  {module}
                </span>
              ))}
            </div>
          </section>

          {/* Honors & Achievements */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">emoji_events</span> Achievements &amp; Accolades
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Secured 1st Prize in Theatre Competition', venue: 'GD Goenka University' },
                { title: 'Secured 2nd Prize in Nukkad Natak Competition', venue: 'Malaviya National Institute of Technology (MNIT), Jaipur' },
                { title: 'Secured 2nd Prize in Nukkad Natak Competition', venue: 'The LNM Institute of Information Technology (LNMIIT), Jaipur' },
                { title: 'Secured 2nd Prize in Nukkad Natak Competition', venue: 'BML Munjal University' }
              ].map((achievement, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-surface-container-low border border-outline-variant/30 rounded-lg">
                  <span className="material-symbols-outlined text-accent-sand text-[28px] mt-0.5">military_tech</span>
                  <div>
                    <h4 className="font-bold text-primary">{achievement.title}</h4>
                    <p className="font-body-sm text-secondary italic">{achievement.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Licenses & Certifications */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">workspace_premium</span> Licenses &amp; Certifications
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start p-6 bg-surface-container-low border border-outline-variant/30 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-white flex flex-col items-center justify-center rounded-lg border border-primary-container/10 shadow-sm p-2">
                  <img alt="Cisco" className="w-full h-full object-contain" src={ciscoLogo} />
                </div>
                <div className="flex-grow space-y-3">
                  <div>
                    <h4 className="font-bold text-primary text-lg">Junior Cybersecurity Analyst Career Path</h4>
                    <p className="font-body-sm text-secondary">Cisco Networking Academy • Issued Jun 2026</p>
                  </div>
                  
                  <div>
                    <h5 className="font-label-caps text-[10px] text-secondary mb-1.5">VERIFIED SKILLS</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Access Controls', 'Antimalware Protection', 'Application Security', 
                        'Cloud Security', 'Common Cyber Threats', 'Defending Systems And Devices', 
                        'Defense-in-Depth', 'Firewalls'
                      ].map(s => (
                        <span key={s} className="px-2 py-0.5 bg-white border border-outline-variant/40 rounded text-[11px] font-caption text-secondary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Focus Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-primary-container text-on-primary-container p-8 rounded-xl relative" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-accent-sand">target</span>
                <h3 className="font-label-caps uppercase tracking-widest text-xs">Current Focus</h3>
              </div>
              <p className="font-body-md text-on-primary-container/90 leading-relaxed">
                Aiming to build a career as a cybersecurity and AI researcher focusing on digital forensics and secure AI systems.
              </p>
            </div>

            {/* System Status Terminal */}
            <div className="bg-inverse-surface text-surface-bright p-6 rounded-xl font-mono text-sm border border-outline">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-error"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-sand"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></div>
              </div>
              <div className="space-y-1 opacity-80" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                <div className="text-tertiary-fixed-dim">sys_status --check</div>
                <div>&gt; Integrity Check: <span className="text-tertiary-fixed">PASS</span></div>
                <div>&gt; AI_Forensics: <span className="text-tertiary-fixed">ACTIVE</span></div>
                <div>&gt; Zero_Trust: <span className="text-tertiary-fixed">ENFORCED</span></div>
                <div className="mt-4 text-accent-sand">System Status: Secure</div>
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar / Technical Badges */}
        <aside className="md:col-span-4 space-y-8">
          {/* Education Details */}
          <div className="space-y-4">
            <h3 className="font-label-caps text-secondary uppercase tracking-widest mb-6">Education</h3>
            
            <div className="group flex items-center gap-4 p-4 bg-folder-cyan/30 border border-folder-cyan rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:-rotate-1">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <div>
                <div className="font-body-md font-bold text-primary">NIIT University</div>
                <div className="font-caption text-secondary">B.Tech CSE (Cybersecurity) • 2023 - 2027</div>
                <div className="font-caption text-secondary">CGPA: 6.98</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-4 p-4 bg-folder-cyan/30 border border-folder-cyan rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:-rotate-1">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              <div>
                <div className="font-body-md font-bold text-primary">Aadhunik Public School</div>
                <div className="font-caption text-secondary">XII (CBSE) • Class of 2022</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-4 p-4 bg-folder-cyan/30 border border-folder-cyan rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:-rotate-1">
              <span className="material-symbols-outlined text-[32px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              <div>
                <div className="font-body-md font-bold text-primary">Montessori Cambridge School</div>
                <div className="font-caption text-secondary">X (CBSE) • Class of 2020</div>
              </div>
            </div>
          </div>

          {/* Technical Badge Cloud */}
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
            <h4 className="font-label-caps text-primary mb-4">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Java', level: 'Intermediate', isCore: true },
                { name: 'JavaScript', level: 'Intermediate', isCore: true },
                { name: 'Python', level: 'Intermediate', isCore: true },
                { name: 'HTML & CSS', level: 'Intermediate' },
                { name: 'Next.js & React', level: 'Intermediate' },
                { name: 'MySQL & MongoDB', level: 'Intermediate' },
                { name: 'GitHub', level: 'Intermediate' },
                { name: 'Arduino & Pi', level: 'Intermediate' },
                { name: 'Jenkins', level: 'Intermediate' },
                { name: 'Deep Learning', level: 'Intermediate' },
                { name: 'CNNs', level: 'Intermediate' },
                { name: 'Vision Transformers', level: 'Intermediate' },
                { name: 'Transfer Learning', level: 'Intermediate' },
                { name: 'Model Evaluation', level: 'Intermediate' },
                { name: 'Linux', level: 'Intermediate' },
                { name: 'Nmap', level: 'Intermediate' },
                { name: 'Ethical Hacking', level: 'Intermediate' },
                { name: 'Pentesting', level: 'Intermediate' },
                { name: 'Vulnerability Assessment', level: 'Intermediate' },
                { name: 'Network Security', level: 'Intermediate' },
                { name: 'Cloud Security', level: 'Intermediate' }
              ].map(skill => (
                <span key={skill.name} className={`group relative px-3 py-1 bg-white-paper border border-outline-variant font-caption rounded-full cursor-default ${skill.isCore ? 'font-semibold' : ''}`}>
                  {skill.name}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-surface-bright px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {skill.level}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Sticky Note Meta */}
          <div className="bg-accent-sand/20 p-6 shadow-md border-l-2 border-accent-sand relative rotate-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 rotate-1 opacity-50"></div>
            <span className="material-symbols-outlined text-[20px] text-accent-sand block mb-2">edit_note</span>
            <p className="font-caption text-primary-container italic leading-relaxed">
              "Objective: I aim to build a career as a cybersecurity and AI researcher focusing on digital forensics and secure AI systems."
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
