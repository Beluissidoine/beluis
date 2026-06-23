import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

const awards = [
  {
    title: 'Orange Summer Challenge 2024',
    subtitle: '2ème Prix National — Projet Sipoh',
    image: '/assets/osc.jpeg',
    type: 'award'
  },
  {
    title: 'Prix Spécial Féminin',
    subtitle: 'Récompense 2 000 000 FCFA',
    image: '/assets/poesam.jpeg',
    type: 'award'
  }
];

const certificates = [
  {
    title: 'Flutter & Dart - L\'essentiel',
    subtitle: 'Udemy (44 heures)',
    image: '/assets/udemy.jpg',
    type: 'certificate'
  },
  {
    title: 'Introduction à jQuery',
    subtitle: 'OpenClassrooms',
    image: '/assets/certificate_example_page-0001.jpg',
    type: 'certificate'
  }
];

const CertCard = ({ item, index }) => {
  return (
    <div className={`cert-card glass-card-premium reveal reveal-delay-${(index % 2) + 1}`}>
      <div className="cert-img-wrapper">
        <img src={item.image} alt={item.title} className="cert-img" />
      </div>
      <div className="cert-content">
        <span className="cert-type">{item.type === 'award' ? '🏆 Distinction' : '🎓 Certificat'}</span>
        <h3 className="cert-title">{item.title}</h3>
        <p className="cert-subtitle">{item.subtitle}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  useScrollReveal();

  return (
    <section id="certifications" className="section-padding cert-section">
      <div className="container">
        
        {/* Section Prix & Distinctions */}
        <div className="cert-group">
          <div className="section-header text-center mb-50 reveal">
            <h2 className="text-gradient">Prix &amp; Distinctions</h2>
            <p>Reconnaissances nationales pour l'innovation et l'impact social de mes solutions.</p>
          </div>
          <div className="cert-grid">
            {awards.map((award, idx) => (
              <CertCard key={idx} item={award} index={idx} />
            ))}
          </div>
        </div>

        <div className="cert-divider reveal"></div>

        {/* Section Certifications */}
        <div className="cert-group mt-80">
          <div className="section-header text-center mb-50 reveal">
            <h2 className="text-gradient">Certifications</h2>
            <p>Formations continues pour garantir des standards techniques d'excellence.</p>
          </div>
          <div className="cert-grid">
            {certificates.map((cert, idx) => (
              <CertCard key={idx} item={cert} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
