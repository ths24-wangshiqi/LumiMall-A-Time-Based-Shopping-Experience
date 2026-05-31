import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExportPdfButton from '@/components/midnight/ExportPdfButton';

export default function Navbar({ isNight, toggleNight, onMenuOpen, onCartOpen }) {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formatTime = (d) => {
    return d.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-[20px] bg-background/70 border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-6">
            <button onClick={onMenuOpen} className="group">
              <Menu className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                MIDNIGHT
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-primary">
                MALL
              </span>
            </div>
          </div>

          {/* Center: Clock */}
          <div className="hidden md:flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              {formatTime(time)}
            </span>
            {isNight && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 neon-border"
              >
                MIDNIGHT MODE
              </motion.span>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ExportPdfButton />
            </div>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={toggleNight}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isNight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={onCartOpen} className="relative text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary text-primary-foreground text-[8px] font-mono flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}