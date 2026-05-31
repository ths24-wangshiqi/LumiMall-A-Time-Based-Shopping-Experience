import React from 'react';

const LINKS = {
  SHOP: ['ALL', 'OUTERWEAR', 'BOTTOMS', 'FOOTWEAR', 'ACCESSORIES'],
  INFO: ['ABOUT', 'SUSTAINABILITY', 'CAREERS', 'PRESS'],
  SUPPORT: ['FAQ', 'SHIPPING', 'RETURNS', 'SIZE GUIDE'],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                MIDNIGHT
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-primary">
                MALL
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              夜だけ開く、もう一つのショッピング体験。構造的透明性と素材科学の融合が生み出す、新しいデジタルフラッグシップ。
            </p>
            <div className="mt-6 font-mono text-[10px] text-muted-foreground tracking-wider">
              © 2026 MIDNIGHT MALL. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            KINETIC ARCHIVE — STRUCTURAL TRANSPARENCY
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            TOKYO / BERLIN / NYC
          </span>
        </div>
      </div>
    </footer>
  );
}