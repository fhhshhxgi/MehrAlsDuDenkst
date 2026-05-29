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
      text: 'Wonach strebst du am ehesten in deinem Leben?',
      options: [
        { text: 'Nach Räumen authentischer Gemeinschaft, in denen sich Menschen auf Augenhöhe begegnen und gegenseitig stützen.', type: 'type1' },
        { text: 'Nach intellektuellen und existenziellen Antworten auf die großen Sinnfragen des Seins.', type: 'type2' },
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
      subtitle: 'Die Kirche als lebendige Weggemeinschaft',
      description: 'Für dich steht das relationale, zwischenmenschliche Fundament im Vordergrund. Du schöpfst Kraft aus echter Zugehörigkeit, schätzt den ehrlichen Austausch von Angesicht zu Angesicht und möchtest das Leben gemeinsam in einer verlässlichen Gemeinschaft auf Augenhöhe gestalten.',
      advice: 'In den regionalen Gemeinden und Projekten unserer Kirche findest du zahlreiche Gelegenheiten für echte Begegnung ganz ohne Leistungsdruck. Ob in generationenübergreifenden Chören, lebendigen Initiativen oder offenen Foren – du bist herzlich eingeladen, dich vollkommen ungezwungen einzubringen und Anschluss zu finden.',
      bgGradient: 'from-orange-50 to-orange-100 border-orange-200'
    },
    type2: {
      id: 'type2',
      title: 'Sinnsuche & Reflexion 🧭',
      subtitle: 'Die Kirche als Raum für existenzielle Orientierung',
      description: 'Du gibst dich nicht mit oberflächlichen Antworten zufrieden. Ein kritischer Verstand, theologische Neugier und das ehrliche Ringen um Werte und Existenzfragen zeichnen dich aus. Zweifel verstehst du als berechtigten Motor geistigen und persönlichen Wachstums.',
      advice: 'Dein reflektierter Glaubensweg hat in der Kirche einen festen, anerkannten Platz. Nutze theologische Diskussionsabende, den dialogischen Austausch mit Seelsorgern oder engagiere dich in Bildungsforen. Hier musst du deine Fragen nicht ablegen – sie sind der Schlüssel zur Vertiefung.',
      bgGradient: 'from-purple-50 to-purple-100 border-purple-200'
    },
    type3: {
      id: 'type3',
      title: 'Tätige Solidarität 🤝',
      subtitle: 'Die Kirche als caritative Kraft gesellschaftlichen Wandels',
      description: 'Für dich entscheidet sich der Wert einer Weltanschauung an ihrem praktischen Nutzen für die Schwächsten. Worten müssen Taten folgen. Dein ethischer Kompass treibt dich an, soziale Ungerechtigkeiten zu bekämpfen und unmittelbare, unbürokratische Hilfe zu leisten.',
      advice: 'Das weitreichende caritative Netzwerk unserer Kirche – allen voran das Wohlfahrtswerk der Caritas – bietet dir unzählige Plattformen für dein Engagement. Vom ehrenamtlichen Beistand in der Kältehilfe über ökologische Nachhaltigkeitsprojekte bis hin zur interkulturellen Solidaritätsarbeit kannst du aktiv die Gesellschaft mitgestalten.',
      bgGradient: 'from-emerald-50 to-emerald-100 border-emerald-200'
    },
    type4: {
      id: 'type4',
      title: 'Kontemplation & Stille 🕯️',
      subtitle: 'Die Kirche als schutzgebender Kraftort der Seele',
      description: 'Du empfindest den beschleunigten, reizüberfluteten Alltag oft als Herausforderung für die innere Balance. Du sehnst dich nach Orten der Entschleunigung, an denen du ohne äußere Erwartungen zur Ruhe kommen, meditieren und Kraft sammeln kannst.',
      advice: 'Unsere geöffneten Kirchengebäude stehen dir als tägliche Oasen der Stille offen. Nutze diese geschützten Räume, um im kontemplativen Schweigen, bei leiser Orgelmusik oder im sanften Licht einer Kerze den inneren Frieden wiederzufinden. Auch meditative Andachten, Taizé-Vespern und spirituelle Einkehrtage bieten dir wertvolle Ankerpunkte.',
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
          Interaktiver Orientierungstest
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Was bedeutet Glaube für dich?
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Jeder Mensch trägt eine ganz persönliche Sehnsucht in sich – nach tragfähiger Gemeinschaft, intellektueller Sinnsuche, sozialer Wirksamkeit oder kontemplativer Stille. Dieser kurze Orientierungstest lädt dich ein, deine eigene spirituelle Resonanz zu ergründen.
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
              <span className="text-xs font-mono text-church-gold uppercase tracking-wider font-semibold">Orientierungstest</span>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                {!showResult ? `Frage ${currentQuestion + 1} von ${questions.length}` : 'Deine Auswertung'}
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-gray-300">
            {!showResult ? `${progressPercent}% abgeschlossen` : 'Fertiggestellt'}
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
                        Deine spirituelle Disposition
                      </h4>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {resultData.description}
                      </p>
                    </div>

                    <div className="bg-church-bg p-6 rounded-[24px] border-l-4 border-church-gold space-y-2 border border-church-border">
                      <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base flex items-center space-x-1.5">
                        <Sparkles className="h-4 w-4 text-church-gold" />
                        <span>Inspiration für deinen Weg</span>
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
                        Deine getroffenen Wahlen spiegeln vielschichtige Dimensionen deiner Persönlichkeit wider. Das Diagramm veranschaulicht deine individuelle Affinität zu den vier tragenden Säulen gelebten Glaubens:
                      </p>
                      <div className="space-y-3.5 pt-2">
                        {[
                          { key: 'type1', label: 'Gemeinschaft & Begegnung 👥', color: 'bg-orange-500' },
                          { key: 'type2', label: 'Sinnsuche & Reflexion 🧭', color: 'bg-indigo-500' },
                          { key: 'type3', label: 'Tätige Solidarität 🤝', color: 'bg-emerald-500' },
                          { key: 'type4', label: 'Kontemplation & Stille 🕯️', color: 'bg-sky-500' },
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
                      <span>Mit Offenheit und Neugier weitergehen</span>
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
