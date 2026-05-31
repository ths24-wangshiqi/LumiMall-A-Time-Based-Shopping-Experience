import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ALL_PRODUCTS = [
  // ── FASHION ──
  {
    code: 'WB31-00',
    name: 'MEMBRANE SHELL JACKET',
    price: 89000,
    material: 'GORE-TEX / 3L',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/8ec024962_generated_244d8e48.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#0F172A', '#475569', '#1e3a5f'],
    midnightOnly: false,
  },
  {
    code: 'CP47-12',
    name: 'ARTICULATED CARGO PANT',
    price: 42000,
    material: 'CORDURA / DWR',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/10dd407e9_generated_839a68b9.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#0F172A', '#374151'],
    midnightOnly: false,
  },
  {
    code: 'VT09-03',
    name: 'MODULAR TACTICAL VEST',
    price: 56000,
    material: 'RIPSTOP / 500D',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/9311e51d2_generated_eaee41f6.png',
    aspectClass: 'aspect-[4/5]',
    colors: ['#0F172A', '#4B5563', '#1e293b'],
    midnightOnly: true,
  },
  {
    code: 'SJ15-06',
    name: 'INSULATED SHELL JACKET',
    price: 68000,
    material: 'PRIMALOFT / WR',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/50214ca4d_generated_b69db99a.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#1e3a5f', '#0F172A'],
    midnightOnly: false,
  },
  // ── SWEETS & FOOD ──
  {
    code: 'SW01-MT',
    name: '抹茶パフェセット',
    price: 4800,
    material: '宇治抹茶 / 有機認証',
    category: 'SWEETS',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/7c0c68ad8_generated_image.png',
    aspectClass: 'aspect-square',
    colors: ['#4d7c0f', '#1e293b'],
    midnightOnly: true,
  },
  {
    code: 'CF02-SA',
    name: 'シングルオリジン コーヒー',
    price: 2200,
    material: 'エチオピア / 浅煎り',
    category: 'FOOD',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/3c73dc16d_generated_image.png',
    aspectClass: 'aspect-square',
    colors: ['#292524', '#78716c'],
    midnightOnly: false,
  },
  // ── GADGETS ──
  {
    code: 'GT01-EP',
    name: 'WIRELESS EARBUDS PRO',
    price: 28000,
    material: 'ANC / 36H BATTERY',
    category: 'GADGET',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/af8520f98_generated_image.png',
    aspectClass: 'aspect-square',
    colors: ['#0F172A', '#475569'],
    midnightOnly: false,
  },
  {
    code: 'GT02-SW',
    name: 'MINIMAL SMARTWATCH',
    price: 45000,
    material: 'SAPPHIRE / 5ATM',
    category: 'GADGET',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/d815761d7_generated_image.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#0F172A', '#1e293b'],
    midnightOnly: true,
  },
  // ── LIFESTYLE ──
  {
    code: 'LF01-CN',
    name: 'CONCRETE CANDLE SET',
    price: 6800,
    material: 'SOY WAX / BOTANICAL',
    category: 'LIFESTYLE',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/62713162c_generated_image.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#d4d4d4', '#78716c'],
    midnightOnly: false,
  },
  {
    code: 'LF02-SK',
    name: 'SERUM COLLECTION',
    price: 14800,
    material: 'RETINOL / VEGAN',
    category: 'BEAUTY',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/3d6b8dfa4_generated_image.png',
    aspectClass: 'aspect-square',
    colors: ['#0F172A', '#854d0e'],
    midnightOnly: true,
  },
  {
    code: 'BG04-11',
    name: 'MAGNETIC CROSSBODY',
    price: 24000,
    material: 'X-PAC / VX21',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/5d4e5ea96_generated_f14e4c44.png',
    aspectClass: 'aspect-square',
    colors: ['#0F172A', '#374151'],
    midnightOnly: false,
  },
  {
    code: 'RN22-08',
    name: 'TECHNICAL RUNNER',
    price: 32000,
    material: 'VIBRAM / FLYKNIT',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/58456a323_generated_94b7562d.png',
    aspectClass: 'aspect-[4/3]',
    colors: ['#0F172A', '#475569', '#94a3b8'],
    midnightOnly: false,
  },
];

const CATEGORIES = ['ALL', 'FASHION', 'GADGET', 'SWEETS', 'FOOD', 'LIFESTYLE', 'BEAUTY'];

export default function ProductGrid({ isNight }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const visible = ALL_PRODUCTS.filter(p => {
    const catMatch = activeCategory === 'ALL' || p.category === activeCategory;
    const nightMatch = isNight || !p.midnightOnly;
    return catMatch && nightMatch;
  });

  return (
    <section className="py-20 lg:py-32 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 border-b border-border pb-6">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-2">
              02 — Material Matrix
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-[-0.04em] text-foreground">
              COLLECTION
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{visible.length} ITEMS</span>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[10px] tracking-[0.15em] px-3 py-1.5 border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {visible.map((product, index) => (
            <ProductCard key={product.code} product={product} index={index} />
          ))}
        </div>

        {/* Midnight unlock hint */}
        {!isNight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 border border-dashed border-border rounded p-6 text-center"
          >
            <span className="font-mono text-xs text-muted-foreground">
              🌙 22:00以降に深夜モードで追加商品が解放されます
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}