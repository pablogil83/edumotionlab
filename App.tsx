import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AlertTriangle, X } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Project from './pages/Project';
import Program from './pages/Program';
import Resources from './pages/Resources';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Success from './pages/Success';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Scroll to top component to handle navigation changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-light text-dark selection:bg-accent/20 selection:text-accent font-body">
      {/* AVISO DE PROTOTIPO GLOBAL */}
      {showBanner && (
        <div className="bg-amber-50 border-b border-amber-200 relative z-[60] animate-fade-in-down shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full shrink-0 animate-pulse border border-amber-200">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                  <span className="font-black text-amber-900 text-xs md:text-sm tracking-tight uppercase">
                    Prototipo Académico
                  </span>
                  <span className="hidden sm:inline text-amber-300">|</span>
                  <span className="text-xs md:text-sm text-amber-800/90 leading-tight">
                    Este sitio es un trabajo universitario. No ofrece servicios reales.
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowBanner(false)}
                className="p-1.5 text-amber-700 hover:bg-amber-100 rounded-full transition-colors shrink-0"
                aria-label="Cerrar aviso"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Header />
      <Breadcrumbs />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/program" element={<Program />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          
          {/* Legal Routes */}
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          {/* Redirección para cualquier ruta desconocida hacia el Inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;