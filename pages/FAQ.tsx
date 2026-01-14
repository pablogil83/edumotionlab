import React, { useState } from 'react';
import { 
  Search, Plus, Minus, HelpCircle, 
  Wifi, FileCheck, Compass, Sparkles,
  Layers, Accessibility, Monitor, ArrowRight, Linkedin, Instagram, Mail,
  GraduationCap, Cpu, Signal, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

type Category = 'General' | 'Metodología' | 'Tecnología' | 'Certificación';

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
    question: "¿Necesito un nivel alto de competencia digital?",
    answer: (
      <>
        No necesariamente. El curso ofrece <strong>Itinerarios Adaptativos</strong> para ajustarse a tu nivel:
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
          <li><strong>Itinerario Fondo:</strong> Para quienes se inician en herramientas digitales.</li>
          <li><strong>Itinerario Sprint:</strong> Retos avanzados para usuarios expertos.</li>
        </ul>
        Tú eliges tu velocidad de aprendizaje.
      </>
    )
  },
  {
    id: 3,
    category: 'General',
    question: "¿Cuál es la carga lectiva real?",
    answer: "El curso certifica 30 horas de formación repartidas en 6 semanas. Seguimos un enfoque 'Learning by doing', por lo que gran parte del tiempo lo dedicarás a crear materiales que podrás usar directamente en tus clases al día siguiente, optimizando así tu tiempo de trabajo personal."
  },

  // METODOLOGÍA
  {
    id: 4,
    category: 'Metodología',
    question: "¿Cómo se evalúa el curso? (ABR vs ABP)",
    answer: "Utilizamos una 'Tríada de Evaluación' sin exámenes teóricos tradicionales. Tu nota se compone de: 1) Evaluación Diagnóstica inicial, 2) Evaluación Formativa mediante Retos Semanales (Metodología ABR) que suman puntos, y 3) Evaluación Sumativa basada en la entrega y defensa de tu Proyecto Final (ABP), que consiste en diseñar una Situación de Aprendizaje completa."
  },
  {
    id: 5,
    category: 'Metodología',
    question: "¿Qué es el modelo ADDIE y por qué lo usamos?",
    answer: "Huimos de la improvisación. ADDIE (Análisis, Diseño, Desarrollo, Implementación, Evaluación) es el estándar científico del diseño instruccional. Te enseñamos a estructurar tu innovación paso a paso para asegurar que la tecnología responda a necesidades pedagógicas reales y no sea un simple adorno en el gimnasio."
  },
  {
    id: 6,
    category: 'Metodología',
    question: "¿Cómo se integra con la LOMLOE?",
    answer: "Totalmente alineado. Durante la 'Fase de Diseño' (Semana 2), aprenderás a vincular tus actividades con las Competencias Específicas y los Descriptores Operativos del Perfil de Salida. El objetivo final es que diseñes una Situación de Aprendizaje (SdA) lista para el aula."
  },

  // TECNOLOGÍA
  {
    id: 7,
    category: 'Tecnología',
    question: "¿Qué significa 'Tecnología Invisible'?",
    answer: "Es nuestra filosofía central: utilizar herramientas que recopilan datos o gamifican la experiencia sin obligar al alumno a estar sentado frente a una pantalla. Buscamos maximizar el tiempo de compromiso motor usando la tecnología como un facilitador, no como un obstáculo."
  },
  {
    id: 8,
    category: 'Tecnología',
    question: "¿Qué herramientas aprenderé a usar?",
    answer: (
      <>
        Nos centramos en herramientas gratuitas o Freemium validadas para educación:
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
          <li><strong>Kinovea:</strong> Análisis biomecánico del gesto deportivo.</li>
          <li><strong>Strava/Google Fit:</strong> Hibridación y registro de actividad.</li>
          <li><strong>Genially:</strong> Creación de contenidos interactivos y Breakouts.</li>
          <li><strong>Moodle:</strong> Gestión del aula virtual (EVA).</li>
        </ul>
      </>
    )
  },
  {
    id: 9,
    category: 'Tecnología',
    question: "¿Qué pasa si no tengo buena conexión en el patio?",
    answer: "Es una realidad común y la tenemos prevista. El módulo de Implementación incluye estrategias 'Offline'. Te enseñaremos a trabajar con Plickers (códigos QR impresos), Actionbound (descarga previa de rutas) y redes locales para que la tecnología funcione independientemente de la Wi-Fi del centro."
  },

  // CERTIFICACIÓN
  {
    id: 10,
    category: 'Certificación',
    question: "¿Es válida la certificación para oposiciones?",
    answer: "Sí. Al completar satisfactoriamente el curso y el proyecto final, recibirás un certificado de formación permanente del profesorado de 30 horas, válido para el baremo de méritos en oposiciones y para la solicitud de sexenios, conforme a la normativa vigente de formación continua."
  },
  {
    id: 11,
    category: 'Certificación',
    question: "¿Qué requisitos técnicos necesito?",
    answer: "Solo necesitas un ordenador con conexión a internet para acceder al Campus Virtual (Moodle) y un smartphone básico para probar las apps móviles que utilizaremos. Todo el software que enseñamos es compatible con Windows, Mac y dispositivos móviles estándar."
  }
];

const FAQ: React.FC = () => {
  const { t } = useLanguage();
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
      activeClass: "bg-dark text-white shadow-lg shadow-gray-900/20 ring-2 ring-dark ring-offset-2",
      inactiveClass: "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
    },
    { 
      id: 'General', 
      label: 'General', 
      icon: <Compass className="w-4 h-4" />,
      activeClass: "bg-primary text-white shadow-lg shadow-blue-500/30 ring-2 ring-primary ring-offset-2",
      inactiveClass: "bg-white text-gray-600 hover:text-primary hover:border-primary/30 border border-gray-200"
    },
    { 
      id: 'Metodología', 
      label: 'Metodología', 
      icon: <Brain className="w-4 h-4" />,
      activeClass: "bg-accent text-white shadow-lg shadow-purple-500/30 ring-2 ring-accent ring-offset-2",
      inactiveClass: "bg-white text-gray-600 hover:text-accent hover:border-accent/30 border border-gray-200"
    },
    { 
      id: 'Tecnología', 
      label: 'Tecnología', 
      icon: <Cpu className="w-4 h-4" />,
      activeClass: "bg-brand-orange text-white shadow-lg shadow-orange-500/30 ring-2 ring-brand-orange ring-offset-2",
      inactiveClass: "bg-white text-gray-600 hover:text-brand-orange hover:border-brand-orange/30 border border-gray-200"
    },
    { 
      id: 'Certificación', 
      label: 'Certificación', 
      icon: <FileCheck className="w-4 h-4" />,
      activeClass: "bg-secondary-green-dark text-white shadow-lg shadow-green-600/30 ring-2 ring-secondary-green-dark ring-offset-2",
      inactiveClass: "bg-white text-gray-600 hover:text-secondary-green-dark hover:border-secondary-green/30 border border-gray-200"
    },
  ];

  const getCategoryColor = (category: Category) => {
    switch(category) {
      case 'General': return 'text-primary';
      case 'Metodología': return 'text-accent';
      case 'Tecnología': return 'text-brand-orange';
      case 'Certificación': return 'text-secondary-green-dark';
      default: return 'text-dark';
    }
  };

  const getCategoryBg = (category: Category) => {
    switch(category) {
      case 'General': return 'bg-blue-50/50 border-blue-100';
      case 'Metodología': return 'bg-purple-50/50 border-purple-100';
      case 'Tecnología': return 'bg-orange-50/50 border-orange-100';
      case 'Certificación': return 'bg-emerald-50/50 border-emerald-100';
      default: return 'bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      
      {/* 1. HERO SEARCH SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          
          {/* Social Buttons */}
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

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-dark text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <HelpCircle className="h-4 w-4" /> Centro de Ayuda
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Resolvemos tus dudas sobre el modelo ADDIE, la metodología ABR/ABP y la certificación oficial para que solo te preocupes de innovar.
          </p>
          
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Buscar: 'Oposiciones', 'Moodle', 'Precio'..." 
              className="block w-full pl-14 pr-4 py-4 bg-white border-2 border-gray-100 focus:border-primary rounded-2xl outline-none transition-all shadow-xl shadow-gray-200/50 hover:border-gray-300 text-lg placeholder:text-gray-300" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES & FAQ LIST */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-24 z-30 bg-slate-50/95 backdrop-blur-sm py-4 -mx-4 px-4 transition-all">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategory(cat.id)} 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform active:scale-95 ${activeCategory === cat.id ? cat.activeClass : cat.inactiveClass}`}
            >
              {cat.icon}{cat.label}
            </button>
          ))}
        </div>

        {/* Questions Grid */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div 
                key={item.id} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openItem === item.id 
                    ? `shadow-xl bg-white scale-[1.01] ${getCategoryBg(item.category).replace('bg-', 'border-').split(' ')[0]}` 
                    : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleItem(item.id)} 
                  className={`w-full text-left px-6 py-5 flex justify-between items-center gap-6 focus:outline-none transition-colors group ${
                    openItem === item.id ? 'bg-opacity-50' : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-2">
                     <span className={`text-[10px] font-black uppercase tracking-widest ${getCategoryColor(item.category)} flex items-center gap-2`}>
                        {categories.find(c => c.id === item.category)?.icon}
                        {item.category}
                     </span>
                     <span className={`font-bold text-lg leading-tight transition-colors ${openItem === item.id ? 'text-dark' : 'text-gray-700 group-hover:text-primary'}`}>
                        {item.question}
                     </span>
                  </div>
                  <div className={`p-2.5 rounded-full shrink-0 transition-all duration-300 ${
                    openItem === item.id 
                      ? 'bg-dark text-white rotate-180 shadow-md' 
                      : 'bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <Plus className={`h-5 w-5 transition-transform ${openItem === item.id ? 'opacity-0 absolute' : 'opacity-100'}`} />
                    <Minus className={`h-5 w-5 transition-transform ${openItem === item.id ? 'opacity-100' : 'opacity-0 absolute'}`} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openItem === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 pt-2">
                       <div className={`p-6 rounded-xl ${getCategoryBg(item.category)}`}>
                         <div className="text-gray-600 leading-relaxed text-base">
                            {item.answer}
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
               <div className="inline-block p-6 rounded-full bg-gray-50 mb-4 animate-bounce-subtle">
                  <Search className="h-10 w-10 text-gray-300" />
               </div>
               <h3 className="text-xl font-bold text-dark mb-2">No hemos encontrado resultados</h3>
               <p className="text-gray-500 max-w-sm mx-auto">
                 Intenta buscar con otros términos o navega por las categorías superiores.
               </p>
               <button 
                 onClick={() => { setSearchTerm(''); setActiveCategory('Todas'); }}
                 className="mt-6 text-primary font-bold hover:underline"
               >
                 Limpiar filtros
               </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-black text-dark mb-4">¿Sigues teniendo dudas?</h3>
            <p className="text-gray-500 mb-8 text-lg max-w-2xl mx-auto">
               Nuestro equipo pedagógico está disponible para resolver dudas específicas sobre tu caso o itinerario formativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Contactar con Soporte <ArrowRight className="h-5 w-5" />
               </Link>
               <a href="mailto:hola@edumotionlab.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-dark font-bold rounded-xl hover:border-dark transition-all shadow-sm hover:shadow-md">
                  <Mail className="h-5 w-5" /> Enviar Email
               </a>
            </div>
          </div>
       </section>
    </div>
  );
};

export default FAQ;