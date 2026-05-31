import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const MOODS = [
  { label: '眠れないあなたへ', sub: 'FOR SLEEPLESS NIGHTS', desc: '穏やかな質感と包み込むフォルム。夜に寄り添うコレクション。' },
  { label: '夜を歩くあなたへ', sub: 'FOR NIGHT WALKERS', desc: 'リフレクティブディテールと高視認性素材。暗闘を制するギア。' },
  { label: '朝を待つあなたへ', sub: 'FOR DAWN SEEKERS', desc: '軽量で通気性の高い構造。夜明けに備えるレイヤリング。' },
];

export default function EmotionRecommend({ isNight }) {
  if (!isNight) return null;

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase neon-glow">
              Emotion Recommend
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-[-0.04em] text-foreground neon-glow">
            感情レコメンド
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-lg">
            深夜の感情に寄り添う、パーソナライズされたプロダクト提案。
          </p>
        </div>

        {/* Mood cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {MOODS.map((mood, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-8 lg:p-12 group cursor-pointer hover:bg-accent/50 transition-colors duration-500"
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] block mb-6">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-extrabold text-foreground mb-1 neon-glow group-hover:text-primary transition-colors">
                {mood.label}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider block mb-4">
                {mood.sub}
              </span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {mood.desc}
              </p>
              <div className="mt-6 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                EXPLORE →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}