
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  setView: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start text-center md:text-left">
          
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#d4af37]">
                  <path d="M35 25 L42 15 L50 22 L58 15 L65 25 L65 30 L35 30 Z" />
                  <path d="M50 35 C35 35 25 45 25 60 C25 80 40 90 50 90 C60 90 75 80 75 60 C75 45 65 35 50 35 M40 55 Q40 50 45 50 M60 55 Q60 50 55 50 M50 70 L45 75 L55 75 Z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-serif gold-text font-bold leading-none uppercase tracking-widest">Lovelys Estudio</h4>
                <p className="text-gray-600 text-[8px] tracking-[0.4em] uppercase font-bold mt-1">Management Agency</p>
              </div>
            </div>
            <p className="text-gray-500 text-md font-light max-w-md mx-auto md:mx-0 leading-relaxed tracking-wide">
              Liderando la industria del modelaje digital en Caldas con elegancia y privacidad total. Representación de alto nivel.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Navegación</h5>
            <ul className="space-y-3 text-gray-500 text-sm font-light">
               <li><button onClick={() => setView('inicio')} className="hover:text-gold transition-colors">Inicio</button></li>
               <li><button onClick={() => setView('servicios')} className="hover:text-gold transition-colors">Servicios</button></li>
               <li><button onClick={() => setView('estudio')} className="hover:text-gold transition-colors">El Estudio</button></li>
               <li><button onClick={() => setView('ubicacion')} className="hover:text-gold transition-colors">Ubicación</button></li>
               <li><button onClick={() => setView('contacto')} className="hover:text-gold transition-colors">Contacto</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-8">
            <div className="flex space-x-8">
              <a 
                href="https://www.tiktok.com/@lovelyscamestudio?_r=1&_t=ZS-93qBpzv97jh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:text-white transition-colors transform hover:scale-125 duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/camstudiolovelys?igsh=emJzeXM0dWRrOHRs&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:text-white transition-colors transform hover:scale-125 duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
            <div className="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-medium text-center md:text-right">
              <p>© {new Date().getFullYear()} Lovelys Estudio.</p>
              <p>Chinchiná, Caldas - Colombia.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
