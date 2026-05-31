import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EditorialSection() {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/9311e51d2_generated_eaee41f6.png"
                alt="Editorial - Modular System"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-mono text-[10px] text-foreground/70 tracking-[0.2em] block">
                  EDITORIAL
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-4">
              03 — Lab Report
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-[-0.04em] text-foreground leading-tight">
              MODULAR
              <br />
              SYSTEM
            </h2>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                モジュラーシステムは、一つのベースガーメントに複数のアタッチメントを組み合わせることで、環境に応じた最適な構成を可能にします。
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                フィールドテストを重ねて開発された接続機構は、片手での着脱を実現。都市環境からアルパインフィールドまで、シームレスに対応します。
              </p>
            </div>
            <button className="mt-8 group flex items-center gap-3 font-display text-sm font-semibold text-foreground hover:text-primary transition-colors">
              READ MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}