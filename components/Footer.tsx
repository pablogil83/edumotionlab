import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Activity, ClipboardList } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-50 border-t border-blue-100 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand - Logo e Información + REDES SOCIALES AQUÍ */}
          <div className="col-span-1 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex self-start">
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
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Somos un laboratorio de innovación educativa especializado en Educación Física. Fusionamos pedagogía y tecnología para transformar el aprendizaje motriz en las aulas.
            </p>

            {/* Redes Sociales Reubicadas + Newsletter Button */}
            <div className="flex gap-3 items-center justify-center flex-wrap">
               <a 
                 href="https://www.linkedin.com/in/edumotionlab/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-gray-400 shadow-sm border border-blue-100 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 group shrink-0"
                 aria-label="LinkedIn"
                 title="Síguenos en LinkedIn"
               >
                 <Linkedin className="h-5 w-5" />
               </a>
               <a 
                 href="https://www.instagram.com/edumotionlab/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-gray-400 shadow-sm border border-blue-100 hover:bg-gradient-to-tr hover:from-[#405DE6] hover:via-[#E1306C] hover:to-[#FFDC80] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 group shrink-0"
                 aria-label="Instagram"
                 title="Síguenos en Instagram"
               >
                 <Instagram className="h-5 w-5" />
               </a>
               
               {/* Botón Newsletter */}
               <Link 
                 to="/contact" 
                 className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md uppercase tracking-wide"
                 title="Suscríbete a nuestra newsletter"
               >
                 <Mail className="h-3.5 w-3.5" /> <span>Newsletter</span>
               </Link>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-dark mb-4">{t('footer.sitemap')}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.home')}</Link></li>
              <li><Link to="/project" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.project')}</Link></li>
              <li><Link to="/program" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.program')}</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">{t('nav.resources')}</Link></li>
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
                <a href="mailto:hola@edumotionlab.com" className="flex items-center gap-2 group hover:text-primary transition-colors cursor-pointer">
                  <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                     <Mail className="h-3.5 w-3.5" />
                  </div>
                  <span>hola@edumotionlab.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+34900000000" className="flex items-center gap-2 group hover:text-primary transition-colors cursor-pointer">
                   <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                   </div>
                   <span>+34 900 000 000</span>
                </a>
              </li>
              <li>
                <Link to="/contact" className="flex items-start gap-2 group hover:text-primary transition-colors cursor-pointer">
                   <div className="p-1.5 bg-white text-primary rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                   </div>
                   <span>Madrid, España</span>
                </Link>
              </li>
            </ul>
            
            <Link 
              to="/contact" 
              className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 relative z-50"
            >
              <ClipboardList className="h-6 w-6 text-white/90" />
              <span className="text-lg">{t('footer.contact_btn')}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar Centrado */}
        <div className="border-t border-blue-200 pt-8 text-center">
          <p className="text-xs text-gray-500">© {currentYear} EduMotion Lab. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;