/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Compass, Users2, Globe2, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface TimelineStep {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  expandedDetails: string;
  icon: React.ReactNode;
}

export default function WasIstKatholisch() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineStep[] = [
    {
      title: 'Jesus Christus',
      year: 'ca. 30 n. Chr.',
      subtitle: 'Der Ausgangspunkt unseres Glaubens',
      description: 'Jesus von Nazaret verkündet das Reich Gottes: eine Botschaft der Liebe, Vergebung und unbedingten Menschenwürde.',
      expandedDetails: 'Sein Leben, sein Tod am Kreuz und der Glaube an seine Auferstehung begründen den christlichen Weg. Er wendet sich gezielt den Schwachen, Kranken und Ausgegrenzten zu – ein radikales Vorbild für soziale Gerechtigkeit, das bis heute die Richtschnur für katholisches Handeln ist.',
      icon: <BookOpen className="h-5 w-5 text-church-navy" />
    },
    {
      title: 'Die ersten Christen',
      year: 'ab 33 n. Chr.',
      subtitle: 'Die Botschaft breitet sich aus',
      description: 'Von Jerusalem aus reisen Apostel wie Petrus und Paulus umher, um Menschen über Sprach- und Kulturgrenzen hinweg zu begeistern.',
      expandedDetails: 'Zuerst eine verfolgte Minderheit, gründen die ersten Christinnen und Christen dichte Schutzgemeinschaften. Sie teilen ihren Wohlstand, beten gemeinsam und pflegen kranke Menschen. Dieser Gemeinschaftssinn erweist sich als weltliches Magnet und legt den Samen für eine neue Epoche.',
      icon: <Users2 className="h-5 w-5 text-church-navy" />
    },
    {
      title: 'Die Kirche entsteht',
      year: 'ab ca. 100 n. Chr.',
      subtitle: 'Aus Gemeinden wächst Struktur',
      description: 'Zentrale Feiern wie die Eucharistie entstehen, Kirchenämter bilden sich, verbindliche Glaubenstexte werden geordnet.',
      expandedDetails: 'Aus losen Hauskirchen entsteht über Generationen eine weltumspannende Organisationsstruktur mit Bischöfen und dem Papst als Nachfolger des Apostels Petrus. Rituale, Feiern und das Kirchenjahr strukturieren den Alltag und geben Halt in stürmischen Zeiten der Weltgeschichte.',
      icon: <Layers className="h-5 w-5 text-church-navy" />
    },
    {
      title: 'Weltweite Kirche',
      year: 'Heute',
      subtitle: 'Eins in großer Vielfalt',
      description: 'Mit über 1,3 Milliarden Mitgliedern ist die katholische Kirche heute eine bunte, sprachlich und kulturell diverse globale Allianz.',
      expandedDetails: 'Ob im Regenwald Südamerikas, in afrikanischen Metropolen oder europäischen Dörfern – überall kommen Menschen unter denselben Symbolen zusammen. Trotz lokaler Differenzen verbindet sie der Glaube an Gott und der Auftrag zur weltweiten Nächstenliebe (Caritas).',
      icon: <Globe2 className="h-5 w-5 text-church-navy" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Intro section */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Definition & Ursprung
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Was bedeutet eigentlich „katholisch“?
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Die katholische Kirche ist eine große und geschichtsträchtige christliche Glaubensgemeinschaft. Im Kern steht der Glaube an Gott, der uns in Jesus Christus begegnet ist und durch den Heiligen Geist lebendig in uns wirkt. Es geht dabei um weit mehr als um nackte Paragraphen – es geht um ein Fundament der Hoffnung, das Generationen verbindet.
        </p>
      </section>

      {/* Main Interactive Timeline and Dynamic Detail Board */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-8 sm:p-12 rounded-[40px] shadow-sm border border-church-border">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-church-navy border-b border-church-border pb-3">
            Die Entstehungsgeschichte
          </h2>
          <p className="text-gray-500 text-sm">
            Klicke auf die einzelnen Epochen auf der Zeitleiste, um mehr über die jeweilige Entstehung und tiefere theologische Bedeutung zu erfahren:
          </p>

          <div className="space-y-4 pt-4 relative border-l-2 border-church-navy/10 pl-6 sm:pl-8 ml-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group relative transition-all duration-300 p-4 rounded-[24px] ${
                    isActive
                      ? 'bg-church-navy text-white shadow-md scale-[1.02]'
                      : 'hover:bg-church-bg text-church-navy border border-transparent hover:border-church-border'
                  }`}
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[35px] sm:-left-[43px] top-7 h-5 w-5 rounded-full border-2 transition-colors flex items-center justify-center ${
                      isActive
                        ? 'bg-church-gold border-church-navy'
                        : 'bg-white border-church-navy/30 group-hover:border-church-gold'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-church-navy' : 'bg-transparent'}`} />
                  </span>

                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-church-gold' : 'text-church-gold'}`}>
                    {step.year}
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <h3 className="font-serif font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card side display */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-church-navy text-white p-8 rounded-[40px] shadow-lg relative overflow-hidden border border-church-navy flex flex-col h-full justify-between"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              {steps[activeStep].icon}
            </div>
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-church-gold/5 rounded-full blur-2xl" />

            <div className="space-y-4">
              <span className="font-mono text-xs text-church-gold uppercase tracking-widest font-bold">
                Fokus-Fakten • {steps[activeStep].year}
              </span>
              <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                {steps[activeStep].title}
              </h3>
              <p className="text-church-gold text-sm font-semibold italic">
                {steps[activeStep].subtitle}
              </p>
              <div className="h-[1px] bg-white/20 w-16" />
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].expandedDetails}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-300 font-mono">
              <span>Kapitel {activeStep + 1} von 4</span>
              <span>Mehr als du denkst</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Informative Box (Infokasten) */}
      <section className="bg-church-navy text-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-md border border-church-navy">
        <div className="absolute top-0 left-0 h-full w-2.5 bg-church-gold" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center relative z-10">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="bg-white/10 p-6 rounded-[24px] border border-white/20">
              <ShieldCheck className="h-10 w-10 text-church-gold" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-2xl font-bold">
              Schon gewusst? Das Wort „katholisch“
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Das Wort katholisch leitet sich vom altgriechischen Wort <strong>„katholikos“</strong> ab und bedeutet übersetzt ursprünglich <strong>„allgemein“</strong>, <strong>„allumfassend“</strong> oder <strong>„weltweit“</strong>. 
            </p>
            <p className="text-sm text-gray-200 font-light">
               Und das beschreibt das Ideal auch perfekt: Es soll keine exklusive Gruppe sein, sondern eine globale, menschliche Familie, die über alle nationalen Grenzen hinweg offen für jeden ist – unabhängig von Herkunft, Reichtum oder sozialem Rang.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
