/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Startseite from './components/Startseite';
import WasIstKatholisch from './components/WasIstKatholisch';
import MehrAlsEinGebaeude from './components/MehrAlsEinGebaeude';
import GlaubeImAlltag from './components/GlaubeImAlltag';
import KircheHilft from './components/KircheHilft';
import FesteSymbole from './components/FesteSymbole';
import KritischeFragen from './components/KritischeFragen';
import MachDenTest from './components/MachDenTest';
import Mitmachen from './components/Mitmachen';
import Kampagne from './components/Kampagne';
import TourHUD from './components/TourHUD';
import { Landmark, Compass, Heart, Info, HeartHandshake, Sparkles, Mail, X, Scale, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('start');
  const [showLegal, setShowLegal] = useState<boolean>(false);

  // Track all pages the user has visited in this session/browser
  const [visitedPages, setVisitedPages] = useState<PageId[]>(() => {
    try {
      const saved = localStorage.getItem('tour_visited_pages_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load tour progress from localStorage:", e);
    }
    return ['start'];
  });

  // Automatically update visited pages on route switch
  useEffect(() => {
    setVisitedPages((prev) => {
      if (!prev.includes(activePage)) {
        const updated = [...prev, activePage];
        localStorage.setItem('tour_visited_pages_v3', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }, [activePage]);

  const handleResetTour = () => {
    setVisitedPages(['start']);
    setActivePage('start');
    localStorage.removeItem('tour_visited_pages_v3');
    localStorage.removeItem('tour_celebration_shown');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'start':
        return <Startseite setActivePage={setActivePage} onOpenLegal={() => setShowLegal(true)} />;
      case 'was-ist-katholisch':
        return <WasIstKatholisch />;
      case 'mehr-als-ein-gebaeude':
        return <MehrAlsEinGebaeude />;
      case 'glaube-im-alltag':
        return <GlaubeImAlltag />;
      case 'kirche-hilft':
        return <KircheHilft />;
      case 'feste-symbole':
        return <FesteSymbole />;
      case 'kritische-fragen':
        return <KritischeFragen />;
      case 'mach-den-test':
        return <MachDenTest />;
      case 'mitmachen':
        return <Mitmachen />;
      case 'kampagnenmaterial':
        return <Kampagne />;
      default:
        return <Startseite setActivePage={setActivePage} onOpenLegal={() => setShowLegal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-church-bg text-church-text flex flex-col justify-between selection:bg-church-gold selection:text-church-navy pb-32">
      {/* Main Campaign content wrapper */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Floating Tour Progress HUD */}
      <TourHUD 
        activePage={activePage} 
        setActivePage={setActivePage} 
        visitedPages={visitedPages}
        onResetTour={handleResetTour}
      />

      {/* Campaign footer - Clean, professional, styled layout */}
      {activePage !== 'start' && (
        <footer id="app-footer" className="bg-church-navy text-gray-300 pt-16 pb-8 border-t-[4px] border-church-gold mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Slogan segment */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center space-x-2">
                  <Landmark className="h-6 w-6 text-church-gold" />
                  <span className="font-serif text-lg font-bold text-white uppercase tracking-tight">
                    Mehr als du denkst.
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Ein kreatives Schülerprojekt zur Auseinandersetzung mit dem Reichtum des Glaubens, gelebter Gemeinschaft, stützender Caritas und der Kraft der Hoffnung im turbulenten Alltag.
                </p>
              </div>

              {/* In-site Links segment */}
              <div className="md:col-span-3 space-y-4">
                <h4 className="font-serif font-bold text-white text-sm sm:text-base border-b border-gray-700/60 pb-1.5">
                  Themenbereiche
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <button 
                    onClick={() => { setActivePage('was-ist-katholisch'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-left text-gray-400 hover:text-church-gold transition-colors"
                  >
                    Was ist katholisch?
                  </button>
                  <button 
                    onClick={() => { setActivePage('mehr-als-ein-gebaeude'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-left text-gray-400 hover:text-church-gold transition-colors"
                  >
                    Mehr als ein Gebäude
                  </button>
                  <button 
                    onClick={() => { setActivePage('glaube-im-alltag'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-left text-gray-400 hover:text-church-gold transition-colors"
                  >
                    Glaube im Alltag
                  </button>
                  <button 
                    onClick={() => { setActivePage('kirche-hilft'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-left text-gray-400 hover:text-church-gold transition-colors"
                  >
                    Kirche hilft
                  </button>
                  <button 
                    onClick={() => { setActivePage('mach-den-test'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-left text-gray-400 hover:text-church-gold transition-colors font-bold"
                  >
                    Mach den Test
                  </button>
                </div>
              </div>

              {/* Campaign material quick jumper */}
              <div className="md:col-span-4 space-y-4">
                <h4 className="font-serif font-bold text-white text-sm sm:text-base border-b border-gray-700/60 pb-1.5">
                  Werbung & Schulprojekt
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Dieses schulische Gestaltungskonzept präsentiert begleitende Poster, Social-Media-Kacheln und editierbare Falt-Wickelfalzflyer.
                </p>
                <button
                  id="footer-media-cta-btn"
                  onClick={() => { setActivePage('kampagnenmaterial'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-4 py-2 bg-white/5 hover:bg-church-gold hover:text-church-navy border border-white/10 rounded-lg text-xs font-semibold tracking-wide transition-all uppercase flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Alle Werbekampagnen-Medien sichten</span>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-end text-xs text-gray-500 font-mono gap-4">
              
              <div className="flex flex-col items-end gap-1 font-mono text-[10px]">
                <span>© {new Date().getFullYear()} – Schülerprojekt (Keine offizielle Kirche)</span>
                <button
                  onClick={() => setShowLegal(true)}
                  className="text-church-gold hover:text-white transition-colors hover:underline font-bold mt-1 text-right cursor-pointer bg-transparent border-0 outline-hidden"
                >
                  Rechtliche Hinweise & Impressum
                </button>
              </div>
            </div>

          </div>
        </footer>
      )}

      {/* PROFESSIONAL HIGH-END LEGAL NOTICE MODAL (SCHÜLERPROJEKT) */}
      <AnimatePresence>
        {showLegal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLegal(false)}
              className="absolute inset-0 bg-[#061524]/90 backdrop-blur-md pointer-events-auto cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-gradient-to-b from-[#061524] to-[#0A1F33] border border-church-gold rounded-[24px] p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto text-left shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-church-gold to-transparent" />
              
              {/* Corner Close button */}
              <button 
                onClick={() => setShowLegal(false)}
                className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2.5 mb-6">
                <Scale className="h-5 w-5 text-church-gold" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Rechtliche Hinweise & Impressum
                </h2>
              </div>

              {/* Warning Banner */}
              <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-4 flex items-start gap-3 mb-6">
                <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide">Schülerprojekt - Kein offizielles Angebot</h4>
                  <p className="text-[11px] text-gray-300 leading-normal font-sans">
                    Diese Webseite ist eine rein fiktive Ausarbeitung und dient ausschließlich als Leistungsnachweis für ein schulisches Projekt. Es besteht <strong>keine</strong> geschäftliche, werbliche oder offizielle Verbindung zur römisch-katholischen Kirche in Deutschland oder deren Bistümern.
                  </p>
                </div>
              </div>

              {/* Legal Details Grid / Sections */}
              <div className="space-y-5 text-xs text-gray-300 font-sans leading-relaxed">
                <div>
                  <h3 className="font-bold text-white text-sm border-b border-white/10 pb-1 mb-2 font-serif">1. Impressum (§ 5 TMG)</h3>
                  <p>
                    Diese Webseite wird als schulisches Projekt im Rahmen des Unterrichts in Mönchengladbach betrieben.
                  </p>
                  <p className="mt-2 text-gray-300">
                    <strong>Herausgeber & Verantwortlich für den Inhalt:</strong><br />
                    Cristian Liebrecht<br />
                    Mönchengladbach<br />
                    Kontakt-E-Mail: <span className="text-church-gold font-mono font-bold font-sans">fhhshhxgi@gmail.com</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm border-b border-white/10 pb-1 mb-2 font-serif">2. Urheberrechtliche Hinweise & Lizenzen</h3>
                  <p>
                    Alle auf dieser Webseite verwendeten Medien und Fotos stammen von der lizenzfreien Plattform <strong>Unsplash</strong> und wurden unter Berücksichtigung deren Nutzungsbedingungen integriert. 
                  </p>
                  <p className="mt-1">
                    Verwendete Bibelzitate stammen aus der deutschen Einheitsübersetzung der Heiligen Schrift. Die Nutzung erfolgt für Bildungs- und Unterrichtszwecke (Schülerprojekt) ohne kommerzielle Absichten.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm border-b border-white/10 pb-1 mb-2 font-serif">3. Datenschutzerklärung</h3>
                  <p>
                    Der Schutz Ihrer Daten ist uns wichtig. Als rein clientseitiges Schüler-Projekt gilt:
                  </p>
                  <ul className="list-disc pl-5 mt-1.5 space-y-1 text-gray-400">
                    <li>Es werden <strong>keine</strong> personenbezogenen Daten auf Webservern erfasst, erhoben oder gespeichert.</li>
                    <li>Sämtliche Eingaben im integrierten Persönlichkeits-Test oder den Suchformularen werden ausschließlich lokal in Ihrem Webbrowser verarbeitet.</li>
                    <li>Der Fortschritt Ihrer geführten Entdeckungsreise wird lokal auf Ihrem eigenen Endgerät via <code className="bg-white/5 px-1 rounded font-mono text-[10px] text-church-gold">localStorage</code> gespeichert.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm border-b border-white/10 pb-1 mb-2 font-serif">4. Haftungsausschluss</h3>
                  <p>
                    Die Inhalte wurden mit Sorgfalt im Rahmen des Projekts ausgearbeitet. Eine Haftung für die Richtigkeit, Aktualität oder Vollständigkeit der enthaltenen Informationen sowie der bereitgestellten PLZ-Gemeindedaten in Mönchengladbach wird hiermit ausgeschlossen.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setShowLegal(false)}
                  className="px-6 py-2.5 bg-church-gold hover:bg-church-gold-hover text-church-navy font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Verstanden & Schließen
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

