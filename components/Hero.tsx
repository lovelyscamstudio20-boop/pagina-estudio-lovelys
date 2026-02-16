import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  setView: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Media - Editorial Grayscale */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale contrast-125"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-walking-on-the-beach-at-sunset-40291-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-12">
          
          <div className="overflow-hidden">
            <span className="inline-block text-[#C5A059] text-[10px] md:text-[12px] uppercase tracking-[1em] font-bold animate-in slide-in-from-bottom duration-1000">
              Elite Modeling & Management
            </span>
          </div>
          
          <h1 className="text-[18vw] sm:text-[14vw] md:text-[12vw] font-serif leading-[0.85] text-white tracking-tighter">
            Lovelys <br />
            <span className="italic font-light gold-text ml-[0.1em]">Estudio</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start w-full">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-sm opacity-80 md:mx-0 mx-auto tracking-wide">
              Redefiniendo el estándar del modelaje digital. Profesionalismo, privacidad y rentabilidad absoluta en <span className="text-white">Chinchiná</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => setView('contacto')}
                className="w-full sm:w-auto px-16 py-6 bg-[#C5A059] text-black font-bold text-[10px] uppercase tracking-[0.5em] transition-all hover:bg-white hover:scale-105 shadow-2xl"
              >
                Admisiones
              </button>
              <button 
                onClick={() => setView('servicios')}
                className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.5em] backdrop-blur-md transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                Explorar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Vertical Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>
    </div>
  );
};

export default Hero;