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
  ChevronRight,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MachDenTest() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<('type1' | 'type2' | 'type3' | 'type4')[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      text: 'Wonach strebst du am ehesten in deinem Leben?',
      options: [
        { text: 'Nach Räumen authentischer Gemeinschaft, in denen sich Menschen auf Augenhöhe begegnen und gegenseitig stützen.', type: 'type1' },
        { text: 'Nach ehrlichen und existenziellen Antworten auf die großen Sinnfragen deines Seins.', type: 'type2' },
        { text: 'Nach konkreten Gelegenheiten, mich tatkräftig für soziale Gerechtigkeit und benachteiligte Mitmenschen einzusetzen.', type: 'type3' },
        { text: 'Nach einer Oase des Innehaltens und der Stille, um Abstand von der Hektik des Alltags zu gewinnen.', type: 'type4' }
      ]
    },
    {
      id: 2,
      text: 'Welche Atmosphäre spricht dich spontan am stärksten an?',
      options: [
        { text: 'Lebendiger Austausch, generationsübergreifende Feste und inspirierende Tischgemeinschaften.', type: 'type1' },
        { text: 'Ein offener, reflektierter Dialog über theologische Fragen, Zweifel und Wertekompasse.', type: 'type2' },
        { text: 'Praktizierte Solidarität – anpackende Hände bei sozialen Initiativen oder Hilfskampagnen.', type: 'type3' },
        { text: 'Die erhabene Ästhetik und tiefe Stille eines kirchenmusikalisch erfüllten Sakralraums.', type: 'type4' }
      ]
    },
    {
      id: 3,
      text: 'Welche Lebensmaxime resoniert am ehesten mit deiner persönlichen Haltung?',
      options: [
        { text: '„Gemeinschaft stiftet Sinn – Isolation und bloße Selbstdarstellung verringern unsere Lebensqualität.“', type: 'type1' },
        { text: '„Ein reflektierter Glaube verlangt nach ehrlicher Auseinandersetzung und klaren Fragen, nicht nach blindem Gehorsam.“', type: 'type2' },
        { text: '„Tätige Nächstenliebe erweist sich in der Tat – Worte ohne solidarisches Handeln bleiben leer.“', type: 'type3' },
        { text: '„In der bewussten Hinwendung zur Stille empfange ich die innere Resilienz und Kraft für den Alltag.“', type: 'type4' }
      ]
    },
    {
      id: 4,
      text: 'Wie betrachtest du das Thema Glaube oder Spiritualität?',
      options: [
        { text: 'Als verbindenden Klang einer Gemeinschaft, der Lebensfreude stiftet und Menschen zueinander führt.', type: 'type1' },
        { text: 'Als eine lebenslange, dynamische Entdeckungsreise voller theologischer Fragen und wertvoller Zweifel.', type: 'type2' },
        { text: 'Als praktische Übersetzung biblischer Werte in messbaren, gesellschaftlichen Beistand.', type: 'type3' },
        { text: 'Als kontemplativen Rückzugsort der Meditation, des Gebets und der seelischen Regeneration.', type: 'type4' }
      ]
    },
    {
      id: 5,
      text: 'Wenn du ein Kirchengebäude betrittst, worauf fällt dein Fokus zuerst?',
      options: [
        { text: 'Auf die Gesichter der anwesenden Menschen und die Atmosphäre einladender Offenheit.', type: 'type1' },
        { text: 'Auf theologische Bildmotive, Sakramente, historische Schriften oder kunstvolle Altarbotschaften.', type: 'type2' },
        { text: 'Auf Informationsstände über caritative Projekte, Seelsorgeangebote und lokale Hilfswerke.', type: 'type3' },
        { text: 'Auf die Weite des Raumes, das gedämpfte Licht und die meditative Stille der Kirchenbänke.', type: 'type4' }
      ]
    },
    {
      id: 6,
      text: 'Welche Thematik fesselt deine Aufmerksamkeit in Medien oder Diskursen am ehesten?',
      options: [
        { text: '„Gegen die Vereinsamung: Wie moderne Netzwerke sozialen Zusammenhalt neu stiften.“', type: 'type1' },
        { text: '„Glaube und Vernunft: Warum theologische Zweifel Triebfedern geistigen Wachstums sind.“', type: 'type2' },
        { text: '„Caritative Verantwortung: Wie praktizierte Solidarität das soziale Netz stabilisiert.“', type: 'type3' },
        { text: '„Achtsamkeit und Kontemplation: Wege zu innerem Frieden in einer reizüberfluteten Welt.“', type: 'type4' }
      ]
    }
  ];

  const results: Record<'type1' | 'type2' | 'type3' | 'type4', QuizResult> = {
    type1: {
      id: 'type1',
      title: 'Gemeinschaft & Begegnung 👥',
      subtitle: 'Deine Sehnsucht nach echter Verbindung',
      description: 'Für dich steht das relationale, zwischenmenschliche Fundament im Vordergrund. Du schöpfst Kraft aus echter Zugehörigkeit, schätzt den ehrlichen Austausch von Angesicht zu Angesicht und möchtest das Leben gemeinsam in einer verlässlichen Gemeinschaft auf Augenhöhe gestalten.',
      advice: 'In den regionalen Gemeinden und Musikprojekten unserer Kirche findest du zahlreiche tolle Gelegenheiten für echte Begegnung ganz ohne Masken oder Leistungsdruck. Ob in Chören, engagierten Nachbarschafts-Initiativen oder offenen Runden – du bist herzlich eingeladen, einfach so vorbeizukommen und Anschluss zu finden.',
      bgGradient: 'from-orange-500/10 border-orange-500/20'
    },
    type2: {
      id: 'type2',
      title: 'Sinnsuche & Reflexion 🧭',
      subtitle: 'Dein Drang nach theologischer Reife',
      description: 'Du gibst dich nicht mit oberflächlichen Schablonen zufrieden. Ein kritischer Verstand, historische Neugier und das ehrliche Ringen um Werte und Existenzfragen zeichnen dich aus. Zweifel verstehst du als berechtigten Motor deines eigenen geistigen Wachstums.',
      advice: 'Dein reflektierter Weg hat in unserer Gemeinschaft einen festen, geschätzten Platz. Nutze offene Diskussionsabende, den Dialog auf Augenhöhe mit Seelsorgern oder engagiere dich in Bildungsforen. Hier musst du deine Fragen und Zweifel nicht ablegen – sie sind der Schlüssel zur echten Vertiefung.',
      bgGradient: 'from-indigo-500/10 border-indigo-500/20'
    },
    type3: {
      id: 'type3',
      title: 'Tätige Solidarität 🤝',
      subtitle: 'Dein Fokus auf aktive Nächstenliebe',
      description: 'Für dich entscheidet sich der Wert einer Weltanschauung an ihrem praktischen Nutzen für die Schwächsten. Worten müssen Taten folgen. Dein ethischer Kompass treibt dich an, soziale Benachteiligung zu bekämpfen und unmittelbare Hilfe zu leisten.',
      advice: 'Das weitreichende caritative Netzwerk unserer Kirche – allen voran das Wohlfahrtswerk der Caritas – bietet dir unzählige Plattformen für deine Tatkraft. Vom ehrenamtlichen Beistand in der Lebensmittelausgabe über ökologische Nachhaltigkeitsprojekte bis hin zur Solidaritätsarbeit kannst du den Wandel aktiv anfassen.',
      bgGradient: 'from-emerald-500/10 border-emerald-500/20'
    },
    type4: {
      id: 'type4',
      title: 'Kontemplation & Stille 🕯️',
      subtitle: 'Deine Sehnsucht nach seelischer Seelenruhe',
      description: 'Du empfindest den reizüberfluteten Alltag oft als Herausforderung für die innere Balance. Du sehnst dich nach Orten der Entschleunigung, an denen du ohne äußere Leistungserwartungen einfach da sein, durchatmen und Kraft schöpfen kannst.',
      advice: 'Unsere geöffneten Kirchengebäude stehen dir als Oasen der Ruhemomente offen. Nutze diese geschützten Räume, um im Schweigen, bei leiser Orgelmusik oder im sanften Schein einer Kerze die Seele baumeln zu lassen. Auch meditative Taizé-Andachten und kontemplative Foren bieten dir wertvolle Energieanker.',
      bgGradient: 'from-sky-500/10 border-sky-500/20'
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative overflow-visible">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-church-gold/6 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Banner Header with Unsplash Backing (Walk along woodland trails) */}
      <div className="relative w-full overflow-hidden bg-[#071320] py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/75 via-[#0C1B2A]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Compass className="h-3.5 w-3.5 text-church-gold shrink-0" />
            <span>Orientierungstest</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Was bedeutet <span className="text-church-gold italic font-normal font-serif">Glaube für dich</span>?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Jeder Mensch trägt eine ganz eigene Sehnsucht in sich – nach warmer Gemeinschaft, tiefem Suchen, sozialer Solidarität oder kontemplativer Stille. Finde spielerisch heraus, wie dein persönliches Profil aussieht.
          </motion.p>
        </div>
      </div>

      {/* Test Dashboard Area */}
      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-2xl border border-church-border overflow-hidden">
        {/* Progress Header Tracking Active Question */}
        <div className="bg-[#040E16] text-white px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-left">
            <div className="bg-church-gold p-2.5 rounded-full text-church-navy shrink-0">
              <Compass className="h-5 w-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-church-gold uppercase tracking-widest font-extrabold">Selbstfindung</span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                {!showResult ? `Frage ${currentQuestion + 1} von ${questions.length}` : 'Deine spirituelle Auswertung'}
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-gray-300">
            {!showResult ? `${progressPercent}% abgeschlossen` : 'Fertiggestellt'}
          </span>
        </div>

        {/* Dynamic score progress indicator strip with premium glow */}
        <div className="w-full h-1.5 bg-gray-100 relative">
          <div 
            className="absolute left-0 top-0 h-full bg-church-gold transition-all duration-300 shadow-[0_0_8px_rgba(214,168,79,0.6)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* MAIN BODY SWITCH: QUIZ OR RESULT SCREEN */}
        <div className="p-6 sm:p-12 bg-white flex flex-col justify-between">
          {!showResult ? (
            /* QUESTIONS SCREEN */
            <div className="space-y-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-church-navy leading-snug text-left border-l-4 border-church-gold pl-4 py-1">
                {activeQuestionData.text}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {activeQuestionData.options.map((option, idx) => (
                   <button
                    id={`quiz-option-${idx}`}
                    key={idx}
                    onClick={() => handleOptionClick(option.type)}
                    className="w-full text-left p-5 rounded-[24px] border border-church-border hover:border-church-gold hover:bg-church-gold/5 transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="bg-church-navy/5 group-hover:bg-church-navy group-hover:text-church-gold text-church-navy h-10 w-10 rounded-[16px] flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <p className="text-gray-700 font-medium text-xs sm:text-sm pr-4 leading-relaxed font-light">
                        {option.text}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-church-gold group-hover:translate-x-1.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* RESULTS SCREEN LOADING dominant type data */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 text-left"
            >
              {(() => {
                const dominantType = getDominantType();
                const resultData = results[dominantType];
                
                return (
                  <div className="space-y-8">
                    {/* Header Banner */}
                    <div className="p-8 rounded-[36px] border-2 border-church-gold/20 bg-[#fbfbfa] space-y-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-church-gold/10 pointer-events-none">
                        <Sparkles className="h-24 w-24" />
                      </div>
                      
                      <span className="bg-church-navy text-church-gold text-[10px] font-mono font-bold uppercase py-1 px-3 rounded-full w-fit">
                        Dein Kraftfeld
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-church-navy leading-tight">
                        {resultData.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-church-gold uppercase tracking-wider font-mono">
                        {resultData.subtitle}
                      </p>
                    </div>

                    {/* Detailed evaluation paragraphs */}
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-lg text-church-navy border-b border-church-border pb-2 flex items-center gap-1.5">
                        <Sparkle className="h-4 w-4 text-church-gold animate-spin" style={{ animationDuration: '4s' }} />
                        <span>Deine spirituelle Disposition</span>
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                        {resultData.description}
                      </p>
                    </div>

                    <div className="bg-[#FAF9F5] p-6 rounded-[28px] border-l-4 border-church-gold space-y-2.5 border border-church-border text-left">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center gap-1.5">
                        <Sparkles className="h-4.5 w-4.5 text-church-gold animate-pulse" />
                        <span>Inspiration für dich</span>
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic font-light">
                        {resultData.advice}
                      </p>
                    </div>

                    {/* Score Distribution Bars */}
                    <div className="space-y-5 bg-church-bg/30 p-6 sm:p-8 rounded-[36px] border border-church-border">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center space-x-1.5">
                        <Sparkles className="h-4.5 w-4.5 text-church-navy shrink-0" />
                        <span>Deine spirituelle Resonanz-Verteilung</span>
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        Deine Antworten spiegeln facettenreiche Dimensionen deiner Persönlichkeit wider. Die Anzeige veranschaulicht deine individuelle Affinität zu den vier tragenden Säulen:
                      </p>
                      <div className="space-y-4 pt-2">
                        {[
                          { key: 'type1', label: 'Gemeinschaft & Begegnung 👥', color: 'bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.3)]' },
                          { key: 'type2', label: 'Sinnsuche & Reflexion 🧭', color: 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.3)]' },
                          { key: 'type3', label: 'Tätige Solidarität 🤝', color: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]' },
                          { key: 'type4', label: 'Kontemplation & Stille 🕯️', color: 'bg-sky-450 shadow-[0_0_8px_rgba(56,189,248,0.3)]' },
                        ].map((item) => {
                          const pct = getScorePercentages()[item.key as keyof ReturnType<typeof getScorePercentages>];
                          return (
                            <div key={item.key} className="space-y-1">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-gray-700 font-light">{item.label}</span>
                                <span className="font-mono text-church-navy font-bold">{pct}%</span>
                              </div>
                              <div className="w-full h-3 bg-gray-200/60 rounded-full overflow-hidden">
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

                    {/* Reset Footer Button */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-church-border text-xs text-gray-500 font-mono">
                      <span>Mit Offenheit weiterfragen und wachsen</span>
                      <button
                        id="reset-quiz-btn"
                        onClick={handleReset}
                        className="px-5 py-2.5 bg-[#FAF9F6] hover:bg-church-navy hover:text-white rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer border border-church-border"
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
