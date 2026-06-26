import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Preloader from './components/Preloader';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialisation du Smooth Scroll avec Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // On bloque le scroll au départ
    lenis.stop();
    document.body.style.overflow = 'hidden';

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Quand le preloader finit son animation (le rideau est levé)
  const handlePreloaderFinish = () => {
    setAppLoaded(true);
    if (lenisRef.current) {
      lenisRef.current.start(); // On débloque le scroll
    }
    document.body.style.overflow = '';
  };

  return (
    <div className={`app-container ${appLoaded ? 'app-loaded' : ''}`}>
      {/* L'écran de chargement qui va glisser vers le haut */}
      {!appLoaded && <Preloader onFinish={handlePreloaderFinish} />}

      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
