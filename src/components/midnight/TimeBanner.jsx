import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';

export default function TimeBanner({ isNight }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeUntilMidnight = () => {
    const now = new Date();
    const hour = now.getHours();
    let target;
    if (hour < 22 && hour >= 5) {
      target = new Date(now);
      target.setHours(22, 0, 0, 0);
    } else {
      return null;
    }
    const diff = target - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const countdown = getTimeUntilMidnight();

  return (
    <div className="border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-3">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">
              {time.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </span>
            <span className="w-px h-4 bg-border" />
            <AnimatePresence mode="wait">
              {isNight ? (
                <motion.span
                  key="night"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-mono text-xs text-primary neon-glow-cyan flex items-center gap-1.5"
                >
                  <Zap className="w-3 h-3" />
                  深夜限定モード — 特別商品が解放中
                </motion.span>
              ) : (
                <motion.span
                  key="day"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-mono text-xs text-muted-foreground"
                >
                  通常モード
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          {countdown && !isNight && (
            <span className="font-mono text-xs text-muted-foreground hidden sm:block">
              深夜モードまで: <span className="text-foreground font-medium">{countdown}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}