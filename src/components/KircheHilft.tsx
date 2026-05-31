/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Heart, 
  Hand, 
  Home, 
  Flame, 
  Globe2, 
  Coins, 
  Activity, 
  ShieldCheck, 
  Award,
  Sparkle,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface ImpactCard {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  desc: string;
  example: string;
  stats: string;
  unsplashUrl: string;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function KircheHilft() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards: ImpactCard[] = [
    {
      id: 'armut',
      title: 'Armut bekämpfen',
      category: 'Nächstenliebe',
      icon: <Heart className="h-5 w-5" />,
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      iconColor: 'text-rose-400',
      desc: 'Unmittelbare und unbürokratische Unterstützung für Menschen in prekären Lebenslagen oder ohne festen Wohnsitz. Wärmestuben, Kleiderkammern und Lebensmittelausgaben sichern die existentiellen Grundbedürfnisse.',
      example: 'Lokale Ausgabestellen versorgen wöchentlich Hunderte Hilfebedürftige mit Mahlzeiten und bieten unvoreingenommenen, herzlichen Lebensraum.',
      stats: 'Hunderttausende Essensausgaben jährlich',
      unsplashUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'kranke',
      title: 'Kranke & Alte begleiten',
      category: 'Tätige Hilfe',
      icon: <Hand className="h-5 w-5" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      iconColor: 'text-emerald-400',
      desc: 'Präventive Angebote gegen die Vereinsamung im Alter, Unterstützung in der häuslichen Pflege sowie die würdevolle Begleitung sterbenskranker Menschen und ihrer Angehörigen.',
      example: 'Ambulante Hospizdienste und liebevolle Seniorenbesuchskreise schenken kostbare Zeit, hören geduldig zu und spenden echten Beistand.',
      stats: 'Tausende Pflegestationen und Besuchskreise',
      unsplashUrl: 'https://images.unsplash.com/photo-1773227055624-07b515ba87c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'kinder',
      title: 'Kinder & Jugend stärken',
      category: 'Schutzräume',
      icon: <Home className="h-5 w-5" />,
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
      iconColor: 'text-indigo-400',
      desc: 'Flächendeckende Trägerschaften von Kindertagesstätten, offene Kinder- und Jugendarbeit sowie erlebnispädagogische Angebote schaffen geschützte Räume zur freien persönlichen Entfaltung.',
      example: 'Demokratische Jugendverbände organisieren partnerschaftlich bezuschusste Ferienlager, um soziale Chancengleichheit für alle aktiv zu sichern.',
      stats: 'Größter freier Träger von Kitas und Erziehung',
      unsplashUrl: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'krisen',
      title: 'Halt in akuten Krisen',
      category: 'Hoffnung spenden',
      icon: <Flame className="h-5 w-5" />,
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      iconColor: 'text-amber-400',
      desc: 'Professionelle, kostenfreie und anonyme Beratungsangebote bei familiären Konflikten, schweren Paarkrisen, Schwangerschaftskonflikten oder seelischen Belastungen.',
      example: 'Die TelefonSeelsorge ist an 365 Tagen im Jahr rund um die Uhr als absolut vertraulicher, kostenfreier Ansprechpartner für dich da.',
      stats: 'Telefonseelsorge: 24/7 kostenfrei erreichbar',
      unsplashUrl: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'weltweit',
      title: 'Weltweite Verantwortung',
      category: 'Globale Gerechtigkeit',
      icon: <Globe2 className="h-5 w-5" />,
      iconBg: 'bg-sky-500/10 border-sky-500/20',
      iconColor: 'text-sky-400',
      desc: 'Weltweite Entwicklungszusammenarbeit und akute Notfallhilfe bei schweren Hungersnöten, Kriegen sowie Naturkatastrophen zur nachhaltigen Förderung von Bildung und Menschenrechten.',
      example: 'Hilfswerke wie Misereor oder Adveniat stärken durch finanzielle Hilfe zur Selbsthilfe direkt lokale Strukturen im globalen Süden.',
      stats: 'Millionen Menschen in 100+ Ländern unterstützt',
      unsplashUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 relative overflow-visible">
      
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-church-gold/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cinematic Banner Header with Unsplash Backing */}
      <div className="relative w-full overflow-hidden bg-church-navy py-12 sm:py-20 text-center rounded-[40px] shadow-lg select-none group border border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-65 scale-105 transition-all duration-1000 group-hover:scale-100" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061524]/70 via-[#0E2942]/90 to-church-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-church-gold/15 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-church-gold/20 border border-church-gold/30 text-church-gold text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Sparkle className="h-3.5 w-3.5 text-church-gold shrink-0" />
            <span>Gesellschaftliches Gewissen</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Solidarität ist kein Zusatzprodukt.<br />Sie ist <span className="text-church-gold italic font-normal font-serif">unser Fundament</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Glaube erschöpft sich nicht in stiller Theorie – er erweist sich in der Tat. Mit starken Wohlfahrtsverbänden wie der <strong className="text-church-gold font-semibold">Caritas</strong> gehört die kirchliche Gemeinschaft zu den tatkräftigsten Säulen unseres Sozialgefüges. Hier wird Nächstenliebe täglich greifbar gemacht.
          </motion.p>
        </div>
      </div>

      {/* Dynamic numeric score banners with micro border designs */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        <motion.div variants={cardVariants} className="bg-white p-6 rounded-[28px] border border-church-border shadow-sm text-left relative overflow-hidden group hover:border-church-gold/30 transition-all duration-300">
          <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-church-navy">1,2 Mio.</span>
          <span className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider mt-1 block">Ehrenamtliche bundesweit</span>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-church-gold" />
        </motion.div>
        <motion.div variants={cardVariants} className="bg-white p-6 rounded-[28px] border border-church-border shadow-sm text-left relative overflow-hidden group hover:border-church-gold/30 transition-all duration-300">
          <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-church-navy">ca. 8.000</span>
          <span className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider mt-1 block">Gemeindeeigene Kitas</span>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </motion.div>
        <motion.div variants={cardVariants} className="bg-white p-6 rounded-[28px] border border-church-border shadow-sm text-left relative overflow-hidden group hover:border-church-gold/30 transition-all duration-300">
          <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-church-navy">24 Std.</span>
          <span className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider mt-1 block">Erreichbare Krisenseelsorge</span>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
        </motion.div>
        <motion.div variants={cardVariants} className="bg-white p-6 rounded-[28px] border border-church-border shadow-sm text-left relative overflow-hidden group hover:border-church-gold/30 transition-all duration-300">
          <span className="block font-serif text-3xl sm:text-4xl font-extrabold text-church-navy">100 %</span>
          <span className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider mt-1 block">Gemeinnützig &amp; transparent</span>
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </motion.div>
      </motion.section>

      {/* SECTION 2: THE DETAILED IMPACT CARDS */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((card) => {
          const isHovered = hoveredCard === card.id;
          return (
            <motion.div
              variants={cardVariants}
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-[32px] border border-church-border shadow-sm hover:border-church-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden select-none"
            >
              {/* Image card background with top fade */}
              <div className="relative h-44 overflow-hidden rounded-t-[30px] shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url("${card.unsplashUrl}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                
                {/* Visual Category Label */}
                <span className="absolute top-4 left-4 text-[9px] font-mono font-bold text-white bg-church-navy/80 tracking-widest px-2.5 py-1 rounded-full uppercase border border-white/10">
                  {card.category}
                </span>

                {/* Corner detail icon indicator */}
                <span className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 border border-white/10 p-1.5 rounded-lg">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Main Information */}
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between text-left relative z-10 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`p-1.5 rounded-lg border ${card.iconBg} ${card.iconColor} shrink-0`}>
                      {card.icon}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-church-navy group-hover:text-church-gold transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-gray-650 text-xs sm:text-sm leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {/* Real practical example box */}
                  <div className="bg-church-bg/40 p-4 rounded-[20px] text-xs text-gray-600 border border-church-border leading-relaxed font-light">
                    <strong className="text-church-navy font-semibold">Aus der Praxis:</strong> {card.example}
                  </div>

                  {/* Statistics footer element */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-church-navy bg-church-gold/10 px-3 py-1.5 rounded-xl border border-church-gold/20 font-bold uppercase tracking-wide">
                    <span>{card.stats}</span>
                    <Sparkle className="h-3.5 w-3.5 text-church-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Strong final focus callout - enhanced visually */}
      <section className="bg-church-navy text-white text-left py-16 px-8 sm:px-16 rounded-[40px] relative overflow-hidden shadow-2xl border border-white/5 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-church-gold/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="bg-church-gold/20 text-church-gold p-3 rounded-2xl w-fit border border-church-gold/30">
            <Award className="h-6 w-6 text-church-gold shrink-0" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Für soziale Wärme und Offenheit einstehen
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed font-light">
            Ob in Kindertagesstätten, im ambulanten Beratungsservice oder in der Katastrophenhilfe vor Ort: diese Fürsorge gilt jedem Mitmenschen ausnahmslos. Wer an die Pforten unserer Beratungs- und Hilfezentren klopft, wird weder nach Herkunft, Glaube noch nach Konfession gefragt. Wo Not oder Ungerechtigkeit herrschen, ist tatkräftige Unterstützung Pflicht.
          </p>
        </div>
      </section>
    </div>
  );
}
