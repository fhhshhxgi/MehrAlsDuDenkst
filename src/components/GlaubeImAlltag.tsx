/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Flame, Heart, HeartHandshake, ShieldAlert, Sparkle } from 'lucide-react';
import { motion } from 'motion/react';

interface EverydayScenario {
  id: string;
  tabLabel: string;
  title: string;
  lead: string;
  details: string[];
  icon: React.ReactNode;
  encouragement: string;
}

export default function GlaubeImAlltag() {
  const [activeTab, setActiveTab] = useState<string>('crisis');

  const scenarios: EverydayScenario[] = [
    {
      id: 'crisis',
      tabLabel: 'In Zeiten der Orientierungslosigkeit',
      title: 'Halt in den Stürmen des Lebens finden',
      lead: 'Wenn Sorgen, Stress oder Lebenskrisen dich überfordern und dir den gefühlten Boden unter den Füßen wegreißen.',
      details: [
        'Verschwiegenes Vertrauen: Unsere Seelsorger unterliegen der gesetzlichen Schweigepflicht. Hier findest du einen geschützten Raum, um Sorgen und Ängste ohne Vorurteile im Vertrauen zu teilen.',
        'Orte des Innehaltens: Die geöffneten Kirchengebäude bieten dir Raum, um zur Ruhe zu kommen, im Stillen nachzudenken oder eine Kerze als Zeichen der Hoffnung zu entzünden.',
        'Getragen durch Zuversicht: Der Glaube schenkt die innere Resilienz und das Vertrauen, dass auch schwere Phasen durchgestanden werden können und neues Licht spürbar wird.'
      ],
      icon: <ShieldAlert className="h-5 w-5" />,
      encouragement: 'Es bedarf keiner Perfektion, keiner besonderen Stärke, um Teil unserer Gemeinschaft zu sein. Auch Zweifel und Tränen haben hier ihren berechtigten Platz.'
    },
    {
      id: 'hope',
      tabLabel: 'Auf der Suche nach Annahme',
      title: 'Du bist bedingungslos wertvoll',
      lead: 'Wenn Gefühle von Wertlosigkeit, Erschöpfung oder Ausgrenzung die eigene Lebensfreude trüben.',
      details: [
        'Unantastbare Würde: Jeder Mensch besitzt einen unschätzbaren, gottgegebenen Wert – völlig unabhängig von gesellschaftlichem Status, Noten oder beruflicher Leistung.',
        'Zusage des Beistands: Die Zusage des Glaubens lautet, auch in Zeiten tiefster Selbstzweifel oder des Unverständnisses durch Mitmenschen niemals gänzlich allein zu sein.',
        'Kultur des Neuanfangs: Eigene Fehler oder Misserfolge definieren nicht deine Identität. Die Botschaft von Versöhnung und Vergebung ermöglicht es, jeden Tag unbelastet neu zu beginnen.'
      ],
      icon: <Sparkles className="h-5 w-5" />,
      encouragement: 'Der christliche Glaube bezeugt: Du bist gewollt, geliebt und gesehen – genau so, wie du im gegenwärtigen Moment bist.'
    },
    {
      id: 'morality',
      tabLabel: 'Nach Werten streben',
      title: 'Ein verlässlicher Kompass für das Handeln',
      lead: 'Wenn eine komplexe Welt nach tragfähigen Leitplanken und Orientierung verlangt.',
      details: [
        'Gelebte Nächstenliebe: Die goldene Regel lehrt uns, Mitmenschen mit genau der Empathie, Offenheit und Wertschätzung zu begegnen, die wir uns selbst wünschen.',
        'Befreiung durch Vergebung: Groll und ungelöste Konflikte belasten die eigene Seele. Die christliche Bereitschaft zu verzeihen befreit den Geist und stiftet inneren Frieden.',
        'Verantwortung für die Schöpfung: Aktiv für soziale Gerechtigkeit einzustehen, Schwächere vor Ausgrenzung zu schützen und unsere Umwelt bewusst zu bewahren.'
      ],
      icon: <Heart className="h-5 w-5" />,
      encouragement: 'Werte sind keine einschränkenden Verbote, sondern sinnstiftende Orientierungshilfen für ein gerechtes und gelingendes Zusammenleben.'
    },
    {
      id: 'belonging',
      tabLabel: 'Gemeinschaft erfahren',
      title: 'Ein Ort authentischer Begegnung',
      lead: 'Wenn du echten, persönlichen Austausch suchst, abseits von digitaler Selbstdarstellung und flüchtigen Bekanntschaften.',
      details: [
        'Wertvoll ohne Maske: In unseren Kreisen entfällt die Notwendigkeit ständiger Leistungsweise oder perfekter Inszenierung. Du zählst ganz schlicht als Mensch.',
        'Gelebter Zusammenhalt: In den unterschiedlichen Gruppen und Initiativen teilen wir authentische Erlebnisse, lachen gemeinsam und unterstützen uns gegenseitig.',
        'Eine weltweite Heimat: Finde fast überall eine offene Kirchengemeinde vor, die dir Türen öffnet und die Möglichkeit bietet, Anschluss zu finden.'
      ],
      icon: <HeartHandshake className="h-5 w-5" />,
      encouragement: 'Komm einfach hinzu. Neugier und theologische Zweifel sind uns gleichermaßen willkommen.'
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Intro section */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Spiritualität im Alltag
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Glaube im Alltag erfahren
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Viele assoziieren Glauben primär mit historischen Traditionen oder starren Riten. Doch gelebter Glaube entfaltet seine eigentliche Kraft im Alltag – als verlässliche Kraftquelle, als moralischer Kompass und als starker Rückhalt in Phasen der Unsicherheit.
        </p>
      </section>

      {/* Interactive Tabs Layout */}
      <section className="bg-white rounded-[40px] shadow-sm border border-church-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-fade-in">
        {/* Navigation Column */}
        <div className="lg:col-span-4 bg-church-navy p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Wie erlebst du den Tag?</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">Wähle einen Bereich, der dich heute bewegt:</p>
            
            <div className="space-y-2">
              {scenarios.map((sc) => {
                const isActive = activeTab === sc.id;
                return (
                  <button
                    id={`alltag-tab-btn-${sc.id}`}
                    key={sc.id}
                    onClick={() => setActiveTab(sc.id)}
                    className={`w-full text-left px-4 py-3 rounded-[16px] text-xs font-semibold transition-all duration-200 flex items-center space-x-3 cursor-pointer ${
                      isActive
                        ? 'bg-church-gold text-church-navy shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {sc.icon}
                    <span>{sc.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 hidden lg:block">
            <p className="text-xs text-gray-400 font-mono">
              Katholische Kirche<br />Mehr als du denkst.
            </p>
          </div>
        </div>

        {/* Content Details Panel Column */}
        <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-church-gold">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="font-mono text-xs uppercase font-extrabold tracking-widest">Wegbegleiter</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-church-navy leading-tight">
              {currentScenario.title}
            </h2>

            <p className="text-gray-700 font-medium text-xs sm:text-base italic bg-church-bg p-4 rounded-xl border-l-4 border-church-gold border border-church-border">
              {currentScenario.lead}
            </p>

            <div className="space-y-3 pt-2">
              {currentScenario.details.map((detail, index) => {
                const [heading, text] = detail.split(': ');
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="bg-church-gold/20 text-church-navy p-1 rounded-full mt-1 shrink-0">
                      <Sparkle className="h-3 w-3 text-church-gold" />
                    </span>
                    <p className="text-gray-650 text-xs sm:text-sm leading-relaxed">
                      <strong>{heading}:</strong> {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 pt-4 border-t border-church-border bg-church-gold/10 p-5 rounded-[24px] flex flex-col sm:flex-row items-center gap-4 border border-church-border">
            <div className="bg-white p-2 text-church-navy rounded-full shrink-0 shadow-xs">
              <Flame className="h-4 w-4 text-church-gold animate-bounce" />
            </div>
            <p className="text-xs sm:text-sm font-serif italic text-church-navy text-center sm:text-left leading-relaxed">
              {currentScenario.encouragement}
            </p>
          </div>
        </div>
      </section>

      {/* EXPLANATORY ELEMENT (ALLTÄGLICHE PRAXIS DES GLAUBENS) */}
      <section className="bg-white rounded-[40px] border border-church-border p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-bold">
            Gelebte Kultur im Alltag
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy">
            Wie Glaube im Alltag konkret gelebt wird
          </h2>
          <p className="text-gray-650 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Es bedarf keiner monumentalen Kathedralen, um Spiritualität erfahrbar zu machen. Im alltäglichen Leben zeigt sich der persönliche Glaube oft in kleinen, kraftgebenden Gewohnheiten:
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">🙏</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Momente des Innehaltens</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Ob am Morgen, in einer kurzen Pause oder am Abend: Bewusst innezuhalten, den Tag reflektierend Revue passieren zu lassen und dankbar zu sein, schafft inneren Abstand zur Hektik.
            </p>
          </div>
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">💡</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Wertschätzende Begegnung</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Im Umgang mit der Familie, Kollegen oder Mitmenschen bewusst Werte der Fairness, des Respekts und der gegenseitigen Anerkennung zur Richtlinie des eigenen Handelns machen.
            </p>
          </div>
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">🌱</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Tätige Solidarität</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Sich uneigennützig für Schwächere einsetzen, im Alltag Unterstützung anbieten oder anderen mit Aufmerksamkeit begegnen – das ist gelebte Mitmenschlichkeit.
            </p>
          </div>
        </div>
      </section>

      {/* Strong Highlight Banner */}
      <section className="bg-church-navy text-white text-center py-12 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-md border border-church-navy">
        <div className="absolute top-0 right-0 w-36 h-36 bg-church-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-mono uppercase text-church-gold tracking-widest font-extrabold">Ehrlicher Glaube</p>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-gray-100">
            „Glaube bedeutet nicht, auf jede einzelne Frage eine fertige Antwort zu besitzen. Glaube bedeutet, mit aufrichtiger Hoffnung weiterzufragen.“
          </blockquote>
          <div className="h-[2px] bg-church-gold w-12 mx-auto mt-4" />
        </div>
      </section>

    </div>
  );
}
