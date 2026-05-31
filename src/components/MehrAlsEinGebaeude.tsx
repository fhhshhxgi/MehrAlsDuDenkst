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
import { motion, AnimatePresence } from 'motion/react';

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
      icon: <Music4 className="h-5 w-5 text-sky-400" />,
      subtitle: 'Verbindendes Klingen',
      detail: 'In der Musik findet der Glaube seine lebendigste Sprache. Ob im barocken Klang der Orgel, in einem Chor oder in zeitgenössischen Bands und Jugendmusikprojekten – das gemeinsame Musizieren verbindet Generationen und stiftet Gemeinschaft.',
      quote: '„Wer singt, betet bekanntlich doppelt. Töne reißen Mauern im Herzen ein, die rationale Argumente nicht berühren.“'
    },
    {
      id: 'seelsorge',
      name: 'Seelsorge & Gespräche',
      x: 50,
      y: 58, // Nested perfectly inside the majestic main round stained class window
      icon: <Home className="h-5 w-5 text-teal-400" />,
      subtitle: 'Ein verlässlicher Ansprechpartner',
      detail: 'Unsere Seelsorger stehen dir in allen Lebenslagen als vertrauensvolle Gesprächspartner zur Seite. Unter dem Schutz der gesetzlichen Schweigepflicht kannst du persönliche Krisen, Sinnfragen oder Zweifel vollkommen frei, vertraulich und unvoreingenommen besprechen.',
      quote: '„Manchmal hilft es schon, wenn einer einfach nur dableibt und mitschweigt.“'
    },
    {
      id: 'jugend',
      name: 'Jugendarbeit',
      x: 75,
      y: 62, // Upper floor of Parish building wing under the cozy gabled roof
      icon: <Smile className="h-5 w-5 text-pink-400" />,
      subtitle: 'Mitverantwortung und Freiräume',
      detail: 'Jugendverbände wie Pfadfinder, Messdiener oder die KJG bieten jungen Menschen wichtige Freiräume zur Selbstentfaltung. Hier lernen Jugendliche, eigene Ideen zu entwickeln, Verantwortung zu übernehmen und wertvolle Gemeinschaft zu erfahren.',
      quote: '„Hier herrscht kein Redeverbot. Hier lernen wir, laut zu sein für das Gute.“'
    },
    {
      id: 'hilfe',
      name: 'Hilfe & Beratung',
      x: 26.25,
      y: 76, // Left wing ground-level/accessible Caritas office
      icon: <HeartHandshake className="h-5 w-5 text-emerald-400" />,
      subtitle: 'Gelebte Nächstenliebe',
      detail: 'Die Caritas und lokale Initiativen bieten unmittelbare, unbürokratische Unterstützung für Benachteiligte. Von der Kälte- und Wohnungslosenhilfe über die Begleitung von Geflüchteten bis hin zu kostenfreien Beratungsangeboten wird praktizierte Mitmenschlichkeit greifbar.',
      quote: '„Nächstenliebe ist kein schickes Sonntagsgerede. Sie wird mit schmutzigen Händen am Montag gemacht.“'
    },
    {
      id: 'feste',
      name: 'Feste & Rituale',
      x: 75,
      y: 76, // Right annex stained glass windows
      icon: <Milestone className="h-5 w-5 text-amber-400" />,
      subtitle: 'Meilensteine des Lebens',
      detail: 'Feste und christliche Rituale strukturieren die Übergänge und Stationen des menschlichen Lebens. Von feierlichen kirchlichen Festen über Taufen und Eheschließungen bis hin zur tröstenden, würdevollen Begleitung im Sterbefall eines Angehörigen.',
      quote: '„Wenn Worte aufhören, fangen unsere Sakramente und Feste an uns zu tragen.“'
    },
    {
      id: 'gemeinschaft',
      name: 'Gemeinschaft',
      x: 50,
      y: 86, // Double doors entrance portal at the bottom center
      icon: <Users2 className="h-5 w-5 text-indigo-400" />,
      subtitle: 'Begegnung und Beistand',
      detail: 'Kirche verwirklicht sich wesentlich in der Begegnung. Als generationenübergreifende Gemeinschaft wollen wir Freude und Hoffnung, aber auch Trauer und Sorgen miteinander teilen, sodass niemand vereinsamt.',
      quote: '„Kirche ist keine Show für Einzelgänger. Sie ist eine Familie aus Fehlbaren, die gemeinsam geht.“'
    }
  ];

  const activeZoneData = zones.find(z => z.id === selectedZone) || zones[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative overflow-visible">
      
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-church-gold/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-5 w-96 h-96 bg-church-navy/6 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Page Header Section */}
      <div className="relative w-full overflow-hidden bg-church-navy py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        {/* Ambient photo background layer with premium Unsplash source */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop")' }}
        />
        
        {/* Ambient glowing spot lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/60 via-[#102A43]/85 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Sparkle className="h-3.5 w-3.5 text-church-gold animate-spin duration-10000 shrink-0" />
            <span>Bauwerk & Leben</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Mehr als ein <span className="text-church-gold italic font-normal font-serif">Gebäude aus Stein</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Eine Kirche sieht man meistens schon von Weitem – aus Stein gemauert und mit einem weithin sichtbaren Turm. Doch das Gebäude ist nur die schützende Hülle. Zum eigentlichen Kraftort und Leben erweckt wird es erst durch die Menschen und Initiativen darin. Erkunde unser interaktives Modell.
          </motion.p>
        </div>
      </div>

      {/* Interactive Graphics & Info Screen */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Stately Interactive Building Map */}
        <div className="lg:col-span-6 bg-[#030B12] p-6 sm:p-10 rounded-[40px] shadow-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden group/canvas">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          

          
          <div className="mb-6 relative z-10 text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-white">Interaktiver Aufriss</span>
              <span className="text-church-gold font-serif italic font-normal text-lg">unserer Heimat</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-normal max-w-md font-light">
              Bewege den Cursor oder tippe auf die pulsierenden goldenen Knotenpunkte des Bauwerks, um die inneren Dimensionen und Angebote sichtbar zu machen.
            </p>
          </div>

          {/* Cultivated SVG Rendering of a modern + traditional Church */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-gradient-to-b from-[#061524] to-[#01060B] rounded-[32px] border border-white/10 overflow-hidden shadow-inner flex items-center justify-center p-4">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-church-gold/8 rounded-full blur-[70px] pointer-events-none" />

            <svg 
              viewBox="0 0 400 500" 
              className="absolute inset-0 w-full h-full text-white/50 transition-all duration-500 hover:text-white/60"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="20" y1="460" x2="380" y2="460" strokeDasharray="6,6" strokeWidth="1.5" className="opacity-30 stroke-white/40" />
              <rect x="140" y="220" width="120" height="240" rx="6" stroke="rgba(214, 168, 79, 0.45)" />
              <rect x="70" y="160" width="70" height="300" rx="4" stroke="rgba(255, 255, 255, 0.25)" />
              <polygon points="70,160 105,70 140,160" stroke="rgba(214, 168, 79, 0.6)" strokeWidth="2" />
              <line x1="105" y1="35" x2="105" y2="70" stroke="#D6A84F" strokeWidth="3" />
              <line x1="94" y1="45" x2="116" y2="45" stroke="#D6A84F" strokeWidth="3" />
              <rect x="260" y="300" width="80" height="160" rx="4" stroke="rgba(255, 255, 255, 0.25)" />
              <polygon points="260,300 300,240 340,300" stroke="rgba(255, 255, 255, 0.3)" />
              <circle cx="200" cy="290" r="28" stroke="rgba(214, 168, 79, 0.55)" strokeWidth="2.5" />
              <line x1="200" y1="262" x2="200" y2="318" stroke="rgba(214, 168, 79, 0.3)" />
              <line x1="172" y1="290" x2="228" y2="290" stroke="rgba(214, 168, 79, 0.3)" />
              <path d="M175,460 L175,395 C175,380 225,380 225,395 L225,460" stroke="#D6A84F" strokeWidth="3" />
              <line x1="200" y1="380" x2="200" y2="460" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" />
              <path d="M90,225 C90,210 120,210 120,225" stroke="rgba(255, 255, 255, 0.3)" />
              <line x1="90" y1="225" x2="120" y2="225" stroke="rgba(255, 255, 255, 0.2)" />
              <path d="M90,295 C90,280 120,280 120,295" stroke="rgba(255, 255, 255, 0.3)" />
              <line x1="90" y1="295" x2="120" y2="295" stroke="rgba(255, 255, 255, 0.2)" />
              <rect x="282" y="340" width="14" height="60" rx="7" stroke="rgba(255, 255, 255, 0.3)" />
              <rect x="306" y="340" width="14" height="60" rx="7" stroke="rgba(255, 255, 255, 0.3)" />
            </svg>

            {zones.map((zone) => {
              const isActive = selectedZone === zone.id;
              return (
                <button
                  id={`hotspot-btn-${zone.id}`}
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group cursor-pointer"
                  title={zone.name}
                >
                  <span className="relative flex h-10 w-10 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isActive ? 'bg-church-gold' : 'bg-church-gold/30'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center border-2 text-white transition-all duration-300 ${
                      isActive 
                        ? 'bg-church-gold border-white scale-125 shadow-lg shadow-church-gold/20' 
                        : 'bg-church-navy border-church-gold hover:bg-church-gold group-hover:scale-115'
                    }`}>
                      <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-church-navy' : 'bg-church-gold'}`} />
                    </span>
                  </span>
                  
                  <span className="absolute left-1/2 -translate-x-1/2 top-9 bg-church-navy/95 border border-white/10 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                    {zone.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 justify-center lg:hidden relative z-10">
            {zones.map((zone) => (
              <button
                id={`zone-pill-btn-${zone.id}`}
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedZone === zone.id
                    ? 'bg-church-gold text-church-navy border-church-gold shadow-sm font-bold'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Detail reflection board */}
        <div id="zone-details-card" className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-church-navy text-white p-8 sm:p-12 rounded-[40px] shadow-2xl border border-white/5 flex flex-col justify-between h-full relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-44 h-44 bg-church-gold/15 rounded-full blur-[80px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedZone}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex flex-col justify-between h-full"
              >
                <div className="space-y-6 text-left">
                  <span className="text-[10px] sm:text-xs font-mono uppercase bg-church-gold/20 text-church-gold border border-church-gold/35 px-4 py-1 rounded-full w-fit flex items-center gap-2">
                    {activeZoneData.icon}
                    <span className="font-bold">Interaktive Erforschung • {activeZoneData.name}</span>
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                    {activeZoneData.subtitle}
                  </h2>

                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                    {activeZoneData.detail}
                  </p>

                  <div className="border-t border-white/10 pt-6" />

                  <div className="relative pl-6 py-2 italic text-gray-300 font-serif text-base sm:text-lg border-l-2 border-church-gold leading-relaxed">
                    {activeZoneData.quote}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CornerDownRight className="h-3.5 w-3.5 text-church-gold animate-bounce" />
                    <span>Tippe auf ein anderes Symbol zum Erkunden</span>
                  </div>
                  <span className="bg-white/5 py-1 px-3 rounded text-white text-[10px] select-none">
                    katholisch • mehr als du glaubst
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Static 4 narrative cards */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-mono text-[9px] text-church-gold uppercase tracking-widest font-extrabold block">Unsere Grundprinzipien</span>
          <h3 className="font-serif text-3xl font-bold text-church-navy">Sichtbare Zeichen unseres Versprechens</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto">Diese vier Säulen machen im städtischen Zusammenleben das Fundament kirchlichen Handelns spürbar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tile 01: Ort der Ruhe */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-lg border border-church-border h-64 flex flex-col justify-end p-8 select-none transition-transform duration-500 hover:scale-[1.01]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 brightness-[0.35] group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564732465131-478a336a21ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpbGVudCUyMHByYXllciUyMGNhbmRsZXN8ZW58MHwwfDB8fHwy")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#061524]/65 to-transparent z-0" />
            <div className="relative z-10 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-church-gold/20 text-church-gold border border-church-gold/25">
                  <Sparkle className="h-4.5 w-4.5" />
                </span>
                <h4 className="font-serif font-bold text-white text-xl">Ein Ort der Ruhe</h4>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Viele Menschen betreten Kirchen spontan, um still zu werden, nachzudenken oder Kraft zu schöpfen. Unsere historischen Sakralräume stehen tagsüber als Zuflucht für jeden offen.
              </p>
            </div>
          </div>

          {/* Tile 02: Tragende Gemeinschaft */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-lg border border-church-border h-64 flex flex-col justify-end p-8 select-none transition-transform duration-500 hover:scale-[1.01]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 brightness-[0.35] group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1760367120345-2b96c53de838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNodXJjaCUyMGNvbW11bml0eSUyMHRvZ2V0aGVyfGVufDB8MHwwfHx8Mg%3D%3D")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#061524]/65 to-transparent z-0" />
            <div className="relative z-10 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-400/25">
                  <Users2 className="h-4.5 w-4.5" />
                </span>
                <h4 className="font-serif font-bold text-white text-xl">Eine tragende Gemeinschaft</h4>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Menschen kommen zusammen, um Meilensteine zu feiern, Musik zu machen, zu speisen und aufeinander zu hören. Das gibt verlässlichen Halt im wechselhaften Alltag unseres Stadtteils.
              </p>
            </div>
          </div>

          {/* Tile 03: Konkrete Hilfe */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-lg border border-church-border h-64 flex flex-col justify-end p-8 select-none transition-transform duration-500 hover:scale-[1.01]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 brightness-[0.35] group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MHwwfDB8fHwy")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#061524]/65 to-transparent z-0" />
            <div className="relative z-10 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/25">
                  <HeartHandshake className="h-4.5 w-4.5" />
                </span>
                <h4 className="font-serif font-bold text-white text-xl">Konkrete, wirksame Hilfe</h4>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Wir halten nicht bloß Vorträge. Wir engagieren uns an vorderster Front und unterstützen durch soziale Projekte, ambulante Hospizdienste und professionelle Beratungsstellen.
              </p>
            </div>
          </div>

          {/* Tile 04: Tradition */}
          <div className="group relative overflow-hidden rounded-[32px] shadow-lg border border-church-border h-64 flex flex-col justify-end p-8 select-none transition-transform duration-500 hover:scale-[1.01]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 brightness-[0.35] group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=600&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061524] via-[#061524]/65 to-transparent z-0" />
            <div className="relative z-10 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-350/25">
                  <Milestone className="h-4.5 w-4.5" />
                </span>
                <h4 className="font-serif font-bold text-white text-xl">Eine gelebte Tradition</h4>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Ob Feste oder tiefe Lebensschwellen wie Taufgänge, Hochzeiten oder tröstende Trauergefechte – unsere Sakramente strukturieren das bunte Abenteuer des menschlichen Seins.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
