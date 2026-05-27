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
      question: 'Ist die Kirche heute überhaupt noch modern?',
      answer: 'Manche Rituale, Gewänder und formalen Hierarchien wirken zweifelsohne wie aus der Zeit gefallen. Gleichzeitig erleben wir an der Basis aber ein enormes Maß an zeitgemäßer Dynamik.',
      subContent: 'Viele Gemeinden arbeiten heute digital, nutzen Messenger-Gruppen für spontane Nachbarschaftshilfe, organisieren Jugendbands mit modernem Electrosound und weichen alte Rollenbilder auf. Kirche wandelt sich – oft schmerzhaft langsam, aber sie tut es durch die Menschen, die mittun.'
    },
    {
      id: 'kritik',
      question: 'Warum gibt es so massive Kritik an der katholischen Kirche?',
      answer: 'Es gibt berechtigte, tiefe Kritik, zum Beispiel an verkrusteten Machtstrukturen, der Ausgrenzung bestimmter Lebensmodelle und vor allem an den schrecklichen Missbrauchsfällen und deren mangelhafter Aufarbeitung.',
      subContent: 'Diese Verfehlungen dürfen weder schöngeredet noch ignoriert werden. Sie rütteln an der Glaubwürdigkeit unseres Auftrags. Viele Gläubige und Priester kämpfen deshalb heute verbissen für Transparenz, lückenlose juristische Aufklärung der Verbrechen und strukturelle Gewaltprävention, damit Kirche wieder zu einem sicheren Ort wird.'
    },
    {
      id: 'warum-bleiben',
      question: 'Warum treten Menschen bei all dieser Kritik nicht einfach alle aus?',
      answer: 'Trotz all des Ärgers über Fehler von Amtsträgern bleiben viele Menschen bewusst Teil der Gemeinschaft. Sie trennen die spirituelle Botschaft Jesu von den Fehlern der Kirchenleitung.',
      subContent: 'Sie bleiben, weil sie ihren persönlichen Glauben leben wollen, weil sie den seelsorglichen Beistand in Lebenskrisen schätzen, weil sie die gigantischen sozialen Hilfswerke unterstützen wollen oder weil die Sakramente und traditionellen Feste ein unverzichtbarer Teil ihrer familiären Identität sind.'
    },
    {
      id: 'blind-glauben',
      question: 'Muss man alles absolut blind glauben, um überhaupt dazuzugehören?',
      answer: 'Nein, keineswegs. Der christliche Glaube ist kein starres Dogmenpaket, bei dem man den Verstand am Kircheneingang abgibt.',
      subContent: 'Der Glaube ist ein Weg. Auf diesem Weg sind Zweifel, offene Fragen und Kritik nicht nur erlaubt, sondern überaus erwünscht. Viele große Heilige der Kirchengeschichte hatten schwerste Glaubenskrisen. Wer fragt und zweifelt, zeigt, dass ihm das Thema wichtig ist.'
    },
    {
      id: 'privatsache',
      question: 'Ist der persönliche Glaube nicht viel eher reine Privatsache?',
      answer: 'Der Glaube ist intim und zutiefst persönlich – aber er bleibt selten unbemerkt im Stillen. Er hat immer auch eine soziale Drehung.',
      subContent: 'Wer aus dem Glauben Kraft zieht, wendet sich dem Nächsten zu. Glaube baut Pflegeheime, gründet Kitas, hilft Obdachlosen, schützt Geflüchtete und engagiert sich für globale Gerechtigkeit. Eine rein private Religiösität würde die Schwachen in unserer kühlen Gesellschaft im Stich lassen.'
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
          Deine Fragen sind erlaubt.
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Viele Menschen haben fundamentale Fragen oder scharfe Kritik an der katholischen Kirche. Eine ehrliche und mutige Auseinandersetzung gehört zum Kern unseres Selbstverständnisses. Diese Kampagne will nichts schönreden, sondern offenlegen, warum wir trotzdem voller Hoffnung weitergehen.
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
