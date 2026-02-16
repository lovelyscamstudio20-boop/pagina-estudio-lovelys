
import React from 'react';

interface ServicesProps {
  setView: (view: any) => void;
  whatsappNumber: string;
}

const Services: React.FC<ServicesProps> = ({ setView, whatsappNumber }) => {
  const WHATSAPP_BASE_MSG = "Hola Lovelys Estudio, estoy interesada en el programa de ";

  const offers = [
    { title: "Fotografía profesional", icon: "M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" },
    { title: "Capacitaciones constantes", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Kit de inicio", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { title: "Monitoreo 24/7", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Descuentos en juguetería", icon: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" },
    { title: "Los mejores porcentajes", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v-1" },
    { title: "Ambientaciones de lujo", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { title: "Organización profesional", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }
  ];

  return (
    <div className="py-24 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Back */}
        <div className="flex justify-start mb-16">
          <button 
            onClick={() => setView('inicio')}
            className="flex items-center space-x-3 text-gray-500 hover:text-[#d4af37] transition-all text-[10px] uppercase tracking-[0.4em] group"
          >
            <div className="w-8 h-[1px] bg-gray-800 group-hover:bg-[#d4af37] transition-colors"></div>
            <span>Volver al Inicio</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-32 space-y-6">
          <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.8em] font-bold">Programs & Excellence</p>
          <h2 className="text-6xl md:text-8xl font-serif text-white leading-none">
            Nuestros <br />
            <span className="gold-text italic">Servicios</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8"></div>
        </div>

        {/* 1 & 2: Main Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          
          {/* Bloque 1: Modelos de Estudio */}
          <div className="relative flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-700 p-10 md:p-16 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#d4af37] font-serif text-sm italic mb-6 block tracking-widest">01. The Academy</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Modelos de <br/><span className="gold-text">Estudio</span></h3>
              
              <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed mb-12 flex-grow">
                <p>
                  ¿No tienes experiencia? <span className="text-white">Eso no es un problema.</span> En Lovely’s tendrás acompañamiento completo, capacitaciones constantes y todo lo que necesitas para aprender y convertirte en una modelo profesional.
                </p>
                <p className="italic border-l-2 border-[#d4af37]/40 pl-6">
                  Nuestro equipo especializado estará contigo en cada paso del proceso para ayudarte a desarrollar tu máximo potencial y alcanzar tus metas.
                </p>
              </div>

              <div className="mb-12 pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-6">Requisitos de Admisión</p>
                <ul className="grid grid-cols-1 gap-4">
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                    <span>Ser mayor de edad (18+)</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                    <span>Tener cédula física original</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                    <span>Actitud arrolladora, positiva y profesional</span>
                  </li>
                </ul>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_BASE_MSG + "Modelos de Estudio (Presencial).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center py-6 gold-bg text-black font-bold text-[11px] uppercase tracking-[0.4em] hover:brightness-110 transition-all shadow-xl"
              >
                Postularme al Estudio
              </a>
            </div>
          </div>

          {/* Bloque 2: Modelos Satélite */}
          <div className="relative flex flex-col bg-[#080808] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-700 p-10 md:p-16 shadow-2xl overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4af37]/5 rounded-tr-full -ml-16 -mb-16 transition-transform group-hover:scale-150 duration-700"></div>

            <div className="relative z-10 flex flex-col h-full">
              <span className="text-[#d4af37] font-serif text-sm italic mb-6 block tracking-widest">02. Independent Elite</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Modelos <br/><span className="gold-text">Satélite</span></h3>
              
              <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed mb-12 flex-grow">
                <p>
                  Si ya tienes experiencia y cuentas con tus propios equipos, esta modalidad es para ti. <span className="text-white">Escala tus resultados</span> con nuestro respaldo institucional.
                </p>
                <p className="italic border-l-2 border-[#d4af37]/40 pl-6">
                  Nos encargamos de todo el soporte: creación y optimización de páginas, estrategias de monetización y asistencia 24/7 para maximizar tus ingresos.
                </p>
              </div>

              <div className="mb-12 pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-6">Requisitos Técnicos</p>
                <ul className="grid grid-cols-1 gap-4">
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#d4af37]"></div>
                    <span>Ser mayor de edad (18+)</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#d4af37]"></div>
                    <span>Tener cédula física original</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#d4af37]"></div>
                    <span>Equipos propios & Conexión estable</span>
                  </li>
                </ul>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_BASE_MSG + "Modelo Satélite (Remoto).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center py-6 border border-[#d4af37] text-[#d4af37] font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-[#d4af37] hover:text-black transition-all"
              >
                Postularme como Satélite
              </a>
            </div>
          </div>

        </div>

        {/* Bloque 3: ¿Qué Ofrecemos? */}
        <section className="relative pt-20 border-t border-white/10">
          <div className="text-center mb-24">
            <span className="text-white/40 text-[9px] uppercase tracking-[0.6em] font-bold mb-4 block">The Lovelys Advantage</span>
            <h3 className="text-4xl md:text-6xl font-serif text-white italic">¿Qué <span className="gold-text not-italic font-bold uppercase">Ofrecemos?</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="group p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#d4af37]/20 transition-all duration-500">
                <div className="w-12 h-12 mb-8 text-[#d4af37] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={offer.icon} />
                  </svg>
                </div>
                <h4 className="text-white font-serif text-xl mb-4 group-hover:text-[#d4af37] transition-colors">{offer.title}</h4>
                <div className="w-8 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center p-16 bg-gradient-to-b from-[#0a0a0a] to-transparent border border-white/5">
             <p className="text-gray-500 font-light text-xl italic max-w-3xl mx-auto leading-relaxed">
               "Nuestra estructura no es solo logística; es un sistema diseñado para que tu único enfoque sea brillar y crecer profesionalmente."
             </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;
