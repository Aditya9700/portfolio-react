import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // Parallax Cursor Glow tracking
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clickable element hover states for custom cursor scaling
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('filter-btn') ||
        target.classList.contains('social-icon-btn')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Scroll-driven Reveal trigger animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Grid line backdrop */}
      <div className="grid-bg" aria-hidden="true"></div>

      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className={`cursor-spotlight ${isHoveringClickable ? 'scale' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
        aria-hidden="true"
      ></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Bottom decorative orb */}
      <div className="bottom-orb" aria-hidden="true"></div>

      {/* Premium Minimal Footer */}
      <footer className="footer-panel glass-panel">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">AR</span>
            <span className="footer-text">© {new Date().getFullYear()} Aditya Rana. All Rights Reserved.</span>
          </div>
          <p className="footer-tagline">Designed & engineered with absolute passion.</p>
        </div>
      </footer>
    </>
  );
}
