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
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

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
      icon: <Gift className="h-5 w-5 text-indigo-600" />
    },
    {
      name: 'Ostern',
      season: 'März / April (Frühling)',
      description: 'Das theologische Fundament des Kirchenjahres: Wir feiern das Ostergeheimnis der Auferstehung Christi und den endgültigen Triumph des Lebens über den Tod.',
      theology: 'Die Überwindung des Endgültigen: Hoffnung, Liebe und Leben behalten im Angesicht von Leid, Verlust und Angst das letzte Wort.',
      icon: <Sun className="h-5 w-5 text-amber-600" />
    },
    {
      name: 'Die Taufe',
      season: 'Sakrament',
      description: 'Die feierliche Aufnahme in die weltweite christliche Gemeinschaft durch das sakramentale Zeichen des Wassers.',
      theology: 'Das unwiderrufliche Heilsversprechen: Du bist bedingungslos angenommen und getragen auf allen Wegen des Lebens.',
      icon: <Waves className="h-5 w-5 text-sky-600" />
    },
    {
      name: 'Die Erstkommunion',
      season: 'Sakrament',
      description: 'Die erstmalige Teilnahme am Abendmahl. Das Teilen des gesegneten Brotes (der Hostie) vergegenwärtigt die bleibende Gemeinschaft mit Christus.',
      theology: 'Erfahrbare Weggemeinschaft: Das sakramentale Teilen stiftet eine tiefe, geistliche Verbindung untereinander und mit Gott.',
      icon: <Utensils className="h-5 w-5 text-amber-600" />
    },
    {
      name: 'Die Firmung',
      season: 'Sakrament (Jugendalter)',
      description: 'Im Jugendalter (meist im 10. Schuljahr) bekräftigst du eigenständig dein Ja-Wort zum Glauben und empfängst den Heiligen Geist als Stärkung und Wegbegleiter für dein Leben.',
      theology: 'Geistliche Stärkung: Die Zusage des Heiligen Geistes verleiht innere Stärke und Orientierung, um im Alltag mutig eigene Überzeugungen zu vertreten.',
      icon: <Sparkles className="h-5 w-5 text-pink-600" />
    },
    {
      name: 'Das Kirchenjahr',
      season: 'Jahreskreis',
      description: 'Die Strukturierung der Zeit: Ein wiederkehrender Rhythmus, bestehend aus Phasen der Besinnung, festlichen Feiern und Zeiten des Dankes.',
      theology: 'Spiegelbild menschlicher Existenz: Der liturgische Zyklus reflektiert die gesamte Bandbreite des Lebens – von Vorbereitung und Trauer bis hin zu festlicher Freude.',
      icon: <CalendarRange className="h-5 w-5 text-teal-600" />
    }
  ];

  const symbols: SymbolItem[] = [
    {
      id: 'kreuz',
      name: 'Kreuz',
      theology: 'Symbol des Ostergeheimnisses, der Erlösung und der Hoffnung.',
      explanation: 'Ursprünglich ein römisches Hinrichtungswerkzeug, wandelte sich das Kreuz durch das Osterereignis zum globalen Symbol christlicher Hoffnung: Es verkündet das Leben, das den Tod überwindet.',
      reflection: 'Das Kreuz verweist auf das Mitgefühl Gottes: Er ist kein ferner Gott, sondern teilt in Christus menschliches Leid und Angst. In Zeiten der Not sind wir niemals gänzlich verlassen.',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="8" y1="9" x2="16" y2="9" />
        </svg>
      ),
      borderClass: 'border-l-4 border-amber-500',
      textCol: 'text-amber-500'
    },
    {
      id: 'kerze',
      name: 'Kerze',
      theology: 'Präsenz des göttlichen Lichts und der Zuversicht.',
      explanation: 'Licht spendet Orientierung und Wärme in der Dunkelheit. Die brennende Kerze versinnbildlicht die Zusage, dass Gottes gütige Gegenwart auch dunkle Kapitel unseres Lebens erhellen kann.',
      reflection: 'Das Entzünden einer Kerze schafft ein bewusstes Ritual der Ruhe. Ihr sanftes Licht lädt dazu ein, Ängste, Wünsche und Momente der Dankbarkeit in der Stille zu betrachten.',
      icon: <Flame className="h-8 w-8" />,
      borderClass: 'border-l-4 border-orange-500',
      textCol: 'text-orange-500'
    },
    {
      id: 'wasser',
      name: 'Wasser',
      theology: 'Quell des Lebens, der geistigen Reinigung und des Neubeginns.',
      explanation: 'Als unentbehrliches Lebenselixier symbolisiert das Taufwasser die Abwaschung des Alten sowie die unzerstörbare Zusage eines gesegneten, geistlichen Neuanfangs.',
      reflection: 'Elementare Erfahrungen wie fließendes Wasser können uns im Alltag daran erinnern, Ballast bewusst abzustreifen und jeden Tag mit frischer, schöpferischer Kraft zu begegnen.',
      icon: <Waves className="h-8 w-8" />,
      borderClass: 'border-l-4 border-sky-500',
      textCol: 'text-sky-500'
    },
    {
      id: 'brot-wein',
      name: 'Brot und Wein',
      theology: 'Nahrung der Seele, lebendige Gemeinschaft und sakramentale Gegenwart.',
      explanation: 'Brot steht für das tägliche Auskommen und Überleben, Wein für die festliche Freude des Daseins. In der Eucharistie vergegenwärtigen diese Gaben die bleibende, stärkende Nähe Christi.',
      reflection: 'Die Mahlgemeinschaft lehrt uns den Wert des Teilens. Wo wir miteinander teilen, überwinden wir soziale Barrieren und stiften gelebte Solidarität.',
      icon: <Utensils className="h-8 w-8" />,
      borderClass: 'border-l-4 border-yellow-500',
      textCol: 'text-yellow-500'
    },
    {
      id: 'fisch',
      name: 'Fisch',
      theology: 'Historisches Glaubensbekenntnis und Erkennungssymbol.',
      explanation: 'In Zeiten der Verfolgung diente der Fisch den frühen Christen als diskretes Erkennungszeichen. Das griechische Wort für Fisch, ICHTHYS, bildet als Akrostichon das kürzeste Glaubensbekenntnis: „Jesus Christus, Gottes Sohn, Erlöser“.',
      reflection: 'Dieses Symbol zeugt vom Mut christlicher Überzeugung im Angesicht persönlicher Risiken. Es mahnt uns heute zu Toleranz und zum Eintreten für Religions- und Meinungsfreiheit.',
      icon: <Fish className="h-8 w-8" />,
      borderClass: 'border-l-4 border-teal-500',
      textCol: 'text-teal-500'
    }
  ];

  const selectedSymbolData = symbols.find(s => s.id === selectedSymbol) || symbols[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Kultur & Symbolik
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Feste & Symbole erleben
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Glaube geht weit über dicke, verstaubte Bücher hinaus. Er lebt von Festen, Rhythmen und Symbolen, die man richtig anfassen und erleben kann. Hier findest du die bekanntesten Feste und spannendsten Symbole ganz einfach erklärt.
        </p>

        {/* Navigation Selector Tabs */}
        <div className="flex justify-center mt-10">
          <div className="bg-white p-1.5 rounded-full shadow-xs border border-church-navy/10 flex space-x-1">
            <button
              id="festsym-symbols-tab-btn"
              onClick={() => setActiveTab('symbole')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'symbole'
                  ? 'bg-church-navy text-white'
                  : 'text-gray-500 hover:text-church-navy'
              }`}
            >
              Interaktive Symbole
            </button>
            <button
              id="festsym-fests-tab-btn"
              onClick={() => setActiveTab('feste')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'feste'
                  ? 'bg-church-navy text-white'
                  : 'text-gray-500 hover:text-church-navy'
              }`}
            >
              Feste & Sakramente
            </button>
          </div>
        </div>
      </section>

      {/* Conditionally reveal based on active tab */}
      {activeTab === 'symbole' ? (
        /* TAB 1: THE INTERACTIVE ANKLICKBARE SYMBOLE */
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Grid: Clickable Tiles */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-church-navy">Entbrenne dein Interesse</h3>
              <p className="text-sm text-gray-500">
                Klicke auf eines der fünf historischen Symbole der Christenheit, um seine theologische Deutung und eine kleine Alltags-Reflektion freizulegen.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-4 mt-6">
              {symbols.map((symbol) => {
                const isActive = selectedSymbol === symbol.id;
                return (
                  <button
                    id={`symbol-card-btn-${symbol.id}`}
                    key={symbol.id}
                    onClick={() => setSelectedSymbol(symbol.id)}
                    className={`p-4 sm:p-6 rounded-[24px] border text-center lg:text-left transition-all duration-200 flex flex-col lg:flex-row items-center lg:space-x-5 justify-between relative cursor-pointer ${
                      isActive
                        ? 'bg-church-navy text-white border-church-gold scale-[1.03] shadow-sm'
                        : 'bg-white text-church-navy border-church-border hover:border-church-gold hover:bg-church-bg'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
                      <div className={`p-3.5 rounded-xl ${isActive ? 'bg-white/10 text-church-gold' : 'bg-church-bg text-church-navy'}`}>
                        {symbol.icon}
                      </div>
                      <div className="text-center lg:text-left mt-2 lg:mt-0">
                        <span className="block font-serif font-bold text-base sm:text-lg">{symbol.name}</span>
                        <span className={`hidden lg:block text-[10px] font-mono mt-0.5 ${isActive ? 'text-church-gold' : 'text-gray-400'}`}>
                          {symbol.theology}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tick overlay or indicator */}
                    {isActive ? (
                      <span className="hidden lg:flex items-center justify-center h-6 w-6 rounded-full bg-church-gold text-church-navy">
                        ✓
                      </span>
                    ) : (
                      <span className="hidden lg:block text-xs font-mono text-gray-300">Öffnen</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Beautiful display showing active details */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedSymbol}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[40px] p-8 sm:p-12 shadow-sm border border-church-border flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Corner graphics decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-10 text-church-navy">
                {selectedSymbolData.icon}
              </div>

              <div className="space-y-6">
                <span className={`text-[10px] font-mono uppercase bg-church-navy/5 px-3 py-1 rounded-full font-bold inline-flex items-center gap-1.5 ${selectedSymbolData.textCol}`}>
                  <Sparkle className="h-3 w-3 animate-spin duration-3000" />
                  Klassisches Symbol • {selectedSymbolData.name}
                </span>

                <h3 className="font-serif text-3xl font-bold text-church-navy">
                  Was bedeutet das Zeichen {selectedSymbolData.name}?
                </h3>

                <p className="text-gray-500 font-mono text-xs italic">
                  Theologischer Kern: {selectedSymbolData.theology}
                </p>

                <div className="h-[1px] bg-gray-100" />

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedSymbolData.explanation}
                </p>

                {/* Practical Reflection block */}
                <div className="bg-church-bg p-5 rounded-2xl border-l-4 border-church-gold space-y-2 mt-6">
                  <h4 className="font-serif font-bold text-church-navy text-sm flex items-center space-x-1.5">
                    <span>Praktischer Impuls für den Alltag</span>
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                    {selectedSymbolData.reflection}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Interaktive Symbolerklärung</span>
                <span>Katholische Kirche – Mehr als du denkst</span>
              </div>
            </motion.div>
          </div>

        </section>
      ) : (
        /* TAB 2: THE FESTE & SAKRAMENTE GRID */
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((fest, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-church-border hover:border-church-navy/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-church-bg p-3 rounded-xl w-fit">
                    {fest.icon}
                  </div>
                  <span className="text-[10px] font-mono bg-church-navy/10 text-church-navy px-3 py-1 rounded-full font-bold">
                    {fest.season}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-church-navy">
                  {fest.name}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {fest.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 text-xs">
                <span className="font-semibold text-church-navy block font-serif">Was bedeutet das für mich?</span>
                <p className="text-gray-500 italic mt-1 leading-relaxed">
                  {fest.theology}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
