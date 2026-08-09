import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Returns a ref to attach to a container and a boolean `revealed`.
 * Once the element enters the viewport it stays revealed (one-shot).
 *
 * Includes:
 * - Immediate viewport check on mount
 * - IntersectionObserver with low threshold (0.05) & zero bottom clip
 * - Fallback viewport check on scroll / scrollend / hashchange / nav-scroll
 * - 2-second safety timer so content is NEVER stuck invisible
 * - prefers-reduced-motion support
 */
export function useScrollReveal({ rootMargin = '0px 0px 0px 0px', threshold = 0.05 } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    let isDone = false;
    const trigger = () => {
      if (!isDone) {
        isDone = true;
        setRevealed(true);
      }
    };

    // Viewport bounds check fallback
    const checkVisibility = () => {
      if (isDone || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Element overlaps visible viewport vertically
      if (rect.top < vh + 50 && rect.bottom > -50) {
        trigger();
      }
    };

    // 1. Check immediately on mount
    checkVisibility();

    // 2. Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          trigger();
          observer.disconnect();
        } else {
          checkVisibility();
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(el);

    // 3. Fallback event listeners for scroll, jump, hashchange, nav click
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('scrollend', checkVisibility, { passive: true });
    window.addEventListener('hashchange', checkVisibility, { passive: true });
    window.addEventListener('nav-scroll', checkVisibility, { passive: true });

    // 4. Safety fallback: if in DOM for > 2s, force visible
    const safetyTimer = setTimeout(() => {
      trigger();
    }, 2000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('scrollend', checkVisibility);
      window.removeEventListener('hashchange', checkVisibility);
      window.removeEventListener('nav-scroll', checkVisibility);
      clearTimeout(safetyTimer);
    };
  }, [rootMargin, threshold]);

  return [ref, revealed];
}
