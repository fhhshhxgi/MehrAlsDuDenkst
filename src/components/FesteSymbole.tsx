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
      description: 'Christen feiern die Menschwerdung Gottes durch die Geburt Jesu in einem einfachen Stall in Betlehem.',
      theology: 'Gott begegnet uns nicht als ferner Herrscher, sondern wehrlos und zerbrechlich wie ein neugeborenes Kind.',
      icon: <Gift className="h-5 w-5 text-indigo-600" />
    },
    {
      name: 'Ostern',
      season: 'März / April (Frühling)',
      description: 'Das allerwichtigste christliche Fest: Die Feier von Jesu Leiden, seinem Tod am Kreuz und seiner Auferstehung von den Toten.',
      theology: 'Der Tod hat nicht das letzte Wort. Das Leben, das Licht und die Liebe gewinnen über Hass und Verzweiflung.',
      icon: <Sun className="h-5 w-5 text-amber-600" />
    },
    {
      name: 'Die Taufe',
      season: 'Sakrament',
      description: 'Ein Mensch wird mit Wasser begossen und offiziell liebevoll in die christliche Familie aufgenommen.',
      theology: 'Die unzerstörbare Zusage Gottes: „Du bist mein geliebtes Kind, ich gehe jeden Schritt deines Lebens mit.“',
      icon: <Waves className="h-5 w-5 text-sky-600" />
    },
    {
      name: 'Die Erstkommunion',
      season: 'Sakrament',
      description: 'Kinder empfangen am Altar zum ersten Mal das Brot (Hostie) als spürbares Zeichen der Nähe Jesu.',
      theology: 'Gemeinschaft erleben. Das Teilen des einen Brotes verbindet uns mit Jesus und stärkt uns gegenseitig.',
      icon: <Utensils className="h-5 w-5 text-gold-600" />
    },
    {
      name: 'Die Firmung',
      season: 'Sakrament (Jugendalter)',
      description: 'Jugendliche bestätigen eigenständig und bewusst ihren Glauben und empfangen den Heiligen Geist als Kraftspender.',
      theology: 'Rückwind fürs Leben. Der Heilige Geist stärkt dich, deine eigene Meinung zu vertreten und mutig deine Zukunft zu bauen.',
      icon: <Sparkles className="h-5 w-5 text-pink-600" />
    },
    {
      name: 'Das Kirchenjahr',
      season: 'Jahreskreis',
      description: 'Das Jahr ist strukturiert in Zeiten wie Advent, Weihnachten, Fastenzeit, Ostern und Pfingsten.',
      theology: 'Der Wechsel der Jahreszeiten erinnert uns daran, dass es im Leben Phasen der Vorbereitung, der Trauer, aber auch des lauten Jubels gibt.',
      icon: <CalendarRange className="h-5 w-5 text-teal-600" />
    }
  ];

  const symbols: SymbolItem[] = [
    {
      id: 'kreuz',
      name: 'Kreuz',
      theology: 'Zeichen für Jesus, Leiden, Tod und Hoffnung.',
      explanation: 'Das Kreuz vereint Himmel und Erde, Gott und Mensch. Früher ein grausames Hinrichtungswerkzeug der Römer, ist es durch Jesu Auferstehung zum weltweit stärksten Symbol für die Überwindung des Todes und die Hoffnung auf neues Leben geworden.',
      reflection: 'Wofür steht das Kreuz für dich? Es erinnert uns daran, dass Gott unsere schwersten Stunden am eigenen Leib geteilt hat. Kein Schmerz bleibt unbegleitet.',
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
      theology: 'Licht, Wärme und die Nähe Gottes.',
      explanation: 'Die Kerze steht für Licht in dunklen Momenten. Im christlichen Glauben versinnbildlicht das sanfte Flackern einer Kerze die wärmende Liebe Gottes und die Osterkerze das helle Licht Christi, das alle Finsternis von Angst und Vergänglichkeit vertreibt.',
      reflection: 'Zünde in Ruhe eine Kerze an. Das warme Leuchten lädt dich ein, deine ungesagten Ängste oder deine Dankbarkeit sachte nach oben steigen zu lassen.',
      icon: <Flame className="h-8 w-8" />,
      borderClass: 'border-l-4 border-orange-500',
      textCol: 'text-orange-500'
    },
    {
      id: 'wasser',
      name: 'Wasser',
      theology: 'Leben, Reinigung und Neuanfang.',
      explanation: 'Wasser spendet Frische und erhält alles Leben auf unserer Erde – ohne Wasser vertrocknen wir. In der Taufe symbolisiert das Wasser die totale Abwaschung alter Lasten (Sünden) und den glanzvollen Beginn eines völlig neuen Lebens in Gottes Segen.',
      reflection: 'Spüre beim nächsten Händewaschen ganz bewusst das kühle Nass auf deiner Haut. Wasser reinigt nicht nur, es ist die Quelle allen Lebens.',
      icon: <Waves className="h-8 w-8" />,
      borderClass: 'border-l-4 border-sky-500',
      textCol: 'text-sky-500'
    },
    {
      id: 'brot-wein',
      name: 'Brot und Wein',
      theology: 'Gemeinschaft, Urnahrung und Nähe Jesu.',
      explanation: 'Brot ist das simpelste Grundnahrungsmittel vieler Kulturen, während Wein für Freude und Festlichkeit steht. Bei der heiligen Messe (Eucharistie) glauben Katholiken, dass in Brot und Wein Jesus selbst im Kreise seiner Freunde gegenwärtig wird.',
      reflection: 'Gemeinsames Essen verbindet. Brot teilen bedeutet, dem anderen das Überleben zu gönnen. Es erinnert daran, dass wir aufeinander angewiesen sind.',
      icon: <Utensils className="h-8 w-8" />,
      borderClass: 'border-l-4 border-yellow-500',
      textCol: 'text-yellow-500'
    },
    {
      id: 'fisch',
      name: 'Fisch',
      theology: 'Uraltes geheimes Erkennungszeichen.',
      explanation: 'In Zeiten der Christenverfolgung im Römischen Reich diente der Fisch (griechisch „ICHTHYS“) als Code. Die Anfangsbuchstaben stehen für: „Jesus Christus, Gottes Sohn, Erlöser“. Wer den Fisch zeichnete, signalisierte: „Ich gehöre auch dazu.“',
      reflection: 'Der Fisch erinnert uns an schwere Zeiten, in denen Glauben Lebensgefahr bedeutete. Er fordert uns auf, heute friedlich füreinander einzustehen.',
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
          Glaube drückt sich selten nur durch dicke Bücher aus. Er lebt von Rhythmen, großen Feiern und greifbaren Gegenständen. Lerne die traditionsreichen Feste und geheimnisvollen Symbole kennen, die seit Jahrhunderten unseren Glauben sichtbar machen.
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
