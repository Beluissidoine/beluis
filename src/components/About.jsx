import React from 'react';
import { Award, Code, Smartphone } from 'lucide-react';
import './About.css';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Counter from './Counter';

const About = () => {
  // L'image monte légèrement en scrollant — effet de profondeur
  const imgParallaxRef = useParallax(-0.1);
  
  // Activation du reveal global
  useScrollReveal();

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">

          {/* Colonne image avec parallax */}
          <div className="about-image-col">
            <div className="about-image-wrapper glass-card-premium reveal" ref={imgParallaxRef}>
              <img src="/assets/work.jpeg" alt="L'ange Beluis au travail" className="about-img" />
              <div className="experience-badge">
                <span className="years text-red-gradient"><Counter end={6} suffix="+" /></span>
                <span className="text">Années<br/>d'Expérience</span>
              </div>
            </div>
          </div>

          {/* Colonne texte avec révélation */}
          <div className="about-content-col reveal reveal-delay-1">
            <h2 className="text-gradient section-title">À propos de moi</h2>
            <p className="lead-text">
              Développeur mobile &amp; web, passionné par l'impact social à travers la technologie.
            </p>

            <div className="about-text">
              <p>
                Finaliste et lauréat de plusieurs compétitions d'innovation, j'ai notamment obtenu le <strong>2ème Prix du Orange Summer Challenge 2024</strong> ainsi que le <strong>Prix Spécial Féminin 2024</strong>, pour le projet Sipoh.
              </p>
              <p>
                Avec plus de 6 ans d'expérience en développement, je conçois et réalise des applications performantes, sécurisées et élégantes, de l'idée jusqu'au déploiement sur Android &amp; iOS.
              </p>
              <p>
                Aujourd'hui, j'accompagne les entreprises, start-up et organisations qui souhaitent transformer une idée en produit digital concret.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item reveal reveal-delay-2">
                <div className="feature-icon"><Smartphone size={24} /></div>
                <h4>Apps Mobiles</h4>
                <p>Création d'applications iOS et Android fluides avec Flutter.</p>
              </div>
              <div className="feature-item reveal reveal-delay-3">
                <div className="feature-icon"><Code size={24} /></div>
                <h4>Plateformes Web</h4>
                <p>Développement de sites et d'apps web modernes et réactifs.</p>
              </div>
              <div className="feature-item reveal reveal-delay-4">
                <div className="feature-icon"><Award size={24} /></div>
                <h4>Excellence</h4>
                <p>Primé pour l'innovation et l'impact de mes solutions.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
