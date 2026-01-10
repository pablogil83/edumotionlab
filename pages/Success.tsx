import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Monitor, BookOpen, Send, ShieldCheck, ArrowRight } from 'lucide-react';

const Success: React.FC = () => {
  const location = useLocation();
  const state = location.state as { type: 'contact' | 'register'; email?: string } | null;
  const isContact = state?.type === 'contact';
  const userEmail = state?.email;

  return (
    <div className="relative min-h-screen bg-light text-dark font-body overflow-x-hidden flex items-center justify-center py-12">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-100px] w-96 h-96 bg-secondary-green/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 animate-fade-in-up">
          <div className="space-y-6">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold w-fit shadow-sm ${isContact ? 'bg-blue-50 border-blue-100 text-primary' : 'bg-emerald-50 border-emerald-100 text-secondary-green-dark'}`}>
              {isContact ? <Send className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
              {isContact ? 'Mensaje Enviado' : 'Inscripción Exitosa'}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-dark">
              {isContact ? (
                 <>¡Gracias por <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">contactarnos!</span></>
              ) : (
                 <>Bienvenido a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-accent to-primary">Innovar en Movimiento</span></>
              )}
            </h1>
            
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-body">
              {isContact 
                ? "Tu mensaje ha sido recibido correctamente. Nuestro equipo académico se pondrá en contacto contigo en breve."
                : "Tu solicitud ha sido procesada correctamente. Estás a un paso de transformar tu metodología de enseñanza con herramientas de vanguardia."
              }
            </p>
          </div>

          {!isContact && (
            <div className="grid gap-4 sm:gap-6 opacity-90">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-gray-100 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-orange-50 text-brand-orange mt-1">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Metodologías Ágiles</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">Domina Scrum y Kanban aplicados a entornos educativos dinámicos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-gray-100 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-blue-50 text-primary mt-1">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Herramientas Digitales</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">Acceso ilimitado a nuestra suite de recursos y plataforma LMS.</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 pt-8 border-t border-gray-200 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-full h-full object-cover" />
               </div>
               <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-full h-full object-cover" />
               </div>
               <div className="w-10 h-10 rounded-full ring-2 ring-white bg-gray-200 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-full h-full object-cover" />
               </div>
            </div>
            <p>Te unes a una comunidad de más de <span className="font-bold text-dark">800 docentes innovadores</span>.</p>
          </div>
        </div>

        {/* Right Column: Floating Card */}
        <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none animate-fade-in-up delay-100">
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative transform transition-all hover:-translate-y-1">
            <div className={`h-1.5 w-full bg-gradient-to-r ${isContact ? 'from-primary via-blue-400 to-accent' : 'from-brand-orange via-primary to-secondary-green'}`}></div>
            
            <div className="p-8 sm:p-10 flex flex-col items-center text-center">
              <div className="mb-6 relative">
                <div className={`absolute inset-0 rounded-full opacity-40 animate-ping ${isContact ? 'bg-blue-100' : 'bg-emerald-100'}`}></div>
                <div className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 ${isContact ? 'bg-blue-50 text-primary' : 'bg-emerald-50 text-secondary-green-dark'}`}>
                  {isContact ? <Send className="h-12 w-12" /> : <CheckCircle className="h-16 w-16" />}
                </div>
              </div>

              <h3 className="text-3xl font-black text-dark mb-3 tracking-tight">¡Todo listo!</h3>
              <p className="text-gray-500 mb-8 text-base leading-relaxed px-4">
                {isContact 
                  ? "Gracias por tu interés. Responderemos a tu consulta lo antes posible."
                  : <>Gracias por registrarte. Hemos enviado un correo electrónico {userEmail && <span className="font-bold text-dark">a {userEmail}</span>} con tu <span className="font-bold text-dark">dossier de bienvenida</span> y los accesos.</>
                }
              </p>

              <div className="w-full bg-light border border-gray-100 rounded-2xl p-6 mb-8 text-left">
                <h4 className="font-bold text-dark text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <ShieldCheck className={`h-5 w-5 ${isContact ? 'text-primary' : 'text-brand-orange'}`} />
                  Siguientes pasos
                </h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li className="flex items-start gap-3 group">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm shrink-0 text-primary group-hover:text-primary-dark transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="mt-0.5">Revisa tu bandeja de entrada (y la carpeta de spam por si acaso).</span>
                  </li>
                  {!isContact && (
                    <li className="flex items-start gap-3 group">
                      <div className="p-1.5 bg-white rounded-lg shadow-sm shrink-0 text-primary group-hover:text-primary-dark transition-colors">
                         <Monitor className="h-4 w-4" />
                      </div>
                      <span className="mt-0.5">Accede al portal docente utilizando las credenciales enviadas.</span>
                    </li>
                  )}
                </ul>
              </div>

              <Link to="/" className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-dark px-8 py-4 text-sm font-bold text-white shadow-lg shadow-gray-300 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-black">
                <ArrowLeft className="h-5 w-5 relative transition-transform group-hover:-translate-x-1" />
                <span className="relative">Volver a la página principal</span>
              </Link>
              
              {!isContact && (
                <p className="mt-6 text-xs text-gray-400">
                  ¿No recibiste el correo? <button className="text-dark font-semibold underline decoration-primary/50 hover:decoration-primary transition-colors cursor-pointer">Reenviar confirmación</button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;