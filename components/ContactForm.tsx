import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  concern: string;
  days: string[];
  times: string[];
}

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    concern: '',
    days: [],
    times: []
  });

  const weekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFlying) return; // Prevent double submission during animation

    setIsFlying(true);
    // Remove hover state immediately when flying starts to avoid glitches
    setIsHovered(false); 
    
    // Wait for the animation to play out (1.2s in CSS + some buffer)
    await new Promise(resolve => setTimeout(resolve, 1100));
    
    console.log('Sending inquiry to coaching@deep-ease.com', formData);
    setIsSubmitted(true);
    setIsFlying(false);
  };

  const handleDaySelect = (day: string) => {
    if (formData.days.includes(day)) {
      setFormData({ ...formData, days: formData.days.filter(d => d !== day) });
    } else {
      setFormData({ ...formData, days: [...formData.days, day] });
    }
  };

  const handleTimeSelect = (time: string) => {
    if (formData.times.includes(time)) {
      setFormData({ ...formData, times: formData.times.filter(t => t !== time) });
    } else {
      setFormData({ ...formData, times: [...formData.times, time] });
    }
  };

  const buttonStyle: React.CSSProperties = {
    background: (isHovered && !isFlying) ? '#FFFFFF' : '#FFF9E6', // White on Hover, Light Pastel Yellow-Orange Default
    borderRadius: '50px',
    color: '#1A1A1A', // Always Black
    fontWeight: '600',
    border: '1px solid rgba(0,0,0,0.02)',
    padding: '12px 24px',
    // Soft neutral shadows
    boxShadow: (isHovered && !isFlying)
      ? '0 6px 20px rgba(0, 0, 0, 0.08)' 
      : '0 4px 15px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.8)',
    cursor: isFlying ? 'default' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    transform: (isHovered && !isFlying) ? 'scale(1.05)' : 'scale(1)',
  };

  if (isSubmitted) {
    return (
      <section id="anfrage" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center animate-fade-in">
          <div className="glass-panel rounded-3xl p-16 md:p-24 border border-organic-sage/30">
            <div className="w-16 h-16 bg-organic-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-organic-sageDark w-8 h-8" />
            </div>
            <h2 className="text-4xl font-serif text-organic-charcoal mb-4">Danke.</h2>
            <p className="text-lg text-organic-text font-light leading-relaxed">
              Deine Nachricht ist bei uns angekommen.<br />Wir melden uns in Kürze persönlich bei dir.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="anfrage" className="py-40 px-6 relative bg-white/30 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-organic-charcoal mb-6">Lass uns sprechen.</h2>
          <p className="text-lg text-organic-textLight font-light max-w-xl mx-auto leading-relaxed">
            Schreib uns kurz, worum es geht uns sag uns wann wir dich am besten erreichen können.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/60 shadow-xl shadow-black/[0.02]">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1">Dein Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Wie dürfen wir dich nennen?"
                  className="w-full bg-white/40 border-b border-organic-charcoal/10 px-1 py-3 focus:border-organic-sageDark transition-all outline-none placeholder:text-organic-text/20 font-light"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1">Deine E-Mail-Adresse</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="mail@beispiel.de"
                  className="w-full bg-white/40 border-b border-organic-charcoal/10 px-1 py-3 focus:border-organic-skyDark transition-all outline-none placeholder:text-organic-text/20 font-light"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1">Worum geht es dir im Kern?</label>
              <input 
                required
                type="text" 
                value={formData.concern}
                onChange={(e) => setFormData({...formData, concern: e.target.value})}
                placeholder="Ein kurzer Gedanke genügt..."
                className="w-full bg-white/40 border-b border-organic-charcoal/10 px-1 py-3 focus:border-organic-sageDark transition-all outline-none placeholder:text-organic-text/20 font-light"
              />
            </div>

            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1 flex items-center gap-2">
                <Calendar size={12} />
                Wunschtermin
              </label>
              
              <div className="flex flex-wrap gap-3">
                {weekDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDaySelect(day)}
                    className={`px-6 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                      formData.days.includes(day)
                      ? 'bg-organic-charcoal text-white border-organic-charcoal shadow-lg shadow-organic-sage/20' 
                      : 'bg-white/50 border-organic-charcoal/5 text-organic-textLight hover:border-organic-charcoal/20 hover:bg-white'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${formData.days.length > 0 ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="bg-white/40 rounded-2xl p-6 border border-white/50">
                  <div className="flex items-center gap-2 mb-4 text-organic-textLight text-xs tracking-wider">
                    <Clock size={12} />
                    <span>Verfügbare Zeiten</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                          formData.times.includes(time)
                          ? 'bg-organic-sage/40 border-organic-sageDark text-organic-charcoal'
                          : 'bg-white/60 border-transparent text-organic-textLight hover:bg-white hover:border-organic-charcoal/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 text-center">
              <button 
                type="submit"
                disabled={isFlying}
                style={buttonStyle}
                onMouseEnter={() => !isFlying && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="flex items-center justify-center gap-4">
                  Anfrage absenden
                  <Send 
                    size={18} 
                    className={`opacity-90 transition-all ${isFlying ? 'animate-plane-fly' : ''}`} 
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;