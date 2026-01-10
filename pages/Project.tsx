import React from 'react';
import { 
  Monitor, Heart, Zap, Globe, Share2, Layers, 
  CheckCircle, ArrowRight, Activity, Smartphone, 
  Users, Building, Target, Rocket, Accessibility, 
  Cpu, Recycle, Search, PenTool, Code, Play, BarChart2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Project: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-light to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider animate-fade-in">
                 <Monitor className="h-4 w-4" /> Iniciativa EduMotion Lab
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent tracking-tight leading-[1.1] animate-fade-in-up pb-2">
                 Innovar en Movimiento
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100">
                 La respuesta formativa que <strong>EduMotion Lab</strong> ha diseñado para integrar tecnología y motricidad. Una "Caja de Herramientas" pedagógicas centralizada en <strong>Moodle</strong>.
              </p>
            </div>

            <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative group animate-fade-in-up delay-200">
              {/* Contenedor fluido sin aspect-ratio forzado para mostrar imagen completa */}
              <div className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden group border-4 border-white transform transition-transform hover:scale-[1.01] duration-500">
                
                {/* Imagen ajustada a 'w-full h-auto' para respetar su proporción original sin recortes */}
                <img 
                  src="https://1drv.ms/i/c/176b0767a5ca5a26/IQQNNV9nH9VWR7ua6r8eVXGQAcBOVL4roLyiUdAwUyyxn3k?width=1080"
                  alt="Estudiantes en entorno educativo innovador EduMotion"
                  className="w-full h-auto object-contain relative z-0 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlays posicionados absolutamente sobre la imagen fluida */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-white/20 flex items-center justify-between gap-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2.5 rounded-full text-primary animate-pulse">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Moodle EVA</p>
                      <p className="text-dark font-bold text-sm leading-tight">Monitoreo Activo</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-primary font-bold text-lg">94%</p>
                    <p className="text-[10px] text-gray-500 font-medium">Participación</p>
                  </div>
                </div>
              </div>
              
              {/* Elemento decorativo detrás */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-100/50 rounded-2xl rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACTO & BRECHA DIGITAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-light rounded-2xl p-8 border border-gray-100 shadow-inner">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-dark flex items-center gap-2">
                    <Activity className="text-primary h-5 w-5" />
                    Impacto en el Tiempo Motor
                  </h3>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <Smartphone className="h-4 w-4" /> Uso tradicional de pantallas
                    </div>
                    <span className="font-bold text-dark">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gray-400 h-full rounded-full w-[35%]"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 italic">El alumno permanece estático consumiendo contenido.</p>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2 text-sm text-primary font-bold">
                      <Zap className="h-4 w-4" /> Metodología EduMotion
                    </div>
                    <span className="font-bold text-primary">90%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/30 animate-[pulse_2s_infinite]"></div>
                    <div className="bg-primary h-full rounded-full w-[90%] shadow-[0_0_15px_rgba(19,91,236,0.6)]"></div>
                  </div>
                  <p className="text-xs text-primary/70 mt-2 font-medium">Tecnología invisible (Plickers, Kinovea) que incentiva el movimiento.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-dark tracking-tight">Rompiendo la brecha digital en el patio</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                 Existe un temor fundado entre los docentes: que la introducción de dispositivos en el gimnasio o el patio reduzca el <strong className="text-dark">tiempo de compromiso motor</strong>. Nuestra propuesta aborda este desafío directamente.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                 No traemos pantallas para mirar sentados. Implementamos <strong className="text-primary font-medium">tecnología invisible</strong>: herramientas como <strong>Actionbound</strong> o <strong>Strava</strong> que recopilan datos y gamifican la experiencia, potenciando la actividad física sin interrumpirla.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                  <span className="text-gray-700 font-medium">Evaluación por Descriptores Operativos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                  <span className="text-gray-700 font-medium">Foco en el movimiento real del alumnado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Zap className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 h-[400px] w-[400px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-8">
             "Tecnología al servicio del movimiento, <br className="hidden md:block"/>no al revés"
          </h2>
          <div className="inline-block border border-white/30 rounded-full px-6 py-2 bg-white/10 backdrop-blur-sm">
             <p className="text-sm font-medium tracking-wide">FILOSOFÍA EDUMOTION</p>
          </div>
        </div>
      </section>

      {/* 4. VALOR DIFERENCIAL (Cards Grid) - SINCRONIZADAS AL 100% */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <h2 className="text-3xl font-bold text-dark">Valor Diferencial e Innovación</h2>
             <p className="text-gray-500">Pilares fundamentales que guían nuestra metodología educativa y tecnológica para garantizar un impacto real en el aula.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Monitor className="h-8 w-8" />, 
                title: "Tecnología Invisible", 
                desc: "Herramientas como Plickers que no requieren dispositivos en manos de los alumnos.",
                color: "text-primary",
                bg: "bg-blue-50"
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Ecosistema Moodle", 
                desc: "Centralizamos todos los recursos (H5P, Canvas SdA) en un entorno seguro y conocido.",
                color: "text-secondary-green-dark",
                bg: "bg-emerald-50"
              },
              { 
                icon: <Share2 className="h-8 w-8" />, 
                title: "Itinerarios Adaptativos", 
                desc: "Diseñamos dos velocidades de aprendizaje: 'Fondo' para iniciación y 'Sprint' para expertos.",
                color: "text-accent",
                bg: "bg-purple-50"
              },
              { 
                icon: <Recycle className="h-8 w-8" />, 
                title: "Sostenibilidad (REA)", 
                desc: "Compromiso con los Recursos Educativos Abiertos duraderos, reutilizables y adaptables.",
                color: "text-brand-orange",
                bg: "bg-orange-50"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in-up"
              >
                 <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-dark group-hover:to-gray-800 group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                    {item.icon}
                 </div>
                 <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PÚBLICO OBJETIVO - DINAMISMO ASÍNCRONO */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 text-brand-orange mb-4 border border-orange-100 animate-bounce-subtle">
               <Users className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Público Objetivo</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
               Hemos estructurado el proyecto en tres niveles de impacto para garantizar una transformación integral del ecosistema educativo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Perfil Profesional */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
               <div className="h-2 w-full bg-primary"></div>
               <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 animate-bounce-subtle group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                     <Smartphone className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-2">Profesional</h3>
                  <p className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">El Docente de Aula</p>
                  <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                     Para profesores de Educación Física que necesitan herramientas prácticas (Trello, CoRubrics) para modernizar sus clases.
                  </p>
                  <div className="bg-light p-4 rounded-xl border border-gray-100 space-y-3">
                     <h4 className="font-bold text-dark text-sm mb-2 flex items-center gap-2"><Target className="h-4 w-4"/> Objetivos:</h4>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5"/> <span>Evaluar competencias LOMLOE.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5"/> <span>Gamificar sesiones con Apps.</span></li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Perfil Institucional */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
               <div className="h-2 w-full bg-secondary-green"></div>
               <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-secondary-green-dark mb-6 animate-bounce-subtle [animation-delay:300ms] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                     <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-2">Institucional</h3>
                  <p className="text-secondary-green-dark font-bold text-sm mb-6 uppercase tracking-wider">El Centro Educativo</p>
                  <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                     Para equipos directivos y coordinadores TIC que buscan integrar Moodle y el Plan Digital de Centro en el departamento de EF.
                  </p>
                  <div className="bg-light p-4 rounded-xl border border-gray-100 space-y-3">
                     <h4 className="font-bold text-dark text-sm mb-2 flex items-center gap-2"><Target className="h-4 w-4"/> Objetivos:</h4>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary-green-dark shrink-0 mt-0.5"/> <span>Unificar criterios de evaluación.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary-green-dark shrink-0 mt-0.5"/> <span>Equipamiento sostenible.</span></li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Perfil Estratégico */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
               <div className="h-2 w-full bg-accent"></div>
               <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-accent mb-6 animate-bounce-subtle [animation-delay:600ms] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                     <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-2">Estratégico</h3>
                  <p className="text-accent font-bold text-sm mb-6 uppercase tracking-wider">Administración y Asesores</p>
                  <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                     Para responsables de políticas educativas que buscan programas escalables basados en evidencias y salud digital (Google Fit, Strava).
                  </p>
                  <div className="bg-light p-4 rounded-xl border border-gray-100 space-y-3">
                     <h4 className="font-bold text-dark text-sm mb-2 flex items-center gap-2"><Target className="h-4 w-4"/> Objetivos:</h4>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5"/> <span>Políticas de salud escolar.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5"/> <span>Lucha contra el sedentarismo.</span></li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OBJETIVOS ESTRATÉGICOS */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-dark mb-4">Objetivos Estratégicos</h2>
                <p className="text-gray-500">Nuestros pilares para una implementación exitosa y transformadora.</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             {[
               { 
                 title: "Innovación Tecnopedagógica", 
                 desc: "Implementación de herramientas como Genially y H5P para crear contenidos interactivos.",
                 icon: <Cpu className="h-20 w-20" />
               },
               { 
                 title: "Inclusión Universal", 
                 desc: "Diseño basado en DUA y el Checklist de Inclusión, asegurando materiales accesibles para todos.",
                 icon: <Accessibility className="h-20 w-20" />
               },
               { 
                 title: "Evaluación Competencial", 
                 desc: "Uso de Rúbricas Digitales para calificar Descriptores Operativos de forma objetiva.",
                 icon: <Rocket className="h-20 w-20" />
               },
               { 
                 title: "Comunidades de Práctica", 
                 desc: "Fomento de redes de colaboración docente en Moodle para compartir experiencias.",
                 icon: <Users className="h-20 w-20" />
               }
             ].map((obj, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-primary/20">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-primary transform group-hover:scale-110 duration-500">
                      {obj.icon}
                   </div>
                   <h3 className="text-xl font-bold text-dark mb-3 relative z-10">{obj.title}</h3>
                   <p className="text-gray-500 mb-6 relative z-10 text-sm">{obj.desc}</p>
                   <div className="h-1 w-12 bg-primary rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. MODELO ADDIE (Timeline Detallado) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-4">
                <Layers className="h-4 w-4" /> Metodología Científica
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-dark mb-6">Modelo de Diseño Instruccional ADDIE</h2>
             <p className="text-gray-500 text-lg leading-relaxed">
                Adaptamos el estándar mundial de diseño educativo. No improvisamos; estructuramos la innovación en 5 fases críticas utilizando <strong>Moodle</strong> como eje vertebrador.
             </p>
          </div>

          <div className="grid gap-8 lg:gap-12 relative">
             <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 hidden md:block rounded-full"></div>

             {[
               { 
                 letter: "A", title: "Análisis y Diagnóstico", 
                 subtitle: "Kit Digital y DigCompEdu",
                 desc: "Evaluamos la competencia digital inicial y los recursos del centro.",
                 icon: <Search className="h-5 w-5"/>, color: "bg-blue-600"
               },
               { 
                 letter: "D", title: "Diseño Instruccional", 
                 subtitle: "Planificación con Trello/Notion",
                 desc: "Estructuramos itinerarios y definimos las SdA usando el Canvas oficial.",
                 icon: <PenTool className="h-5 w-5"/>, color: "bg-indigo-600"
               },
               { 
                 letter: "D", title: "Desarrollo de Recursos", 
                 subtitle: "Entorno Moodle (EVA)",
                 desc: "Configuramos el aula virtual, subimos contenidos H5P y preparamos las e-rúbricas.",
                 icon: <Code className="h-5 w-5"/>, color: "bg-purple-600"
               },
               { 
                 letter: "I", title: "Implementación Piloto", 
                 subtitle: "Acción en el Patio",
                 desc: "Uso real de Plickers y Actionbound con los alumnos. Tutorización experta.",
                 icon: <Play className="h-5 w-5"/>, color: "bg-pink-600"
               },
               { 
                 letter: "E", title: "Evaluación de Impacto", 
                 subtitle: "Informes Competenciales",
                 desc: "Analizamos resultados en CoRubrics y medimos la mejora del tiempo motor.",
                 icon: <BarChart2 className="h-5 w-5"/>, color: "bg-brand-orange"
               },
             ].map((phase, idx) => (
               <div key={idx} className="relative md:pl-24 group">
                  <div className={`hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl ${phase.color} text-white items-center justify-center font-black text-2xl shadow-lg shadow-gray-200 z-10 transition-transform group-hover:scale-110`}>
                     {phase.letter}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                     <div className={`md:hidden absolute top-0 right-0 w-12 h-12 rounded-bl-2xl ${phase.color} text-white flex items-center justify-center font-bold`}>
                        {phase.letter}
                     </div>

                     <div className="flex items-center gap-3 mb-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                        {phase.icon}
                        <span>Fase {idx + 1}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-dark mb-1">{phase.title}</h3>
                     <h4 className="text-primary font-medium mb-4">{phase.subtitle}</h4>
                     <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        {phase.desc}
                     </p>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-12 text-center">
             <Link to="/program" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Ver desglose de Herramientas Digitales <ArrowRight className="h-5 w-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-light">
         <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold text-dark">¿Listo para innovar en el movimiento?</h2>
            <p className="text-gray-500 text-lg">Únete a la próxima cohorte de docentes transformadores.</p>
            <Link to="/register" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-brand-orange hover:from-accent-light hover:to-brand-orange-light text-white text-lg font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-accent/25 hover:-translate-y-1">
               Inscríbete Ahora <ArrowRight className="h-5 w-5" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Project;