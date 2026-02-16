import React, { useState } from 'react';
import { ViewType } from '../App';

interface ContactProps {
  setView: (view: ViewType) => void;
  whatsappNumber: string;
}

const Contact: React.FC<ContactProps> = ({ setView, whatsappNumber }) => {
  const [formState, setFormState] = useState({ 
    name: '', 
    phone: '',
    age: '',
    experience: 'Sin experiencia',
    message: '', 
    status: 'idle' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, status: 'sending' });
    
    const message = `🌟 *NUEVA POSTULACIÓN ELITE - LOVELYS ESTUDIO* 🌟\n\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                    `👤 *Nombre:* ${formState.name}\n` +
                    `📱 *WhatsApp:* ${formState.phone}\n` +
                    `🎂 *Edad:* ${formState.age} años\n` +
                    `💎 *Perfil:* ${formState.experience}\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                    (formState.message ? `📝 *Mensaje Adicional:* \n"${formState.message}"` : `🚀 *Nota:* Lista para iniciar el proceso de selección.`);
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState({ ...formState, status: 'success' });
    }, 1000);
  };

  return (
    <div className="py-40 bg-black min-h-screen flex flex-col justify-center reveal-up">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold">The Journey Begins</span>
              <h2 className="text-5xl md:text-[6.5rem] font-serif text-white leading-none">Únete al <br /><span className="gold-text italic">Círculo</span></h2>
            </div>
            
            <p className="text-gray-400 font-light leading-relaxed text-xl max-w-md tracking-wide">
              No somos una agencia masiva. Somos una familia boutique que prioriza tu <span className="text-white">seguridad, prestigio y rentabilidad</span> en cada paso.
            </p>

            <div className="space-y-8 pt-10 border-t border-white/10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <span className="font-serif italic">01</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium group-hover:text-white transition-colors">Asesoría Legal 24/7</p>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <span className="font-serif italic">02</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium group-hover:text-white transition-colors">Privacidad Total Garantizada</p>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <span className="font-serif italic">03</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium group-hover:text-white transition-colors">Pagos en Dólares Quincenales</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formState.status === 'success' ? (
              <div className="bg-neutral-900 border border-[#C5A059]/20 p-20 text-center space-y-8 animate-in fade-in duration-1000">
                <div className="w-24 h-24 gold-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-serif text-white italic">Ficha Generada</h3>
                <p className="text-gray-500 font-light text-lg">Hemos preparado tu postulación. Por favor envíala en la ventana de WhatsApp que se ha abierto.</p>
                <button 
                  onClick={() => setView('inicio')}
                  className="px-16 py-5 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  Regresar al Inicio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-900/40 p-10 md:p-20 border border-white/5 space-y-12 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:outline-none focus:border-[#C5A059] transition-all text-lg placeholder:text-gray-800"
                      placeholder="Tu nombre real o artístico"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">WhatsApp Móvil</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:outline-none focus:border-[#C5A059] transition-all text-lg placeholder:text-gray-800"
                      placeholder="+57 3XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Edad (Solo 18+)</label>
                    <input 
                      type="number" 
                      required
                      min="18"
                      value={formState.age}
                      onChange={(e) => setFormState({...formState, age: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:outline-none focus:border-[#C5A059] transition-all text-lg placeholder:text-gray-800"
                      placeholder="Ej. 21"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Nivel de Trayectoria</label>
                    <select 
                      value={formState.experience}
                      onChange={(e) => setFormState({...formState, experience: e.target.value})}
                      className="w-full bg-black border-b border-white/10 py-5 text-white focus:outline-none focus:border-[#C5A059] transition-all text-lg appearance-none"
                    >
                      <option value="Sin experiencia">Iniciando mi carrera (Soy Nueva)</option>
                      <option value="Con experiencia">Modelo con Trayectoria</option>
                      <option value="Modelo Satélite">Solicitud de Modelo Satélite</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Objetivos Profesionales (Opcional)</label>
                  <textarea 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-5 text-white focus:outline-none focus:border-[#C5A059] transition-all resize-none text-lg placeholder:text-gray-800"
                    placeholder="¿Qué esperas lograr con nosotros?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formState.status === 'sending'}
                  className="w-full py-7 bg-[#C5A059] text-black font-bold uppercase tracking-[0.8em] text-[11px] hover:bg-white hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50 shadow-2xl"
                >
                  {formState.status === 'sending' ? 'PROCESANDO ADMISIÓN...' : 'SOLICITAR ADMISIÓN ELITE'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;