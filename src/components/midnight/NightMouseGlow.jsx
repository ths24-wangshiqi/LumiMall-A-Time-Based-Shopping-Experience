import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Soft mouse-following radial glow — only in night mode
export default function NightMouseGlow({ isNight }) {
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Spring smoothing for a soft, trailing feel
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!isNight) return;
    const move = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isNight, rawX, rawY]);

  if (!isNight) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[2]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: 480,
        height: 480,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(168,85,247,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
        filter: 'blur(24px)',
      }}
    />
  );
}