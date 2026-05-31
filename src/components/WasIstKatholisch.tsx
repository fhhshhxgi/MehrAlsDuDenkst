/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Compass, Users2, Globe2, BookOpen, Layers, Sparkle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TimelineStep {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  expandedDetails: string;
  icon: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.45,
    },
  },
};

export default function WasIstKatholisch() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineStep[] = [
    {
      title: 'Jesus Christus',
      year: 'ca. 30 n. Chr.',
      subtitle: 'Der Ausgangspunkt unseres Glaubens',
      description: 'Jesus von Nazaret verkündete eine radikale Botschaft des Friedens, der bedingungslosen Nächstenliebe und der unantastbaren Würde jedes Einzelnen.',
      expandedDetails: 'Sein Wirken, sein Tod am Kreuz und das Zeugnis der Auferstehung bilden das unerschütterliche Fundament christlicher Existenz. Sein besonderes Augenmerk galt den Marginalisierten und Entrechteten – bis heute ein bleibender Auftrag für soziale Gerechtigkeit und solidarisches Handeln.',
      icon: <BookOpen className="h-5 w-5 text-white" />
    },
    {
      title: 'Die ersten Christen',
      year: 'ab 33 n. Chr.',
      subtitle: 'Die Botschaft breitet sich aus',
      description: 'Ausgehend von Jerusalem verbreiteten die Apostel – allen voran Petrus und Paulus – die frohe Botschaft im gesamten antiken Mittelmeerraum.',
      expandedDetails: 'Trotz Verfolgung und Marginalisierung zeichnete sich die urchristliche Gemeinschaft durch einen außergewöhnlichen Zusammenhalt aus. Sie teilten ihren Besitz, pflegten Kranke und feierten gemeinsam das Herrenmahl – eine gelebte Solidarität, die gesellschaftliche Barrieren überwand.',
      icon: <Users2 className="h-5 w-5 text-white" />
    },
    {
      title: 'Die Kirche entsteht',
      year: 'ab ca. 100 n. Chr.',
      subtitle: 'Aus Gemeinden wächst Struktur',
      description: 'Aus den lokalen Hauskirchen erwuchsen verbindliche theologische Strukturen, Sakramente wie die Eucharistie und die Kanonisierung der heiligen Schriften.',
      expandedDetails: 'Im Laufe der Jahrhunderte festigte sich die sakramentale und hierarchische Struktur der Kirche mit dem Papst – als Nachfolger Petri – und den Bischöfen an der Spitze. Liturgische Traditionen und Rituale gaben den Gläubigen Orientierung inmitten der wechselvollen Weltgeschichte.',
      icon: <Layers className="h-5 w-5 text-white" />
    },
    {
      title: 'Weltweite Kirche',
      year: 'Heute',
      subtitle: 'Eins in großer Vielfalt',
      description: 'Als globale Gemeinschaft vereint die katholische Kirche heute über 1,3 Milliarden Menschen unterschiedlichster Kulturen und Herkunft.',
      expandedDetails: 'Ob in Lateinamerika, afrikanischen Metropolen oder europäischen Gemeinden – die Einheit im Glauben und im liturgischen Vollzug überwindet nationale sowie kulturelle Differenzen. Sie verbindet uns zu einer weltumspannenden Weggemeinschaft der Nächstenliebe.',
      icon: <Globe2 className="h-5 w-5 text-white" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative overflow-visible">
      
      {/* Ambient background glow elements in space */}
      <div className="absolute top-1/3 left-1/10 w-[300px] h-[300px] bg-church-gold/6 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-church-navy/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Page Header Section */}
      <div className="relative w-full overflow-hidden bg-church-navy py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        {/* Ambient photo background layer with premium Unsplash source (stained glass streaming light) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-65 scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-155deee223d2?q=80&w=1200&auto=format&fit=crop")' }}
        />
        
        {/* Ambient glowing spot lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/60 via-[#102A43]/85 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Sparkle className="h-3.5 w-3.5 text-church-gold animate-spin duration-10000 shrink-0" />
            <span>Definition & Ursprung</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Was bedeutet eigentlich <span className="text-church-gold italic font-normal font-serif">„katholisch“</span>?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Die katholische Kirche bildet das weltweit größte christliche Netzwerk des Glaubens. Im Zentrum unserer Identität stehen das unbedingte Vertrauen in Jesus Christus und die gelebte Nachfolge. Dabei erschöpft sich der Glaube nicht in formalen Dogmen, sondern verwirklicht sich in Hoffnung, caritativer Unterstützung und gelebter Solidarität.
          </motion.p>
        </div>
      </div>

      {/* Main Interactive Timeline and Dynamic Detail Board */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gradient-to-tr from-[#FAF8F5] to-white p-6 sm:p-12 rounded-[40px] shadow-sm border border-church-border">
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-[9px] text-church-navy uppercase tracking-widest font-extrabold block">Unsere Entwicklung im Wandel</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-church-navy tracking-tight mt-1">
            Die Entstehungsgeschichte
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
            Wähle die einzelnen Epochen auf der Zeitleiste aus, um tiefere Einblicke in deren theologische Relevanz und historische Entwicklung zu erhalten:
          </p>

          <div 
            className="space-y-4 pt-4 relative border-l-2 border-church-navy/10 pl-6 sm:pl-8 ml-3"
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer select-none touch-manipulation group relative transition-all duration-200 p-4 rounded-[24px] active:scale-[0.99] ${
                    isActive
                      ? 'bg-church-navy text-white shadow-xl shadow-church-navy/10 border-l-4 border-church-gold'
                      : 'hover:bg-church-bg/60 text-church-navy border border-transparent hover:border-church-border bg-white'
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

                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-church-gold' : 'text-church-gold-hover'}`}>
                    {step.year}
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <h3 className="font-serif font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isActive ? 'text-gray-200 font-light' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card side display */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative h-full min-h-[420px] rounded-[40px] overflow-hidden shadow-2xl border border-church-navy flex flex-col justify-between">
            {/* Background image for current step to add high-end depth */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 brightness-[0.25] scale-105" 
              style={{ 
                backgroundImage: activeStep === 0 
                  ? 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=700&q=80")' // Cross, path
                  : activeStep === 1 
                  ? 'url("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80")' // People gathering
                  : activeStep === 2 
                  ? 'url("https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=700&q=80")' // Candles cathedral
                  : 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=700&q=80")' // Globe cathedral
              }}
            />
            {/* Color tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F33]/85 via-[#061524]/90 to-[#030B12]/98" />
            
            {/* Ambient golden orb */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-48 h-48 bg-church-gold/15 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-church-gold uppercase tracking-widest font-bold">
                      Fokus-Fakten • {steps[activeStep].year}
                    </span>
                    <div className="p-2 bg-white/10 rounded-lg border border-white/10 text-church-gold">
                      {steps[activeStep].icon}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-church-gold text-sm font-semibold italic flex items-center gap-1.5">
                    <Sparkle className="h-4 w-4 shrink-0" />
                    <span>{steps[activeStep].subtitle}</span>
                  </p>
                  
                  <div className="h-[1px] bg-white/20 w-16" />
                  
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                    {steps[activeStep].expandedDetails}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Kapitel {activeStep + 1} von 4</span>
                  <span className="text-church-gold font-bold">Mehr als du denkst</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modern Informative Box (Infokasten) redesigned with a gorgeous, high-effort aesthetic */}
      <section className="relative overflow-hidden rounded-[40px] shadow-xl border border-church-navy bg-church-navy text-white group select-none">
        {/* Dynamic background photo for the info banner */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-102 transition-all duration-700 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512852964607-8cca57a833e1?q=80&w=1000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-church-navy via-church-navy/95 to-transparent z-0" />
        <div className="absolute top-0 left-0 h-full w-2.5 bg-church-gold group-hover:scale-y-105 transition-transform" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center relative z-10 p-8 sm:p-12">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="bg-white/10 p-6 rounded-[28px] border border-white/20 shadow-inner group-hover:border-church-gold/40 transition-colors">
              <ShieldCheck className="h-10 w-10 text-church-gold animate-pulse" />
            </div>
          </div>
          <div className="md:col-span-3 space-y-4 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Schon gewusst? Das Wort „katholisch“</span>
            </h3>
            
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
              Der Begriff „katholisch“ leitet sich vom altgriechischen Wort <strong className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">„katholikos“</strong> ab, was übersetzt so viel wie <strong className="text-church-gold italic font-serif">„das Ganze betreffend“</strong>, <strong className="text-white">„allgemein“</strong> oder <strong className="text-white">„allumfassend“</strong> bedeutet.
            </p>
            
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              In dieser Begrifflichkeit artikuliert sich ein hohes inklusives Ideal: Die Kirche versteht sich nicht als exklusiver Zirkel, sondern als eine offene, weltumspannende Gemeinschaft, die jedem Menschen – unabhängig von Herkunft, Status oder individuellem Glaubensweg – Raum für Orientierung, Zuflucht und Mitgestaltung bietet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
