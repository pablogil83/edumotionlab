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
  
  // Datos estructurados por Ejes - Movido dentro del componente para usar 't'
  const sections: Section[] = [
    {
      id: 'addie',
      title: "1. Eje de Gestión y Planificación",
      subtitle: "Basado en el Modelo ADDIE",
      headerIcon: <Layers className="h-6 w-6" />,
      colorTheme: 'blue',
      tools: [
        {
          name: "Trello",
          description: "Gestión visual de proyectos mediante tableros kanban. Ideal para coordinar el trabajo del departamento.",
          type: "Software",
          icon: <Layout className="h-8 w-8" />,
          link: "https://trello.com"
        },
        {
          name: "Notion",
          description: "Espacio de trabajo todo en uno para notas, bases de datos, wikis y gestión de proyectos docentes.",
          type: "Software",
          icon: <FileText className="h-8 w-8" />,
          link: "https://www.notion.so"
        },
        {
          name: "iDoceo / Additio",
          description: "Cuadernos digitales líderes para la gestión integral de notas, programación y competencias.",
          type: "App móvil",
          icon: <BookOpen className="h-8 w-8" />,
          link: "https://www.idoceo.net"
        }
      ]
    },
    {
      id: 'gamification',
      title: "2. Eje de Metodologías Activas",
      subtitle: "Gamificación y Aprendizaje Móvil",
      headerIcon: <Cpu className="h-6 w-6" />,
      colorTheme: 'purple',
      tools: [
        {
          name: "Actionbound",
          description: "Crea aventuras interactivas y gymkhanas digitales para el aprendizaje móvil al aire libre.",
          type: "App móvil",
          icon: <Map className="h-8 w-8" />,
          link: "https://en.actionbound.com"
        },
        {
          name: "ClassCraft",
          description: "Gamifica el comportamiento y la gestión del aula convirtiéndola en un juego de rol (RPG).",
          type: "Software",
          icon: <Sword className="h-8 w-8" />,
          link: "https://www.classcraft.com"
        },
        {
          name: "Genially",
          description: "Herramienta líder para crear contenidos interactivos, breakouts y presentaciones animadas.",
          type: "Software",
          icon: <Presentation className="h-8 w-8" />,
          link: "https://genially.com"
        }
      ]
    },
    {
      id: 'performance',
      title: "3. Eje de Rendimiento e Hibridación",
      subtitle: "Salud Digital y Análisis de Datos",
      headerIcon: <HeartPulse className="h-6 w-6" />,
      colorTheme: 'green',
      tools: [
        {
          name: "Strava",
          description: "Red social para atletas que permite registrar, analizar y compartir actividades deportivas GPS.",
          type: "App móvil",
          icon: <Activity className="h-8 w-8" />,
          link: "https://www.strava.com"
        },
        {
          name: "Kinovea",
          description: "Software de referencia gratuito y de código abierto para el análisis de vídeo del gesto deportivo.",
          type: "Software",
          icon: <Video className="h-8 w-8" />,
          link: "https://www.kinovea.org"
        },
        {
          name: "Google Fit",
          description: "Plataforma de Google para monitorizar la actividad física y los objetivos de salud diarios.",
          type: "App móvil",
          icon: <Heart className="h-8 w-8" />,
          link: "https://www.google.com/fit"
        }
      ]
    },
    {
      id: 'evaluation',
      title: "4. Eje de Evaluación e Inclusión",
      subtitle: "Diseño Universal (DUA) y Formativa",
      headerIcon: <GraduationCap className="h-6 w-6" />,
      colorTheme: 'orange',
      tools: [
        {
          name: "Plickers",
          description: "Herramienta de evaluación rápida mediante códigos QR impresos, sin necesidad de dispositivos para alumnos.",
          type: "App móvil",
          icon: <QrCode className="h-8 w-8" />,
          link: "https://get.plickers.com"
        },
        {
          name: "CoRubrics",
          description: "Complemento de Google Sheets para realizar procesos completos de coevaluación con rúbricas.",
          type: "Plantilla",
          icon: <Table className="h-8 w-8" />,
          link: "https://corubrics.com"
        },
        {
          name: "Checklist DUA",
          description: "Recursos y listas de verificación para asegurar el Diseño Universal para el Aprendizaje.",
          type: "Plantilla",
          icon: <CheckCircle className="h-8 w-8" />,
          link: "https://www.educadua.es/"
        }
      ]
    }
  ];

  // Función auxiliar para estilos dinámicos según el tema
  const getThemeStyles = (theme: string) => {
    switch(theme) {
      case 'blue': return { 
        bg: 'bg-blue-50', text: 'text-primary', border: 'border-blue-100', 
        badge: 'bg-blue-100 text-blue-700', iconBg: 'bg-blue-100' 
      };
      case 'purple': return { 
        bg: 'bg-purple-50', text: 'text-accent', border: 'border-purple-100', 
        badge: 'bg-purple-100 text-purple-700', iconBg: 'bg-purple-100' 
      };
      case 'green': return { 
        bg: 'bg-emerald-50', text: 'text-secondary-green-dark', border: 'border-emerald-100', 
        badge: 'bg-emerald-100 text-emerald-700', iconBg: 'bg-emerald-100' 
      };
      case 'orange': return { 
        bg: 'bg-orange-50', text: 'text-brand-orange', border: 'border-orange-100', 
        badge: 'bg-orange-100 text-orange-800', iconBg: 'bg-orange-100' 
      };
      default: return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-100', badge: 'bg-gray-100', iconBg: 'bg-gray-100' };
    }
  };

  // Función auxiliar para el badge del tipo de herramienta
  const getTypeBadgeStyle = (type: ToolType) => {
     switch(type) {
        case 'Software': return "bg-slate-100 text-slate-700 border-slate-200";
        case 'App móvil': return "bg-indigo-50 text-indigo-700 border-indigo-100";
        case 'Plantilla': return "bg-amber-50 text-amber-700 border-amber-100";
     }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-light border-b border-gray-100">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Social Buttons Above Title */}
          <div className="flex items-center justify-center gap-3 mb-1 animate-fade-in">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Síguenos:</span>
             <div className="flex gap-2 items-center">
               <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
               <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
               <Link to="/contact" className="flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  <Mail className="h-3 w-3" /> Newsletter
               </Link>
             </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <Box className="h-4 w-4 text-brand-orange" /> Centro de Recursos
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-2">
             {t('resources.hero.title')}
          </h1>
          
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
             {t('resources.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* FEATURED: MOODLE HUB */}
      <section className="relative -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mb-16">
        <div className="bg-white rounded-3xl shadow-xl border-t-8 border-brand-orange p-8 md:p-12 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -mr-16 -mt-16 z-0 opacity-50"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left: Main Info */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" /> Ecosistema Central
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-dark">
                {t('resources.moodle.title')}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('resources.moodle.desc')}
              </p>
              
              <a 
                href="https://moodle.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all"
              >
                {t('resources.btn.access')} <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            {/* Right: Key Features */}
            <div className="w-full lg:w-5/12 grid gap-4">
              <div className="bg-light p-4 rounded-xl border border-gray-100 flex items-center gap-4 group hover:border-brand-orange/30 transition-colors hover:shadow-sm hover:bg-white">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-orange border border-gray-50">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">Diseño ADDIE</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Estructura modular clara para cada fase del proyecto.</p>
                </div>
              </div>

              <div className="bg-light p-4 rounded-xl border border-gray-100 flex items-center gap-4 group hover:border-brand-orange/30 transition-colors hover:shadow-sm hover:bg-white">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-orange border border-gray-50">
                  <Box className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">Interactividad H5P</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Vídeos y cuestionarios integrados para un aprendizaje activo.</p>
                </div>
              </div>

              <div className="bg-light p-4 rounded-xl border border-gray-100 flex items-center gap-4 group hover:border-brand-orange/30 transition-colors hover:shadow-sm hover:bg-white">
                <div className="p-3 bg-white rounded-lg shadow-sm text-brand-orange border border-gray-50">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">Evaluación 360</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Uso de rúbricas y feedback directo para la mejora continua.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIONES DE RECURSOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {sections.map((section) => {
          const styles = getThemeStyles(section.colorTheme);
          
          return (
            <section key={section.id} className="scroll-mt-24" id={section.id}>
              {/* Encabezado de Sección */}
              <div className="flex items-end gap-4 mb-8 border-b border-gray-100 pb-4">
                 <div className={`p-3 rounded-2xl ${styles.bg} ${styles.text}`}>
                    {section.headerIcon}
                 </div>
                 <div>
                    <h2 className="text-2xl md:text-3xl font-black text-dark">{section.title}</h2>
                    <p className="text-gray-500 font-medium">{section.subtitle}</p>
                 </div>
              </div>

              {/* Grid de Tarjetas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.tools.map((tool, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Header Card */}
                    <div className="flex justify-between items-start mb-4">
                       <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${styles.iconBg} ${styles.text}`}>
                          {tool.icon}
                       </div>
                       <span className={`px-2.5 py-1 h-fit rounded-md text-[10px] font-bold uppercase tracking-wider border ${getTypeBadgeStyle(tool.type)}`}>
                          {tool.type}
                       </span>
                    </div>

                    {/* Content */}
                    <div className="mb-4 flex-grow">
                       <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                          {tool.name}
                       </h3>
                       <p className="text-gray-500 text-sm leading-relaxed">
                          {tool.description}
                       </p>
                    </div>

                    {/* Button - Updated to be a link */}
                    <a 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-600 font-bold text-sm flex items-center justify-center gap-2 transition-all group-hover:bg-dark group-hover:text-white group-hover:border-dark`}
                    >
                       {t('resources.btn.access')} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CTA FINAL */}
      <section className="py-20 bg-light border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">¿Echas en falta alguna herramienta?</h2>
            <p className="text-gray-500 text-lg mb-8">
               El ecosistema EduMotion está vivo. Si utilizas una App que funciona en tu patio, cuéntanoslo para incluirla en la próxima actualización.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary text-lg font-bold py-4 px-8 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
               Sugerir Herramienta <ArrowRight className="h-5 w-5" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Resources;