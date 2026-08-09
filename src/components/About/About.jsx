import { useEffect, useRef, useState } from 'react';
import TiltCard from './TiltCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const statsData = [
  { target: 2, suffix: '+', label: 'YEARS EXPERIENCE' },
  { target: 15, suffix: '+', label: 'PROJECTS COMPLETED' },
  { target: 100, suffix: '%', label: 'INDEPENDENT WORK' },
];

export default function About() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [revealRef, revealed] = useScrollReveal({ threshold: 0.12 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate count-up over 1.8 seconds (1800ms) with ease-out cubic curve
          const duration = 1800;
          const intervalTime = 30;
          const steps = duration / intervalTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(1, currentStep / steps);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts([
              Math.round(statsData[0].target * easeOutProgress),
              Math.round(statsData[1].target * easeOutProgress),
              Math.round(statsData[2].target * easeOutProgress),
            ]);

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts([statsData[0].target, statsData[1].target, statsData[2].target]);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="about" id="about" ref={(el) => { sectionRef.current = el; revealRef.current = el; }}>
      <div className="about-blobs" aria-hidden="true">
        <div className="about-blob blob-cyan" />
        <div className="about-blob blob-ice" />
      </div>

      <div className="about-content container">
        <div className="about-photo-col">
          <div
            className={`${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '0ms' }}
          >
            <TiltCard />
          </div>
        </div>

        <div className="about-text-col">
          <span
            className={`about-label ${revealed ? 'is-revealed' : ''}`}
            data-reveal="fast"
            style={{ '--reveal-delay': '60ms' }}
          >ABOUT ME</span>
          <h2
            className={`about-headline ${revealed ? 'is-revealed' : ''}`}
            data-reveal="slow"
            style={{ '--reveal-delay': '130ms' }}
          >
            Designer who codes.<br />
            Developer who designs.
          </h2>
          <p
            className={`about-bio ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '230ms' }}
          >
            I'm Shandy — a UI/UX Designer and Web Developer who believes great digital
            products happen when design and engineering think together, not in silos.
          </p>
          <p
            className={`about-bio ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '310ms' }}
          >
            I'm passionate about crafting interfaces that don't just look good but feel
            intuitive — the kind of experiences people use without thinking about. From
            wireframes to fully functional code, I handle the entire journey independently.
          </p>
          <p
            className={`about-bio ${revealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '390ms' }}
          >
            My approach is simple: understand the people, obsess over the details, and
            ship work that earns a second look. Whether it's a brand-new product or an
            existing one that needs a rethink, I bring both the pixels and the logic.
          </p>

          <div className="about-stats">
            {statsData.map((stat, idx) => (
              <div
                key={stat.label}
                className={`about-stat ${revealed ? 'is-revealed' : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${480 + idx * 80}ms` }}
              >
                <span className="about-stat-number">
                  {counts[idx]}
                  {stat.suffix}
                </span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
