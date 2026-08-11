import { useState, useRef, useEffect } from 'react';
import { SiFigma, SiCanvas, SiReact, SiJavascript, SiPython, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiObsstudio } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandVscode } from 'react-icons/tb';
import { Database, Image, Video } from 'lucide-react';
import weddingImg from '../../assets/Wedding.png';
import desakitaImg from '../../assets/DesaKita.png';
import mymedalarmImg from '../../assets/MyMedAlarm.png';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Work.css';

const IconFigma = () => <SiFigma size={22} />;
const IconCanva = () => <SiCanvas size={22} />;
const IconDb = () => <Database size={22} />;
const IconPhotoshop = () => <Image size={22} />;
const IconCapcut = () => <Video size={22} />;
const IconReact = () => <SiReact size={22} />;
const IconJs = () => <SiJavascript size={22} />;
const IconPython = () => <SiPython size={22} />;
const IconJava = () => <FaJava size={22} />;
const IconHtmlCss = () => <span style={{ display: 'inline-flex', gap: '3px' }}><SiHtml5 size={18} /><SiCss size={18} /></span>;
const IconTailwind = () => <SiTailwindcss size={22} />;
const IconBootstrap = () => <SiBootstrap size={22} />;
const IconVscode = () => <TbBrandVscode size={22} />;
const IconGit = () => <SiGit size={22} />;
const IconGithub = () => <SiGithub size={22} />;
const GithubIcon = () => <SiGithub size={16} />;
const IconObs = () => <SiObsstudio size={22} />;

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
  { name: 'Figma', category: 'Interface & Design Systems', Icon: IconFigma, colorClass: 'brand-card-figma' },
  { name: 'Canva', category: 'Graphics & Presentation', Icon: IconCanva, colorClass: 'brand-card-canva' },
  { name: 'DbDiagram', category: 'Database Schema Design', Icon: IconDb, colorClass: 'brand-card-dbdiagram' },
  { name: 'Photoshop', category: 'Raster Photo Editing', Icon: IconPhotoshop, colorClass: 'brand-card-photoshop' },
  { name: 'CapCut', category: 'Motion & Video Editing', Icon: IconCapcut, colorClass: 'brand-card-capcut' },
];

const devTools = [
  { name: 'React', category: 'Frontend UI Framework', Icon: IconReact, colorClass: 'brand-card-react' },
  { name: 'JavaScript', category: 'Core Language (ES6+)', Icon: IconJs, colorClass: 'brand-card-js' },
  { name: 'Python', category: 'Scripting & Automation', Icon: IconPython, colorClass: 'brand-card-python' },
  { name: 'Java', category: 'Object-Oriented Programming', Icon: IconJava, colorClass: 'brand-card-java' },
  { name: 'SQL', category: 'Database Query Language', Icon: IconDb, colorClass: 'brand-card-sql' },
  { name: 'HTML/CSS', category: 'Semantic Web Structure', Icon: IconHtmlCss, colorClass: 'brand-card-html' },
  { name: 'Tailwind CSS', category: 'Utility-First Styling', Icon: IconTailwind, colorClass: 'brand-card-tailwind' },
  { name: 'Bootstrap', category: 'Responsive UI Framework', Icon: IconBootstrap, colorClass: 'brand-card-bootstrap' },
  { name: 'VS Code', category: 'Primary IDE Workspace', Icon: IconVscode, colorClass: 'brand-card-vscode' },
  { name: 'Git', category: 'Version Control System', Icon: IconGit, colorClass: 'brand-card-git' },
  { name: 'GitHub', category: 'Code Hosting & CI/CD', Icon: IconGithub, colorClass: 'brand-card-github' },
  { name: 'OBS Studio', category: 'Screen Recording & Streaming', Icon: IconObs, colorClass: 'brand-card-obs' },
];

/* Duplicate arrays for seamless infinite marquee loop */
const designMarqueeList = [...designTools, ...designTools, ...designTools];
const devMarqueeList = [...devTools, ...devTools, ...devTools];

/* 3 Real Projects */
const projects = [
  {
    id: 'wedding',
    type: 'dev',
    statusText: 'LIVE',
    statusColor: '#27C06B',
    bulletColor: '#F0531C',
    title: 'Wedding Invitation Website',
    description:
      'A custom digital wedding invitation site built for Dina & Aji, featuring RSVP functionality and event details.',
    image: weddingImg,
    tags: ['React', 'JavaScript', 'Web Development'],
    targetUrl: 'https://undangan-wedding-dina-aji.vercel.app/',
    codeUrl: 'https://github.com/shandyalfrzy/Undangan-Wedding',
  },
  {
    id: 'desakita',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#0D99FF',
    bulletColor: '#0D99FF',
    title: 'DesaKita Companion',
    description:
      'A UI/UX case study for a village tourism companion app, designed to help visitors discover and navigate local attractions.',
    image: desakitaImg,
    tags: ['Figma', 'UI/UX Design'],
    targetUrl: 'https://www.figma.com/proto/aMiDbhNSMFz4AiFw9r5SUh/dpp-project-desa-wisata-kemiling?node-id=852-441&p=f&t=5TwIVAHOk2RNCMOJ-0&scaling=scale-down&content-scaling=fixed&page-id=778%3A399&starting-point-node-id=852%3A441&show-proto-sidebar=1',
    actionText: 'View prototype',
  },
  {
    id: 'mymedalarm',
    type: 'design',
    statusText: 'DESIGN',
    statusColor: '#0D99FF',
    bulletColor: '#9333EA',
    title: 'MyMedAlarm',
    description:
      'A UI/UX design for a medication reminder app, focused on helping users stay consistent with their medication schedules.',
    image: mymedalarmImg,
    tags: ['Figma', 'UI/UX Design'],
    targetUrl: 'https://www.figma.com/proto/OzdNqKOxOflrLfWafn9D1R/Shandy---MyMed-Alarm?node-id=11-19&p=f&t=A2WaEVCpJHgr1PTH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A3',
    actionText: 'View prototype',
  },
];

/* 5 Track Items for Infinite Circular Wrapping (3 real items): [P2, P0, P1, P2, P0] */
const extendedProjects = [
  { ...projects[2], cloneKey: 'clone-head-p2', originalIdx: 2 },
  { ...projects[0], cloneKey: 'real-p0', originalIdx: 0 },
  { ...projects[1], cloneKey: 'real-p1', originalIdx: 1 },
  { ...projects[2], cloneKey: 'real-p2', originalIdx: 2 },
  { ...projects[0], cloneKey: 'clone-tail-p0', originalIdx: 0 },
];

export default function Work() {
  const [trackIdx, setTrackIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const wheelLockRef = useRef(false);
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [techRef, techRevealed] = useScrollReveal({ threshold: 0.1 });
  const [projRef, projRevealed] = useScrollReveal({ threshold: 0.08 });

  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
      setTrackIdx(3); // Silent jump to real P2
    } else if (trackIdx === 4) {
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

  // Synchronized item width & gap for exact centering across screen sizes
  const isMobile = viewportWidth > 0 ? viewportWidth < 768 : (typeof window !== 'undefined' && window.innerWidth < 768);
  const cardWidth = isMobile
    ? (viewportWidth > 0 ? viewportWidth : 340)
    : Math.min(740, viewportWidth > 0 ? viewportWidth : 740);
  const gap = isMobile ? 20 : 40;
  const slideStep = cardWidth + gap;
  const slideHalf = cardWidth / 2;
  const currentOffsetPx = trackIdx * slideStep + slideHalf - dragOffset;

  // Real index (0 to 3) for counter & active dots
  const realCurrentIdx = extendedProjects[trackIdx]?.originalIdx ?? 0;

  return (
    <section className="work" id="work">
      <div className="work-content container">

        {/* ===================================================
           SUBSECTION 1: TOOLS & TECH (INFINITE AUTO-SCROLLING MARQUEE)
           =================================================== */}
        <div className="tech-stack-section" ref={techRef}>
          <div className="tech-stack-header">
            <span
              className={`work-label ${techRevealed ? 'is-revealed' : ''}`}
              data-reveal="fast"
              style={{ '--reveal-delay': '0ms' }}
            >TOOLS &amp; TECH</span>
            <h2
              className={`tech-stack-title ${techRevealed ? 'is-revealed' : ''}`}
              data-reveal="slow"
              style={{ '--reveal-delay': '80ms' }}
            >My Craft &amp; Toolkit</h2>
          </div>

          <div className="tech-groups-container">
            <div
              className={`tech-group-block ${techRevealed ? 'is-revealed' : ''}`}
              data-reveal
              style={{ '--reveal-delay': '180ms' }}
            >
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

            <div
              className={`tech-group-block ${techRevealed ? 'is-revealed' : ''}`}
              data-reveal
              style={{ '--reveal-delay': '280ms' }}
            >
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
        <div className="featured-projects-section" ref={projRef}>
          <div className="projects-header-row">
            <div>
              <span
                className={`work-label ${projRevealed ? 'is-revealed' : ''}`}
                data-reveal="fast"
                style={{ '--reveal-delay': '0ms' }}
              >SELECTED WORK</span>
              <h2
                className={`projects-title ${projRevealed ? 'is-revealed' : ''}`}
                data-reveal="slow"
                style={{ '--reveal-delay': '80ms' }}
              >Featured Projects</h2>
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
            ref={viewportRef}
            className={`peek-carousel-viewport ${projRevealed ? 'is-revealed' : ''}`}
            data-reveal
            style={{ '--reveal-delay': '160ms' }}
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
                gap: `${gap}px`,
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
                    style={{
                      flex: `0 0 ${cardWidth}px`,
                      width: `${cardWidth}px`,
                    }}
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
                                <span className="btn-label">
                                  View live site
                                  <ExternalLinkIcon />
                                </span>
                              </a>
                              <a
                                href={proj.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                id={`btn-code-${proj.id}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className="btn-label">
                                  View code
                                  <GithubIcon />
                                </span>
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
                              <span className="btn-label">
                                {proj.actionText || 'View design'}
                                <ExternalLinkIcon />
                              </span>
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
