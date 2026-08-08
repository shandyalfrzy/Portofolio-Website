import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper" id="navbar">
      <div className="navbar-container container">
        {/* Left: Status badge */}
        <div className="navbar-left">
          <a
            href="#home"
            className="navbar-status-badge"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <span className="status-dot"></span>
            <span className="status-text">available for projects</span>
          </a>
        </div>

        {/* Center: Floating Pill Nav */}
        <nav
          className={`navbar-pill ${mobileOpen ? 'navbar-pill--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link ${activeLink === link.href ? 'navbar-link--active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Email button */}
        <div className="navbar-right">
          <a href="mailto:shandyalfrzy@gmail.com" className="navbar-email-btn" id="navbar-email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            <span>shandyalfrzy@gmail.com</span>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar-hamburger ${mobileOpen ? 'navbar-hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && <div className="navbar-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
