import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Counter from './Counter';

const MARQUEE_ITEMS = [
  'Applications Mobiles',
  'Sites Web',
  'Intégration API',
  'Conseil Stratégique',
  'Sécurité',
  'Flutter',
  'Django',
  'React',
  'Firebase',
  'Intelligence Artificielle',
];

const Hero = () => {
  const marqueeRef = useRef(null);

  // Parallax
  const watermarkRef = useParallax(0.25);
  const heroLeftRef = useParallax(-0.08);
  const heroRightRef = useParallax(-0.13);
  const lineRef = useParallax(0.15);

  useScrollReveal();

  useEffect(() => {
    // Dupliquer le contenu pour le défilement infini du marquee
    const el = marqueeRef.current;
    if (el) {
      el.innerHTML += el.innerHTML;
    }
  }, []);

  return (
    <section id="home" className="hero-section">

      {/* Watermark géant */}
      <div className="hero-watermark" aria-hidden="true" ref={watermarkRef}>
        BELUIS
      </div>

      {/* Ligne verticale */}
      <div className="hero-line-v" aria-hidden="true" ref={lineRef}></div>

      <div className="hero-inner container">

        {/* Colonne gauche */}
        <div className="hero-left reveal" ref={heroLeftRef}>
          <h1 className="hero-headline">
            L'expert qu'il vous faut pour que votre projet <span className="text-red-gradient">prenne vie.</span>
          </h1>

          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary" id="hero-cta-contact">
              Démarrer un projet <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-ghost" id="hero-cta-portfolio">
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* Colonne droite KPIs — parallax légèrement différent */}
        <div className="hero-right" aria-label="Chiffres clés" ref={heroRightRef}>
          <div className="kpi-card kpi-top">
            <span className="kpi-number"><Counter end={6} suffix="+" /></span>
            <span className="kpi-label">Années<br/>d'expertise</span>
          </div>
          <div className="kpi-card kpi-mid">
            <span className="kpi-number">🏆 <Counter end={2} /></span>
            <span className="kpi-label">Prix nationaux<br/>remportés</span>
          </div>
          <div className="kpi-card kpi-bot">
            <span className="kpi-number">∞</span>
            <span className="kpi-label">Ambition pour<br/>vos projets</span>
          </div>
        </div>

      </div>

      {/* Bandeau défilant */}
      <div className="hero-marquee-wrapper" aria-hidden="true">
        <div className="hero-marquee" ref={marqueeRef}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
