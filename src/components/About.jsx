import './About.css';

export default function About() {
  const timelineData = [
    {
      type: 'Experience',
      role: 'Cyber Security Intern',
      company: 'Edunet Foundation (AICTE Collaboration)',
      period: 'Jan. 2025 – Feb. 2025',
      description: 'Performed network vulnerability assessments and penetration testing using security tools like Nmap and Wireshark. Analyzed vectors for phishing and malware threats and proposed enterprise mitigation strategies. Developed a mini-project on phishing detection.',
      skills: ['Cybersecurity', 'Nmap', 'Wireshark', 'Phishing Detection', 'Threat Analysis']
    },
    {
      type: 'Experience',
      role: 'Web Development Intern',
      company: 'The Sparks Foundation (GRIP)',
      period: 'Mar. 2024 – Apr. 2024',
      description: 'Developed a fully secure banking transaction web portal simulating account transfers, live data inputs, and credit histories as part of the Graduate Rotational Internship Program.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Security', 'Responsive UI']
    },
    {
      type: 'Education',
      role: 'B.Tech, Computer Science & Engineering',
      company: 'Birla Institute of Applied Sciences Bhimtal',
      period: 'Aug. 2023 – Jun. 2027',
      description: 'Pursuing undergraduate degree in Computer Science. Concentrating on data structures, algorithmic architectures, web engineering, and secure system topologies. Current CGPA: 7.47.',
      skills: ['C/C++', 'Python', 'Algorithms', 'Database Management', 'SQL']
    },
    {
      type: 'Education',
      role: 'CBSE Class XII & X Secondary Education',
      company: 'Lakes International School Bhimtal',
      period: 'Apr. 2019 – Apr. 2023',
      description: 'Completed high school education with a focus on Physics, Mathematics, and Computer Science. Graduated with 93.2% in Class XII and 90.83% in Class X.',
      skills: ['Mathematics', 'Computer Science', 'Physics']
    }
  ];

  return (
    <section id="about" className="about-section reveal">
      <div className="section-title-area">
        <span className="section-badge">My Journey</span>
        <h2 className="section-title">
          About Me & <span className="gradient-text">Milestones</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        {/* Intro bio paragraph */}
        <div className="about-bio glass-panel">
          <h3 className="bio-heading">Who is Aditya Rana?</h3>
          <p className="bio-text">
            I am a Computer Science & Engineering student at Birla Institute of Applied Sciences, Bhimtal. I specialize in full-stack web engineering, building secure client architectures, and exploring cybersecurity threat analysis.
          </p>
          <p className="bio-text">
            My development approach centers on performance, data integrity, and interactive aesthetics. From building multi-user real-time editors to implementing robust access controls, I enjoy translating complex systems into elegant visual interfaces.
          </p>
          <div className="bio-stats">
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">7.47</span>
              <span className="stat-label">B.Tech CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-card glass-panel">
                <div className="timeline-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <h4 className="timeline-role">{milestone.role}</h4>
                      <span className={`milestone-type-badge ${milestone.type.toLowerCase()}`}>
                        {milestone.type}
                      </span>
                    </div>
                    <span className="timeline-company">{milestone.company}</span>
                  </div>
                  <span className="timeline-period">{milestone.period}</span>
                </div>
                <p className="timeline-desc">{milestone.description}</p>
                <div className="timeline-skills">
                  {milestone.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
