import React from 'react';
import { Lightbulb, Users, Leaf, Target, Award, ArrowRight, Rocket, Mail, Link as LinkIcon, Zap, Eye, Mic2, Flag, CheckCircle, ClipboardCheck, Puzzle, Compass, Heart, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ImageWithLoader from '../components/ImageWithLoader';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Olga Asurmendi",
      role: "Dirección y Estrategia",
      image: "https://1drv.ms/i/c/176b0767a5ca5a26/IQSNgAD8Qu0xSohe2Q5xBUuDARhl-haeCoOwtfCZOWoHC-w?height=660", 
      isPhoto: true,
      bio: "Coordinadora general del proyecto. Experta en gestión de entornos e-learning y visión estratégica. Asegura que el proyecto cumpla los estándares de calidad y plazos del modelo ADDIE.",
      borderColor: "border-primary",
      shadowColor: "shadow-primary/10",
      textColor: "text-primary",
      iconColor: "text-primary"
    },
    {
      name: "José Manuel Cayuela",
      role: "Diseño Instruccional",
      image: "https://1drv.ms/i/c/176b0767a5ca5a26/IQTha01XaGuPQbPfE3eEgCGRAUOsnhIR3wHzDfd6r06Zmsg?height=660",
      isPhoto: true,
      bio: "Responsable Pedagógico. Su enfoque es puramente didáctico: define los objetivos de aprendizaje, las rúbricas y asegura que la tecnología responda a las necesidades reales del currículo de EF.",
      borderColor: "border-secondary-green",
      shadowColor: "shadow-secondary-green/10",
      textColor: "text-secondary-green-dark",
      iconColor: "text-secondary-green-dark"
    },
    {
      name: "Pablo Gil", 
      role: "Responsable Tecnológico",
      image: "https://1drv.ms/i/c/176b0767a5ca5a26/IQTTAjvhZyOCRq7BBP8--dcAAZ1WqOPlbxV_-kh7YYRWSD4?height=660",
      isPhoto: true,
      bio: "Experto en implementación LMS y herramientas digitales. Se encarga de la configuración de Moodle, la integración de H5P y de asegurar la accesibilidad técnica y el soporte offline.",
      borderColor: "border-accent",
      shadowColor: "shadow-accent/10",
      textColor: "text-accent",
      iconColor: "text-accent"
    }
  ];

  const storySteps = [
    {
       year: "2019",
       title: "El Chispazo Inicial",
       icon: <Zap className="w-6 h-6" />,
       sideImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600", 
       content: (
          <div className="space-y-4">
             <p>Todo comenzó en una fría mañana, durante un congreso sobre innovación educativa. <strong>Olga, José Manuel y Pablo</strong> coincidieron en la cafetería tras una charla sobre digitalización. Los tres compartían la misma frustración: veían cómo la tecnología entraba en todas las aulas, excepto en el gimnasio.</p>
             <div className="bg-orange-50 border-l-4 border-orange-300 p-4 rounded-r-lg italic text-gray-600 text-sm">
                "Parece que si das Educación Física, estás condenado a elegir entre usar una tablet o que tus alumnos se muevan."
             </div>
             <p className="text-sm text-gray-500">— Comentó José Manuel. Esa frase fue el germen de EduMotion Lab.</p>
          </div>
       ),
       color: "bg-orange-100 text-orange-600 border-orange-200"
    },
    {
       year: "La Misión",
       title: "Tecnología Invisible",
       icon: <Eye className="w-6 h-6" />,
       sideImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=600",
       content: (
          <div className="space-y-3">
             <p>Decidieron que no querían crear "cursos de informática para profes de gimnasio". Querían algo más ambicioso. Olga, con su visión estratégica, planteó la necesidad de profesionalizar esta transición.</p>
             <p>Así nació el concepto de <strong>"Tecnología Invisible"</strong>: herramientas que están ahí para ayudar a evaluar y motivar, pero que no roban ni un segundo de "tiempo motor" al alumnado.</p>
          </div>
       ),
       color: "bg-blue-100 text-primary border-blue-200"
    },
    {
       year: "El Desarrollo",
       title: "Tres Voces, un Solo Modelo",
       icon: <Mic2 className="w-6 h-6" />,
       sideImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
       content: (
          <div className="space-y-4">
             <p className="text-sm text-gray-600 mb-2">El desarrollo de "Innovar en Movimiento" no fue un camino lineal. Cada miembro aportó una pieza clave:</p>
             <ul className="space-y-3 text-sm">
                <li className="bg-white/50 p-3 rounded-lg border border-purple-100">
                   <strong className="text-accent block mb-1">Pablo</strong>
                   centrado en la viabilidad técnica y la accesibilidad en zonas rurales.
                </li>
                <li className="bg-white/50 p-3 rounded-lg border border-purple-100">
                   <strong className="text-accent block mb-1">José Manuel</strong>
                   obsesionado con el diseño instruccional y la transferencia real al patio.
                </li>
                <li className="bg-white/50 p-3 rounded-lg border border-purple-100">
                   <strong className="text-accent block mb-1">Olga: Método y Rigor</strong>
                   Aplicó el modelo ADDIE para transformar ideas brillantes en un proyecto viable y medible.
                </li>
             </ul>
          </div>
       ),
       color: "bg-purple-100 text-accent border-purple-200"
    },
    {
       year: "Hoy",
       title: "EduMotion Lab Hoy",
       icon: <Flag className="w-6 h-6" />,
       sideImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
       content: (
          <div className="space-y-3">
             <p>Tras el éxito de prototipos como FlippedGym, entendimos que nuestra fuerza reside en nuestra diversidad. No somos solo diseñadores instruccionales; <strong>somos docentes que han pisado el patio</strong> y saben lo que es pasar lista mientras 30 adolescentes botan un balón.</p>
             <p>Hoy, nuestro programa es el resultado de cientos de horas de debate, café y la creencia de que la innovación empieza por cuidar a quienes enseñan.</p>
          </div>
       ),
       color: "bg-emerald-100 text-secondary-green-dark border-emerald-200"
    }
  ];

  const projects = [
    {
      year: "2023",
      title: "Proyecto 'EF-Gamify'",
      category: "Consejería de Extremadura",
      desc: "Implementación de gamificación en secundaria para mejorar la motivación, avalado por la Consejería de Educación.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-purple-50 text-accent"
    },
    {
      year: "2024",
      title: "Programa 'Evaluación 360'",
      category: "Red de Colegios Innovadores",
      desc: "Diseño de sistemas de evaluación competencial motriz mediante rúbricas digitales automatizadas.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      color: "bg-emerald-50 text-secondary-green-dark"
    },
    {
      year: "2025",
      title: "Workshop 'Tech & Sport'",
      category: "Congreso Internacional EF",
      desc: "Taller práctico sobre tecnologías emergentes en el deporte escolar, semilla del actual curso.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-blue-50 text-primary"
    },
    {
      year: "2026",
      title: "Innovar en Movimiento",
      category: "Proyecto Actual",
      desc: "Lanzamiento del primer curso de especialización docente basado en itinerarios adaptativos y DUA.",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-orange-50 text-brand-orange"
    }
  ];

  return (
    <div className="bg-light min-h-screen overflow-x-hidden font-body relative pb-20">
       {/* Background Blobs */}
       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-[-100px] w-96 h-96 bg-secondary-green/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px]"></div>
          <div className="absolute top-[40%] right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-[60px]"></div>
       </div>

       {/* Hero Section */}
       <section className="pt-20 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 animate-fade-in-up">
                   
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
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase mb-6 border border-orange-200">
                         <Rocket className="h-4 w-4" /> Sobre Nosotros
                      </div>
                   </div>
                   
                   <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4">
                      {t('about.hero.title')}
                   </h1>
                   
                   <p className="text-lg text-gray-500 leading-relaxed mb-6">
                      {t('about.hero.desc')}
                   </p>

                   <div className="mb-8 p-4 bg-white/60 backdrop-blur-sm border-l-4 border-accent rounded-r-xl shadow-sm">
                      <div className="flex items-start gap-3">
                         <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                         <p className="text-sm text-gray-600">
                            Aplicamos el rigor científico del <strong>Modelo ADDIE</strong> (Análisis, Diseño, Desarrollo, Implementación y Evaluación) para garantizar que cada innovación tenga un impacto pedagógico medible y real.
                         </p>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                         <div className="text-3xl font-black text-primary mb-1">800+</div>
                         <div className="text-xs font-bold text-gray-400 uppercase">Docentes Formados</div>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                         <div className="text-3xl font-black text-secondary-green mb-1">120+</div>
                         <div className="text-xs font-bold text-gray-400 uppercase">Centros Adheridos</div>
                      </div>
                   </div>
                </div>
                
                <div className="lg:w-1/2 relative animate-fade-in-up delay-100">
                   <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white aspect-[4/3]">
                      <ImageWithLoader 
                          src="https://1drv.ms/i/c/176b0767a5ca5a26/IQSVyLh7ZZYESoTjCOHVW5m0AR0pU2SFGCNmA0SVR5j-sFg?width=660" 
                          alt="Alumnos en gimnasio escolar" 
                          imgClassName="w-full h-full object-cover"
                          priority={true} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                         <p className="font-bold text-lg">Tecnología Invisible</p>
                         <p className="text-sm opacity-90">Conectando movimiento y datos al aire libre.</p>
                      </div>
                   </div>
                   <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl"></div>
                   <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-gray-50 rounded-3xl"></div>
                </div>
             </div>
          </div>
       </section>

       {/* Misión, Visión y Valores (Pillars) - Explicit for University Indicator */}
       <section className="py-20 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Identidad Corporativa</span>
                <h2 className="text-3xl font-bold text-dark">Misión, Visión y Valores</h2>
                <p className="text-gray-500 mt-2">Los fundamentos estratégicos que definen nuestra identidad.</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Misión */}
                <div className="p-8 bg-light rounded-2xl border-t-4 border-primary hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Target className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">{t('about.mission.title')}</h3>
                   <p className="text-gray-500 leading-relaxed text-sm">
                      {t('about.mission.desc')}
                   </p>
                </div>
                
                {/* Visión */}
                <div className="p-8 bg-light rounded-2xl border-t-4 border-accent hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="w-14 h-14 bg-purple-100 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Compass className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Nuestra Visión</h3>
                   <p className="text-gray-500 leading-relaxed text-sm">
                      Ser el referente iberoamericano en innovación tecnopedagógica para el deporte, liderando el cambio hacia aulas saludables y digitales.
                   </p>
                </div>
                
                {/* Valores 1 */}
                <div className="p-8 bg-light rounded-2xl border-t-4 border-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Heart className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Valores: Inclusión</h3>
                   <p className="text-gray-500 leading-relaxed text-sm">
                      Diseño Universal para el Aprendizaje (DUA). Creamos tecnología accesible para que ningún estudiante se quede atrás.
                   </p>
                </div>

                {/* Valores 2 */}
                <div className="p-8 bg-light rounded-2xl border-t-4 border-secondary-green hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="w-14 h-14 bg-emerald-100 text-secondary-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-green group-hover:text-white transition-colors">
                      <Leaf className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-dark">Valores: Sostenibilidad</h3>
                   <p className="text-gray-500 leading-relaxed text-sm">
                      Fomento de Recursos Educativos Abiertos (REA) y software libre para democratizar la educación de calidad.
                   </p>
                </div>
             </div>
          </div>
       </section>

       {/* Story Section */}
       <section className="py-24 bg-light relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <span className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-2 block">Nuestra Historia</span>
                <h2 className="text-3xl md:text-4xl font-black text-dark">Del Patio al Entorno Digital</h2>
             </div>

             <div className="relative">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-12 md:space-y-24">
                   {storySteps.map((step, idx) => (
                      <div key={idx} className="relative z-10">
                         <div className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                             
                            {/* Image */}
                            <div className="hidden md:block w-full md:w-5/12 pl-12 md:pl-0">
                               <div className={`relative rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-video transform transition-all duration-500 hover:scale-105 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                                  <ImageWithLoader
                                    src={step.sideImage} 
                                    alt={`Imagen relacionada con ${step.title}`}
                                    className="w-full h-full"
                                    imgClassName="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
                               </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="absolute left-6 md:left-1/2 -ml-6 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 bg-white">
                               <div className={`w-full h-full rounded-full flex items-center justify-center ${step.color.split(' ')[1]}`}>
                                  {step.icon}
                               </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 pl-16 md:pl-0">
                               <div className="block md:hidden mb-4 rounded-xl overflow-hidden shadow-md border-2 border-white">
                                  <ImageWithLoader src={step.sideImage} alt="" className="w-full h-40" imgClassName="object-cover" />
                               </div>
                               <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-4 ${step.color} hover:shadow-xl transition-all duration-300`}>
                                  <div className="flex items-center gap-3 mb-3">
                                     <span className="text-sm font-black text-gray-300 uppercase tracking-widest">{step.year}</span>
                                  </div>
                                  <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                                  <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                                     {step.content}
                                  </div>
                               </div>
                            </div>

                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </section>

       {/* Team Section */}
       <section className="py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">{t('about.team.title')}</span>
                <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">{t('about.team.subtitle')}</h2>
                <p className="text-gray-500 text-lg">
                   Profesionales apasionados que combinan la experiencia docente con el conocimiento técnico.
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {teamMembers.map((member, idx) => (
                   <div key={idx} className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 ${member.borderColor} group hover:shadow-2xl hover:shadow-${member.borderColor.split('-')[1]}/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full`}>
                      <div className="relative h-80 overflow-hidden shrink-0 bg-gray-50 border-b border-gray-100 flex items-end justify-center">
                         <ImageWithLoader 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full"
                            imgClassName={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${member.isPhoto ? 'object-contain object-bottom' : 'object-contain object-bottom p-4'}`}
                         />
                      </div>

                      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative">
                         {/* Name Container - Adjusted for top alignment and equal height */}
                         <div className="mb-5 pb-5 border-b border-gray-100 flex flex-col justify-start">
                            <h3 className={`text-2xl font-black ${member.textColor} mb-2 leading-tight whitespace-pre-line min-h-[3.5rem]`}>
                               {member.name}
                            </h3>
                            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{member.role}</p>
                         </div>
                         
                         <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            {member.bio}
                         </p>
                         
                         <div className="mt-auto pt-6 border-t border-gray-100 flex gap-6">
                             <a href="#" className={`text-gray-400 hover:${member.iconColor} transition-colors flex items-center gap-2 text-xs font-bold uppercase group/link`}>
                                <Mail className="h-4 w-4 group-hover/link:scale-110 transition-transform" /> Email
                             </a>
                             <a href="#" className={`text-gray-400 hover:${member.iconColor} transition-colors flex items-center gap-2 text-xs font-bold uppercase group/link`}>
                                <LinkIcon className="h-4 w-4 group-hover/link:scale-110 transition-transform" /> Portfolio
                             </a>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Realized Projects / History */}
       <section className="py-24 bg-light relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row gap-12">
                
                {/* Sticky Header */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                   <div className="inline-flex items-center gap-2 text-brand-orange font-bold mb-2 uppercase tracking-wider text-sm">
                      <span className="w-8 h-[2px] bg-brand-orange"></span>
                      Trayectoria
                   </div>
                   <h2 className="text-4xl font-black mb-6 text-dark leading-tight">Proyectos que dejan huella</h2>
                   <p className="text-gray-500 mb-8 leading-relaxed">
                      Desde seminarios iniciales hasta la revolución del aula invertida, hemos estado a la vanguardia de la educación física digital.
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-brand-orange/5 relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 bg-brand-orange/10 w-24 h-24 rounded-full blur-2xl"></div>
                      <div className="relative z-10">
                         <div className="text-5xl font-black text-brand-orange mb-1">5+</div>
                         <div className="text-sm font-bold text-dark">Años transformando aulas</div>
                         <div className="w-full bg-orange-100 h-1.5 mt-4 rounded-full overflow-hidden">
                            <div className="bg-brand-orange h-full w-3/4 rounded-full"></div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Projects List */}
                <div className="md:w-2/3 space-y-8">
                   {projects.map((project, idx) => (
                      <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group">
                         <div className="flex flex-col sm:flex-row gap-6">
                            <div className="shrink-0 flex flex-col items-center">
                               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.color} mb-3 group-hover:scale-110 transition-transform`}>
                                  {project.icon}
                               </div>
                               <span className="text-xs font-bold text-gray-400 py-1 px-3 bg-light rounded-full border border-gray-200">{project.year}</span>
                            </div>
                            <div>
                               <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gray-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                     {project.category}
                                  </span>
                               </div>
                               <p className="text-gray-500 leading-relaxed mb-4">{project.desc}</p>
                               <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                  Ver detalles <ArrowRight className="h-4 w-4" />
                               </button>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </section>
       
       {/* CTA Navegabilidad */}
       <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">¿Quieres contactar con el equipo?</h3>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all">
               Ir al Formulario de Contacto <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
       </section>
    </div>
  );
};

export default About;