import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Clock } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    concern: '',
  });

  // Verfügbarkeits-Struktur: { 'Montag': ['10:00', '11:00'], ... }
  const [availability, setAvailability] = useState<Record<string, string[]>>({});

  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  const hours = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const toggleDay = (day: string) => {
    setAvailability(prev => {
      const newAvail = { ...prev };
      if (newAvail[day]) {
        delete newAvail[day];
      } else {
        newAvail[day] = [];
      }
      return newAvail;
    });
  };

  const toggleTime = (day: string, time: string) => {
    setAvailability(prev => {
      const dayTimes = prev[day] || [];
      const newDayTimes = dayTimes.includes(time)
        ? dayTimes.filter(t => t !== time)
        : [...dayTimes, time];
      
      return {
        ...prev,
        [day]: newDayTimes
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verfügbarkeit in lesbaren String umwandeln für Netlify
    // Added type assertion to Object.entries to fix 'unknown' type error for times on lines 49 and 50
    const availabilityString = (Object.entries(availability) as [string, string[]][])
      .filter(([_, times]) => times.length > 0)
      .map(([day, times]) => `${day}: ${times.join(', ')}`)
      .join(' | ');

    const encode = (data: any) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    const submissionData = {
      ...formData,
      "form-name": "contact",
      "availability": availabilityString || "Keine Präferenz angegeben"
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(submissionData)
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch(error => alert("Fehler beim Senden: " + error));
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
            Schreib uns kurz, worum es geht. Wir melden uns persönlich für einen Termin.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/60 shadow-xl shadow-black/[0.02]">
          <form 
            onSubmit={handleSubmit} 
            name="contact" 
            data-netlify="true" 
            className="space-y-10"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1">Dein Name</label>
                <input 
                  required
                  name="name"
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
                  name="email"
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
                name="concern"
                type="text" 
                value={formData.concern}
                onChange={(e) => setFormData({...formData, concern: e.target.value})}
                placeholder="Ein kurzer Gedanke genügt..."
                className="w-full bg-white/40 border-b border-organic-charcoal/10 px-1 py-3 focus:border-organic-sageDark transition-all outline-none placeholder:text-organic-text/20 font-light"
              />
            </div>

            {/* Termin-Sektion */}
            <div className="space-y-8">
              <div className="flex items-center gap-2 ml-1">
                <Calendar size={14} className="text-organic-textLight" />
                <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold">Mögliche Termine (Mo - Fr)</label>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {days.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`px-5 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                      availability[day] !== undefined
                      ? 'bg-organic-charcoal text-white border-organic-charcoal' 
                      : 'bg-white/50 border-organic-charcoal/5 text-organic-textLight hover:border-organic-charcoal/20'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Zeit-Slots für ausgewählte Tage */}
              <div className="space-y-6">
                {days.map((day) => availability[day] !== undefined && (
                  <div key={`${day}-times`} className="animate-slide-up bg-white/30 rounded-2xl p-6 border border-white/40 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={12} className="text-organic-textLight" />
                      <span className="text-[10px] uppercase tracking-[0.1em] text-organic-text font-medium">{day}s Uhrzeiten:</span>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                      {hours.map((hour) => (
                        <button
                          key={`${day}-${hour}`}
                          type="button"
                          onClick={() => toggleTime(day, hour)}
                          className={`py-2 rounded-lg text-[10px] font-medium transition-all duration-200 border ${
                            availability[day]?.includes(hour)
                            ? 'bg-organic-sageDark text-white border-organic-sageDark shadow-sm' 
                            : 'bg-white/60 border-black/5 text-organic-textLight hover:bg-white'
                          }`}
                        >
                          {hour}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 text-center">
              <button 
                type="submit"
                className="group relative px-14 py-5 bg-organic-charcoal text-white rounded-full font-medium overflow-hidden transition-all hover:bg-black hover:scale-[1.02] shadow-xl shadow-organic-sage/20 inline-flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Anfrage absenden
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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