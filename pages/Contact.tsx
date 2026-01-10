import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, X, AlertCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
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
       {/* Removed items-start so columns stretch to equal height */}
       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col h-full">
             <span className="text-accent font-bold text-sm tracking-wide">CONTACTO</span>
             <h1 className="text-4xl font-black text-dark mb-6">Estamos aquí para ayudarte</h1>
             <p className="text-gray-500 mb-8 text-lg">
                Si tienes dudas sobre el programa o quieres una solución personalizada para tu centro, escríbenos.
             </p>
             
             <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Mail className="h-6 w-6" /></div>
                   {/* Lógica: Abrir cliente de correo */}
                   <a href="mailto:hola@edumotionlab.com" className="font-medium text-dark hover:text-primary transition-colors">hola@edumotionlab.com</a>
                </li>
                <li className="flex items-center gap-4 group">
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><Phone className="h-6 w-6" /></div>
                   {/* Lógica: Abrir app de llamadas */}
                   <a href="tel:+34900000000" className="font-medium text-dark hover:text-primary transition-colors">+34 900 000 000</a>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer" onClick={scrollToMap}>
                   <div className="bg-white p-3 rounded-full shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors"><MapPin className="h-6 w-6" /></div>
                   {/* Lógica: Scroll al mapa */}
                   <span className="font-medium text-dark hover:text-primary transition-colors">Madrid, España (Ver mapa)</span>
                </li>
             </ul>

             {/* Interactive Map */}
             {/* Importante: Se define una altura mínima explícita para evitar colapso de Leaflet */}
             <div id="contact-map" className="flex-grow w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative z-0" style={{ minHeight: '400px' }}>
               <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full" style={{ height: '100%', minHeight: '400px', width: '100%' }}>
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

          {/* Formulario con estilos mejorados: Borde sutil y sombra ligera */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 h-full">
             <form onSubmit={handleInitialSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                      <input 
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                        placeholder="Tu nombre" 
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Apellidos</label>
                      <input 
                        type="text" 
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                        placeholder="Tus apellidos" 
                      />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
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
                   <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
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
                   Revisar y Enviar
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