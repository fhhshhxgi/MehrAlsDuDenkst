/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Menu, 
  X, 
  Landmark, 
  Compass, 
  ChevronDown, 
  Sparkles, 
  HeartHandshake, 
  MessageSquare, 
  Compass as CompassIcon, 
  HelpCircle, 
  Layers,
  Sparkle
} from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

interface DropdownItem {
  id: PageId;
  title: string;
  description: string;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: DropdownItem[];
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationGroups: NavGroup[] = [
    {
      label: 'Sinn & Glaube',
      items: [
        { 
          id: 'was-ist-katholisch', 
          title: 'Werte & Glaube', 
          description: 'Was bedeutet Glauben heute? Kernwerte verständlich erklärt.' 
        },
        { 
          id: 'glaube-im-alltag', 
          title: 'Glaube im Alltag', 
          description: 'Eine innere Kraftquelle und leiser Orientierungs-Kompass.' 
        },
        { 
          id: 'feste-symbole', 
          title: 'Feste & Symbole', 
          description: 'Von Ostern bis Sakramenten: Feste, die das Leben begleiten.' 
        }
      ]
    },
    {
      label: 'Hilfe & Handeln',
      items: [
        { 
          id: 'kirche-hilft', 
          title: 'Caritas & Hilfe', 
          description: 'Bedingungslose Unterstützung für Benachteiligte und Schwache.',
          badge: 'Aktivität'
        },
        { 
          id: 'mehr-als-ein-gebaeude', 
          title: 'Offene Räume', 
          description: 'Über 20.000 Kirchen als kostenlose Ruhepole in Großstadt und Dorf.' 
        },
        { 
          id: 'mitmachen', 
          title: 'Aktiv werden', 
          description: 'Zusammenhalt vor Ort leben: Singen, mitwirken & Gutes tun.' 
        }
      ]
    },
    {
      label: 'Dialog & Medien',
      items: [
        { 
          id: 'kritische-fragen', 
          title: 'Kritische Fragen', 
          description: 'Wir schweigen nicht: Finanzen, Missbrauch & Reformen im offenen Dialog.',
          badge: 'Ehrlich'
        },
        { 
          id: 'mach-den-test', 
          title: 'Selbsttest', 
          description: 'Ein spielerischer Fragen-Wizard: Welcher Glaubenstyp bist du?' 
        },
        { 
          id: 'kampagnenmaterial', 
          title: 'Plakate & Medien', 
          description: 'Faltblätter, Plakatmotive und Schuldidaktik zum Mitnehmen.' 
        }
      ]
    }
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isGroupActive = (group: NavGroup) => {
    return group.items.some(item => item.id === activePage);
  };

  // Helper to check if a specific page matches any listed item
  const allItemsFlat = navigationGroups.flatMap(g => g.items);

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-church-navy text-white shadow-md border-b-[3px] border-church-gold transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO AREA */}
          <div className="flex items-center space-x-3 cursor-pointer select-none shrink-0" onClick={() => handleNavClick('start')}>
            <div className="bg-church-gold text-church-navy p-2.5 rounded-full hover:rotate-12 transition-transform duration-300 shadow-sm">
              <Landmark className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-white leading-tight">
                Katholische Kirche
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-church-gold uppercase tracking-wider font-semibold">
                Mehr als du denkst.
              </span>
            </div>
          </div>

          {/* DESKTOP GROUPED NAVIGATION (ONLY 4 CLEAN TABS ON SCREEN AT START) */}
          <nav className="hidden lg:flex items-center space-x-2">
            
            {/* Startseite Button */}
            <button
              id="nav-btn-start"
              onClick={() => handleNavClick('start')}
              className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 relative ${
                activePage === 'start'
                  ? 'text-church-gold bg-white/5'
                  : 'text-gray-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Startseite
              {activePage === 'start' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-church-gold rounded-full" />
              )}
            </button>

            {/* Dropdown Groups */}
            {navigationGroups.map((group, groupIdx) => {
              const isDropdownOpen = activeDropdown === group.label;
              const hasActiveChild = isGroupActive(group);
              
              return (
                <div 
                  key={groupIdx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    id={`nav-group-btn-${groupIdx}`}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 inline-flex items-center space-x-1.5 focus:outline-none ${
                      hasActiveChild || isDropdownOpen
                        ? 'text-church-gold bg-white/5'
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-250 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Elegant High-Polish Dropdown Mega-Panel */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 mt-1.5 w-[380px] bg-white text-church-navy rounded-[24px] shadow-2xl border border-church-border overflow-hidden p-3 transition-all duration-200 z-50 transform origin-top ${
                      isDropdownOpen 
                        ? 'opacity-100 scale-100 pointer-events-auto visible' 
                        : 'opacity-0 scale-95 pointer-events-none invisible'
                    }`}
                  >
                    {/* Header line */}
                    <div className="px-3 py-2 border-b border-church-border mb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-extrabold uppercase text-gray-400 tracking-wider">
                        Themenfeld • {group.label}
                      </span>
                      <Sparkle className="h-3 w-3 text-church-gold" />
                    </div>

                    <div className="space-y-1">
                      {group.items.map((subItem) => {
                        const isSubActive = activePage === subItem.id;
                        return (
                          <button
                            id={`subnav-btn-${subItem.id}`}
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.id)}
                            className={`w-full text-left p-3 rounded-2xl flex flex-col transition-all duration-150 relative ${
                              isSubActive
                                ? 'bg-church-navy/5 text-church-navy ring-1 ring-church-gold/30'
                                : 'hover:bg-church-bg text-church-navy'
                            }`}
                          >
                            <span className="text-sm font-bold flex items-center gap-2">
                              {subItem.title}
                              {subItem.badge && (
                                <span className="bg-church-gold/20 text-church-navy font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-md uppercase">
                                  {subItem.badge}
                                </span>
                              )}
                            </span>
                            <span className="text-gray-500 text-[11px] leading-relaxed mt-1 font-light">
                              {subItem.description}
                            </span>
                            {isSubActive && (
                              <div className="absolute left-2 top-4 w-1 h-6 bg-church-gold rounded-full" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* RIGHT SIDE FAST-CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-shortcut-btn"
              onClick={() => handleNavClick('mach-den-test')}
              className="bg-church-gold hover:bg-church-gold-hover text-church-navy font-bold px-5 py-2 rounded-full text-xs shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2 cursor-pointer"
            >
              <CompassIcon className="h-4 w-4" />
              <span>Selbsttest starten</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-church-gold" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE GROUPED DRAWER */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0A1D30] border-t border-church-gold/20 shadow-inner max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            
            {/* Startseite row */}
            <button
              id="mobile-nav-btn-start"
              onClick={() => handleNavClick('start')}
              className={`w-full text-left px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                activePage === 'start'
                  ? 'bg-church-gold text-church-navy'
                  : 'text-white border border-white/5 hover:bg-white/5'
              }`}
            >
              Startseite
            </button>

            {/* Render grouped sections */}
            {navigationGroups.map((group, sectionIdx) => (
              <div key={sectionIdx} className="space-y-2 bg-white/5 p-4 rounded-3xl border border-white/5">
                <span className="font-mono text-[10px] font-extrabold uppercase text-church-gold tracking-widest pl-2">
                  {group.label}
                </span>
                
                <div className="grid grid-cols-1 gap-1 pt-1.5">
                  {group.items.map((subItem) => {
                    const isSubActive = activePage === subItem.id;
                    return (
                      <button
                        id={`mobile-subnav-btn-${subItem.id}`}
                        key={subItem.id}
                        onClick={() => handleNavClick(subItem.id)}
                        className={`w-full text-left px-3 py-3 rounded-xl transition-all ${
                          isSubActive
                            ? 'bg-white/10 text-church-gold font-bold'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="text-sm font-semibold">{subItem.title}</div>
                        <div className="text-xs text-gray-400 font-light mt-0.5 leading-normal">{subItem.description}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                id="mobile-drawer-quiz-btn"
                onClick={() => handleNavClick('mach-den-test')}
                className="w-full bg-church-gold hover:bg-church-gold-hover text-church-navy font-bold py-3 px-4 rounded-2xl text-center text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <CompassIcon className="h-4 w-4" />
                <span>Selbsttest starten</span>
              </button>
              
              <button
                id="mobile-drawer-critique-btn"
                onClick={() => handleNavClick('kritische-fragen')}
                className="w-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 py-3 px-4 rounded-2xl text-center text-sm transition-all flex items-center justify-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Kritische Fragen stellen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
