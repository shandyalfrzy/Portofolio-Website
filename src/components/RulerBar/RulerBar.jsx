import { useState, useEffect } from 'react';
import './RulerBar.css';

export default function RulerBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, Math.round(scrolled))));
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    handleScroll();

    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tickMarks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

  return (
    <div className="ruler-bar" id="ruler-bar">
      {/* Scroll Progress Bar Fill */}
      <div
        className="ruler-progress-fill"
        style={{ width: `${scrollPercent}%` }}
      />

      <div className="ruler-content">
        {/* Brand / Logo */}
        <div className="ruler-brand">
          <span className="ruler-brand-name">SHANDYALFRZY</span>
          <span className="ruler-percent-badge">{scrollPercent}%</span>
        </div>

        {/* Ruler Ticks */}
        <div className="ruler-ticks-container">
          {tickMarks.map((mark) => (
            <div key={mark} className="ruler-tick-item">
              <span className="ruler-tick-mark" />
              <span className="ruler-tick-val">{mark}</span>
            </div>
          ))}
        </div>

        {/* Live Status & Time */}
        <div className="ruler-status">
          <span className="ruler-live-dot" />
          <span className="ruler-live-text">LIVE</span>
          <span className="ruler-time">{currentTime}</span>
        </div>
      </div>
    </div>
  );
}
