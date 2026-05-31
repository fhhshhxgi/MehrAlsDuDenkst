/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Flame, 
  Waves, 
  Utensils, 
  Fish, 
  Sparkle, 
  CalendarRange, 
  Sparkles, 
  Gift, 
  UserPlus, 
  Sun,
  ShieldAlert,
  ArrowRight,
  Compass,
  CornerDownRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Festival {
  name: string;
  season: string;
  description: string;
  theology: string;
  icon: React.ReactNode;
}

interface SymbolItem {
  id: string;
  name: string;
  theology: string;
  explanation: string;
  reflection: string;
  icon: React.ReactNode;
  borderClass: string;
  textCol: string;
}

export default function FesteSymbole() {
  const [activeTab, setActiveTab] = useState<'feste' | 'symbole'>('symbole');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('kreuz');

  const festivals: Festival[] = [
    {
      name: 'Weihnachten',
      season: 'Dezember (Winter)',
      description: 'Die Feier der Menschwerdung Gottes: Ein Ereignis, das sich in aller Bescheidenheit und Abgewandtheit von weltlicher Macht, symbolisiert durch den Stall von Betlehem, vollzieht.',
      theology: 'Die Zusage einer bedingungslosen Nähe: Gott offenbart sich nicht in unnahbarer Macht, sondern in der verletzlichen Existenz eines Neugeborenen.',
      icon: <Gift className="h-5 w-5 text-indigo-400" />
    },
    {
      name: 'Ostern',
      season: 'März / April (Frühling)',
      description: 'Das theologische Fundament des Kirchenjahres: Wir feiern das Ostergeheimnis der Auferstehung Christi und den endgültigen Triumph des Lebens über den Tod.',
      theology: 'Die Überwindung des Endgültigen: Hoffnung, Liebe und Leben behalten im Angesicht von Leid, Verlust und Angst das letzte Wort.',
      icon: <Sun className="h-5 w-5 text-amber-400" />
    },
    {
      name: 'Die Taufe',
      season: 'Sakrament',
      description: 'Die feierliche Aufnahme in die weltweite christliche Gemeinschaft durch das sakramentale Zeichen des Wassers.',
      theology: 'Das unwiderrufliche Heilsversprechen: Du bist bedingungslos angenommen und getragen auf allen Wegen des Lebens.',
      icon: <Waves className="h-5 w-5 text-sky-450" />
    },
    {
      name: 'Die Erstkommunion',
      season: 'Sakrament',
      description: 'Die erstmalige Teilnahme am Abendmahl. Das Teilen des gesegneten Brotes (der Hostie) vergegenwärtigt die bleibende Gemeinschaft mit Christus.',
      theology: 'Erfahrbare Weggemeinschaft: Das sakramentale Teilen stiftet eine tiefe, geistliche Verbindung untereinander und mit Gott.',
      icon: <Utensils className="h-5 w-5 text-amber-450" />
    },
    {
      name: 'Die Firmung',
      season: 'Sakrament (Jugendalter)',
      description: 'Das Sakrament der christlichen Reife: Jugendliche bekräftigen eigenverantwortlich ihren Glauben und empfangen den Heiligen Geist als Beistand und Orientierung für ihren Lebensweg.',
      theology: 'Geistliche Stärkung: Die Zusage des Heiligen Geistes verleiht innere Stärke und Orientierung, um im Alltag mutig eigene Überzeugungen zu vertreten.',
      icon: <Sparkles className="h-5 w-5 text-pink-400" />
    },
    {
      name: 'Das Kirchenjahr',
      season: 'Jahreskreis',
      description: 'Die Strukturierung der Zeit: Ein wiederkehrender Rhythmus, bestehend aus Phasen der Besinnung, festlichen Feiern und Zeiten des Dankes.',
      theology: 'Spiegelbild menschlicher Existenz: Der liturgische Zyklus reflektiert die gesamte Bandbreite des Lebens – von Vorbereitung und Trauer bis hin zu festlicher Freude.',
      icon: <CalendarRange className="h-5 w-5 text-teal-400" />
    }
  ];

  const symbols: SymbolItem[] = [
    {
      id: 'kreuz',
      name: 'Kreuz',
      theology: 'Symbol des Ostergeheimnisses, der Erlösung und der Hoffnung.',
      explanation: 'Ursprünglich ein römisches Hinrichtungswerkzeug, wandelte sich das Kreuz durch das Osterereignis zum globalen Symbol christlicher Hoffnung: Es verkündet das Leben, das den Tod letztendlich überwindet.',
      reflection: 'Das Kreuz verweist auf das Mitgefühl Gottes: Er ist kein ferner Gott, sondern teilt in Christus menschliches Leid und Angst. In Zeiten der Not bist du niemals gänzlich verlassen.',
      icon: (
        <svg className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="8" y1="9" x2="16" y2="9" />
        </svg>
      ),
      borderClass: 'border-l-4 border-amber-500',
      textCol: 'text-amber-450'
    },
    {
      id: 'kerze',
      name: 'Kerze',
      theology: 'Präsenz des göttlichen Lichts und der Zuversicht.',
      explanation: 'Licht spendet Orientierung und Wärme in der Dunkelheit. Die brennende Kerze versinnbildlicht die Zusage, dass Gottes gütige Gegenwart auch dunkle Kapitel unseres Lebens erhellen kann.',
      reflection: 'Das Entzünden einer Kerze schafft ein bewusstes Ritual der Ruhe. Ihr sanftes Licht lädt dazu ein, Ängste, Wünsche und Momente der Dankbarkeit in der Stille zu betrachten.',
      icon: <Flame className="h-8 w-8 text-orange-400" />,
      borderClass: 'border-l-4 border-orange-500',
      textCol: 'text-orange-450'
    },
    {
      id: 'wasser',
      name: 'Wasser',
      theology: 'Quell des Lebens, der geistigen Reinigung und des Neubeginns.',
      explanation: 'Als unentbehrliches Lebenselixier symbolisiert das Taufwasser die Abwaschung des Alten sowie die unzerstörbare Zusage eines gesegneten, geistlichen Neuanfangs.',
      reflection: 'Elementare Erfahrungen wie fließendes Wasser können uns im Alltag daran erinnern, Ballast bewusst abzustreifen und jeden Tag mit frischer, schöpferischer Kraft zu begegnen.',
      icon: <Waves className="h-8 w-8 text-sky-400" />,
      borderClass: 'border-l-4 border-sky-500',
      textCol: 'text-sky-450'
    },
    {
      id: 'brot-wein',
      name: 'Brot und Wein',
      theology: 'Nahrung der Seele, lebendige Gemeinschaft und sakramentale Gegenwart.',
      explanation: 'Brot steht für das tägliche Auskommen und Überleben, Wein für die festliche Freude des Daseins. In der Eucharistie vergegenwärtigen diese Gaben die bleibende, stärkende Nähe Christi.',
      reflection: 'Die Mahlgemeinschaft lehrt uns den Wert des Teilens. Wo wir miteinander teilen, überwinden wir soziale Barrieren und stiften gelebte Solidarität.',
      icon: <Utensils className="h-8 w-8 text-yellow-400" />,
      borderClass: 'border-l-4 border-yellow-500',
      textCol: 'text-yellow-450'
    },
    {
      id: 'fisch',
      name: 'Fisch',
      theology: 'Historisches Glaubensbekenntnis und Erkennungssymbol.',
      explanation: 'In Zeiten der Verfolgung diente der Fisch den frühen Christen als diskretes Erkennungszeichen. Das griechische Wort für Fisch, ICHTHYS, bildet als Akrostichon das kürzeste Glaubensbekenntnis: „Jesus Christus, Gottes Sohn, Erlöser“.',
      reflection: 'Dieses Symbol zeugt vom Mut christlicher Überzeugung im Angesicht persönlicher Risiken. Es mahnt uns heute zu Toleranz und zum Eintreten für Religions- und Meinungsfreiheit.',
      icon: <Fish className="h-8 w-8 text-teal-400" />,
      borderClass: 'border-l-4 border-teal-500',
      textCol: 'text-teal-450'
    }
  ];

  const selectedSymbolData = symbols.find(s => s.id === selectedSymbol) || symbols[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative overflow-visible">
      
      {/* Background glow lamps circles */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-church-gold/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Banner Header with Unsplash Backing (Mysteries of seasonal/sacramental light glow) */}
      <div className="relative w-full overflow-hidden bg-[#0A1828] py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-155de6c7f54a?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/60 via-[#0A1724]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <CalendarRange className="h-3.5 w-3.5 text-church-gold shrink-0" />
            <span>Kultur, Symbole &amp; Feste</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Feste &amp; Symbole <span className="text-church-gold italic font-normal font-serif">begreifen</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Glaube entzieht sich trockenen Paragraphen – er lebt durch Riten, tiefe Rhythmen und spürbare Symbole, die wir physisch wahrnehmen können. Erkunde herzerwärmende Lebensschwellen und uralte Zeichen ganz verständlich erklärt.
          </motion.p>

          {/* Tab Selector Buttons inside the Header Container for high-end aesthetic value */}
          <div className="flex justify-center mt-10">
            <div className="bg-[#030B12]/85 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-white/10 flex space-x-1">
              <button
                id="festsym-symbols-tab-btn"
                onClick={() => setActiveTab('symbole')}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === 'symbole'
                    ? 'bg-church-gold text-church-navy font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Interaktive Symbole
              </button>
              <button
                id="festsym-fests-tab-btn"
                onClick={() => setActiveTab('feste')}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === 'feste'
                    ? 'bg-church-gold text-church-navy font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Feste &amp; Sakramente
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally reveal based on active tab with framer motion animations */}
      <AnimatePresence mode="wait">
        {activeTab === 'symbole' ? (
          /* TAB 1: INTERACTIVE SYMBOLS DETAIL BOARD */
          <motion.section 
            key="symbole-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
          >
            {/* Left Grid: Clickable Buttons redesigned as a futuristic dark architectural board */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#040D14] p-6 sm:p-10 rounded-[40px] border border-white/5 relative overflow-hidden text-left">
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">Uralte Zeichen der Weggemeinschaft</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Tippe auf ein Symbol der Urchristenheit, um seine theologische Bedeutung und einen stärkenden Alltags-Impuls für deinen Weg freizulegen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 relative z-10 w-full">
                {symbols.map((symbol) => {
                  const isActive = selectedSymbol === symbol.id;
                  return (
                    <button
                      id={`symbol-card-btn-${symbol.id}`}
                      key={symbol.id}
                      onClick={() => setSelectedSymbol(symbol.id)}
                      className={`p-4 rounded-[22px] border text-left transition-all duration-300 flex items-center justify-between gap-4 relative cursor-pointer min-w-0 w-full ${
                        isActive
                          ? 'bg-church-gold text-church-navy border-church-gold scale-[1.02] shadow-lg font-bold'
                          : 'bg-white/5 text-gray-200 border-white/10 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 min-w-0 flex-1">
                        <span className={`p-2 rounded-xl shrink-0 transition-colors ${isActive ? 'bg-church-navy text-church-gold' : 'bg-white/5 text-church-gold'}`}>
                          {symbol.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="block font-serif text-base truncate">{symbol.name}</span>
                        </div>
                      </div>
                      
                      {isActive ? (
                        <span className="flex items-center justify-center h-5 w-5 rounded-full bg-church-navy text-church-gold text-xs shrink-0">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest shrink-0">Öffnen</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Beautiful Detail Reflection Board with high-contrast card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSymbol}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[40px] p-8 sm:p-12 shadow-2xl border border-church-border flex flex-col justify-between h-full relative overflow-hidden group text-left"
                >
                  {/* Backdrop glowing logo vector */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-church-gold/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-6">
                    <span className="text-[11px] font-mono uppercase bg-church-gold/15 text-church-gold px-4 py-1 rounded-full font-bold w-fit flex items-center gap-2 border border-church-gold/25">
                      <Sparkle className="h-3.5 w-3.5" />
                      Erklärung • {selectedSymbolData.name}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy leading-tight">
                      Bedeutung des Symbols: {selectedSymbolData.name}
                    </h3>

                    <p className="text-xs font-mono text-gray-500 bg-church-bg py-2.5 px-4 rounded-xl border border-church-border block max-w-full break-words font-medium leading-relaxed">
                      <strong className="text-church-navy">Liturgischer Kern:</strong> {selectedSymbolData.theology}
                    </p>

                    <div className="h-[1px] bg-gray-100 mt-4" />

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                      {selectedSymbolData.explanation}
                    </p>

                    {/* Practical Reflection block */}
                    <div className="bg-church-bg/40 p-6 rounded-2xl border-l-4 border-church-gold space-y-2.5 mt-6 border border-church-border border-l-0">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center gap-1.5">
                        <Info className="h-4.5 w-4.5 text-church-gold shrink-0" />
                        <span>Impuls für deinen Tag</span>
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic font-light">
                        {selectedSymbolData.reflection}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-[11px] font-mono text-gray-400">
                    <span>Kirche • Symbole des Lebens</span>
                    <span>mehralsdudenkst</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>
        ) : (
          /* TAB 2: FESTE & SAKRAMENTE GRID MATRIX */
          <motion.section 
            key="feste-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {festivals.map((fest, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-[36px] shadow-sm border border-church-border hover:border-church-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group hover:scale-[1.01]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-church-bg p-3.5 rounded-2xl w-fit group-hover:bg-church-navy/5 transition-colors">
                      {fest.icon}
                    </div>
                    <span className="text-[10px] font-mono bg-church-navy/5 text-church-navy/80 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {fest.season}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-church-navy group-hover:text-church-gold transition-colors">
                    {fest.name}
                  </h3>

                  <p className="text-gray-650 text-xs sm:text-sm leading-relaxed font-light">
                    {fest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-xs space-y-1 bg-[#fafaf9] p-4 rounded-2xl border border-church-border mt-6">
                  <span className="font-bold text-church-navy block font-serif text-xs sm:text-sm">Bedeutung für die Praxis:</span>
                  <p className="text-gray-500 italic leading-relaxed font-light">
                    {fest.theology}
                  </p>
                </div>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
