import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ targetX: -100, targetY: -100, currentX: -100, currentY: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktopMouse, setIsDesktopMouse] = useState(false);
  const [cursorMode, setCursorMode] = useState('default');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      setIsDesktopMouse(false);
      return;
    }
    setIsDesktopMouse(true);

    let isMouseDown = false;

    const detectMode = (target, mouseDown = false) => {
      if (!target || !(target instanceof Element)) return 'default';
      if (target.closest('input, textarea')) return 'text';
      if (target.closest('.peek-carousel-viewport')) return mouseDown ? 'grabbing' : 'grab';
      if (target.closest('a, button, .tool-card, .tilt-card, [role="button"], .carousel-arrow, .carousel-dot')) return 'pointer';
      if (target.closest('.hero-particle-canvas')) return 'crosshair';
      return 'default';
    };

    const onMouseMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisible) {
        posRef.current.currentX = e.clientX;
        posRef.current.currentY = e.clientY;
        setIsVisible(true);
      }
      setCursorMode(detectMode(e.target, isMouseDown));
    };

    const onMouseDown = (e) => {
      isMouseDown = true;
      setCursorMode(detectMode(e.target, true));
    };

    const onMouseUp = (e) => {
      isMouseDown = false;
      setCursorMode(detectMode(e.target, false));
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      const { targetX, targetY, currentX, currentY } = posRef.current;
      const newX = lerp(currentX, targetX, 0.24);
      const newY = lerp(currentY, targetY, 0.24);

      posRef.current.currentX = newX;
      posRef.current.currentY = newY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isDesktopMouse) return null;

  const renderIcon = () => {
    switch (cursorMode) {
      case 'text':
        return (
          <svg className="cursor-icon cursor-icon--text" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D99FF" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 4v16M8 4h8M8 20h8" />
          </svg>
        );
      case 'grab':
      case 'grabbing':
        return (
          <svg className="cursor-icon cursor-icon--grab" width="22" height="22" viewBox="0 0 24 24" fill="#F0531C" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10.5V5.5a2 2 0 00-4 0v9a7 7 0 0014 0v-4a2 2 0 00-4 0v.5" />
          </svg>
        );
      case 'crosshair':
        return (
          <svg className="cursor-icon cursor-icon--crosshair" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D99FF" strokeWidth="2">
            <circle cx="12" cy="12" r="7" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
        );
      case 'pointer':
      default:
        return (
          <svg className="cursor-arrow" width="22" height="22" viewBox="0 0 24 24" fill="#0D99FF" stroke="#FFFFFF" strokeWidth="2.2" strokeLinejoin="round">
            <path d="M3 3l7.53 18.06 3.73-7.53 7.53-3.73L3 3z" />
          </svg>
        );
    }
  };

  const getLabelText = () => {
    if (cursorMode === 'grab') return 'Drag';
    if (cursorMode === 'grabbing') return 'Hold';
    if (cursorMode === 'pointer') return 'Click';
    if (cursorMode === 'text') return 'Type';
    return 'You';
  };

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor custom-cursor--${cursorMode} ${isVisible ? 'custom-cursor--visible' : ''}`}
      aria-hidden="true"
    >
      {renderIcon()}
      <span className="cursor-label">{getLabelText()}</span>
    </div>
  );
}
