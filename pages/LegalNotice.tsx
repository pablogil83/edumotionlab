import React from 'react';
import { Shield, Building, MapPin, Mail, FileText } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-4 border border-blue-100">
             <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-dark mb-4">Aviso Legal</h1>
          <p className="text-gray-500 text-lg">Información general y datos identificativos</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              1. Datos Identificativos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan a continuación los datos del titular del sitio web:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <span className="font-bold text-dark">Razón Social:</span>
                <span className="md:col-span-2 text-gray-600">EduMotion Lab S.L.</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <span className="font-bold text-dark">NIF:</span>
                <span className="md:col-span-2 text-gray-600">B-12345678</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <span className="font-bold text-dark flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/> Domicilio:</span>
                <span className="md:col-span-2 text-gray-600">Calle Gran Vía 1, 28013, Madrid, España</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <span className="font-bold text-dark flex items-center gap-2"><Mail className="h-4 w-4 text-primary"/> Email:</span>
                <span className="md:col-span-2 text-gray-600">hola@edumotionlab.com</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <span className="font-bold text-dark flex items-center gap-2"><FileText className="h-4 w-4 text-primary"/> Registro:</span>
                <span className="md:col-span-2 text-gray-600">Inscrita en el Registro Mercantil de Madrid, Tomo 1234, Folio 56, Hoja M-12345.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">2. Objeto</h2>
            <p className="text-gray-600 leading-relaxed">
              El presente sitio web ha sido diseñado para dar a conocer y permitir el acceso general de todos los usuarios a la información, actividades, productos y servicios diversos ofertados por EduMotion Lab, centrados en la consultoría educativa y formación docente especializada en Educación Física.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p className="text-gray-600 leading-relaxed">
              Todos los contenidos del sitio web, entendiendo por estos a título meramente enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a EduMotion Lab, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
            <p className="text-gray-600 leading-relaxed">
              EduMotion Lab no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">5. Legislación Aplicable y Jurisdicción</h2>
            <p className="text-gray-600 leading-relaxed">
              La relación entre EduMotion Lab y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalNotice;