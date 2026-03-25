import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      const revealElements = el.querySelectorAll('.reveal');
      revealElements.forEach((child) => {
        if (!child.classList.contains('revealed')) {
          observer.observe(child);
        }
      });
    };

    // Initial observe
    observe();

    // Re-observe when DOM changes (e.g. filter changes in gallery)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });
    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);

  return ref;
}
