import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'react & next', 'full-stack', 'security'];

  const projectsData = [
    {
      title: 'Notevo',
      subtitle: 'Real-Time Collaborative Notes App',
      category: 'react & next',
      description: 'A full-stack note-taking platform featuring a rich text editor supporting task lists, inline highlights, and custom hyperlinks. Configured user authentication, secure session storage, and scalable multi-user state syncing.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Socket.IO', 'Tiptap', 'TailwindCSS'],
      github: 'https://github.com',
      demo: 'https://notevo-1234.vercel.app',
      visualClass: 'project-notevo'
    },
    {
      title: 'Student Counseling Portal',
      subtitle: 'Academic Administration & Dashboard',
      category: 'full-stack',
      description: 'Developed a robust Django portal to organize academic records. Integrated role-based dashboard access controls, form input validators, and secure database parameters to prevent administrative redundancies.',
      tags: ['Django', 'Python', 'React', 'SQLite', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://student-counseling-application.vercel.app',
      visualClass: 'project-student'
    },
    {
      title: 'Secure Banking System',
      subtitle: 'Transactional Financial Sim',
      category: 'full-stack',
      description: 'Engineered an interactive virtual transaction simulator as a Web Development Intern at The Sparks Foundation (GRIP program). Implemented transfer legibility records and secure mock account profiles.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git'],
      github: 'https://github.com',
      demo: 'https://github.com', // Using standard fallback since banking sim link is internal
      visualClass: 'project-banking'
    },
    {
      title: 'Phishing Detection Utility',
      subtitle: 'Cybersecurity Threat Analyzer',
      category: 'security',
      description: 'Built a lightweight detection utility demonstrating practical application of cybersecurity threat modeling. Incorporates real-time link/text parsing to inspect phishing risk indexes and mail threats.',
      tags: ['Python', 'Nmap', 'Wireshark', 'Threat Assessment', 'Security Assessment'],
      github: 'https://github.com',
      demo: 'https://github.com',
      visualClass: 'project-security'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-title-area">
        <span className="section-badge">My Portfolio</span>
        <h2 className="section-title">
          My Selected <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-line"></div>
      </div>

      {/* Filter Controller */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat === 'all' ? 'All Work' : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="project-card glass-panel">
            {/* Visual Graphic Representation - Premium CSS Illustration */}
            <div className={`project-visual ${project.visualClass}`}>
              <div className="visual-overlay">
                <span className="project-category-tag">{project.category}</span>
              </div>
              <div className="visual-graphic">
                {project.visualClass === 'project-notevo' && (
                  <div className="notevo-visual-comp">
                    <div className="note-page">
                      <div className="note-line short"></div>
                      <div className="note-line long"></div>
                      <div className="note-line medium"></div>
                    </div>
                    <div className="socket-pulse"></div>
                    <div className="collab-dot user1"></div>
                    <div className="collab-dot user2"></div>
                  </div>
                )}
                {project.visualClass === 'project-student' && (
                  <div className="student-visual-comp">
                    <div className="dashboard-header">
                      <div className="dashboard-dot"></div>
                      <div className="dashboard-dot"></div>
                    </div>
                    <div className="dashboard-charts">
                      <div className="chart-bar first"></div>
                      <div className="chart-bar second"></div>
                      <div className="chart-bar third"></div>
                    </div>
                  </div>
                )}
                {project.visualClass === 'project-banking' && (
                  <div className="banking-visual-comp">
                    <div className="vault-door">
                      <div className="vault-handle"></div>
                    </div>
                    <div className="glowing-success-ring"></div>
                  </div>
                )}
                {project.visualClass === 'project-security' && (
                  <div className="security-visual-comp">
                    <div className="firewall-shield">
                      <div className="shield-check">✓</div>
                    </div>
                    <div className="danger-radar"></div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-info">
              <div className="project-header-info">
                <h3 className="project-title-name">{project.title}</h3>
                <span className="project-subtitle-text">{project.subtitle}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="View Code on GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link-btn primary" aria-label="Launch Live Project Demo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
