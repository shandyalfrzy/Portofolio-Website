import { useEffect, useRef, useCallback } from 'react';

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

function getFontSize() {
  const vw = window.innerWidth;
  if (vw >= 1400) return 158;
  if (vw >= 1100) return 132;
  if (vw >= 800)  return 108;
  if (vw >= 540)  return 80;
  return 58;
}

function getGap() {
  // Fewer particles on small screens for 60fps
  return window.innerWidth < 640 ? 7 : 5;
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
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef(null);
  const reducedRef = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // ── Build: sample text → create particle array ──────────────────────
  const build = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const dpr   = window.devicePixelRatio || 1;
    const W     = canvas.parentElement.clientWidth;
    const fs    = getFontSize();
    const lineH = Math.round(fs * 0.88);     // ultra-tight: lines nearly touching
    const padY  = Math.round(fs * 0.12);     // minimal top/bottom breathing room
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
    offCtx.textBaseline = 'top';

    const topY = padY / 2;
    LINES.forEach((line, i) => {
      const lw = offCtx.measureText(line).width;
      offCtx.fillText(line, (W - lw) / 2, topY + i * lineH);
    });

    // Sample pixel grid
    const imgData = offCtx.getImageData(0, 0, W, H);
    const data    = imgData.data;
    const gap     = getGap();
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
  }, []);

  // ── Render one frame ─────────────────────────────────────────────────
  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx    = ctxRef.current;
    if (!canvas || !ctx) return;

    const W  = parseInt(canvas.style.width,  10);
    const H  = parseInt(canvas.style.height, 10);
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const rr = REPEL_RADIUS * REPEL_RADIUS;

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
        const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
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
      ctx.fillRect(p.x - DOT_SIZE * 0.5, p.y - DOT_SIZE * 0.5, DOT_SIZE, DOT_SIZE);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // ── Static draw for reduced-motion ───────────────────────────────────
  const drawStatic = useCallback(() => {
    const ctx    = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    const W = parseInt(canvas.style.width,  10);
    const H = parseInt(canvas.style.height, 10);
    ctx.clearRect(0, 0, W, H);
    ptsRef.current.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.homeX - DOT_SIZE * 0.5, p.homeY - DOT_SIZE * 0.5, DOT_SIZE, DOT_SIZE);
    });
  }, []);

  // ── Initialise / restart ─────────────────────────────────────────────
  const start = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    build();
    if (reducedRef.current) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [build, drawStatic, tick]);

  useEffect(() => {
    // Defer until Anton is ready so sampling is accurate
    document.fonts.load('400 100px Anton').then(start).catch(start);

    const onResize = debounce(start, 220);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [start]);

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
