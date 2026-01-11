import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, LanguageCode } from '../data/translations';

interface LanguageContextProps {
  currentLang: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('es');

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLang(lang);
  };

  const t = (key: string): string => {
    const langData = translations[currentLang] as Record<string, string>;
    const text = langData[key];
    
    if (!text) {
      // Fallback to Spanish if key missing, or return key
      const fallback = (translations['es'] as Record<string, string>)[key];
      return fallback || key;
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};