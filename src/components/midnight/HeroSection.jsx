import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/8ec024962_generated_244d8e48.png';
const TEXTURE_IMAGE = 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/a0ac2a2a6_generated_f7384178.png';

export default function HeroSection({ isNight }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <img src={TEXTURE_IMAGE} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-px">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-x border-border/20" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-5 z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-mono text-xs text-muted-foreground tracking-[0.2em] uppercase mb-4 block">
                SS26 Collection / Entry Protocol
              </span>
              <h1 className="font-display text-6xl lg:text-8xl font-extrabold tracking-[-0.04em] text-foreground leading-[0.9]">
                <span className={`block ${isNight ? 'neon-glow' : ''}`}>WB31</span>
              </h1>
              <div className="mt-4 flex items-end gap-4">
                <span className="font-display text-8xl lg:text-[10rem] font-extrabold tracking-[-0.04em] text-foreground/10 leading-[0.8]">
                  00
                </span>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm">
                  構造的透明性 — 精密な設計と素材科学の融合。3層防水メンブレンが実現する、究極のパフォーマンスウェア。
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <button className="group flex items-center gap-3 font-display text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  EXPLORE COLLECTION
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="font-mono text-xs text-muted-foreground">
                  GORE-TEX / 3L
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
              }}
              className="transition-transform duration-700 ease-out"
            >
              <div className="relative aspect-[3/4] max-h-[80vh] overflow-hidden">
                <img
                  src={HERO_IMAGE}
                  alt="WB31-00 Technical Jacket"
                  className="w-full h-full object-cover object-center"
                />
                {/* Technical overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-wider block">
                        MATERIAL COMPOSITION
                      </span>
                      <span className="font-mono text-xs text-foreground mt-1 block">
                        NYLON 70D / PTFE MEMBRANE / MICRO-GRID BACKER
                      </span>
                    </div>
                    <span className="font-display text-2xl font-extrabold text-foreground/20">
                      ¥89,000
                    </span>
                  </div>
                </div>
                {/* Corner technical marks */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/50 text-right">
                  <div>IW13A213-28</div>
                  <div className="mt-1">WANGSHIQI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
}