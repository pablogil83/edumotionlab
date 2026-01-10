import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on home page
  if (pathnames.length === 0) {
    return null;
  }

  const routeNameMap: { [key: string]: string } = {
    project: 'El Proyecto',
    program: 'Programa Formativo',
    about: 'EduMotion Lab', // Changed from 'Nosotros'
    faq: 'Preguntas Frecuentes',
    contact: 'Contacto',
    register: 'Inscripción',
    success: 'Registro Exitoso',
    'legal-notice': 'Aviso Legal',
    'privacy-policy': 'Política de Privacidad',
    'cookies-policy': 'Política de Cookies',
    'terms-of-use': 'Términos de Uso'
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-primary flex items-center transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Inicio</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = routeNameMap[value] || value;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-300 mx-1" />
                {isLast ? (
                  <span className="font-bold text-primary" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-primary transition-colors">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;