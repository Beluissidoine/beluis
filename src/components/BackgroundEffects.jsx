import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   Habillage Premium : Grille Architecturale + Spotlight Interactif
   Un effet très élégant, non intrusif, qui donne de la profondeur.
   ───────────────────────────────────────────── */

const BackgroundEffects = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const glowRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialiser le glow au centre
    glowRef.current = { x: width / 2, y: height / 2 };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Fond de base
      ctx.fillStyle = '#030304';
      ctx.fillRect(0, 0, width, height);

      // Interpolation fluide pour le spotlight (effet de retard premium)
      glowRef.current.x += (mouseRef.current.x - glowRef.current.x) * 0.05;
      glowRef.current.y += (mouseRef.current.y - glowRef.current.y) * 0.05;

      const gx = glowRef.current.x;
      const gy = glowRef.current.y;

      // 1. Dessiner la grille (très subtile)
      const gridSize = 40;
      ctx.lineWidth = 1;
      
      // On crée un chemin pour toute la grille
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)'; // Grille de base presque invisible
      ctx.stroke();

      // 2. Dessiner le Spotlight rouge qui illumine la grille
      // On utilise globalCompositeOperation pour que la lumière s'additionne joliment
      ctx.globalCompositeOperation = 'screen';
      
      const gradient = ctx.createRadialGradient(gx, gy, 0, gx, gy, 600);
      gradient.addColorStop(0, 'rgba(227, 6, 19, 0.12)'); // Centre rouge vif mais translucide
      gradient.addColorStop(0.4, 'rgba(227, 6, 19, 0.03)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Vignettage pour assombrir les bords et focaliser sur le centre/souris */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Grain léger pour la texture */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
          opacity: 0.025,
        }}
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
};

export default BackgroundEffects;
