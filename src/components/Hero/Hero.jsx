import { useScrollReveal } from '../../hooks/useScrollReveal';
import ParticleHeadline from './ParticleHeadline';
import './Hero.css';

export default function Hero({ isLoaded = true }) {
  const [ref, revealed] = useScrollReveal({ threshold: 0.05, rootMargin: '0px' });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--circle-x', `${x}px`);
    e.currentTarget.style.setProperty('--circle-y', `${y}px`);
  };

  const handleTouchStart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      e.currentTarget.style.setProperty('--circle-x', `${x}px`);
      e.currentTarget.style.setProperty('--circle-y', `${y}px`);
    }
  };

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : 'hero--loading'}`} id="home" ref={ref}>


      <div className="hero-content container">
        <ParticleHeadline />

        <p
          className={`hero-name ${revealed ? 'is-revealed' : ''}`}
          data-reveal
          style={{ '--reveal-delay': '100ms' }}
        >
          Shandy Alfarizy — <span>UI/UX Designer &amp; Web Developer</span>
        </p>

        <p
          className={`hero-subtext ${revealed ? 'is-revealed' : ''}`}
          data-reveal
          style={{ '--reveal-delay': '200ms' }}
        >
          Most interfaces you can scroll right past. The ones I build <br className="hero-br-desktop" />do this to your eyes.
        </p>

        <div
          className={`hero-cta ${revealed ? 'is-revealed' : ''}`}
          data-reveal
          style={{ '--reveal-delay': '310ms' }}
        >
          <a
            href="#work"
            className="btn btn-primary"
            id="cta-see-work"
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
          >
            <span className="btn-circle-reveal" aria-hidden="true" />
            <span className="btn-label">
              See my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="btn btn-secondary"
            id="cta-get-in-touch"
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
          >
            <span className="btn-circle-reveal" aria-hidden="true" />
            <span className="btn-label">
              Get in touch
            </span>
          </a>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <div
          className={`hero-bottom-left ${revealed ? 'is-revealed' : ''}`}
          data-reveal="fast"
          style={{ '--reveal-delay': '420ms' }}
        >
          <span className="hero-bottom-label">WORKING WORLDWIDE</span>
          <span className="hero-bottom-sub">NO OFFICE, ON PURPOSE</span>
        </div>
        <div
          className={`hero-bottom-right ${revealed ? 'is-revealed' : ''}`}
          data-reveal="fast"
          style={{ '--reveal-delay': '490ms' }}
        >
          <span className="hero-bottom-label">OPEN FOR 2026</span>
          <span className="hero-bottom-sub">YOUR TIMEZONE, HANDLED</span>
        </div>
      </div>
    </section>
  );
}
