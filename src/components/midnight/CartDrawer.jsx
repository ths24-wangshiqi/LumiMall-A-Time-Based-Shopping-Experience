import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CART_ITEMS = [
  {
    code: 'WB31-00',
    name: 'MEMBRANE SHELL JACKET',
    price: 89000,
    size: 'M',
    qty: 1,
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/8ec024962_generated_244d8e48.png',
  },
  {
    code: 'BG04-11',
    name: 'MAGNETIC CROSSBODY',
    price: 24000,
    size: 'ONE SIZE',
    qty: 1,
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/5d4e5ea96_generated_f14e4c44.png',
  },
];

export default function CartDrawer({ isOpen, onClose }) {
  const total = CART_ITEMS.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-[90] bg-background border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">CART</h2>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {CART_ITEMS.length} ITEMS
                </span>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {CART_ITEMS.map((item) => (
                <div key={item.code} className="flex gap-4">
                  <div className="w-20 h-24 bg-muted overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-muted-foreground">{item.code}</span>
                    <h3 className="font-display text-sm font-semibold text-foreground mt-0.5 truncate">
                      {item.name}
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground">SIZE: {item.size}</span>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-border">
                        <button className="p-1.5 text-muted-foreground hover:text-foreground">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs w-4 text-center">{item.qty}</span>
                        <button className="p-1.5 text-muted-foreground hover:text-foreground">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-mono text-sm font-medium text-foreground">
                        ¥{(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-xs text-muted-foreground">SUBTOTAL</span>
                <span className="font-display text-xl font-extrabold text-foreground">
                  ¥{total.toLocaleString()}
                </span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground block">
                送料・税込 — チェックアウト時に計算
              </span>
              <Button className="w-full h-12 font-display text-sm font-semibold tracking-wider">
                CHECKOUT
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}