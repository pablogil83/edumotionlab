import React from 'react';
import { 
  Download, Laptop, Clock, BarChart, 
  Puzzle, Trophy, Accessibility, 
  Search, Layout, Layers, Rocket, 
  GraduationCap, Palette, MousePointerClick, FileCode, Box,
  ClipboardCheck, Users, ShieldCheck, CheckCircle, Sparkles, User, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Program: React.FC = () => {
  const handleDownload = () => {
      alert("Iniciando descarga de Guía_Docente_EduMotion.pdf...");
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
                      <Sparkles className="h-4 w-4" /> Convocatoria Abierta
                   </div>
                   
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark tracking-tight leading-[1.1] animate-fade-in-up">
                      Estructura del Curso: <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent">Innovar en Movimiento</span>
                   </h1>
                   
                   <p className="text-lg text-gray-500 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                      Un itinerario de especialización diseñado para dominar la programación por competencias y las metodologías activas en Educación Física.
                   </p>

                   <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-2 animate-fade-in-up delay-200">
                      <button 
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all w-full sm:w-auto"
                      >
                         <Download className="h-5 w-5" /> Descargar Guía Docente (PDF)
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
                <h2 className="text-3xl font-bold text-dark tracking-tight">Detalles del Programa</h2>
                <p className="text-gray-500 mt-2">Formación reconocida y alineada con los estándares europeos DigCompEdu.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   { icon: <Laptop className="h-8 w-8" />, title: "Asíncrono con Tutorización", desc: "A tu ritmo, pero acompañado. Feedback personalizado en cada reto entregable.", color: "text-primary", bg: "bg-blue-50" },
                   { icon: <Clock className="h-8 w-8" />, title: "Carga de 30 Horas", desc: "Distribuidas en 6 semanas. Formato intensivo compatible con tu horario lectivo.", color: "text-brand-orange", bg: "bg-orange-50" },
                   { icon: <BarChart className="h-8 w-8" />, title: "Evaluación Competencial", desc: "Sin exámenes teóricos. Se evalúa tu capacidad para crear recursos (Vídeos, Rúbricas, SdA).", color: "text-secondary-green-dark", bg: "bg-emerald-50" }
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

       {/* 3. METODOLOGÍA DIDÁCTICA */}
       <section className="py-16 lg:py-24 bg-white border-y border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                   <div className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto">
                      <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-30" viewBox="0 0 400 400" preserveAspectRatio="none">
                         <path d="M200 30 L80 320" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
                         <path d="M200 30 L320 320" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
                         <path d="M80 320 L320 320" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
                         <path d="M200 200 L200 30" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />
                         <path d="M200 200 L80 320" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />
                         <path d="M200 200 L320 320" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />
                         <circle cx="200" cy="200" r="140" stroke="#e2e8f0" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                      </svg>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                         <div className="relative group cursor-default">
                            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 via-accent to-pink-500 text-white shadow-2xl shadow-accent/30 flex flex-col items-center justify-center relative z-10 animate-[bounceSubtle_4s_infinite]">
                               <Layers className="h-8 w-8 mb-1 opacity-90" />
                               <span className="text-xl font-black tracking-widest drop-shadow-md">LOMLOE</span>
                               <span className="text-[9px] uppercase font-bold opacity-70 tracking-wider mt-0.5">Ejes</span>
                            </div>
                         </div>
                      </div>

                      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-20">
                         <div className="w-24 h-24 rounded-2xl bg-white border-2 border-pink-100 text-pink-600 shadow-xl shadow-pink-100/50 flex items-center justify-center mb-2 transform group-hover:-translate-y-2 group-hover:bg-pink-50 transition-all duration-300">
                            <Laptop className="h-10 w-10" />
                         </div>
                         <div className="bg-white px-3 py-1 rounded-full shadow border border-gray-100 font-bold text-gray-600 text-xs uppercase tracking-wide group-hover:text-pink-600 group-hover:border-pink-200 transition-colors">
                            Apps & Nube
                         </div>
                      </div>

                      <div className="absolute bottom-[10%] left-[5%] flex flex-col items-center group cursor-pointer z-20">
                         <div className="w-24 h-24 rounded-2xl bg-white border-2 border-orange-100 text-brand-orange shadow-xl shadow-orange-100/50 flex items-center justify-center mb-2 transform group-hover:-translate-y-2 group-hover:bg-orange-50 transition-all duration-300">
                            <Puzzle className="h-10 w-10" />
                         </div>
                         <div className="bg-white px-3 py-1 rounded-full shadow border border-gray-100 font-bold text-gray-600 text-xs uppercase tracking-wide group-hover:text-brand-orange group-hover:border-orange-200 transition-colors">
                            Diseño Inverso
                         </div>
                      </div>

                      <div className="absolute bottom-[10%] right-[5%] flex flex-col items-center group cursor-pointer z-20">
                         <div className="w-24 h-24 rounded-2xl bg-white border-2 border-emerald-100 text-secondary-green-dark shadow-xl shadow-emerald-100/50 flex items-center justify-center mb-2 transform group-hover:-translate-y-2 group-hover:bg-emerald-50 transition-all duration-300">
                            <Accessibility className="h-10 w-10" />
                         </div>
                         <div className="bg-white px-3 py-1 rounded-full shadow border border-gray-100 font-bold text-gray-600 text-xs uppercase tracking-wide group-hover:text-secondary-green-dark group-hover:border-emerald-200 transition-colors">
                            Inclusión DUA
                         </div>
                      </div>
                   </div>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                   <div className="mb-8">
                      <h2 className="text-3xl font-bold text-dark tracking-tight mb-4">Metodología Basada en la Práctica</h2>
                      <p className="text-gray-500 text-lg">No solo teoría. Ofrecemos herramientas para que el cambio sea visible en tus clases desde el primer día.</p>
                   </div>
                   
                   <div className="space-y-8">
                      {/* Pilar 1 */}
                      <div className="flex gap-6 group">
                         <div className="shrink-0 h-14 w-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                            <Laptop className="h-7 w-7" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-pink-600 transition-colors">Del Gimnasio a la Nube</h3>
                            <p className="text-gray-500 leading-relaxed">Uso instrumental de Apps (Kinovea, Google Lens). Aprendemos a capturar evidencias motrices sin detener la clase.</p>
                         </div>
                      </div>

                      {/* Pilar 2 */}
                      <div className="flex gap-6 group">
                         <div className="shrink-0 h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                            <Puzzle className="h-7 w-7" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-brand-orange transition-colors">Diseño Inverso (LOMLOE)</h3>
                            <p className="text-gray-500 leading-relaxed">No programamos por cumplir. Diseñamos Situaciones de Aprendizaje (SdA) que parten del criterio de evaluación y terminan en el movimiento.</p>
                         </div>
                      </div>

                      {/* Pilar 3 */}
                      <div className="flex gap-6 group">
                         <div className="shrink-0 h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-secondary-green-dark group-hover:bg-secondary-green-dark group-hover:text-white transition-colors duration-300">
                            <Accessibility className="h-7 w-7" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-secondary-green-dark transition-colors">Inclusión Radical (DUA)</h3>
                            <p className="text-gray-500 leading-relaxed">Materiales con subtítulos y lecturas adaptadas. Elige tu ritmo: itinerario "Fondo" (guiado) o "Sprint" (autónomo).</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* 4. ESQUEMA DE BLOQUES */}
       <section className="py-20 bg-light overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-dark tracking-tight">Cronograma del Curso (6 Semanas)</h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Un itinerario progresivo para transformar tu programación paso a paso.</p>
             </div>
             
             <div className="relative">
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-24">
                   {[
                      { 
                         title: "Semana 1: El Kit Digital del Docente", 
                         subtitle: "Curación de Apps", 
                         desc: "Selección y curación de Apps para el registro de datos y privacidad en el patio.", 
                         icon: <Laptop className="h-8 w-8" />,
                         color: "blue"
                      },
                      { 
                         title: "Semana 2: Pedagogía del Movimiento (Flipped)", 
                         subtitle: "Vídeo-análisis", 
                         desc: "Creación de vídeo-análisis técnico y píldoras audiovisuales para el alumnado.", 
                         icon: <Layout className="h-8 w-8" />,
                         color: "purple"
                      },
                      { 
                         title: "Semana 3: Gamificación y Narrativas", 
                         subtitle: "Experiencias Inmersivas", 
                         desc: "Diseño de experiencias inmersivas y circuitos QR geolocalizados en el centro.", 
                         icon: <Puzzle className="h-8 w-8" />,
                         color: "pink"
                      },
                      { 
                         title: "Semana 4: Evaluación 2.0", 
                         subtitle: "Calificación Automática", 
                         desc: "Automatización de calificaciones con e-rúbricas (CoRubrics) y listas de cotejo digitales.", 
                         icon: <ClipboardCheck className="h-8 w-8" />,
                         color: "teal"
                      },
                      { 
                         title: "Semana 5: Proyecto Integrador (SdA)", 
                         subtitle: "Diseño Completo", 
                         desc: "Ensamblaje de la Situación de Aprendizaje completa aplicando todo lo aprendido.", 
                         icon: <Layers className="h-8 w-8" />,
                         color: "orange"
                      },
                      { 
                         title: "Semana 6: Implementación y Cierre", 
                         subtitle: "Certificación", 
                         desc: "Puesta en práctica piloto, autoevaluación docente y certificación final.", 
                         icon: <GraduationCap className="h-8 w-8" />,
                         color: "green"
                      }
                   ].map((module, idx) => {
                      const isLeft = idx % 2 === 0;
                      const colorClasses: {[key: string]: {text: string, bg: string, border: string, gradient: string}} = {
                         blue: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500", gradient: "from-blue-400 to-blue-600" },
                         purple: { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-500", gradient: "from-purple-400 to-purple-600" },
                         pink: { text: "text-pink-600", bg: "bg-pink-50", border: "border-pink-500", gradient: "from-pink-400 to-pink-600" },
                         teal: { text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-500", gradient: "from-teal-400 to-teal-600" },
                         orange: { text: "text-brand-orange", bg: "bg-orange-50", border: "border-brand-orange", gradient: "from-orange-400 to-orange-600" },
                         green: { text: "text-secondary-green-dark", bg: "bg-emerald-50", border: "border-secondary-green", gradient: "from-emerald-400 to-emerald-600" }
                      };
                      const colors = colorClasses[module.color];

                      return (
                         <div key={idx} className={`relative flex flex-col md:flex-row items-center group ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 mb-4 md:mb-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                               <div className={`bg-white p-8 rounded-2xl shadow-sm border-l-4 ${colors.border} hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1`}>
                                  <div className={`absolute right-0 top-0 h-24 w-24 ${colors.bg} rounded-bl-full -mr-10 -mt-10 opacity-50`}></div>
                                  <h3 className={`text-xl font-black ${colors.text} mb-1 uppercase tracking-wider text-sm`}>{module.title}</h3>
                                  <h4 className="text-xl font-bold text-dark mb-3">{module.subtitle}</h4>
                                  <p className="text-gray-500 text-sm leading-relaxed">{module.desc}</p>
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