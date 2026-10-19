import { useState } from 'react';
import { Link } from 'react-router-dom';
import academicBook from '../assets/academic_book.webp';
import ciscoLogo from '../assets/cisco.webp';
import forensicArchImg from '../assets/forensic_architecture.webp';
import forensicRocImg from '../assets/forensic_roc.webp';
import forensicConfImg from '../assets/forensic_confusion_matrix.webp';
import ztHeroImg from '../assets/zero_trust_hero.webp';
import ztVerificationImg from '../assets/zero_trust_verification.webp';

export default function AcademicPage() {
  const [forensicTab, setForensicTab] = useState('arch'); // 'arch' | 'metrics' | 'demo'
  const [ztTab, setZtTab] = useState('flow'); // 'flow' | 'dashboard'
  const [ztFirewall, setZtFirewall] = useState(true);
  const [ztOSChecked, setZtOSChecked] = useState(true);
  const [ztPatched, setZtPatched] = useState(true);
  const [zoomImage, setZoomImage] = useState(null);

  let ztScore = 95;
  if (!ztFirewall) ztScore -= 30;
  if (!ztOSChecked) ztScore -= 20;
  if (!ztPatched) ztScore -= 15;

  return (
    <div className="font-body-md text-on-surface min-h-screen overflow-x-hidden pt-16 md:pt-32 pb-20 px-4 md:px-workspace-margin max-w-7xl mx-auto relative z-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-secondary">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-[16px]">desktop_windows</span> Desktop
          </Link>
          <span>/</span>
          <span className="text-primary font-bold">Academic &amp; Research</span>
        </nav>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 border border-primary-container rounded-full text-primary-container font-body-md hover:bg-primary-container hover:text-white transition-all duration-300 active:scale-95 bg-surface/50 backdrop-blur-md" style={{ minHeight: 44 }}>
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Desktop
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-16 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-[135px] font-display-xl font-bold text-primary leading-none mb-6 tracking-tighter">
            Academic <br/> &amp; Research.
          </h1>
          <p className="font-body-lg text-secondary leading-relaxed mb-8 border-l-4 border-accent-sand pl-6 italic">
            "Computer Science student specializing in Cybersecurity, with project experience in AI-based deepfake detection, Zero Trust access, security tooling, and hybrid cloud security architecture. Skilled in Python, deep learning, model evaluation, network security concepts, and web development."
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
          <img loading="lazy" decoding="async" alt="Academic Book" className="w-32 h-32 object-cover rounded shadow-lg border border-outline-variant opacity-90 rotate-6" src={academicBook}/>
          <div className="mt-2 text-center font-label-caps text-secondary uppercase tracking-widest">academic_book.jpg</div>
        </div>
      </header>

      {/* Bento Grid Research Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Main Content Pane (Report Style) */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Internship Experience */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-lg text-5xl font-bold text-primary mb-8 flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px]">work</span> Internship Experience
            </h2>
            
            <div className="space-y-8">
              {/* Internship 1: Cisco */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Cybersecurity Virtual Intern</h3>
                  <span className="font-label-caps text-secondary text-sm">Jun–Aug 2026</span>
                </div>
                <div className="font-body-md font-semibold text-secondary">Cisco Networking Academy</div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Engineered and evaluated secure enterprise and cloud architecture solutions:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Developed a proposed secure hybrid data center network architecture connecting private data centers and public cloud services.</li>
                  <li>Addressed IAM, cloud security groups, and VPC segmentation to reduce unauthorized access and limit lateral movement between applications.</li>
                  <li>Evaluated security considerations for hybrid workloads, Kubernetes-orchestrated applications, microservices, and secure remote access.</li>
                </ul>
                <div className="flex gap-3 pt-2">
                  <a href="/certificates/cisco_virtual_internship_program_2026.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                    <span className="material-symbols-outlined text-xs">workspace_premium</span> Internship Certificate
                  </a>
                </div>
              </div>

              {/* Internship 2: 1Stop Cybersec */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Cyber Security Intern</h3>
                  <span className="font-label-caps text-secondary text-sm">Jul–Aug 2026</span>
                </div>
                <div className="font-body-md font-semibold text-secondary">1Stop.ai, Remote</div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Completed 3 cybersecurity projects covering phishing simulation, Android penetration testing, and digital forensic analysis:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li><strong className="text-on-surface">Phishing Awareness Simulation:</strong> Developed a platform in Laravel simulating phishing pages to capture and log credentials safely while redirecting users to the original site.</li>
                  <li><strong className="text-on-surface">Android Application Pentesting:</strong> Studied 5 OWASP Android vulnerability categories (M1–M5) in a mobile application security testing lab (Genymotion, Kali Linux, Burp Suite, Frida).</li>
                  <li><strong className="text-on-surface">Digital Forensic Analysis:</strong> Used Autopsy on Kali Linux for forensic analysis of artifacts such as browser history, deleted files, registry data, and metadata.</li>
                </ul>
                <div className="flex gap-3 pt-2">
                  <a href="/certificates/1stop cybersec internship.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                    <span className="material-symbols-outlined text-xs">workspace_premium</span> Internship Certificate
                  </a>
                  <a href="/certificates/1stop cybersec project completion.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                    <span className="material-symbols-outlined text-xs">verified</span> Project Completion
                  </a>
                </div>
              </div>

              {/* Internship 3: 1Stop Web Dev */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Front-End Web Development Intern</h3>
                  <span className="font-label-caps text-secondary text-sm">Jul–Aug 2026</span>
                </div>
                <div className="font-body-md font-semibold text-secondary">1Stop.ai, Remote</div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Built 3 web development projects focusing on front-end user experience and responsive design:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li><strong className="text-on-surface">Portfolio Website:</strong> Developed and tested modern single-page portfolio layout.</li>
                  <li><strong className="text-on-surface">Bootstrap/HTML Calculator:</strong> Built an interactive UI calculator with responsive styling.</li>
                  <li><strong className="text-on-surface">To-Do List:</strong> Developed a task tracking application implementing responsive DOM manipulation using HTML, CSS, Bootstrap, and JavaScript.</li>
                </ul>
                <div className="flex gap-3 pt-2">
                  <a href="/certificates/1stop web dev internship.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                    <span className="material-symbols-outlined text-xs">workspace_premium</span> Internship Certificate
                  </a>
                  <a href="/certificates/1stop web dev project completion..pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                    <span className="material-symbols-outlined text-xs">verified</span> Project Completion
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Key Engineering Projects */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <div className="absolute top-4 right-6 font-label-caps text-outline-variant select-none hidden sm:block">PROJECT ARCHIVES</div>
            <h2 className="font-headline-lg text-5xl font-bold text-primary mb-8 flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px]">terminal</span> Key Engineering Projects
            </h2>
            
            <div className="space-y-8">
              {/* Project 1 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">FORENSIC-AI: Intelligent Deepfake Video Detection for Digital Evidence</h3>
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

                {/* Interactive Showcase Panel */}
                <div className="mt-4 bg-surface-container/50 border border-outline-variant/60 rounded-xl overflow-hidden max-w-2xl">
                  {/* Tab headers */}
                  <div className="flex bg-surface-container-high border-b border-outline-variant/60 font-mono text-[10px]">
                    {[
                      { id: 'arch', label: 'Model Architecture', icon: 'account_tree' },
                      { id: 'metrics', label: 'Evaluation Metrics & Curves', icon: 'monitoring' }
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setForensicTab(t.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-outline-variant/40 hover:bg-surface-container transition-colors ${forensicTab === t.id ? 'bg-surface font-semibold text-primary border-b-2 border-b-primary' : 'text-on-surface-variant/80'}`}
                      >
                        <span className="material-symbols-outlined text-xs">{t.icon}</span>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab contents */}
                  <div className="p-4 font-mono text-[10.5px] leading-relaxed text-on-surface-variant">
                    {forensicTab === 'arch' && (
                      <div className="space-y-4">
                        <div className="text-[10px] text-secondary uppercase font-bold tracking-wider mb-1">Vision Transformer (ViT) Architecture</div>
                        
                        {/* Real Diagram Image */}
                        <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white p-2 cursor-zoom-in" onClick={() => setZoomImage(forensicArchImg)}>
                          <img loading="lazy" decoding="async" 
                            src={forensicArchImg} 
                            alt="Forensic AI Model Architecture (Click to expand)" 
                            className="w-full h-auto object-contain max-h-[320px] transition-transform hover:scale-[1.02]"
                          />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-center text-[9px] mt-2">
                          <div className="bg-surface border border-outline-variant/60 px-2 py-1 rounded w-full sm:w-auto">
                            <span className="font-bold block text-primary">Input Video</span>
                            <span className="text-[7.5px] opacity-75">30 fps frames</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-surface border border-outline-variant/60 px-2 py-1 rounded w-full sm:w-auto">
                            <span className="font-bold block text-primary">Face Extraction</span>
                            <span className="text-[7.5px] opacity-75">MTCNN Detector</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-surface border border-outline-variant/60 px-2 py-1 rounded w-full sm:w-auto">
                            <span className="font-bold block text-primary">ViT-Base</span>
                            <span className="text-[7.5px] opacity-75">12 attention blocks</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-primary/5 border border-primary/20 text-primary px-2 py-1 rounded w-full sm:w-auto font-bold">
                            <span>Likelihood Calibration</span>
                            <span className="text-[7.5px] block opacity-90">Real / Deepfake</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {forensicTab === 'metrics' && (
                      <div className="space-y-4">
                        <div className="text-[10px] text-secondary uppercase font-bold tracking-wider mb-1">Real Test Results &amp; Model Evaluation</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Metrics stats */}
                          <div className="space-y-3">
                            {[
                              { name: 'FaceForensics++ (FFPP)', auc: 99.12, eer: 6.62, color: 'bg-[#9FD1BB]' },
                              { name: 'Celeb-DF (V2)', auc: 97.31, eer: 8.60, color: 'bg-[#9FD1BB]' },
                              { name: 'WildDeepfake', auc: 90.60, eer: 16.49, color: 'bg-[#E5BEB5]' }
                            ].map(bar => (
                              <div key={bar.name} className="space-y-1">
                                <div className="flex justify-between font-bold text-[9.5px]">
                                  <span>{bar.name}</span>
                                  <span className="text-primary">{bar.auc}% AUC</span>
                                </div>
                                <div className="w-full bg-surface-container-high h-2 rounded overflow-hidden border border-outline-variant/40">
                                  <div className={`${bar.color} h-full`} style={{ width: `${bar.auc}%` }}></div>
                                </div>
                                <div className="text-[8px] opacity-75">Equal Error Rate (EER): {bar.eer}%</div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Visual Curves */}
                          <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white p-1.5 flex flex-col justify-center items-center cursor-zoom-in" onClick={() => setZoomImage(forensicRocImg)}>
                            <span className="text-[8px] font-bold text-secondary mb-1">Test ROC Curves (Click to expand)</span>
                            <img loading="lazy" decoding="async" 
                              src={forensicRocImg} 
                              alt="Forensic AI ROC Curves" 
                              className="w-full h-auto object-contain max-h-[200px] transition-transform hover:scale-[1.02]"
                            />
                          </div>
                        </div>
                        
                        <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white p-2 flex flex-col justify-center items-center cursor-zoom-in" onClick={() => setZoomImage(forensicConfImg)}>
                          <span className="text-[8px] font-bold text-secondary mb-1">Confusion Matrix (Click to expand)</span>
                          <img loading="lazy" decoding="async" 
                            src={forensicConfImg} 
                            alt="Confusion Matrix" 
                            className="w-full h-auto object-contain max-h-[220px] transition-transform hover:scale-[1.02]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">ZeroIAM: Automated Trust Scoring Engine for Zero Trust Access</h3>
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

                {/* Interactive Zero Trust Showcase */}
                <div className="mt-4 bg-surface-container/50 border border-outline-variant/60 rounded-xl overflow-hidden max-w-2xl">
                  {/* Tab headers */}
                  <div className="flex bg-surface-container-high border-b border-outline-variant/60 font-mono text-[10px]">
                    {[
                      { id: 'flow', label: 'Architecture & Verification', icon: 'account_tree' },
                      { id: 'dashboard', label: 'Trust Engine Simulator', icon: 'admin_panel_settings' }
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setZtTab(t.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-outline-variant/40 hover:bg-surface-container transition-colors ${ztTab === t.id ? 'bg-surface font-semibold text-primary border-b-2 border-b-primary' : 'text-on-surface-variant/80'}`}
                      >
                        <span className="material-symbols-outlined text-xs">{t.icon}</span>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab contents */}
                  <div className="p-4 font-mono text-[10.5px] leading-relaxed text-on-surface-variant">
                    {ztTab === 'flow' && (
                      <div className="space-y-4">
                        <div className="text-[10px] text-secondary uppercase font-bold tracking-wider mb-1">Access Flow &amp; UI Verification</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white p-1 cursor-zoom-in" onClick={() => setZoomImage(ztHeroImg)}>
                            <span className="text-[8px] font-bold text-secondary block text-center mb-1">Landing Dashboard (Click to expand)</span>
                            <img loading="lazy" decoding="async" 
                              src={ztHeroImg} 
                              alt="Zero Trust Hero Page" 
                              className="w-full h-auto object-contain max-h-[200px] transition-transform hover:scale-[1.02]"
                            />
                          </div>

                          <div className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white p-1 cursor-zoom-in" onClick={() => setZoomImage(ztVerificationImg)}>
                            <span className="text-[8px] font-bold text-secondary block text-center mb-1">OSQuery Verification UI (Click to expand)</span>
                            <img loading="lazy" decoding="async" 
                              src={ztVerificationImg} 
                              alt="Zero Trust Verification UI" 
                              className="w-full h-auto object-contain max-h-[200px] transition-transform hover:scale-[1.02]"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 text-center text-[9.5px] mt-2">
                          <div className="bg-surface border border-outline-variant/60 p-2 rounded w-full sm:w-28">
                            <span className="font-bold block text-primary">1. Client Device</span>
                            <span className="text-[8px] opacity-75">Access Request</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-surface border border-outline-variant/60 p-2 rounded w-full sm:w-32">
                            <span className="font-bold block text-primary">2. Policy Agent</span>
                            <span className="text-[8px] opacity-75">OSQuery Posture Check</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-surface border border-outline-variant/60 p-2 rounded w-full sm:w-32 flex flex-col items-center">
                            <span className="font-bold text-primary flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Trust Scoring</span>
                            <span className="text-[8px] opacity-75">Calculates Risk Index</span>
                          </div>
                          <span className="text-secondary font-bold rotate-90 sm:rotate-0">→</span>
                          <div className="bg-primary/5 border border-primary/20 text-primary p-2 rounded w-full sm:w-28 font-bold">
                            <span>4. Decision</span>
                            <span className="text-[8px] block opacity-90">Gateway Grant/Deny</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {ztTab === 'dashboard' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-2">
                          <span className="text-[10px] text-secondary uppercase font-bold tracking-wider">Live Security Posture Simulator</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-on-surface-variant/80">Trust Index:</span>
                            <span className={`px-2 py-0.5 rounded font-bold ${ztScore >= 70 ? 'bg-[#9FD1BB]/30 text-green-700' : 'bg-red-500/10 text-red-600'}`}>{ztScore}/100</span>
                            <span className={`px-2 py-0.5 rounded font-bold text-[9px] ${ztScore >= 70 ? 'bg-[#9FD1BB] text-on-tertiary-fixed-variant' : 'bg-[#E94A47] text-white animate-pulse'}`}>{ztScore >= 70 ? 'GRANTED' : 'DENIED'}</span>
                          </div>
                        </div>

                        {/* Interactive toggles */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <label className="flex items-center gap-2 bg-surface p-2 rounded border border-outline-variant/40 hover:bg-surface-container/30 cursor-pointer select-none">
                            <input 
                              type="checkbox" 
                              checked={ztFirewall} 
                              onChange={(e) => setZtFirewall(e.target.checked)} 
                              className="accent-primary"
                            />
                            <div className="flex flex-col">
                              <span className="font-bold">Firewall Enabled</span>
                              <span className="text-[8px] opacity-75">{ztFirewall ? 'Active' : 'Missing (-30 pts)'}</span>
                            </div>
                          </label>

                          <label className="flex items-center gap-2 bg-surface p-2 rounded border border-outline-variant/40 hover:bg-surface-container/30 cursor-pointer select-none">
                            <input 
                              type="checkbox" 
                              checked={ztOSChecked} 
                              onChange={(e) => setZtOSChecked(e.target.checked)} 
                              className="accent-primary"
                            />
                            <div className="flex flex-col">
                              <span className="font-bold">OS Verified</span>
                              <span className="text-[8px] opacity-75">{ztOSChecked ? 'Trusted' : 'Outdated (-20 pts)'}</span>
                            </div>
                          </label>

                          <label className="flex items-center gap-2 bg-surface p-2 rounded border border-outline-variant/40 hover:bg-surface-container/30 cursor-pointer select-none">
                            <input 
                              type="checkbox" 
                              checked={ztPatched} 
                              onChange={(e) => setZtPatched(e.target.checked)} 
                              className="accent-primary"
                            />
                            <div className="flex flex-col">
                              <span className="font-bold">Security Patched</span>
                              <span className="text-[8px] opacity-75">{ztPatched ? 'Latest' : 'Vulnerable (-15 pts)'}</span>
                            </div>
                          </label>
                        </div>

                        {/* Terminal status display */}
                        <div className="bg-inverse-surface text-surface-bright rounded p-2.5 font-mono text-[9px] space-y-1">
                          <div className="text-secondary-fixed opacity-60"># query_posture_status</div>
                          <div>&gt; Firewall status: <span className={ztFirewall ? 'text-[#9FD1BB]' : 'text-[#E94A47]'}>{ztFirewall ? 'ACTIVE (SECURE)' : 'INACTIVE (ALERT)'}</span></div>
                          <div>&gt; OS Signature: <span className={ztOSChecked ? 'text-[#9FD1BB]' : 'text-[#E94A47]'}>{ztOSChecked ? 'VERIFIED (TRUSTED)' : 'COMPROMISED (VULNERABLE)'}</span></div>
                          <div>&gt; Security patches: <span className={ztPatched ? 'text-[#9FD1BB]' : 'text-[#E94A47]'}>{ztPatched ? 'UP TO DATE' : 'OUT OF DATE'}</span></div>
                          <div className="pt-1.5 border-t border-surface-variant/10 text-accent-sand font-bold">
                            &gt;&gt; Gateway Connection: {ztScore >= 70 ? 'SUCCESSFULLY ESTABLISHED.' : 'ACCESS DENIED: DEVICE OUTSIDE SECURITY POLICY.'}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Security Studio: Privacy-Focused Security Workspace</h3>
                </div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Engineered a privacy-centric, self-hosted security operations and analysis platform designed to keep sensitive intelligence local.
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Built a centralized workspace integrating 38 specialized security modules.</li>
                  <li>Supports 50+ security events/workflows for triage, vulnerability scanning, and risk assessment while keeping sensitive operations local.</li>
                  <li>Features zero data leakage architecture with end-to-end privacy guarantees.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="group border-l-2 border-accent-sand/40 pl-5 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-lg text-primary">Gmail Campaigner: Open-Source Email Outreach</h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/SoraPewnaldo/Gmail-Campaigner" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-folder-cyan hover:underline font-label-caps font-semibold">
                      <span className="material-symbols-outlined text-xs">code</span> Github
                    </a>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                  Developed a lightweight, self-hosted Python outreach tool utilizing the official Google Gmail API for personalized email marketing campaigns.
                </p>
                <ul className="list-disc pl-5 space-y-1 font-body-sm text-on-surface-variant/80">
                  <li>Sends personalized HTML outreach emails from CSV list inputs with dynamic placeholder replacement.</li>
                  <li>Implements template rotation with support for random delays to mimic human behavior and avoid email filtering blocks.</li>
                  <li>Features optional email open tracking and unsubscribe flow handling using Google Apps Script.</li>
                </ul>
              </div>

              {/* Project 5 */}
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

          {/* Licenses & Certifications */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-lg text-5xl font-bold text-primary mb-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px]">workspace_premium</span> Licenses &amp; Certifications
            </h2>
            <div className="space-y-6">
              {/* Cisco Certificates */}
              <div className="flex flex-col sm:flex-row gap-4 items-start p-6 bg-surface-container-low border border-outline-variant/30 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-white flex flex-col items-center justify-center rounded-lg border border-primary-container/10 shadow-sm p-2">
                  <img loading="lazy" decoding="async" alt="Cisco" className="w-full h-full object-contain" src={ciscoLogo} />
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h4 className="font-bold text-primary text-lg">Cisco Networking Academy Certifications</h4>
                    <p className="font-body-sm text-secondary">Issued Jun–Aug 2026</p>
                  </div>
                  
                  <div className="space-y-2.5">
                    <a href="/certificates/cisco_virtual_internship_program_2026.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-folder-cyan hover:underline">
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span> Cisco AICTE Virtual Internship Program 2026, Cybersecurity <span className="text-secondary text-xs">(Jun–Aug 2026)</span>
                    </a>
                    <a href="/certificates/cisco_cybersecurity_essentials.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-folder-cyan hover:underline">
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span> Cybersecurity Essentials <span className="text-secondary text-xs">(Jun 2026)</span>
                    </a>
                    <a href="/certificates/cisco_packet_tracer_networking.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-folder-cyan hover:underline">
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span> Exploring Networking with Cisco Packet Tracer <span className="text-secondary text-xs">(Jun 2026)</span>
                    </a>
                  </div>

                  <div>
                    <h5 className="font-label-caps text-[10px] text-secondary mb-1.5 mt-2">VERIFIED SKILLS</h5>
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

          {/* Relevant Coursework Modules */}
          <section className="bg-white-paper p-10 border-t-[12px] border-primary-container relative overflow-hidden shadow-sm">
            <h2 className="font-headline-lg text-5xl font-bold text-primary mb-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px]">menu_book</span> Relevant Modules
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
            <h2 className="font-headline-lg text-5xl font-bold text-primary mb-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[40px]">emoji_events</span> Achievements &amp; Accolades
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

          {/* Related Pages Internal Linking */}
          <nav aria-label="Related Sections" className="bg-white-paper p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-label-caps text-secondary text-xs uppercase tracking-wider">Explore Related Folders:</span>
            <div className="flex flex-wrap gap-3">
              <Link to="/folder/about" className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container hover:bg-primary hover:text-white rounded-full text-xs font-semibold text-primary transition-all">
                <span className="material-symbols-outlined text-[16px]">person</span> About Me
              </Link>
              <Link to="/folder/freelance" className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container hover:bg-primary hover:text-white rounded-full text-xs font-semibold text-primary transition-all">
                <span className="material-symbols-outlined text-[16px]">palette</span> Design Studio
              </Link>
              <Link to="/folder/extracurricular" className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container hover:bg-primary hover:text-white rounded-full text-xs font-semibold text-primary transition-all">
                <span className="material-symbols-outlined text-[16px]">theater_comedy</span> Beyond Screen
              </Link>
            </div>
          </nav>

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
                { name: 'Python', level: 'Intermediate', isCore: true },
                { name: 'Java', level: 'Intermediate', isCore: true },
                { name: 'JavaScript', level: 'Intermediate', isCore: true },
                { name: 'TypeScript', level: 'Intermediate' },
                { name: 'PyTorch', level: 'Intermediate', isCore: true },
                { name: 'Machine Learning', level: 'Intermediate' },
                { name: 'Deep Learning', level: 'Intermediate' },
                { name: 'CNNs', level: 'Intermediate' },
                { name: 'Vision Transformers (ViT)', level: 'Intermediate' },
                { name: 'Transfer Learning', level: 'Intermediate' },
                { name: 'Model Evaluation (AUC/HTER)', level: 'Intermediate' },
                { name: 'Hybrid Cloud Security', level: 'Intermediate', isCore: true },
                { name: 'IAM & Access Control', level: 'Intermediate' },
                { name: 'Network Security & Segmentation', level: 'Intermediate' },
                { name: 'AWS Security Groups & VPCs', level: 'Intermediate' },
                { name: 'Kubernetes & Microservices Security', level: 'Intermediate' },
                { name: 'Next.js & React', level: 'Intermediate' },
                { name: 'Node.js & Express', level: 'Intermediate' },
                { name: 'REST APIs', level: 'Intermediate' },
                { name: 'MySQL & MongoDB', level: 'Intermediate' },
                { name: 'PostgreSQL & SQLite', level: 'Intermediate' },
                { name: 'Docker & Jenkins', level: 'Intermediate' },
                { name: 'Prisma & GitHub Actions', level: 'Intermediate' },
                { name: 'Linux', level: 'Intermediate' },
                { name: 'Autopsy & Digital Forensics', level: 'Intermediate' },
                { name: 'Ethical Hacking & Pentesting', level: 'Intermediate' }
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
              "Objective: Computer Science student specializing in Cybersecurity, with project experience in AI-based deepfake detection, Zero Trust access, security tooling, and hybrid cloud security architecture."
            </p>
          </div>
        </aside>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomImage(null)}
        >
          <img loading="lazy" decoding="async" 
            src={zoomImage} 
            alt="Zoomed view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-fade-in" 
          />
        </div>
      )}
    </div>
  );
}
