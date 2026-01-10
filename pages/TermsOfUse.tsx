import React from 'react';
import { Scale, CheckSquare, AlertTriangle, Book } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-accent mb-4 border border-purple-100">
             <Scale className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-dark mb-4">Términos de Uso</h1>
          <p className="text-gray-500 text-lg">Condiciones generales de contratación y uso del portal</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-accent" />
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              El acceso y uso del sitio web <strong>EduMotion Lab</strong> (en adelante, "la Web") otorga la condición de Usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, así como de nuestra Política de Privacidad y Política de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Book className="h-5 w-5 text-accent" />
              2. Uso del Sitio Web
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que EduMotion Lab ofrece a través de su portal y, con carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de EduMotion Lab, de sus proveedores o de terceras personas.</li>
              <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">3. Propiedad Intelectual de los Cursos</h2>
            <p className="text-gray-600 leading-relaxed">
              Los materiales didácticos (vídeos, PDFs, rúbricas, SCORM) proporcionados en los cursos de formación son propiedad exclusiva de EduMotion Lab o de sus autores, estando protegidos por las leyes de propiedad intelectual. El Usuario adquiere una licencia de uso personal e intransferible, quedando expresamente prohibida su reproducción, distribución o comunicación pública sin autorización escrita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              4. Modificaciones
            </h2>
            <p className="text-gray-600 leading-relaxed">
              EduMotion Lab se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">5. Derecho de Exclusión</h2>
            <p className="text-gray-600 leading-relaxed">
              EduMotion Lab se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;