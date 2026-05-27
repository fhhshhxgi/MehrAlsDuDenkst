/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Heart, 
  Hand, 
  Home, 
  Flame, 
  Globe2, 
  Coins, 
  Activity, 
  ShieldCheck, 
  Award,
  Sparkle
} from 'lucide-react';
import { motion } from 'motion/react';

interface ImpactCard {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  desc: string;
  example: string;
  stats: string;
}

export default function KircheHilft() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards: ImpactCard[] = [
    {
      id: 'armut',
      title: 'Armut bekämpfen',
      category: 'Nächstenliebe',
      icon: <Heart className="h-6 w-6" />,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      desc: 'Praktische Unterstützung für Menschen ohne ausreichend Geld, Nahrung oder feste Unterkunft. Wärmestuben, Kleiderkammern und Essensausgaben retten Leben an frostigen Tagen.',
      example: 'Ein konkretes Beispiel: Die „Tafeln“ und Vesperkirchen versorgen wöchentlich tausende Bedürftige mit warmen Speisen und respektvoller Zuwendung.',
      stats: 'Hunderttausende Essensausgaben jährlich'
    },
    {
      id: 'kranke',
      title: 'Kranke & Alte begleiten',
      category: 'Tätige Hilfe',
      icon: <Hand className="h-6 w-6" />,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      desc: 'Besuche gegen die Einsamkeit, professionelle Pflege, seelsorgliche Hospizbegleitung und geduldiges Dasein in den letzten Momenten des Lebens.',
      example: 'Die ehrenamtlichen Krankenbesuchsdienste schenken pflegebedürftigen Menschen in Heimen Gehör und Herzenswärme.',
      stats: 'Tausende Pflegestationen und Besuchskreise'
    },
    {
      id: 'kinder',
      title: 'Kinder & Jugend stärken',
      category: 'Schutzräume',
      icon: <Home className="h-6 w-6" />,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      desc: 'Kindertagesstätten (Kitas), freie Schulen, lebendige Jugendzentren und betreute Ferienfreizeiten bieten Schutz, Halt und faire Chancen auf Bildung.',
      example: 'Allein die katholischen Jugendverbände bieten Freizeiten an, an denen jedes Kind, unabhängig vom Einkommen der Eltern, teilnehmen kann.',
      stats: 'Größter freier Träger von Kitas und Erziehung'
    },
    {
      id: 'krisen',
      title: 'Halt in akuten Krisen',
      category: 'Hoffnung spenden',
      icon: <Flame className="h-6 w-6" />,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      desc: 'Kostenlose Ehe- und Familienberatungen, Schwangerschaftsberatungen, Seelsorge bei Verlust sowie die Notfallseelsorge nach schweren Unfällen.',
      example: 'Die Ökumenische Telefonseelsorge ist an 365 Tagen im Jahr anonym rund um die Uhr völlig kostenlos für alle Sorgen erreichbar.',
      stats: 'Telefonseelsorge: 24/7 kostenfrei erreichbar'
    },
    {
      id: 'weltweit',
      title: 'Weltweite Verantwortung',
      category: 'Globale Gerechtigkeit',
      icon: <Globe2 className="h-6 w-6" />,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-600',
      desc: 'Hilfswerke unterstützen Menschen in den ärmsten Weltregionen bei Hunger, Naturkatastrophen, kriegerischen Konflikten und beim Aufbau von Bildung.',
      example: 'Aktionen von Misereor oder Adveniat finanzieren sauberes Trinkwasser, Schulen und Existenzgründungen in Entwicklungsländern.',
      stats: 'Millionen Menschen in 100+ Ländern unterstützt'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* SECTION 1: EINSTIEG & IMPACT LOGO */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-bold">
          Soziales Gewissen
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy">
          Helfen ist kein Extra. Es gehört dazu.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Glaube bleibt nicht nur im Kopf und schwelgt in Traditionen – er zeigt sich im konkreten Handeln. Die katholische Kirche ist mit ihrer sozialen Tochter, der <strong>Caritas</strong>, einer der größten Arbeitgeber und Beistände in ganz Deutschland. Tagtäglich wird Nächstenliebe hier in Taten übersetzt.
        </p>

        {/* Dynamic score banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          <div className="bg-white p-5 rounded-[24px] border border-church-border shadow-xs">
            <span className="block font-serif text-3xl font-extrabold text-church-navy">1,2 Mio.</span>
            <span className="text-xs text-gray-500 font-mono">Ehrenamtliche bundesweit</span>
          </div>
          <div className="bg-white p-5 rounded-[24px] border border-church-border shadow-xs">
            <span className="block font-serif text-3xl font-extrabold text-church-navy">ca. 8.000</span>
            <span className="text-xs text-gray-500 font-mono">Katholische Kitas</span>
          </div>
          <div className="bg-white p-5 rounded-[24px] border border-church-border shadow-xs">
            <span className="block font-serif text-3xl font-extrabold text-church-navy">24 Std.</span>
            <span className="text-xs text-gray-500 font-mono">Erreichbare Notfallseelsorge</span>
          </div>
          <div className="bg-white p-5 rounded-[24px] border border-church-border shadow-xs">
            <span className="block font-serif text-3xl font-extrabold text-church-navy">100 %</span>
            <span className="text-xs text-gray-500 font-mono">Gemeinnützig & transparent</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 5 DETAILED CARDS IN A TWO-COLUMN GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => {
          const isHovered = hoveredCard === card.id;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-[32px] p-8 border border-church-border shadow-sm hover:border-church-navy/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-church-bg/30 to-white pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`${card.iconBg} ${card.iconColor} p-3.5 rounded-[16px]`}>
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full uppercase">
                    {card.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-church-navy group-hover:text-church-gold transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>

                <div className="bg-church-bg/40 p-4 rounded-[16px] text-xs text-gray-500 border border-church-border">
                  <span className="font-semibold text-church-navy">Aus der Praxis:</span> {card.example}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between relative z-10 text-xs font-mono text-church-navy">
                <span className="font-semibold">{card.stats}</span>
                <Sparkle className="h-4 w-4 text-church-gold/60" />
              </div>
            </div>
          );
        })}
      </section>

      {/* Strong final focus callout */}
      <section className="bg-church-navy text-white text-center py-12 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-sm border border-church-border">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-church-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <Award className="h-10 w-10 text-church-gold mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Gegen soziale Kälte aufstehen</h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Ob in Kitas, hospizen oder weit entfernten Notstandsgebieten – unsere Hilfe diskriminiert nicht. Wir fragen nicht nach Taufschein, Religion oder Status. Wo Not herrscht, steht der Beistand für die Würde des Menschen im Vordergrund.
          </p>
        </div>
      </section>
    </div>
  );
}
