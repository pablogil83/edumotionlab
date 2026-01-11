import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Activity, ClipboardList } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-50 border-t border-blue-100 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand - Logo igual al Header */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all transform group-hover:scale-105">
                <Activity className="h-6 w-6 text-white" strokeWidth={2.5} />
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
            <p className="text-sm text-gray-600 leading-relaxed">
              Somos un laboratorio de innovación educativa especializado en Educación Física. Fusionamos pedagogía y tecnología para transformar el aprendizaje motriz en las aulas.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-dark mb-4">{t('footer.sitemap')}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.home')}</Link></li>
              <li><Link to="/project" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.project')}</Link></li>
              <li><Link to="/program" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.program')}</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.resources')}</Link></li>
              {/* Cambio de 'Nosotros' a 'EduMotion Lab' */}
              <li><Link to="/about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.about')}</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-dark mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/legal-notice" className="hover:text-primary transition-colors">Aviso Legal</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cookies-policy" className="hover:text-primary transition-colors">Política de Cookies</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-primary transition-colors">Términos de Uso</Link></li>
            </ul>
          </div>

          {/* Contact - AHORA COMPLETAMENTE CLICABLES */}
          <div className="relative z-50">
            <h4 className="font-bold text-dark mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li>
                {/* Lógica: mailto para abrir cliente de correo - Todo el bloque es clicable */}
                <a href="mailto:hola@edumotionlab.com" className="flex items-center gap-2 group hover:text-primary transition-colors cursor-pointer">
                  <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                     <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>hola@edumotionlab.com</span>
                </a>
              </li>
              <li>
                {/* Lógica: tel para abrir aplicación de llamadas - Todo el bloque es clicable */}
                <a href="tel:+34900000000" className="flex items-center gap-2 group hover:text-primary transition-colors cursor-pointer">
                   <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                   </div>
                   <span>+34 900 000 000</span>
                </a>
              </li>
              <li>
                {/* Lógica: Link para ir a la página de contacto (mapa) - Todo el bloque es clicable */}
                <Link to="/contact" className="flex items-start gap-2 group hover:text-primary transition-colors cursor-pointer">
                   <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                   </div>
                   <span>Madrid, España</span>
                </Link>
              </li>
            </ul>
            
            {/* Botón de Contacto - Diseño Mejorado: Icono Cambiado a ClipboardList */}
            <Link 
              to="/contact" 
              className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 relative z-50"
            >
              <ClipboardList className="h-6 w-6 text-white/90" />
              <span className="text-lg">{t('footer.contact_btn')}</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {currentYear} EduMotion Lab. {t('footer.rights')}</p>
          <div className="flex gap-4 items-center">
            {/* X (Twitter) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-black rounded-full transition-all" aria-label="X">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-pink-600 rounded-full transition-all" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-blue-700 rounded-full transition-all" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-blue-600 rounded-full transition-all" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;