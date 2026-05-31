import React, { useState } from 'react';
import { useNightMode } from '@/lib/useNightMode';
import Navbar from '@/components/midnight/Navbar';
import ProgressLine from '@/components/midnight/ProgressLine';
import SunMoonBackground from '@/components/midnight/SunMoonBackground';
import HeroSection from '@/components/midnight/HeroSection';
import TimeBanner from '@/components/midnight/TimeBanner';
import ProductGrid from '@/components/midnight/ProductGrid';
import MidnightCountdown from '@/components/midnight/MidnightCountdown';
import EmotionRecommend from '@/components/midnight/EmotionRecommend';
import EditorialSection from '@/components/midnight/EditorialSection';
import Footer from '@/components/midnight/Footer';
import FullScreenMenu from '@/components/midnight/FullScreenMenu';
import CartDrawer from '@/components/midnight/CartDrawer';
import NightNoiseOverlay from '@/components/midnight/NightNoiseOverlay';
import NightMouseGlow from '@/components/midnight/NightMouseGlow';

export default function Home() {
  const { isNight, toggleNight } = useNightMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SunMoonBackground isNight={isNight} />
      <NightNoiseOverlay isNight={isNight} />
      <NightMouseGlow isNight={isNight} />
      <ProgressLine />
      <Navbar
        isNight={isNight}
        toggleNight={toggleNight}
        onMenuOpen={() => setMenuOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />
      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <main>
        <HeroSection isNight={isNight} />
        <TimeBanner isNight={isNight} />
        <ProductGrid isNight={isNight} />
        <MidnightCountdown isNight={isNight} />
        <EmotionRecommend isNight={isNight} />
        <EditorialSection />
      </main>

      <Footer />
    </div>
  );
}