import './Footer.css';

const navLinks = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Work',    href: '#work'    },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub',    href: 'https://github.com/shandyalfrzy'       },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/shandy-alfarizy-1641252b2/'  },
  { label: 'Instagram', href: 'https://instagram.com/shandyalfrzy'    },
  { label: 'Discord',   href: 'https://discord.com/users/aparijiy'       },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer" id="footer" aria-label="Site footer">

      {/* Dot-grid overlay — same treatment as global-bg-layer */}
      <div className="footer-dot-grid" aria-hidden="true" />

      <div className="footer-inner container">

        {/* ── TOP ROW ─────────────────────────────────────── */}
        <div className="footer-top">

          {/* Left: CTA block */}
          <div className="footer-cta-block">
            <span className="footer-eyebrow">HAVE A PROJECT IN MIND?</span>

            <a
              href="mailto:shandyalfrzy@gmail.com"
              className="footer-email-link"
              id="footer-email-link"
              aria-label="Send email to Shandy"
            >
              shandyalfrzy@gmail.com
              <span className="footer-email-arrow" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>

            <div className="footer-actions">
              <a
                href="#contact"
                className="footer-btn-cta"
                id="footer-cta-btn"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Get in touch
              </a>
              <span className="footer-status-pill">
                <span className="footer-status-dot" />
                available for projects
              </span>
            </div>
          </div>

          {/* Right: Link columns */}
          <nav className="footer-links-grid" aria-label="Footer navigation">
            <div className="footer-link-col">
              <span className="footer-col-heading">NAVIGATE</span>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer-nav-link"
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-link-col">
              <span className="footer-col-heading">CONNECT</span>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Scroll-to-top button */}
          <button
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            id="footer-scroll-top"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* ── BOTTOM ROW ──────────────────────────────────── */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 · Built by Shandy, not a template</p>
          <span className="footer-wordmark" aria-hidden="true">SHANDY ALFARIZY</span>
        </div>

      </div>
    </footer>
  );
}
