import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, X, AlertCircle, Check, Linkedin, Instagram, ArrowUpRight, Send } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '../context/LanguageContext';

// Fix for default Leaflet marker icons in React
const fixLeafletIcon = () => {
  try {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  } catch (e) {
    console.warn("Could not fix leaflet icon", e);
  }
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Initial Submit - Opens Modal
  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Final Confirmation - Sends Data
  const handleConfirmSend = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(false);
      // Navigate with state to customize the success page
      navigate('/success', { state: { type: 'contact' } });
    }, 1500);
  };

  // Newsletter Submit
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(newsletterEmail) {
        setNewsletterSubscribed(true);
        setTimeout(() => setNewsletterSubscribed(false), 5000); // Reset after 5s
        setNewsletterEmail('');
    }
  };

  // Función para scroll suave al mapa
  const scrollToMap = () => {
    const mapElement = document.getElementById('contact-map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const position: [number, number] = [40.416775, -3.703790]; // Madrid coordinates

  return (
    <div className="animate-fade-in py-20 bg-light relative">
       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Info + Redes + Newsletter + Mapa */}
          <div className="flex flex-col h-full">
             
             {/* Header de contacto + Redes Sociales Encima del título */}
             <div className="flex flex-col">
                {/* Social Buttons - STANDARDIZED LEFT */}
                <div className="flex flex-wrap items-center justify-start gap-4 mb-8 animate-fade-in">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Síguenos:</span>
                  <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                    <a href="https://www.instagram.com/edumotionlab/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-50 text-[#E1306C] rounded-full hover:bg-[#E1306C] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                    <Link to="/contact" className="flex items-center gap-2 px-5 py-2 bg-orange-50 border border-orange-200 rounded-full text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all uppercase tracking-wide ml-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        <Mail className="h-3.5 w-3.5" /> Newsletter
                    </Link>
                  </div>
                </div>

                <div className="flex justify-start">
                   <span className="text-accent font-bold text-sm tracking-wide uppercase mb-6 block">CONTACTO</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary-green via-primary to-accent pb-4">
                   {t('contact.title')}
                </h1>
                
                <p className="text-gray-500 text-lg mb-8">
                    {t('contact.subtitle')}
                </p>
             </div>
             
             <ul className="space-y-6 mb-8 border-b border-gray-100 pb-8">
                <li className="flex items-center gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Mail className="h-6 w-6" /></div>
                   <a href="mailto:hola@edumotionlab.com" className="font-medium text-dark hover:text-primary transition-colors">hola@edumotionlab.com</a>
                </li>
                <li className="flex items-center gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Phone className="h-6 w-6" /></div>
                   <a href="tel:+34900000000" className="font-medium text-dark hover:text-primary transition-colors">+34 900 000 000</a>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer" onClick={scrollToMap}>
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><MapPin className="h-6 w-6" /></div>
                   <span className="font-medium text-dark hover:text-primary transition-colors">Madrid, España (Ver mapa)</span>
                </li>
             </ul>

             {/* Redes Sociales - Botones más pequeños y amigables */}
             <div className="mb-8">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Comunidad</h3>
                <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/edumotionlab/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 group flex items-center justify-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Linkedin className="h-5 w-5 text-[#0077b5]" />
                        <div className="text-left">
                            <span className="block font-bold text-dark text-sm group-hover:text-[#0077b5]">LinkedIn</span>
                            <span className="text-[10px] text-gray-400 group-hover:text-[#0077b5]/70">Conectar</span>
                        </div>
                    </a>

                    <a 
                      href="https://www.instagram.com/edumotionlab/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 group flex items-center justify-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-[#E1306C]/30 hover:bg-[#E1306C]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Instagram className="h-5 w-5 text-[#E1306C]" />
                        <div className="text-left">
                            <span className="block font-bold text-dark text-sm group-hover:text-[#E1306C]">Instagram</span>
                            <span className="text-[10px] text-gray-400 group-hover:text-[#E1306C]/70">Seguir</span>
                        </div>
                    </a>
                </div>
             </div>

             {/* Newsletter Section - NUEVO */}
             <div className="bg-gradient-to-br from-dark to-gray-800 rounded-2xl p-6 text-white mb-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Send className="h-5 w-5 text-secondary-green" /> Newsletter
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                    {t('form.newsletter')}
                </p>
                
                {newsletterSubscribed ? (
                    <div className="bg-secondary-green/20 border border-secondary-green/50 text-secondary-green rounded-lg p-3 text-sm font-bold flex items-center gap-2 animate-fade-in">
                        <Check className="h-4 w-4" /> ¡Suscripción correcta!
                    </div>
                ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                        <input 
                            type="email" 
                            required
                            placeholder="Tu email..." 
                            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-secondary-green focus:bg-white/20 transition-all"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                        />
                        <button 
                            type="submit"
                            className="bg-secondary-green text-dark font-bold px-4 py-2 rounded-lg text-sm hover:bg-secondary-green-dark hover:text-white transition-colors"
                        >
                            {t('form.newsletter_btn')}
                        </button>
                    </form>
                )}
             </div>

             {/* Interactive Map */}
             <div id="contact-map" className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative z-0 h-[250px]">
               <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full" style={{ height: '100%', minHeight: '250px', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div className="text-center">
                        <strong className="text-primary block mb-1">EduMotion Lab</strong>
                        <span className="text-xs text-gray-500">Sede Central<br/>Madrid, España</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
             </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 h-full">
             <form onSubmit={handleInitialSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.name')}</label>
                      <input 
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                        placeholder={t('form.name')}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.surname')}</label>
                      <input 
                        type="text" 
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                        placeholder={t('form.surname')}
                      />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.email')}</label>
                   <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                      placeholder="ejemplo@escuela.edu" 
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.message')}</label>
                   <textarea 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4} 
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none" 
                      placeholder="¿En qué podemos ayudarte?"
                   ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                >
                   {t('form.send')}
                </button>
             </form>
          </div>
       </div>

       {/* Confirmation Modal */}
       {showModal && (
         <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
               <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-dark flex items-center gap-2">
                     <AlertCircle className="text-primary h-5 w-5" /> Confirmar Datos
                  </h3>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-dark transition-colors">
                     <X className="h-5 w-5" />
                  </button>
               </div>
               
               <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-500 mb-4">Por favor, revisa que la información sea correcta antes de enviar.</p>
                  
                  <div className="space-y-3 bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                     <div className="grid grid-cols-3 gap-2 text-sm">
                        <span className="font-bold text-gray-700">Nombre:</span>
                        <span className="col-span-2 text-gray-600">{formData.nombre} {formData.apellidos}</span>
                     </div>
                     <div className="grid grid-cols-3 gap-2 text-sm">
                        <span className="font-bold text-gray-700">Email:</span>
                        <span className="col-span-2 text-gray-600">{formData.email}</span>
                     </div>
                     <div className="grid grid-cols-3 gap-2 text-sm">
                        <span className="font-bold text-gray-700">Mensaje:</span>
                        <span className="col-span-2 text-gray-600 line-clamp-3 italic">"{formData.mensaje}"</span>
                     </div>
                  </div>
               </div>

               <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3 justify-end">
                  <button 
                     onClick={() => setShowModal(false)}
                     className="px-4 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                     disabled={isSubmitting}
                  >
                     Editar
                  </button>
                  <button 
                     onClick={handleConfirmSend}
                     disabled={isSubmitting}
                     className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                     {isSubmitting ? 'Enviando...' : <><Check className="h-4 w-4" /> Confirmar y Enviar</>}
                  </button>
               </div>
            </div>
         </div>
       )}
    </div>
  );
};

export default Contact;