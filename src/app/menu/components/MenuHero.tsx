import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MenuHero() {
  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden" style={{ paddingTop: '80px' }}>
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1696312946399-c890da39c7bc"
          alt="Table dressée avec plats français, lumière chaude dorée, fond sombre atmosphérique, vaisselle élégante de bistrot"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-black/30 backdrop-blur-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
            Carte du jour
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-light text-white">
          Notre <span className="text-primary italic font-medium">Menu</span>
        </h1>
      </div>
    </section>);

}
