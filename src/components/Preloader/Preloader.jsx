import { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nameText = "SHANDY ALFARIZY";

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 2200;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const ratio = currentStep / steps;
      const easedProgress = Math.min(
        100,
        Math.round(100 * Math.sin((ratio * Math.PI) / 2))
      );

      setProgress(easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setProgress(100);

        setTimeout(() => {
          setIsFading(true);

          setTimeout(() => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 1000);
        }, 300);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader-overlay ${isFading ? 'preloader-overlay--fade' : ''}`}
      id="preloader-overlay"
      aria-label="Loading Portfolio"
    >
      <div className="preloader-curtain preloader-curtain--left" aria-hidden="true" />
      <div className="preloader-curtain preloader-curtain--right" aria-hidden="true" />

      <div className="preloader-content">
        <div className="preloader-pill">
          <span className="preloader-pill-dot" />
          <span className="preloader-pill-label">PORTFOLIO '26</span>
        </div>

        <h1 className="preloader-title" aria-label={nameText}>
          {nameText.split('').map((char, idx) => (
            <span
              key={`${char}-${idx}`}
              className="stagger-letter"
              style={{ animationDelay: `${idx * 0.045 + 0.1}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className="preloader-role">UI/UX Designer &amp; Web Developer</p>

        <div className="preloader-progress-block">
          <div className="preloader-counter-row">
            <span key={progress} className="preloader-counter animate-digit">
              {progress}%
            </span>
          </div>

          <div className="preloader-bar-bg">
            <div
              className="preloader-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
