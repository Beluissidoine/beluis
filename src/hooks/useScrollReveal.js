import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Sélectionner tous les éléments avec la classe 'reveal'
    const reveals = document.querySelectorAll('.reveal');

    // Options pour l'Intersection Observer
    const options = {
      root: null, // utilise le viewport du navigateur
      rootMargin: '0px',
      threshold: 0.15 // 15% de l'élément doit être visible pour déclencher l'animation
    };

    // Callback exécuté quand un élément entre ou sort du viewport
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // On peut décommenter la ligne suivante si on veut que l'animation
          // ne se joue qu'une seule fois.
          // observer.unobserve(entry.target);
        } else {
          // Retire la classe 'active' quand on remonte, pour rejouer l'animation
          // C'est souvent apprécié dans les sites très dynamiques (Awwwards)
          entry.target.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observer chaque élément
    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

    // Cleanup à la destruction du composant
    return () => {
      reveals.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []); // Vide = s'exécute une fois au montage
};
