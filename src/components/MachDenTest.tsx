/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuizQuestion, QuizResult } from '../types';
import { 
  Compass, 
  Users2, 
  HelpCircle, 
  HeartHandshake, 
  Flame, 
  RotateCcw, 
  Sparkles,
  ArrowRight,
  Heart,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function MachDenTest() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<('type1' | 'type2' | 'type3' | 'type4')[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      text: 'Was suchst du am ehesten im Leben?',
      options: [
        { text: 'Einen Ort, an dem Menschen echt zusammenkommen und sich unterstützen.', type: 'type1' },
        { text: 'Antworten auf die großen, ungeklärten Fragen des Lebens.', type: 'type2' },
        { text: 'Eine Chance, mich für Benachteiligte zu engagieren.', type: 'type3' },
        { text: 'Eine Oase der Ruhe, um Abstand vom täglichen Stress zu gewinnen.', type: 'type4' }
      ]
    },
    {
      id: 2,
      text: 'Welche Atmosphäre spricht dich spontan am stärksten an?',
      options: [
        { text: 'Musik, lebhafte Feste und gemütliches Reden mit anderen.', type: 'type1' },
        { text: 'Ein intellektueller Dialog über Werte, Zweifel und Theologie.', type: 'type2' },
        { text: 'Hände, die zupacken – etwa beim Kochen für Obdachlose.', type: 'type3' },
        { text: 'Lichtstrahlen durch bunte Fenster in absoluter Ruhe.', type: 'type4' }
      ]
    },
    {
      id: 3,
      text: 'Welche Aussage in deinem Alltag passt am ehesten zu dir?',
      options: [
        { text: '„Gemeinsam sind wir stärker, Isolation macht einsam.“', type: 'type1' },
        { text: '„Ich hinterfrage Dinge gerne, anstatt alles blind zu glauben.“', type: 'type2' },
        { text: '„Mitleid nützt nichts, wenn man dem Hungernden kein Brot gibt.“', type: 'type3' },
        { text: '„In der Stille finde ich die Kraft, die ich im Alltag brauche.“', type: 'type4' }
      ]
    },
    {
      id: 4,
      text: 'Wie betrachtest du das Thema Glaube oder Spiritualität?',
      options: [
        { text: 'Als gemeinsamen Gesang, der Freude am Leben weckt.', type: 'type1' },
        { text: 'Als eine lebenslange Reise voller Fragen und offener Zweifel.', type: 'type2' },
        { text: 'Als tätige Nachbarschaftshilfe, die den Worten Taten folgen lässt.', type: 'type3' },
        { text: 'Als wertvolle Momente der Meditation und Einkehr im Stillen.', type: 'type4' }
      ]
    },
    {
      id: 5,
      text: 'Wenn du einen Raum betrittst, worauf fällt dein Fokus zuerst?',
      options: [
        { text: 'Auf die Gesichter der Menschen und deren Gesten der Einladung.', type: 'type1' },
        { text: 'Auf Symbole, alte Schriften und kunstvolle Altarbotschaften.', type: 'type2' },
        { text: 'Auf Aushänge für soziales Engagement oder Spendenaufrufe.', type: 'type3' },
        { text: 'Auf die leeren Sitzbänke und die unaufgeregte Stille.', type: 'type4' }
      ]
    },
    {
      id: 6,
      text: 'Welches Buch- oder Podcast-Thema fesselt dich am ehesten?',
      options: [
        { text: '„Gemeinschaft im Wandel – Neue Netzwerke gegen Einsamkeit.“', type: 'type1' },
        { text: '„Sinnsuche im 21. Jahrhundert: Warum Zweifel gesund sind.“', type: 'type2' },
        { text: '„Die Macher: Wie soziales Engagement Gesellschaften repariert.“', type: 'type3' },
        { text: '„Heilsame Stille – 10 Minuten Achtsamkeit für Gestresste.“', type: 'type4' }
      ]
    }
  ];

  const results: Record<'type1' | 'type2' | 'type3' | 'type4', QuizResult> = {
    type1: {
      id: 'type1',
      title: 'Der Gemeinschaftsmensch 👥',
      subtitle: 'Kirche als lebendiger Ort des Zusammenkommens',
      description: 'Für dich steht das Zwischenmenschliche im Vordergrund des Lebens. Du ziehst Energie aus der Zugehörigkeit, suchst ehrliche Freundschaften und liebst es, gemeinsam mit anderen zu lachen und das Leben zu teilen.',
      advice: 'In der katholischen Kirche könntest du vor allem in Jugendgruppen, bei fröhlichen Gemeindefesten, in modernen Chören oder durch die Mitgestaltung lokaler Initiativen wunderbare Heimatsmomente erleben. Schau einfach vorbei – du bist ohne Vorbedingungen willkommen!',
      bgGradient: 'from-orange-50 to-orange-100 border-orange-200'
    },
    type2: {
      id: 'type2',
      title: 'Der Sinnsucher 🧭',
      subtitle: 'Kirche als Raum für die großen Lebensfragen',
      description: 'Du gibst dich selten mit einfachen, vorgekauten Antworten zufrieden. Du hinterfragst Gegebenheiten, hast gesunde Zweifel und suchst nach echter philosophischer Tiefe sowie intellektuellem Ringen um Sinn und Werte.',
      advice: 'Niemand zwingt dich bei uns, deine Skepsis abzulegen. Im Gegenteil: Diskutiert in Themenabenden, sprecht mit Seelsorgern im offenen Visier oder bringt euch in theologische Kreise ein. Deine Zweifel sind ein Motor für echtes Wachstum!',
      bgGradient: 'from-purple-50 to-purple-100 border-purple-200'
    },
    type3: {
      id: 'type3',
      title: 'Der Helfer 🤝',
      subtitle: 'Kirche als engagierte Kraft des Wandels',
      description: 'Für dich muss ein guter Glaube vor allem eines tun: Anpacken. Schöne Worte und Sonntagsgebete nützen nichts, wenn montags weggeschaut wird. Deine treibende Motivation ist soziale Gerechtigkeit und Hilfe für Benachteiligte.',
      advice: 'Das soziale Getriebe der Kirche steht dir sperrangelweit offen! Ob Caritas, Obdachlosenküche, Jugendverbandsaktionen oder weltweite Partnerschaften – hier hast du unendlich viele Gelegenheiten, das Schicksal anderer Menschen konkret positiv zu verändern.',
      bgGradient: 'from-emerald-50 to-emerald-100 border-emerald-200'
    },
    type4: {
      id: 'type4',
      title: 'Der Ruhe-Sucher 🕯️',
      subtitle: 'Kirche als schutzgebender Kraftort der Stille',
      description: 'Der Alltag kann überwältigend laut werden. Du suchst nach Inseln der Auszeit, nach Momenten des puren Innehaltens und nach einer spirituellen Tiefe, die ohne viel Lärm und Aufregung für dich da ist.',
      advice: 'Unsere Kirchengebäude stehen tagsüber als Schutzräume offen. Setze dich einfach hinein, genieße den kühlen Raum, atme tief durch und entzünde – wenn du magst – eine stille Kerze. Entdecke spirituelle Andachten, Meditationen der Ruhe oder Taizé-Gebete.',
      bgGradient: 'from-sky-50 to-sky-100 border-sky-200'
    }
  };

  const handleOptionClick = (type: 'type1' | 'type2' | 'type3' | 'type4') => {
    const nextAnswers = [...selectedAnswers, type];
    setSelectedAnswers(nextAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Determine dominant personality type from answers array
  const getDominantType = (): 'type1' | 'type2' | 'type3' | 'type4' => {
    const counts = { type1: 0, type2: 0, type3: 0, type4: 0 };
    selectedAnswers.forEach(ans => {
      counts[ans]++;
    });

    let maxKey: 'type1' | 'type2' | 'type3' | 'type4' = 'type1';
    let maxVal = -1;
    (Object.keys(counts) as ('type1' | 'type2' | 'type3' | 'type4')[]).forEach(key => {
      if (counts[key] > maxVal) {
        maxVal = counts[key];
        maxKey = key;
      }
    });

    return maxKey;
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const getScorePercentages = (): { type1: number; type2: number; type3: number; type4: number } => {
    const counts = { type1: 0, type2: 0, type3: 0, type4: 0 };
    selectedAnswers.forEach(ans => {
      counts[ans]++;
    });
    const total = selectedAnswers.length || 1;
    return {
      type1: Math.round((counts.type1 / total) * 100),
      type2: Math.round((counts.type2 / total) * 100),
      type3: Math.round((counts.type3 / total) * 100),
      type4: Math.round((counts.type4 / total) * 100),
    };
  };

  const activeQuestionData = questions[currentQuestion];
  const progressPercent = Math.round(((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Intro section */}
      <section className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Interaktiver Selbsttest
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Was bedeutet Kirche für dich?
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Jeder Mensch hat ein anderes inneres Bedürfnis nach Gemeinschaft, Sinnsuche, Hilfe oder Ruhe. Mach den 60-Sekunden-Test und erfahre, welcher spirituelle Entdeckertyp in dir schlummert!
        </p>
      </section>

      {/* Test Dashboard area */}
      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-sm border border-church-border overflow-hidden">
        {/* Progress header tracking active question */}
        <div className="bg-church-navy text-white px-8 py-6 flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="bg-church-gold p-2.5 rounded-full text-church-navy">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-church-gold uppercase tracking-wider font-semibold">Persönlichkeitstest</span>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {!showResult ? `Frage ${currentQuestion + 1} von ${questions.length}` : 'Deine Auswertung'}
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-gray-300">
            {!showResult ? `${progressPercent}% geschafft` : 'Fertig!'}
          </span>
        </div>

        {/* Dynamic score progress indicator strip */}
        <div className="w-full h-1.5 bg-gray-100 relative">
          <div 
            className="absolute left-0 top-0 h-full bg-church-gold transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* MAIN BODY SWITCH: QUIZ OR RESULT SCREEN */}
        <div className="p-8 sm:p-12 bg-white">
          {!showResult ? (
            /* QUESTIONS SCREEN */
            <div className="space-y-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-church-navy leading-snug">
                {activeQuestionData.text}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {activeQuestionData.options.map((option, idx) => (
                   <button
                    id={`quiz-option-${idx}`}
                    key={idx}
                    onClick={() => handleOptionClick(option.type)}
                    className="w-full text-left p-5 rounded-[24px] border-2 border-church-border hover:border-church-gold hover:bg-church-bg transition-all duration-150 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="bg-church-navy/5 group-hover:bg-church-gold/20 text-church-navy group-hover:text-church-navy h-10 w-10 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <p className="text-gray-700 font-medium text-xs sm:text-sm pr-4">
                        {option.text}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-church-gold group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* RESULTS SCREEN LOADING dominant type data */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {(() => {
                const dominantType = getDominantType();
                const resultData = results[dominantType];
                
                return (
                  <div className="space-y-6">
                    {/* Header Banner */}
                    <div className="p-6 sm:p-8 rounded-[32px] border-2 border-church-border bg-church-bg/50 space-y-3">
                      <span className="bg-church-navy text-white text-[10px] font-mono font-bold uppercase py-1 px-3 rounded-full w-fit">
                        Dein Ergebnis
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-church-navy leading-tight animate-pulse-slow">
                        {resultData.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-church-gold uppercase tracking-wider font-mono">
                        {resultData.subtitle}
                      </p>
                    </div>

                    {/* Detailed evaluation paragraphs */}
                    <div className="space-y-4">
                      <h4 className="font-serif font-bold text-lg text-church-navy border-b border-church-border pb-2">
                        Was das über dich aussagt
                      </h4>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {resultData.description}
                      </p>
                    </div>

                    <div className="bg-church-bg p-6 rounded-[24px] border-l-4 border-church-gold space-y-2 border border-church-border">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center space-x-1.5">
                        <Sparkles className="h-4 w-4 text-church-gold" />
                        <span>Empfehlung für dich</span>
                      </h4>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {resultData.advice}
                      </p>
                    </div>

                    {/* Score Distribution Bars (Super Premium Visual "Wow" Effect!) */}
                    <div className="space-y-4 bg-church-bg/30 p-6 sm:p-8 rounded-[32px] border border-church-border">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center space-x-1.5">
                        <Sparkles className="h-4 w-4 text-church-navy" />
                        <span>Deine spirituelle Resonanz-Verteilung</span>
                      </h4>
                      <p className="text-xs text-gray-500 leading-normal font-light">
                        Dein Antwortverhalten zeigt Berührungspunkte in mehreren Facetten deines Lebens. So verteilen sich deine Interessen auf unsere vier Hauptthemengebiete:
                      </p>
                      <div className="space-y-3.5 pt-2">
                        {[
                          { key: 'type1', label: 'Gemeinschaftsmensch 👥', color: 'bg-orange-500' },
                          { key: 'type2', label: 'Sinnsucher 🧭', color: 'bg-indigo-500' },
                          { key: 'type3', label: 'Der Helfer 🤝', color: 'bg-emerald-500' },
                          { key: 'type4', label: 'Ruhesucher 🕯️', color: 'bg-sky-500' },
                        ].map((item) => {
                          const pct = getScorePercentages()[item.key as keyof ReturnType<typeof getScorePercentages>];
                          return (
                            <div key={item.key} className="space-y-1">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-gray-700">{item.label}</span>
                                <span className="font-mono text-church-navy">{pct}%</span>
                              </div>
                              <div className="w-full h-2.5 bg-gray-200/60 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${pct}%` }}
                                  transition={{ duration: 0.8, ease: 'easeOut' }}
                                  className={`h-full ${item.color} rounded-full`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA button inside */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-church-border text-xs text-gray-500 font-mono">
                      <span>Mit ehrlicher Neugier weiterfragen</span>
                      <button
                        id="reset-quiz-btn"
                        onClick={handleReset}
                        className="px-5 py-2.5 bg-church-bg hover:bg-church-navy hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer border border-church-border"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Test wiederholen</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
