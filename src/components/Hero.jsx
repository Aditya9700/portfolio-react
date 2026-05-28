import { useState, useEffect } from 'react';
import './Hero.css';

const words = ['Full-Stack Developer', 'Next.js & React Developer', 'Cyber Security Enthusiast'];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    };

    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleCtaClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Left Side: Typography & CTAs */}
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">Available for opportunities</span>
          </div>
          <h1 className="hero-title">
            Crafting the Future <br />
            With <span className="gradient-text">Interactive Code</span>
          </h1>
          <h2 className="hero-subtitle">
            Hi, I'm <span className="text-white">Aditya Rana</span>, a{' '}
            <span className="typewriter-container">
              <span className="typewriter-text">{currentText}</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </h2>
          <p className="hero-description">
            I specialize in designing and engineering high-fidelity, visually captivating digital products. From fluid glassmorphic user interfaces to scalable cloud infrastructure, I build apps that leave an impression.
          </p>
          <div className="hero-ctas">
            <a href="#projects" onClick={(e) => handleCtaClick(e, 'projects')} className="btn btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" onClick={(e) => handleCtaClick(e, 'contact')} className="btn btn-secondary">
              Let's Connect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Stunning Glassmorphic Code Console Widget */}
        <div className="hero-visual">
          <div className="console-card glass-panel">
            <div className="console-header">
              <div className="console-buttons">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot expand"></span>
              </div>
              <span className="console-title">aditya.config.js</span>
            </div>
            <div className="console-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name:&nbsp;<span className="code-string">'Aditya Rana'</span>,<br />
                  &nbsp;&nbsp;role:&nbsp;<span className="code-string">'Full-Stack Software Developer'</span>,<br />
                  &nbsp;&nbsp;skills:&nbsp;[<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Next.js'</span>, <span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Python'</span>, <span className="code-string">'Supabase'</span>, <span className="code-string">'Socket.IO'</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;passion:&nbsp;<span className="code-string">'Building secure real-time collaboration'</span>,<br />
                  &nbsp;&nbsp;coffeeIntake:&nbsp;<span className="code-number">Infinity</span>,<br />
                  &nbsp;&nbsp;motto:&nbsp;<span className="code-string">'Secure engineering, beautiful design'</span><br />
                  &#125;;<br /><br />
                  <span className="code-keyword">function</span> <span className="code-function">buildAwesomeStuff</span>() &#123;<br />
                  &nbsp;&nbsp;<span className="code-keyword">return</span> developer.skills<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-function">map</span>(s =&gt; <span className="code-string">`Creating with $&#123;s&#125;...`</span>);<br />
                  &#125;<br /><br />
                  <span className="code-comment">// Output: Ready to build next-gen apps.</span>
                </code>
              </pre>
            </div>
          </div>
          <div className="glowing-orb-behind"></div>
        </div>
      </div>
    </section>
  );
}
