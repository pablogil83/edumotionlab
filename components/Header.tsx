import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'El Proyecto', path: '/project' },
    { name: 'Programa Formativo', path: '/program' },
    { name: 'Recursos Digitales', path: '/resources' },
    { name: 'EduMotion Lab', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Icon Animation Added */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <nav className="flex gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive(link.path) 
                      ? 'text-primary font-black bg-primary/10 shadow-sm ring-1 ring-primary/20 transform scale-105' 
                      : 'text-gray-500 font-medium hover:bg-gray-100 hover:text-primary hover:font-bold hover:shadow-sm'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              to="/register"
              className="ml-2 xl:ml-4 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-bold py-2.5 px-5 xl:px-6 rounded-full transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20 flex items-center gap-2 hover:shadow-accent/40 whitespace-nowrap"
            >
              Inscríbete
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
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

      {/* Mobile Navigation - Improved Transparency and Animation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-fade-in-down shadow-xl absolute w-full left-0 z-40">
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
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent text-white px-4 py-3.5 rounded-xl text-base font-bold shadow-md active:scale-95 transition-transform hover:bg-accent-light"
              >
                Inscríbete Ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;