'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const milestones = [
{ year: '1987', text: 'Ouverture par Marcel et Hélène Dumont, boulangers de père en fils.' },
{ year: '2003', text: 'Rénovation de la salle, conservant les banquettes en velours rouge d\'origine.' },
{ year: '2019', text: 'Récompensé Bib Gourmand par le Guide Michelin.' }];


export default function OurStorySection() {
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
    <section ref={sectionRef} className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="lg:w-1/2 scroll-reveal stagger-1">
            <div className="relative group rounded-2xl overflow-hidden">
              <AppImage
                src="https://images.unsplash.com/photo-1637622191992-8dbe72981cce"
                alt="Intérieur chaleureux d'une brasserie parisienne, murs en brique, lumières dorées tamisées, banquettes rouges, ambiance authentique"
                width={700}
                height={520}
                className="object-cover w-full h-[420px] lg:h-[520px] image-zoom"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Floating award badge */}
              <div className="absolute bottom-6 right-6 card-glass rounded-xl p-4 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="TrophyIcon" size={18} className="text-primary" variant="solid" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Bib Gourmand</div>
                    <div className="text-[10px] text-muted-foreground">Guide Michelin 2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="scroll-reveal stagger-2">
              <div className="divider-ornament mb-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
                  Notre histoire
                </span>
              </div>
              <h2 className="font-display text-section-title font-light text-foreground mb-4">
                Trente-huit ans<br />
                <span className="text-primary italic">de passion.</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Le Comptoir est né d&apos;une conviction simple : que la cuisine
                bistrot — généreuse, honnête, ancrée dans la tradition — mérite
                les mêmes égards que la grande gastronomie. Chaque plat raconte
                une histoire, chaque verre porte l&apos;empreinte d&apos;une région.
              </p>
            </div>

            {/* Milestones */}
            <div className="flex flex-col gap-5">
              {milestones?.map((m, i) =>
              <div
                key={m?.year}
                className={`scroll-reveal stagger-${i + 3} flex gap-5 items-start`}>
                
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-primary">{m?.year}</span>
                    </div>
                    {i < milestones?.length - 1 &&
                  <div className="w-px flex-1 min-h-[24px] bg-border" />
                  }
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2.5">
                    {m?.text}
                  </p>
                </div>
              )}
            </div>

            {/* Stats row */}
            <div className="scroll-reveal stagger-5 grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {[
              { value: '38', label: 'Années d\'histoire' },
              { value: '120', label: 'Places assises' },
              { value: '2 400+', label: 'Avis clients' }]?.
              map((s) =>
              <div key={s?.label} className="text-center">
                  <div className="font-display text-2xl font-medium text-primary">{s?.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {s?.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
