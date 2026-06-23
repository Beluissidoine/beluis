import React from 'react';
import { Video, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">

          {/* Colonne Brand avec logo image */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo-link">
              <img
                src="/assets/LOGO BLANC.png"
                alt="L'ange Beluis"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-tagline">Développeur Mobile &amp; Web Freelance</p>
            <p className="footer-desc">Je transforme vos idées en solutions digitales innovantes, performantes et élégantes.</p>
          </div>


          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#contact">Applications Mobiles</a></li>
              <li><a href="#contact">Développement Web</a></li>
              <li><a href="#contact">Consultation &amp; Audit</a></li>
              <li><a href="#contact">Maintenance &amp; Sécurité</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Réseaux Sociaux</h4>
            <div className="social-icons">
              <a href="https://www.youtube.com/@langebeluis" target="_blank" rel="noopener noreferrer" className="social-icon glass-panel" aria-label="YouTube">
                <Video size={20} />
              </a>
              <a href="mailto:contact@beluis.com" className="social-icon glass-panel" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} L'ange Beluis. Tous droits réservés.</p>
          <button onClick={scrollToTop} className="btn-scroll-top glass-panel" aria-label="Retour en haut">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
