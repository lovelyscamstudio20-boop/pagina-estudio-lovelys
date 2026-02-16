
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Studios from './components/Studios';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define the available views for navigation. Removed 'modelos'.
export type ViewType = 'inicio' | 'servicios' | 'estudio' | 'ubicacion' | 'contacto';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const WHATSAPP_NUMBER = "573224569126";

  const renderContent = () => {
    switch (view) {
      case 'servicios':
        return <Services setView={setView} whatsappNumber={WHATSAPP_NUMBER} />;
      case 'estudio':
        return <Studios setView={setView} />;
      case 'ubicacion':
        return <Location setView={setView} />;
      case 'contacto':
        return <Contact setView={setView} whatsappNumber={WHATSAPP_NUMBER} />;
      case 'inicio':
      default:
        return (
          <>
            <Hero setView={setView} />
            <About setView={setView} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-[#D2B48C] selection:text-black">
      <Navbar setView={setView} currentView={view} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setView={setView} />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end group">
        <div className="mb-2 bg-white text-black text-[9px] font-bold px-3 py-1 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest pointer-events-none">
          Postularme Ahora
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Lovelys Estudio, estoy interesada en aplicar como modelo.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D2B48C] p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.389l-.715 2.614 2.684-.705c.82.46 1.76.726 2.76.726 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.724-5.725-5.724zm3.389 8.211c-.139.395-.705.715-1.127.761-.395.046-.889.046-1.353-.092-.303-.093-.674-.21-1.144-.414-1.996-.867-3.277-2.903-3.374-3.03-.1-.139-.812-1.077-.812-2.053 0-.977.512-1.458.694-1.666.182-.21.395-.256.536-.256.139 0 .279.011.414.011.139 0 .326-.046.512.395.182.46.65 1.581.715 1.714.046.139.093.303 0 .46-.093.182-.139.303-.279.46-.139.139-.303.326-.414.414-.139.139-.279.303-.139.536.139.21.627 1.03 1.348 1.666.93.812 1.714 1.077 1.969 1.21.256.139.395.116.536-.046.139-.182.605-.715.761-.952.139-.256.326-.21.536-.139.21.093 1.348.627 1.581.738.256.116.414.182.483.279.093.139.093.536-.046.93zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
