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
      desc: 'Unmitellbare und unbürokratische Unterstützung für Menschen in prekären Lebenslagen oder ohne festen Wohnsitz. Wärmestuben, Kleiderkammern und Lebensmittelausgaben sichern die existentiellen Grundbedürfnisse.',
      example: 'Lokale Ausgabestellen versorgen wöchentlich bedürftige Personen mit Lebensmitteln und bieten Raum für offene, wertschätzende Begegnungen.',
      stats: 'Hunderttausende Essensausgaben jährlich'
    },
    {
      id: 'kranke',
      title: 'Kranke & Alte begleiten',
      category: 'Tätige Hilfe',
      icon: <Hand className="h-6 w-6" />,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      desc: 'Präventive Angebote gegen die Vereinsamung im Alter, Unterstützung in der häuslichen Pflege sowie die würdevolle Begleitung sterbenskranker Menschen und ihrer Angehörigen.',
      example: 'Ambulante Hospizdienste und Seniorenbesuchskreise schenken aufmerksame Zuwendung, führen Gespräche und begleiten Betroffene verlässlich.',
      stats: 'Tausende Pflegestationen und Besuchskreise'
    },
    {
      id: 'kinder',
      title: 'Kinder & Jugend stärken',
      category: 'Schutzräume',
      icon: <Home className="h-6 w-6" />,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      desc: 'Flächendeckende Trägerschaften von Kindertagesstätten, offene Kinder- und Jugendarbeit sowie erlebnispädagogische Angebote schaffen geschützte Räume zur persönlichen Entfaltung.',
      example: 'Demokratische Jugendverbände organisieren partnerschaftlich bezuschusste Ferienfreizeiten, um soziale Chancengleichheit aktiv zu fördern.',
      stats: 'Größter freier Träger von Kitas und Erziehung'
    },
    {
      id: 'krisen',
      title: 'Halt in akuten Krisen',
      category: 'Hoffnung spenden',
      icon: <Flame className="h-6 w-6" />,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      desc: 'Professionelle, kostenfreie und anonyme Beratungsangebote bei familiären Konflikten, Paarkrisen, Schwangerschaftskonflikten oder seelischen Belastungen.',
      example: 'Die TelefonSeelsorge ist an 365 Tagen im Jahr rund um die Uhr als hochgradig vertraulicher Gesprächspartner bei persönlichen Krisen erreichbar.',
      stats: 'Telefonseelsorge: 24/7 kostenfrei erreichbar'
    },
    {
      id: 'weltweit',
      title: 'Weltweite Verantwortung',
      category: 'Globale Gerechtigkeit',
      icon: <Globe2 className="h-6 w-6" />,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-600',
      desc: 'Weltweite Entwicklungszusammenarbeit und akute Katastrophenhilfe bei Hunger, Kriegen und Naturkatastrophen zur nachhaltigen Förderung von Bildung und Menschenrechten.',
      example: 'Hilfswerke wie Misereor oder Adveniat stärken durch finanzielle Hilfe zur Selbsthilfe nachhaltig lokale Strukturen in benachteiligten Regionen des globalen Südens.',
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
          Solidarität ist kein Zusatzprodukt. Sie ist Fundament.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Glaube erschöpft sich nicht in theoretischen Erläuterungen oder historischem Brauchtum – er erweist sich in der Tat. Mit starken Wohlfahrtsverbänden wie der <strong>Caritas</strong> gehört die katholische Kirche zu den tragenden Säulen des Sozialstaates in Deutschland, wo Nächstenliebe täglich in konkretes Handeln übersetzt wird.
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
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Für soziale Wärme einstehen</h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Ob in Kindertagesstätten, in Seniorenzentren oder in der weltweiten Entwicklungszusammenarbeit – caritative Hilfe gilt bedingungslos jedem Menschen. An den Pforten unserer sozialen Einrichtungen wird weder nach Herkunft, Konfession noch nach dem persönlichen Lebensentwurf gefragt. Wo menschliche Not herrscht, ist tatkräftige Hilfe Pflicht.
          </p>
        </div>
      </section>
    </div>
  );
}

