
import React from 'react';
import { ViewType } from '../App';

interface ModelsProps {
  setView: (view: ViewType) => void;
  previewOnly?: boolean;
}

const talent = [
  { name: "Alessandra V.", category: "High Fashion", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800" },
  { name: "Valeria M.", category: "Editorial", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
  { name: "Isabella G.", category: "Commercial", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
  { name: "Sophia R.", category: "Digital Influencer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { name: "Camila L.", category: "Boutique", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" },
  { name: "Elena S.", category: "Social Media", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800" }
];

const Models: React.FC<ModelsProps> = ({ setView, previewOnly = false }) => {
  const displayTalent = previewOnly ? talent.slice(0, 3) : talent;

  return (
    <div className={`py-32 bg-black ${!previewOnly ? 'min-h-screen' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.6em] font-bold">Elite Talents</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white italic">Nuestra <span className="gold-text not-italic font-bold">Selección</span></h2>
          </div>
          {previewOnly && (
            <button 
              // Fix: 'modelos' is no longer a valid ViewType in App.tsx. Redirecting to 'servicios'.
              onClick={() => setView('servicios')}
              className="text-[10px] uppercase tracking-[0.4em] text-white hover:text-[#C5A059] transition-colors flex items-center gap-4 group"
            >
              Ver Todas <div className="w-10 h-[1px] bg-[#C5A059] group-hover:w-16 transition-all"></div>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayTalent.map((model, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-neutral-900 cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={model.img} 
                  alt={model.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 editorial-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.4em] font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{model.category}</span>
                <h3 className="text-3xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">{model.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {!previewOnly && (
          <div className="mt-32 text-center max-w-2xl mx-auto space-y-10 border-t border-white/10 pt-20">
            <h4 className="text-3xl font-serif text-white italic">¿Quieres ser parte de nuestro Portafolio Elite?</h4>
            <p className="text-gray-500 font-light tracking-wide">
              Buscamos talentos únicos con ambición y distinción. Aplicamos criterios de selección rigurosos para mantener nuestra exclusividad.
            </p>
            <button 
              onClick={() => setView('contacto')}
              className="px-16 py-6 border border-[#C5A059] text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#C5A059] hover:text-black transition-all"
            >
              Aplicar a la Agencia
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Models;
