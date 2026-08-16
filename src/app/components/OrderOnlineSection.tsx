'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const orderOptions = [
  {
    icon: 'ShoppingBagIcon',
    title: 'À emporter',
    description: 'Commandez en avance, récupérez votre repas prêt en 20 minutes sans attente.',
    cta: 'Commander à emporter',
    badge: 'Prêt en 20 min',
    href: '/menu',
  },
  {
    icon: 'TruckIcon',
    title: 'Livraison',
    description: 'Profitez de nos plats chez vous, livrés chauds dans un rayon de 5 km.',
    cta: 'Commander en livraison',
    badge: 'Livraison 30–45 min',
    href: '/menu',
  },
];

export default function OrderOnlineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blob-primary opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal stagger-1">
          <div className="divider-ornament justify-center mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
              Commander en ligne
            </span>
          </div>
          <h2 className="font-display text-section-title font-light text-foreground mb-4">
            Le Comptoir,<br />
            <span className="text-primary italic">où que vous soyez.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Nos plats mijotés, nos vins naturels et nos desserts maison disponibles
            à emporter ou livrés directement chez vous.
          </p>
        </div>

        {/* Order cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {orderOptions.map((opt, i) => (
            <div
              key={opt.title}
              className={`scroll-reveal stagger-${i + 2} card-glass card-glass-hover rounded-2xl p-8 flex flex-col gap-6`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={opt.icon as 'ShoppingBagIcon'} size={22} className="text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-semibold">
                  {opt.badge}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {opt.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {opt.description}
                </p>
              </div>
              <Link
                href={opt.href}
                className="mt-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-all duration-300 group w-fit"
              >
                {opt.cta}
                <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Promo band */}
        <div className="mt-10 scroll-reveal stagger-4 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-5">
            <div className="flex items-center gap-3">
              <Icon name="GiftIcon" size={20} className="text-primary shrink-0" />
              <p className="text-sm text-foreground font-medium">
                <span className="text-primary">Livraison offerte</span> pour toute commande supérieure à 35€
              </p>
            </div>
            <Link
              href="/menu"
              className="text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors font-semibold shrink-0"
            >
              En profiter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
