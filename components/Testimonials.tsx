import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Leons Arbeit hat mir geholfen, nicht nur mein Unternehmen, sondern mich selbst neu zu verstehen. Eine seltene Tiefe in einer lauten Welt.",
    author: "Elena R.",
    role: "Gründerin",
    theme: "sage"
  },
  {
    text: "Simons Strategie-Sessions waren der Wendepunkt für unser Führungsteam. Wir haben Klarheit gefunden, wo vorher Chaos herrschte.",
    author: "Markus W.",
    role: "CEO Tech-Startups",
    theme: "sky"
  },
  {
    text: "Die Kombination aus beiden Ansätzen ist einzigartig. Ich fühle mich geerdet und gleichzeitig bereit, ambitioniert zu wachsen.",
    author: "Sarah K.",
    role: "Kreativdirektorin",
    theme: "neutral"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-full h-1/2 -skew-y-3 bg-white/40 -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-organic-charcoal">Was Klienten sagen</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`
                glass-card p-8 rounded-2xl relative
                ${i === 1 ? 'md:-translate-y-8' : ''} 
                hover:shadow-xl transition-all duration-500
              `}
            >
              <Quote className={`w-8 h-8 mb-4 opacity-30 ${t.theme === 'sage' ? 'text-organic-sageDark' : t.theme === 'sky' ? 'text-organic-skyDark' : 'text-organic-charcoal'}`} />
              
              <p className="text-lg font-serif italic text-organic-text mb-8 leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-white text-sm
                  ${t.theme === 'sage' ? 'bg-organic-sageDark' : t.theme === 'sky' ? 'bg-organic-skyDark' : 'bg-organic-charcoal'}
                `}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-sm text-organic-charcoal">{t.author}</h4>
                  <span className="text-xs text-organic-textLight uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;