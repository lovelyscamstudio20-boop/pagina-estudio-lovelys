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
    
    const message = `*SOLICITUD DE ADMISIÓN - LOVELYS ESTUDIO*\n\n` +
                    `*Postulante:* ${formState.name}\n` +
                    `*WhatsApp:* ${formState.phone}\n` +
                    `*Edad:* ${formState.age} años\n` +
                    `*Perfil:* ${formState.experience}\n` +
                    (formState.message ? `*Nota:* ${formState.message}` : '');
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState({ ...formState, status: 'success' });
    }, 1000);
  };

  return (
    <div className="py-32 bg-black min-h-screen flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.6em] font-bold">Apply for Admission</span>
              <h2 className="text-5xl md:text-[6rem] font-serif text-white leading-none">Únete al <br /><span className="gold-text italic">Círculo</span></h2>
            </div>
            
            <p className="text-gray-400 font-light leading-relaxed text-xl max-w-md tracking-wide">
              No somos una agencia masiva. Somos una familia boutique que prioriza tu <span className="text-white">seguridad, prestigio y rentabilidad</span>.
            </p>

            <div className="space-y-8 pt-10 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059]">
                  <span className="font-serif italic">01</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Asesoría Legal 24/7</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059]">
                  <span className="font-serif italic">02</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Privacidad Total Garantizada</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059]">
                  <span className="font-serif italic">03</span>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Pagos en Dólares Quincenales</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {formState.status === 'success' ? (
              <div className="bg-neutral-900 border border-[#C5A059]/20 p-20 text-center space-y-8 animate-in fade-in duration-700">
                <div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-serif text-white italic">Aplicación Enviada</h3>
                <p className="text-gray-500 font-light">Se ha generado tu ficha en WhatsApp. Un gestor de talento te contactará en breve.</p>
                <button 
                  onClick={() => setView('inicio')}
                  className="px-12 py-4 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:text-black transition-all"
                >
                  Regresar al Inicio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-900/50 p-8 md:p-16 border border-white/5 space-y-10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Nombre Artístico / Real</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C5A059] transition-all"
                      placeholder="Ej. Valeria Models"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C5A059] transition-all"
                      placeholder="+57..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Edad</label>
                    <input 
                      type="number" 
                      required
                      value={formState.age}
                      onChange={(e) => setFormState({...formState, age: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C5A059] transition-all"
                      placeholder="18+"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Experiencia</label>
                    <select 
                      value={formState.experience}
                      onChange={(e) => setFormState({...formState, experience: e.target.value})}
                      className="w-full bg-black border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C5A059] transition-all"
                    >
                      <option value="Sin experiencia">Soy Nueva</option>
                      <option value="Con experiencia">Tengo Trayectoria</option>
                      <option value="Modelo Satélite">Busco Opción Satélite</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Cuéntanos sobre ti (Opcional)</label>
                  <textarea 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#C5A059] transition-all resize-none"
                    placeholder="Tus objetivos o dudas..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formState.status === 'sending'}
                  className="w-full py-6 bg-[#C5A059] text-black font-bold uppercase tracking-[0.5em] text-[11px] btn-luxe disabled:opacity-50"
                >
                  {formState.status === 'sending' ? 'Enviando Aplicación...' : 'Enviar Solicitud de Admisión'}
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