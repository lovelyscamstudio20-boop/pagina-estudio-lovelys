
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
    <div className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Principal */}
        <div className="text-center mb-32 space-y-6">
          <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.6em] font-bold">The Spaces</p>
          <h2 className="text-6xl md:text-8xl font-serif text-white leading-none">Arquitectura <br/><span className="gold-text italic">del Placer</span></h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-12"></div>
        </div>

        {/* Grid de Habitaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-52">
          {rooms.map((room, idx) => (
            <div key={idx} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-8 border border-white/5 shadow-2xl">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
              </div>
              <div className="space-y-4">
                <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold">Suite 0{idx + 1}</span>
                <h3 className="text-3xl font-serif text-white italic">{room.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE TECNOLOGÍA SIMPLIFICADA (ESTILO TOP MO) */}
        <div className="space-y-32 mb-52">
          
          {/* Bloque 1: Computador */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200" 
                alt="High End Computing" 
                className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-6 lg:pl-10">
              <div className="w-12 h-[1px] bg-gold mb-8"></div>
              <h3 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                La mejor <br/><span className="gold-text italic font-bold">tecnología</span>
              </h3>
              <p className="text-gray-500 text-lg font-light tracking-widest uppercase">Estándar Internacional</p>
            </div>
          </div>

          {/* Bloque 2: Cámara e Iluminación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 lg:pr-10 lg:text-right flex flex-col lg:items-end">
              <div className="w-12 h-[1px] bg-gold mb-8"></div>
              <h3 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                La mejor iluminación <br/>y <span className="gold-text italic font-bold">calidad de video</span>
              </h3>
              <p className="text-gray-500 text-lg font-light tracking-widest uppercase">Producción Cinematográfica</p>
            </div>
            <div className="order-1 lg:order-2 relative group overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
                alt="Camera and Lighting" 
                className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>

        </div>

        {/* SECCIÓN BOUTIQUE */}
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-gold/10 p-12 md:p-32 mb-32">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1590159763121-7c9fd312190d?auto=format&fit=crop&q=80&w=800" alt="Boutique" className="w-full h-full object-cover grayscale" />
           </div>
           
           <div className="relative z-10 max-w-2xl space-y-12">
              <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold">Lovelys Boutique</span>
              <h3 className="text-5xl md:text-7xl font-serif text-white italic leading-none">Bienestar <br/><span className="gold-text not-italic font-bold">Exclusivo</span></h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                Acceso preferencial a lencería de autor y juguetería premium con <span className="text-white italic">financiamiento interno</span> diseñado para tu crecimiento.
              </p>
              
              <div className="flex flex-wrap gap-12 pt-6">
                 <div className="space-y-2">
                    <p className="text-white font-serif text-2xl">Staff Only</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Descuentos Directos</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-white font-serif text-2xl">Flex Pay</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Financiamiento sin Interés</p>
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Final */}
        <div className="py-24 border-t border-white/10 flex flex-col items-center text-center space-y-12">
          <h3 className="text-4xl md:text-6xl font-serif text-white italic">¿Estás lista para el siguiente nivel?</h3>
          <button 
            onClick={() => setView('contacto')}
            className="px-20 py-6 bg-[#d4af37] text-black font-bold uppercase text-[11px] tracking-[0.5em] hover:scale-105 transition-all shadow-2xl"
          >
            Reservar Entrevista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studios;
