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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const menuItems: { id: ViewType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Programas' },
    { id: 'estudio', label: 'Espacios' },
    { id: 'ubicacion', label: 'Sedes' },
  ];

  const LionLogo = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#C5A059] group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 20 L40 10 L50 20 L60 10 L70 20 L70 30 L30 30 Z" />
      <path d="M50 35 C35 35 25 45 25 60 C25 80 40 95 50 95 C60 95 75 80 75 60 C75 45 65 35 50 35" />
      <path d="M45 55 Q45 52 48 52 M55 55 Q55 52 52 52" stroke="#000" strokeWidth="1" fill="none" />
      <path d="M48 65 L52 65 L50 68 Z" fill="#000" />
    </svg>
  );

  return (
    <nav className={`fixed w-full z-[150] transition-all duration-700 ${isScrolled || currentView !== 'inicio' ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <button onClick={() => { setView('inicio'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-3 group focus:outline-none">
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

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden relative z-[200] text-[#C5A059] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-8 flex flex-col items-end space-y-2">
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-500 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[9px]' : 'w-8'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-[1px] bg-[#C5A059] transition-all duration-500 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px]' : 'w-4'}`}></div>
          </div>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY: TOP MO EDITORIAL STYLE */}
      <div className={`fixed inset-0 bg-black z-[140] transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] lg:hidden flex flex-col justify-between px-8 py-20 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
           <span className="text-[40vh] font-serif italic text-white leading-none whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">Lovelys</span>
        </div>

        <div className="relative z-10 flex flex-col space-y-10 mt-12">
          {menuItems.map((item, idx) => (
            <button 
              key={item.id}
              onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }} 
              className={`text-left group flex items-center justify-between transition-all duration-500 delay-[${idx * 70}ms]`}
            >
              <div className="flex flex-col">
                <span className={`text-5xl md:text-7xl font-serif tracking-tighter transition-all ${currentView === item.id ? 'gold-text italic' : 'text-gray-400 group-hover:text-white'}`}>
                   {item.label}
                </span>
                <div className={`h-[1px] bg-[#C5A059] transition-all duration-700 ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-20'}`}></div>
              </div>
              <span className="text-gray-800 font-serif italic text-2xl group-hover:text-[#C5A059] transition-colors">0{idx + 1}</span>
            </button>
          ))}
          
          <button 
            onClick={() => { setView('contacto'); setIsMobileMenuOpen(false); }}
            className="group flex flex-col items-start pt-10"
          >
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.6em] mb-4">Inicia tu carrera</span>
            <span className="text-4xl font-serif text-white hover:text-[#C5A059] transition-colors">Postulación Elite</span>
            <div className="w-1/2 h-[1px] bg-white/10 mt-4 group-hover:w-full transition-all duration-700"></div>
          </button>
        </div>

        {/* Footer of Mobile Menu */}
        <div className="relative z-10 flex flex-col space-y-6 pt-12 border-t border-white/5">
           <div className="flex justify-between items-end">
              <div className="space-y-1">
                 <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Ubicación</p>
                 <p className="text-sm text-white font-light tracking-widest">Chinchiná, Caldas</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://instagram.com/camstudiolovelys" target="_blank" className="text-[#C5A059] text-xs uppercase tracking-widest border-b border-[#C5A059]/30">Instagram</a>
                <a href="https://tiktok.com/@lovelyscamestudio" target="_blank" className="text-[#C5A059] text-xs uppercase tracking-widest border-b border-[#C5A059]/30">TikTok</a>
              </div>
           </div>
           <p className="text-[8px] text-gray-800 uppercase tracking-[0.8em] font-bold text-center">LOVELYS ESTUDIO © 2025</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;