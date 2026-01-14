import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layout, BookOpen, FileText, Map, Sword, Presentation, 
  Activity, Video, Heart, QrCode, Table, CheckCircle, ExternalLink, 
  Layers, Cpu, HeartPulse, GraduationCap, ArrowRight, Box, Linkedin, Instagram, Mail
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Definición de tipos para las herramientas
type ToolType = 'Software' | 'App móvil' | 'Plantilla';

interface Tool {
  name: string;
  description: string;
  type: ToolType;
  icon: React.ReactNode;
  link: string;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  headerIcon: React.ReactNode;
  colorTheme: 'blue' | 'purple' | 'green' | 'orange';
  tools: Tool[];
}

const Resources: React.FC = () => {
  const { t } = useLanguage();
  
  const sections: Section[] = [
    {
      id: 'addie',
      title: "1. Gestión y Planificación",
      subtitle: "Eje Organizativo (ADDIE)",
      headerIcon: <Layers className="h-6 w-6" />,
      colorTheme: 'blue',
      tools: [
        {
          name: "Trello",
          description: "Gestión visual de proyectos mediante tableros kanban. Ideal para coordinar el trabajo del departamento.",
          type: "Software",
          icon: <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg" alt="Trello" className="w-full h-full object-contain p-2" />,
          link: "https://trello.com"
        },
        {
          name: "Notion",
          description: "Espacio de trabajo todo en uno para notas, bases de datos, wikis y gestión de proyectos docentes.",
          type: "Software",
          icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="w-full h-full object-contain p-2" />,
          link: "https://www.notion.so"
        },
        {
          name: "iDoceo",
          description: "El cuaderno de notas del profesor para iPad. Planificador, diario y programación didáctica.",
          type: "App móvil",
          icon: <img src="https://www.idoceo.net/images/icon_1024.png" alt="iDoceo" className="w-full h-full object-contain rounded-xl" />,
          link: "https://www.idoceo.net"
        },
        {
          name: "Additio",
          description: "Plataforma de gestión escolar y evaluación formativa. Cuaderno digital multiplataforma.",
          type: "Software",
          icon: <img src="https://static.additioapp.com/images/additio_logo_rrss.png" alt="Additio" className="w-full h-full object-contain rounded-xl" />,
          link: "https://additioapp.com"
        }
      ]
    },
    {
      id: 'gamification',
      title: "2. Metodologías Activas",
      subtitle: "Eje de Gamificación",
      headerIcon: <Cpu className="h-6 w-6" />,
      colorTheme: 'purple',
      tools: [
        {
          name: "Actionbound",
          description: "Crea aventuras interactivas y gymkhanas digitales para el aprendizaje móvil al aire libre.",
          type: "App móvil",
          icon: <img src="https://en.actionbound.com/assets/img/brand/actionbound-icon.png" alt="Actionbound" className="w-full h-full object-contain p-1" />,
          link: "https://en.actionbound.com"
        },
        {
          name: "Habitica",
          description: "App RPG 'pixel art' para gamificar hábitos saludables (sueño, hidratación, deporte) fuera del aula.",
          type: "App móvil",
          icon: <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Habitica_logo.png" alt="Habitica" className="w-full h-full object-contain p-1" />,
          link: "https://habitica.com"
        },
        {
          name: "Genially",
          description: "Herramienta líder para crear contenidos interactivos, breakouts y presentaciones animadas.",
          type: "Software",
          icon: <img src="https://static.genial.ly/resources/brand/logos/genially_icon_blue.svg" alt="Genially" className="w-full h-full object-contain p-2" />,
          link: "https://genially.com"
        }
      ]
    },
    {
      id: 'performance',
      title: "3. Rendimiento e Hibridación",
      subtitle: "Eje de Salud Digital",
      headerIcon: <HeartPulse className="h-6 w-6" />,
      colorTheme: 'green',
      tools: [
        {
          name: "Strava",
          description: "Red social para atletas que permite registrar, analizar y compartir actividades deportivas GPS.",
          type: "App móvil",
          icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Strava_Logo.svg" alt="Strava" className="w-full h-full object-contain p-2" />,
          link: "https://www.strava.com"
        },
        {
          name: "Kinovea",
          description: "Software de referencia gratuito y de código abierto para el análisis de vídeo del gesto deportivo.",
          type: "Software",
          icon: <img src="https://www.kinovea.org/images/kinovea-logo.png" alt="Kinovea" className="w-full h-full object-contain p-1" />,
          link: "https://www.kinovea.org"
        },
        {
          name: "Google Fit",
          description: "Plataforma de Google para monitorizar la actividad física y los objetivos de salud diarios.",
          type: "App móvil",
          icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Fit_icon_%282018%29.svg" alt="Google Fit" className="w-full h-full object-contain p-2" />,
          link: "https://www.google.com/fit"
        }
      ]
    },
    {
      id: 'evaluation',
      title: "4. Evaluación e Inclusión",
      subtitle: "Eje DUA y Formativo",
      headerIcon: <GraduationCap className="h-6 w-6" />,
      colorTheme: 'orange',
      tools: [
        {
          name: "Plickers",
          description: "Herramienta de evaluación rápida mediante códigos QR impresos, sin necesidad de dispositivos para alumnos.",
          type: "App móvil",
          icon: <img src="https://assets.plickers.com/brand/plickers-logo-mark.png" alt="Plickers" className="w-full h-full object-contain p-2" />,
          link: "https://get.plickers.com"
        },
        {
          name: "CoRubrics",
          description: "Complemento de Google Sheets para realizar procesos completos de coevaluación con rúbricas.",
          type: "Plantilla",
          icon: <img src="https://lh3.googleusercontent.com/-_7q_Wd-E4dc/XyZ_2q_8_AI/AAAAAAAAAAI/AAAAAAAAAAA/4M-g7_4M-g7_4M-g7_4M-g7/s128-c-k-no-mo/photo.jpg" alt="CoRubrics" className="w-full h-full object-contain p-1 rounded-full" />,
          link: "https://corubrics.com"
        },
        {
          name: "Checklist DUA",
          description: "Recursos y listas de verificación para asegurar el Diseño Universal para el Aprendizaje.",
          type: "Plantilla",
          icon: <img src="https://www.educadua.es/wp-content/themes/educadua/images/logo.png" alt="DUA" className="w-full h-full object-contain p-1 bg-white" />,
          link: "https://www.educadua.es/"
        }
      ]
    }
  ];

  const getThemeStyles = (theme: string) => {
    switch(theme) {
      case 'blue': return { 
        bg: 'bg-blue-50', text: 'text-primary', border: 'border-blue-200', 
        hoverShadow: 'hover:shadow-blue-200', iconBg: 'bg-white', accent: 'bg-primary' 
      };
      case 'purple': return { 
        bg: 'bg-purple-50', text: 'text-accent', border: 'border-purple-200', 
        hoverShadow: 'hover:shadow-purple-200', iconBg: 'bg-white', accent: 'bg-accent' 
      };
      case 'green': return { 
        bg: 'bg-emerald-50', text: 'text-secondary-green-dark', border: 'border-emerald-200', 
        hoverShadow: 'hover:shadow-emerald-200', iconBg: 'bg-white', accent: 'bg-secondary-green-dark' 
      };
      case 'orange': return { 
        bg: 'bg-orange-50', text: 'text-brand-orange', border: 'border-orange-200', 
        hoverShadow: 'hover:shadow-orange-200', iconBg: 'bg-white', accent: 'bg-brand-orange' 
      };
      default: return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', hoverShadow: 'hover:shadow-gray-200', iconBg: 'bg-white', accent: 'bg-gray-500' };
    }
  };

  const getTypeBadgeStyle = (type: ToolType) => {
     switch(type) {
        case 'Software': return "bg-gray-800 text-white";
        case 'App móvil': return "bg-white border border-gray-200 text-gray-700";
        case 'Plantilla': return "bg-amber-100 text-amber-800";
     }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Social Buttons - STANDARDIZED CENTERED */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Síguenos:</span>
             <div className="flex items-center gap-3">
               <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-colors shadow-sm" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
               <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-colors shadow-sm" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
               <Link to="/contact" className="flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  <Mail className="h-3 w-3" /> Newsletter
               </Link>
             </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-dark text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <Box className="h-4 w-4 text-brand-orange" /> Centro de Recursos
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4">
             Herramientas Digitales
          </h1>
          
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
             {t('resources.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FEATURED: MOODLE HUB - REDISEÑADO */}
      <section className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mb-20">
        <div className="bg-dark rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-slate-900 z-0"></div>
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full opacity-10 blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center p-10 md:p-14">
            
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" /> Ecosistema Central
              </div>
              
              <h2 className="text-4xl font-black text-white leading-tight">
                {t('resources.moodle.title')}
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {t('resources.moodle.desc')} Centralizamos todo el conocimiento, los foros de debate y las entregas de proyectos en un entorno seguro y accesible.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <a 
                   href="https://moodle.org" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white text-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all"
                 >
                   {t('resources.btn.access')} <ExternalLink className="h-5 w-5" />
                 </a>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="w-full lg:w-5/12 grid gap-4">
               {[
                  { icon: <Layers className="h-5 w-5" />, title: "Diseño ADDIE", desc: "Estructura modular clara." },
                  { icon: <Box className="h-5 w-5" />, title: "Interactividad H5P", desc: "Vídeos y cuestionarios activos." },
                  { icon: <CheckCircle className="h-5 w-5" />, title: "Evaluación 360", desc: "Rúbricas y feedback directo." }
               ].map((feat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                     <div className="p-3 bg-brand-orange text-white rounded-xl shadow-lg">
                        {feat.icon}
                     </div>
                     <div>
                        <h4 className="font-bold text-white text-base">{feat.title}</h4>
                        <p className="text-sm text-gray-400 mt-0.5">{feat.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIONES DE RECURSOS - CARDS ESTILO APP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">
        {sections.map((section) => {
          const styles = getThemeStyles(section.colorTheme);
          
          return (
            <section key={section.id} className="scroll-mt-28" id={section.id}>
              {/* Encabezado de Sección */}
              <div className="flex items-center gap-6 mb-10">
                 <div className={`w-16 h-16 rounded-[1.2rem] ${styles.bg} ${styles.text} flex items-center justify-center shadow-sm`}>
                    {React.cloneElement(section.headerIcon as React.ReactElement<{ className?: string }>, { className: "h-8 w-8" })}
                 </div>
                 <div>
                    <h2 className="text-3xl font-black text-dark">{section.title}</h2>
                    <div className={`h-1 w-20 ${styles.accent} rounded-full mt-2`}></div>
                    <p className="text-gray-500 font-medium mt-2 text-lg">{section.subtitle}</p>
                 </div>
              </div>

              {/* Grid de Tarjetas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.tools.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-2xl ${styles.hoverShadow} transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden group`}
                  >
                    {/* Background blob on hover */}
                    <div className={`absolute -right-10 -top-10 w-32 h-32 ${styles.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>

                    {/* Header Card */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                       <a href={tool.link} target="_blank" rel="noopener noreferrer" className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${styles.iconBg} shadow-sm border border-white overflow-hidden`}>
                          {tool.icon}
                       </a>
                       <span className={`px-3 py-1 h-fit rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm ${getTypeBadgeStyle(tool.type)}`}>
                          {tool.type}
                       </span>
                    </div>

                    {/* Content */}
                    <div className="mb-8 flex-grow relative z-10">
                       <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block">
                          <h3 className="text-2xl font-black text-dark mb-3 group-hover:text-primary transition-colors hover:underline decoration-2 underline-offset-2 decoration-primary/30">
                             {tool.name}
                          </h3>
                       </a>
                       <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {tool.description}
                       </p>
                    </div>

                    {/* Button */}
                    <a 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full py-3.5 rounded-xl bg-gray-50 text-dark font-bold text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-dark group-hover:text-white relative z-10`}
                    >
                       {t('resources.btn.access')} <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CTA FINAL */}
      <section className="py-24 bg-white border-t border-gray-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-dark mb-6">¿Echas en falta alguna herramienta?</h2>
            <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto">
               El ecosistema EduMotion está vivo. Si utilizas una App que funciona en tu patio, cuéntanoslo.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white border-2 border-primary text-primary text-lg font-bold py-4 px-10 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all hover:-translate-y-1 group">
               Sugerir Herramienta <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Resources;