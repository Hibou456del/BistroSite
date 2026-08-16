'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ label: 'Couverts servis', value: '180+', sub: 'par soir', icon: 'UsersIcon' },
{ label: 'Note moyenne', value: '4.8★', sub: 'sur 2 400 avis', icon: 'StarIcon' }];


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-item');
    items?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = `fadeInUp 0.8s ease-out ${i * 0.15}s forwards`;
      }, 100);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1577886851336-779d0aa3c96f"
          alt="Salle de brasserie parisienne chaleureuse, lumières tamisées ambrées, tables en bois, ambiance bistrot, tons sombres et dorés"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Dual gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
      </div>

      {/* Atmospheric blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 blob-primary opacity-30 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left: Main headline */}
          <div className="lg:col-span-8">
            {/* Badge */}
            <div
              className="hero-item inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-black/30 backdrop-blur-md mb-8"
              style={{ opacity: 0 }}>
              
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
                Brasserie Parisienne · Depuis 1987
              </span>
            </div>

            <h1
              className="hero-item font-display text-hero-xl font-light text-white mb-6 text-balance"
              style={{ opacity: 0 }}>
              
              L&apos;art de la<br />
              <span className="font-semibold italic" style={{ color: 'var(--primary)' }}>
                table française.
              </span>
            </h1>

            <p
              className="hero-item text-lg text-slate-300 max-w-2xl font-light leading-relaxed border-l-2 pl-6 mb-10"
              style={{ opacity: 0, borderColor: 'var(--primary)' }}>
              
              Cuisine bistrot authentique, vins soigneusement sélectionnés et
              service chaleureux au cœur du 6ème arrondissement. Un repas
              ici, c&apos;est un souvenir pour toujours.
            </p>

            {/* CTAs */}
            <div
              className="hero-item flex flex-col sm:flex-row items-start gap-4"
              style={{ opacity: 0 }}>
              
              <Link
                href="/reservation"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-semibold text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 flex items-center gap-3 group">
                
                Réserver une table
                <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-medium rounded-sm transition-colors text-sm uppercase tracking-widest">
                
                Voir le menu
              </Link>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div
            className="hero-item lg:col-span-4 flex flex-col gap-4 lg:items-end"
            style={{ opacity: 0 }}>
            
            {stats.map((stat) =>
            <div
              key={stat.label}
              className="card-glass card-glass-hover rounded-xl p-6 w-full max-w-xs cursor-default">
              
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                  <Icon name={stat.icon as 'UsersIcon'} size={16} className="text-primary" />
                </div>
                <div className="font-display text-3xl font-light text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
              </div>
            )}

            {/* Opening hours mini card */}
            <div className="card-glass card-glass-hover rounded-xl p-6 w-full max-w-xs cursor-default">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  Ouvert aujourd&apos;hui
                </span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              <div className="font-display text-xl font-light text-white">12h – 23h30</div>
              <div className="text-xs text-muted-foreground mt-1">Service continu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Découvrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>);

}
