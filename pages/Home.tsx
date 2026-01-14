import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, 
  CloudOff, Gamepad2, GraduationCap, Download, Settings, Brain, List, Wrench, Quote, Watch, PlayCircle, Activity, ExternalLink, Youtube, Box,
  ChevronLeft, ChevronRight, CheckCircle, Smartphone, Wifi, Users, AlertTriangle, Monitor, Calendar, Clock, Laptop, Linkedin, Instagram, Mail, MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageWithLoader from '../components/ImageWithLoader';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const videoUrl = "https://1drv.ms/v/c/176b0767a5ca5a26/IQSwqDjqP9uAQLa3dr_2w8aaAY050-kAMM482u9C3vVVzOE";

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
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [itemsPerPage]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white" id="hero">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
           <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
           <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Text */}
          <div className="flex flex-col relative">
            
            {/* Social Buttons - STANDARDIZED */}
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Síguenos:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/edumotionlab/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white border border-blue-100 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/edumotionlab/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white border border-pink-100 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" 
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 px-5 py-2 bg-white border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                   <Mail className="h-3.5 w-3.5" /> Newsletter
                </Link>
              </div>
            </div>

            <div className="animate-fade-in flex flex-col items-start gap-4 mb-6">
               <div className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_10px_20px_rgba(0,120,212,0.3)] w-fit transition-transform hover:scale-105 animate-float border-4 border-white/50 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="relative text-sm sm:text-base font-black uppercase tracking-wide drop-shadow-sm">
                     {t('hero.badge')}
                  </span>
               </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent animate-fade-in-up pb-4 mb-4">
              Innovar en Movimiento
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light text-gray-600 max-w-lg animate-fade-in-up delay-100 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200 mb-10">
              <Link to="/register" className="h-14 px-8 rounded-2xl bg-dark text-white font-black text-lg shadow-xl shadow-dark/20 hover:shadow-2xl hover:bg-black hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                {t('hero.cta_register')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/program" 
                className="
                  relative h-14 px-8 rounded-2xl 
                  bg-white text-dark font-bold text-lg 
                  border-2 border-gray-100 
                  overflow-hidden group flex items-center justify-center gap-2 
                  transition-all duration-300
                  hover:border-brand-orange hover:text-brand-orange 
                  hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1
                "
              >
                <span className="relative z-10">{t('hero.cta_program')}</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 animate-fade-in-up delay-300 bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-fit">
               <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 1" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 2" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" alt="Coach" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md" />
               </div>
               <div>
                  <div className="flex text-brand-orange text-sm mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-500 font-medium"><span className="font-bold text-dark text-base">800+</span> {t('hero.students')}</p>
               </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Overlay */}
          <div className="relative w-full lg:max-w-[85%] mx-auto lg:ml-auto lg:mr-0 h-auto min-h-[400px] aspect-[4/3] animate-fade-in lg:mt-0 mt-10">
             {/* Decorative Elements around image */}
             <div className="absolute top-10 right-10 w-32 h-32 bg-secondary-green rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
             <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-2xl animate-pulse-slow animation-delay-1000"></div>

             <div className="relative w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden group border-[6px] border-white transform rotate-2 hover:rotate-0 transition-all duration-700 hover:scale-[1.02] z-10">
                 
                 <ImageWithLoader
                    src="https://1drv.ms/i/c/176b0767a5ca5a26/IQTbidUoSBBZQK7WvxHbC5p-ATvEFXDzXYqHBMMxJP1i-DI?width=1024"
                    alt="Docentes colaborando en EduMotion Lab"
                    className="absolute inset-0 w-full h-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={true}
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none"></div>
                 
                 <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl animate-float">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-secondary-green text-dark rounded-lg">
                                <Activity className="h-5 w-5" />
                            </div>
                            <span className="text-white font-bold tracking-wide uppercase text-xs opacity-80">{t('hero.invisible_tech')}</span>
                        </div>
                        <p className="text-white font-bold text-xl leading-snug">
                            "Transformamos el patio en un laboratorio de aprendizaje activo."
                        </p>
                    </div>
                 </div>
             </div>
             
             {/* Background Shape */}
             <div className="absolute -z-10 top-5 -right-5 w-full h-full rounded-[2.5rem] border-2 border-dashed border-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Justificación Pedagógica UNIFICADA */}
      <section className="py-24 bg-slate-50 relative border-b border-gray-200" id="justificacion">
         {/* ... Resto del componente Home ... */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold uppercase tracking-wider text-sm bg-white px-6 py-2 rounded-full shadow-sm border border-purple-100">
                  <PlayCircle className="h-5 w-5" />
                  <span>{t('philosophy.title')}</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-tight">
                  {t('philosophy.heading')}
               </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
               <div className="order-2 lg:order-1 space-y-10 lg:col-span-2">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 relative hover:-translate-y-1 transition-transform duration-300">
                     <div className="absolute -top-6 -left-6 bg-brand-orange text-white p-4 rounded-2xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                        <AlertTriangle className="h-8 w-8" />
                     </div>
                     <h3 className="text-2xl font-black text-dark mb-4 mt-2">
                        {t('philosophy.box_title')}
                     </h3>
                     <p className="text-gray-600 text-lg leading-relaxed">
                        {t('philosophy.box_desc')}
                     </p>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
                        <div className="w-8 h-1 bg-primary rounded-full"></div> 
                        {t('philosophy.subtitle')}
                     </h3>
                     <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        {t('philosophy.text')}
                     </p>
                     
                     <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                           <div className="bg-blue-50 p-2 rounded-full mb-2"><Calendar className="h-5 w-5 text-primary" /></div>
                           <span className="block font-black text-2xl text-dark">6</span>
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Semanas</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                           <div className="bg-orange-50 p-2 rounded-full mb-2"><Clock className="h-5 w-5 text-brand-orange" /></div>
                           <span className="block font-black text-2xl text-dark">30</span>
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Horas</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                           <div className="bg-green-50 p-2 rounded-full mb-2"><Laptop className="h-5 w-5 text-secondary-green-dark" /></div>
                           <span className="block font-black text-sm text-dark mt-1">Online</span>
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Tutorizado</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2 lg:col-span-3">
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                     <iframe 
                       src={videoUrl} 
                       className="absolute inset-0 w-full h-full"
                       frameBorder="0" 
                       scrolling="no" 
                       allowFullScreen
                       title="Teaser EduMotion Lab.mp4"
                       loading="lazy"
                     ></iframe>
                     <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-accent/20 rounded-3xl"></div>
                     <div className="absolute -z-10 -top-10 -left-10 w-full h-full bg-primary/20 rounded-3xl"></div>
                  </div>
               </div>
            </div>

            <div className="pt-16 border-t border-gray-200">
               <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 mb-4 shadow-sm">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Marco de Referencia Europeo</span>
                  </div>
                  <h3 className="text-3xl font-black text-dark">
                     Competencia Digital Docente <span className="text-gray-400 font-light">(DigCompEdu)</span>
                  </h3>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                     <div className="absolute -right-10 -bottom-10 text-blue-50 group-hover:text-blue-100/50 transition-colors transform -rotate-12 scale-150">
                        <Smartphone className="w-48 h-48" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                           <Smartphone className="w-8 h-8" />
                        </div>
                        <div className="mb-4">
                           <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Área 2</span>
                           <h4 className="text-2xl font-bold text-dark">{t('home.digcomp.area2')}</h4>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed">
                           {t('home.digcomp.area2_desc')}
                        </p>
                     </div>
                  </div>

                  <div className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                     <div className="absolute -right-10 -bottom-10 text-purple-50 group-hover:text-purple-100/50 transition-colors transform -rotate-12 scale-150">
                        <Users className="w-48 h-48" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                           <Users className="w-8 h-8" />
                        </div>
                        <div className="mb-4">
                           <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Área 3</span>
                           <h4 className="text-2xl font-bold text-dark">{t('home.digcomp.area3')}</h4>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed">
                           {t('home.digcomp.area3_desc')}
                        </p>
                     </div>
                  </div>

                  <div className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                     <div className="absolute -right-10 -bottom-10 text-emerald-50 group-hover:text-emerald-100/50 transition-colors transform -rotate-12 scale-150">
                        <CheckCircle className="w-48 h-48" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                           <CheckCircle className="w-8 h-8" />
                        </div>
                        <div className="mb-4">
                           <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Área 5</span>
                           <h4 className="text-2xl font-bold text-dark">{t('home.digcomp.area5')}</h4>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed">
                           {t('home.digcomp.area5_desc')}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden" id="project">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 to-white/0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">{t('cards.course')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">{t('cards.what_is')}</h2>
              <p className="text-xl text-gray-500">
                 {t('cards.desc')}
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-300 group h-full relative overflow-hidden transform hover:-translate-y-3">
                 <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>
                 <div className="absolute -right-8 -top-8 w-40 h-40 bg-brand-orange/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
                 
                 <div className="w-20 h-20 rounded-3xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner relative z-10">
                    <Box className="h-10 w-10" />
                 </div>
                 <h3 className="text-2xl font-black text-dark mb-4 relative z-10 group-hover:text-brand-orange transition-colors">{t('card.toolbox.title')}</h3>
                 <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                    {t('card.toolbox.desc')}
                 </p>
              </div>

              <div className="flex flex-col bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group h-full relative overflow-hidden transform hover:-translate-y-3">
                 <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                 <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>

                 <div className="w-20 h-20 rounded-3xl bg-blue-50 text-primary flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner relative z-10">
                    <GraduationCap className="h-10 w-10" />
                 </div>
                 <h3 className="text-2xl font-black text-dark mb-4 relative z-10 group-hover:text-primary transition-colors">{t('card.lomloe.title')}</h3>
                 <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                    {t('card.lomloe.desc')}
                 </p>
              </div>

              <div className="flex flex-col bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-secondary-green/20 transition-all duration-300 group h-full relative overflow-hidden transform hover:-translate-y-3">
                 <div className="absolute top-0 left-0 w-full h-2 bg-secondary-green"></div>
                 <div className="absolute -right-8 -top-8 w-40 h-40 bg-secondary-green/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>

                 <div className="w-20 h-20 rounded-3xl bg-green-50 text-secondary-green-dark flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner relative z-10">
                    <Brain className="h-10 w-10" />
                 </div>
                 <h3 className="text-2xl font-black text-dark mb-4 relative z-10 group-hover:text-secondary-green-dark transition-colors">{t('card.moodle.title')}</h3>
                 <p className="text-gray-500 text-lg leading-relaxed relative z-10">
                    {t('card.moodle.desc')}
                 </p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50" id="course">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">{t('program.structure')}</span>
                  <h2 className="text-4xl font-black text-dark">{t('program.keys')}</h2>
                  <p className="text-gray-500 mt-4 text-lg">
                     {t('program.keys_desc')}
                  </p>
               </div>
               <button className="hidden md:flex items-center gap-2 text-white bg-dark px-6 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  {t('program.download')} <Download className="h-5 w-5" />
               </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[500px] group">
                  <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{backgroundImage: 'url("https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=2070")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">
                           <Watch className="text-white h-6 w-6" />
                        </div>
                        <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full bg-secondary-green w-3/4 animate-pulse"></div>
                        </div>
                        <span className="text-white font-bold text-base">Transferencia al Aula</span>
                     </div>
                     <p className="text-white/90 text-lg font-medium leading-relaxed">Cada herramienta se prueba y aplica directamente con tus alumnos durante el curso.</p>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  <div className="flex gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1 group">
                     <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                           <Settings className="h-8 w-8" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-dark mb-2">Modelo ADDIE</h4>
                        <p className="text-gray-500 leading-relaxed">
                           Fases de <strong>Análisis y Diseño</strong> riguroso antes de tocar ninguna herramienta tecnológica.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-all hover:-translate-y-1 group">
                     <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-purple-50 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                           <Brain className="h-8 w-8" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-dark mb-2">Evaluación Competencial</h4>
                        <p className="text-gray-500 leading-relaxed">
                           Evaluación <strong>diagnóstica, formativa y sumativa</strong> integrada en el proceso de aprendizaje.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-secondary-green/10 transition-all hover:-translate-y-1 group">
                     <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-green-50 text-secondary-green-dark flex items-center justify-center group-hover:bg-secondary-green group-hover:text-white transition-all duration-300 shadow-sm">
                           <List className="h-8 w-8" />
                        </div>
                     </div>
                     <div className="w-full">
                        <h4 className="text-xl font-bold text-dark mb-2">Metodologías Activas</h4>
                        <p className="text-gray-500 leading-relaxed">
                           Combinamos <strong>ABR (Retos semanales)</strong> con un Proyecto Final (ABP) de aplicación real.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/10 transition-all hover:-translate-y-1 group">
                     <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                           <Wrench className="h-8 w-8" />
                        </div>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-dark mb-2">Desarrollo y Recursos</h4>
                        <p className="text-gray-500 leading-relaxed">
                           Dominio técnico de las herramientas clave en la fase de Desarrollo: <strong>Kinovea, Strava, Genially y Moodle</strong>.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-white overflow-hidden relative" id="testimonials">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 opacity-50 z-0"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <span className="text-secondary-green-dark font-bold text-sm uppercase tracking-wider mb-2 block">{t('testimonials.tag')}</span>
               <h2 className="text-4xl font-black text-dark">{t('testimonials.title')}</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                 {t('testimonials.desc')}
               </p>
            </div>
            
            <div className="relative px-2 md:px-12">
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-dark hover:text-primary hover:scale-110 transition-all disabled:opacity-50"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-xl border border-gray-100 text-dark hover:text-primary hover:scale-110 transition-all disabled:opacity-50"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="overflow-hidden py-8 -mx-4 px-4">
                   <div 
                      className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                   >
                      {testimonialsData.map((item) => (
                         <div 
                            key={item.id} 
                            style={{ minWidth: `${100 / itemsPerPage}%` }}
                            className="px-4"
                         >
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 relative hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 group">
                                <div className="absolute -top-6 left-10 text-primary bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-lg group-hover:scale-110 transition-transform">
                                   <Quote className="h-8 w-8 fill-primary/10" />
                                </div>
                                
                                <p className="text-gray-600 mb-8 mt-4 text-lg italic leading-relaxed flex-grow">
                                   "{item.text}"
                                </p>
                                
                                <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-100">
                                   <div className="relative">
                                      <img 
                                         alt={item.name} 
                                         className="w-16 h-16 rounded-2xl object-cover shadow-md group-hover:rotate-3 transition-transform" 
                                         src={item.img}
                                         loading="lazy"
                                      />
                                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm" title={item.location}>
                                         <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                      </div>
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-dark text-lg leading-tight">{item.name}</h5>
                                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">{item.role}</p>
                                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full w-fit">
                                         <MapPin className="h-3 w-3" /> {item.location}
                                      </div>
                                   </div>
                                   <div className="ml-auto flex flex-col items-end">
                                      <div className="flex text-brand-orange gap-0.5">
                                         {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                                      </div>
                                   </div>
                                </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
                
                <div className="flex justify-center gap-3 mt-4">
                   {Array.from({ length: Math.ceil(testimonialsData.length / itemsPerPage) }).map((_, idx) => (
                      <button
                         key={idx}
                         onClick={() => setCurrentIndex(idx * itemsPerPage)} // Jump to page start
                         className={`h-3 rounded-full transition-all duration-500 ${
                            Math.floor(currentIndex / itemsPerPage) === idx 
                               ? 'w-10 bg-primary shadow-md' 
                               : 'w-3 bg-gray-300 hover:bg-primary/40'
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