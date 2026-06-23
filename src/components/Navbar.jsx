import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <img src="/assets/LOGO BLANC.png" alt="L'ange Beluis Logo" className="navbar-logo-img" />
        </a>
        
        <button className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Accueil</a></li>
          <li><a href="#about" onClick={toggleMenu}>À propos</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Compétences</a></li>
          <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" className="nav-btn" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
