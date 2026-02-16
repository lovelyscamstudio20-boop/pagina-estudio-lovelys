
import React from 'react';
import { ViewType } from '../App';

interface AboutProps {
  setView: (view: ViewType) => void;
}

const About: React.FC<AboutProps> = ({ setView }) => {
  return (
    <div className="bg-[#080808] relative overflow-hidden">
      
      {/* SECTION: MISIÓN */}
      <section className="py-40 md:py-60 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[#D2B48C] text-[10px] uppercase tracking-[0.8em] font-bold">The Core</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                Nuestra <br /><span className="italic text-[#D2B48C]">Misión</span>
              </h2>
            </div>

            <div className="space-y-8 text-gray-400 font-light text-xl leading-relaxed tracking-wide">
              <p>
                Nuestra misión es ser el mejor estudio de modelaje, aplicando las mejores prácticas de la industria a nivel global.
              </p>
              <p>
                Nos enfocamos en ayudar a cada modelo a <span className="text-white">desarrollar su máximo potencial</span>, acompañándolas en cada paso de su crecimiento profesional y personal, brindándoles apoyo constante, formación técnica y oportunidades reales de éxito.
              </p>
            </div>

            <div className="w-20 h-[1px] bg-[#D2B48C]"></div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/10] overflow-hidden grayscale brightness-75 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=1200" 
                alt="Mission Insight" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#D2B48C] p-12 hidden md:block">
               <p className="text-black font-serif text-3xl italic leading-tight">
                 "Excelencia <br />como norma."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VISIÓN */}
      <section className="py-40 md:py-60 bg-black relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#111] opacity-50 z-0 hidden lg:block"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] overflow-hidden border border-white/10 mt-12">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-60" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-60" />
                  </div>
               </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-12">
              <div className="space-y-4">
                <span className="text-[#D2B48C] text-[10px] uppercase tracking-[0.8em] font-bold">The Horizon</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                  Nuestra <br /><span className="italic text-[#D2B48C]">Visión</span>
                </h2>
              </div>

              <div className="space-y-8 text-gray-300 font-light text-xl leading-relaxed tracking-wide">
                <p>
                  Proyectamos nuestra expansión para los próximos años, abriendo <span className="text-[#D2B48C] italic">nuevas sedes</span> y consolidándonos como el referente absoluto en la industria del modelaje digital.
                </p>
                <p>
                  Queremos compartir nuestro conocimiento, formar nuevas generaciones de talento y construir una comunidad sólida basada en la excelencia y el crecimiento continuo.
                </p>
              </div>

              <button 
                onClick={() => setView('contacto')}
                className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.5em] text-white hover:text-[#D2B48C] transition-all"
              >
                Ser parte del futuro
                <div className="w-12 h-[1px] bg-[#D2B48C] group-hover:w-20 transition-all"></div>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA INSPIRATIONAL */}
      <section className="py-40 bg-[#0a0a0a] text-center border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 space-y-12">
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight italic">
              "El éxito no es el destino, <br /> es el <span className="text-[#D2B48C] not-italic">estándar</span> de nuestro camino."
            </h3>
            <div className="flex justify-center gap-12">
               <div className="text-left">
                  <p className="text-[#D2B48C] text-2xl font-serif">2028</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Expansión Global</p>
               </div>
               <div className="text-left">
                  <p className="text-[#D2B48C] text-2xl font-serif">Elite</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Comunidad Talent</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
