/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { PageId } from '../types';
import { 
  HelpCircle, 
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { motion } from 'motion/react';

interface StartseiteProps {
  setActivePage: (page: PageId) => void;
  onOpenLegal: () => void;
}

export default function Startseite({ setActivePage, onOpenLegal }: StartseiteProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay was blocked or slowed down. Fallback cover active.", error);
        });
      }
    }
  }, []);

  const handleQuestSelect = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen min-h-[680px] sm:min-h-[780px] lg:min-h-[850px] relative overflow-hidden bg-church-navy flex flex-col justify-between py-8 sm:py-12 select-none">
      
      {/* Dynamic Background Video and Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-center opacity-65 scale-105 transition-all duration-1000"
          poster="https://images.unsplash.com/photo-1512852964607-8cca57a833e1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-people-holding-candles-44181-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-light-passing-through-stained-glass-44186-large.mp4" type="video/mp4" />
        </video>
        {/* Soft immersive premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/60 via-[#0A1F33]/75 to-church-bg/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-church-gold/15 via-transparent to-transparent" />
        
        {/* Ambient floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-church-gold/12 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-600/10 rounded-full blur-[90px]" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Top Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-church-gold/25 border border-church-gold/40 text-church-gold text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase shadow-md shadow-church-gold/5"
        >
          <Sparkle className="h-3.5 w-3.5 text-church-gold animate-spin duration-10000 shrink-0" />
          <span>Eine Initiative zum Nachdenken & Neuentdecken</span>
        </motion.div>

        {/* Cinematic Headline & Subtitle */}
        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.05]"
          >
            Mehr als du <span className="text-church-gold italic font-normal font-serif">glaubst</span>.<br />
            Mehr als du <span className="underline decoration-church-gold/80 decoration-4 underline-offset-4 font-black">denkst</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Kraft tanken, Orientierung finden und füreinander einstehen. Entdecke, wie gelebte Gemeinschaft, Solidarität und persönlicher Glaube modernen Halt im Alltag stiften.
          </motion.p>
        </div>

        {/* 4 Majestic Visual Dimensions Cards Grid */}
        <div className="w-full max-w-6xl px-4 pt-4 sm:pt-6">
          <div className="max-w-xs mx-auto text-center mb-3 sm:mb-4">
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-extrabold block">Unsere tragenden Säulen</span>
            <div className="w-12 h-0.5 bg-church-gold/50 mx-auto mt-1" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            
            {/* Card 1: Sinn & Glaube */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=500&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051422] via-[#051422]/65 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-3 text-left flex flex-col justify-end h-full z-10">
                <span className="text-church-gold text-[8px] font-mono uppercase tracking-widest font-bold">Dimension 01</span>
                <h3 className="text-white font-serif text-xs sm:text-sm font-bold block leading-tight mt-0.5">Sinn & Glaube</h3>
                <p className="text-gray-300 text-[10px] font-light mt-0.5 line-clamp-1 transition-all text-white hidden sm:block font-sans">
                  Sinn finden, Kraft schöpfen und echten inneren Halt erfahren.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Gemeinschaft */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.60 }}
              className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051422] via-[#051422]/65 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-3 text-left flex flex-col justify-end h-full z-10">
                <span className="text-church-gold text-[8px] font-mono uppercase tracking-widest font-bold">Dimension 02</span>
                <h3 className="text-white font-serif text-xs sm:text-sm font-bold block leading-tight mt-0.5">Gemeinschaft</h3>
                <p className="text-gray-300 text-[10px] font-light mt-0.5 line-clamp-1 transition-all text-white hidden sm:block font-sans">
                  Gemeinsamkeit erfahren, Lebensfreude teilen und Beistand spüren.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Nächstenliebe */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051422] via-[#051422]/65 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-3 text-left flex flex-col justify-end h-full z-10">
                <span className="text-church-gold text-[8px] font-mono uppercase tracking-widest font-bold">Dimension 03</span>
                <h3 className="text-white font-serif text-xs sm:text-sm font-bold block leading-tight mt-0.5">Nächstenliebe</h3>
                <p className="text-gray-300 text-[10px] font-light mt-0.5 line-clamp-1 transition-all text-white hidden sm:block font-sans">
                  Unbürokratische Solidarität und tatkräftige Hilfe vor Ort.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Offene Ruhepole */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.70 }}
              className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=500&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051422] via-[#051422]/65 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-3 text-left flex flex-col justify-end h-full z-10">
                <span className="text-church-gold text-[8px] font-mono uppercase tracking-widest font-bold">Dimension 04</span>
                <h3 className="text-white font-serif text-xs sm:text-sm font-bold block leading-tight mt-0.5">Offene Ruhepole</h3>
                <p className="text-gray-300 text-[10px] font-light mt-0.5 line-clamp-1 transition-all text-white hidden sm:block font-sans">
                  Räume des Innehaltens und architektonische Oasen der Zuflucht.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Decorative Brand Accent with clickable Schülerprojekt disclaimer */}
      <div className="relative z-10 text-center flex flex-col items-center gap-1.5 mt-2 px-5 max-w-2xl mx-auto w-full">
        <div className="bg-[#030B12]/85 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3.5 shadow-xl w-full">
          <span className="font-mono text-[10px] uppercase tracking-wider text-gray-200 font-bold text-center leading-relaxed">
      
          </span>
          <span className="hidden sm:inline text-white/20"></span>
          <button
            onClick={onOpenLegal}
            className="text-[10px] font-mono text-church-gold hover:text-white active:text-amber-200 font-bold transition-colors underline cursor-pointer bg-transparent border-0 outline-hidden py-0.5 shrink-0"
          >
            Rechtliche Hinweise &amp; Impressum
          </button>
        </div>
      </div>
    </div>
  );
}
