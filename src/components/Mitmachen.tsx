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
  Sparkle
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
    // Filter matches
    const matches = localDatabases.filter(
      c => c.plz.includes(query) || c.city.toLowerCase().includes(query)
    );
    setSearchResults(matches);
  };



  const categories = [
    {
      title: 'Jugendgruppen',
      desc: 'Pfadfinderstämme, Messdienergemeinschaften und KJG-Kreise bieten Räume der Selbstbestimmung, in denen junge Menschen Verantwortung für sich und das Gemeinwesen erproben können.',
      icon: <Users2 className="h-5 w-5 text-indigo-600" />
    },
    {
      title: 'Gottesdienste besuchen',
      desc: 'Kirchen stehen allen Menschen uneingeschränkt offen. Du bist herzlich eingeladen, Gottesdienste unvoreingenommen mitzufeiern, Orgelklängen zu lauschen oder eine Kerze zu entzünden.',
      icon: <BookOpen className="h-5 w-5 text-emerald-600" />
    },
    {
      title: 'Soziale Aktionen',
      desc: 'Lebensmittelverteilung, Unterstützung für in Not geratene Familien oder ökologische Projekte vor Ort: In zahlreichen Initiativen kannst du dich tatkräftig einbringen.',
      icon: <HeartHandshake className="h-5 w-5 text-amber-600" />
    },
    {
      title: 'Klang & Musik',
      desc: 'Vom klassischen Kantatenchor über Orgelkonzerte bis hin zu modernen Jugendbands und meditativen Taizé-Gesängen verbindet die Musik über Generationen hinweg.',
      icon: <Music4 className="h-5 w-5 text-sky-600" />
    },
    {
      title: 'Offene Gespräche',
      desc: 'In existentiellen Lebenskrisen, Partnerschaftskonflikten oder seelischen Belastungen stehen dir unsere Seelsorger unter Schweigepflicht als vertrauensvolle Partner zur Seite.',
      icon: <MessageSquareHeart className="h-5 w-5 text-pink-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* SECTION 1: HEADER & CONNECTION PATHWAYS */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase bg-church-gold/20 text-church-navy px-3 py-1 rounded-full font-semibold">
          Wege der Begegnung
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-church-navy mt-3">
          Verbindung knüpfen
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
          Du musst nicht katholisch getauft sein, du musst nicht jede theologische These verstehen und du musst nicht perfekt sein. Wenn dich Neugier oder das Bedürfnis nach Gemeinschaft treiben, stehen unsere Türen offen.
        </p>
      </section>
 
      {/* Pathways Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            className="bg-white p-8 rounded-[32px] border border-church-border shadow-sm hover:border-church-navy/30 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="bg-church-bg p-3.5 rounded-[16px] w-fit">
                {cat.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-church-navy">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-1 text-xs text-church-gold font-mono uppercase">
              <Sparkle className="h-3.5 w-3.5" />
              <span>Jederzeit offen</span>
            </div>
          </div>
        ))}
      </section>
 
      {/* SECTION 2: INTERACTIVE PARISH FINDER (LOCAL PARISHES DATABASES) */}
      <section className="bg-church-navy text-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-sm border border-church-navy">
        <div className="absolute top-0 right-0 w-44 h-44 bg-church-gold/10 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono uppercase bg-church-gold/20 text-church-gold px-3.5 py-1 rounded-full font-bold">
              Interaktive Ortssuche (Mönchengladbach & Umgebung)
            </span>
            <h2 className="font-serif text-3xl font-bold">Kirche in Mönchengladbach & Umgebung finden</h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Gib einen Stadtteil oder eine lokale Postleitzahl ein (z. B. <i>Stadtmitte 41061, Rheydt 41236, Wickrath 41189, Rheindahlen 41179, Korschenbroich 41352, Viersen 41747, Erkelenz 41812, Jüchen 41363</i>), um aktive Jugendangebote, Chorgemeinschaften und Begegnungsorte anzuzeigen:
            </p>
          </div>
 
          {/* Search form bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="parish-search-input"
                type="text"
                value={searchQuery}
                aria-label="Ort oder PLZ eingeben"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="PLZ oder Ortsteil (z.B. Rheydt, 41061)..."
                className="w-full bg-white text-church-navy pl-12 pr-4 py-3 rounded-full outline-hidden font-medium text-sm border-2 border-transparent focus:border-church-gold"
              />
            </div>
            <button
              id="parish-search-submit-btn"
              type="submit"
              className="px-6 py-3 bg-church-gold hover:bg-church-gold-hover text-church-navy font-bold rounded-full text-sm transition-all shadow-md shrink-0 cursor-pointer"
            >
              Umland durchsuchen
            </button>
          </form>
 
          {/* Dynamic search results list */}
          <AnimatePresence>
            {searchResults !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/10 p-6 rounded-[24px] border border-white/20 space-y-4 max-w-xl mx-auto"
              >
                {searchResults.length > 0 ? (
                  searchResults.map((comm, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <h4 className="font-serif font-bold text-lg text-church-gold">
                          {comm.name}
                        </h4>
                        <span className="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">
                          {comm.plz} {comm.city}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 font-mono">Aktuelle Angebote in dieser Woche:</p>
                      <ul className="text-xs space-y-1.5 pl-4 list-disc text-gray-200">
                        {comm.activities.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-sm text-gray-300 py-4 font-serif">
                    💡 <strong>Der Finder ist regional auf Mönchengladbach & Umgebung begrenzt.</strong><br />
                    Bitte versuche Stadtteile wie <strong>Rheydt, Wickrath, Rheindahlen, Stadtmitte</strong> oder Nachbarorte wie <strong>Korschenbroich, Viersen, Erkelenz, Jüchen</strong>.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE GUIDED COMPASS (REPLACES EMAIL CONTACT FORM) */}
      <section className="bg-white p-8 sm:p-12 rounded-[40px] shadow-sm border border-church-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left panel: Tab select buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase bg-church-navy/10 text-church-navy px-3.5 py-1 rounded-full font-bold">
                Interaktiver Impuls-Kompass
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-church-navy leading-tight">
                Glaube bedeutet, Schritte zu wagen. Wo stehst du heute?
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Wähle eine Orientierung oder ein persönliches Bedürfnis aus, um einen stärkenden Impuls und konkrete Ideen für den Alltag in Mönchengladbach zu erhalten:
              </p>
            </div>

            <div className="space-y-2.5">
              {Object.entries(compassTopics).map(([key, item]) => {
                const isActive = activeCompass === key;
                return (
                  <button
                    key={key}
                    id={`compass-tab-${key}`}
                    onClick={() => setActiveCompass(key)}
                    className={`w-full text-left py-3.5 px-5 rounded-[20px] transition-all flex items-center gap-3.5 border cursor-pointer ${
                      isActive 
                        ? 'bg-church-navy text-white border-church-navy shadow-md shadow-church-navy/10' 
                        : 'bg-church-bg/40 text-gray-700 border-transparent hover:bg-church-bg'
                    }`}
                  >
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="text-left leading-tight">
                      <p className={`text-xs font-bold ${isActive ? 'text-white' : 'text-church-navy'}`}>
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
          <div className="lg:col-span-7 bg-church-bg/40 border border-church-border rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-church-gold/5 rounded-full blur-2xl" />
            
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
                        <span className="text-xl">{activeData.icon}</span>
                        <span className="font-serif text-lg text-church-navy font-black">
                          {activeData.title}
                        </span>
                      </div>

                      {/* Main explanation */}
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {activeData.text}
                      </p>

                      {/* Practical Local Action Idea Card */}
                      <div className="bg-white border border-gray-100 rounded-2xl p-4 space-y-2 shadow-xs">
                        <p className="text-[9px] font-mono font-black uppercase text-church-gold tracking-wider">
                          Idee für heute (Mönchengladbach & Umland)
                        </p>
                        <p className="text-xs text-gray-700 leading-normal">
                          {activeData.tip}
                        </p>
                      </div>
                    </div>

                    {/* Biblical Reflection quote block */}
                    <div className="border-t border-gray-100 pt-5 mt-4">
                      <p className="text-xs text-church-navy font-serif italic font-medium">
                        {activeData.quote}
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono mt-1">
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
