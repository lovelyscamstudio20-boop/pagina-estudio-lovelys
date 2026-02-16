import React from 'react';
import { ViewType } from '../App';

interface ServicesProps {
  setView: (view: ViewType) => void;
  whatsappNumber: string;
}

const Services: React.FC<ServicesProps> = ({ setView, whatsappNumber }) => {
  const WHATSAPP_BASE_MSG = "Hola Lovelys Estudio, estoy interesada en postularme para el programa de ";

  const offers = [
    { title: "Producción Audiovisual", icon: "M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" },
    { title: "Capacitación Elite", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Kit de Lanzamiento", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { title: "Monitoreo Personal", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }
  ];

  return (
    <div className="py-32 bg-black min-h-screen reveal-up">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Navigation Back */}
        <div className="mb-24">
          <button 
            onClick={() => setView('inicio')}
            className="text-gray-500 hover:text-[#C5A059] transition-all text-[10px] uppercase tracking-[0.5em] flex items-center gap-4 group"
          >
            <div className="w-8 h-[1px] bg-gray-800 group-hover:w-16 group-hover:bg-[#C5A059] transition-all"></div>
            Regresar
          </button>
        </div>

        {/* Section Header */}
        <div className="mb-40 space-y-8">
          <span className="text-[#C5A059] text-[10px] uppercase tracking-[1em] font-bold">Our Programs</span>
          <h2 className="text-6xl md:text-[8rem] font-serif text-white leading-none tracking-tighter">
            Servicios <br /><span className="gold-text italic">Premium</span>
          </h2>
        </div>

        {/* Main Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-60">
          
          {/* Bloque 1: Modelos de Estudio */}
          <div className="relative bg-[#0a0a0a] border border-white/5 p-12 md:p-20 shadow-2xl group overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#C5A059] font-serif text-lg italic mb-10 tracking-widest">01. Studio Presence</span>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">Presencial <br/><span className="gold-text italic">Chinchiná</span></h3>
              
              <p className="text-gray-400 font-light text-xl leading-relaxed mb-16 flex-grow tracking-wide">
                Capacitación desde cero, ambientes de lujo y acompañamiento profesional constante. Todo lo que necesitas en un búnker de elegancia.
              </p>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_BASE_MSG + "Modelos de Estudio (Presencial).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-7 bg-[#C5A059] text-black font-bold text-[11px] uppercase tracking-[0.5em] hover:bg-white hover:scale-[1.02] transition-all shadow-xl"
              >
                Postulación Directa
              </a>
            </div>
          </div>

          {/* Bloque 2: Modelos Satélite */}
          <div className="relative bg-[#080808] border border-white/5 p-12 md:p-20 shadow-2xl group overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#C5A059] font-serif text-lg italic mb-10 tracking-widest">02. Independent Elite</span>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">Modelo <br/><span className="gold-text italic">Satélite</span></h3>
              
              <p className="text-gray-400 font-light text-xl leading-relaxed mb-16 flex-grow tracking-wide">
                Maximiza tus ingresos desde casa con nuestro soporte técnico, estratégico y legal 24/7. Respaldo institucional de alto nivel.
              </p>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_BASE_MSG + "Modelo Satélite (Remoto).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-7 border border-[#C5A059] text-[#C5A059] font-bold text-[11px] uppercase tracking-[0.5em] hover:bg-[#C5A059] hover:text-black transition-all"
              >
                Postularme Remoto
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {offers.map((offer, index) => (
            <div key={index} className="group p-10 border border-white/5 bg-white/[0.01] hover:border-[#C5A059]/20 transition-all duration-700">
              <div className="w-12 h-12 mb-10 text-[#C5A059]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={offer.icon} />
                </svg>
              </div>
              <h4 className="text-white font-serif text-2xl italic group-hover:text-[#C5A059] transition-colors">{offer.title}</h4>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;