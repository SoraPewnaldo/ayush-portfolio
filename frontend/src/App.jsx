import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './components/Desktop';
import FolderPage from './pages/FolderPage';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import FreelancePage from './pages/FreelancePage';
import ExtracurricularPage from './pages/ExtracurricularPage';
import Antigravity from './components/Antigravity';

function App() {
  const backgroundStars = useMemo(() => {
    const list = [];
    const colors = ['#FFD700', '#FFA500', '#FF8C00', '#FFE4B5', '#FFF8DC']; // golds and warm whites
    
    // 400 tiny dots for a very dense starfield
    for (let i = 0; i < 400; i++) {
      list.push({
        id: `dot-${i}`,
        type: 'dot',
        size: Math.random() < 0.8 ? 1 : 2,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 4}s`
      });
    }

    // 45 glowing crosses
    for (let i = 0; i < 45; i++) {
      list.push({
        id: `cross-${i}`,
        type: 'cross',
        size: 15 + Math.random() * 20, // 15px to 35px width/height
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: Math.random() > 0.5 ? '#FFD700' : '#FF8C00', // yellow/orange
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`
      });
    }
    return list;
  }, []);

  return (
    <Router>
      <div className="fixed inset-0 pointer-events-none opacity-50" style={{ zIndex: -2 }}>
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
