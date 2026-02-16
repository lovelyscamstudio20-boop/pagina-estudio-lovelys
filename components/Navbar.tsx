
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
    { id: 'modelos', label: 'Portafolio' },
    { id: 'ubicacion', label: 'Sedes' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || currentView !== 'inicio' ? 'bg-black/95 backdrop-blur-2xl py-5 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <button onClick={() => setView('inicio')} className="flex items-center space-x-4 group focus:outline-none">
          <div className="relative w-8 h-8 flex items-center justify-center border border-[#C5A059] transition-transform group-hover:rotate-45">
            <span className="text-[#C5A059] font-serif text-lg font-bold -rotate-45 group-hover:rotate-0 transition-transform">L</span>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-sm font-serif tracking-[0.3em] gold-text font-bold uppercase">Lovelys</span>
            <span className="text-[7px] tracking-[0.5em] text-gray-500 uppercase font-medium mt-1">Elite Studio</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)} 
              className={`text-[9px] uppercase tracking-[0.5em] transition-all relative group font-bold ${currentView === item.id ? 'text-[#C5A059]' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#C5A059] transition-all ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          
          <button 
            onClick={() => setView('contacto')}
            className="px-8 py-3 border border-[#C5A059] text-[#C5A059] text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-black transition-all"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#C5A059] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-8 flex flex-col items-end space-y-1.5">
            <div className={`h-[1px] bg-[#C5A059] transition-all ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-4'}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-all duration-700 lg:hidden flex flex-col items-center justify-center space-y-10 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }} 
              className={`text-4xl font-serif tracking-widest uppercase transition-all ${currentView === item.id ? 'gold-text scale-110' : 'text-gray-600 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setView('contacto'); setIsMobileMenuOpen(false); }}
            className="mt-8 px-12 py-5 gold-bg text-black text-[10px] font-bold uppercase tracking-[0.5em]"
          >
            Admisiones
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
