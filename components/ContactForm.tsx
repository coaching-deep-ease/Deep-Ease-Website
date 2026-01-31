import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    concern: '',
    preference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Das ist die Logik, die die Daten an Netlify sendet
    const encode = (data: any) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setIsSubmitted(true);
        console.log('Anfrage erfolgreich gesendet');
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
          {/* Hier wurden die Attribute name und data-netlify hinzugefügt */}
          <form 
            onSubmit={handleSubmit} 
            name="contact" 
            data-netlify="true" 
            className="space-y-10"
          >
            {/* Wichtig für Netlify Bot-Erkennung */}
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

            <div className="space-y-5">
              <label className="text-[10px] uppercase tracking-[0.2em] text-organic-textLight font-semibold ml-1 block">Präferenz (Optional)</label>
              <input type="hidden" name="preference" value={formData.preference} />
              <div className="flex flex-wrap gap-3">
                {['Vormittags', 'Nachmittags', 'Abends'].map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setFormData({...formData, preference: pref})}
                    className={`px-8 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                      formData.preference === pref 
                      ? 'bg-organic-charcoal text-white border-organic-charcoal shadow-lg shadow-black/5' 
                      : 'bg-white/50 border-organic-charcoal/5 text-organic-textLight hover:border-organic-charcoal/20'
                    }`}
                  >
                    {pref}
                  </button>
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