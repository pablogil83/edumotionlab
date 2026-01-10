import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, User, Mail, Building, Phone, Briefcase, MessageSquare } from 'lucide-react';

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  centro: string;
  cargo: string;
  comentarios: string;
  terms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    centro: '',
    cargo: '',
    comentarios: '',
    terms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // Type checking assertion for checkbox
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios";
    
    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
    if (!formData.centro.trim()) newErrors.centro = "El centro educativo es obligatorio";
    if (!formData.cargo) newErrors.cargo = "Selecciona tu cargo";

    // Comentarios es opcional, no se valida

    if (!formData.terms) newErrors.terms = "Debes aceptar la política de privacidad";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular llamada a API
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', { 
        state: { 
          type: 'register',
          email: formData.email 
        } 
      });
    }, 2000);
  };

  // Helper para clases de input - MEJORADO PARA MAYOR CONTRASTE
  const getInputClass = (error?: string) => `
    w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none font-medium placeholder:font-normal placeholder:text-gray-400
    ${error 
      ? 'border-red-300 bg-red-50 text-red-900 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
      : 'border-transparent bg-slate-100 hover:bg-slate-200/70 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 text-dark'
    }
  `;

  return (
    <div className="bg-light min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
       <div className="max-w-6xl w-full grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-8 sticky top-24">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-green/20 text-secondary-green-dark text-xs font-bold uppercase mb-6 animate-pulse border border-secondary-green/30">
                   <CheckCircle className="h-4 w-4" /> Plazas abiertas 2026
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-dark mb-6 leading-tight">
                   Únete a <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Innovar en Movimiento</span>
                </h1>
                <p className="text-lg text-gray-500">
                   Reserva tu plaza ahora. Una experiencia diseñada para educadores que buscan el cambio real en el aula.
                </p>
             </div>

             <div className="space-y-4">
                {[
                   { title: "Metodologías Ágiles", desc: "Aprende Scrum y Kanban para el aula." },
                   { title: "Herramientas Digitales", desc: "Acceso premium a recursos interactivos." },
                   { title: "Certificación Oficial", desc: "Diploma válido para oposiciones." }
                ].map((item, idx) => (
                   <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                      <div className="bg-blue-50 p-2.5 rounded-xl text-primary shrink-0"><CheckCircle className="h-5 w-5" /></div>
                      <div>
                         <h3 className="font-bold text-dark">{item.title}</h3>
                         <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3 order-1 lg:order-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
             <div className="h-2 w-full bg-gradient-to-r from-accent via-primary to-secondary-green"></div>
             
             <div className="p-8 md:p-10">
                <div className="mb-8">
                   <h2 className="text-3xl font-black text-dark tracking-tight">Formulario de Inscripción</h2>
                   <p className="text-gray-500 mt-2 text-base">
                     Completa tus datos para formalizar la matrícula. <br/>
                     <span className="text-sm bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded border border-yellow-200 inline-block mt-2">
                       * Todos los campos son obligatorios salvo indicación.
                     </span>
                   </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                   
                   {/* Personal Info */}
                   <div className="space-y-5">
                      <h3 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                         <User className="h-4 w-4" /> Datos Personales
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nombre</label>
                            <input 
                              name="nombre" 
                              value={formData.nombre} 
                              onChange={handleChange} 
                              type="text" 
                              className={getInputClass(errors.nombre)} 
                              placeholder="Ej. María" 
                            />
                            {errors.nombre && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.nombre}</p>}
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Apellidos</label>
                            <input 
                              name="apellidos" 
                              value={formData.apellidos} 
                              onChange={handleChange} 
                              type="text" 
                              className={getInputClass(errors.apellidos)} 
                              placeholder="Ej. García López" 
                            />
                            {errors.apellidos && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.apellidos}</p>}
                         </div>
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Teléfono Móvil</label>
                          <div className="relative">
                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                             <input 
                                name="telefono" 
                                value={formData.telefono} 
                                onChange={handleChange} 
                                type="tel" 
                                className={`${getInputClass(errors.telefono)} pl-11`} 
                                placeholder="+34 600 000 000" 
                             />
                          </div>
                          {errors.telefono && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.telefono}</p>}
                       </div>
                   </div>

                   {/* Professional Info */}
                   <div className="space-y-5 pt-2">
                      <h3 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                         <Briefcase className="h-4 w-4" /> Datos Profesionales
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Centro Educativo</label>
                            <div className="relative">
                               <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                               <input 
                                  name="centro" 
                                  value={formData.centro} 
                                  onChange={handleChange} 
                                  type="text" 
                                  className={`${getInputClass(errors.centro)} pl-11`} 
                                  placeholder="Nombre de tu escuela o institución" 
                               />
                            </div>
                            {errors.centro && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.centro}</p>}
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Cargo / Perfil</label>
                            <div className="relative">
                              <select 
                                 name="cargo" 
                                 value={formData.cargo} 
                                 onChange={handleChange} 
                                 className={`${getInputClass(errors.cargo)} appearance-none cursor-pointer`}
                              >
                                 <option value="">Selecciona tu perfil...</option>
                                 <option value="docente_primaria">Docente (Primaria)</option>
                                 <option value="docente_secundaria">Docente (Secundaria/Bachillerato)</option>
                                 <option value="coordinador_tic">Coordinador TIC</option>
                                 <option value="directivo">Equipo Directivo</option>
                                 <option value="estudiante">Estudiante Universitario</option>
                                 <option value="otro">Otro</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                              </div>
                            </div>
                            {errors.cargo && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.cargo}</p>}
                         </div>
                      </div>
                   </div>

                   {/* Account Info */}
                   <div className="space-y-5 pt-2">
                      <h3 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                         <Mail className="h-4 w-4" /> Datos de Cuenta
                      </h3>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email <span className="text-xs font-normal text-gray-500">(Para verificación)</span></label>
                         <input 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            type="email" 
                            className={getInputClass(errors.email)} 
                            placeholder="tu.email@ejemplo.com" 
                         />
                         {errors.email && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.email}</p>}
                      </div>
                   </div>

                   {/* Comentarios */}
                   <div className="space-y-5 pt-2">
                      <h3 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2 border-b border-gray-100 pb-2">
                         <MessageSquare className="h-4 w-4" /> Información Adicional
                      </h3>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                           Comentarios <span className="text-gray-400 font-normal text-xs">(Opcional)</span>
                         </label>
                         <textarea 
                            name="comentarios" 
                            value={formData.comentarios} 
                            onChange={handleChange} 
                            rows={3}
                            className={getInputClass()} 
                            placeholder="¿Tienes alguna necesidad especial o duda específica?" 
                         />
                      </div>
                   </div>
                   
                   {/* Terms */}
                   <div className="pt-4">
                      <div className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-colors cursor-pointer hover:border-primary/30 ${formData.terms ? 'bg-primary/5 border-primary/20' : 'bg-gray-50 border-transparent'}`}>
                         <input 
                           name="terms"
                           type="checkbox" 
                           checked={formData.terms}
                           onChange={handleChange}
                           id="terms" 
                           className="mt-1 w-5 h-5 rounded text-accent focus:ring-accent border-gray-300 cursor-pointer" 
                         />
                         <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                            He leído y acepto la <Link to="/privacy-policy" className="text-primary font-bold hover:underline">Política de Privacidad</Link>. Entiendo que recibiré un correo para verificar mi identidad y evitar spam.
                         </label>
                      </div>
                      {errors.terms && <p className="text-red-500 text-xs mt-2 ml-1 flex items-center gap-1 font-bold"><AlertCircle className="h-3 w-3"/> {errors.terms}</p>}
                   </div>

                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-black py-5 rounded-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all disabled:opacity-75 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2 mt-8"
                   >
                      {isSubmitting ? (
                        <>Procesando...</>
                      ) : (
                        <>Enviar Solicitud <CheckCircle className="h-6 w-6" /></>
                      )}
                   </button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Register;