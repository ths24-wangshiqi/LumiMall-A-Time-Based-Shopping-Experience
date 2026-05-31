import React from 'react';
import { motion } from 'framer-motion';

const SunIllustration = ({ className }) => (
  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outermost dashed ring */}
    <circle cx="150" cy="150" r="138" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 6" />
    {/* Outer long rays x8 */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45) * Math.PI / 180;
      return (
        <line key={`lr${i}`}
          x1={150 + 100 * Math.cos(angle)} y1={150 + 100 * Math.sin(angle)}
          x2={150 + 135 * Math.cos(angle)} y2={150 + 135 * Math.sin(angle)}
          stroke="currentColor" strokeWidth="1.5"
        />
      );
    })}
    {/* Short tick rays x16 */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 22.5) * Math.PI / 180;
      return (
        <line key={`sr${i}`}
          x1={150 + 105 * Math.cos(angle)} y1={150 + 105 * Math.sin(angle)}
          x2={150 + 120 * Math.cos(angle)} y2={150 + 120 * Math.sin(angle)}
          stroke="currentColor" strokeWidth="0.8"
        />
      );
    })}
    {/* Diamond tips on long rays */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45) * Math.PI / 180;
      const cx = 150 + 140 * Math.cos(angle);
      const cy = 150 + 140 * Math.sin(angle);
      return <circle key={`dt${i}`} cx={cx} cy={cy} r="2.5" fill="currentColor" />;
    })}
    {/* Rings */}
    <circle cx="150" cy="150" r="95" stroke="currentColor" strokeWidth="1" />
    <circle cx="150" cy="150" r="72" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="150" cy="150" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    {/* Inner decorative dots on ring */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30) * Math.PI / 180;
      const cx = 150 + 72 * Math.cos(angle);
      const cy = 150 + 72 * Math.sin(angle);
      return <circle key={`ring${i}`} cx={cx} cy={cy} r="2" fill="currentColor" />;
    })}
    {/* Center sun core */}
    <circle cx="150" cy="150" r="30" stroke="currentColor" strokeWidth="2" />
    <circle cx="150" cy="150" r="18" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="150" cy="150" r="8" fill="currentColor" />
    {/* Crosshair in center */}
    <line x1="150" y1="125" x2="150" y2="175" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <line x1="125" y1="150" x2="175" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
  </svg>
);

const MoonIllustration = ({ className }) => (
  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer orbit ring */}
    <circle cx="150" cy="150" r="135" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 8" />
    {/* Crescent main shape */}
    <path
      d="M 150 35 A 115 115 0 1 1 150 265 A 75 75 0 1 0 150 35 Z"
      stroke="currentColor" strokeWidth="2" fill="none"
    />
    {/* Inner crescent echo */}
    <path
      d="M 150 65 A 85 85 0 1 1 150 235 A 55 55 0 1 0 150 65 Z"
      stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"
    />
    {/* Stars with cross-hairs — large */}
    {[
      [215, 80, 5],
      [228, 130, 3.5],
      [210, 175, 4.5],
      [235, 95, 2.5],
    ].map(([cx, cy, r], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r={r} fill="currentColor" />
        <line x1={cx - r * 3} y1={cy} x2={cx + r * 3} y2={cy} stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
        <line x1={cx} y1={cy - r * 3} x2={cx} y2={cy + r * 3} stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      </g>
    ))}
    {/* Small scattered stars */}
    {[
      [240, 150], [205, 55], [248, 170], [220, 210], [195, 230],
    ].map(([cx, cy], i) => (
      <circle key={`s${i}`} cx={cx} cy={cy} r="1.5" fill="currentColor" opacity="0.7" />
    ))}
    {/* Constellation lines */}
    <line x1="215" y1="80" x2="228" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="228" y1="130" x2="210" y2="175" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    {/* Decorative arc detail inside crescent */}
    <path d="M 110 130 Q 130 100 155 130" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M 108 155 Q 125 125 150 150" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
    {/* Bottom dot row */}
    {Array.from({ length: 7 }).map((_, i) => (
      <circle key={`bd${i}`} cx={100 + i * 12} cy={240} r="1.2" fill="currentColor" opacity={0.2 + i * 0.06} />
    ))}
  </svg>
);

export default function SunMoonBackground({ isNight }) {
  return (
    <>
      {/* ── DAY: BIG SUN right side ── */}
      <div className={`pointer-events-none fixed top-0 right-0 w-[55vw] h-screen z-0 flex items-center justify-center transition-opacity duration-1000 ${isNight ? 'opacity-0' : 'opacity-100'}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="w-[52vw] max-w-[640px] text-foreground/10"
        >
          <SunIllustration className="w-full h-full" />
        </motion.div>
      </div>





      {/* ── NIGHT: BIG MOON right side ── */}
      <div className={`pointer-events-none fixed top-0 right-0 w-[55vw] h-screen z-0 flex items-center justify-center transition-opacity duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[50vw] max-w-[600px] text-primary/30"
        >
          <MoonIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* NIGHT: small accent moon top-left */}
      <div className={`pointer-events-none fixed top-16 left-10 z-0 transition-opacity duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
          animate={{ y: [4, -6, 4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 text-primary/22"
        >
          <MoonIllustration className="w-full h-full" />
        </motion.div>
      </div>

      {/* NIGHT: floating stars */}
      {[
        { top: '12%', left: '18%', size: 3, delay: 0 },
        { top: '28%', left: '6%',  size: 2, delay: 1 },
        { top: '55%', left: '22%', size: 1.5, delay: 2 },
        { top: '42%', left: '10%', size: 3.5, delay: 0.5 },
        { top: '72%', left: '32%', size: 2, delay: 1.5 },
        { top: '18%', left: '65%', size: 1.5, delay: 3 },
        { top: '82%', left: '55%', size: 2.5, delay: 0.8 },
        { top: '35%', left: '48%', size: 1,   delay: 2.2 },
        { top: '65%', left: '8%',  size: 2,   delay: 1.2 },
      ].map((star, i) => (
        <motion.div
          key={i}
          style={{ top: star.top, left: star.left, width: star.size * 2, height: star.size * 2 }}
          className={`pointer-events-none fixed rounded-full bg-primary z-0 transition-opacity duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'}`}
          animate={{ opacity: isNight ? [0.3, 1, 0.3] : 0 }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: star.delay }}
        />
      ))}
    </>
  );
}