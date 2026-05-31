/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ShieldAlert, 
  Sparkle,
  Compass,
  CornerDownRight,
  ShieldClose,
  MessageCircleOff,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  subContent: string;
}

export default function KritischeFragen() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'modern',
      question: 'Ist die Kirche in der heutigen Zeit noch zeitgemäß?',
      answer: 'Einige Traditionen, Gewänder und hierarchische Strukturen wirken in einer modernen Gesellschaft anachronistisch. Gleichzeitig entfaltet sich an der Basis und in vielen Gemeinden eine beachtliche zukunftsorientierte Dynamik.',
      subContent: 'Zahlreiche Initiativen nutzen zeitgemäße Kommunikationswege für direkte Nachbarschaftshilfe, etablieren innovative musikalische und kulturelle Formate und hinterfragen überkommene Geschlechterrollen. Kirchlicher Wandel vollzieht sich oft in kleinen, beharrlichen Schritten – getragen von Menschen, die proaktiv reformieren.'
    },
    {
      id: 'kritik',
      question: 'Wie begegnet die Kirche der massiven Kritik an ihren Strukturen?',
      answer: 'Die Kritik an Machtkonzentrationen, dem Umgang mit diversen Lebensentwürfen und insbesondere an der unzureichenden Aufarbeitung sexuellen Missbrauchs ist schmerzhaft berechtigt.',
      subContent: 'Diese Verfehlungen dürfen weder relativiert noch beschönigt werden, da sie das Fundament des Vertrauens zutiefst beschädigt haben. Daher fordern und forcieren engagierte Gläubige und externe Instanzen eine lückenlose, unabhängige Aufklärung sowie institutionelle Reformen, um Schutzkonzepte konsequent zu verankern.'
    },
    {
      id: 'warum-bleiben',
      question: 'Warum bleiben Menschen angesichts dieser Missstände weiterhin in der Kirche?',
      answer: 'Viele Menschen differenzieren bewusst zwischen der zeitlosen christlichen Botschaft Jesu Christi und den moralischen Verfehlungen der institutionellen Leitungsebene.',
      subContent: 'Sie schätzen das konkrete Engagement der Gemeinden vor Ort, engagieren sich in caritativen Netzwerken oder finden in existentiellen Krisen geistlichen Beistand, Hoffnung und seelischen Halt innerhalb einer solidarischen Glaubensgemeinschaft.'
    },
    {
      id: 'blind-glauben',
      question: 'Erfordert die Zugehörigkeit zur Kirche einen blinden Gehorsam?',
      answer: 'Keineswegs. Der christliche Glaube fordert nicht dazu auf, den eigenen Verstand oder kritisches Denken am Kircheneingang abzugeben.',
      subContent: 'Zweifel, theologische Fragen und konstruktive Kritik sind wesentliche Treiber einer lebendigen Spiritualität. Selbst große Mystiker und Theologen der Geschichte durchlebten tiefgreifende Glaubenskrisen. Eine ernsthafte Auseinandersetzung zeugt von der Relevanz, die das Thema für den Einzelnen besitzt.'
    },
    {
      id: 'privatsache',
      question: 'Ist der persönliche Glaube nicht eine reine Privatsache?',
      answer: 'Der persönliche Glaube gründet in innerer Überzeugung, drängt jedoch von Natur aus auch in den sozialen Raum und stiftet gesellschaftlichen Mehrwert.',
      subContent: 'Christliche Werte motivieren Menschen zu tätiger Nächstenliebe. Ohne diesen Antrieb gäbe es keine flächendeckenden sozialen Einrichtungen wie Kitas, Kältehilfen oder Beratungsangebote. Ein Glaube, der sich an den Bedürfnissen der Mitmenschen orientiert, übernimmt Verantwortung für das Gemeinwohl.'
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative overflow-visible">
      
      {/* Background glow lamps circles */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-500/3 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-church-gold/6 rounded-full blur-[125px] pointer-events-none -z-10" />

      {/* Cinematic Banner Header with Unsplash Backing (Mysteries of Light & Shadows) */}
      <div className="relative w-full overflow-hidden bg-[#071320] py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/75 via-[#0C1B2A]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-400/40 text-rose-100 text-[11px] font-mono font-black uppercase tracking-wider mb-4 shadow-sm"
          >
            <MessageCircleOff className="h-3.5 w-3.5 text-rose-300 shrink-0" />
            <span>Kritik &amp; Wahrhaftigkeit</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Deine kritischen Fragen<br />haben einen <span className="text-church-gold italic font-normal font-serif">berechtigten Platz</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Viele Menschen bewegen ernsthafte, schmerzhafte Zweifel und verständlicher Unmut über Fehler der Institution Kirche. Für uns ist ein transparenter, ehrlicher Dialog auf Augenhöhe unerlässlich. Wir blenden Probleme nicht feige aus, sondern stellen uns ihnen aktiv und wollen den lückenlosen Wandel mitgestalten.
          </motion.p>
        </div>
      </div>

      {/* Accordions layout */}
      <section className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white rounded-[28px] sm:rounded-[36px] border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-church-gold shadow-lg ring-4 ring-church-gold/10' 
                  : 'border-church-border hover:border-church-navy/30'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                id={`faq-trigger-${faq.id}`}
                onClick={() => handleToggle(faq.id)}
                className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 font-serif text-lg font-bold text-church-navy hover:text-church-gold transition-colors focus:outline-none cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <span className={`p-2 rounded-xl shrink-0 transition-colors ${isOpen ? 'bg-church-gold/20 text-church-gold' : 'bg-church-bg text-gray-500'}`}>
                    <MessageSquare className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-base sm:text-lg leading-snug">{faq.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-church-gold shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>

              {/* Accordion Collapsible Panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 sm:px-8 sm:pb-8 space-y-4 border-t border-church-border text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#fbfbfa] pl-14 sm:pl-18 text-left">
                      <p className="font-semibold text-church-navy text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      <div className="border-l-2 border-church-gold/40 pl-4 py-1 text-gray-500 font-light leading-relaxed">
                        {faq.subContent}
                      </div>

                      <div className="flex items-center space-x-1.5 text-[10px] font-mono text-church-gold font-bold uppercase pt-2">
                        <CornerDownRight className="h-3.5 w-3.5 animate-bounce" />
                        <span>Kritik ernst nehmen &amp; verändern</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      {/* Stately quote illustration in dark navy footer */}
      <section className="bg-church-navy text-white text-center py-16 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-xl border border-white/5 max-w-4xl mx-auto group">
        <div className="absolute top-0 left-0 w-32 h-32 bg-church-gold/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <Quote className="h-10 w-10 text-church-gold/30 mx-auto group-hover:scale-110 transition-transform duration-500" />
          <p className="text-[10px] font-mono uppercase text-church-gold tracking-widest font-extrabold">Ehrlichkeit</p>
          <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-gray-200 px-4 font-light">
            „Eine christliche Gemeinschaft ohne mutige Fragen wäre unaufrichtig. Eine Gemeinschaft, die sich unbequemen Fragen stellt, kann innerlich reifen und echter Heimat bieten.“
          </blockquote>
          <div className="h-[2px] bg-church-gold w-16 mx-auto mt-6" />
        </div>
      </section>
    </div>
  );
}
