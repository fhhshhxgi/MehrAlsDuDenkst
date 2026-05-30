/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users2, 
  BookOpen, 
  HeartHandshake, 
  Music4, 
  MessageSquareHeart, 
  Search, 
  Compass, 
  Send, 
  CheckCircle2,
  Sparkle,
  ArrowRight,
  Sparkles,
  MapPin,
  CalendarRange
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LocalCommunity {
  plz: string;
  city: string;
  name: string;
  activities: string[];
}

export default function Mitmachen() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<LocalCommunity[] | null>(null);
  const [activeCompass, setActiveCompass] = useState<string>('ruhe');

  const compassTopics = {
    ruhe: {
      title: "Zeit zum Durchatmen",
      subtitle: "Ich suche Stille, Zuflucht & Kraft",
      icon: "🌿",
      text: "In einer reizüberfluteten Gesellschaft, geprägt von Leistungsdruck und ständiger Erreichbarkeit, ist bewusste Stille eine kostbare Ressource. Kirchengebäude sind historische Schutzräume, die ein bedingungsloses Verweilen jenseits aller Erwartungen ermöglichen.",
      tip: "Besuche eine geöffnete Kirche in deiner Nähe (beispielsweise die Münsterbasilika St. Vitus auf dem Abteiberg). Verweile einige Minuten in der Stille, lege digitale Geräte beiseite und lass die Architektur und das Lichtspiel auf dich wirken.",
      quote: "„Kommt alle zu mir, die ihr mühselig und beladen seid; ich will euch erquicken.“",
      source: "Matthäus-Evangelium 11,28"
    },
    zweifel: {
      title: "Zweifel gehören dazu",
      subtitle: "Ich habe Fragen & ehrliche Zweifel",
      icon: "💬",
      text: "Glaube erhebt nicht den Anspruch unfehlbarer Gewissheit. Kritische Fragen, Skepsis und theologische Zweifel sind legitime und bereichernde Bestandteile einer reflektierten Auseinandersetzung mit großen Lebensfragen.",
      tip: "Formuliere deine persönlich drängendste Sinnfrage. Unsere Dialogseite zu kritischen Fragen bietet hierzu fundierte Reflexionen, und unsere Ansprechpartner stehen bereit für ergebnisoffene Gespräche.",
      quote: "„Ich glaube; hilf meinem Unglauben!“",
      source: "Markus-Evangelium 9,24"
    },
    helfen: {
      title: "Anpacken und helfen",
      subtitle: "Ich möchte mich sozial engagieren",
      icon: "❤️",
      text: "Spiritualität konkretisiert sich im caritativen Handeln. Es gilt, gesellschaftliche Mitverantwortung auf Augenhöhe zu übernehmen und Mitmenschen, die sich in Notlagen befinden, respektvoll beizustehen.",
      tip: "Unterstütze lokale Netzwerke der Caritas, eine regionale Lebensmittelausgabe oder engagiere dich in ehrenamtlichen Nachbarschaftshilfen vor Ort.",
      quote: "„Was ihr für einen meiner geringsten Brüder getan habt, das habt ihr für mich getan.“",
      source: "Matthäus-Evangelium 25,40"
    },
    gemeinschaft: {
      title: "Zusammen ist man weniger allein",
      subtitle: "Ich suche Begegnung, Musik & Austausch",
      icon: "🙌",
      text: "Kein Mensch ist für die Isolation geschaffen. Gelebte Gemeinschaft fängt persönliche Belastungen auf, teilt Lebensfreude und stiftet verlässliche Netze gegenseitigen Vertrauens.",
      tip: "Nimm Kontakt zu Chören, Musikprojekten oder den zahlreichen Jugendverbänden wie der KJG oder den Pfadfindern auf. Das gemeinsame Tun stiftet unmittelbare Verbindung.",
      quote: "„Wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen.“",
      source: "Matthäus-Evangelium 18,20"
    }
  };

  const localDatabases: LocalCommunity[] = [
    {
      plz: '41061',
      city: 'Mönchengladbach (Mitte)',
      name: 'Münsterpfarrei St. Vitus & Jugendkirche Mönchengladbach',
      activities: ['Abendgottesdienst mit Kerzenschein im Münster', 'Jugendtreff "Ökumenisches Café" jeden Mittwoch', 'Pfadfinderstamm MG-Mitte']
    },
    {
      plz: '41236',
      city: 'Mönchengladbach-Rheydt',
      name: 'Hauptkirche Rheydt & St. Marien',
      activities: ['Gospelchor-Probe "Hope & Glory" jeden Donnerstag', 'Caritas-Suppenküche Rheydt', 'Jugendzeltlager der KJG Rheydt']
    },
    {
      plz: '41189',
      city: 'Mönchengladbach-Wickrath',
      name: 'Pfarrgemeinde St. Antonius Wickrath',
      activities: ['Senioren-Nachmittag & Erzählcafe', 'Jugendgruppenstunde KJG Wickrath', 'Nachbarschaftsnetzwerk Wickrath hilft']
    },
    {
      plz: '41179',
      city: 'Mönchengladbach-Rheindahlen',
      name: 'St. Helena Rheindahlen',
      activities: ['Taizé-Gebetskreis jeden ersten Freitag', 'Messdienergemeinschaft Rheindahlen e.V.', 'Kleiderkammer Rheindahlen']
    },
    {
      plz: '41352',
      city: 'Korschenbroich (Umgebung)',
      name: 'St. Andreas Korschenbroich',
      activities: ['Familien-Fahrrad-Wallfahrt nach Kevelaer', 'Kirchenchor Cäcilia Korschenbroich', 'Jugendgruppenstunden ab 12 Jahren']
    },
    {
      plz: '41747',
      city: 'Viersen (Umgebung)',
      name: 'St. Remigius Viersen',
      activities: ['Jugendcafe Viersen "Die Box"', 'Obdachlosenhilfe Viersen e.V.', 'Mittelalterliche Orgelmusik am Samstag']
    },
    {
      plz: '41812',
      city: 'Erkelenz (Umgebung)',
      name: 'St. Lambertus Erkelenz',
      activities: ['Kinder- und Jugendchororchester', 'Seniorennachbarschaftshilfe', 'Zeltlager-Planungstreffen']
    },
    {
      plz: '41363',
      city: 'Jüchen (Umgebung)',
      name: 'St. Jakobus Jüchen',
      activities: ['Pilgerwandern für alle Altersstufen', 'Jugend-Gitarrengruppe am Dienstag', 'Caritas-Seniorenbesuchsdienst']
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const matches = localDatabases.filter(
      c => c.plz.includes(query) || c.city.toLowerCase().includes(query)
    );
    setSearchResults(matches);
  };

  const categories = [
    {
      title: 'Jugendgruppen',
      desc: 'Pfadfinderstämme, Messdienergemeinschaften und KJG-Kreise bieten Räume der Selbstbestimmung, in denen junge Menschen Verantwortung für sich und das Gemeinwesen erproben können.',
      icon: <Users2 className="h-5 w-5 text-indigo-400" />
    },
    {
      title: 'Gottesdienste besuchen',
      desc: 'Kirchen stehen allen Menschen uneingeschränkt offen. Du bist herzlich eingeladen, Gottesdienste unvoreingenommen mitzufeiern, Orgelklängen zu lauschen oder eine Kerze zu entzünden.',
      icon: <BookOpen className="h-5 w-5 text-emerald-400" />
    },
    {
      title: 'Soziale Aktionen',
      desc: 'Lebensmittelverteilung, Unterstützung für in Not geratene Familien oder ökologische Projekte vor Ort: In zahlreichen Initiativen kannst du dich tatkräftig einbringen.',
      icon: <HeartHandshake className="h-5 w-5 text-amber-400" />
    },
    {
      title: 'Klang & Musik',
      desc: 'Vom klassischen Kantatenchor über Orgelkonzerte bis hin zu modernen Jugendbands und meditativen Taizé-Gesängen verbindet die Musik über Generationen hinweg.',
      icon: <Music4 className="h-5 w-5 text-sky-400" />
    },
    {
      title: 'Offene Gespräche',
      desc: 'In existentiellen Lebenskrisen, Partnerschaftskonflikten oder seelischen Belastungen stehen dir unsere Seelsorger unter Schweigepflicht als vertrauensvolle Partner zur Seite.',
      icon: <MessageSquareHeart className="h-5 w-5 text-pink-400" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 relative overflow-visible">
      
      {/* Background glow lamps circles */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-church-gold/6 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#1D4ED8]/4 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Banner Header with Unsplash Backing (Community bonfire & twilight friendship) */}
      <div className="relative w-full overflow-hidden bg-[#071320] py-12 sm:py-20 text-center rounded-[40px] shadow-lg mb-12 select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/60 via-[#0A1724]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Users2 className="h-3.5 w-3.5 text-church-gold shrink-0" />
            <span>Gemeinschaft</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Wege der <span className="text-church-gold italic font-normal font-serif">Begegnung finden</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Du musst nicht getauft sein, musst nicht jede theologische These verstehen und du musst nicht perfekt sein. Wenn dich Neugier oder das Bedürfnis nach Gemeinschaft treiben, bist du hier jederzeit willkommen.
          </motion.p>
        </div>
      </div>

      {/* Pathways Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            className="bg-white p-8 rounded-[36px] border border-church-border shadow-sm hover:border-church-gold/35 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group hover:scale-[1.01] select-none"
          >
            <div className="space-y-4">
              <div className="bg-church-bg group-hover:bg-[#FCFAEE] p-3.5 rounded-2xl w-fit transition-all duration-300">
                {cat.icon}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-church-navy group-hover:text-church-gold transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-650 text-xs sm:text-sm leading-relaxed font-light">
                {cat.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1 text-[11px] text-church-navy font-mono uppercase tracking-wider font-semibold">
              <Sparkle className="h-3.5 w-3.5 text-church-gold" />
              <span>Jederzeit offen</span>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 2: INTERACTIVE PARISH FINDER REGIONAL FINDER */}
      <section className="bg-church-navy text-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-white/5 select-none text-left">
        <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase bg-church-gold/25 text-church-gold px-4 py-1.5 rounded-full font-bold w-fit flex items-center gap-2 border border-church-gold/30">
              <MapPin className="h-3.5 w-3.5" />
              Ortssuche • Mönchengladbach &amp; Umland
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Kirchengemeinden vor Ort entdecken
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm font-light leading-relaxed">
              Gib einen Stadtteil oder eine Postleitzahl ein (z. B. <strong className="text-church-gold">Stadtmitte 41061, Rheydt 41236, Wickrath 41189, Rheindahlen 41179, Korschenbroich 41352, Viersen 41747, Erkelenz 41812, Jüchen 41363</strong>), um Chorgemeinschaften, Jugendtreffs und Hilfsaktionen anzuzeigen:
            </p>
          </div>

          {/* Search form bar with neon gold focus glow */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 max-w-lg">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="parish-search-input"
                type="text"
                value={searchQuery}
                aria-label="PLZ oder Stadtteil eingeben"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="PLZ oder Ortsteil (z.B. Rheydt, 41061)..."
                className="w-full bg-white text-church-navy pl-12 pr-4 py-3.5 rounded-full outline-hidden font-semibold text-sm border-2 border-transparent focus:border-church-gold focus:ring-4 focus:ring-church-gold/20 shadow-md"
              />
            </div>
            <button
              id="parish-search-submit-btn"
              type="submit"
              className="px-6 py-3.5 bg-church-gold hover:bg-church-gold-hover text-church-navy font-bold rounded-full text-sm transition-all shadow-lg shrink-0 cursor-pointer hover:scale-[1.02]"
            >
              Umland durchsuchen
            </button>
          </form>

          {/* Dynamic search results list */}
          <AnimatePresence>
            {searchResults !== null && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/10 p-6 rounded-[28px] border border-white/10 space-y-4 max-w-xl"
              >
                {searchResults.length > 0 ? (
                  searchResults.map((comm, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <h4 className="font-serif font-bold text-lg text-church-gold">
                          {comm.name}
                        </h4>
                        <span className="font-mono text-[10px] bg-white/15 px-2.5 py-1 rounded-full uppercase font-bold text-gray-200">
                          {comm.plz} {comm.city}
                        </span>
                      </div>
                      <p className="text-[10px] text-[10px] text-gray-300 font-mono tracking-widest uppercase font-extrabold">Aktuelle Wochentermine:</p>
                      <ul className="text-xs space-y-2 pl-4 list-disc text-gray-200 font-light leading-relaxed">
                        {comm.activities.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="text-left text-xs sm:text-sm text-gray-300 py-4 font-serif leading-relaxed">
                    💡 <strong>Der Finder ist regional auf Mönchengladbach &amp; Umland eingegrenzt.</strong><br />
                    Tippe Test-Stationen ein wie: <span className="text-church-gold font-bold">Rheydt, Wickrath, Rheindahlen, Stadtmitte</span> oder Nachbarprovinzen wie <span className="text-church-gold font-bold">Korschenbroich, Viersen, Erkelenz, Jüchen</span>.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE GUIDED COMPASS */}
      <section className="bg-white p-6 sm:p-12 rounded-[40px] shadow-xl border border-church-border text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left panel: Tab select buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase bg-church-navy/5 text-church-navy px-3.5 py-1 rounded-full font-bold w-fit flex items-center gap-1.5 border border-church-navy/10">
                <Compass className="h-3 w-3 text-church-gold animate-pulse" />
                Impuls-Kompass
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-church-navy leading-tight">
                Glaube bedeutet, Schritte zu wagen. Wo stehst du heute?
              </h3>
              <p className="text-gray-650 text-xs sm:text-sm font-light leading-relaxed">
                Wähle deinen Impuls-Kompass für den Tag, um einen stärkenden Impuls und konkrete Vorschläge für deinen Alltag in Mönchengladbach zu erhalten:
              </p>
            </div>

            <div className="space-y-3">
              {Object.entries(compassTopics).map(([key, item]) => {
                const isActive = activeCompass === key;
                return (
                  <button
                    key={key}
                    id={`compass-tab-${key}`}
                    onClick={() => setActiveCompass(key)}
                    className={`w-full text-left py-4 px-5 rounded-[22px] transition-all flex items-center gap-4 border cursor-pointer duration-300 ${
                      isActive 
                        ? 'bg-church-navy text-white border-church-navy shadow-lg shadow-church-navy/15 font-bold' 
                        : 'bg-church-bg/15 text-gray-700 border-transparent hover:bg-church-bg'
                    }`}
                  >
                    <span className="text-xl shrink-0 transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                    <div className="text-left leading-tight">
                      <p className={`text-xs font-bold font-serif ${isActive ? 'text-white' : 'text-church-navy'}`}>
                        {item.title}
                      </p>
                      <p className={`text-[10px] ${isActive ? 'text-gray-300' : 'text-gray-500'} font-medium`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Response details card with active transition */}
          <div className="lg:col-span-7 bg-church-bg/30 border border-church-border rounded-[32px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {(() => {
                const activeData = compassTopics[activeCompass as keyof typeof compassTopics];
                if (!activeData) return null;
                
                return (
                  <motion.div
                    key={activeCompass}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      {/* Subtitle Header Badge */}
                      <div className="flex items-center gap-2 text-church-navy font-bold text-sm">
                        <span className="text-2xl shrink-0">{activeData.icon}</span>
                        <span className="font-serif text-lg sm:text-xl text-church-navy font-black">
                          {activeData.title}
                        </span>
                      </div>

                      {/* Main explanation */}
                      <p className="text-gray-650 text-xs sm:text-sm leading-relaxed font-light">
                        {activeData.text}
                      </p>

                      {/* Practical Local Action Idea Card */}
                      <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-2 shadow-sm text-left">
                        <p className="text-[9px] font-mono font-black uppercase text-church-gold tracking-widest flex items-center gap-1">
                          <Sparkle className="h-3 w-3" />
                          Idee für heute (Mönchengladbach / Rheydt)
                        </p>
                        <p className="text-xs text-gray-700 leading-normal font-light">
                          {activeData.tip}
                        </p>
                      </div>
                    </div>

                    {/* Biblical Reflection quote block */}
                    <div className="border-t border-gray-100 pt-5 mt-4 text-left">
                      <p className="text-xs sm:text-sm text-church-navy font-serif italic font-medium leading-relaxed">
                        {activeData.quote}
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono mt-1 font-bold">
                        — {activeData.source}
                      </p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
