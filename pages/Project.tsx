import React, { useState } from 'react';
import { 
  Monitor, Zap, CheckCircle, ArrowRight, Activity, Smartphone, 
  Users, Building, Target, Rocket, Accessibility, 
  Linkedin, Instagram, Mail, Quote,
  ZoomIn, X, Layers, Brain, Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithLoader from '../components/ImageWithLoader';

const Project: React.FC = () => {
  // Estado modificado para gestionar la URL de la imagen activa en el Lightbox
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="animate-fade-in bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white border-b border-gray-100">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-center lg:text-left space-y-8">
              
              {/* Social Buttons - STANDARDIZED */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Síguenos:</span>
                <div className="flex gap-3 items-center">
                  <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                  <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                  <Link to="/contact" className="flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                     <Mail className="h-3.5 w-3.5" /> Newsletter
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider animate-fade-in shadow-sm mb-2">
                    <Monitor className="h-4 w-4" /> Metodología del Curso
                 </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] animate-fade-in-up pb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent">
                 Metodología del Curso: <br/> Innovar en Movimiento
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100">
                 La respuesta formativa diseñada para integrar tecnología y motricidad. Una metodología basada en el modelo <strong>ADDIE</strong> y centralizada en <strong>Moodle</strong> para garantizar el rigor pedagógico.
              </p>
            </div>

            <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative group animate-fade-in-up delay-200">
              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden group border-8 border-white transform transition-transform hover:scale-[1.01] duration-500 rotate-1 hover:rotate-0 aspect-[4/3] md:aspect-auto md:h-[500px]">
                <ImageWithLoader 
                  src="https://1drv.ms/i/c/176b0767a5ca5a26/IQQNNV9nH9VWR7ua6r8eVXGQAcBOVL4roLyiUdAwUyyxn3k?width=1080"
                  alt="Estudiantes en entorno educativo innovador EduMotion"
                  className="w-full h-full"
                  imgClassName="object-contain group-hover:scale-105"
                  priority={true}
                />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40 flex items-center justify-between gap-4 z-20 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary animate-pulse">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Moodle EVA</p>
                      <p className="text-dark font-black text-lg leading-tight">Monitoreo Activo</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-primary font-black text-2xl">94%</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Participación</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-blue-100 rounded-[2.5rem] rotate-3 opacity-50"></div>
              <div className="absolute -z-20 top-16 -right-16 w-full h-full bg-accent/10 rounded-[2.5rem] rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILOSOFÍA Y DATOS: IMPACTO & BRECHA DIGITAL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="font-black text-xl text-dark flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg"><Activity className="h-6 w-6" /></div>
                    Impacto en el Tiempo Motor
                  </h3>
                </div>
                
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-wide">
                      <Smartphone className="h-4 w-4" /> Uso tradicional
                    </div>
                    <span className="font-black text-2xl text-gray-400">35%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                    <div className="bg-gray-400 h-full rounded-full w-[35%]"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium italic">El alumno permanece estático consumiendo contenido.</p>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wide">
                      <Zap className="h-4 w-4" /> EduMotion
                    </div>
                    <span className="font-black text-2xl text-primary">90%</span>
                  </div>
                  <div className="w-full bg-blue-50 rounded-full h-6 overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                    <div className="bg-gradient-to-r from-primary to-blue-400 h-full rounded-full w-[90%] shadow-[0_0_20px_rgba(0,120,212,0.5)] flex items-center justify-end px-3">
                       <span className="text-[10px] text-white font-bold tracking-widest">ALTAMENTE ACTIVO</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary/80 mt-2 font-bold">Tecnología invisible (Plickers, Kinovea) que incentiva el movimiento.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black text-dark tracking-tight leading-tight">Rompiendo la brecha digital en el patio</h2>
                <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              <p className="text-xl text-gray-500 leading-relaxed">
                 Existe un temor fundado entre los docentes: que la introducción de dispositivos en el gimnasio o el patio reduzca el <strong className="text-dark bg-yellow-100 px-1">tiempo de compromiso motor</strong>. Nuestra propuesta aborda este desafío directamente.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                 <p className="text-lg text-gray-600 leading-relaxed italic">
                    "No traemos pantallas para mirar sentados. Implementamos <strong className="text-primary not-italic">tecnología invisible</strong>: herramientas como <strong>Actionbound</strong> o <strong>Strava</strong> que recopilan datos y gamifican la experiencia, potenciando la actividad física sin interrumpirla."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section className="py-28 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Zap className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 h-[500px] w-[500px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Quote className="h-12 w-12 text-primary mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-10">
             "Tecnología al servicio del movimiento, <br className="hidden md:block"/><span className="text-primary">no al revés</span>"
          </h2>
          <div className="inline-block border border-white/20 rounded-full px-8 py-3 bg-white/5 backdrop-blur-md">
             <p className="text-sm font-bold tracking-[0.2em] text-gray-300">FILOSOFÍA EDUMOTION</p>
          </div>
        </div>
      </section>

      {/* 4. CÓMO APRENDEMOS: METODOLOGÍA ABR + ABP */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Cómo Aprendemos</span>
                <h2 className="text-4xl font-black text-dark mb-4">Metodología Activa y Tutorización</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    No consiste en ver vídeos pasivamente. Es un sistema gamificado "Learning by doing".
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-purple-50 text-accent rounded-2xl shrink-0"><Target className="h-8 w-8"/></div>
                        <h4 className="text-2xl font-black text-dark">Retos Semanales (ABR)</h4>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg mb-6">
                        Pequeñas tareas prácticas que suman puntos semana a semana: configurar una rúbrica, grabar un gesto técnico o crear un cuestionario H5P.
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-50">
                        <span className="text-xs font-bold bg-purple-100 text-purple-700 px-3 py-1 rounded-full uppercase">Evaluación Continua</span>
                    </div>
                </div>

                <div className="flex flex-col p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-blue-50 text-primary rounded-2xl shrink-0"><Layers className="h-8 w-8"/></div>
                        <h4 className="text-2xl font-black text-dark">Proyecto Final (ABP)</h4>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg mb-6">
                        Construcción progresiva de tu propia Situación de Aprendizaje (SdA) completa, que defenderás al final del curso ante el tutor.
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-50">
                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">Aplicación Real</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-black text-dark mb-4">Itinerarios Adaptativos</h3>
                        <p className="text-lg text-gray-500 mb-6">
                            Sabemos que cada docente tiene un nivel digital diferente. Por eso ofrecemos dos velocidades de aprendizaje en el mismo curso:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">1</span>
                                <span className="font-bold text-gray-700">Itinerario Fondo:</span> Para iniciación y consolidación.
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">2</span>
                                <span className="font-bold text-gray-700">Itinerario Sprint:</span> Para usuarios avanzados que buscan retos extra.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                           <div className="bg-brand-orange p-2 rounded-lg text-white"><Brain className="h-6 w-6" /></div>
                           <h4 className="font-bold text-dark text-lg">Tutorización Activa</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            No estás solo/a. Contarás con foros de dudas, feedback personalizado en cada entrega y videoconferencias de seguimiento. Aprendizaje "Learning by doing" con soporte real.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. SISTEMA DE EVALUACIÓN (Antigua Tríada) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-secondary-green-dark font-bold text-sm uppercase tracking-wider mb-2 block">Cómo Calificamos</span>
               <h2 className="text-4xl font-black text-dark">Sistema Integral de Evaluación</h2>
               <p className="text-gray-500 mt-4 text-xl">Uso de Rúbricas Digitales automatizadas para una calificación objetiva.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                 {/* 01 Diagnóstica */}
                <div className="group flex flex-col p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 hover:bg-blue-50 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                    <div className="h-16 w-16 flex items-center justify-center bg-white text-blue-600 rounded-2xl shadow-sm font-black text-3xl mb-6 group-hover:scale-110 transition-transform">01</div>
                    <h4 className="font-bold text-dark text-2xl mb-3 group-hover:text-blue-700">Diagnóstica</h4>
                    <p className="text-gray-500 group-hover:text-blue-600/80 leading-relaxed">
                        Cuestionario inicial y análisis DAFO del centro para situar el punto de partida del docente.
                    </p>
                </div>

                {/* 02 Formativa */}
                <div className="group flex flex-col p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 hover:bg-orange-50 hover:border-orange-100 hover:shadow-xl transition-all duration-300 transform md:-translate-y-4">
                    <div className="h-16 w-16 flex items-center justify-center bg-white text-brand-orange rounded-2xl shadow-sm font-black text-3xl mb-6 group-hover:scale-110 transition-transform">02</div>
                    <h4 className="font-bold text-dark text-2xl mb-3 group-hover:text-brand-orange">Formativa</h4>
                    <p className="text-gray-500 group-hover:text-orange-600/80 leading-relaxed">
                        Feedback continuo semana a semana mediante la entrega de retos prácticos y autoevaluación.
                    </p>
                </div>

                {/* 03 Sumativa */}
                <div className="group flex flex-col p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 hover:bg-emerald-50 hover:border-emerald-100 hover:shadow-xl transition-all duration-300">
                    <div className="h-16 w-16 flex items-center justify-center bg-white text-secondary-green-dark rounded-2xl shadow-sm font-black text-3xl mb-6 group-hover:scale-110 transition-transform">03</div>
                    <h4 className="font-bold text-dark text-2xl mb-3 group-hover:text-secondary-green-dark">Sumativa</h4>
                    <p className="text-gray-500 group-hover:text-emerald-600/80 leading-relaxed">
                        Defensa del Proyecto de Innovación (SdA) y calificación final ponderada.
                    </p>
                </div>
            </div>

            {/* NUEVA INFOGRAFÍA DE EVALUACIÓN CON OPTIMIZACIÓN */}
            <div className="mt-16">
                <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-5xl mx-auto cursor-zoom-in bg-white hover:shadow-primary/20 transition-all duration-300">
                   {/* Usamos ImageWithLoader para carga progresiva sin recortar */}
                   <ImageWithLoader
                      src="https://1drv.ms/i/c/176b0767a5ca5a26/IQSzGjwFIJ0qSL_993p3FflfAT_ckTmNVaBHBAcKqCwC1Y0?width=1024"
                      alt="Esquema del Sistema de Evaluación"
                      className="w-full bg-white"
                      imgClassName="w-full h-auto object-contain"
                      onClick={() => setActiveLightboxImage("https://1drv.ms/i/c/176b0767a5ca5a26/IQSzGjwFIJ0qSL_993p3FflfAT_ckTmNVaBHBAcKqCwC1Y0?width=1600")}
                   />
                   
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md text-dark font-bold px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                          <ZoomIn className="h-5 w-5 text-primary" /> Ampliar Esquema
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. PÚBLICO OBJETIVO */}
      <section className="py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 text-brand-orange mb-6 shadow-sm border border-orange-100 animate-bounce-subtle">
               <Users className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-black text-dark">Público Objetivo</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-xl">
               Tres niveles de impacto para una transformación integral.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Perfil Profesional */}
            <div className="bg-white rounded-[2.5rem] p-2 hover:shadow-2xl transition-all duration-500 group">
               <div className="h-full bg-slate-50 rounded-[2rem] border border-gray-100 p-8 flex flex-col relative overflow-hidden">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10 shadow-sm">
                     <Smartphone className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black text-dark mb-1 relative z-10">Profesional</h3>
                  <p className="text-primary font-bold text-sm mb-6 uppercase tracking-wider relative z-10">El Docente de Aula</p>
                  <p className="text-gray-500 mb-8 leading-relaxed flex-grow relative z-10">
                     Para profesores de Educación Física que necesitan herramientas prácticas (Trello, CoRubrics) para modernizar sus clases.
                  </p>
                  
                  {/* Objectives Box */}
                  <div className="mt-auto bg-white rounded-xl p-5 border border-gray-100 relative z-10">
                    <h4 className="flex items-center gap-2 font-bold text-dark text-sm mb-3">
                        <Target className="h-4 w-4" /> Objetivos:
                    </h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            Evaluar competencias LOMLOE.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            Gamificar sesiones con Apps.
                        </li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Perfil Institucional */}
            <div className="bg-white rounded-[2.5rem] p-2 hover:shadow-2xl transition-all duration-500 group transform lg:-translate-y-4">
               <div className="h-full bg-slate-50 rounded-[2rem] border border-gray-100 p-8 flex flex-col relative overflow-hidden">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-secondary-green-dark mb-6 relative z-10 shadow-sm">
                     <Building className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black text-dark mb-1 relative z-10">Institucional</h3>
                  <p className="text-secondary-green-dark font-bold text-sm mb-6 uppercase tracking-wider relative z-10">El Centro Educativo</p>
                  <p className="text-gray-500 mb-8 leading-relaxed flex-grow relative z-10">
                     Para equipos directivos y coordinadores TIC que buscan integrar Moodle y el Plan Digital de Centro en el departamento de EF.
                  </p>

                  {/* Objectives Box */}
                  <div className="mt-auto bg-white rounded-xl p-5 border border-gray-100 relative z-10">
                    <h4 className="flex items-center gap-2 font-bold text-dark text-sm mb-3">
                        <Target className="h-4 w-4" /> Objetivos:
                    </h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-secondary-green-dark shrink-0 mt-0.5" />
                            Unificar criterios de evaluación.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-secondary-green-dark shrink-0 mt-0.5" />
                            Equipamiento sostenible.
                        </li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Perfil Estratégico */}
            <div className="bg-white rounded-[2.5rem] p-2 hover:shadow-2xl transition-all duration-500 group">
               <div className="h-full bg-slate-50 rounded-[2rem] border border-gray-100 p-8 flex flex-col relative overflow-hidden">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-accent mb-6 relative z-10 shadow-sm">
                     <Rocket className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black text-dark mb-1 relative z-10">Estratégico</h3>
                  <p className="text-accent font-bold text-sm mb-6 uppercase tracking-wider relative z-10">Administración y Asesores</p>
                  <p className="text-gray-500 mb-8 leading-relaxed flex-grow relative z-10">
                     Para responsables de políticas educativas que buscan programas escalables basados en evidencias y salud digital (Google Fit, Strava).
                  </p>

                  {/* Objectives Box */}
                  <div className="mt-auto bg-white rounded-xl p-5 border border-gray-100 relative z-10">
                    <h4 className="flex items-center gap-2 font-bold text-dark text-sm mb-3">
                        <Target className="h-4 w-4" /> Objetivos:
                    </h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            Políticas de salud escolar.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            Lucha contra el sedentarismo.
                        </li>
                    </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PILARES FUNDAMENTALES (Antes Objetivos/Valor Diferencial) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-dark mb-4">Pilares Transversales</h2>
             <p className="text-xl text-gray-500">Valores que sustentan nuestra propuesta educativa.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { 
                 title: "Inclusión Universal (DUA)", 
                 desc: "Diseño basado en el Checklist DUA, asegurando materiales accesibles para todo el alumnado.",
                 icon: <Accessibility className="h-12 w-12" />,
                 color: "text-blue-600",
                 bg: "bg-blue-50"
               },
               { 
                 title: "Sostenibilidad (REA)", 
                 desc: "Compromiso con los Recursos Educativos Abiertos duraderos y el software libre.",
                 icon: <Leaf className="h-12 w-12" />,
                 color: "text-secondary-green-dark",
                 bg: "bg-emerald-50"
               },
               { 
                 title: "Comunidades", 
                 desc: "Fomento de redes de colaboración docente en Moodle para compartir buenas prácticas.",
                 icon: <Users className="h-12 w-12" />,
                 color: "text-brand-orange",
                 bg: "bg-orange-50"
               }
             ].map((obj, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-center">
                   <div className={`w-20 h-20 mx-auto ${obj.bg} ${obj.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      {obj.icon}
                   </div>
                   <h3 className="text-2xl font-black text-dark mb-4">{obj.title}</h3>
                   <p className="text-gray-500 text-lg leading-relaxed">{obj.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* NEW: INFOGRAFÍA (Resumen Visual) CON OPTIMIZACIÓN */}
      <section className="py-20 bg-slate-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-dark mb-4">Resumen de Curso</h2>
                <p className="text-gray-500 text-lg">
                  Esquema gráfico del proceso metodológico. Pulsa para ampliar.
                </p>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in bg-white hover:shadow-primary/20 transition-all duration-300">
               {/* Usamos ImageWithLoader para carga progresiva sin recortar */}
               <ImageWithLoader 
                  src="https://1drv.ms/i/c/176b0767a5ca5a26/IQRPfUbTDn9WT57IEU0WM_OCAYyOtYPMKEF-iluozcdFQxI?width=1024"
                  alt="Infografía Resumen del Curso"
                  className="w-full bg-white"
                  imgClassName="w-full h-auto object-contain"
                  onClick={() => setActiveLightboxImage("https://1drv.ms/i/c/176b0767a5ca5a26/IQRPfUbTDn9WT57IEU0WM_OCAYyOtYPMKEF-iluozcdFQxI?width=1600")}
               />

               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md text-dark font-bold px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                      <ZoomIn className="h-5 w-5 text-primary" /> Ampliar
                  </div>
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

      {/* FINAL CTA */}
      <section className="py-24 bg-white border-t border-gray-200">
         <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl font-black text-dark">¿Listo para innovar en el movimiento?</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Únete a la próxima cohorte de docentes transformadores y lleva tu clase al siguiente nivel.</p>
            <Link to="/register" className="inline-flex items-center gap-3 bg-dark text-white text-lg font-bold py-5 px-10 rounded-2xl transition-all shadow-xl shadow-dark/20 hover:shadow-2xl hover:-translate-y-1 hover:bg-black group">
               Inscríbete Ahora <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Project;