import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ReservationHero() {
  return (
    <section
      className="relative h-64 md:h-72 flex items-end overflow-hidden"
      style={{ paddingTop: '80px' }}>
      
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1728773531955-5c94addbc50a"
          alt="Table de restaurant élégante dressée pour deux, bougies, verres à vin, fond sombre et tamisé, ambiance romantique bistrot"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-black/30 backdrop-blur-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
            Tables disponibles ce soir
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-light text-white">
          Réserver <span className="text-primary italic font-medium">une table</span>
        </h1>
      </div>
    </section>);

}
