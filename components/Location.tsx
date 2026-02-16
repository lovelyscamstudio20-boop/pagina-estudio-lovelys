
import React from 'react';
import { ViewType } from '../App';

interface LocationProps {
  setView: (view: ViewType) => void;
}

const Location: React.FC<LocationProps> = ({ setView }) => {
  return (
    <div className="py-40 bg-[#050505] min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 border-l-2 border-[#d4af37] text-[#d4af37] text-[10px] uppercase tracking-[0.5em] font-bold mb-12">
          Sede Principal
        </div>

        <h2 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-none">
          Chinchiná, <br />
          <span className="gold-text italic">Caldas</span>
        </h2>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-16"></div>
        
        <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-24 tracking-wide">
          Ubicados estratégicamente para garantizar discreción absoluta. Nuestro estudio es un búnker de elegancia y privacidad en el corazón de la ciudad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="group p-12 border border-white/5 bg-white/[0.01] rounded-sm hover:border-gold/30 transition-all duration-700 editorial-shadow">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto text-black mb-8 shadow-2xl">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                 <circle cx="12" cy="10" r="3"/>
               </svg>
            </div>
            <p className="text-white font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Dirección</p>
            <p className="text-gray-400 text-xl font-light">Carrera 9 #6-09<br/>Chinchiná, Caldas</p>
          </div>

          <div className="group p-12 border border-white/5 bg-white/[0.01] rounded-sm hover:border-gold/30 transition-all duration-700 editorial-shadow">
            <div className="w-14 h-14 gold-gradient rounded-full flex items-center justify-center mx-auto text-black mb-8 shadow-2xl">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
               </svg>
            </div>
            <p className="text-white font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Atención</p>
            <p className="text-gray-400 text-xl font-light">Lunes a Sábado<br/>8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
