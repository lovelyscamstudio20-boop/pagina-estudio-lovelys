import React from 'react';
import { ViewType } from '../App';

interface StudiosProps {
  setView: (view: ViewType) => void;
}

const rooms = [
  {
    title: "Imperial Suite Platinum",
    desc: "Ambiente climatizado con iluminación perimetral programable y mobiliario de alta gama.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    tag: "Nivel 4K HDR"
  },
  {
    title: "Vanguard Studio HD",
    desc: "Tecnología de punta y acústica controlada. Diseñado para el confort absoluto.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    tag: "Tecnología Pro"
  },
  {
    title: "Boutique Creative Loft",
    desc: "Estética minimalista y sofisticada que combina texturas premium para una identidad única.",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200",
    tag: "Diseño de Autor"
  }
];

const Studios: React.FC<StudiosProps> = ({ setView }) => {
  return (
    <div className="py-32 bg-black min-h-screen reveal-up">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header Principal */}
        <div className="text-center mb-40 space-y-6">
          <p className="text-[#C5A059] text-[10px] uppercase tracking-[1em] font-bold">The Spaces</p>
          <h2 className="text-6xl md:text-[8rem] font-serif text-white leading-none tracking-tighter">Arquitectura <br/><span className="gold-text italic">de Elite</span></h2>
        </div>

        {/* Grid de Habitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-60">
          {rooms.map((room, idx) => (
            <div key={idx} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-10 border border-white/5 shadow-2xl">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
                />
              </div>
              <div className="space-y-6">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Suite 0{idx + 1}</span>
                <h3 className="text-4xl font-serif text-white italic">{room.title}</h3>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xs">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE TECNOLOGÍA */}
        <div className="space-y-48 mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200" 
                alt="High End Computing" 
                className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                Infraestructura <br/><span className="gold-text italic font-bold">Sin Límites</span>
              </h3>
              <p className="text-gray-500 text-xl font-light tracking-wide leading-relaxed">
                Equipos de alto rendimiento, cámaras 4K y conexión de fibra óptica dedicada para que tu transmisión sea impecable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-40 border-t border-white/10 flex flex-col items-center text-center space-y-16">
          <h3 className="text-5xl md:text-8xl font-serif text-white italic tracking-tighter">¿Lista para el siguiente nivel?</h3>
          <button 
            onClick={() => setView('contacto')}
            className="px-24 py-8 bg-[#C5A059] text-black font-bold uppercase text-[11px] tracking-[0.6em] hover:scale-105 transition-all shadow-2xl"
          >
            Agendar Entrevista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studios;