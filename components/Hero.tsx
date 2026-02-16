
import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  setView: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-walking-on-the-beach-at-sunset-40291-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-start text-left space-y-12">
          <div className="overflow-hidden">
            <span className="inline-block text-[#C5A059] text-[10px] md:text-[14px] uppercase tracking-[1.2em] font-bold animate-in slide-in-from-bottom duration-700">
              Elite Management Agency
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[11vw] font-serif leading-[0.85] text-white tracking-tighter max-w-6xl">
            La Nueva <br />
            <span className="italic font-light gold-text">Era Digital</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-16 items-start w-full">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl opacity-80">
              Modelaje de alto impacto. Representamos el estándar de oro en Chinchiná para el mundo. Belleza, prestigio y profesionalismo sin concesiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setView('modelos')}
                className="group relative px-14 py-6 bg-white text-black font-bold text-[11px] uppercase tracking-[0.4em] transition-all hover:bg-[#C5A059] hover:text-white"
              >
                Explorar Modelos
              </button>
              <button 
                onClick={() => setView('contacto')}
                className="px-14 py-6 border border-white/20 text-white font-bold text-[11px] uppercase tracking-[0.4em] backdrop-blur-md transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                Postularse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Indicator */}
      <div className="absolute bottom-16 right-12 hidden lg:flex flex-col items-center space-y-6">
        <span className="text-[9px] uppercase tracking-[1em] text-white/30 [writing-mode:vertical-lr]">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
