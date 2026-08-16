import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SignatureDishesSection from './components/SignatureDishesSection';
import OurStorySection from './components/OurStorySection';
import OrderOnlineSection from './components/OrderOnlineSection';
import PracticalInfoSection from './components/PracticalInfoSection';

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <SignatureDishesSection />
      <OurStorySection />
      <OrderOnlineSection />
      <PracticalInfoSection />
      <Footer />
    </main>
  );
}
