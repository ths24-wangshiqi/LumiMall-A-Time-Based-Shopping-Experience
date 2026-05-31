import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MENU_ITEMS = [
  { num: '01', label: 'SHOP', sub: 'コレクション' },
  { num: '02', label: 'ARCHIVE', sub: 'アーカイブ' },
  { num: '03', label: 'LAB', sub: '素材研究所' },
  { num: '04', label: 'ABOUT', sub: 'ブランドについて' },
  { num: '05', label: 'CONTACT', sub: 'お問い合わせ' },
];

export default function FullScreenMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-[20px]"
            onClick={onClose}
          />
          {/* Menu content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 lg:right-12 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="space-y-1">
              {MENU_ITEMS.map((item, i) => (
                <motion.a
                  key={item.num}
                  href="#"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group flex items-baseline gap-6 py-3 px-4 hover:bg-accent/50 transition-colors rounded"
                  onClick={onClose}
                >
                  <span className="font-mono text-sm text-muted-foreground w-8">
                    {item.num}
                  </span>
                  <span className="font-display text-4xl lg:text-6xl font-extrabold tracking-[-0.04em] text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <span className="font-body text-sm text-muted-foreground hidden md:block">
                    {item.sub}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}