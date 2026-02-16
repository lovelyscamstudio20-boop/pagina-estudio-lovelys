import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Studios from './components/Studios';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type ViewType = 'inicio' | 'servicios' | 'estudio' | 'ubicacion' | 'contacto';

// Centralización del número de contacto solicitado
const WHATSAPP_NUMBER = "573224569126";

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('inicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      <Navbar setView={setView} currentView={view} />
      
      <main className="transition-opacity duration-500">
        {view === 'inicio' && (
          <>
            <Hero setView={setView} />
            <About setView={setView} />
          </>
        )}
        {view === 'servicios' && <Services setView={setView} whatsappNumber={WHATSAPP_NUMBER} />}
        {view === 'estudio' && <Studios setView={setView} />}
        {view === 'ubicacion' && <Location setView={setView} />}
        {view === 'contacto' && <Contact setView={setView} whatsappNumber={WHATSAPP_NUMBER} />}
      </main>

      <Footer setView={setView} />

      {/* WhatsApp Elite Floating Button */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end group">
        {/* Tooltip Label - Editorial Style */}
        <div className="mb-4 mr-2 bg-[#C5A059] text-black px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse-slow shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          ¡Postúlate ahora!
        </div>
        
        {/* Floating Action Button */}
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Lovelys Estudio, quiero recibir información sobre el proceso de admisión elite.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white whatsapp-glow shadow-2xl transition-all hover:scale-110 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.126-.54c1.021.571 1.956.887 3.161.888 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.751-5.767-5.751zm3.391 8.24c-.144.405-.837.774-1.17.818-.299.039-.683.064-1.111-.074-.265-.086-.593-.207-1.023-.393-1.821-.789-2.992-2.651-3.083-2.772-.091-.121-.741-.986-.741-1.881 0-.895.467-1.334.633-1.517.167-.182.364-.228.486-.228.121 0 .243.001.349.006.112.005.263-.042.411.319.15.365.513 1.248.558 1.34.045.091.076.197.015.319-.061.121-.092.197-.183.304-.091.106-.191.237-.273.319-.091.091-.186.191-.079.375.106.183.473.78 1.014 1.261.697.621 1.284.814 1.467.905.183.091.289.076.395-.045.106-.121.456-.531.577-.714.121-.182.243-.152.41-.091s1.063.501 1.246.593c.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;