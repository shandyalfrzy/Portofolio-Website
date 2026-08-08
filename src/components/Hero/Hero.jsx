import './Hero.css';

export default function Hero({ isLoaded = true }) {
  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : 'hero--loading'}`} id="home">
      {/* Sky background with floating clouds */}
      <div className="hero-bg" aria-hidden="true">
        <svg className="cloud cloud-1" viewBox="0 0 280 140" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="100" rx="70" ry="40" opacity="0.9"/>
          <ellipse cx="140" cy="80" rx="90" ry="55" opacity="0.95"/>
          <ellipse cx="200" cy="95" rx="80" ry="45" opacity="0.9"/>
          <ellipse cx="110" cy="70" rx="60" ry="40" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-2" viewBox="0 0 220 110" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="75" rx="55" ry="35" opacity="0.85"/>
          <ellipse cx="120" cy="60" rx="70" ry="45" opacity="0.9"/>
          <ellipse cx="170" cy="72" rx="50" ry="32" opacity="0.85"/>
        </svg>
        <svg className="cloud cloud-3" viewBox="0 0 320 150" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="110" rx="75" ry="40" opacity="0.88"/>
          <ellipse cx="160" cy="85" rx="100" ry="60" opacity="0.92"/>
          <ellipse cx="250" cy="100" rx="70" ry="45" opacity="0.88"/>
          <ellipse cx="130" cy="75" rx="55" ry="35" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-4" viewBox="0 0 200 100" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="65" rx="50" ry="30" opacity="0.82"/>
          <ellipse cx="110" cy="50" rx="65" ry="42" opacity="0.88"/>
          <ellipse cx="160" cy="62" rx="40" ry="28" opacity="0.82"/>
        </svg>
        <svg className="cloud cloud-5" viewBox="0 0 260 130" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="90" rx="60" ry="38" opacity="0.85"/>
          <ellipse cx="130" cy="70" rx="85" ry="52" opacity="0.9"/>
          <ellipse cx="200" cy="85" rx="60" ry="38" opacity="0.85"/>
        </svg>
      </div>

      <div className="hero-content container">
        {/* Headline */}
        <h1 className="hero-headline">
          I design it,<br />
          then I build it.<br />
          <span className="hero-headline-accent">No handoff needed.</span>
        </h1>

        {/* Name & Role */}
        <p className="hero-name">
          Shandy Alfrizy — <span>UI/UX Designer &amp; Web Developer</span>
        </p>

        {/* Subtext */}
        <p className="hero-subtext">
          Most interfaces you can scroll right past. The ones I build<br className="hero-br-desktop" />
          do this to your eyes.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary" id="cta-see-work">
            See my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary" id="cta-get-in-touch">
            Get in touch
          </a>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="hero-bottom-bar">
        <div className="hero-bottom-left">
          <span className="hero-bottom-label">WORKING WORLDWIDE</span>
          <span className="hero-bottom-sub">NO OFFICE, ON PURPOSE</span>
        </div>
        <div className="hero-bottom-right">
          <span className="hero-bottom-label">OPEN FOR 2026</span>
          <span className="hero-bottom-sub">YOUR TIMEZONE, HANDLED</span>
        </div>
      </div>
    </section>
  );
}
