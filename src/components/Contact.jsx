import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  useScrollReveal();

  return (
    <section id="contact" className="contact-oversized">
      <div className="container">
        
        <div className="contact-oversized-inner reveal">
          <p className="contact-subtitle">Prêt à donner vie à votre projet ?</p>
          
          <a 
            href="mailto:contact@beluis.com?subject=Nouveau%20projet%20portfolio" 
            className="contact-huge-link"
          >
            <div className="contact-huge-text-wrapper">
              <h2 className="contact-huge-text" data-text="DÉMARRONS">DÉMARRONS</h2>
            </div>
            <div className="contact-huge-text-wrapper">
              <h2 className="contact-huge-text" data-text="UN PROJET">UN PROJET</h2>
            </div>
            
            <div className="contact-arrow-wrapper">
              <ArrowUpRight size={80} className="contact-huge-arrow" />
            </div>
          </a>

          <div className="contact-info-footer">
            <a href="mailto:contact@beluis.com" className="contact-email">contact@beluis.com</a>
            <div className="contact-location">
              <span className="pulse-dot"></span>
              Disponible pour de nouveaux défis
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
