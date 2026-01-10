import React, { useState } from 'react';
import { 
  Search, Plus, Minus, HelpCircle, 
  Wifi, FileCheck, Compass, Sparkles,
  Layers, Accessibility, Monitor, ArrowRight
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
  // 1. Mandatory Question (General/Audience)
  {
    id: 1,
    category: 'General',
    question: "¿A quién está dirigido Innovar en Movimiento?",
    answer: "Principalmente a docentes de Educación Física de Secundaria y Bachillerato que quieren digitalizar sus clases sin perder la esencia motriz. También es ideal para opositores que buscan diferenciar su programación y equipos directivos que diseñan el Plan Digital de Centro."
  },
  // 2. Mandatory Question (Methodology/LOMLOE)
  {
    id: 2,
    category: 'Metodología',
    question: "¿Está el curso actualizado a la LOMLOE?",
    answer: "Totalmente. El curso no solo cumple la normativa, sino que la utiliza como base. Aprenderás a diseñar Situaciones de Aprendizaje (SdA), evaluar competencias específicas mediante descriptores operativos y alinear tu programación con el perfil de salida."
  },
  // 3. Mandatory Question (Technical/Materials)
  {
    id: 3,
    category: 'Técnico',
    question: "¿Necesito materiales caros para aplicar esto en clase?",
    answer: "No. Nuestra filosofía es la 'Tecnología Invisible'. Enseñamos estrategias BYOD (trae tu propio dispositivo) y uso de materiales low-cost. Si tienes un móvil y conos, tienes un laboratorio digital. No necesitas comprar gafas VR ni sensores caros para empezar."
  },
  // 4. Mandatory Question (Certification)
  {
    id: 4,
    category: 'Certificación',
    question: "¿Es válida la certificación para oposiciones?",
    answer: "Sí. Al completar las 30 horas de formación, recibirás un certificado de formación permanente del profesorado, válido para el baremo de méritos en oposiciones y sexenios, conforme a la normativa vigente de formación continua."
  },
  // 5. Mandatory Question (Technical/Connectivity)
  {
    id: 5,
    category: 'Técnico',
    question: "¿Qué pasa si no tengo buena conexión en el patio?",
    answer: "Es la realidad de muchos centros, y por eso nuestro método incluye el diseño Offline. Aprenderás a crear recursos descargables, trabajar con códigos QR impresos y redes locales que no dependen de la Wi-Fi del centro para funcionar."
  },
  // Extra: ADDIE Methodology
  {
    id: 6,
    category: 'Metodología',
    question: "¿Qué es el modelo ADDIE y por qué lo usáis?",
    answer: "ADDIE (Análisis, Diseño, Desarrollo, Implementación, Evaluación) es el estándar de oro en el diseño instruccional. Lo usamos para garantizar que tus Situaciones de Aprendizaje no sean improvisadas, sino que sigan una estructura científica y medible que garantice resultados."
  },
  // Extra: DUA
  {
    id: 7,
    category: 'Metodología',
    question: "¿Cómo se aplica el DUA en este programa?",
    answer: "La Inclusión Radical es uno de nuestros pilares. Enseñamos a aplicar el Diseño Universal para el Aprendizaje creando materiales multinivel, usando subtítulos en vídeos, lecturas fáciles y ofreciendo opciones de respuesta motriz variadas para atender a toda la diversidad del aula."
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
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" /> Centro de Ayuda
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-2">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre el programa, la normativa LOMLOE y la implementación técnica.
          </p>
          
          <div className="relative max-w-xl mx-auto mt-8 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Buscar: 'SdA', 'Oposiciones', 'Wifi'..." 
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
            <p className="text-gray-500 mb-6">Nuestro equipo académico está disponible para resolver dudas específicas.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg">
               Contactar con Soporte <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
       </section>
    </div>
  );
};

export default FAQ;