import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, 
  CloudOff, Gamepad2, GraduationCap, Download, Settings, Brain, List, Wrench, Quote, Watch, PlayCircle, Activity, ExternalLink, Youtube, Box,
  ChevronLeft, ChevronRight, CheckCircle, Smartphone, Wifi, Users, AlertTriangle, Monitor, Calendar, Clock, Laptop, Linkedin, Instagram, Mail, MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const videoUrl = "https://1drv.ms/v/c/176b0767a5ca5a26/IQSwqDjqP9uAQLa3dr_2w8aaAY050-kAMM482u9C3vVVzOE";

  // Data moved inside to keep structure, but texts are mixed language to show diversity as requested
  const testimonialsData = [
    {
      id: 1,
      name: "Lucía Méndez",
      role: "Docente Secundaria",
      location: "Madrid",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      text: "Por fin entiendo cómo aterrizar la LOMLOE en mi programación sin volverme loca con los papeles. El enfoque práctico es lo mejor."
    },
    {
      id: 2,
      name: "Jordi Soler",
      role: "Cap d'Estudis",
      location: "Barcelona",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "El curs ha estat una revelació. Integrar Moodle amb l'educació física semblava impossible, però ara és el meu dia a dia a l'institut."
    },
    {
      id: 3,
      name: "Uxía Domínguez",
      role: "Mestra Educación Física",
      location: "Santiago",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      text: "Moi contenta coa formación. As ferramentas de vídeo análise cambiaron a forma na que os meus alumnos entenden o movemento."
    },
    {
      id: 4,
      name: "Iñaki Goikoetxea",
      role: "Koordinatzailea",
      location: "Donostia",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Ezinbestekoa gure ikasleentzat. Teknologia eta kirola uztartzeko modu ezin hobea iruditu zait."
    },
    {
      id: 5,
      name: "Carlos Ruiz",
      role: "Especialista Primaria",
      location: "Valencia",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "He pasado de las fichas de papel a evaluar por rúbricas digitales en tiempo real. Mis alumnos están más motivados que nunca."
    },
    {
      id: 6,
      name: "Elena Rivas",
      role: "Opositora",
      location: "Sevilla",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "Gracias al módulo de Moodle pude presentar una programación didáctica digital que marcó la diferencia en mi tribunal."
    },
    {
      id: 7,
      name: "Roberto Díaz",
      role: "Profesor FP TAFAD",
      location: "Zaragoza",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      text: "Kinovea nos ha permitido analizar gestos técnicos con una precisión profesional. Mis alumnos salen mucho mejor preparados."
    },
    {
      id: 8,
      name: "Sonia Pla",
      role: "Docente Secundaria",
      location: "Alicante",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      text: "La gamificación con ClassCraft ha transformado la gestión de aula. El compromiso motor ha aumentado porque todos quieren ganar XP."
    }
  ];

  // --- Carousel Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= testimonialsData.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.length - itemsPerPage : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      // Solo avanzar si no estamos interactuando (podríamos añadir esa lógica, pero simple es mejor)
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [itemsPerPage]); // Reiniciar si cambia el tamaño de pantalla

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 z-10 relative">
            
            {/* Social Buttons Above Title (NEW) */}
            <div className="flex items-center gap-3 mb-1 animate-fade-in">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Síguenos:</span>
              <div className="flex gap-2 items-center">
                <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                <Link to="/contact" className="flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                   <Mail className="h-3 w-3" /> Newsletter
                </Link>
              </div>
            </div>

            {/* Hierarchy Clarification: EduMotion Lab Presents */}
            <div className="animate-fade-in flex flex-col gap-4 mb-2">
               <span className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">
                  {t('hero.presents')}
               </span>
               
               {/* High Visibility Badge - CHANGED TO BLUE (Primary) to reduce Green usage */}
               <div className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_0_25px_rgba(0,120,212,0.4)] w-fit transition-transform hover:scale-105 animate-bounce-subtle border-4 border-white ring-4 ring-primary/10">
                  <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="relative text-sm sm:text-base font-black uppercase tracking-wide drop-shadow-sm">
                     {t('hero.badge')}
                  </span>
               </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent w-fit animate-fade-in-up pb-2">
              {t('hero.title')}
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light text-gray-500 max-w-lg animate-fade-in-up delay-100">
              {t('hero.subtitle')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up delay-200">
              <Link to="/register" className="h-12 px-8 rounded-xl bg-gradient-to-r from-secondary-green-dark to-primary hover:from-secondary-green hover:to-primary-dark text-white font-black text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                {t('hero.cta_register')}
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link 
                to="/program" 
                className="
                  relative h-12 px-8 rounded-xl 
                  bg-white text-dark font-bold text-base 
                  border-2 border-gray-100 
                  overflow-hidden group flex items-center justify-center gap-2 
                  transition-all duration-300
                  hover:border-brand-orange hover:text-brand-orange 
                  hover:shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-1
                "
              >
                <div className="absolute inset-0 bg-brand-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                <span className="relative z-10">{t('hero.cta_program')}</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100 animate-fade-in-up delay-300">
               <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" alt="Coach" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
               </div>
               <div>
                  <div className="flex text-brand-orange text-sm">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-500"><span className="font-bold text-dark">800+</span> {t('hero.students')}</p>
               </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Overlay */}
          <div className="relative min-h-[400px] w-full h-full rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden group animate-fade-in">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2070")',
                 filter: 'grayscale(100%) brightness(0.6)'
               }}
             ></div>
             
             <div className="absolute inset-0 bg-primary/40 mix-blend-color"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay"></div>
             
             <div className="absolute inset-0 p-8 flex items-end justify-start">
                <svg className="w-full h-full opacity-90 absolute inset-0 pointer-events-none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 300">
                   <defs>
                     <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                       <stop offset="0%" style={{stopColor:'#4ADE80', stopOpacity:1}}></stop>
                       <stop offset="100%" style={{stopColor:'#A855F7', stopOpacity:1}}></stop>
                     </linearGradient>
                   </defs>
                   <path d="M 20 280 C 80 150, 250 50, 380 120" fill="none" stroke="rgba(74, 222, 128, 0.9)" strokeDasharray="12 8" strokeLinecap="round" strokeWidth="5">
                      <animate attributeName="stroke-dashoffset" dur="30s" from="1000" repeatCount="indefinite" to="0"></animate>
                   </path>
                   <path d="M 40 280 Q 150 200, 360 220" fill="none" stroke="rgba(168, 85, 247, 0.9)" strokeLinecap="round" strokeWidth="6"></path>
                   <circle className="animate-pulse" cx="380" cy="120" fill="#4ADE80" r="10"></circle>
                   <circle cx="360" cy="220" fill="#A855F7" r="8"></circle>
                </svg>
                
                <div className="absolute bottom-6 right-6 flex gap-2">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg flex items-center gap-2">
                      <Activity className="text-secondary-green h-5 w-5" />
                      <span className="text-white text-xs font-bold">{t('hero.invisible_tech')}</span>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        </div>
      </section>

      {/* Justificación Pedagógica UNIFICADA (Reto + Video + Contexto) */}
      <section className="py-24 bg-white relative border-b border-gray-100" id="justificacion">
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Encabezado común */}
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold uppercase tracking-wider text-sm bg-purple-50 px-4 py-1.5 rounded-full">
                  <PlayCircle className="h-5 w-5" />
                  <span>{t('philosophy.title')}</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
                  {t('philosophy.heading')}
               </h2>
            </div>

            {/* Layout Grid: Izquierda (Texto/Justificación) - Derecha (Video) */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
               
               {/* Columna Izquierda: El Problema y La Solución */}
               <div className="order-2 lg:order-1 space-y-8">
                  <div className="bg-white p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm relative">
                     <h3 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-brand-orange" />
                        {t('philosophy.box_title')}
                     </h3>
                     <p className="text-gray-600 text-lg leading-relaxed">
                        {t('philosophy.box_desc')}
                     </p>
                  </div>

                  <div>
                     <h3 className="text-xl font-bold text-dark mb-3">{t('philosophy.subtitle')}</h3>
                     <p className="text-gray-500 text-lg leading-relaxed mb-6">
                        {t('philosophy.text')}
                     </p>
                     
                     {/* Ficha Técnica Resumida (Sustituye a Stats) */}
                     <div className="grid grid-cols-3 gap-4">
                        <div className="bg-light p-3 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center">
                           <Calendar className="h-6 w-6 text-primary mb-1" />
                           <span className="block font-black text-xl text-dark">6</span>
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Semanas</span>
                        </div>
                        <div className="bg-light p-3 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center">
                           <Clock className="h-6 w-6 text-brand-orange mb-1" />
                           <span className="block font-black text-xl text-dark">30</span>
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Horas</span>
                        </div>
                        <div className="bg-light p-3 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center">
                           <Laptop className="h-6 w-6 text-secondary-green-dark mb-1" />
                           <span className="block font-black text-sm text-dark mt-1">Online</span>
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Tutorizado</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Columna Derecha: El Video (La Prueba Visual) */}
               <div className="order-1 lg:order-2">
                  <div className="relative w-full shadow-2xl rounded-2xl overflow-hidden bg-black ring-4 ring-gray-100 group transform hover:scale-[1.01] transition-transform duration-500">
                     <div className="aspect-video w-full relative bg-black z-10">
                        <iframe 
                          src={videoUrl} 
                          className="absolute inset-0 w-full h-full"
                          width="1080" 
                          height="720" 
                          frameBorder="0" 
                          scrolling="no" 
                          allowFullScreen
                          title="Teaser EduMotion Lab.mp4"
                          loading="lazy"
                        ></iframe>
                     </div>
                     {/* Decorative overlay behind */}
                     <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-accent/10 rounded-2xl"></div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4 italic">
                     Descubre en 1 minuto cómo transformamos el patio.
                  </p>
               </div>
            </div>

            {/* Bottom Row: DigCompEdu Cards (Conexión Académica) - REDISEÑADO */}
            <div className="pt-12 mt-4 border-t border-gray-100">
               <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-200 mb-3">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Marco de Referencia Europeo</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-dark">
                     Competencia Digital Docente <span className="text-gray-400 font-light">(DigCompEdu)</span>
                  </h3>
               </div>
               
               <div className="grid md:grid-cols-3 gap-6">
                  {/* Card Area 2 */}
                  <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                     <div className="absolute -right-6 -top-6 text-blue-50 group-hover:text-blue-100 transition-colors transform rotate-12 scale-150">
                        <Smartphone className="w-40 h-40" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                           <Smartphone className="w-7 h-7" />
                        </div>
                        <div className="mb-4">
                           <span className="block text-xs font-black text-blue-500 uppercase tracking-widest mb-1">Área 2</span>
                           <h4 className="text-xl font-bold text-dark">{t('home.digcomp.area2')}</h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           {t('home.digcomp.area2_desc')}
                        </p>
                     </div>
                  </div>

                  {/* Card Area 3 */}
                  <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                     <div className="absolute -right-6 -top-6 text-purple-50 group-hover:text-purple-100 transition-colors transform rotate-12 scale-150">
                        <Users className="w-40 h-40" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform shadow-sm">
                           <Users className="w-7 h-7" />
                        </div>
                        <div className="mb-4">
                           <span className="block text-xs font-black text-purple-500 uppercase tracking-widest mb-1">Área 3</span>
                           <h4 className="text-xl font-bold text-dark">{t('home.digcomp.area3')}</h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           {t('home.digcomp.area3_desc')}
                        </p>
                     </div>
                  </div>

                  {/* Card Area 5 */}
                  <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                     <div className="absolute -right-6 -top-6 text-emerald-50 group-hover:text-emerald-100 transition-colors transform rotate-12 scale-150">
                        <CheckCircle className="w-40 h-40" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform shadow-sm">
                           <CheckCircle className="w-7 h-7" />
                        </div>
                        <div className="mb-4">
                           <span className="block text-xs font-black text-emerald-500 uppercase tracking-widest mb-1">Área 5</span>
                           <h4 className="text-xl font-bold text-dark">{t('home.digcomp.area5')}</h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                           {t('home.digcomp.area5_desc')}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Project Section (Cards) */}
      <section className="py-24 bg-light relative overflow-hidden" id="project">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">{t('cards.course')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">{t('cards.what_is')}</h2>
              <p className="text-gray-500">
                 {t('cards.desc')}
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
              {/* Card 1 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 border-b-4 border-brand-orange group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <Box className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">{t('card.toolbox.title')}</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    {t('card.toolbox.desc')}
                 </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-b-4 border-primary group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <GraduationCap className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">{t('card.lomloe.title')}</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    {t('card.lomloe.desc')}
                 </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-secondary-green/10 transition-all duration-300 border-b-4 border-secondary-green group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-green/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-green-50 text-secondary-green-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <Brain className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">{t('card.moodle.title')}</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    {t('card.moodle.desc')}
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Program / Course Section */}
      <section className="py-20 bg-white" id="course">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-2xl">
                  <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">{t('program.structure')}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">{t('program.keys')}</h2>
                  <p className="text-gray-500 mt-4">
                     {t('program.keys_desc')}
                  </p>
               </div>
               <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                  {t('program.download')} <Download className="h-5 w-5" />
               </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                  <div 
                     className="absolute inset-0 bg-cover bg-center" 
                     style={{backgroundImage: 'url("https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=2070")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                           <Watch className="text-white h-5 w-5" />
                        </div>
                        <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full bg-secondary-green w-3/4"></div>
                        </div>
                        <span className="text-white font-bold text-sm">Transferencia al Aula</span>
                     </div>
                     <p className="text-white/90 text-sm">Cada herramienta se prueba y aplica directamente con tus alumnos durante el curso.</p>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  {/* Item 1 */}
                  <div className="flex gap-4 p-4 rounded-xl bg-light border border-transparent hover:border-primary/30 transition-all group">
                     <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                           <Settings className="h-5 w-5" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-dark mb-1">Modelo ADDIE</h4>
                        <p className="text-sm text-gray-500">
                           Fases de <strong>Análisis y Diseño</strong> riguroso antes de tocar ninguna herramienta tecnológica.
                        </p>
                     </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 p-4 rounded-xl bg-light border border-transparent hover:border-accent/30 transition-all group">
                     <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                           <Brain className="h-5 w-5" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-dark mb-1">Evaluación Competencial</h4>
                        <p className="text-sm text-gray-500">
                           Evaluación <strong>diagnóstica, formativa y sumativa</strong> integrada en el proceso de aprendizaje.
                        </p>
                     </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4 p-4 rounded-xl bg-light border border-transparent hover:border-secondary-green/30 transition-all group">
                     <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-secondary-green/10 text-secondary-green-dark flex items-center justify-center group-hover:bg-secondary-green group-hover:text-white transition-colors">
                           <List className="h-5 w-5" />
                        </div>
                     </div>
                     <div className="w-full">
                        <h4 className="text-lg font-bold text-dark mb-1">Metodologías Activas</h4>
                        <p className="text-sm text-gray-500">
                           Combinamos <strong>ABR (Retos semanales)</strong> con un Proyecto Final (ABP) de aplicación real.
                        </p>
                     </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4 p-4 rounded-xl bg-light border border-transparent hover:border-brand-orange/30 transition-all group">
                     <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                           <Wrench className="h-5 w-5" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-dark mb-1">Desarrollo y Recursos</h4>
                        <p className="text-sm text-gray-500">
                           Dominio técnico de las herramientas clave en la fase de Desarrollo: <strong>Kinovea, Strava, Genially y Moodle</strong>.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials Section - ENHANCED CAROUSEL */}
      <section className="py-24 bg-light overflow-hidden" id="testimonials">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-secondary-green-dark font-bold text-sm uppercase tracking-wider mb-2 block">{t('testimonials.tag')}</span>
               <h2 className="text-3xl md:text-4xl font-bold text-dark">{t('testimonials.title')}</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                 {t('testimonials.desc')}
               </p>
            </div>
            
            <div className="relative px-2 md:px-12">
                {/* Navigation Buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg text-gray-500 hover:text-primary hover:scale-110 transition-all disabled:opacity-50"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg text-gray-500 hover:text-primary hover:scale-110 transition-all disabled:opacity-50"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Carousel Track */}
                <div className="overflow-hidden py-4 -mx-4 px-4">
                   <div 
                      className="flex transition-transform duration-700 ease-out"
                      style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                   >
                      {testimonialsData.map((item) => (
                         <div 
                            key={item.id} 
                            style={{ minWidth: `${100 / itemsPerPage}%` }}
                            className="px-4"
                         >
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100 relative hover:shadow-xl hover:border-primary/10 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                                <div className="absolute -top-4 left-8 text-primary bg-white px-2 rounded-full border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                                   <Quote className="h-6 w-6 fill-primary/10" />
                                </div>
                                
                                <p className="text-gray-600 mb-6 mt-4 italic leading-relaxed flex-grow text-sm md:text-base">
                                   "{item.text}"
                                </p>
                                
                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                                   <div className="relative">
                                      <img 
                                         alt={item.name} 
                                         className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-primary/20 transition-all" 
                                         src={item.img}
                                         loading="lazy"
                                      />
                                      {/* Location Dot */}
                                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm" title={item.location}>
                                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                      </div>
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-dark text-sm">{item.name}</h5>
                                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{item.role}</p>
                                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full w-fit">
                                         <MapPin className="h-3 w-3" /> {item.location}
                                      </div>
                                   </div>
                                   <div className="ml-auto flex flex-col items-end">
                                      <div className="flex text-brand-orange">
                                         {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                                      </div>
                                   </div>
                                </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                
                {/* Dots Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                   {Array.from({ length: Math.ceil(testimonialsData.length / itemsPerPage) }).map((_, idx) => (
                      <button
                         key={idx}
                         onClick={() => setCurrentIndex(idx * itemsPerPage)} // Jump to page start
                         className={`h-2 rounded-full transition-all duration-300 ${
                            Math.floor(currentIndex / itemsPerPage) === idx 
                               ? 'w-8 bg-primary' 
                               : 'w-2 bg-gray-300 hover:bg-primary/50'
                         }`}
                         aria-label={`Ir a página ${idx + 1}`}
                      />
                   ))}
                </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;