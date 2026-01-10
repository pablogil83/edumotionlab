import React from 'react';
import { Lock, UserCheck, Eye, Database, ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-secondary-green-dark mb-4 border border-emerald-100">
             <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-dark mb-4">Política de Privacidad</h1>
          <p className="text-gray-500 text-lg">Tu privacidad y la seguridad de tus datos son nuestra prioridad</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-8">
            <p className="text-sm text-gray-700">
              <strong>Resumen:</strong> En EduMotion Lab tratamos tus datos de forma lícita, leal y transparente. Solo usamos tus datos para gestionar tu inscripción en nuestros cursos o responder a tus dudas. No vendemos tus datos a terceros.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-secondary-green-dark" />
              1. Responsable del Tratamiento
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Los datos personales recabados a través de este sitio web son responsabilidad de <strong>EduMotion Lab S.L.</strong>, con domicilio en Calle Gran Vía 1, 28013, Madrid. Puedes contactar con nuestro Delegado de Protección de Datos en <a href="mailto:privacidad@edumotionlab.com" className="text-primary font-bold hover:underline">privacidad@edumotionlab.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-secondary-green-dark" />
              2. Finalidad del Tratamiento
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En EduMotion Lab tratamos la información que nos facilitan las personas interesadas con el fin de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Gestionar la inscripción y matrícula en nuestros programas formativos (Moodle).</li>
              <li>Atender las solicitudes de información recibidas a través del formulario de contacto.</li>
              <li>Enviar comunicaciones comerciales sobre nuevos cursos, boletines o novedades legislativas (LOMLOE), siempre que contemos con tu consentimiento expreso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-secondary-green-dark" />
              3. Legitimación
            </h2>
            <p className="text-gray-600 leading-relaxed">
              La base legal para el tratamiento de tus datos es el <strong>consentimiento</strong> que nos otorgas al marcar la casilla de aceptación en nuestros formularios (contacto o registro). Para la ejecución del contrato formativo, la base es la propia <strong>prestación del servicio</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">4. Destinatarios de los datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Los datos no se comunicarán a terceros, salvo obligación legal. Sin embargo, para prestar nuestros servicios utilizamos proveedores tecnológicos (como servidores de hosting o plataformas de email marketing) que actúan como encargados del tratamiento y se encuentran acogidos a acuerdos de privacidad seguros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary-green-dark" />
              5. Derechos del Usuario
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Como interesado, tienes derecho a obtener confirmación sobre si en EduMotion Lab estamos tratando tus datos personales. Tienes derecho a:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-dark mb-1">Acceso</strong>
                  <span className="text-sm text-gray-500">Consultar qué datos tenemos tuyos.</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-dark mb-1">Rectificación</strong>
                  <span className="text-sm text-gray-500">Modificar datos inexactos.</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-dark mb-1">Supresión</strong>
                  <span className="text-sm text-gray-500">Solicitar que se borren tus datos.</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-dark mb-1">Oposición</strong>
                  <span className="text-sm text-gray-500">Oponerte a que usemos tus datos para ciertos fines.</span>
               </div>
            </div>
            <p className="text-gray-600 mt-4">
               Puedes ejercer estos derechos enviando un email a hola@edumotionlab.com adjuntando copia de tu DNI.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;