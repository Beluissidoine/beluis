import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook personnalisé pour appliquer un effet de parallax à un élément.
 * @param {number} speed  Facteur de vitesse (0 = fixe, 0.5 = demi-vitesse, 1 = normal)
 * @param {string} axis   'Y' (vertical, défaut) ou 'X' (horizontal)
 */
export function useParallax(speed = 0.3, axis = 'Y') {
  const ref = useRef(null);
  const rafId = useRef(null);

  const onScroll = useCallback(() => {
    if (!ref.current) return;
    // Annuler le frame précédent pour éviter les doublons
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      if (axis === 'Y') {
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      } else {
        ref.current.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    });
  }, [speed, axis]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [onScroll]);

  return ref;
}

/**
 * Hook pour révéler un élément au scroll (IntersectionObserver)
 * @param {string} activeClass  Classe CSS à ajouter quand l'élément est visible
 * @param {number} threshold    Pourcentage de visibilité avant déclenchement
 */
export function useScrollReveal(activeClass = 'revealed', threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(activeClass);
          observer.unobserve(el); // Ne déclencher qu'une fois
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeClass, threshold]);

  return ref;
}
