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
  // ── NEW FASHION ──
  {
    code: 'HT33-07',
    name: 'UTILITY BUCKET HAT',
    price: 12000,
    material: 'SUPPLEX / UPF50',
    category: 'FASHION',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80',
    aspectClass: 'aspect-square',
    colors: ['#0F172A', '#374151', '#6B7280'],
    midnightOnly: false,
  },
  {
    code: 'GL09-NX',
    name: 'INSULATED GLOVES',
    price: 18000,
    material: 'POLARTEC / TOUCH',
    category: 'FASHION',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#1e293b', '#0F172A'],
    midnightOnly: true,
  },
  {
    code: 'SC88-KN',
    name: 'MERINO KNIT SCARF',
    price: 22000,
    material: 'MERINO / 100%',
    category: 'FASHION',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#374151', '#6B7280', '#9CA3AF'],
    midnightOnly: false,
  },
  // ── NEW GADGETS ──
  {
    code: 'GT03-KB',
    name: 'MECHANICAL KEYBOARD',
    price: 38000,
    material: 'ALUMINUM / TACTILE',
    category: 'GADGET',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    aspectClass: 'aspect-[4/3]',
    colors: ['#0F172A', '#1e293b'],
    midnightOnly: false,
  },
  {
    code: 'GT04-LP',
    name: 'PORTABLE LAMP',
    price: 15000,
    material: 'ALUMINUM / 2700K',
    category: 'GADGET',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#d4d4d4', '#0F172A'],
    midnightOnly: true,
  },
  // ── NEW FOOD & SWEETS ──
  {
    code: 'SW02-CB',
    name: 'クラフトチョコレート',
    price: 3200,
    material: 'カカオ72% / ベルギー産',
    category: 'SWEETS',
    image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&q=80',
    aspectClass: 'aspect-square',
    colors: ['#292524', '#78350f'],
    midnightOnly: false,
  },
  {
    code: 'CF03-CL',
    name: 'コールドブリュー SET',
    price: 2800,
    material: 'スペシャルティ / 低温抽出',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#1c1917', '#57534e'],
    midnightOnly: true,
  },
  // ── NEW LIFESTYLE ──
  {
    code: 'LF03-PL',
    name: 'TERRARIUM PLANT KIT',
    price: 9800,
    material: 'BOROSILICATE / LIVE',
    category: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#14532d', '#1e293b'],
    midnightOnly: false,
  },
  {
    code: 'LF04-JP',
    name: '白磁 POUR-OVER SET',
    price: 16500,
    material: '有田焼 / 職人製',
    category: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    aspectClass: 'aspect-square',
    colors: ['#f8fafc', '#e2e8f0'],
    midnightOnly: false,
  },
  {
    code: 'LF05-NX',
    name: 'MIDNIGHT INCENSE SET',
    price: 7200,
    material: '沈香 / 手巻き',
    category: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#292524', '#44403c'],
    midnightOnly: true,
  },
  // ── NEW BEAUTY ──
  {
    code: 'BT01-CC',
    name: 'CHARCOAL CLAY MASK',
    price: 5800,
    material: 'ACTIVATED / VEGAN',
    category: 'BEAUTY',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    aspectClass: 'aspect-square',
    colors: ['#1c1917', '#292524'],
    midnightOnly: false,
  },
  {
    code: 'BT02-EO',
    name: 'BOTANICAL OIL BLEND',
    price: 11200,
    material: 'JOJOBA / ARGAN',
    category: 'BEAUTY',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    aspectClass: 'aspect-[3/4]',
    colors: ['#78350f', '#92400e'],
    midnightOnly: true,
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