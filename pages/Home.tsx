import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, 
  CloudOff, Gamepad2, GraduationCap, Download, Settings, Brain, List, Wrench, Quote, Watch, PlayCircle, Activity, ExternalLink, Youtube, Box
} from 'lucide-react';

const Home: React.FC = () => {
  // NOTA: Con el iframe de SharePoint/OneDrive, no necesitamos gestión de estado (play/pause)
  // ya que el reproductor de Microsoft gestiona sus propios controles internamente.

  // URL del vídeo proporcionada (OneDrive público - Versión Optimizada)
  const videoUrl = "https://1drv.ms/v/c/176b0767a5ca5a26/IQSwqDjqP9uAQLa3dr_2w8aaAY050-kAMM482u9C3vVVzOE";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 z-10 relative">
            
            {/* Hierarchy Clarification: EduMotion Lab Presents */}
            <div className="animate-fade-in flex flex-col gap-4 mb-2">
               <span className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">
                  EduMotion Lab presenta:
               </span>
               
               {/* High Visibility Badge - Dynamic & Animated */}
               <div className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-secondary-green to-secondary-green-dark text-white shadow-[0_0_25px_rgba(74,222,128,0.4)] w-fit transition-transform hover:scale-105 animate-bounce-subtle border-4 border-white ring-4 ring-secondary-green/10">
                  <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="relative text-sm sm:text-base font-black uppercase tracking-wide drop-shadow-sm">
                     Nuevo Curso 2026 • Actualizado LOMLOE
                  </span>
               </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent w-fit animate-fade-in-up pb-2">
              Innovar en Movimiento
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light text-gray-500 max-w-lg animate-fade-in-up delay-100">
              Accede a una <strong>Caja de Herramientas Tecnológicas</strong> real para el patio. Gestiona, evalúa y gamifica tu asignatura desde nuestro entorno <strong>Moodle (EVA)</strong>.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up delay-200">
              <Link to="/register" className="h-12 px-8 rounded-xl bg-gradient-to-r from-secondary-green-dark to-primary hover:from-secondary-green hover:to-primary-dark text-white font-black text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Inscribirse al Curso
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
                
                <span className="relative z-10">Ver Herramientas</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100 animate-fade-in-up delay-300">
               <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Docente 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" alt="Coach" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
               </div>
               <div>
                  <div className="flex text-brand-orange text-sm">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-gray-500"><span className="font-bold text-dark">800+</span> Alumnos formados por EduMotion</p>
               </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Overlay */}
          <div className="relative min-h-[400px] w-full h-full rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden group animate-fade-in">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
               style={{
                 // IMAGEN HERO: Mujer con Tablet en entorno deportivo (Enlace estable verificado)
                 backgroundImage: 'url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2070")',
                 filter: 'grayscale(100%) brightness(0.6)'
               }}
             ></div>
             
             <div className="absolute inset-0 bg-primary/40 mix-blend-color"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay"></div>
             
             <div className="absolute inset-0 p-8 flex items-end justify-start">
                {/* SVG Overlay Lines (Dotted Curves) */}
                <svg className="w-full h-full opacity-90 absolute inset-0 pointer-events-none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 300">
                   <defs>
                     <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                       <stop offset="0%" style={{stopColor:'#4ADE80', stopOpacity:1}}></stop>
                       <stop offset="100%" style={{stopColor:'#A855F7', stopOpacity:1}}></stop>
                     </linearGradient>
                   </defs>
                   {/* Green Dotted Line */}
                   <path d="M 20 280 C 80 150, 250 50, 380 120" fill="none" stroke="rgba(74, 222, 128, 0.9)" strokeDasharray="12 8" strokeLinecap="round" strokeWidth="5">
                      <animate attributeName="stroke-dashoffset" dur="30s" from="1000" repeatCount="indefinite" to="0"></animate>
                   </path>
                   {/* Purple Solid/Curved Line */}
                   <path d="M 40 280 Q 150 200, 360 220" fill="none" stroke="rgba(168, 85, 247, 0.9)" strokeLinecap="round" strokeWidth="6"></path>
                   {/* Endpoint Dots */}
                   <circle className="animate-pulse" cx="380" cy="120" fill="#4ADE80" r="10"></circle>
                   <circle cx="360" cy="220" fill="#A855F7" r="8"></circle>
                </svg>
                
                <div className="absolute bottom-6 right-6 flex gap-2">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg flex items-center gap-2">
                      <Activity className="text-secondary-green h-5 w-5" />
                      <span className="text-white text-xs font-bold">Tecnología Invisible</span>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold uppercase tracking-wider text-sm">
            <PlayCircle className="h-5 w-5" />
            <span>Filosofía EduMotion</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-8">
             Diseña Situaciones de Aprendizaje de Impacto
          </h2>
          
          {/* Contenedor del Video - OneDrive Iframe Responsive */}
          <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-black ring-1 ring-gray-900/5 group">
             {/* 
                Usamos 'aspect-video' para asegurar la proporción 16:9 y que se adapte
                a cualquier ancho de pantalla (móvil o PC).
             */}
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
          </div>
        </div>
      </section>

      {/* Company/Stats Section */}
      <section className="py-20 bg-white" id="company">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
               <span className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-2 block">EduMotion Lab</span>
               <h2 className="text-3xl md:text-4xl font-bold text-dark">Expertos en Didáctica de la Educación Física</h2>
               <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                  Acompañamos a docentes y centros en el proceso de transformación hacia una Educación Física más competencial. Este curso es el resultado de 5 años de investigación.
               </p>
               <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
                  <div className="p-6 rounded-2xl bg-light border border-gray-100">
                     <h3 className="text-5xl font-black text-primary mb-2">5+</h3>
                     <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Años de experiencia</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-light border border-gray-100">
                     <h3 className="text-5xl font-black text-secondary-green mb-2">120+</h3>
                     <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Centros asesorados</p>
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
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">El Curso</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">¿Qué es "Innovar en Movimiento"?</h2>
              <p className="text-gray-500">
                 Es el ecosistema de formación diseñado por EduMotion Lab para dar respuesta a los retos del nuevo currículo educativo.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
              {/* Card 1 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 border-b-4 border-brand-orange group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <Box className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">Caja de Herramientas</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    Aprende a usar <strong>Trello, Plickers, Kinovea y Actionbound</strong>. Herramientas prácticas para gestión, evaluación y gamificación.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-b-4 border-primary group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <GraduationCap className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">Foco LOMLOE</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    Diseña SdA alineadas con los <strong>Descriptores Operativos</strong> y utiliza rúbricas digitales (CoRubrics) para la evaluación competencial.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-secondary-green/10 transition-all duration-300 border-b-4 border-secondary-green group h-full relative overflow-hidden transform hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-green/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                 <div className="w-16 h-16 rounded-2xl bg-green-50 text-secondary-green-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                    <Brain className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-dark mb-4 relative z-10">Entorno Moodle</h3>
                 <p className="text-gray-500 text-base leading-relaxed relative z-10">
                    Todo integrado en nuestro <strong>EVA (Entorno Virtual de Aprendizaje)</strong>. Aprende a crear contenidos interactivos H5P para tu alumnado.
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
                  <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">Estructura del Programa</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark">Claves de la Formación</h2>
                  <p className="text-gray-500 mt-4">
                     Un recorrido práctico por los pilares de la Educación Física moderna: metodologías, evaluación y TIC.
                  </p>
               </div>
               <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                  Descargar Guía Docente <Download className="h-5 w-5" />
               </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                  <div 
                     className="absolute inset-0 bg-cover bg-center" 
                     // IMAGEN CLAVES FORMACIÓN: Gente corriendo en pista (Enlace estable verificado)
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
                           Usamos <strong>Trello y Notion</strong> para la fase de Planificación y Diseño Instruccional riguroso.
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
                           Domina <strong>Plickers, CoRubrics</strong> y listas de cotejo digitales para evaluar Descriptores Operativos.
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
                           Creación de Gymkhanas digitales con <strong>Actionbound</strong> y gamificación de aula con <strong>ClassCraft</strong>.
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
                        <h4 className="text-lg font-bold text-dark mb-1">Rendimiento y Salud</h4>
                        <p className="text-sm text-gray-500">
                           Análisis biomecánico con <strong>Kinovea</strong> y seguimiento de actividad con <strong>Strava y Google Fit</strong>.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-light" id="testimonials">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-secondary-green-dark font-bold text-sm uppercase tracking-wider mb-2 block">Experiencias</span>
               <h2 className="text-3xl md:text-4xl font-bold text-dark">Voces de la Innovación</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {/* Testimonial 1 */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-8 text-primary bg-white px-2">
                     <Quote className="h-8 w-8 fill-current" />
                  </div>
                  <p className="text-gray-500 mb-6 mt-2 italic">
                     "Por fin entiendo cómo aterrizar la LOMLOE en mi programación sin volverme loca con los papeles. El enfoque práctico es lo mejor."
                  </p>
                  <div className="flex items-center gap-4">
                     <img alt="Laura Gomez" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"/>
                     <div>
                        <h5 className="font-bold text-dark text-sm">Lucía Méndez</h5>
                        <p className="text-xs text-gray-400">Docente de Secundaria</p>
                     </div>
                     <div className="ml-auto flex text-brand-orange">
                        {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                     </div>
                  </div>
               </div>

               {/* Testimonial 2 */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-8 text-secondary-green bg-white px-2">
                     <Quote className="h-8 w-8 fill-current" />
                  </div>
                  <p className="text-gray-500 mb-6 mt-2 italic">
                     "He pasado de las fichas de papel a evaluar por rúbricas digitales en tiempo real. Mis alumnos están más motivados que nunca."
                  </p>
                  <div className="flex items-center gap-4">
                     <img alt="Pablo Fernandez" className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary-green/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"/>
                     <div>
                        <h5 className="font-bold text-dark text-sm">Carlos Ruiz</h5>
                        <p className="text-xs text-gray-400">Especialista en Primaria</p>
                     </div>
                     <div className="ml-auto flex text-brand-orange">
                        {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                     </div>
                  </div>
               </div>

               {/* Testimonial 3 */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-8 text-accent bg-white px-2">
                     <Quote className="h-8 w-8 fill-current" />
                  </div>
                  <p className="text-gray-500 mb-6 mt-2 italic">
                     "Innovar en Movimiento nos ha dado la estructura que necesitábamos en el departamento para unificar criterios y modernizarnos."
                  </p>
                  <div className="flex items-center gap-4">
                     <img alt="Marta Diaz" className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"/>
                     <div>
                        <h5 className="font-bold text-dark text-sm">Marta Sánchez</h5>
                        <p className="text-xs text-gray-400">Jefa de Departamento</p>
                     </div>
                     <div className="ml-auto flex text-brand-orange">
                         {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;