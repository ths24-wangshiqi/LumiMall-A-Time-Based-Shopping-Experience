import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    code: 'WB31-00',
    name: 'MEMBRANE SHELL JACKET',
    price: 89000,
    material: 'GORE-TEX / 3L',
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
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/50214ca4d_generated_b69db99a.png',
    aspectClass: 'aspect-[3/4]',
    colors: ['#1e3a5f', '#0F172A'],
    midnightOnly: false,
  },
  {
    code: 'RN22-08',
    name: 'TECHNICAL RUNNER',
    price: 32000,
    material: 'VIBRAM / FLYKNIT',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/58456a323_generated_94b7562d.png',
    aspectClass: 'aspect-[4/3]',
    colors: ['#0F172A', '#475569', '#94a3b8'],
    midnightOnly: true,
  },
  {
    code: 'BG04-11',
    name: 'MAGNETIC CROSSBODY',
    price: 24000,
    material: 'X-PAC / VX21',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/5d4e5ea96_generated_f14e4c44.png',
    aspectClass: 'aspect-square',
    colors: ['#0F172A', '#374151'],
    midnightOnly: false,
  },
];

export default function ProductGrid({ isNight }) {
  const visibleProducts = isNight ? PRODUCTS : PRODUCTS.filter(p => !p.midnightOnly);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-2">
              02 — Material Matrix
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-[-0.04em] text-foreground">
              COLLECTION
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {visibleProducts.length} ITEMS
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.code} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}