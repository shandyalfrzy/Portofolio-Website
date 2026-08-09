import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Returns a ref to attach to a container and a boolean `revealed`.
 * Once the element enters the viewport it stays revealed (one-shot).
 *
 * @param {object}  options
 * @param {string}  options.rootMargin  - IO rootMargin (default: '0px 0px -60px 0px')
 * @param {number}  options.threshold   - IO threshold   (default: 0.15)
 */
export function useScrollReveal({ rootMargin = '0px 0px -60px 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: skip animation entirely
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect(); // one-shot — never re-trigger
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, revealed];
}
