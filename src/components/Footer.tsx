import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <AppLogo size={32} />
              <span className="font-display text-base font-semibold text-foreground">
                Le Comptoir
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Brasserie traditionnelle au cœur de Paris depuis 1987.
            </p>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Accueil
            </Link>
            <Link href="/menu" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </Link>
            <Link href="/reservation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Réservation
            </Link>
            <Link href="/menu" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Commander
            </Link>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Le Comptoir Brasserie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors focus:outline-none focus:text-foreground">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors focus:outline-none focus:text-foreground">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
