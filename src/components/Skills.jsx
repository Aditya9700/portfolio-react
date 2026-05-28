import { useEffect, useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript / TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C / C++', level: 85 },
        { name: 'SQL (Postgres & SQLite)', level: 88 }
      ]
    },
    {
      category: 'Frameworks & CMS',
      skills: [
        { name: 'Next.js & React', level: 95 },
        { name: 'Node.js & Express', level: 90 },
        { name: 'FastAPI', level: 82 },
        { name: 'Django / WordPress', level: 80 }
      ]
    },
    {
      category: 'Libraries & Cloud',
      skills: [
        { name: 'TailwindCSS', level: 95 },
        { name: 'Socket.IO (WebSockets)', level: 90 },
        { name: 'Supabase (DB & Auth)', level: 88 },
        { name: 'Pandas & NumPy', level: 80 }
      ]
    },
    {
      category: 'Developer Tools',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Docker', level: 82 },
        { name: 'PyCharm / IntelliJ', level: 85 }
      ]
    }
  ];

  useEffect(() => {
    // Basic Intersection Observer to trigger progress bar load animation
    const element = document.getElementById('skills');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills-section reveal">
      <div className="section-title-area">
        <span className="section-badge">Abilities</span>
        <h2 className="section-title">
          My Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((categoryObj, idx) => (
          <div key={idx} className="skills-card glass-panel">
            <h3 className="category-title">{categoryObj.category}</h3>
            
            <div className="skills-list">
              {categoryObj.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: animate ? `${skill.level}%` : '0%',
                        transitionDelay: `${sIdx * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
