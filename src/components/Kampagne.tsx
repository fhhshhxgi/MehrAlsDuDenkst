/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import OfficialCampaignPoster from './OfficialCampaignPoster';
import { 
  Instagram, 
  FileText, 
  Download, 
  Smile, 
  Sparkle, 
  Repeat, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2,
  CheckCircle2,
  FileBadge
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Kampagne() {
  const [activeMediaTab, setActiveMediaTab] = useState<'plakat' | 'social' | 'flyer'>('plakat');
  const [flyerSide, setFlyerSide] = useState<'vorder' | 'rueck'>('vorder');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Simulated download triggers helper
  const triggerDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  const handleCopyCaption = () => {
    const textToCopy = `Manchmal beginnt Glaube nicht mit einer Antwort, sondern mit einer Frage. 🕯️✨ #MehrAlsDuDenkst #KircheHeute #GlaubeUndFragen #Gemeinschaft #Hoffnung`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Intro header */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Kampagnen-Material
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Werbemedien & Downloads
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Unsere Kampagne „Mehr als du denkst“ wird offline wie online verbreitet. Hier kannst du das offizielle Werbematerial sichten, herunterladen und teilen, um selbst Teil der Erzählung zu werden.
        </p>

        {/* Media Select Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            id="media-tab-plakat"
            onClick={() => setActiveMediaTab('plakat')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeMediaTab === 'plakat'
                ? 'bg-church-navy text-white shadow-sm'
                : 'bg-white text-gray-500 border border-church-border hover:border-church-navy/30'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Plakate (Druck)</span>
          </button>
          <button
            id="media-tab-social"
            onClick={() => setActiveMediaTab('social')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeMediaTab === 'social'
                ? 'bg-church-navy text-white shadow-sm'
                : 'bg-white text-gray-500 border border-church-border hover:border-church-gold'
            }`}
          >
            <Instagram className="h-4 w-4" />
            <span>Social Media Post</span>
          </button>
          <button
            id="media-tab-flyer"
            onClick={() => setActiveMediaTab('flyer')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeMediaTab === 'flyer'
                ? 'bg-church-navy text-white shadow-sm'
                : 'bg-white text-gray-500 border border-church-border hover:border-church-gold'
            }`}
          >
            <FileBadge className="h-4 w-4" />
            <span>Falt-Flyer</span>
          </button>
        </div>
      </section>

      {/* Dynamic feedback toast for simulated download */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full z-50 text-xs sm:text-sm shadow-xl flex items-center space-x-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>Download gestartet: <strong>{downloadSuccess}</strong></span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER ACTIVE TAB */}
      <section className="max-w-4xl mx-auto">
        {activeMediaTab === 'plakat' && (
          <OfficialCampaignPoster onDownloadClick={triggerDownload} />
        )}

        {activeMediaTab === 'social' && (
          /* TAB 2: INSTAGRAM SOCIAL POST RENDERING */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 rounded-[40px] border border-church-border shadow-sm">
            
            {/* Simulated Instagram Post (Phone mock-style) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[290px] bg-white rounded-[24px] border border-church-border shadow-lg overflow-hidden">
                {/* Header post */}
                <div className="p-3 flex items-center space-x-2.5 border-b border-gray-50 bg-gray-50/50">
                  <div className="h-7 w-7 rounded-full bg-church-gold flex items-center justify-center font-serif text-[10px] font-extrabold text-church-navy">KK</div>
                  <div className="text-[10px] font-mono">
                    <span className="font-bold text-church-navy block">katholische_kirche_heute</span>
                    <span className="text-gray-400 text-[8px]">Gesponsert • Mehr als du denkst</span>
                  </div>
                </div>

                {/* Main photography with quote card inside */}
                <div className="aspect-square bg-church-navy relative flex items-center justify-center p-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=600&q=80" 
                    alt="Warmes Kerzenlicht" 
                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                  />
                  <div className="absolute inset-0 bg-church-navy/60" />
                  
                  <div className="relative z-10 text-center space-y-3">
                    <span className="font-serif text-lg font-bold text-white block italic leading-snug px-3">
                      „Manchmal beginnt Glaube nicht mit einer Antwort, sondern mit einer Frage.“
                    </span>
                    <div className="h-[1px] bg-church-gold w-12 mx-auto" />
                    <span className="font-mono text-[9px] uppercase text-church-gold tracking-widest font-extrabold block">#MehrAlsDuDenkst</span>
                  </div>
                </div>

                {/* Social icons bottom */}
                <div className="p-3 flex items-center justify-between text-gray-500 border-t border-gray-50">
                  <div className="flex space-x-3">
                    <Heart className="h-4 w-4 hover:text-red-500 cursor-pointer" />
                    <MessageCircle className="h-4 w-4 cursor-pointer" />
                    <Share2 className="h-4 w-4 cursor-pointer" />
                  </div>
                  <Bookmark className="h-4 w-4 cursor-pointer" />
                </div>

                {/* Caption stats text */}
                <div className="px-3 pb-3 pt-1 text-[9px] text-gray-600 space-y-1">
                  <p className="font-semibold text-church-navy">Gefällt 842 Mal</p>
                  <p className="leading-relaxed">
                    <span className="font-bold text-church-navy mr-1.5">katholische_kirche_heute</span>
                    Manchmal beginnt Glaube nicht mit einer Antwort, sondern mit einer Frage. 🕯️✨ 
                  </p>
                  <p className="text-indigo-600 font-mono text-[8px] font-semibold">#MehrAlsDuDenkst #KircheHeute #GlaubeUndFragen</p>
                </div>
              </div>
            </div>

            {/* Explanations and CTA */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase bg-church-gold/25 text-church-navy px-3 py-1 rounded-full font-bold">Social Media Kampagne</span>
              <h2 className="font-serif text-3xl font-bold text-church-navy">Instagram & TikTok Kachel</h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Diese Kachel ist optimal für quadratische Feeds gestaltet, lässt sich aber auch hervorragend in Storys oder Statusmeldungen einbetten. Der Fokus liegt ganz auf dem emotionalisierenden Kerzenlicht und der tiefen Aussage über das Recht auf Zweifel.
              </p>

              <div className="space-y-3 bg-church-bg p-5 rounded-[24px] border border-church-border text-xs text-gray-700">
                <p className="font-semibold font-mono text-xs">Kopierbarer Werbe-Text:</p>
                <p className="italic bg-white p-3 rounded-lg border border-gray-200">
                  Manchmal beginnt Glaube nicht mit einer Antwort, sondern mit einer Frage. 🕯️✨ #MehrAlsDuDenkst #KircheHeute #GlaubeUndFragen #Gemeinschaft #Hoffnung
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  id="copy-instagram-caption-btn"
                  onClick={handleCopyCaption}
                  className="px-5 py-3 bg-church-navy hover:bg-church-navy/95 text-white font-bold rounded-[16px] text-xs sm:text-sm flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                >
                  <span>{isCopied ? 'Kopiert! ✓' : 'Text & Hashtags kopieren'}</span>
                </button>
                <button
                  id="download-instagram-asset-btn"
                  onClick={() => triggerDownload('SocialMedia_Kachel_Post.png')}
                  className="px-5 py-3 bg-white hover:bg-gray-50 text-church-navy border border-church-border font-semibold rounded-[16px] text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Grafik (.PNG) herunterladen</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeMediaTab === 'flyer' && (
          <div className="space-y-6">
            <div className="bg-[#FAF7F0] p-6 rounded-3xl border border-church-border text-center max-w-xl mx-auto mb-4">
              <span className="text-xs font-mono uppercase bg-church-navy text-church-gold px-3 py-1 rounded-full font-bold">
                Kampagnenmedien • Falt-Flyer & Handzettel
              </span>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Der offizielle Handzettel entspricht exakt dem Kampagnenplakat „Mehr als du denkst.“. Sie können die hochauflösende Vektorgrafik direkt herunterladen und als hochwertigen Flyer oder Handzettel drucken.
              </p>
            </div>
            <OfficialCampaignPoster onDownloadClick={triggerDownload} />
          </div>
        )}
      </section>
    </div>
  );
}
