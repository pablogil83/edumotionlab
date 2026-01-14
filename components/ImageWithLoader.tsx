import React, { useState } from 'react';
import { Loader2, ImageOff } from 'lucide-react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string; // Clases para el contenedor
  imgClassName?: string; // Clases para la etiqueta img
  onClick?: () => void;
  priority?: boolean; // Si es true, usa eager loading (para imágenes LCP)
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "", 
  onClick,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${className}`} 
      onClick={onClick}
    >
      {/* Estado de Carga (Skeleton / Spinner) */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 animate-pulse">
          <Loader2 className="h-8 w-8 text-gray-300 animate-spin" />
        </div>
      )}

      {/* Estado de Error */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20 text-gray-400">
          <ImageOff className="h-8 w-8 mb-2" />
          <span className="text-xs font-bold uppercase tracking-wide">Error al cargar</span>
        </div>
      )}

      {/* Imagen Real */}
      <img 
        src={src} 
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${imgClassName} ${
          isLoading ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      />
    </div>
  );
};

export default ImageWithLoader;