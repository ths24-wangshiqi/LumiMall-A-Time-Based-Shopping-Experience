import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Timer } from 'lucide-react';

export default function MidnightCountdown({ isNight }) {
  const [countdown, setCountdown] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const hour = now.getHours();
      let endTime;

      if (isNight) {
        // Countdown to 5:00 AM (end of midnight mode)
        endTime = new Date(now);
        if (hour >= 22) {
          endTime.setDate(endTime.getDate() + 1);
        }
        endTime.setHours(5, 0, 0, 0);
      } else {
        // Countdown to 22:00 (start of midnight mode)
        endTime = new Date(now);
        endTime.setHours(22, 0, 0, 0);
        if (hour >= 22 || hour < 5) {
          endTime.setDate(endTime.getDate() + 1);
        }
      }

      const diff = Math.max(0, endTime - now);
      setCountdown({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [isNight]);

  if (!isNight) return null;

  return (
    <section className="py-16 lg:py-24 border-y border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase neon-glow">
                Midnight Flash Sale
              </span>
            </div>
            <h2 className="font-display text-2xl lg:text-4xl font-extrabold tracking-[-0.04em] text-foreground neon-glow">
              深夜タイムセール
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-2 max-w-md">
              22:00〜05:00の間だけ解放される限定価格。この瞬間を逃さないでください。
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <Timer className="w-4 h-4 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground">残り時間:</span>
            <div className="flex gap-2">
              {[
                { val: countdown.h, label: 'H' },
                { val: countdown.m, label: 'M' },
                { val: countdown.s, label: 'S' },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-1">
                  <motion.span
                    key={item.val}
                    initial={{ y: -5, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-display text-3xl lg:text-5xl font-extrabold text-foreground tabular-nums neon-glow"
                  >
                    {String(item.val).padStart(2, '0')}
                  </motion.span>
                  <span className="font-mono text-[10px] text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}