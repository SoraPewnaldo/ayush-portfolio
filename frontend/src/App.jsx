import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Desktop from './components/Desktop';
import FolderPage from './pages/FolderPage';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import FreelancePage from './pages/FreelancePage';
import ExtracurricularPage from './pages/ExtracurricularPage';
import NotFoundPage from './pages/NotFoundPage';
import Antigravity from './components/Antigravity';
import { ToastProvider } from './components/Toast';

function PageMetadata() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Ayush Dakwal | Cybersecurity & AI Researcher',
      '/folder/about': 'About Me | Ayush Dakwal',
      '/folder/academic': 'Academic & Research | Ayush Dakwal',
      '/folder/freelance': 'Digital Design Studio | Ayush Dakwal',
      '/folder/extracurricular': 'Beyond the Screen | Ayush Dakwal'
    };

    const descriptions = {
      '/': 'Portfolio of Ayush Dakwal, a Cybersecurity & AI Researcher specializing in digital forensics, secure AI systems, and zero-trust architectures.',
      '/folder/about': 'Background, vitals, core philosophy, and technical toolkit of Ayush Dakwal.',
      '/folder/academic': 'Academic coursework, AI & digital forensics research, Cisco internships, and cybersecurity engineering projects by Ayush Dakwal.',
      '/folder/freelance': 'Digital design, brand identities, and multimedia creative work by Ayush Dakwal.',
      '/folder/extracurricular': 'Theatre, dramatics, leadership as Secretary of Rangmanch NU, and cultural accomplishments.'
    };

    const path = location.pathname;
    const title = titles[path] || (path.startsWith('/folder/') ? `${path.replace('/folder/', '').replace('-', ' ').toUpperCase()} | Ayush Dakwal` : '404 Not Found | Ayush Dakwal');
    const desc = descriptions[path] || 'Portfolio and cybersecurity engineering archive of Ayush Dakwal.';

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);
  }, [location]);

  return null;
}

function createSeededRandom(seed = 123456789) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function generateBackgroundStars() {
  const rand = createSeededRandom(42);
  const list = [];
  const colors = ['#FFD700', '#FFA500', '#FF8C00', '#FFE4B5', '#FFF8DC'];
  
  // 400 tiny dots for dense starfield
  for (let i = 0; i < 400; i++) {
    list.push({
      id: `dot-${i}`,
      type: 'dot',
      size: rand() < 0.8 ? 1 : 2,
      top: `${(rand() * 100).toFixed(2)}%`,
      left: `${(rand() * 100).toFixed(2)}%`,
      color: colors[Math.floor(rand() * colors.length)],
      delay: `${(rand() * 5).toFixed(2)}s`,
      duration: `${(2 + rand() * 4).toFixed(2)}s`
    });
  }

  // 45 glowing crosses
  for (let i = 0; i < 45; i++) {
    list.push({
      id: `cross-${i}`,
      type: 'cross',
      size: 15 + rand() * 20,
      top: `${(rand() * 100).toFixed(2)}%`,
      left: `${(rand() * 100).toFixed(2)}%`,
      color: rand() > 0.5 ? '#FFD700' : '#FF8C00',
      delay: `${(rand() * 5).toFixed(2)}s`,
      duration: `${(3 + rand() * 4).toFixed(2)}s`
    });
  }
  return list;
}

const STATIC_BACKGROUND_STARS = generateBackgroundStars();

function App() {
  const backgroundStars = STATIC_BACKGROUND_STARS;

  return (
    <Router>
      <ToastProvider>
        <PageMetadata />
        <div className="fixed inset-0 pointer-events-none opacity-50 hidden md:block" style={{ zIndex: -2 }}>
        <Antigravity />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-90" style={{ zIndex: -1 }}>
        {backgroundStars.map(star => {
          if (star.type === 'dot') {
            return (
              <div 
                key={star.id}
                className="twinkling-dot" 
                style={{ 
                  width: `${star.size}px`, 
                  height: `${star.size}px`, 
                  backgroundColor: star.color,
                  boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
                  top: star.top, 
                  left: star.left,
                  animationDelay: star.delay,
                  animationDuration: star.duration
                }}
              />
            );
          } else {
            return (
              <div 
                key={star.id}
                className="glowing-cross"
                style={{
                  width: `${star.size}px`, 
                  height: `${star.size}px`, 
                  color: star.color,
                  top: star.top, 
                  left: star.left,
                  animationDelay: star.delay,
                  animationDuration: star.duration
                }}
              >
                <div className="glowing-cross-center" />
              </div>
            );
          }
        })}
      </div>
      
      <main className="flex-grow relative w-full h-full min-h-[800px]" style={{ zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/folder/about" element={<AboutPage />} />
          <Route path="/folder/academic" element={<AcademicPage />} />
          <Route path="/folder/freelance" element={<FreelancePage />} />
          <Route path="/folder/extracurricular" element={<ExtracurricularPage />} />
          <Route path="/folder/:category" element={<FolderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Analytics />
    </ToastProvider>
  </Router>
  );
}

export default App;
