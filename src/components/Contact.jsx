import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    
    let errorMsg = '';
    if (field === 'name' && !formData.name.trim()) {
      errorMsg = 'Name is required';
    } else if (field === 'email') {
      if (!formData.email.trim()) {
        errorMsg = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        errorMsg = 'Please enter a valid email address';
      }
    } else if (field === 'message' && !formData.message.trim()) {
      errorMsg = 'Message is required';
    }

    setErrors({ ...errors, [field]: errorMsg });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error immediately if typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    // Validate all
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Trigger mock submission delay
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    }, 1500);
  };

  const resetForm = () => {
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-title-area">
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">
          Let's Start a <span className="gradient-text">Conversation</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        {/* Left column: Contact Info card */}
        <div className="contact-info glass-panel">
          <h3 className="info-heading">Reach Out Directly</h3>
          <p className="info-text">
            Have a project in mind or want to collaborate? I'm always open to discussing new ideas, tech stacks, or digital interfaces.
          </p>

          <div className="info-details">
            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-meta">
                <span className="meta-label">Email Me</span>
                <a href="mailto:aditya@example.com" className="meta-link">aditya@example.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-meta">
                <span className="meta-label">Location</span>
                <span className="meta-value">India</span>
              </div>
            </div>
          </div>

          <div className="info-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right column: Interactive form card */}
        <div className="contact-form-container glass-panel">
          {formStatus === 'success' ? (
            <div className="form-success-state">
              <div className="success-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="success-svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="success-heading">Message Sent!</h3>
              <p className="success-text">
                Thank you for reaching out. I have received your message and will respond within 24 hours.
              </p>
              <button onClick={resetForm} className="btn btn-secondary btn-small">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name-input" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="John Doe"
                  className={`form-input ${touched.name && errors.name ? 'invalid' : ''} ${touched.name && !errors.name ? 'valid' : ''}`}
                  disabled={formStatus === 'submitting'}
                />
                {touched.name && errors.name && <span className="field-error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email-input" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="john@example.com"
                  className={`form-input ${touched.email && errors.email ? 'invalid' : ''} ${touched.email && !errors.email ? 'valid' : ''}`}
                  disabled={formStatus === 'submitting'}
                />
                {touched.email && errors.email && <span className="field-error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message-input" className="form-label">Your Message</label>
                <textarea
                  id="message-input"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Describe your project, ideas, or questions here..."
                  className={`form-input textarea ${touched.message && errors.message ? 'invalid' : ''} ${touched.message && !errors.message ? 'valid' : ''}`}
                  disabled={formStatus === 'submitting'}
                ></textarea>
                {touched.message && errors.message && <span className="field-error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn btn-primary form-submit-btn"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="spinner"></span>
                    Transmitting...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
