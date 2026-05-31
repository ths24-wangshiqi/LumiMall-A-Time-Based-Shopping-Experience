import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden ${product.aspectClass}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Blueprint overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-foreground/5 backdrop-blur-[1px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <span className="font-mono text-[10px] text-foreground/60 tracking-[0.2em] uppercase block">
              Quick View
            </span>
          </div>
        </motion.div>

        {/* Material tag */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[9px] px-2 py-1 bg-background/80 backdrop-blur-sm text-muted-foreground tracking-wider border border-border/50">
            {product.material}
          </span>
        </div>

        {/* Midnight badge */}
        {product.midnightOnly && (
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[9px] px-2 py-1 bg-primary/90 text-primary-foreground tracking-wider">
              MIDNIGHT ONLY
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider block">
              {product.code}
            </span>
            <h3 className="font-display text-sm font-semibold text-foreground mt-0.5">
              {product.name}
            </h3>
          </div>
          <span className="font-mono text-xs text-foreground font-medium whitespace-nowrap">
            ¥{product.price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {product.colors?.map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}