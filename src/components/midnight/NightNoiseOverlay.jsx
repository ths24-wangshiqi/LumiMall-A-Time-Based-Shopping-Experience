import React, { useEffect, useRef } from 'react';

// Animated canvas grain noise — only rendered in night mode
export default function NightNoiseOverlay({ isNight }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!isNight) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const draw = () => {
      frame++;
      // Only redraw every 3 frames for performance
      if (frame % 3 === 0) {
        const w = canvas.width;
        const h = canvas.height;
        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = 8; // very faint alpha
        }
        ctx.putImageData(imageData, 0, 0);
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [isNight]);

  if (!isNight) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-overlay opacity-60"
    />
  );
}