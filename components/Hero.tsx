
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
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-walking-on-the-beach-at-sunset-40291-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-12">
          
          <div className="overflow-hidden">
            <span className="inline-block text-[#C5A059] text-[11px] md:text-[14px] uppercase tracking-[0.8em] md:tracking-[1.2em] font-bold animate-in slide-in-from-bottom duration-1000">
              Elite Management Agency
            </span>
          </div>
          
          <h1 className="text-[14vw] sm:text-[10vw] md:text-[11vw] font-serif leading-[0.9] text-white tracking-tighter max-w-6xl">
            Lovelys <br />
            <span className="italic font-light gold-text">Estudio</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start w-full">
            <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-md opacity-80 md:mx-0 mx-auto">
              Representamos el estándar de oro en el modelaje digital. Profesionalismo, privacidad y éxito garantizado en el corazón de Chinchiná.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <button 
                onClick={() => setView('servicios')}
                className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-[#C5A059] hover:text-white"
              >
                Programas
              </button>
              <button 
                onClick={() => setView('contacto')}
                className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.4em] backdrop-blur-md transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                Postularse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Indicator - Desktop Only */}
      <div className="absolute bottom-16 right-12 hidden lg:flex flex-col items-center space-y-6">
        <span className="text-[9px] uppercase tracking-[1em] text-white/30 [writing-mode:vertical-lr]">Explora</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
