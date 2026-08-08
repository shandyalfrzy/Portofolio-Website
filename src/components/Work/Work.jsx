import { useState, useRef, useEffect } from 'react';
import taskflowImg from '../../assets/project-taskflow.png';
import finpulseImg from '../../assets/project-finpulse.png';
import novaosImg from '../../assets/project-novaos.png';
import auraImg from '../../assets/project-aura.png';
import './Work.css';

/* ===================================================
   SVG Brand Icons for Tools & Tech (Zero dependency, 100% vector)
   =================================================== */

const FigmaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const CanvaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.2 17.5c-3.1 0-4.8-1.9-4.8-4.7 0-3.3 2.3-5.8 5.6-5.8 2.2 0 3.6 1.1 3.6 2.7 0 1.2-.7 2.1-1.7 2.1-.6 0-.9-.3-.8-.9.2-.8.5-1.7.5-2.2 0-.5-.3-.8-.8-.8-.9 0-2.1 1.4-2.1 3.1 0 .9.4 1.4 1.1 1.4.3 0 .7-.1 1.1-.3-.4 1.5-1.1 3.8-1.5 5.4h-.2z"/>
  </svg>
);

const DbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0v24h24V0H0zm2.7 2.7h18.6v18.6H2.7V2.7zm5.55 3.75c-1.35 0-2.4 1.05-2.4 2.4v8.1h2.55v-3.75h1.65c1.8 0 3.15-1.05 3.15-3.35 0-2.1-1.35-3.4-3.35-3.4H8.25zm.15 2.1h1.2c.9 0 1.5.45 1.5 1.4 0 .95-.6 1.35-1.5 1.35H8.4V8.55zm9.15 4.05c-1.35 0-2.25.6-2.85 1.5l1.65 1.2c.3-.45.6-.75 1.2-.75.6 0 .9.3.9.75v.3c-.45-.15-1.05-.3-1.8-.3-1.65 0-2.7.9-2.7 2.25 0 1.2 1.05 2.1 2.4 2.1 1.05 0 1.8-.45 2.25-1.2v1.05h2.4v-5.25c0-1.8-1.5-3.15-3.45-3.15zm.6 3.9c0 .75-.6 1.35-1.35 1.35-.6 0-.9-.3-.9-.75 0-.45.3-.75.9-.75.45 0 .9.05 1.35.15v-.05z"/>
  </svg>
);

const CapCutIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 10l5-3a1 1 0 011 1v8a1 1 0 01-1 1l-5-3M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const JsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M12.75 18.25c.5.85 1.3 1.45 2.55 1.45 1.35 0 2.2-.65 2.2-2.3v-7.15h2.65v7.2c0 3.05-1.7 4.35-4.7 4.35-2.4 0-3.9-1.2-4.55-2.65l1.85-1.05zM5.55 18.45c.75 1.15 1.95 1.8 3.5 1.8 1.55 0 2.65-.7 2.65-1.85 0-1.25-.85-1.75-2.4-2.45l-.85-.35c-2.45-1.05-3.6-2.05-3.6-4.3 0-2.5 2-4.3 5.05-4.3 2.2 0 3.7.8 4.6 2.3l-1.95 1.25c-.5-.85-1.3-1.25-2.6-1.25-1.3 0-2.1.65-2.1 1.6 0 .95.65 1.55 2.15 2.2l.85.35c2.9 1.25 4 2.35 4 4.5 0 2.85-2.2 4.55-5.55 4.55-2.85 0-4.65-1.2-5.5-2.7l1.85-1.15z" fill="#000"/>
  </svg>
);

const HtmlIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.68H5.414l.7 8.083h9.983l-.378 4.25-3.733 1.013-3.737-1.014-.242-2.766H5.419l.477 5.485 6.088 1.687 6.096-1.687.839-9.65H8.531z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const VsCodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.12a.999.999 0 00-1.41.21L.21 8.21a.999.999 0 00.21 1.41l3.52 2.66-3.52 2.66a.999.999 0 00-.21 1.41l1.305 1.99a.999.999 0 001.41.21l4.12-3.12 9.46 8.63a1.494 1.494 0 001.705.29l4.94-2.377A1.5 1.5 0 0024 20.613V3.387a1.5 1.5 0 00-.85-1.3zm-6.15 14.78L10.35 12l6.65-5.367v10.734z"/>
  </svg>
);

const GitIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.07 1.887.437.5.502.645 1.23.438 1.872l2.67 2.67c.645-.216 1.38-.07 1.887.437.7.7.7 1.837 0 2.537-.7.7-1.838.7-2.538 0-.543-.544-.67-1.348-.38-2.012l-2.493-2.493v6.334c.185.116.353.272.483.436.7.7.7 1.837 0 2.537-.7.7-1.838.7-2.538 0-.7-.7-.7-1.837 0-2.537.174-.174.37-.308.577-.4v-6.38c-.207-.092-.403-.226-.577-.4-.543-.543-.67-1.347-.38-2.01L8.14 3.195 1.455 9.88c-.604.603-.604 1.58 0 2.185l10.48 10.48c.604.603 1.58.603 2.185 0l10.426-10.426c.603-.603.603-1.58 0-2.188z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ObsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 1 0 24 12 12.013 12.013 0 0 0 12 0zm0 3.3a8.7 8.7 0 0 1 7.425 13.223A8.675 8.675 0 0 1 12 20.7a8.7 8.7 0 1 1 0-17.4zm-1.8 4.2a4.5 4.5 0 1 0 5.865 4.275A4.505 4.505 0 0 0 10.2 7.5z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
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

const DragIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8L22 12L18 16M6 8L2 12L6 16M2 12H22" />
  </svg>
);

/* Tools & Tech Data */
const designTools = [
  { name: 'Figma', category: 'Interface & Design Systems', Icon: FigmaIcon, colorClass: 'brand-card-figma' },
  { name: 'Canva', category: 'Graphics & Presentation', Icon: CanvaIcon, colorClass: 'brand-card-canva' },
  { name: 'DbDiagram', category: 'Database Schema Design', Icon: DbIcon, colorClass: 'brand-card-dbdiagram' },
  { name: 'Photoshop', category: 'Raster Photo Editing', Icon: PhotoshopIcon, colorClass: 'brand-card-photoshop' },
  { name: 'CapCut', category: 'Motion & Video Editing', Icon: CapCutIcon, colorClass: 'brand-card-capcut' },
];

const devTools = [
  { name: 'React', category: 'Frontend UI Framework', Icon: ReactIcon, colorClass: 'brand-card-react' },
  { name: 'JavaScript', category: 'Core Language (ES6+)', Icon: JsIcon, colorClass: 'brand-card-js' },
  { name: 'HTML/CSS', category: 'Semantic Web Structure', Icon: HtmlIcon, colorClass: 'brand-card-html' },
  { name: 'Tailwind CSS', category: 'Utility-First Styling', Icon: TailwindIcon, colorClass: 'brand-card-tailwind' },
  { name: 'VS Code', category: 'Primary IDE Workspace', Icon: VsCodeIcon, colorClass: 'brand-card-vscode' },
  { name: 'Git', category: 'Version Control System', Icon: GitIcon, colorClass: 'brand-card-git' },
  { name: 'GitHub', category: 'Code Hosting & CI/CD', Icon: GithubIcon, colorClass: 'brand-card-github' },
  { name: 'OBS Studio', category: 'Screen Recording & Streaming', Icon: ObsIcon, colorClass: 'brand-card-obs' },
];

/* Duplicate arrays for seamless infinite marquee loop */
const designMarqueeList = [...designTools, ...designTools, ...designTools];
const devMarqueeList = [...devTools, ...devTools, ...devTools];

/* 4 Featured Projects Data */
const projects = [
  {
    id: 'taskflow',
    type: 'dev',
    statusText: 'LIVE',
    statusColor: '#27C06B',
    bulletColor: '#F0531C',
    title: 'TaskFlow — AI Workspace',
    description:
      'A modern project management dashboard combining real-time collaboration widgets with AI-driven task scheduling.',
    image: taskflowImg,
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Figma'],
    targetUrl: 'https://example.com/taskflow',
    codeUrl: 'https://github.com/shandyalfrzy/taskflow',
  },
  {
    id: 'finpulse',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#0D99FF',
    bulletColor: '#0D99FF',
    title: 'FinPulse — Mobile Banking UI',
    description:
      'A sleek, accessible mobile banking interface designed in Figma with high-contrast data visualization and card flows.',
    image: finpulseImg,
    tags: ['Figma', 'DbDiagram', 'UI/UX Design'],
    targetUrl: 'https://figma.com/@shandyalfrzy/finpulse',
  },
  {
    id: 'novaos',
    type: 'dev',
    statusText: 'LIVE',
    statusColor: '#27C06B',
    bulletColor: '#27C06B',
    title: 'NovaOS — Web Desktop Experience',
    description:
      'An interactive web-based desktop environment featuring window management, custom widgets, and fluid micro-interactions.',
    image: novaosImg,
    tags: ['React', 'JavaScript', 'Figma', 'HTML/CSS'],
    targetUrl: 'https://example.com/novaos',
    codeUrl: 'https://github.com/shandyalfrzy/novaos',
  },
  {
    id: 'aura',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#9333EA',
    bulletColor: '#9333EA',
    title: 'Aura Health — Wellness App Study',
    description:
      'Comprehensive UI/UX case study and design system for a mindfulness app, focusing on calming mood tracking flows.',
    image: auraImg,
    tags: ['Figma', 'Canva', 'User Research'],
    targetUrl: 'https://figma.com/@shandyalfrzy/aura-health',
  },
];

/* 6 Track Items for Infinite Circular Wrapping: [P3, P0, P1, P2, P3, P0] */
const extendedProjects = [
  { ...projects[3], cloneKey: 'clone-head-p3', originalIdx: 3 },
  { ...projects[0], cloneKey: 'real-p0', originalIdx: 0 },
  { ...projects[1], cloneKey: 'real-p1', originalIdx: 1 },
  { ...projects[2], cloneKey: 'real-p2', originalIdx: 2 },
  { ...projects[3], cloneKey: 'real-p3', originalIdx: 3 },
  { ...projects[0], cloneKey: 'clone-tail-p0', originalIdx: 0 },
];

export default function Work() {
  const [trackIdx, setTrackIdx] = useState(1); // Start at 1 (real P0)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const wheelLockRef = useRef(false);

  const triggerInteraction = () => {
    if (!hasInteracted) setHasInteracted(true);
  };

  const nextProject = () => {
    triggerInteraction();
    if (!isTransitioning) return;
    setTrackIdx((prev) => prev + 1);
  };

  const prevProject = () => {
    triggerInteraction();
    if (!isTransitioning) return;
    setTrackIdx((prev) => prev - 1);
  };

  const goToProject = (targetOrigIdx) => {
    triggerInteraction();
    setTrackIdx(targetOrigIdx + 1);
  };

  /* Infinite Circular Jump Listener */
  const handleTransitionEnd = () => {
    if (trackIdx === 0) {
      setIsTransitioning(false);
      setTrackIdx(4); // Silent jump to real P3
    } else if (trackIdx === 5) {
      setIsTransitioning(false);
      setTrackIdx(1); // Silent jump to real P0
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  /* Mouse Drag Gesture Handlers */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 40) {
      if (dragOffset < 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
    setDragOffset(0);
  };

  /* Mouse Wheel / Trackpad Gesture Handlers */
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 20 || wheelLockRef.current) return;

    wheelLockRef.current = true;
    if (delta > 0) {
      nextProject();
    } else {
      prevProject();
    }
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 500);
  };

  /* Touch Handlers for Mobile Swipe */
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = dragStartX - touchEndX;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        nextProject();
      } else {
        prevProject();
      }
    }
  };

  // Synchronized item width & gap for exact centering
  const slideStep = 780;
  const slideHalf = 370;
  const currentOffsetPx = trackIdx * slideStep + slideHalf - dragOffset;

  // Real index (0 to 3) for counter & active dots
  const realCurrentIdx = extendedProjects[trackIdx]?.originalIdx ?? 0;

  return (
    <section className="work" id="work">
      <div className="work-content container">

        {/* ===================================================
           SUBSECTION 1: TOOLS & TECH (INFINITE AUTO-SCROLLING MARQUEE)
           =================================================== */}
        <div className="tech-stack-section">
          <div className="tech-stack-header">
            <span className="work-label">TOOLS &amp; TECH</span>
            <h2 className="tech-stack-title">My Craft &amp; Toolkit</h2>
          </div>

          <div className="tech-groups-container">
            {/* Design Group (Marquee Left) */}
            <div className="tech-group-block">
              <div className="tech-group-header">
                <span className="tech-group-label">DESIGN</span>
                <span className="tech-group-count">{designTools.length} tools</span>
              </div>
              <div className="marquee-container">
                <div className="marquee-track marquee-track-left">
                  {designMarqueeList.map(({ name, category, Icon, colorClass }, idx) => (
                    <div key={`design-${name}-${idx}`} className={`tool-card ${colorClass}`}>
                      <div className="tool-card-icon">
                        <Icon />
                      </div>
                      <div className="tool-card-info">
                        <span className="tool-card-name">{name}</span>
                        <span className="tool-card-cat">{category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Development Group (Marquee Right) */}
            <div className="tech-group-block">
              <div className="tech-group-header">
                <span className="tech-group-label">DEVELOPMENT</span>
                <span className="tech-group-count">{devTools.length} tools</span>
              </div>
              <div className="marquee-container">
                <div className="marquee-track marquee-track-right">
                  {devMarqueeList.map(({ name, category, Icon, colorClass }, idx) => (
                    <div key={`dev-${name}-${idx}`} className={`tool-card ${colorClass}`}>
                      <div className="tool-card-icon">
                        <Icon />
                      </div>
                      <div className="tool-card-info">
                        <span className="tool-card-name">{name}</span>
                        <span className="tool-card-cat">{category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
           SUBSECTION 2: FEATURED PROJECTS (INFINITE PEEK FLEX CAROUSEL)
           =================================================== */}
        <div className="featured-projects-section">
          <div className="projects-header-row">
            <div>
              <span className="work-label">SELECTED WORK</span>
              <h2 className="projects-title">Featured Projects</h2>
            </div>

            {/* Carousel Navigation & Counter */}
            <div className="carousel-nav-top">
              {!hasInteracted && (
                <span className="drag-hint-pill">
                  <DragIcon /> DRAG / SWIPE
                </span>
              )}

              <span className="project-counter">
                0{realCurrentIdx + 1} / 0{projects.length}
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

          {/* Infinite Peek Carousel Viewport */}
          <div
            className="peek-carousel-viewport"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Flex Track */}
            <div
              className="peek-carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(50% - ${currentOffsetPx}px))`,
                transition: isDragging || !isTransitioning ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {extendedProjects.map((proj, i) => {
                const isActive = i === trackIdx;

                return (
                  <div
                    key={proj.cloneKey}
                    className={`peek-card-slide ${isActive ? 'peek-card-slide--active' : 'peek-card-slide--side'}`}
                    onClick={() => !isActive && setTrackIdx(i)}
                  >
                    {/* Dark Card (#0E1620) with RAW Screenshot (NO MOCKUP FRAME, NO BROWSER CHROME) */}
                    <div className="project-dark-card">
                      {/* Top-Left: Status Pill */}
                      <div className="dark-card-status-pill">
                        <span
                          className="status-dot-pulse"
                          style={{ background: proj.statusColor }}
                        />
                        <span className="status-label">{proj.statusText}</span>
                      </div>

                      {/* Top-Right: External Link Button */}
                      <a
                        href={proj.targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark-card-ext-btn"
                        aria-label={`View ${proj.title}`}
                        id={`ext-link-${proj.id}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLinkIcon />
                      </a>

                      {/* Raw Project Screenshot directly (NO MOCKUP BEZEL, NO BROWSER BAR) */}
                      <div className="raw-image-container">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="raw-project-img"
                        />
                      </div>
                    </div>

                    {/* Below Dark Card: Dedicated Info Block (Title, Tags, Description, Actions) */}
                    <div className="project-info-block">
                      <div className="project-info-top">
                        <div className="project-title-group">
                          <span
                            className="project-bullet-square"
                            style={{ background: proj.bulletColor }}
                          />
                          <h3 className="project-title">{proj.title}</h3>
                        </div>

                        <div className="project-tags">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-info-bottom">
                        <p className="project-description">{proj.description}</p>

                        <div className="project-actions">
                          {proj.type === 'dev' ? (
                            <>
                              <a
                                href={proj.targetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                id={`btn-live-${proj.id}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                View live site
                                <ExternalLinkIcon />
                              </a>
                              <a
                                href={proj.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                id={`btn-code-${proj.id}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                View code
                                <GithubIcon />
                              </a>
                            </>
                          ) : (
                            <a
                              href={proj.targetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                              id={`btn-design-${proj.id}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              View design
                              <ExternalLinkIcon />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                className={`carousel-dot ${idx === realCurrentIdx ? 'carousel-dot--active' : ''}`}
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
