'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const hours = [
  { day: 'Lundi – Vendredi', time: '12h00 – 14h30 · 19h00 – 23h30' },
  { day: 'Samedi', time: '12h00 – 15h00 · 19h00 – 00h00' },
  { day: 'Dimanche', time: '12h00 – 16h00 (brunch)' },
];

const infos = [
  {
    icon: 'MapPinIcon',
    label: 'Adresse',
    value: '14 Rue de Buci, 75006 Paris',
    sub: 'Métro Mabillon (ligne 10)',
  },
  {
    icon: 'PhoneIcon',
    label: 'Téléphone',
    value: '+33 1 43 26 57 89',
    sub: 'Réservations 7j/7',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'contact@lecomptoir.fr',
    sub: 'Réponse sous 24h',
  },
];

export default function PracticalInfoSection() {
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
    <section ref={sectionRef} className="pt-16 pb-20 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 scroll-reveal stagger-1">
          <div className="divider-ornament justify-center mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
              Nous trouver
            </span>
          </div>
          <h2 className="font-display text-4xl font-light text-foreground">
            Informations pratiques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Hours + Contact */}
          <div className="flex flex-col gap-8">
            {/* Hours */}
            <div className="scroll-reveal stagger-2">
              <div className="flex items-center gap-3 mb-5">
                <Icon name="ClockIcon" size={18} className="text-primary" />
                <h3 className="font-display text-lg font-medium text-foreground">Horaires d&apos;ouverture</h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-3 border-b border-border last:border-0"
                  >
                    <span className="text-sm font-medium text-foreground">{h.day}</span>
                    <span className="text-sm text-muted-foreground font-light">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="scroll-reveal stagger-3 flex flex-col gap-4">
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name={info.icon as 'MapPinIcon'} size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">{info.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="scroll-reveal stagger-4">
            <div className="relative rounded-2xl overflow-hidden border border-border h-full min-h-[360px] bg-card">
              {/* Map placeholder with grid pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(46, 35, 24, 0.6) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(46, 35, 24, 0.6) 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="absolute inset-0 blob-primary opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse-ring absolute inset-0" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                    <Icon name="MapPinIcon" size={22} className="text-primary" variant="solid" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-lg font-medium text-foreground">Le Comptoir</div>
                  <div className="text-sm text-muted-foreground">14 Rue de Buci, 75006 Paris</div>
                </div>
                <a
                  href="https://maps.google.com/?q=14+Rue+de+Buci+75006+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-primary/30 text-primary text-xs uppercase tracking-widest rounded-full hover:bg-primary/10 transition-colors"
                >
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
