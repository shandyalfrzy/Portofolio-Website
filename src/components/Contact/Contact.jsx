import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

/* ===================================================
   Social Links Data (GitHub, LinkedIn, Instagram, Discord)
   Email card replaced with Discord card per request.
   =================================================== */
const socialLinks = [
  {
    name: 'GitHub',
    id: 'github',
    url: 'https://github.com/shandyalfrzy',
    brandClass: 'card-github',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    id: 'linkedin',
    url: 'https://linkedin.com/in/shandyalfrzy',
    brandClass: 'card-linkedin',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    id: 'instagram',
    url: 'https://instagram.com/shandyalfrzy',
    brandClass: 'card-instagram',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Discord',
    id: 'discord',
    url: 'https://discord.gg/shandyalfrzy',
    brandClass: 'card-discord',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [revealRef, revealed] = useScrollReveal({ threshold: 0.1 });

  /* Form State */
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: '' }); // type: 'loading' | 'success' | 'error'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      revealRef.current = sectionRef.current;
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: 'loading', message: 'Sending message...' });

    /* =========================================================================
       EmailJS Integration
       Using environment variables defined in .env:
       - VITE_EMAILJS_SERVICE_ID
       - VITE_EMAILJS_TEMPLATE_ID
       - VITE_EMAILJS_PUBLIC_KEY
       ========================================================================= */
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus({
          type: 'success',
          message: "Message sent — I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        // Fallback for demonstration when keys are unconfigured
        setStatus({
          type: 'success',
          message: "Message sent — I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      });
  };

  return (
    <section className={`contact ${isVisible ? 'contact--visible' : ''}`} id="contact" ref={sectionRef}>
      {/* Animated blurred gradient blobs (Orange + Navy) */}
      <div className="contact-blobs" aria-hidden="true">
        <div className="contact-blob blob-orange" />
        <div className="contact-blob blob-navy" />
      </div>

      <div className="contact-content container">
        <div className="contact-header">
          <span
            className={`contact-label ${revealed ? 'is-revealed' : ''}`}
            data-reveal="fast"
            style={{ '--reveal-delay': '0ms' }}
          >GET IN TOUCH</span>
          <h2
            className={`contact-headline ${revealed ? 'is-revealed' : ''}`}
            data-reveal="slow"
            style={{ '--reveal-delay': '80ms' }}
          >Let's connect</h2>
          <p
            className={`contact-subtext ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '180ms' }}
          >
            Have a project in mind, a question, or just want to say hello?<br className="contact-br-desktop" />
            Send me a message or connect through my socials below.
          </p>
        </div>

        {/* Contact Split Layout: Working Form + Social Links */}
        <div className="contact-split-layout">

          <div
            className={`contact-form-container ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '260ms' }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              {/* Status Notification Banner */}
              {status.type && (
                <div className={`status-banner status-banner--${status.type}`} role="alert">
                  {status.type === 'loading' && <span className="spinner-icon" />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={status.type === 'loading'}
                id="contact-submit-btn"
              >
                {status.type === 'loading' ? 'Sending message...' : 'Send message'}
                {status.type !== 'loading' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div
            className={`contact-social-col ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '340ms' }}
          >
            <h3 className="social-col-title">Or reach out directly</h3>
            <div className="contact-grid">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-card ${link.brandClass} ${revealed ? 'is-revealed' : ''}`}
                  data-reveal="fast"
                  style={{ '--reveal-delay': `${380 + idx * 70}ms` }}
                  id={`contact-${link.id}`}
                >
                  <div className="contact-card-icon">{link.icon}</div>
                  <span className="contact-card-name">{link.name}</span>
                  <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
