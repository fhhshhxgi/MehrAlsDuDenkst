/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  Compass,
  RotateCcw,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

// The fixed sequential order of the campaign tour
export const TOUR_STEPS: { id: PageId; title: string; subtitle: string; icon: string }[] = [
  { 
    id: 'start', 
    title: 'Einstieg', 
    subtitle: 'Die Werbekampagne beginnt',
    icon: '⛪'
  },
  { 
    id: 'was-ist-katholisch', 
    title: 'Werte & Glaube', 
    subtitle: 'Sinn & Gott verstehen',
    icon: '☀️'
  },
  { 
    id: 'glaube-im-alltag', 
    title: 'Glaube im Alltag', 
    subtitle: 'Ein innerer Ruhepol',
    icon: '🌿'
  },
  { 
    id: 'feste-symbole', 
    title: 'Feste & Symbole', 
    subtitle: 'Tradition & Rhythmus',
    icon: '🔔'
  },
  { 
    id: 'mehr-als-ein-gebaeude', 
    title: 'Offene Räume', 
    subtitle: '22.000 Oasen der Stille',
    icon: '⛪'
  },
  { 
    id: 'kirche-hilft', 
    title: 'Caritas & Hilfe', 
    subtitle: 'Bedingungslose Solidarität',
    icon: '❤️'
  },
  { 
    id: 'mitmachen', 
    title: 'Aktiv werden', 
    subtitle: 'Gemeinsam leben',
    icon: '🙌'
  },
  { 
    id: 'kritische-fragen', 
    title: 'Kritische Fragen', 
    subtitle: 'Ehrliche & offene Antworten',
    icon: '💬'
  },
  { 
    id: 'mach-den-test', 
    title: 'Typen-Selbsttest', 
    subtitle: 'Glaubenstyp erforschen',
    icon: '✨'
  },
  { 
    id: 'kampagnenmaterial', 
    title: 'Plakate & Medien', 
    subtitle: 'Schulprojekt-Abschluss',
    icon: '📄'
  }
];

interface TourHUDProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  visitedPages: PageId[];
  onResetTour: () => void;
}

export default function TourHUD({ 
  activePage, 
  setActivePage, 
  visitedPages,
  onResetTour 
}: TourHUDProps) {
  const totalSteps = TOUR_STEPS.length;
  const completedCount = TOUR_STEPS.filter(step => visitedPages.includes(step.id)).length;

  // Find index of active step
  const currentIndex = TOUR_STEPS.findIndex(step => step.id === activePage);
  const nextStep = currentIndex < totalSteps - 1 ? TOUR_STEPS[currentIndex + 1] : null;
  const prevStep = currentIndex > 0 ? TOUR_STEPS[currentIndex - 1] : null;

  const handleNextStep = () => {
    if (nextStep) {
      setActivePage(nextStep.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (prevStep) {
      setActivePage(prevStep.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleManualStepSelect = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* PERSISTENT ULTRA-MINIMAL FLOATING PROGRESS RIBBON */}
      <div 
        id="tour-progress-hud"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl font-sans"
      >
        <motion.div 
          layout
          className="relative bg-[#051422]/75 backdrop-blur-2xl border border-white/15 rounded-2xl md:rounded-full py-3 px-4 md:py-3.5 md:px-6 shadow-2xl shadow-black/90 flex flex-col md:flex-row items-center gap-3.5 md:gap-4 justify-between"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', damping: 22 }}
        >
          {/* Subtle thin amber top glow highlighting the bar */}
          <div className="absolute top-0 inset-x-24 h-[1px] bg-gradient-to-r from-transparent via-church-gold/60 to-transparent pointer-events-none" />

          {/* Left info segment: Station Title & Counter */}
          <div className="flex items-center gap-3.5 shrink-0 self-start md:self-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-church-gold/15 blur-sm animate-pulse" />
              <div className="bg-church-gold/15 border border-church-gold/30 p-2 rounded-full relative">
                <Compass className="h-4 w-4 text-church-gold animate-spin duration-[24000ms]" />
              </div>
            </div>
            
            <div className="text-left">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-mono text-[9px] font-black uppercase text-church-gold tracking-widest">
                  Kampagnen-Reise
                </span>
                <span className="text-gray-500 font-mono text-[9px]">•</span>
                <span className="text-gray-400 font-mono text-[9px] font-bold">
                  {completedCount}/{totalSteps} Stationen
                </span>
              </div>
              <h4 className="text-white text-sm sm:text-base font-serif font-black leading-tight mt-1">
                {TOUR_STEPS[currentIndex]?.title}
              </h4>
            </div>
          </div>

          {/* Center segment: Connected timeline notches */}
          <div className="flex-1 max-w-sm lg:max-w-md w-full h-8 relative my-1 sm:my-0 flex items-center">
            {/* The line connecting the dots */}
            <div className="absolute left-[12px] right-[12px] h-[2px] bg-white/10 z-0 top-1/2 -translate-y-1/2" />
            <div 
              className="absolute h-[2px] bg-gradient-to-r from-church-gold to-emerald-400 z-0 top-1/2 -translate-y-1/2 origin-left transition-all duration-300" 
              style={{ 
                left: '12px', 
                width: `calc(${(currentIndex / (totalSteps - 1)) * 100}% - ${((currentIndex / (totalSteps - 1)) * 24)}px)`
              }}
            />

             {TOUR_STEPS.map((step, idx) => {
              const isStepVisited = visitedPages.includes(step.id);
              const isStepActive = step.id === activePage;
              const isNextStepInSequence = nextStep && step.id === nextStep.id;
              
              return (
                <button
                  key={step.id}
                  id={`tour-hud-dot-${step.id}`}
                  onClick={() => handleManualStepSelect(step.id)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: `calc(${(idx / (totalSteps - 1)) * 100}% - ${((idx / (totalSteps - 1)) * 24)}px)`,
                    width: '24px',
                    height: '24px'
                  }}
                  className="z-10 flex items-center justify-center cursor-pointer outline-none focus:ring-0 group bg-transparent border-none p-0 shrink-0"
                  title={`${idx + 1}. ${step.title}: ${step.subtitle}`}
                >
                  {/* Glowing Premium Dot Pin */}
                  <div 
                    className={`rounded-full transition-all duration-300 transform ${
                      isStepActive 
                        ? 'h-3.5 w-3.5 bg-church-gold scale-125 ring-4 ring-church-gold/20 shadow-md shadow-church-gold' 
                        : isStepVisited
                        ? 'h-3 w-3 bg-emerald-400 group-hover:bg-emerald-300'
                        : isNextStepInSequence
                        ? 'h-2 w-2 bg-church-gold/60 ring-2 ring-church-gold/20 shadow-sm shadow-church-gold/10 animate-pulse'
                        : 'h-3 w-3 bg-white/20 group-hover:bg-white/40'
                    }`} 
                  />

                  {/* Active Tooltip Popover on Hover */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#091C2C] border border-white/10 text-white text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg font-sans">
                    {idx + 1}. {step.title} {isNextStepInSequence && <span className="text-church-gold font-extrabold ml-1">★ Nächster Schritt</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right segment: Sequential Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            {/* Reset progress */}
            <button
              id="tour-reset-btn"
              onClick={onResetTour}
              className="p-2 bg-white/5 hover:bg-neutral-800 text-gray-400 hover:text-white rounded-full transition-all cursor-pointer border border-white/5"
              title="Reise zurücksetzen"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            {/* Back button */}
            <button
              id="tour-prev-step-btn"
              onClick={handlePrevStep}
              disabled={!prevStep}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                prevStep 
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                  : 'bg-transparent border-transparent text-gray-600 cursor-not-allowed'
              }`}
              title="Vorherige Station"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next Action Trigger */}
            {nextStep ? (
              <button
                id="tour-next-step-btn"
                onClick={handleNextStep}
                className="px-4 py-2 bg-church-gold hover:bg-church-gold-hover text-church-navy text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-church-gold/15"
              >
                <span>Weiter</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
            ) : (
              <span className="px-3.5 py-1.5 bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[10px] font-mono rounded-full font-bold uppercase tracking-wider">
                Reise beendet
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
