import React, { useState } from 'react';
import { 
  Search, Plus, Minus, HelpCircle, 
  Wifi, FileCheck, Compass, Sparkles,
  Layers, Accessibility, Monitor, ArrowRight, Linkedin, Instagram, Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'General' | 'Metodología' | 'Técnico' | 'Certificación';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  category: Category;
}

const faqData: FAQItem[] = [
  // GENERAL
  {
    id: 1,
    category: 'General',
    question: "¿A quién está dirigido Innovar en Movimiento?",
    answer: "Este curso está diseñado específicamente para docentes de Educación Física (Secundaria, Bachillerato y FP) que buscan digitalizar su asignatura sin perder tiempo de actividad motriz. También es ideal para opositores que desean diferenciar su programación con el modelo ADDIE y para equipos directivos que implementan el Plan Digital de Centro."
  },
  {
    id: 2,
    category: 'General',
    question: "¿Cuál es la carga lectiva real?",
    answer: "El curso certifica 30 horas de formación repartidas en 6 semanas. Seguimos un enfoque 'Learning by doing', por lo que gran parte del tiempo lo dedicarás a crear materiales que podrás usar directamente en tus clases al día siguiente, optimizando así tu tiempo de trabajo personal."
  },
  
  // METODOLOGÍA
  {
    id: 3,
    category: 'Metodología',
    question: "¿Cómo se evalúa el curso? (ABR vs ABP)",
    answer: "Utilizamos una 'Tríada de Evaluación' sin exámenes teóricos. Tu nota se compone de: 1) Evaluación Diagnóstica inicial, 2) Evaluación Formativa mediante Retos Semanales (Metodología ABR) que suman puntos, y 3) Evaluación Sumativa basada en la entrega y defensa de tu Proyecto Final (ABP), que consiste en una Situación de Aprendizaje completa."
  },
  {
    id: 4,
    category: 'Metodología',
    question: "¿Por qué utilizáis el modelo ADDIE?",
    answer: "Huimos de la improvisación. ADDIE (Análisis, Diseño, Desarrollo, Implementación, Evaluación) es el estándar científico del diseño instruccional. Te enseñamos a estructurar tu innovación paso a paso para asegurar que la tecnología responda a necesidades pedagógicas reales y no sea un simple adorno."
  },
  {
    id: 5,
    category: 'Metodología',
    question: "¿Cómo se integra con la LOMLOE?",
    answer: "Totalmente alineado. Durante la 'Fase de Diseño' (Semana 2), aprenderás a vincular tus actividades con las Competencias Específicas y los Descriptores Operativos del Perfil de Salida. El objetivo final es que diseñes una Situación de Aprendizaje (SdA) lista para el aula."
  },

  // TÉCNICO
  {
    id: 6,
    category: 'Técnico',
    question: "¿Qué herramientas aprenderé a usar?",
    answer: "Nos centramos en la 'Tecnología Invisible'. En la fase de Desarrollo (Semanas 3 y 4) dominarás: Kinovea (análisis biomecánico), Strava (gamificación y GPS), Genially (contenidos interactivos) y Moodle (gestión del aula virtual o EVA)."
  },
  {
    id: 7,
    category: 'Técnico',
    question: "¿Qué pasa si no tengo buena conexión en el patio?",
    answer: "Es una realidad común. Por eso, el módulo de Implementación incluye estrategias 'Offline'. Te enseñaremos a trabajar con Plickers (códigos QR impresos), descargas previas y redes locales para que la tecnología funcione independientemente de la Wi-Fi del centro."
  },

  // CERTIFICACIÓN
  {
    id: 8,
    category: 'Certificación',
    question: "¿Es válida la certificación para oposiciones y sexenios?",
    answer: "Sí. Al completar satisfactoriamente el curso y el proyecto final, recibirás un certificado de formación permanente del profesorado de 30 horas, válido para el baremo de méritos en oposiciones y para la solicitud de sexenios, conforme a la normativa vigente de formación continua."
  }
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todas'>('Todas');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => setOpenItem(openItem === id ? null : id);

  // Configuration for categories styling
  const categories: { id: Category | 'Todas', label: string, icon: React.ReactNode, activeClass: string, inactiveClass: string }[] = [
    { 
      id: 'Todas', 
      label: 'Todas', 
      icon: <Sparkles className="w-4 h-4" />,
      activeClass: "bg-dark text-white shadow-lg shadow-gray-200",
      inactiveClass: "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
    },
    { 
      id: 'General', 
      label: 'General', 
      icon: <Compass className="w-4 h-4" />,
      activeClass: "bg-primary text-white shadow-lg shadow-primary/20",
      inactiveClass: "bg-white text-gray-500 hover:text-primary hover:border-primary/30 border border-gray-200"
    },
    { 
      id: 'Metodología', 
      label: 'Metodología', 
      icon: <Layers className="w-4 h-4" />,
      activeClass: "bg-accent text-white shadow-lg shadow-accent/20",
      inactiveClass: "bg-white text-gray-500 hover:text-accent hover:border-accent/30 border border-gray-200"
    },
    { 
      id: 'Técnico', 
      label: 'Técnico', 
      icon: <Monitor className="w-4 h-4" />,
      activeClass: "bg-brand-orange text-white shadow-lg shadow-brand-orange/20",
      inactiveClass: "bg-white text-gray-500 hover:text-brand-orange hover:border-brand-orange/30 border border-gray-200"
    },
    { 
      id: 'Certificación', 
      label: 'Certificación', 
      icon: <FileCheck className="w-4 h-4" />,
      activeClass: "bg-secondary-green-dark text-white shadow-lg shadow-secondary-green/20",
      inactiveClass: "bg-white text-gray-500 hover:text-secondary-green-dark hover:border-secondary-green/30 border border-gray-200"
    },
  ];

  // Helper to get color based on category for the accordion items
  const getCategoryColor = (category: Category) => {
    switch(category) {
      case 'General': return 'text-primary';
      case 'Metodología': return 'text-accent';
      case 'Técnico': return 'text-brand-orange';
      case 'Certificación': return 'text-secondary-green-dark';
      default: return 'text-dark';
    }
  };

  const getCategoryBg = (category: Category) => {
    switch(category) {
      case 'General': return 'bg-blue-50 border-blue-100';
      case 'Metodología': return 'bg-purple-50 border-purple-100';
      case 'Técnico': return 'bg-orange-50 border-orange-100';
      case 'Certificación': return 'bg-emerald-50 border-emerald-100';
      default: return 'bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-light border-b border-gray-100 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="h-4 w-4" /> Centro de Ayuda
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre el modelo ADDIE, la metodología ABR/ABP y la certificación oficial.
          </p>
          
          <div className="relative max-w-xl mx-auto mt-8 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Buscar: 'ADDIE', 'Oposiciones', 'Moodle'..." 
              className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 focus:border-primary rounded-2xl outline-none transition-all shadow-sm hover:border-gray-300" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
      </section>

      {/* Categories & List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.id)} 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 ${activeCategory === cat.id ? cat.activeClass : cat.inactiveClass}`}
            >
              {cat.icon}{cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div 
                key={item.id} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openItem === item.id 
                    ? `shadow-lg ring-1 ring-offset-2 ${getCategoryBg(item.category).replace('bg-', 'ring-').split(' ')[0]}` 
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <button 
                  onClick={() => toggleItem(item.id)} 
                  className={`w-full text-left px-6 py-5 flex justify-between items-start gap-4 focus:outline-none transition-colors ${
                    openItem === item.id ? getCategoryBg(item.category) : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                     <span className={`text-[10px] font-black uppercase tracking-widest ${getCategoryColor(item.category)}`}>
                        {item.category}
                     </span>
                     <span className={`font-bold text-lg leading-tight ${openItem === item.id ? 'text-dark' : 'text-gray-700'}`}>
                        {item.question}
                     </span>
                  </div>
                  <div className={`p-2 rounded-full shrink-0 transition-colors ${openItem === item.id ? 'bg-white text-dark' : 'bg-gray-100 text-gray-500'}`}>
                    {openItem === item.id ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openItem === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-transparent">
                       {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
               <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
               </div>
               <h3 className="text-lg font-bold text-dark">No hemos encontrado resultados</h3>
               <p className="text-gray-500">Prueba con otra categoría o término de búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-500 mb-6">Nuestro equipo pedagógico está disponible para resolver dudas sobre el itinerario formativo.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg">
               Contactar con Soporte <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
       </section>
    </div>
  );
};

export default FAQ;