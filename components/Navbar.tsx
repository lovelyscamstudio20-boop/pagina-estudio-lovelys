
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
    { id: 'servicios', label: 'Servicios' },
    { id: 'estudio', label: 'El Estudio' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'inicio' ? 'bg-black/95 backdrop-blur-lg py-4 shadow-2xl border-b border-gold/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setView('inicio')} className="flex items-center space-x-3 group focus:outline-none text-left">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#d4af37]">
              <path d="M35 25 L42 15 L50 22 L58 15 L65 25 L65 30 L35 30 Z" />
              <path d="M50 35 C35 35 25 45 25 60 C25 80 40 90 50 90 C60 90 75 80 75 60 C75 45 65 35 50 35 M40 55 Q40 50 45 50 M60 55 Q60 50 55 50 M50 70 L45 75 L55 75 Z" />
            </svg>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-md font-serif tracking-[0.2em] gold-text font-bold uppercase">Lovelys Estudio</span>
            <span className="text-[7px] tracking-[0.4em] text-gray-500 uppercase">Management & Elite Agency</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)} 
              className={`text-[10px] uppercase tracking-[0.3em] transition-all relative group font-semibold ${currentView === item.id ? 'text-[#d4af37]' : 'text-gray-400 hover:text-[#d4af37]'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-[#d4af37] transition-all ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#d4af37] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }} 
              className={`text-2xl font-serif tracking-widest uppercase transition-colors ${currentView === item.id ? 'gold-text' : 'text-gray-500'}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-10">
             <a href="https://wa.me/573224569126" className="px-10 py-4 gold-gradient text-black text-[10px] font-bold uppercase tracking-widest">Postularme</a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
