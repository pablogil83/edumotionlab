import React from 'react';
import { 
  Download, Laptop, Clock, BarChart, 
  Puzzle, Trophy, Accessibility, 
  Search, Layout, Layers, Rocket, 
  GraduationCap, Palette, MousePointerClick, FileCode, Box,
  ClipboardCheck, Users, ShieldCheck, CheckCircle, Sparkles, User, ArrowRight, Activity, Brain, Target, Lightbulb, Video,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Program: React.FC = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
      alert("Iniciando descarga de Guía_Docente_ADDIE_2026.pdf...");
  };

  return (
    <div className="animate-fade-in bg-white">
       
       {/* 1. HERO SECTION */}
       <section className="relative bg-white py-12 lg:py-24 overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                <div className="flex flex-col gap-6 max-w-3xl">
                   <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary animate-fade-in">
                      <Sparkles className="h-4 w-4" /> Matrícula Abierta
                   </div>
                   
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark tracking-tight leading-[1.1] animate-fade-in-up">
                      Estructura del Programa: <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent">Modelo ADDIE</span>
                   </h1>
                   
                   <p className="text-lg text-gray-500 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                      Un itinerario de <strong>6 semanas</strong> diseñado para transformar tu práctica docente. No aprendemos herramientas sueltas; aplicamos tecnología para resolver problemas reales en el gimnasio siguiendo el estándar científico de diseño instruccional.
                   </p>

                   <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-2 animate-fade-in-up delay-200">
                      <button 
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all w-full sm:w-auto"
                      >
                         <Download className="h-5 w-5" /> {t('program.download')} (PDF)
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* 2. FICHA TÉCNICA */}
       <section className="py-12 lg:py-16 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-dark tracking-tight">Ficha Técnica del Curso</h2>
                <p className="text-gray-500 mt-2">Formación certificada para el desarrollo de la competencia digital docente.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   { icon: <Laptop className="h-8 w-8" />, title: "Modalidad Online Tutorizado", desc: "Aprendizaje flexible a través de nuestro Campus Virtual Moodle (EVA) con soporte continuo.", color: "text-primary", bg: "bg-blue-50" },
                   { icon: <Clock className="h-8 w-8" />, title: "30 Horas / 6 Semanas", desc: "Formato intensivo compatible con tu horario lectivo. Enfoque 'Learning by doing'.", color: "text-brand-orange", bg: "bg-orange-50" },
                   { icon: <Brain className="h-8 w-8" />, title: "Metodología Dual", desc: "Aprendizaje Basado en Retos (ABR) semanales + Aprendizaje Basado en Proyectos (ABP) final.", color: "text-secondary-green-dark", bg: "bg-emerald-50" }
                ].map((item, idx) => (
                   <div key={idx} className="group flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300">
                      <div className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                         {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* 3. MAPA DE COMPETENCIAS (NEW Explicit Section for University Indicator) */}
       <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Perfil de Salida</span>
                <h2 className="text-3xl font-bold text-dark">Mapa de Competencias Desarrolladas</h2>
                <p className="text-gray-500 mt-2">Al finalizar el curso, habrás adquirido destrezas en tres áreas clave:</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {/* Competencia Digital */}
                <div className="bg-light p-8 rounded-2xl border-t-4 border-blue-500">
                   <div className="flex items-center gap-3 mb-4">
                      <Monitor className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-dark">Digital (DigCompEdu)</h3>
                   </div>
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" /> Creación de recursos digitales (Área 2).</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" /> Enseñanza y aprendizaje (Área 3).</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" /> Empoderamiento del alumnado (Área 5).</li>
                   </ul>
                </div>

                {/* Competencia Pedagógica */}
                <div className="bg-light p-8 rounded-2xl border-t-4 border-purple-500">
                   <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-dark">Pedagógica (LOMLOE)</h3>
                   </div>
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-purple-500 mt-0.5" /> Diseño de Situaciones de Aprendizaje.</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-purple-500 mt-0.5" /> Evaluación por Descriptores Operativos.</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-purple-500 mt-0.5" /> Aplicación del Diseño Universal (DUA).</li>
                   </ul>
                </div>

                {/* Competencia Personal */}
                <div className="bg-light p-8 rounded-2xl border-t-4 border-orange-500">
                   <div className="flex items-center gap-3 mb-4">
                      <User className="h-6 w-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-dark">Personal (Soft Skills)</h3>
                   </div>
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" /> Gestión de proyectos ágiles.</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" /> Liderazgo e innovación educativa.</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" /> Trabajo colaborativo en red.</li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

       {/* 4. METODOLOGÍA Y EVALUACIÓN */}
       <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16">
                {/* Metodología */}
                <div>
                   <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Cómo Aprendemos</span>
                   <h2 className="text-3xl font-bold text-dark mb-6">Metodología ABR + ABP</h2>
                   <p className="text-gray-500 mb-6 leading-relaxed">
                      El curso no consiste en ver vídeos pasivamente. Te proponemos un sistema gamificado donde cada acción cuenta:
                   </p>
                   <ul className="space-y-4">
                      <li className="flex gap-4">
                         <div className="p-2 bg-purple-50 text-accent rounded-lg h-fit"><Target className="h-5 w-5"/></div>
                         <div>
                            <h4 className="font-bold text-dark">Retos Semanales (ABR)</h4>
                            <p className="text-sm text-gray-600">Pequeñas tareas prácticas (configurar una rúbrica, grabar un gesto técnico) que suman puntos semana a semana.</p>
                         </div>
                      </li>
                      <li className="flex gap-4">
                         <div className="p-2 bg-blue-50 text-primary rounded-lg h-fit"><Layers className="h-5 w-5"/></div>
                         <div>
                            <h4 className="font-bold text-dark">Proyecto Final (ABP)</h4>
                            <p className="text-sm text-gray-600">Construcción progresiva de tu propia Situación de Aprendizaje (SdA) que defenderás al final del curso.</p>
                         </div>
                      </li>
                   </ul>
                </div>

                {/* Evaluación - UPDATED DESIGN */}
                <div>
                   <span className="text-secondary-green-dark font-bold text-sm uppercase tracking-wider mb-2 block">Cómo Evaluamos</span>
                   <h2 className="text-3xl font-bold text-dark mb-6">La Tríada de Evaluación</h2>
                   <div className="bg-light p-6 rounded-2xl border border-gray-100 space-y-4">
                      
                      {/* 01 Diagnóstica */}
                      <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden">
                         <div className="absolute right-0 top-0 h-16 w-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <div className="h-12 w-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <span className="font-black text-xl">01</span>
                         </div>
                         <div className="relative z-10">
                            <h4 className="font-bold text-dark text-lg group-hover:text-blue-600 transition-colors">Diagnóstica</h4>
                            <p className="text-sm text-gray-500 leading-snug">Cuestionario inicial de competencia digital y análisis DAFO del centro.</p>
                         </div>
                      </div>

                      {/* 02 Formativa */}
                      <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-brand-orange hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden">
                         <div className="absolute right-0 top-0 h-16 w-16 bg-orange-50 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <div className="h-12 w-12 flex items-center justify-center bg-orange-50 text-brand-orange rounded-lg shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <span className="font-black text-xl">02</span>
                         </div>
                         <div className="relative z-10">
                            <h4 className="font-bold text-dark text-lg group-hover:text-brand-orange transition-colors">Formativa</h4>
                            <p className="text-sm text-gray-500 leading-snug">Feedback continuo en los foros de Moodle y superación de retos semanales.</p>
                         </div>
                      </div>

                      {/* 03 Sumativa */}
                      <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-secondary-green hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden">
                         <div className="absolute right-0 top-0 h-16 w-16 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <div className="h-12 w-12 flex items-center justify-center bg-emerald-50 text-secondary-green-dark rounded-lg shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <span className="font-black text-xl">03</span>
                         </div>
                         <div className="relative z-10">
                            <h4 className="font-bold text-dark text-lg group-hover:text-secondary-green-dark transition-colors">Sumativa</h4>
                            <p className="text-sm text-gray-500 leading-snug">Entrega y defensa del Proyecto de Innovación (SdA) diseñado durante el curso.</p>
                         </div>
                      </div>

                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* 5. ESQUEMA DE BLOQUES (ADDIE WEEKS 1-6) */}
       <section className="py-20 bg-light overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                   <Layers className="h-4 w-4 text-primary" /> Cronograma Oficial
                </div>
                <h2 className="text-3xl font-bold text-dark tracking-tight">Estructura Modular ADDIE</h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                   El curso sigue las 5 fases del diseño instruccional, garantizando que tu innovación tenga una base sólida antes de llegar al patio.
                </p>
             </div>
             
             <div className="relative">
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-24">
                   {[
                      { 
                         week: "Semana 1",
                         title: "Fase de ANÁLISIS", 
                         subtitle: "El Diagnóstico", 
                         desc: "Detectamos necesidades reales. Realizamos un análisis DAFO del centro y evaluamos la competencia digital inicial del alumnado.", 
                         icon: <Search className="h-8 w-8" />,
                         color: "blue"
                      },
                      { 
                         week: "Semana 2",
                         title: "Fase de DISEÑO", 
                         subtitle: "La Hoja de Ruta", 
                         desc: "Definimos los objetivos de aprendizaje y seleccionamos las competencias específicas LOMLOE y los descriptores operativos a trabajar.", 
                         icon: <Layout className="h-8 w-8" />,
                         color: "purple"
                      },
                      { 
                         week: "Semana 3 y 4",
                         title: "Fase de DESARROLLO", 
                         subtitle: "Creación de Contenidos", 
                         desc: "Aprendizaje técnico de las herramientas. Creación de recursos didácticos con Kinovea, Strava, Genially y configuración del aula en Moodle.", 
                         icon: <Wrench className="h-8 w-8" />, // Changed to Wrench/Tools
                         color: "pink",
                         isDevelopment: true // Flag to add Resource Link
                      },
                      { 
                         week: "Semana 5",
                         title: "Fase de IMPLEMENTACIÓN", 
                         subtitle: "El Piloto en el Patio", 
                         desc: "Estrategias de gestión de aula y puesta en marcha. Llevamos el proyecto diseñado al entorno real con los alumnos.", 
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
                      const colorClasses: {[key: string]: {text: string, bg: string, border: string, gradient: string}} = {
                         blue: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500", gradient: "from-blue-400 to-blue-600" },
                         purple: { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-500", gradient: "from-purple-400 to-purple-600" },
                         pink: { text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-500", gradient: "from-pink-400 to-pink-600" },
                         orange: { text: "text-brand-orange", bg: "bg-orange-50", border: "border-brand-orange", gradient: "from-orange-400 to-orange-600" },
                         green: { text: "text-secondary-green-dark", bg: "bg-emerald-50", border: "border-secondary-green", gradient: "from-emerald-400 to-emerald-600" }
                      };
                      const colors = colorClasses[module.color];

                      return (
                         <div key={idx} className={`relative flex flex-col md:flex-row items-center group ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 mb-4 md:mb-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                               <div className={`bg-white p-8 rounded-2xl shadow-sm border-l-4 ${colors.border} hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1`}>
                                  <div className={`absolute right-0 top-0 h-24 w-24 ${colors.bg} rounded-bl-full -mr-10 -mt-10 opacity-50`}></div>
                                  <h3 className={`text-xl font-black ${colors.text} mb-1 uppercase tracking-wider text-sm`}>{module.week}: {module.title}</h3>
                                  <h4 className="text-xl font-bold text-dark mb-3">{module.subtitle}</h4>
                                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{module.desc}</p>
                                  
                                  {/* Link to Resources for Development Phase */}
                                  {module.isDevelopment && (
                                     <Link to="/resources" className="inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-primary transition-colors border-t border-gray-100 pt-3 w-full justify-end">
                                        Ver Herramientas del Módulo <ArrowRight className="h-3 w-3" />
                                     </Link>
                                  )}
                                </div>
                            </div>
                            <div className="absolute left-[28px] md:left-1/2 -ml-3.5 w-7 h-7 rounded-full border-4 border-white bg-gray-300 z-10 shadow-sm group-hover:scale-125 transition-transform duration-300" style={{backgroundColor: 'var(--tw-colors-' + module.color + '-500)'}}>
                               <div className={`w-full h-full rounded-full ${colors.bg}`}></div>
                            </div>
                            <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pl-12 flex justify-start' : 'md:pr-12 flex justify-end'}`}>
                               <div className={`hidden md:flex items-center gap-4 w-full ${!isLeft ? 'justify-end' : ''}`}>
                                  {isLeft && <div className={`h-1 flex-1 bg-gradient-to-r ${colors.gradient} opacity-20 rounded-full`}></div>}
                                  <div className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                     {module.icon}
                                  </div>
                                  {!isLeft && <div className={`h-1 flex-1 bg-gradient-to-l ${colors.gradient} opacity-20 rounded-full`}></div>}
                               </div>
                               <div className="md:hidden flex items-center gap-4 mb-2">
                                   <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-md`}>
                                     {/* Explicitly cast to ReactElement with className prop to resolve type error */}
                                     {React.cloneElement(module.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
                                   </div>
                               </div>
                            </div>
                         </div>
                      )
                   })}
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Program;
const Monitor = ({className}: {className?: string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
);
const Wrench = ({className}: {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);