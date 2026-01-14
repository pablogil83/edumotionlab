import React, { useState } from 'react';
import { 
  Download, Laptop, Clock, BarChart, 
  Search, Layout, Rocket, 
  Monitor, BookOpen, User, ArrowRight,
  Linkedin, Instagram, Mail, Wrench, Sparkles, CheckCircle,
  ZoomIn, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ImageWithLoader from '../components/ImageWithLoader';

const Program: React.FC = () => {
  const { t } = useLanguage();
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const handleDownload = () => {
      alert("Iniciando descarga de Guía_Docente_ADDIE_2026.pdf...");
  };

  return (
    <div className="animate-fade-in bg-slate-50">
       
       {/* 1. HERO SECTION */}
       <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                <div className="flex flex-col max-w-3xl">
                   
                   {/* Social Buttons - STANDARDIZED */}
                   <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Síguenos:</span>
                     <div className="flex items-center gap-3">
                       <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-colors shadow-sm" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                       <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-colors shadow-sm" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                       <Link to="/contact" className="flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                          <Mail className="h-3.5 w-3.5" /> Newsletter
                       </Link>
                     </div>
                   </div>

                   <div className="flex justify-center lg:justify-start">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary animate-fade-in backdrop-blur-sm mb-6">
                         <Sparkles className="h-4 w-4" /> Matrícula Abierta 2026
                      </div>
                   </div>
                   
                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4 mb-4">
                      Estructura del Programa: <br/> Modelo ADDIE
                   </h1>
                   
                   <p className="text-xl text-gray-500 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                      Un itinerario de <strong>6 semanas</strong> diseñado para transformar tu práctica docente. No aprendemos herramientas sueltas; aplicamos tecnología para resolver problemas reales en el gimnasio siguiendo el estándar científico.
                   </p>

                   <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-8 animate-fade-in-up delay-200">
                      <button 
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-dark text-white font-bold text-lg shadow-xl hover:bg-black hover:-translate-y-1 transition-all w-full sm:w-auto"
                      >
                         <Download className="h-5 w-5" /> {t('program.download')} (PDF)
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* 2. FICHA TÉCNICA - CARDS POP */}
       <section className="py-20 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-black text-dark tracking-tight">Ficha Técnica del Curso</h2>
                <p className="text-gray-500 mt-2 text-lg">Formación certificada para el desarrollo de la competencia digital docente.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { icon: <Laptop className="h-10 w-10" />, title: "Modalidad Online", subtitle: "Tutorizado", desc: "Aprendizaje flexible a través de nuestro Campus Virtual Moodle (EVA) con soporte continuo.", color: "text-primary", bg: "bg-blue-50", border: "border-blue-100" },
                   { icon: <Clock className="h-10 w-10" />, title: "30 Horas", subtitle: "6 Semanas", desc: "Formato intensivo compatible con tu horario lectivo. Enfoque 'Learning by doing'.", color: "text-brand-orange", bg: "bg-orange-50", border: "border-orange-100" },
                   { icon: <CheckCircle className="h-10 w-10" />, title: "Certificado", subtitle: "Oficial", desc: "Diploma acreditativo de superación de curso y horas de formación permanente.", color: "text-secondary-green-dark", bg: "bg-emerald-50", border: "border-emerald-100" }
                ].map((item, idx) => (
                   <div key={idx} className={`group flex flex-col p-8 bg-white rounded-[2rem] shadow-sm border ${item.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                      <div className={`h-20 w-20 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm`}>
                         {item.icon}
                      </div>
                      <h3 className="text-2xl font-black text-dark mb-1">{item.title}</h3>
                      <span className={`text-xs font-bold uppercase tracking-wider mb-4 ${item.color}`}>{item.subtitle}</span>
                      <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* 3. CRONOGRAMA ADDIE */}
       <section className="py-24 bg-white overflow-hidden relative border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-dark text-xs font-bold uppercase tracking-wider mb-6">
                   <Layout className="h-4 w-4" /> Cronograma Oficial
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">Fases del Modelo ADDIE</h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-xl">
                   El curso sigue las 5 fases del diseño instruccional, garantizando que tu innovación tenga una base sólida antes de llegar al patio.
                </p>
             </div>

             {/* INFOGRAFÍA ADDIE - IMPLEMENTACIÓN RESPONSIVE */}
             <div className="mb-20">
                <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in bg-white hover:shadow-primary/20 transition-all duration-300 max-w-4xl mx-auto">
                   {/* Usamos ImageWithLoader para carga progresiva sin recortar */}
                   <ImageWithLoader 
                      src="https://1drv.ms/i/c/176b0767a5ca5a26/IQQyZuI2IaPFTbJrL-Z5AfOOASA8aqSBi0SNZWY7hwPNhHU?width=1024"
                      alt="Infografía del Modelo ADDIE"
                      className="w-full bg-white"
                      imgClassName="w-full h-auto object-contain transform group-hover:scale-[1.01] transition-transform duration-700"
                      onClick={() => setActiveLightboxImage("https://1drv.ms/i/c/176b0767a5ca5a26/IQQyZuI2IaPFTbJrL-Z5AfOOASA8aqSBi0SNZWY7hwPNhHU?width=2048")}
                   />

                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md text-dark font-bold px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <ZoomIn className="h-5 w-5 text-primary" /> Ampliar Infografía
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                {/* Linea central */}
                <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 md:-ml-0.5 rounded-full"></div>

                <div className="space-y-16">
                   {[
                      { 
                         week: "Semana 1",
                         title: "Fase de ANÁLISIS", 
                         subtitle: "El Diagnóstico", 
                         desc: "Detectamos necesidades reales. Realizamos un análisis DAFO del centro y evaluamos la competencia digital inicial.", 
                         icon: <Search className="h-8 w-8" />,
                         color: "blue"
                      },
                      { 
                         week: "Semana 2",
                         title: "Fase de DISEÑO", 
                         subtitle: "La Hoja de Ruta", 
                         desc: "Definimos los objetivos de aprendizaje y seleccionamos las competencias específicas LOMLOE y los descriptores.", 
                         icon: <Layout className="h-8 w-8" />,
                         color: "purple"
                      },
                      { 
                         week: "Semana 3 y 4",
                         title: "Fase de DESARROLLO", 
                         subtitle: "Creación de Contenidos", 
                         desc: "Aprendizaje técnico. Creación de recursos con Kinovea, Strava, Genially y configuración del aula en Moodle.", 
                         icon: <Wrench className="h-8 w-8" />, 
                         color: "pink",
                         isDevelopment: true 
                      },
                      { 
                         week: "Semana 5",
                         title: "Fase de IMPLEMENTACIÓN", 
                         subtitle: "El Piloto en el Patio", 
                         desc: "Estrategias de gestión de aula y puesta en marcha. Llevamos el proyecto diseñado al entorno real.", 
                         icon: <Rocket className="h-8 w-8" />,
                         color: "orange"
                      },
                      { 
                         week: "Semana 6",
                         title: "Fase de EVALUACIÓN", 
                         subtitle: "Mejora Continua", 
                         desc: "Evaluación del impacto del proyecto y calificación del aprendizaje del alumnado. Entrega del Trabajo Final.", 
                         icon: <BarChart className="h-8 w-8" />,
                         color: "green"
                      }
                   ].map((module, idx) => {
                      const isLeft = idx % 2 === 0;
                      const colorClasses: {[key: string]: {text: string, bg: string, border: string, gradient: string, shadow: string}} = {
                         blue: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500", gradient: "from-blue-400 to-blue-600", shadow: "shadow-blue-200" },
                         purple: { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-500", gradient: "from-purple-400 to-purple-600", shadow: "shadow-purple-200" },
                         pink: { text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-500", gradient: "from-pink-400 to-pink-600", shadow: "shadow-pink-200" },
                         orange: { text: "text-brand-orange", bg: "bg-orange-50", border: "border-brand-orange", gradient: "from-orange-400 to-orange-600", shadow: "shadow-orange-200" },
                         green: { text: "text-secondary-green-dark", bg: "bg-emerald-50", border: "border-secondary-green", gradient: "from-emerald-400 to-emerald-600", shadow: "shadow-emerald-200" }
                      };
                      const colors = colorClasses[module.color];

                      return (
                         <div key={idx} className={`relative flex flex-col md:flex-row items-center group ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Card Content */}
                            <div className={`flex-1 w-full md:w-1/2 pl-24 md:pl-0 mb-8 md:mb-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                               <div className={`bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1`}>
                                  
                                  {/* Badge Week */}
                                  <div className={`inline-block px-3 py-1 rounded-lg ${colors.bg} ${colors.text} text-xs font-black uppercase tracking-widest mb-4`}>
                                     {module.week}
                                  </div>

                                  <h4 className="text-2xl font-black text-dark mb-3">{module.subtitle}</h4>
                                  <div className={`h-1 w-12 bg-gradient-to-r ${colors.gradient} rounded-full mb-4 ${isLeft ? 'ml-auto' : ''}`}></div>
                                  
                                  <p className="text-gray-500 text-base leading-relaxed mb-4">{module.desc}</p>
                                  
                                  {module.isDevelopment && (
                                     <Link to="/resources" className={`inline-flex items-center gap-2 text-xs font-bold ${colors.text} hover:underline decoration-2 underline-offset-4 transition-all w-full ${isLeft ? 'justify-end' : 'justify-start'}`}>
                                        Ver Herramientas <ArrowRight className="h-3 w-3" />
                                     </Link>
                                  )}
                                </div>
                            </div>

                            {/* Center Node */}
                            <div className="absolute left-[36px] md:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-[6px] border-white shadow-lg z-20 flex items-center justify-center bg-white group-hover:scale-110 transition-transform duration-500">
                               <div className={`w-full h-full rounded-full bg-gradient-to-br ${colors.gradient}`}></div>
                            </div>

                            {/* Icon Side (Desktop only visual) */}
                            <div className={`flex-1 w-full md:w-1/2 hidden md:flex ${isLeft ? 'pl-16 justify-start' : 'pr-16 justify-end'}`}>
                               <div className={`relative h-24 w-24 rounded-3xl bg-white border border-gray-100 flex items-center justify-center ${colors.text} shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                  {/* Glass effect blob behind */}
                                  <div className={`absolute inset-0 ${colors.bg} opacity-50 blur-xl -z-10 rounded-full`}></div>
                                  {React.cloneElement(module.icon as React.ReactElement<{ className?: string }>, { className: "h-10 w-10" })}
                               </div>
                            </div>

                         </div>
                      )
                   })}
                </div>
             </div>
          </div>
       </section>

       {/* 4. MAPA DE COMPETENCIAS (Perfil de Salida) */}
       <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Perfil de Salida</span>
                <h2 className="text-4xl font-black text-dark">Mapa de Competencias Desarrolladas</h2>
                <p className="text-gray-500 mt-4 text-xl">Al finalizar el curso, habrás adquirido destrezas en tres áreas clave:</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {/* Competencia Digital */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                   <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                      <Monitor className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-dark mb-1">Digital</h3>
                   <span className="text-blue-500 font-bold text-xs uppercase tracking-wider block mb-6">(DigCompEdu)</span>
                   
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> 
                        Creación de recursos (Área 2).
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> 
                        Enseñanza y aprendizaje (Área 3).
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> 
                        Inclusión (Área 5).
                      </li>
                   </ul>
                </div>

                {/* Competencia Pedagógica */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 transform md:-translate-y-4">
                   <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                      <BookOpen className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-dark mb-1">Pedagógica</h3>
                   <span className="text-purple-500 font-bold text-xs uppercase tracking-wider block mb-6">(LOMLOE)</span>
                   
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" /> 
                        Diseño de SdA.
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" /> 
                        Evaluación Competencial.
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" /> 
                        Diseño Universal (DUA).
                      </li>
                   </ul>
                </div>

                {/* Competencia Personal */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                   <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-brand-orange mb-6 shadow-sm">
                      <User className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-dark mb-1">Personal</h3>
                   <span className="text-brand-orange font-bold text-xs uppercase tracking-wider block mb-6">(Soft Skills)</span>
                   
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" /> 
                        Gestión ágil.
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" /> 
                        Liderazgo e innovación.
                      </li>
                      <li className="flex items-start gap-3 text-gray-600 font-medium bg-slate-50 p-3 rounded-xl border border-gray-100">
                        <CheckCircle className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" /> 
                        Trabajo en red.
                      </li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

       {/* Lightbox Modal Genérico - Mejorado para centrado y visualización completa */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveLightboxImage(null)}
        >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 z-[110]"
              aria-label="Cerrar"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
               {/* Usamos ImageWithLoader también en el Lightbox con object-contain */}
               <ImageWithLoader
                  src={activeLightboxImage} 
                  alt="Imagen Ampliada"
                  className="w-full h-full flex items-center justify-center bg-transparent"
                  imgClassName="max-w-full max-h-[90vh] w-auto h-auto object-contain"
               />
            </div>
        </div>
      )}
    </div>
  );
};

export default Program;