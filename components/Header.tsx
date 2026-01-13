import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Globe, ChevronDown, Check, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageCode } from '../data/translations';

// --- FLAG COMPONENTS (Inline SVGs for reliability) ---

const FlagES = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 750 500" className={className}>
    <rect width="750" height="500" fill="#AA151B"/>
    <rect y="125" width="750" height="250" fill="#F1BF00"/>
  </svg>
);

const FlagGL = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 750 500" className={className}>
    <rect width="750" height="500" fill="#ffffff"/>
    <path d="M0 0 L0 166 L750 500 L750 334 Z" fill="#0092E6"/>
  </svg>
);

const FlagEU = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 750 500" className={className}>
    <rect width="750" height="500" fill="#DB0007"/>
    <path d="M0,0 L750,500 M750,0 L0,500" stroke="#009B48" strokeWidth="60"/>
    <path d="M375,0 L375,500 M0,250 L750,250" stroke="#FFFFFF" strokeWidth="60"/>
  </svg>
);

const FlagCA = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 750 500" className={className}>
    <rect width="750" height="500" fill="#F1BF00"/>
    <rect y="50" width="750" height="50" fill="#AA151B"/>
    <rect y="150" width="750" height="50" fill="#AA151B"/>
    <rect y="250" width="750" height="50" fill="#AA151B"/>
    <rect y="350" width="750" height="50" fill="#AA151B"/>
    <rect y="450" width="750" height="50" fill="#AA151B"/>
  </svg>
);

const FlagVA = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 750 500" className={className}>
    {/* Senyera base */}
    <rect width="750" height="500" fill="#F1BF00"/>
    <rect y="50" width="750" height="50" fill="#AA151B"/>
    <rect y="150" width="750" height="50" fill="#AA151B"/>
    <rect y="250" width="750" height="50" fill="#AA151B"/>
    <rect y="350" width="750" height="50" fill="#AA151B"/>
    <rect y="450" width="750" height="50" fill="#AA151B"/>
    {/* Blue band */}
    <rect width="200" height="500" fill="#0047AB"/>
    {/* Simple decoration on blue band (simplified) */}
    <path d="M20 0 L20 500" stroke="#AA151B" strokeWidth="5" opacity="0.5"/>
  </svg>
);

interface LanguageOption {
  code: LanguageCode;
  name: string;
  Flag: React.FC<{ className?: string }>;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'es', name: 'Español', Flag: FlagES },
  { code: 'gl', name: 'Galego', Flag: FlagGL },
  { code: 'eu', name: 'Euskara', Flag: FlagEU },
  { code: 'ca', name: 'Català', Flag: FlagCA },
  { code: 'va', name: 'Valencià', Flag: FlagVA },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Use Context
  const { currentLang, setLanguage, t } = useLanguage();
  
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.project'), path: '/project' },
    { name: t('nav.program'), path: '/program' },
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Desktop
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
      // Mobile
      if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsLangMenuOpen(false);
    setIsMobileLangOpen(false);
  };

  const CurrentFlag = LANGUAGES.find(l => l.code === currentLang)?.Flag || FlagES;

  const LanguageDropdownContent = () => (
    <>
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 mb-1">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
          <Globe className="h-3 w-3" /> {t('header.lang')}
        </span>
      </div>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLangSelect(lang.code)}
          className={`w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors ${currentLang === lang.code ? 'bg-blue-50/50' : ''}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm relative">
              <lang.Flag className="w-full h-full object-cover" />
              {/* Overlay for border definition */}
              <div className="absolute inset-0 border border-black/10 rounded-sm"></div>
            </div>
            <span className={`text-sm ${currentLang === lang.code ? 'font-bold text-primary' : 'font-medium text-gray-600'}`}>
              {lang.name}
            </span>
          </div>
          {currentLang === lang.code && <Check className="h-4 w-4 text-primary" />}
        </button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          
          {/* Logo - Icon Animation Added - Added right margin for separation */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group mr-8 lg:mr-10">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all transform group-hover:scale-105">
              <Activity 
                className="h-6 w-6 text-white transition-transform duration-500 ease-in-out group-hover:rotate-12" 
                strokeWidth={2.5} 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-dark tracking-tighter leading-none group-hover:text-primary transition-colors">
                EduMotion
              </span>
              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered/Left-aligned next to logo */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
                  isActive(link.path) 
                    ? 'text-primary font-black bg-primary/10 shadow-sm ring-1 ring-primary/20 transform scale-105' 
                    : 'text-gray-500 font-medium hover:bg-gray-100 hover:text-primary hover:font-bold hover:shadow-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions (Lang + Button) - Pushed to right */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 ml-auto">
            
            {/* Language Selector (Desktop) */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                aria-label="Seleccionar idioma"
              >
                <div className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm">
                  <CurrentFlag className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-bold text-gray-700 uppercase">{currentLang}</span>
                <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-down overflow-hidden">
                   <LanguageDropdownContent />
                </div>
              )}
            </div>

            <Link
              to="/register"
              className="bg-gradient-to-r from-accent to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-bold py-2.5 px-5 xl:px-6 rounded-full transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20 flex items-center gap-2 hover:shadow-accent/40 whitespace-nowrap"
            >
              {t('nav.register')}
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger & Current Lang) - Pushed to right */}
          <div className="lg:hidden ml-auto flex items-center gap-3">
            
            {/* Dedicated Mobile Language Dropdown */}
            <div className="relative" ref={mobileLangRef}>
              <button 
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)} 
                className="flex items-center gap-1.5 px-2 py-1.5 bg-gray-50 rounded-lg border border-gray-100 active:bg-gray-100 transition-colors"
                aria-label="Seleccionar idioma móvil"
              >
                 <div className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm">
                    <CurrentFlag className="w-full h-full object-cover" />
                 </div>
                 <span className="text-xs font-bold text-gray-600 uppercase">{currentLang}</span>
                 <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${isMobileLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-down overflow-hidden z-50">
                   <LanguageDropdownContent />
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Menú principal"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-fade-in-down shadow-xl absolute w-full left-0 z-40 max-h-[90vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base transition-all ${
                  isActive(link.path)
                    ? 'text-primary font-black bg-primary/5 border-l-4 border-primary pl-6 shadow-sm'
                    : 'text-gray-600 font-medium hover:text-primary hover:bg-gray-50 hover:font-bold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Selector Mobile (Fallback in Menu) */}
            <div className="border-t border-gray-100 mt-2 pt-4 px-4">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5" /> {t('header.lang')}
               </span>
               <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => (
                     <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className={`flex items-center gap-3 p-2 rounded-lg border transition-all ${
                           currentLang === lang.code 
                              ? 'bg-blue-50 border-primary/30 shadow-sm' 
                              : 'bg-gray-50 border-transparent hover:bg-gray-100'
                        }`}
                     >
                        <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm relative shrink-0">
                           <lang.Flag className="w-full h-full object-cover" />
                           <div className="absolute inset-0 border border-black/10 rounded-sm"></div>
                        </div>
                        <span className={`text-sm ${currentLang === lang.code ? 'font-bold text-primary' : 'font-medium text-gray-600'}`}>
                           {lang.name}
                        </span>
                     </button>
                  ))}
               </div>
            </div>

            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent text-white px-4 py-3.5 rounded-xl text-base font-bold shadow-md active:scale-95 transition-transform hover:bg-accent-light"
              >
                {t('nav.register')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;