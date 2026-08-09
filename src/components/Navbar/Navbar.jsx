import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Work',    href: '#work'    },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');
  const clickScrolling = useRef(false);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !clickScrolling.current) {
            setActiveLink(`#${id}`);
          }
        },
        {
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);

    clickScrolling.current = true;
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    window.dispatchEvent(new Event('nav-scroll'));
    setTimeout(() => window.dispatchEvent(new Event('nav-scroll')), 150);
    setTimeout(() => window.dispatchEvent(new Event('nav-scroll')), 500);
    setTimeout(() => {
      clickScrolling.current = false;
      window.dispatchEvent(new Event('nav-scroll'));
    }, 900);
  };

  return (
    <header className="navbar-wrapper" id="navbar">
      <div className="navbar-container container">
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

        <nav
          className="navbar-pill"
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

        <div className="navbar-right">
          <a href="mailto:shandyalfrzy@gmail.com" className="navbar-email-btn" id="navbar-email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            <span>shandyalfrzy@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}
