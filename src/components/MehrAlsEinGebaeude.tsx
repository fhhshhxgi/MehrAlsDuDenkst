/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, 
  Users2, 
  HeartHandshake, 
  Sparkle, 
  Music4, 
  Smile, 
  Milestone, 
  MessageCircleOff,
  CornerDownRight, 
  Home
} from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureZone {
  id: string;
  name: string;
  x: number; // Percent from left
  y: number; // Percent from top
  icon: React.ReactNode;
  subtitle: string;
  detail: string;
  quote: string;
}

export default function MehrAlsEinGebaeude() {
  const [selectedZone, setSelectedZone] = useState<string>('glaube');

  const zones: FeatureZone[] = [
    {
      id: 'glaube',
      name: 'Glaube',
      x: 26.25,
      y: 11, // Peak of tower exactly at the golden cross top
      icon: <Sparkle className="h-5 w-5 text-church-gold" />,
      subtitle: 'Sinnsuche und persönliches Gebet',
      detail: 'Im Zentrum christlichen Glaubens steht die persönliche Beziehung zu Gott. Fernab der Alltagshektik bieten unsere Kirchen Räume der Stille, um innezuhalten, Sorgen im Gebet abzugeben, eine Kerze zu entzünden und neuen inneren Frieden zu finden.',
      quote: '„Nicht jeder Glaube beginnt mit Gewissheit, manchmal beginnt er mit einer stillen Kerze.“'
    },
    {
      id: 'musik',
      name: 'Musik',
      x: 26.25,
      y: 43, // Upper tower window (Bell gallery/Organ loft)
      icon: <Music4 className="h-5 w-5 text-sky-500" />,
      subtitle: 'Verbindendes Klingen',
      detail: 'In der Musik findet der Glaube seine lebendigste Sprache. Ob im barocken Klang der Orgel, in einem Chor oder in zeitgenössischen Bands und Jugendmusikprojekten – das gemeinsame Musizieren verbindet Generationen und stiftet Gemeinschaft.',
      quote: '„Wer singt, betet bekanntlich doppelt. Töne reißen Mauern im Herzen ein, die rationale Argumente nicht berühren.“'
    },
    {
      id: 'seelsorge',
      name: 'Seelsorge & Gespräche',
      x: 50,
      y: 58, // Nested perfectly inside the majestic main round stained class window
      icon: <Home className="h-5 w-5 text-teal-500" />,
      subtitle: 'Ein verlässlicher Ansprechpartner',
      detail: 'Unsere Seelsorger stehen dir in allen Lebenslagen als vertrauensvolle Gesprächspartner zur Seite. Unter dem Schutz der gesetzlichen Schweigepflicht kannst du persönliche Krisen, Sinnfragen oder Zweifel vollkommen frei, vertraulich und unvoreingenommen besprechen.',
      quote: '„Manchmal hilft es schon, wenn einer einfach nur dableibt und mitschweigt.“'
    },
    {
      id: 'jugend',
      name: 'Jugendarbeit',
      x: 75,
      y: 62, // Upper floor of Parish building wing under the cozy gabled roof
      icon: <Smile className="h-5 w-5 text-pink-500" />,
      subtitle: 'Mitverantwortung und Freiräume',
      detail: 'Jugendverbände wie Pfadfinder, Messdiener oder die KJG bieten jungen Menschen wichtige Freiräume zur Selbstentfaltung. Hier lernen Jugendliche, eigene Ideen zu entwickeln, Verantwortung zu übernehmen und wertvolle Gemeinschaft zu erfahren.',
      quote: '„Hier herrscht kein Redeverbot. Hier lernen wir, laut zu sein für das Gute.“'
    },
    {
      id: 'hilfe',
      name: 'Hilfe & Beratung',
      x: 26.25,
      y: 76, // Left wing ground-level/accessible Caritas office
      icon: <HeartHandshake className="h-5 w-5 text-emerald-500" />,
      subtitle: 'Gelebte Nächstenliebe',
      detail: 'Die Caritas und lokale Initiativen bieten unmittelbare, unbürokratische Unterstützung für Benachteiligte. Von der Kälte- und Wohnungslosenhilfe über die Begleitung von Geflüchteten bis hin zu kostenfreien Beratungsangeboten wird praktizierte Mitmenschlichkeit greifbar.',
      quote: '„Nächstenliebe ist kein schickes Sonntagsgerede. Sie wird mit schmutzigen Händen am Montag gemacht.“'
    },
    {
      id: 'feste',
      name: 'Feste & Rituale',
      x: 89,
      y: 80, // Right annex stained glass windows
      icon: <Milestone className="h-5 w-5 text-amber-500" />,
      subtitle: 'Meilensteine des Lebens',
      detail: 'Feste und christliche Rituale strukturieren die Übergänge und Stationen des menschlichen Lebens. Von feierlichen kirchlichen Festen über Taufen und Eheschließungen bis hin zur tröstenden, würdevollen Begleitung im Sterbefall eines Angehörigen.',
      quote: '„Wenn Worte aufhören, fangen unsere Sakramente und Feste an uns zu tragen.“'
    },
    {
      id: 'gemeinschaft',
      name: 'Gemeinschaft',
      x: 50,
      y: 86, // Double doors entrance portal at the bottom center
      icon: <Users2 className="h-5 w-5 text-indigo-500" />,
      subtitle: 'Begegnung und Beistand',
      detail: 'Kirche verwirklicht sich wesentlich in der Begegnung. Als generationenübergreifende Gemeinschaft wollen wir Freude und Hoffnung, aber auch Trauer und Sorgen miteinander teilen, sodass niemand vereinsamt.',
      quote: '„Kirche ist keine Show für Einzelgänger. Sie ist eine Familie aus Fehlbaren, die gemeinsam geht.“'
    }
  ];

  const activeZoneData = zones.find(z => z.id === selectedZone) || zones[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Architektur vs. Leben
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Mehr als ein Gebäude aus Stein
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Eine Kirche sieht man meistens schon von Weitem, aus Stein gebaut und mit einem hohen Turm. Doch das Gebäude ist nur die Hülle. Zum Leben erweckt wird es erst durch die Menschen darin. Finde heraus, was sich hinter den alten Mauern verbirgt.
        </p>
      </section>

      {/* Interactive Graphics & Info Screen */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Stately Interactive Building Map */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-[40px] shadow-sm border border-church-border flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-serif text-xl font-bold text-church-navy flex items-center space-x-2">
              <span>Das interaktive Kirchenmodell</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Klicke auf die blinkenden goldenen Hotspots der Kirche, um die dahinterstehenden kirchlichen Bereiche zu offenbaren.
            </p>
          </div>

          {/* Cultivated SVG Rendering of a modern + traditional Church */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-church-bg/40 rounded-[24px] border border-church-border overflow-hidden">
            
            {/* SVG Church outline styling */}
            <svg 
              viewBox="0 0 400 500" 
              className="absolute inset-0 w-full h-full text-church-navy opacity-90 transition-all"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Ground level reference */}
              <line x1="20" y1="460" x2="380" y2="460" strokeDasharray="5,5" strokeWidth="1.5" className="opacity-40" />

              {/* Central Main Building block */}
              <rect x="140" y="220" width="120" height="240" rx="4" />

              {/* Tower structure (Left) */}
              <rect x="70" y="160" width="70" height="300" rx="3" />
              <polygon points="70,160 105,70 140,160" /> {/* Left tower roof */}
              
              {/* Golden cross decoration on tower top */}
              <line x1="105" y1="40" x2="105" y2="70" stroke="#D6A84F" strokeWidth="4" />
              <line x1="93" y1="50" x2="117" y2="50" stroke="#D6A84F" strokeWidth="4" />

              {/* Side Annex Building block (Right/Parish centre) */}
              <rect x="260" y="300" width="80" height="160" rx="3" />
              <polygon points="260,300 300,240 340,300" /> {/* Right roof */}

              {/* Stained Glass Portal / Round Window (Dominant) */}
              <circle cx="200" cy="290" r="28" strokeWidth="2.5" />
              <line x1="200" y1="262" x2="200" y2="318" className="opacity-50" />
              <line x1="172" y1="290" x2="228" y2="290" className="opacity-50" />
              
              {/* Beautiful entrance big double doors */}
              <path d="M175,460 L175,395 C175,380 225,380 225,395 L225,460" strokeWidth="3" />
              <line x1="200" y1="380" x2="200" y2="460" strokeWidth="1.5" />

              {/* Semi-circular Window shapes on left tower */}
              <path d="M90,225 C90,205 120,205 120,225" />
              <line x1="90" y1="225" x2="120" y2="225" />

              <path d="M90,295 C90,275 120,275 120,295" />
              <line x1="90" y1="295" x2="120" y2="295" />

              {/* Stained window long shapes (Right annex) */}
              <rect x="282" y="340" width="14" height="60" rx="7" />
              <rect x="306" y="340" width="14" height="60" rx="7" />
            </svg>

            {/* Pulser Hotspots placed dynamically over coordinates */}
            {zones.map((zone) => {
              const isActive = selectedZone === zone.id;
              return (
                <button
                  id={`hotspot-btn-${zone.id}`}
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group"
                  title={zone.name}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isActive ? 'bg-church-gold' : 'bg-church-gold/60'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center border text-white transition-all duration-300 ${
                      isActive 
                        ? 'bg-church-navy border-church-gold scale-125 shadow-md' 
                        : 'bg-church-gold border-white group-hover:scale-115'
                    }`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </span>
                  
                  {/* Tooltip labelling node */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-7 bg-church-navy text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {zone.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick list selector below SVG specifically optimized for mobile tapping */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center lg:hidden">
            {zones.map((zone) => (
              <button
                id={`zone-pill-btn-${zone.id}`}
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedZone === zone.id
                    ? 'bg-church-navy text-white border-church-navy shadow-sm'
                    : 'bg-white text-gray-700 border-church-border hover:bg-church-bg'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Elaborate Detail and Reflection Board */}
        <div id="zone-details-card" className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-church-navy text-white p-8 rounded-[40px] shadow-sm border border-church-navy flex flex-col justify-between h-full relative overflow-hidden">
            
            {/* Soft accent glow mapping color back to interactive node */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-[11px] font-mono uppercase bg-church-gold/20 text-church-gold border border-church-gold/30 px-3 py-1 rounded-full w-fit flex items-center space-x-1.5">
                {activeZoneData.icon}
                <span className="font-bold">Interaktiver Einblick • {activeZoneData.name}</span>
              </span>

              <h2 className="font-serif text-3xl font-bold tracking-tight text-white mt-1">
                {activeZoneData.subtitle}
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {activeZoneData.detail}
              </p>

              <div className="border-t border-white/15 my-6" />

              <div className="relative pl-6 py-1 italic text-gray-300 font-serif text-sm border-l-2 border-church-gold">
                {activeZoneData.quote}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center space-x-1">
                <CornerDownRight className="h-3.5 w-3.5 text-church-gold" />
                <span>Klicke auf andere Zonen um fortzufahren</span>
              </div>
              <span className="bg-white/5 py-1 px-2.5 rounded text-white text-[10px]">
                Katholische Kirche – Mehr als du denkst
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Static 4 modern kacheln section */}
      <section className="bg-white p-8 sm:p-12 rounded-[40px] shadow-sm border border-church-border">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-church-navy">Sichtbare Zeichen unseres Versprechens</h3>
          <p className="text-gray-600 text-sm mt-2">Diese vier Säulen machen im Alltag den realen Kern unseres Tuns greifbar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="bg-church-gold/15 text-church-navy p-3 rounded-xl h-fit">
              <Sparkle className="h-5 w-5 text-church-gold" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-church-navy text-lg">Ein Ort der Ruhe</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Viele Menschen gehen in Kirchen, um still zu werden, nachzudenken oder zu beten. Unsere Räume stehen tagsüber als Zufluchtsort kostenfrei offen.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl h-fit">
              <Users2 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-church-navy text-lg">Eine tragende Gemeinschaft</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Menschen kommen zusammen, um zu feiern, Musik zu machen, zu speisen und aufeinander zu hören. Das gibt Halt im Wirrwarr der Gesellschaft.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-emerald-100 text-emerald-700 p-3 rounded-xl h-fit">
              <HeartHandshake className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-church-navy text-lg">Konkrete, wirksame Hilfe</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Wir engagieren uns aktiv vor Ort und unterstützen unbürokratisch durch soziale Vereine, Beratungszentren und Notfallseelsorge im Krisenfall.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-xl h-fit">
              <Milestone className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-church-navy text-lg">Eine gelebte Tradition</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                Ob Taufe, Hochzeit, oder Feste wie Ostern und Weihnachten – unsere Bräuche und Sakramente strukturieren das bunte Abenteuer des menschlichen Lebens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

