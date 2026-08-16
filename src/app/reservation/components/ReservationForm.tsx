'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const timeSlots = ['12:00', '12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
const partySizes = ['1 personne', '2 personnes', '3 personnes', '4 personnes', '5 personnes', '6 personnes', '7–10 personnes', '10+ personnes'];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion: string;
  requests: string;
}

export default function ReservationForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    occasion: '',
    requests: '',
  });

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend connection point
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 px-6" ref={sectionRef}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float-slow">
            <Icon name="CheckCircleIcon" size={40} className="text-primary" variant="solid" />
          </div>
          <h2 className="font-display text-3xl font-light text-foreground mb-4">
            Réservation confirmée !
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-2">
            Merci, <span className="text-foreground font-medium">{form.firstName}</span>. Votre table pour{' '}
            <span className="text-primary font-medium">{form.partySize}</span> le{' '}
            <span className="text-primary font-medium">{form.date}</span> à{' '}
            <span className="text-primary font-medium">{form.time}</span> est réservée.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Un email de confirmation a été envoyé à {form.email}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-border text-muted-foreground text-sm rounded-sm hover:text-foreground hover:border-primary/30 transition-all"
            >
              Nouvelle réservation
            </button>
            <a
              href="/menu"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-accent transition-all"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Policy card */}
            <div className="scroll-reveal stagger-1 card-glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <Icon name="InformationCircleIcon" size={18} className="text-primary" />
                <h3 className="font-display text-base font-medium text-foreground">
                  Informations utiles
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: 'ClockIcon',
                    title: 'Délai de grâce',
                    text: 'Votre table est maintenue 15 minutes après l\'heure de réservation.',
                  },
                  {
                    icon: 'UserGroupIcon',
                    title: 'Grands groupes',
                    text: 'Pour 8 personnes et plus, contactez-nous directement au +33 1 43 26 57 89.',
                  },
                  {
                    icon: 'HeartIcon',
                    title: 'Occasion spéciale',
                    text: 'Anniversaire, demande en mariage, anniversaire de mariage — précisez-le dans vos notes.',
                  },
                  {
                    icon: 'ShieldCheckIcon',
                    title: 'Annulation',
                    text: 'Annulation gratuite jusqu\'à 2h avant votre réservation.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={item.icon as 'ClockIcon'} size={14} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground font-light leading-relaxed mt-0.5">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours card */}
            <div className="scroll-reveal stagger-2 card-glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="CalendarIcon" size={18} className="text-primary" />
                <h3 className="font-display text-base font-medium text-foreground">
                  Horaires de service
                </h3>
              </div>
              {[
                { day: 'Lun – Ven', time: '12h–14h30 / 19h–23h30' },
                { day: 'Samedi', time: '12h–15h / 19h–00h00' },
                { day: 'Dimanche', time: '12h–16h (brunch)' },
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{h.day}</span>
                  <span className="text-xs text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 scroll-reveal stagger-2">
            <div className="card-glass rounded-2xl p-8 border border-border">
              <div className="mb-8">
                <h2 className="font-display text-2xl font-medium text-foreground mb-2">
                  Votre réservation
                </h2>
                <p className="text-sm text-muted-foreground font-light">
                  Remplissez le formulaire ci-dessous. Confirmation immédiate par email.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Sophie"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Moreau"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="sophie@email.fr"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+33 6 12 34 56 78"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                {/* Date + Time row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Heure *
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all"
                    >
                      <option value="">Choisir l&apos;heure</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Party size */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    Nombre de personnes *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {partySizes.slice(0, 8).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, partySize: size }))}
                        className={`py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          form.partySize === size
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    Occasion (optionnel)
                  </label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all"
                  >
                    <option value="">Aucune occasion particulière</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="romantique">Dîner romantique</option>
                    <option value="affaires">Repas d&apos;affaires</option>
                    <option value="famille">Repas en famille</option>
                    <option value="mariage">Anniversaire de mariage</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Special requests */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    Demandes spéciales
                  </label>
                  <textarea
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Allergies alimentaires, chaise haute, table en terrasse..."
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-muted transition-all resize-none placeholder:text-muted-foreground/40"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground rounded-sm font-semibold text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 group"
                >
                  <Icon name="CalendarIcon" size={16} />
                  Confirmer ma réservation
                  <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  En confirmant, vous acceptez nos{' '}
                  <a href="#" className="text-primary hover:text-accent underline">
                    conditions d&apos;utilisation
                  </a>
                  . Aucun paiement requis à la réservation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
