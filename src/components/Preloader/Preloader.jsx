import { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nameText = "SHANDY ALFARIZY";

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // 2.2s total count duration
    const duration = 2200;
    const intervalTime = 20; // 50 updates/sec
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

        // Hold at 100% briefly (~250ms), then start cinematic dissipation exit
        setTimeout(() => {
          setIsFading(true);

          // After exit transition (480ms), unlock scroll & call onComplete
          setTimeout(() => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 480);
        }, 250);
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
      {/* Animated Blurred Gradient Blobs + Dot Grid Layer */}
      <div className="preloader-blobs" aria-hidden="true">
        <div className="preloader-blob blob-orange" />
        <div className="preloader-blob blob-cyan" />
        <div className="preloader-dot-grid" />
      </div>

      <div className="preloader-content">
        {/* "PORTFOLIO '26" Status Pill with Soft Blinking Dot */}
        <div className="preloader-pill">
          <span className="preloader-pill-dot" />
          <span className="preloader-pill-label">PORTFOLIO '26</span>
        </div>

        {/* Staggered Letter-by-Letter Name Reveal */}
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

        {/* Counter with Glow/Pulse + Shimmer Progress Bar */}
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
