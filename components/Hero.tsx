
import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  setView: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[0.3] brightness-[0.7]"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-walking-on-the-beach-at-sunset-40291-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block text-[#D2B48C] text-[10px] md:text-[12px] uppercase tracking-[1em] font-bold mb-4">
            Elite Talent Agency
          </span>
          
          <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.9] text-white tracking-tighter max-w-5xl mx-auto">
            Donde la belleza <br />
            encuentra su <span className="italic font-light text-[#D2B48C]">Propósito</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl font-light leading-relaxed tracking-wide max-w-2xl mx-auto mt-8 opacity-80">
            Representamos la excelencia en el modelaje digital. 
            Transformamos potencial en prestigio internacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <button 
              onClick={() => setView('estudio')}
              className="px-12 py-5 bg-white text-black font-bold text-[11px] uppercase tracking-[0.4em] transition-all hover:bg-[#D2B48C] hover:scale-105"
            >
              Conoce Nuestro Estudio
            </button>
            <button 
              onClick={() => setView('contacto')}
              className="px-12 py-5 border border-white/40 text-white font-bold text-[11px] uppercase tracking-[0.4em] backdrop-blur-sm transition-all hover:border-[#D2B48C] hover:text-[#D2B48C]"
            >
              Únete a Nosotros
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.6em] text-white">Descubre más</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
