'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const dishes = [
{
  id: 1,
  name: 'Steak Frites Maison',
  description: 'Entrecôte de bœuf charolais, frites dorées à la graisse de canard, sauce béarnaise',
  price: '28€',
  tag: 'Signature',
  image: "https://images.unsplash.com/photo-1600020333626-de555db06232",
  alt: 'Steak grillé avec frites dorées sur assiette blanche, fond sombre, lumière chaude ambrée',
  colSpan: 'lg:col-span-2',
  tall: true
},
{
  id: 2,
  name: 'Soupe à l\'Oignon',
  description: 'Gratinée au comté AOP, croûton de pain de campagne',
  price: '12€',
  tag: 'Classique',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b832fd6-1772088178489.png",
  alt: 'Soupe à l\'oignon gratinée dans un bol en céramique brune, vapeur montante, lumière bistrot',
  colSpan: 'lg:col-span-1',
  tall: false
},
{
  id: 3,
  name: 'Tarte Tatin',
  description: 'Pommes caramélisées, pâte feuilletée, crème fraîche normande',
  price: '10€',
  tag: 'Dessert',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1223a8b44-1772181018159.png",
  alt: 'Tarte tatin aux pommes caramélisées renversée, couleur dorée profonde, fond sombre',
  colSpan: 'lg:col-span-1',
  tall: false
}];


export default function SignatureDishesSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="scroll-reveal stagger-1">
            <div className="divider-ornament mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
                Nos incontournables
              </span>
            </div>
            <h2 className="font-display text-section-title font-light text-foreground">
              Plats signatures
            </h2>
          </div>
          <Link
            href="/menu"
            className="scroll-reveal stagger-2 text-sm text-foreground border-b border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2 group">
            
            Voir tout le menu
            <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        {/* BENTO AUDIT: 3 dishes — Row1: [col1-2: dish1 tall] [col3: dish2] [col3: dish3 stacked] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card (col-span-2) */}
          <div className={`${dishes?.[0]?.colSpan} scroll-reveal stagger-2`}>
            <div className="spring-hover group relative rounded-2xl overflow-hidden border border-border h-full min-h-[400px] cursor-pointer">
              <AppImage
                src={dishes?.[0]?.image}
                alt={dishes?.[0]?.alt}
                fill
                className="object-cover image-zoom"
                sizes="(max-width: 1024px) 100vw, 66vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest font-semibold">
                  {dishes?.[0]?.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl font-medium text-white mb-1">
                  {dishes?.[0]?.name}
                </h3>
                <p className="text-slate-300 text-sm font-light max-w-sm mb-3">
                  {dishes?.[0]?.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-primary font-medium">
                    {dishes?.[0]?.price}
                  </span>
                  <Link
                    href="/menu"
                    className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                    
                    Commander
                    <Icon name="ArrowRightIcon" size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column stacked */}
          <div className="flex flex-col gap-4">
            {dishes?.slice(1)?.map((dish, i) =>
            <div key={dish?.id} className={`scroll-reveal stagger-${i + 3}`}>
                <div className="spring-hover group relative rounded-2xl overflow-hidden border border-border h-48 cursor-pointer">
                  <AppImage
                  src={dish?.image}
                  alt={dish?.alt}
                  fill
                  className="object-cover image-zoom"
                  sizes="(max-width: 1024px) 100vw, 33vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/80 text-primary-foreground text-[10px] uppercase tracking-widest font-semibold">
                      {dish?.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-display text-lg font-medium text-white mb-0.5">
                      {dish?.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-300 text-xs font-light flex-1 mr-4 line-clamp-1">
                        {dish?.description}
                      </p>
                      <span className="font-display text-base text-primary font-medium shrink-0">
                        {dish?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
