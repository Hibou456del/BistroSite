'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Réservation', href: '/reservation' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleScroll = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={handleScroll}>
            <AppLogo size={36} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-wide text-foreground">
                Le Comptoir
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Brasserie
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`nav-link ${
                  pathname === link?.href || (link?.href !== '/' && pathname?.startsWith(link?.href))
                    ? 'nav-link-active' :''
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/menu"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
            >
              Commander
            </Link>
            <Link
              href="/reservation"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-all duration-300"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-3' : 'w-3'
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'
              }`}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          onClick={() => setMenuOpen(false)}
        >
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="font-display text-3xl font-light text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-accent transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Réserver une table
          </Link>
        </div>
      )}
    </>
  );
}
