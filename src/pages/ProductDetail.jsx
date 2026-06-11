import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNightMode } from '@/lib/useNightMode';
import Navbar from '@/components/midnight/Navbar';
import NightNoiseOverlay from '@/components/midnight/NightNoiseOverlay';
import NightMouseGlow from '@/components/midnight/NightMouseGlow';
import SunMoonBackground from '@/components/midnight/SunMoonBackground';
import FullScreenMenu from '@/components/midnight/FullScreenMenu';
import CartDrawer from '@/components/midnight/CartDrawer';
import Footer from '@/components/midnight/Footer';

const ALL_PRODUCTS = [
  {
    code: 'WB31-00',
    name: 'MEMBRANE SHELL JACKET',
    price: 89000,
    material: 'GORE-TEX / 3L',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/8ec024962_generated_244d8e48.png',
    colors: ['#0F172A', '#475569', '#1e3a5f'],
    description: '構造的透明性 — 精密な設計と素材科学の融合。3層防水メンブレンが実現する、究極のパフォーマンスウェア。GORE-TEX 3レイヤー構造が極限の天候条件においても完全な防水・防風性能を発揮。テクニカルシェルの概念を再定義する一着。',
    specs: [
      { label: 'OUTER SHELL', value: 'NYLON 70D / GORE-TEX 3L' },
      { label: 'LINING', value: 'PTFE MEMBRANE / MICRO-GRID' },
      { label: 'WEIGHT', value: '420g' },
      { label: 'WATERPROOF', value: '28,000mm' },
      { label: 'BREATHABILITY', value: 'RET < 6' },
      { label: 'FIT', value: 'ATHLETIC / ARTICULATED' },
    ],
  },
  {
    code: 'CP47-12',
    name: 'ARTICULATED CARGO PANT',
    price: 42000,
    material: 'CORDURA / DWR',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/10dd407e9_generated_839a68b9.png',
    colors: ['#0F172A', '#374151'],
    description: 'CORDURA素材の堅牢性とアーティキュレートパターンが融合したカーゴパンツ。DWR加工による撥水性能と、動きに合わせて設計された立体裁断が機能性と美しいシルエットを両立。',
    specs: [
      { label: 'FABRIC', value: 'CORDURA NYLON 500D' },
      { label: 'FINISH', value: 'DWR C0' },
      { label: 'POCKETS', value: '8 POCKETS' },
      { label: 'WEIGHT', value: '580g' },
      { label: 'FIT', value: 'RELAXED TAPERED' },
      { label: 'WAIST', value: 'ADJUSTABLE' },
    ],
  },
  {
    code: 'VT09-03',
    name: 'MODULAR TACTICAL VEST',
    price: 56000,
    material: 'RIPSTOP / 500D',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/9311e51d2_generated_eaee41f6.png',
    colors: ['#0F172A', '#4B5563', '#1e293b'],
    description: 'MOLLE対応のモジュラーシステムを搭載したタクティカルベスト。500Dリップストップ素材による高い耐久性と、自由にカスタマイズ可能なポーチ配置が都市とフィールドの両環境に対応。',
    specs: [
      { label: 'FABRIC', value: '500D RIPSTOP NYLON' },
      { label: 'SYSTEM', value: 'MOLLE COMPATIBLE' },
      { label: 'POCKETS', value: '12 MODULAR' },
      { label: 'WEIGHT', value: '320g' },
      { label: 'CLOSURE', value: 'YKK ZIPPER + VELCRO' },
      { label: 'LOAD', value: 'MAX 8KG' },
    ],
  },
  {
    code: 'SJ15-06',
    name: 'INSULATED SHELL JACKET',
    price: 68000,
    material: 'PRIMALOFT / WR',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/50214ca4d_generated_b69db99a.png',
    colors: ['#1e3a5f', '#0F172A'],
    description: 'PrimaLoft Gold断熱材を採用した高性能インサレーションジャケット。軽量かつ圧縮可能な構造で、優れた保温性能を実現。WR（撥水）加工により、軽微な雨や雪にも対応。',
    specs: [
      { label: 'INSULATION', value: 'PRIMALOFT GOLD 100G' },
      { label: 'SHELL', value: 'NYLON 20D RIPSTOP' },
      { label: 'FINISH', value: 'WR TREATMENT' },
      { label: 'WEIGHT', value: '380g' },
      { label: 'PACKED SIZE', value: '18×12cm' },
      { label: 'WARMTH', value: 'CLO 1.8' },
    ],
  },
  {
    code: 'GT01-EP',
    name: 'WIRELESS EARBUDS PRO',
    price: 28000,
    material: 'ANC / 36H BATTERY',
    category: 'GADGET',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/af8520f98_generated_image.png',
    colors: ['#0F172A', '#475569'],
    description: 'アクティブノイズキャンセリング搭載のプロフェッショナルワイヤレスイヤバッド。最大36時間の再生時間と業界最高水準のANC性能が、どんな環境でも没入感のあるサウンドを提供。',
    specs: [
      { label: 'ANC', value: '-40dB REDUCTION' },
      { label: 'BATTERY', value: '9H + 27H CASE' },
      { label: 'DRIVER', value: '10mm DYNAMIC' },
      { label: 'CODEC', value: 'LDAC / AAC / SBC' },
      { label: 'WATER', value: 'IPX5' },
      { label: 'LATENCY', value: '< 50ms' },
    ],
  },
  {
    code: 'GT02-SW',
    name: 'MINIMAL SMARTWATCH',
    price: 45000,
    material: 'SAPPHIRE / 5ATM',
    category: 'GADGET',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/d815761d7_generated_image.png',
    colors: ['#0F172A', '#1e293b'],
    description: 'サファイアクリスタルガラスを採用したミニマルデザインのスマートウォッチ。5ATM防水性能と精密なヘルスモニタリング機能を、洗練されたケースに凝縮。時計としての美しさを妥協しない次世代ウェアラブル。',
    specs: [
      { label: 'GLASS', value: 'SAPPHIRE CRYSTAL' },
      { label: 'CASE', value: 'TITANIUM GRADE 5' },
      { label: 'WATER', value: '5ATM / 50M' },
      { label: 'BATTERY', value: '14 DAYS' },
      { label: 'SENSORS', value: 'HR / SPO2 / GPS' },
      { label: 'DISPLAY', value: '1.4" AMOLED' },
    ],
  },
  {
    code: 'BG04-11',
    name: 'MAGNETIC CROSSBODY',
    price: 24000,
    material: 'X-PAC / VX21',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/5d4e5ea96_generated_f14e4c44.png',
    colors: ['#0F172A', '#374151'],
    description: 'X-PAC VX21素材を使用した超軽量クロスボディバッグ。マグネティッククロージャーによる素早いアクセスと、拡張可能な収納システムが日常とアドベンチャーに対応。',
    specs: [
      { label: 'FABRIC', value: 'X-PAC VX21' },
      { label: 'WEIGHT', value: '180g' },
      { label: 'VOLUME', value: '4L + 2L EXPAND' },
      { label: 'CLOSURE', value: 'MAGNETIC + ZIP' },
      { label: 'STRAP', value: 'ADJUSTABLE 60-120cm' },
      { label: 'LAPTOP', value: 'UP TO 11"' },
    ],
  },
  {
    code: 'RN22-08',
    name: 'TECHNICAL RUNNER',
    price: 32000,
    material: 'VIBRAM / FLYKNIT',
    category: 'FASHION',
    image: 'https://media.base44.com/images/public/6a1bf3cc65543c659d8e8283/58456a323_generated_94b7562d.png',
    colors: ['#0F172A', '#475569', '#94a3b8'],
    description: 'VIBRAMアウトソールとFLYKNITアッパーを組み合わせたテクニカルランニングシューズ。軽量性と耐久性を高次元で両立し、あらゆる地形に対応するグリップ力を実現。',
    specs: [
      { label: 'UPPER', value: 'FLYKNIT ENGINEERED' },
      { label: 'OUTSOLE', value: 'VIBRAM MEGAGRIP' },
      { label: 'WEIGHT', value: '265g (US9)' },
      { label: 'DROP', value: '8mm' },
      { label: 'STACK', value: '28mm HEEL / 20mm FORE' },
      { label: 'TERRAIN', value: 'ROAD / TRAIL' },
    ],
  },
];

export default function ProductDetail() {
  const { code } = useParams();
  const { isNight, toggleNight } = useNightMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  const product = ALL_PRODUCTS.find(p => p.code === code);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-muted-foreground mb-4">PRODUCT NOT FOUND</p>
          <Link to="/" className="font-mono text-xs text-primary hover:underline">← BACK TO HOME</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SunMoonBackground isNight={isNight} />
      <NightNoiseOverlay isNight={isNight} />
      <NightMouseGlow isNight={isNight} />
      <Navbar
        isNight={isNight}
        toggleNight={toggleNight}
        onMenuOpen={() => setMenuOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />
      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <nav className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground tracking-wider">
            <Link to="/" className="hover:text-foreground transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{product.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.code}</span>
          </nav>
        </div>

        {/* Product layout */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left: Image */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/70 to-transparent">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{product.material}</span>
                </div>
                {/* Corner mark */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/40 text-right leading-relaxed">
                  <div>{product.code}</div>
                  <div>MIDNIGHT MALL</div>
                </div>
                {/* Color indicator */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(i)}
                      className={`w-4 h-4 rounded-full border-2 transition-all ${activeColor === i ? 'border-foreground scale-125' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {/* Category + code */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase border border-border px-2 py-1">
                  {product.category}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{product.code}</span>
              </div>

              {/* Name */}
              <h1 className={`font-display text-4xl lg:text-5xl font-extrabold tracking-[-0.04em] text-foreground leading-[1] mb-6 ${isNight ? 'neon-glow' : ''}`}>
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-8">
                <span className="font-display text-3xl font-extrabold text-foreground">
                  ¥{product.price.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-muted-foreground ml-2">JPY / TAX EXCL.</span>
              </div>

              {/* Description */}
              <div className="border-t border-border pt-6 mb-8">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs */}
              <div className="mb-10">
                <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4 block">
                  Technical Specifications
                </span>
                <div className="space-y-0 border-t border-border">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border/50">
                      <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{spec.label}</span>
                      <span className="font-mono text-[10px] text-foreground tracking-wider">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <button className={`w-full py-4 font-display text-sm font-bold tracking-[0.1em] transition-all duration-300 ${
                  isNight
                    ? 'bg-primary text-primary-foreground hover:opacity-90 neon-border'
                    : 'bg-foreground text-background hover:opacity-80'
                }`}>
                  ADD TO CART
                </button>
                <Link
                  to="/"
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  BACK TO COLLECTION
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}