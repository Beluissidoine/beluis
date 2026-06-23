import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Portfolio.css';

// Carte portfolio (plus besoin d'observer interne, on utilise la classe globale)
const PortfolioCard = ({ project, index }) => {
  return (
    <div className={`portfolio-card glass-card-premium reveal reveal-delay-${(index % 3) + 1}`}>
      <div className="portfolio-img-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="portfolio-img" 
          style={{ objectPosition: project.imgPosition || 'center' }}
        />
        <div className="portfolio-overlay">
          <div className="portfolio-links">
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="portfolio-link-icon" aria-label="Voir le projet">
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="portfolio-content">
        <span className="portfolio-category">{project.category}</span>
        <h3 className="portfolio-title">{project.title}</h3>
        {project.award && <div className="portfolio-award">{project.award}</div>}
        <p className="portfolio-desc">{project.description}</p>
        <div className="portfolio-tech-list">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'Sipoh',
    category: 'Application Mobile & Web',
    description: 'Kit intelligent d\'aide aux personnes en situation de vulnérabilité. Solution numérique dédiée à la santé et l\'éducation des jeunes.',
    award: '🏆 Orange Summer Challenge 2024 — 2e Prix',
    tech: ['Flutter', 'Dart', 'Firebase', 'Django', 'Python'],
    image: '/assets/sipoh.jpg',
    links: { demo: '#' }
  },
  {
    id: 2,
    title: 'Site Web SIAC 2026',
    category: 'Développement Web · Client : OIDAC',
    description: 'L\'OIDAC (Organisation Interprofessionnelle de l\'Aquaculture au Cameroun) nous a mandaté pour concevoir et développer le site officiel du SIAC 2026 — Salon Interprofessionnel de l\'Aquaculture au Cameroun.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/Capture site siac2026.png',
    links: { demo: 'https://siac-cameroun.com/' }
  },
  {
    id: 3,
    title: 'Couverture Médiatique SIAC 2026',
    category: 'Animation & Couverture Médiatique',
    description: 'Animation de la page officielle de l\'OIDAC pendant l\'événement SIAC 2026 : captation vidéo, réalisation d\'interviews, publication de stories, reels et posts en temps réel.',
    tech: ['Production Vidéo', 'Réseaux Sociaux', 'Communication digitale'],
    image: '/assets/couverture media.jpeg',
    imgPosition: 'top',
    links: {}
  },
  {
    id: 4,
    title: 'Yamo Streaming',
    category: 'Application Web',
    description: 'Plateforme web de streaming avec intégration complète d\'un système de paiement sécurisé pour la monétisation des contenus.',
    tech: ['React', 'Node.js', 'Payment API'],
    image: '/assets/Capture yamo streaming.png',
    links: { demo: 'https://yamostreaming.com/' }
  },
  {
    id: 5,
    title: 'FindYourCNI',
    category: 'Application Mobile',
    description: 'Application mobile collaborative permettant de déclarer et retrouver des CNI (Cartes Nationales d\'Identité) perdues au Cameroun.',
    tech: ['Flutter', 'Dart', 'Firebase', 'GCP'],
    image: '/assets/FindYourCNI (3).png',
    links: { demo: 'https://play.google.com/store/apps/details?id=com.findyourcni.app' }
  },
  {
    id: 6,
    title: 'Bot IA WhatsApp',
    category: 'Intelligence Artificielle',
    description: 'Assistant intelligent sur WhatsApp propulsé par l\'IA (Ollama) avec interface d\'administration Web complète.',
    tech: ['Node.js', 'WhatsApp Web.js', 'Ollama'],
    image: '/assets/bot.png',
    links: {}
  }
];

const Portfolio = () => {
  // Activation du scroll reveal pour tous les éléments avec la classe .reveal
  useScrollReveal();

  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Projets <span className="text-red-gradient">Réalisés</span></h2>
          <p>Des applications primées aux solutions web complexes, voici les projets qui témoignent de notre expertise.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
