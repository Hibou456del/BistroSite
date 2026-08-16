import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationHero from './components/ReservationHero';
import ReservationForm from './components/ReservationForm';

export default function ReservationPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <ReservationHero />
      <ReservationForm />
      <Footer />
    </main>
  );
}
