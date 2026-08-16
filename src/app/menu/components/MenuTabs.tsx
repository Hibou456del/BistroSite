'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  alt: string;
  allergens?: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  dishes: Dish[];
}

const categories: Category[] = [
{
  id: 'entrees',
  label: 'Entrées',
  icon: 'SparklesIcon',
  dishes: [
  {
    id: 1,
    name: 'Terrine de Campagne',
    description: 'Terrine maison au porc et aux herbes, cornichons et pain de campagne grillé',
    price: '11€',
    tag: 'Maison',
    image: "https://images.unsplash.com/photo-1694460265637-5beb1d12a92e",
    alt: 'Terrine de campagne rustique sur planche en bois, cornichons et pain grillé, lumière bistrot',
    allergens: 'Gluten, Porc'
  },
  {
    id: 2,
    name: 'Soupe à l\'Oignon Gratinée',
    description: 'Bouillon de bœuf, oignons caramélisés, croûton, comté AOP fondu',
    price: '12€',
    tag: 'Classique',
    image: "https://images.unsplash.com/photo-1549250392-312ef733ba8b",
    alt: 'Soupe à l\'oignon gratinée dans un bol brun, fromage fondu doré, vapeur, lumière chaude',
    allergens: 'Gluten, Lait'
  },
  {
    id: 3,
    name: 'Salade Niçoise',
    description: 'Thon albacore, œufs mollets, haricots verts, olives de Nice, anchois',
    price: '14€',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15102c92b-1772618738068.png",
    alt: 'Salade niçoise colorée sur assiette blanche, thon, légumes frais, fond sombre',
    allergens: 'Œufs, Poisson'
  },
  {
    id: 4,
    name: 'Escargots de Bourgogne',
    description: 'Six escargots au beurre persillé et ail, pain grillé',
    price: '16€',
    tag: 'Spécialité',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1933e3c85-1772059810800.png",
    alt: 'Escargots de Bourgogne dans leur coquille avec beurre persillé, présentation élégante',
    allergens: 'Gluten, Lait, Mollusques'
  }]

},
{
  id: 'plats',
  label: 'Plats du Jour',
  icon: 'FireIcon',
  dishes: [
  {
    id: 5,
    name: 'Steak Frites Maison',
    description: 'Entrecôte de bœuf charolais, frites à la graisse de canard, sauce béarnaise',
    price: '28€',
    tag: 'Signature',
    image: "https://images.unsplash.com/photo-1677027201352-3c3981cb8b5c",
    alt: 'Steak grillé saignant avec frites dorées, sauce béarnaise, fond sombre ambiance bistrot',
    allergens: 'Œufs, Lait'
  },
  {
    id: 6,
    name: 'Confit de Canard',
    description: 'Cuisse de canard confite 12h, sarladaises, salade verte et vinaigrette',
    price: '26€',
    tag: 'Tradition',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e8a1d37-1772193636028.png",
    alt: 'Confit de canard doré croustillant avec pommes sarladaises, fond sombre bistrot',
    allergens: 'Aucun allergène majeur'
  },
  {
    id: 7,
    name: 'Sole Meunière',
    description: 'Sole de ligne, beurre noisette, câpres, citron, pommes vapeur',
    price: '32€',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d4509e5-1772193632501.png",
    alt: 'Sole meunière avec beurre noisette doré, citron et câpres, présentation raffinée',
    allergens: 'Poisson, Lait'
  },
  {
    id: 8,
    name: 'Poulet Rôti Fermier',
    description: 'Demi-poulet fermier Label Rouge, jus de rôti, haricots verts et pommes de terre',
    price: '22€',
    tag: 'Brasserie',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ab94c4f-1773110389834.png",
    alt: 'Poulet rôti doré croustillant avec légumes de saison, jus brillant, fond sombre',
    allergens: 'Aucun allergène majeur'
  }]

},
{
  id: 'desserts',
  label: 'Desserts',
  icon: 'CakeIcon',
  dishes: [
  {
    id: 9,
    name: 'Tarte Tatin',
    description: 'Pommes caramélisées, pâte feuilletée maison, crème fraîche normande',
    price: '10€',
    tag: 'Maison',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129d6e1e9-1772627376924.png",
    alt: 'Tarte tatin aux pommes caramélisées, couleur ambrée dorée, fond sombre',
    allergens: 'Gluten, Lait, Œufs'
  },
  {
    id: 10,
    name: 'Crème Brûlée',
    description: 'Crème vanille de Madagascar, caramel craquant, tuile de sucre',
    price: '9€',
    tag: 'Classique',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_132b71995-1772193636080.png",
    alt: 'Crème brûlée avec caramel craquant doré, fond sombre, lumière chaude',
    allergens: 'Lait, Œufs'
  },
  {
    id: 11,
    name: 'Mousse au Chocolat',
    description: 'Chocolat Valrhona 70%, œufs frais, légère et aérienne',
    price: '9€',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b4602e8-1784540818817.png",
    alt: 'Mousse au chocolat noir dans un verre élégant, décoration cacao, fond sombre',
    allergens: 'Lait, Œufs'
  },
  {
    id: 12,
    name: 'Île Flottante',
    description: 'Blancs montés pochés, crème anglaise à la vanille, pralin',
    price: '8€',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17dec2f9b-1772193638894.png",
    alt: 'Île flottante avec crème anglaise et pralin, présentation bistrot classique',
    allergens: 'Lait, Œufs, Noix'
  }]

},
{
  id: 'boissons',
  label: 'Boissons',
  icon: 'BeakerIcon',
  dishes: [
  {
    id: 13,
    name: 'Côtes du Rhône Rouge',
    description: 'Grenache, Syrah — Domaine Perrin. Notes de fruits rouges et épices',
    price: '7€ / verre · 28€ / bouteille',
    tag: 'Maison',
    image: "https://images.unsplash.com/photo-1687313222782-836fbb290693",
    alt: 'Verre de vin rouge sur table en bois sombre, lumière tamisée ambrée, ambiance bistrot'
  },
  {
    id: 14,
    name: 'Muscadet Sur Lie',
    description: 'Loire, Domaine Luneau-Papin. Minéral, frais, parfait avec les fruits de mer',
    price: '7€ / verre · 26€ / bouteille',
    image: "https://images.unsplash.com/photo-1645467088524-bc4d2b0217ba",
    alt: 'Verre de vin blanc frais avec bouteille, fond sombre, lumière bistrot'
  },
  {
    id: 15,
    name: 'Kir Breton',
    description: 'Cidre brut artisanal et crème de cassis de Dijon',
    price: '6€',
    tag: 'Apéritif',
    image: "https://images.unsplash.com/photo-1606890737291-31a0a16a7343",
    alt: 'Cocktail kir dans un verre élégant, couleur rosée, fond sombre'
  },
  {
    id: 16,
    name: 'Café Gourmand',
    description: 'Espresso double, mini-desserts du jour (3 pièces)',
    price: '8€',
    tag: 'Populaire',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12778aaad-1783580321550.png",
    alt: 'Café espresso avec petits desserts sur plateau, lumière chaude bistrot'
  }]

}];


export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState('entrees');
  const [cart, setCart] = useState<{id: number;name: string;price: string;qty: number;}[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const activeCat = categories.find((c) => c.id === activeTab)!;

  const addToCart = (dish: Dish) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === dish.id);
      if (existing) {
        return prev.map((i) => i.id === dish.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: dish.id, name: dish.name, price: dish.price, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

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
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sticky Tab Nav */}
        <div
          ref={navRef}
          className="sticky top-20 z-30 bg-background/95 backdrop-blur-xl pt-4 pb-4 mb-10 border-b border-border">
          
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-300 shrink-0 ${
              activeTab === cat.id ?
              'bg-primary text-primary-foreground' :
              'text-muted-foreground hover:text-foreground border border-border hover:border-primary/30'}`
              }>
              
                <Icon name={cat.icon as 'SparklesIcon'} size={14} />
                {cat.label}
              </button>
            )}

            {/* Cart indicator */}
            {cartCount > 0 &&
            <div className="ml-auto shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                <Icon name="ShoppingBagIcon" size={14} />
                {cartCount} article{cartCount > 1 ? 's' : ''}
              </div>
            }
          </div>
        </div>

        {/* Seasonal note */}
        <div className="scroll-reveal stagger-1 flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5 mb-8">
          <Icon name="SparklesIcon" size={16} className="text-primary shrink-0" />
          <p className="text-sm text-muted-foreground font-light">
            <span className="text-foreground font-medium">Carte de saison</span> — nos plats évoluent
            selon les arrivages du marché. Allergènes disponibles sur demande.
          </p>
        </div>

        {/* Dish Grid */}
        {/* BENTO AUDIT: 4 dishes per tab — uniform 2-col grid, all same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCat.dishes.map((dish, i) =>
          <div
            key={dish.id}
            className={`scroll-reveal stagger-${Math.min(i + 2, 6)} group relative rounded-2xl overflow-hidden border border-border bg-card card-glass-hover`}>
            
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={dish.image}
                alt={dish.alt}
                fill
                className="object-cover image-zoom"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {dish.tag &&
              <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest font-semibold">
                      {dish.tag}
                    </span>
                  </div>
              }
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-lg font-medium text-foreground leading-tight">
                    {dish.name}
                  </h3>
                  <span className="font-display text-base font-medium text-primary shrink-0">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                  {dish.description}
                </p>
                {dish.allergens &&
              <p className="text-[10px] text-muted-foreground/60 mb-4 uppercase tracking-widest">
                    Allergènes : {dish.allergens}
                  </p>
              }
                <button
                onClick={() => addToCart(dish)}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                
                  <Icon name="PlusIcon" size={14} />
                  Ajouter à la commande
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cart Summary (if items) */}
        {cartCount > 0 &&
        <div className="mt-10 p-6 rounded-2xl border border-primary/20 bg-primary/5 scroll-reveal stagger-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">
                  Votre commande
                </h3>
                <div className="flex flex-col gap-1">
                  {cart.map((item) =>
                <div key={item.id} className="text-sm text-muted-foreground">
                      {item.qty}× {item.name}
                    </div>
                )}
                </div>
              </div>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-all duration-300 flex items-center gap-2 group shrink-0">
                Valider la commande
                <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        }
      </div>
    </section>);

}
