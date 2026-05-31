/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Flame, Heart, HeartHandshake, ShieldAlert, Sparkle, Compass, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative overflow-visible">
      
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-church-gold/6 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#1D4ED8]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Cinematic Page Header (Golden Sunrise & Warm Woods) */}
      <div className="relative w-full overflow-hidden bg-[#0A1724] py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-65 scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-155de6c7f54a?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/70 via-[#0A1724]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none animate-pulse duration-4000" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Compass className="h-3.5 w-3.5 text-church-gold" />
            <span>Navigation im Alltag</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Glaube im <span className="text-church-gold italic font-normal font-serif">Alltag erfahren</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Viele assoziieren Glauben ausschließlich mit altehrwürdigen Traditionen oder sonntäglichen Zeremonien. Doch seine wahre Power entfaltet er als unsichtbare, verlässliche Alltags-Ressource: als mentaler Kompass, als Seelenruhe und als emotionales Backup.
          </motion.p>
        </div>
      </div>

      {/* Interactive Tabs Layout with gorgeous contrast side dock styling */}
      <section className="bg-white rounded-[40px] shadow-xl border border-church-border overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Navigation Column */}
        <div className="lg:col-span-4 bg-church-navy p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-church-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-left">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Wie erlebst du deinen Tag?</h3>
            <p className="text-xs text-gray-400 mb-8 font-light leading-relaxed">Wähle die Situation, die dich momentan am meisten anspricht:</p>
            
            <div className="space-y-3">
              {scenarios.map((sc) => {
                const isActive = activeTab === sc.id;
                return (
                  <button
                    id={`alltag-tab-btn-${sc.id}`}
                    key={sc.id}
                    onClick={() => setActiveTab(sc.id)}
                    className={`w-full text-left px-4 py-4 rounded-[20px] text-xs font-semibold transition-all duration-300 flex items-center gap-3.5 cursor-pointer border ${
                      isActive
                        ? 'bg-church-gold text-church-navy border-church-gold shadow-md font-bold'
                        : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isActive ? 'bg-church-navy text-church-gold' : 'bg-white/10 text-church-gold'
                    }`}>
                      {sc.icon}
                    </span>
                    <span className="leading-tight">{sc.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 hidden lg:block relative z-10 text-left">
            <span className="text-[10px] text-church-gold font-mono tracking-widest font-extrabold block">KRAFTQUELLEN</span>
            <p className="text-[11px] text-gray-400 font-light mt-1">
              Gemeinsam den Weg finden, ganz unvoreingenommen.
            </p>
          </div>
        </div>

        {/* Content Details Panel Column with elegant framer-motion exit-entry animation */}
        <div className="lg:col-span-8 p-6 sm:p-12 flex flex-col justify-between min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-2 text-church-gold">
                  <Sparkles className="h-5 w-5 animate-pulse shrink-0" />
                  <span className="font-mono text-xs uppercase font-extrabold tracking-wider">Erfahrung & Beistand</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-church-navy leading-tight">
                  {currentScenario.title}
                </h2>

                <p className="text-gray-750 font-medium text-xs sm:text-sm md:text-base leading-relaxed italic bg-church-bg p-5 rounded-2xl border-l-4 border-church-gold border border-church-border">
                  {currentScenario.lead}
                </p>

                <div className="space-y-4 pt-2">
                  {currentScenario.details.map((detail, index) => {
                    const [heading, text] = detail.split(': ');
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <span className="bg-church-gold/20 text-church-navy p-1.5 rounded-full mt-0.5 shrink-0">
                          <Sparkle className="h-3 w-3 text-church-gold" />
                        </span>
                        <p className="text-gray-750 text-xs sm:text-sm leading-relaxed">
                          <strong className="text-church-navy font-semibold">{heading}:</strong> {text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Encouragement Alert Box */}
              <div className="mt-8 pt-6 border-t border-church-border bg-church-gold/10 p-5 rounded-[28px] flex flex-col sm:flex-row items-center gap-4 border border-church-border/40 text-left">
                <div className="bg-white p-2 text-church-navy rounded-full shrink-0 shadow-sm border border-church-gold/25">
                  <Flame className="h-5 w-5 text-church-gold animate-bounce" />
                </div>
                <p className="text-xs sm:text-sm font-serif italic text-church-navy leading-relaxed">
                  {currentScenario.encouragement}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Practice Cards section (Gelebte Kultur im Alltag) with visual backgrounds */}
      <section className="space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3.5 py-1 rounded-full font-bold">
            Gelebte Kultur im Alltag
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy">
            Wie du deinen Glauben heute ausprobieren kannst
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Es bedarf keiner großen Kathedralen und Pforten, um spirituelle Momente im Tagesablauf zuzulassen. Hier findest du drei kleine Impulse für deinen eigenen Weg:
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Practice 01 */}
          <div className="bg-white p-8 rounded-[32px] border border-church-border space-y-4 text-left shadow-sm group hover:shadow-md transition-shadow">
            <div className="text-3xl bg-church-gold/15 w-12 h-12 rounded-2xl flex items-center justify-center border border-church-gold/25 select-none text-church-navy font-bold">
              🙏
            </div>
            <h4 className="font-serif font-bold text-church-navy text-base sm:text-lg">Momente des Innehaltens</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              Nimm dir am Morgen oder Abend fünf bewusste Minuten für dich. Mach das Smartphone aus, atme tief durch und blicke wohlwollend auf deinen Tag. Werde still und spüre nach.
            </p>
          </div>

          {/* Practice 02 */}
          <div className="bg-white p-8 rounded-[32px] border border-church-border space-y-4 text-left shadow-sm group hover:shadow-md transition-shadow">
            <div className="text-3xl bg-amber-100 w-12 h-12 rounded-2xl flex items-center justify-center border border-amber-200 select-none text-amber-800 font-bold">
              💡
            </div>
            <h4 className="font-serif font-bold text-church-navy text-base sm:text-lg">Wertschätzende Begegnung</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              Mach jemandem im Alltag ein ehrliches, uneigennütziges Kompliment oder begegne einer gestressten Person bewusst mit einem Lächeln. Kleine Gesten verändern den gesamten Tag.
            </p>
          </div>

          {/* Practice 03 */}
          <div className="bg-white p-8 rounded-[32px] border border-church-border space-y-4 text-left shadow-sm group hover:shadow-md transition-shadow">
            <div className="text-3xl bg-emerald-100 w-12 h-12 rounded-2xl flex items-center justify-center border border-emerald-200 select-none text-emerald-800 font-bold">
              🌱
            </div>
            <h4 className="font-serif font-bold text-church-navy text-base sm:text-lg">Tätige Solidarität</h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
              Hilf jemandem mit schwerem Gepäck, höre einem einsamen Nachbarn einfach mal aufmerksam zu oder nimm dir vor, heute ganz bewusst auf deine Worte zu achten und Groll aufzugeben.
            </p>
          </div>

        </div>
      </section>

      {/* Strong Highlight Banner with beautiful Quote illustration */}
      <section className="bg-church-navy text-white text-center py-16 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-xl border border-white/5 group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-church-gold/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#1D4ED8]/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Quote className="h-10 w-10 text-church-gold/40 mx-auto group-hover:scale-110 transition-transform duration-500" />
          <p className="text-[10px] font-mono uppercase text-church-gold tracking-widest font-extrabold">AUTHENTIZITÄT</p>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-gray-100 font-light px-4">
            „Glaube bedeutet keineswegs, auf jede einzelne Frage des Universums eine fertige Schablone zu besitzen. Glaube bedeutet die Zuversicht, mit aufrechter Hoffnung mutig weiterzufragen.“
          </blockquote>
          <div className="h-[2px] bg-church-gold w-16 mx-auto mt-6" />
        </div>
      </section>

    </div>
  );
}
