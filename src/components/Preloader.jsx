import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulation d'un chargement très élégant et régulier
    let currentProgress = 0;
    
    // Fonction d'animation fluide
    const updateProgress = () => {
      // Ralentir à la fin pour un effet plus premium
      if (currentProgress < 85) {
        currentProgress += Math.random() * 4 + 1; // Avance rapide
      } else {
        currentProgress += Math.random() * 1.5 + 0.2; // Ralentit sur la fin
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        
        // Laisser 100% affiché une fraction de seconde avant de disparaître
        setTimeout(() => {
          setIsFinished(true);
          // Le CSS met 1.2s à faire glisser le preloader vers le haut
          setTimeout(() => {
            onFinish();
          }, 1200); 
        }, 400);
        
        return;
      }
      
      setProgress(Math.floor(currentProgress));
      requestAnimationFrame(() => setTimeout(updateProgress, 30));
    };

    updateProgress();
  }, [onFinish]);

  // Si on a totalement fini l'animation, on ne rend plus rien
  if (isFinished && progress === 100 && false) {
    return null; // En fait on gère ça via App.jsx
  }

  return (
    <div className={`preloader-wrapper ${isFinished ? 'slide-up' : ''}`}>
      <div className="preloader-content">
        {/* Le Logo Blanc */}
        <div className="preloader-logo-container">
          <img 
            src="/assets/LOGO BLANC.png" 
            alt="Beluis Logo" 
            className={`preloader-logo ${progress > 20 ? 'glow' : ''}`} 
          />
        </div>
        
        {/* Le Compteur */}
        <div className="preloader-counter-wrapper">
          <span className="preloader-counter">{progress}%</span>
          <div className="preloader-bar-bg">
            <div 
              className="preloader-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
