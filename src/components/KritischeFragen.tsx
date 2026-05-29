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
  ShieldClose
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Intro block */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-bold">
          Ehrlicher Dialog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Deine Fragen haben einen berechtigten Platz.
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Viele Menschen bewegen kritische Fragen und verständlicher Unmut über Missstände in der Kirche. Uns ist ein ehrlicher, transparenter Dialog auf Augenhöhe ein echtes Anliegen. Wir wollen Probleme nicht verschweigen, sondern uns ihnen aktiv stellen und gemeinsam den Weg nach vorn gestalten.
        </p>
      </section>

      {/* Accordions layout */}
      <section className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white rounded-[24px] sm:rounded-[32px] border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-church-gold shadow-sm' 
                  : 'border-church-border hover:border-church-navy/30'
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                id={`faq-trigger-${faq.id}`}
                onClick={() => handleToggle(faq.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg font-bold text-church-navy hover:text-church-gold transition-colors focus:outline-none"
              >
                <div className="flex items-center space-x-3.5">
                  <span className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-church-gold/20 text-church-gold' : 'bg-church-bg text-gray-500'}`}>
                    <MessageSquare className="h-4 w-4" />
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
                    <div className="px-6 pb-6 pt-1 space-y-4 border-t border-church-border text-xs sm:text-sm text-gray-600 leading-relaxed bg-church-bg/30 pl-14 sm:pl-16">
                      <p className="font-semibold text-church-navy">
                        {faq.answer}
                      </p>
                      
                      <div className="border-l-2 border-church-gold/30 pl-4 py-1 text-gray-500">
                        {faq.subContent}
                      </div>

                      <div className="flex items-center space-x-1.5 text-[10px] font-mono text-church-gold font-bold uppercase pt-2">
                        <CornerDownRight className="h-3.5 w-3.5" />
                        <span>Kritik ernst nehmen & verändern</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      {/* Stately blockquote in German (Mandated) */}
      <section className="bg-church-navy text-white text-center py-12 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-sm border border-church-border max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 w-32 h-32 bg-church-gold/5 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <Sparkle className="h-8 w-8 text-church-gold mx-auto animate-pulse" />
          <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-gray-100">
            „Eine Kirche ohne Fragen wäre nicht ehrlich. Eine Kirche mit Fragen kann wachsen.“
          </blockquote>
          <div className="h-[2px] bg-church-gold w-12 mx-auto mt-4" />
        </div>
      </section>
    </div>
  );
}
