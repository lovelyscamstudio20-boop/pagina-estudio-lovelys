
import React, { useState, useEffect } from 'react';
import { ViewType } from '../App';

interface NavbarProps {
  setView: (view: ViewType) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { id: ViewType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Programas' },
    { id: 'estudio', label: 'Espacios' },
    { id: 'ubicacion', label: 'Sedes' },
  ];

  const LionLogo = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#C5A059]" xmlns="http://www.w3.org/2000/svg">
      {/* Crown */}
      <path d="M30 20 L40 10 L50 20 L60 10 L70 20 L70 30 L30 30 Z" />
      {/* Lion Face Simplified */}
      <path d="M50 35 C35 35 25 45 25 60 C25 80 40 95 50 95 C60 95 75 80 75 60 C75 45 65 35 50 35" />
      <path d="M45 55 Q45 52 48 52 M55 55 Q55 52 52 52" stroke="#000" strokeWidth="1" fill="none" />
      <path d="M48 65 L52 65 L50 68 Z" fill="#000" />
      {/* Mane Details */}
      <path d="M25 50 L15 45 M75 50 L85 45 M25 70 L15 75 M75 70 L85 75" stroke="#C5A059" strokeWidth="2" />
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || currentView !== 'inicio' ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <button onClick={() => setView('inicio')} className="flex items-center space-x-3 group focus:outline-none">
          <LionLogo />
          <div className="flex flex-col items-start leading-none">
            <span className="text-lg md:text-xl font-serif tracking-[0.2em] gold-text font-bold uppercase">Lovelys</span>
            <span className="text-[8px] md:text-[9px] tracking-[0.4em] text-white uppercase font-light">Estudio Elite</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)} 
              className={`text-[10px] uppercase tracking-[0.4em] transition-all relative group font-semibold ${currentView === item.id ? 'text-[#C5A059]' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#C5A059] transition-all ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          
          <button 
            onClick={() => setView('contacto')}
            className="px-8 py-3 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-black transition-all"
          >
            Admisiones
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#C5A059] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-8 flex flex-col items-end space-y-2">
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[9px]' : 'w-8'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px]' : 'w-4'}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 px-6 text-center ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         {menuItems.map((item, idx) => (
            <button 
              key={item.id}
              onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }} 
              className={`text-3xl font-serif tracking-widest uppercase transition-all duration-500 delay-[${idx * 50}ms] ${currentView === item.id ? 'gold-text scale-110' : 'text-gray-600 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setView('contacto'); setIsMobileMenuOpen(false); }}
            className="mt-10 w-full max-w-xs py-5 gold-bg text-black text-[11px] font-bold uppercase tracking-[0.5em] shadow-2xl"
          >
            Postularse
          </button>
          <div className="pt-12 flex space-x-8 opacity-40">
             <span className="text-[10px] uppercase tracking-[0.3em] text-white">Chinchiná</span>
             <span className="text-[10px] uppercase tracking-[0.3em] text-white">Caldas</span>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
