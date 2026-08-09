import { useState, useEffect, useRef, useCallback } from 'react';

// ── Config ──────────────────────────────────────────────────────────────
const LINES         = ['I DESIGN IT,', 'THEN I BUILD IT.'];
const COLOR_ORANGE  = '#F0531C';
const COLOR_NAVY    = '#14202B';
const REPEL_RADIUS  = 110;   // px — scatter distance around cursor
const SPRING        = 0.072; // how eagerly particles snap home
const DAMPING       = 0.80;  // velocity friction each frame
const DOT_SIZE      = 3.5;   // px square per dot
const ORANGE_RATIO  = 0.78;  // 78% orange, 22% navy

function pickColor() {
  return Math.random() < ORANGE_RATIO ? COLOR_ORANGE : COLOR_NAVY;
}

function getFontSize(W) {
  const vw = window.innerWidth;
  if (vw >= 1400) return 158;
  if (vw >= 1100) return 132;
  if (vw >= 768)  return 100;
  if (vw >= 480)  return 60;
  
  // On mobile (< 480px), scale fs dynamically relative to container width W
  const baseFs = Math.min(42, Math.max(30, Math.floor(W * 0.105)));
  return baseFs;
}

function getGap(fs) {
  if (fs >= 100) return 5;
  if (fs >= 60)  return 4;
  return 3; // Dense particle sampling for mobile so letters are sharp & legible
}

function getDotSize(fs) {
  if (fs >= 100) return 3.5;
  if (fs >= 60)  return 2.8;
  return 2.4;
}

function getRepelRadius(fs) {
  const vw = window.innerWidth;
  if (vw < 768) return Math.min(50, fs * 1.1);
  return REPEL_RADIUS;
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

// ── Component ────────────────────────────────────────────────────────────
export default function ParticleHeadline() {
  const canvasRef  = useRef(null);
  const ctxRef     = useRef(null);
  const ptsRef     = useRef([]);   // particle array
  const configRef  = useRef({ dotSize: DOT_SIZE, repelRadius: REPEL_RADIUS });
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef(null);
  const reducedRef = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    const onResize = debounce(checkMobile, 150);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Build: sample text → create particle array ──────────────────────
  const build = useCallback(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const dpr   = window.devicePixelRatio || 1;
    const W     = canvas.parentElement.clientWidth;
    let fs      = getFontSize(W);
    const gap   = getGap(fs);
    const dotSz = getDotSize(fs);
    const repelR= getRepelRadius(fs);

    configRef.current = { dotSize: dotSz, repelRadius: repelR };

    // Offscreen measurement check to ensure no line overflows on narrow mobile screens
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = `400 ${fs}px Anton, sans-serif`;
    if ('letterSpacing' in tempCtx) {
      tempCtx.letterSpacing = '-0.03em';
    }
    
    let maxLineWidth = 0;
    LINES.forEach(line => {
      const w = tempCtx.measureText(line).width;
      if (w > maxLineWidth) maxLineWidth = w;
    });

    if (maxLineWidth > W * 0.94 && W > 0) {
      fs = Math.floor(fs * (W * 0.94 / maxLineWidth));
    }

    const lineH = Math.round(fs * 0.98);     // distinct breathing room between lines
    const padY  = Math.round(fs * 0.20);     // top/bottom breathing room
    const H     = lineH * LINES.length + padY;

    // Resize the main canvas (DPR-sharp)
    canvas.width        = Math.round(W * dpr);
    canvas.height       = Math.round(H * dpr);
    canvas.style.width  = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;

    // Offscreen canvas: render text at CSS-px size for pixel sampling
    const off      = document.createElement('canvas');
    off.width      = W;
    off.height     = H;
    const offCtx   = off.getContext('2d');
    offCtx.clearRect(0, 0, W, H);
    offCtx.fillStyle    = '#fff';
    offCtx.font         = `400 ${fs}px Anton, sans-serif`;
    if ('letterSpacing' in offCtx) {
      offCtx.letterSpacing = '-0.03em';
    }
    offCtx.textBaseline = 'top';

    const topY = padY / 2;
    LINES.forEach((line, i) => {
      const lw = offCtx.measureText(line).width;
      offCtx.fillText(line, (W - lw) / 2, topY + i * lineH);
    });

    // Sample pixel grid
    const imgData = offCtx.getImageData(0, 0, W, H);
    const data    = imgData.data;
    const list    = [];

    for (let py = 0; py < H; py += gap) {
      for (let px = 0; px < W; px += gap) {
        const idx = (py * W + px) * 4;
        if (data[idx + 3] > 128) {        // inside a letter shape
          list.push({
            homeX: px, homeY: py,
            x: px,     y: py,
            vx: 0,     vy: 0,
            color: pickColor(),
          });
        }
      }
    }

    ptsRef.current = list;
  }, [isMobile]);

  // ── Render one frame ─────────────────────────────────────────────────
  const tick = useCallback(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    const ctx    = ctxRef.current;
    if (!canvas || !ctx) return;

    const W  = parseInt(canvas.style.width,  10);
    const H  = parseInt(canvas.style.height, 10);
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const { dotSize, repelRadius } = configRef.current;
    const rr = repelRadius * repelRadius;

    ctx.clearRect(0, 0, W, H);

    const list = ptsRef.current;
    for (let k = 0; k < list.length; k++) {
      const p  = list[k];
      const dx = p.x - mx;
      const dy = p.y - my;
      const d2 = dx * dx + dy * dy;

      // Repel if inside radius
      if (d2 < rr && d2 > 0) {
        const dist  = Math.sqrt(d2);
        const force = (repelRadius - dist) / repelRadius;
        p.vx += (dx / dist) * force * 9;
        p.vy += (dy / dist) * force * 9;
      }

      // Spring toward home
      p.vx += (p.homeX - p.x) * SPRING;
      p.vy += (p.homeY - p.y) * SPRING;

      // Friction
      p.vx *= DAMPING;
      p.vy *= DAMPING;

      p.x += p.vx;
      p.y += p.vy;

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - dotSize * 0.5, p.y - dotSize * 0.5, dotSize, dotSize);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [isMobile]);

  // ── Static draw for reduced-motion ───────────────────────────────────
  const drawStatic = useCallback(() => {
    if (isMobile) return;
    const ctx    = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    const W = parseInt(canvas.style.width,  10);
    const H = parseInt(canvas.style.height, 10);
    const { dotSize } = configRef.current;
    ctx.clearRect(0, 0, W, H);
    ptsRef.current.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.homeX - dotSize * 0.5, p.homeY - dotSize * 0.5, dotSize, dotSize);
    });
  }, [isMobile]);

  // ── Initialise / restart ─────────────────────────────────────────────
  const start = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    if (isMobile) return;
    build();
    if (reducedRef.current) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [build, drawStatic, tick, isMobile]);

  useEffect(() => {
    if (isMobile) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    // Defer until Anton is ready so sampling is accurate
    document.fonts.load('400 100px Anton').then(start).catch(start);

    const onResize = debounce(start, 220);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [start, isMobile]);

  // ── Pointer / touch ───────────────────────────────────────────────────
  const onMouseMove = useCallback((e) => {
    const r = canvasRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  }, []);

  const onMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  const onTouchMove = useCallback((e) => {
    const r = canvasRef.current?.getBoundingClientRect();
    if (!r || !e.touches[0]) return;
    mouseRef.current = {
      x: e.touches[0].clientX - r.left,
      y: e.touches[0].clientY - r.top,
    };
  }, []);

  const onTouchEnd = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  if (isMobile) {
    return (
      <h1 className="hero-static-headline" aria-label="I DESIGN IT, THEN I BUILD IT.">
        <span className="headline-line-1">I DESIGN IT,</span>
        <span className="headline-line-2">THEN I BUILD IT.</span>
      </h1>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="hero-particle-canvas"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label="I DESIGN IT, THEN I BUILD IT."
      role="img"
    />
  );
}
