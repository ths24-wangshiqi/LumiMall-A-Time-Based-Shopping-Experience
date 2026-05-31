import React from 'react';
import { motion } from 'framer-motion';

// Geometric sun SVG
const SunIllustration = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer rays */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 72 * Math.cos(rad);
      const y1 = 100 + 72 * Math.sin(rad);
      const x2 = 100 + 88 * Math.cos(rad);
      const y2 = 100 + 88 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
    })}
    {/* Long rays at 8 positions */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8;
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 55 * Math.cos(rad);
      const y1 = 100 + 55 * Math.sin(rad);
      const x2 = 100 + 95 * Math.cos(rad);
      const y2 = 100 + 95 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />;
    })}
    {/* Outer circle */}
    <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
    {/* Mid circle */}
    <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.8" />
    {/* Inner circle */}
    <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1" />
    {/* Center fill */}
    <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="1.5" />
    {/* Decorative dots */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + 22.5;
      const rad = (angle * Math.PI) / 180;
      const cx = 100 + 40 * Math.cos(rad);
      const cy = 100 + 40 * Math.sin(rad);
      return <circle key={i} cx={cx} cy={cy} r="1.5" fill="currentColor" />;
    })}
  </svg>
);

// Geometric moon SVG
const MoonIllustration = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer decorative circle */}
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 5" />
    {/* Crescent shape via clip */}
    <path
      d="M 100 30 A 70 70 0 1 1 100 170 A 45 45 0 1 0 100 30 Z"
      stroke="currentColor" strokeWidth="1.2" fill="none"
    />
    {/* Inner crescent detail */}
    <path
      d="M 100 50 A 50 50 0 1 1 100 150 A 30 30 0 1 0 100 50 Z"
      stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6"
    />
    {/* Stars */}
    {[
      [145, 60, 3],
      [158, 90, 2],
      [150, 130, 4],
      [165, 65, 2],
      [140, 100, 1.5],
    ].map(([cx, cy, r], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity="0.8" />
        <line x1={cx - r * 2.5} y1={cy} x2={cx + r * 2.5} y2={cy} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1={cx} y1={cy - r * 2.5} x2={cx} y2={cy + r * 2.5} stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </g>
    ))}
    {/* Decorative arc lines */}
    <path d="M 60 100 Q 80 70 100 100" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
    <path d="M 60 110 Q 75 85 95 110" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    {/* Bottom detail dots */}
    {Array.from({ length: 5 }).map((_, i) => (
      <circle key={i} cx={70 + i * 10} cy={155} r="1" fill="currentColor" opacity={0.3 + i * 0.1} />
    ))}
  </svg>
);

export default function SunMoonBackground({ isNight }) {
  return (
    <>
      {/* Day: Large Sun centered-right */}
      <div
        className={`pointer-events-none fixed top-0 right-[-8vw] w-[60vw] h-screen z-0 flex items-center justify-end transition-opacity duration-1000 ${
          isNight ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          style={{ color: '#2563eb', opacity: 0.13 }}
          className="w-full"
        >
          <SunIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* Day: small sun top-left accent */}
      <div className={`pointer-events-none fixed top-16 left-10 z-0 transition-opacity duration-1000 ${isNight ? 'opacity-0' : 'opacity-100'}`}>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ color: '#2563eb', opacity: 0.18 }}
          className="w-36"
        >
          <SunIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* Night: Large Moon centered-right */}
      <div
        className={`pointer-events-none fixed top-0 right-[-6vw] w-[58vw] h-screen z-0 flex items-center justify-end transition-opacity duration-1000 ${
          isNight ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#a855f7', opacity: 0.22 }}
          className="w-full"
        >
          <MoonIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* Night: small moon bottom-left accent */}
      <div className={`pointer-events-none fixed bottom-16 left-10 z-0 transition-opacity duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#a855f7', opacity: 0.25 }}
          className="w-36"
        >
          <MoonIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* Night: floating star dots */}
      {isNight && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {[
            { top: '15%', left: '20%', size: 2, delay: 0 },
            { top: '30%', left: '8%', size: 1.5, delay: 1 },
            { top: '60%', left: '25%', size: 1, delay: 2 },
            { top: '45%', left: '12%', size: 2.5, delay: 0.5 },
            { top: '75%', left: '35%', size: 1.5, delay: 1.5 },
            { top: '20%', left: '70%', size: 1, delay: 3 },
            { top: '80%', left: '60%', size: 2, delay: 0.8 },
          ].map((star, i) => (
            <motion.div
              key={i}
              style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
              className="absolute rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: star.delay }}
            />
          ))}
        </div>
      )}
    </>
  );
}