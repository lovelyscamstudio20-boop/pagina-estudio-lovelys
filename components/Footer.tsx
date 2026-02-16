
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  setView: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const LionLogo = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 fill-[#C5A059]" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 20 L40 10 L50 20 L60 10 L70 20 L70 30 L30 30 Z" />
      <path d="M50 35 C35 35 25 45 25 60 C25 80 40 95 50 95 C60 95 75 80 75 60 C75 45 65 35 50 35" />
    </svg>
  );

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 items-start text-center md:text-left">
          
          <div className="md:col-span-2 space-y-8 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4">
              <LionLogo />
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-serif gold-text font-bold leading-none uppercase tracking-widest">Lovelys Estudio</h4>
                <p className="text-gray-600 text-[8px] tracking-[0.4em] uppercase font-bold mt-1">Elite Modeling Agency</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm md:text-md font-light max-w-sm leading-relaxed tracking-wide">
              Líderes en representación digital y modelaje de alta gama en Caldas. Exclusividad y éxito garantizado.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Menú Elite</h5>
            <ul className="space-y-3 text-gray-500 text-xs md:text-sm font-light uppercase tracking-widest">
               <li><button onClick={() => setView('inicio')} className="hover:text-gold transition-colors">Inicio</button></li>
               <li><button onClick={() => setView('servicios')} className="hover:text-gold transition-colors">Programas</button></li>
               <li><button onClick={() => setView('estudio')} className="hover:text-gold transition-colors">Estudios</button></li>
               <li><button onClick={() => setView('contacto')} className="hover:text-gold transition-colors">Contacto</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-8">
            <div className="flex space-x-8">
              <a 
                href="https://www.tiktok.com/@lovelyscamestudio?_r=1&_t=ZS-93qBpzv97jh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:text-white transition-colors transform hover:scale-125 duration-300"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/camstudiolovelys?igsh=emJzeXM0dWRrOHRs&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:text-white transition-colors transform hover:scale-125 duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
            <div className="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-medium text-center md:text-right space-y-1">
              <p>© {new Date().getFullYear()} LOVELYS ESTUDIO.</p>
              <p>Chinchiná, Caldas - Colombia.</p>
              <p className="pt-4 text-[7px] opacity-50">High Standards. Always.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
