/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Flame, Heart, HeartHandshake, ShieldAlert, Sparkle } from 'lucide-react';
import { motion } from 'motion/react';

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
      tabLabel: 'Wenn du nicht weiterweißt',
      title: 'Halt in Sturmzeiten finden',
      lead: 'Wenn Angst, Trauer oder akute Lebenskrisen dir den Boden unter den Füßen wegreißen.',
      details: [
        'Zuhören ohne Vorurteile: Unsere Seelsorger stehen rund um die Uhr beratend und im absoluten Vertrauen an deiner Seite.',
        'Ein Ventil für die Seele: In Kirchen darfst du weinen, im Schweigen verharren, eine Kerze anzünden oder deine Sorgen aufschreiben.',
        'Erinnerung, dass Leid nicht das Ende ist: Der christliche Glaube schenkt uns die Zusage, dass Leid und Tod niemals das letzte Wort behalten.'
      ],
      icon: <ShieldAlert className="h-5 w-5" />,
      encouragement: 'Du musst nicht stark sein, um dazuzugehören. Auch Zweifel und Tränen haben bei uns eine Heimat.'
    },
    {
      id: 'hope',
      tabLabel: 'Wenn du Hoffnung brauchst',
      title: 'Du bist bedingungslos kostbar',
      lead: 'Wenn du dich wertlos, erschöpft, ausgebrannt oder isoliert von der Welt fühlst.',
      details: [
        'Kein Mensch ist ein Unfall: Du bist gewollt, geschaffen aus Liebe und mit unverwechselbarer Würde gesegnet – völlig unabhängig von deiner Leistung.',
        'Nie ganz verloren: Die Zusage Gottes lautet: Ich bin mit dir, auch in den tiefsten Tälern, wo kein Mensch dich mehr hört.',
        'Ein Neuanfang ist immer möglich: Fehler, Sackgassen und Brüche definieren dich nicht abschließend. Vergebung gibt dir Kraft für neue Wege.'
      ],
      icon: <Sparkles className="h-5 w-5" />,
      encouragement: 'Glaube sagt: Du bist gedacht, geliebt und gesehen – genau so, wie du jetzt gerade bist.'
    },
    {
      id: 'morality',
      tabLabel: 'Wenn du Werte suchst',
      title: 'Ein innerer Kompass im Alltag',
      lead: 'Wenn die Welt immer komplexer wird und du nach verlässlichen Maßstäben und Orientierung suchst.',
      details: [
        'Nächstenliebe als Standard: Andere Menschen so zu sehen und zu behandeln, wie man selbst geschätzt werden möchte.',
        'Vergebung als Befreiung: Groll und Verbitterung vergiften das eigene Leben. Vergebung öffnet Türen zu echter, innerer Freiheit.',
        'Soziale Verantwortung: Aktiv gegen Ungerechtigkeit, Armut und Diskriminierung aufstehen und die Erde für kommende Generationen bewahren.'
      ],
      icon: <Heart className="h-5 w-5" />,
      encouragement: 'Werte sind keine Fesseln, sondern nützliche Leitplanken, die uns ein friedliches Zusammenleben ermöglichen.'
    },
    {
      id: 'belonging',
      tabLabel: 'Wenn du Gemeinschaft suchst',
      title: 'Ein Ort des reinen Dazugehörens',
      lead: 'Wenn du echte Begegnungen suchst statt nur digitaler Likes und oberflächlicher Kontakte.',
      details: [
        'Kein gesellschaftlicher Leistungsdruck: Bei uns musst du dich nicht vermarkten oder verstellen. Du zählst einfach als Mensch.',
        'Gemeinsam stark: In Jung und Alt, lokalen Gruppen und engagierten Kreisen teilen wir Lebensgeschichten, Sorgen und Freude.',
        'Ein offenes Zuhause: Wo auch immer du hingehst – in fast jeder Nachbarschaft findest du eine Kirchengemeinde mit offenen Türen.'
      ],
      icon: <HeartHandshake className="h-5 w-5" />,
      encouragement: 'Komm einfach dazu, wie du bist. Neugier und Skepsis sind uns gleichermaßen willkommen.'
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Intro section */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Lebendiger Glaube
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Glaube im Alltag erfahren
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Viele Menschen verbinden Glaube ausschließlich mit festen Traditionen oder feierlichen Bräuchen. Aber Glaube entfaltet seine eigentliche Relevanz im realen, oft chaotischen Alltag – als innere Kraftquelle, leiser Ratgeber und tröstender Rückhalt.
        </p>
      </section>

      {/* Interactive Tabs Layout */}
      <section className="bg-white rounded-[40px] shadow-sm border border-church-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-fade-in">
        {/* Navigation Column */}
        <div className="lg:col-span-4 bg-church-navy p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Wie geht es dir heute?</h3>
            <p className="text-xs text-gray-300 mb-6">Wähle deinen aktuellen Gemütszustand:</p>
            
            <div className="space-y-2">
              {scenarios.map((sc) => {
                const isActive = activeTab === sc.id;
                return (
                  <button
                    id={`alltag-tab-btn-${sc.id}`}
                    key={sc.id}
                    onClick={() => setActiveTab(sc.id)}
                    className={`w-full text-left px-4 py-3 rounded-[16px] text-xs font-semibold transition-all duration-200 flex items-center space-x-3 cursor-pointer ${
                      isActive
                        ? 'bg-church-gold text-church-navy shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {sc.icon}
                    <span>{sc.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 hidden lg:block">
            <p className="text-xs text-gray-400 font-mono">
              Katholische Kirche<br />Mehr als du denkst.
            </p>
          </div>
        </div>

        {/* Content Details Panel Column */}
        <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-church-gold">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="font-mono text-xs uppercase font-extrabold tracking-widest">Wegbegleiter</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-church-navy leading-tight">
              {currentScenario.title}
            </h2>

            <p className="text-gray-700 font-medium text-xs sm:text-base italic bg-church-bg p-4 rounded-xl border-l-4 border-church-gold border border-church-border">
              {currentScenario.lead}
            </p>

            <div className="space-y-3 pt-2">
              {currentScenario.details.map((detail, index) => {
                const [heading, text] = detail.split(': ');
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="bg-church-gold/20 text-church-navy p-1 rounded-full mt-1 shrink-0">
                      <Sparkle className="h-3 w-3 text-church-gold" />
                    </span>
                    <p className="text-gray-650 text-xs sm:text-sm leading-relaxed">
                      <strong>{heading}:</strong> {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 pt-4 border-t border-church-border bg-church-gold/10 p-5 rounded-[24px] flex flex-col sm:flex-row items-center gap-4 border border-church-border">
            <div className="bg-white p-2 text-church-navy rounded-full shrink-0 shadow-xs">
              <Flame className="h-4 w-4 text-church-gold animate-bounce" />
            </div>
            <p className="text-xs sm:text-sm font-serif italic text-church-navy text-center sm:text-left leading-relaxed">
              {currentScenario.encouragement}
            </p>
          </div>
        </div>
      </section>

      {/* EXPLANATORY ELEMENT (ALLTÄGLICHE PRAXIS DES GLAUBENS) */}
      <section className="bg-white rounded-[40px] border border-church-border p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-bold">
            Gelebte Kultur im Alltag
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-church-navy">
            Wie Glaube im Alltag konkret aussieht
          </h2>
          <p className="text-gray-650 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Es braucht keine katholischen Prachtbauten, um Glauben Raum zu geben. Im alltäglichen Leben drückt sich Spiritualität durch einfache, kraftspendende Gewohnheiten aus:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">🙏</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Momente des Innehaltens</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Morgens beim Kaffeetrinken oder abends beim bewussten Rückblick auf den Tag: Kleine Momente der Ruhe helfen dabei, das Leben bewusster wahrzunehmen und wertzuschätzen.
            </p>
          </div>
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">💡</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Der moralische Nordstern</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              In täglichen Interaktionen mit Arbeitskollegen oder der Familie besinnen sich Millionen von Menschen auf christliche Grundwerte wie Fairness, Aufrichtigkeit, Nächstenliebe und Zuverlässigkeit.
            </p>
          </div>
          <div className="bg-church-bg p-6 rounded-3xl border border-church-border space-y-3 shadow-xs">
            <span className="text-2xl block">🌱</span>
            <h4 className="font-serif font-bold text-church-navy text-sm sm:text-base">Sichtbare Nächstenliebe</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Schlichte, alltägliche Gesten – Hilfsbedürftigen Unterstützung geben, ein aufmerksames Wort oder das Mitwirken in lokalen sozialen Kreisen – sind der ehrlichste Beweis christlichen Engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Strong Highlight Banner */}
      <section className="bg-church-navy text-white text-center py-12 px-6 sm:px-12 rounded-[40px] relative overflow-hidden shadow-md border border-church-navy">
        <div className="absolute top-0 right-0 w-36 h-36 bg-church-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-mono uppercase text-church-gold tracking-widest font-extrabold">Ehrlicher Glaube</p>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-gray-100">
            „Glaube bedeutet nicht, auf jede einzelne Frage eine fertige Antwort zu besitzen. Glaube bedeutet, mit aufrichtiger Hoffnung weiterzufragen.“
          </blockquote>
          <div className="h-[2px] bg-church-gold w-12 mx-auto mt-4" />
        </div>
      </section>

    </div>
  );
}
