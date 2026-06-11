import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORY_BADGE_COLORS = {
  FASHION: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
  GADGET:  'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300',
  SWEETS:  'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300',
  FOOD:    'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  LIFESTYLE:'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300',
  BEAUTY:  'bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-300',
};

export default function ProductCard({ product, index }) {
  const [hovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.06 }}
    >
    <Link
      to={`/product/${product.code}`}
      className="block group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden bg-muted ${product.aspectClass}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-foreground/10 backdrop-blur-[2px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="font-mono text-[10px] text-foreground tracking-[0.2em] uppercase bg-background/80 px-3 py-1.5">
            QUICK VIEW →
          </span>
        </motion.div>

        {/* Material tag */}
        <div className="absolute top-2 left-2">
          <span className="font-mono text-[8px] px-1.5 py-0.5 bg-background/85 backdrop-blur-sm text-muted-foreground tracking-wider border border-border/40">
            {product.material}
          </span>
        </div>

        {/* Midnight badge */}
        {product.midnightOnly && (
          <div className="absolute top-2 right-2">
            <span className="font-mono text-[8px] px-1.5 py-0.5 bg-primary/90 text-primary-foreground tracking-wider">
              🌙 MIDNIGHT
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-2.5 space-y-1">
        {/* Category chip */}
        <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded-sm tracking-wider inline-block ${CATEGORY_BADGE_COLORS[product.category] || CATEGORY_BADGE_COLORS.FASHION}`}>
          {product.category}
        </span>
        <div className="flex items-start justify-between gap-1">
          <div className="min-w-0">
            <span className="font-mono text-[9px] text-muted-foreground tracking-wider block">{product.code}</span>
            <h3 className="font-display text-sm font-semibold text-foreground mt-0.5 truncate leading-tight">
              {product.name}
            </h3>
          </div>
          <span className="font-mono text-xs text-foreground font-medium whitespace-nowrap">
            ¥{product.price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-1.5 pt-0.5">
          {product.colors?.map((color, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </Link>
    </motion.div>
  );
}