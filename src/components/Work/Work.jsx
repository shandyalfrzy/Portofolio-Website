import { useState, useRef } from 'react';
import taskflowImg from '../../assets/project-taskflow.png';
import finpulseImg from '../../assets/project-finpulse.png';
import novaosImg from '../../assets/project-novaos.png';
import auraImg from '../../assets/project-aura.png';
import './Work.css';

/* SVG Brand Icons for Tools & Tech (Zero dependency, 100% reliable) */
const FigmaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const CanvaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.2 17.5c-3.1 0-4.8-1.9-4.8-4.7 0-3.3 2.3-5.8 5.6-5.8 2.2 0 3.6 1.1 3.6 2.7 0 1.2-.7 2.1-1.7 2.1-.6 0-.9-.3-.8-.9.2-.8.5-1.7.5-2.2 0-.5-.3-.8-.8-.8-.9 0-2.1 1.4-2.1 3.1 0 .9.4 1.4 1.1 1.4.3 0 .7-.1 1.1-.3-.4 1.5-1.1 3.8-1.5 5.4h-.2z"/>
  </svg>
);

const DbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const JsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M12.75 18.25c.5.85 1.3 1.45 2.55 1.45 1.35 0 2.2-.65 2.2-2.3v-7.15h2.65v7.2c0 3.05-1.7 4.35-4.7 4.35-2.4 0-3.9-1.2-4.55-2.65l1.85-1.05zM5.55 18.45c.75 1.15 1.95 1.8 3.5 1.8 1.55 0 2.65-.7 2.65-1.85 0-1.25-.85-1.75-2.4-2.45l-.85-.35c-2.45-1.05-3.6-2.05-3.6-4.3 0-2.5 2-4.3 5.05-4.3 2.2 0 3.7.8 4.6 2.3l-1.95 1.25c-.5-.85-1.3-1.25-2.6-1.25-1.3 0-2.1.65-2.1 1.6 0 .95.65 1.55 2.15 2.2l.85.35c2.9 1.25 4 2.35 4 4.5 0 2.85-2.2 4.55-5.55 4.55-2.85 0-4.65-1.2-5.5-2.7l1.85-1.15z" fill="#000"/>
  </svg>
);

const HtmlIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.68H5.414l.7 8.083h9.983l-.378 4.25-3.733 1.013-3.737-1.014-.242-2.766H5.419l.477 5.485 6.088 1.687 6.096-1.687.839-9.65H8.531z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* Tools & Tech Data */
const designTools = [
  { name: 'Figma', Icon: FigmaIcon, colorClass: 'brand-figma' },
  { name: 'Canva', Icon: CanvaIcon, colorClass: 'brand-canva' },
  { name: 'DbDiagram', Icon: DbIcon, colorClass: 'brand-dbdiagram' },
];

const devTools = [
  { name: 'React', Icon: ReactIcon, colorClass: 'brand-react' },
  { name: 'JavaScript', Icon: JsIcon, colorClass: 'brand-js' },
  { name: 'HTML/CSS', Icon: HtmlIcon, colorClass: 'brand-html' },
];

/* 4 Featured Projects Data */
const projects = [
  {
    id: 'taskflow',
    type: 'dev',
    statusText: 'LIVE',
    statusColor: '#27C06B', // green
    bulletColor: '#F0531C', // orange
    title: 'TaskFlow — AI Workspace',
    description:
      'A modern project management dashboard combining real-time collaboration widgets with AI-driven task scheduling and intelligent workflow automation.',
    image: taskflowImg,
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Figma'],
    targetUrl: 'https://example.com/taskflow',
    codeUrl: 'https://github.com/shandyalfrzy/taskflow',
  },
  {
    id: 'finpulse',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#0D99FF', // cyan
    bulletColor: '#0D99FF', // cyan
    title: 'FinPulse — Mobile Banking UI',
    description:
      'A sleek, accessible mobile banking interface designed in Figma with high-contrast data visualization, card management, and biometric authorization flows.',
    image: finpulseImg,
    tags: ['Figma', 'DbDiagram', 'UI/UX Design'],
    targetUrl: 'https://figma.com/@shandyalfrzy/finpulse',
  },
  {
    id: 'novaos',
    type: 'dev',
    statusText: 'LIVE',
    statusColor: '#27C06B', // green
    bulletColor: '#27C06B', // green
    title: 'NovaOS — Web Desktop Experience',
    description:
      'An interactive web-based desktop environment featuring window management, custom widgets, and fluid micro-interactions built with vanilla React and CSS.',
    image: novaosImg,
    tags: ['React', 'JavaScript', 'Figma', 'HTML/CSS'],
    targetUrl: 'https://example.com/novaos',
    codeUrl: 'https://github.com/shandyalfrzy/novaos',
  },
  {
    id: 'aura',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#9333EA', // purple
    bulletColor: '#9333EA', // purple
    title: 'Aura Health — Wellness App Study',
    description:
      'Comprehensive UI/UX case study and design system for a mindfulness app, focusing on calming color palettes, mood tracking, and guided meditation flows.',
    image: auraImg,
    tags: ['Figma', 'Canva', 'User Research'],
    targetUrl: 'https://figma.com/@shandyalfrzy/aura-health',
  },
];

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);

  const goToProject = (newIndex) => {
    if (animating || newIndex === currentIndex) return;
    setAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setAnimating(false), 380);
  };

  const nextProject = () => {
    const next = (currentIndex + 1) % projects.length;
    goToProject(next);
  };

  const prevProject = () => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    goToProject(prev);
  };

  /* Touch Handlers for Mobile Swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    touchStartX.current = null;
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="work" id="work">
      <div className="work-content container">

        {/* ===================================================
           SUBSECTION 1: TOOLS & TECH (NO EMOJIS, CLEAN SVG BRAND ICONS)
           =================================================== */}
        <div className="tech-stack-section">
          <div className="tech-stack-header">
            <span className="work-label">TOOLS &amp; TECH</span>
            <h2 className="tech-stack-title">My Craft &amp; Toolkit</h2>
          </div>

          <div className="tech-groups-container">
            {/* Design Group */}
            <div className="tech-group">
              <span className="tech-group-label">DESIGN</span>
              <div className="tech-pills">
                {designTools.map(({ name, Icon, colorClass }) => (
                  <span key={name} className={`tech-pill ${colorClass}`}>
                    <span className="tech-pill-icon"><Icon /></span>
                    <span className="tech-pill-name">{name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Development Group */}
            <div className="tech-group">
              <span className="tech-group-label">DEVELOPMENT</span>
              <div className="tech-pills">
                {devTools.map(({ name, Icon, colorClass }) => (
                  <span key={name} className={`tech-pill ${colorClass}`}>
                    <span className="tech-pill-icon"><Icon /></span>
                    <span className="tech-pill-name">{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
           SUBSECTION 2: FEATURED PROJECTS (DARK LAPTOP MOCKUP CARD)
           =================================================== */}
        <div className="featured-projects-section">
          <div className="projects-header-row">
            <div>
              <span className="work-label">SELECTED WORK</span>
              <h2 className="projects-title">Featured Projects</h2>
            </div>

            {/* Carousel Counter & Navigation */}
            <div className="carousel-nav-top">
              <span className="project-counter">
                0{currentIndex + 1} / 0{projects.length}
              </span>
              <div className="carousel-arrows">
                <button
                  className="carousel-arrow"
                  onClick={prevProject}
                  aria-label="Previous project"
                  id="project-prev-btn"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  className="carousel-arrow"
                  onClick={nextProject}
                  aria-label="Next project"
                  id="project-next-btn"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Showcase Container */}
          <div
            className="project-showcase-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Dark Card (#0E1620) with Laptop Mockup */}
            <div className={`project-dark-card ${animating ? 'project-dark-card--animating' : ''}`}>
              
              {/* Top-Left: Status Pill */}
              <div className="dark-card-status-pill">
                <span
                  className="status-dot-pulse"
                  style={{ background: currentProject.statusColor }}
                />
                <span className="status-label">{currentProject.statusText}</span>
              </div>

              {/* Top-Right: External Link Button */}
              <a
                href={currentProject.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-card-ext-btn"
                aria-label={`View ${currentProject.title}`}
                id={`ext-link-${currentProject.id}`}
              >
                <ExternalLinkIcon />
              </a>

              {/* Laptop Mockup Display */}
              <div className="laptop-mockup-frame">
                {/* Laptop Screen Bezel */}
                <div className="laptop-screen">
                  {/* Browser Bar */}
                  <div className="laptop-browser-bar">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                    <span className="browser-url-text">{currentProject.id}.shandy.dev</span>
                  </div>
                  {/* Project Screenshot */}
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="laptop-screen-img"
                  />
                </div>

                {/* Laptop Base Keyboard Highlight */}
                <div className="laptop-keyboard-base">
                  <div className="laptop-notch" />
                </div>
              </div>
            </div>

            {/* Below Dark Card: Info Row */}
            <div className={`project-info-row ${animating ? 'project-info-row--animating' : ''}`}>
              <div className="project-info-header">
                {/* Colored Square Bullet + Title */}
                <div className="project-title-group">
                  <span
                    className="project-bullet-square"
                    style={{ background: currentProject.bulletColor }}
                  />
                  <h3 className="project-title">{currentProject.title}</h3>
                </div>

                {/* Tool Tag Pills */}
                <div className="project-tags">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Action Buttons */}
              <div className="project-info-body">
                <p className="project-description">{currentProject.description}</p>

                <div className="project-actions">
                  {currentProject.type === 'dev' ? (
                    <>
                      <a
                        href={currentProject.targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        id={`btn-live-${currentProject.id}`}
                      >
                        View live site
                        <ExternalLinkIcon />
                      </a>
                      <a
                        href={currentProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        id={`btn-code-${currentProject.id}`}
                      >
                        View code
                        <GithubIcon />
                      </a>
                    </>
                  ) : (
                    <a
                      href={currentProject.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      id={`btn-design-${currentProject.id}`}
                    >
                      View design
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                className={`carousel-dot ${idx === currentIndex ? 'carousel-dot--active' : ''}`}
                onClick={() => goToProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
                id={`project-dot-${idx}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
