import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuHero from './components/MenuHero';
import MenuTabs from './components/MenuTabs';

export default function MenuPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <MenuHero />
      <MenuTabs />
      <Footer />
    </main>
  );
}
