import React from 'react';
import { Cookie, Settings, BarChart2, Info } from 'lucide-react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-brand-orange mb-4 border border-orange-100">
             <Cookie className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-dark mb-4">Política de Cookies</h1>
          <p className="text-gray-500 text-lg">Transparencia sobre cómo utilizamos las cookies en nuestra web</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-brand-orange" />
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">2. Tipos de cookies que utiliza esta web</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="shrink-0 mt-1 text-primary"><Settings className="h-6 w-6"/></div>
                <div>
                  <h3 className="font-bold text-dark">Cookies Técnicas (Necesarias)</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan, como, por ejemplo, controlar el tráfico, identificar la sesión o acceder al área privada de alumnos.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="shrink-0 mt-1 text-accent"><BarChart2 className="h-6 w-6"/></div>
                <div>
                  <h3 className="font-bold text-dark">Cookies de Análisis</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Son aquellas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado (ej. Google Analytics).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">3. Gestión de cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 ml-4">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;