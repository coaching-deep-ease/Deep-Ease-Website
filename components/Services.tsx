import React from 'react';
import { Compass, Users, Target, Heart } from 'lucide-react';

const services = [
  {
    icon: <Compass className="text-organic-sageDark" />,
    title: "Persönliche Neuausrichtung",
    desc: "Eine 12-wöchige Reise mit Leon, um deine Kernwerte wiederzuentdecken und deinen Lebensweg mit deinem authentischen Selbst in Einklang zu bringen.",
    coach: "Leon",
    theme: "sage"
  },
  {
    icon: <Target className="text-organic-skyDark" />,
    title: "Executive Strategie",
    desc: "High-Impact Sessions mit Simon. Fokus auf Entscheidungs-Frameworks, Skalierungslogik und Führungspräsenz.",
    coach: "Simon",
    theme: "sky"
  },
  {
    icon: <Users className="text-organic-skyDark" />,
    title: "Team Architektur",
    desc: "Workshops zur Diagnose von Kommunikationsstörungen und zum Wiederaufbau einer Hochleistungskultur im Team.",
    coach: "Simon",
    theme: "sky"
  },
  {
    icon: <Heart className="text-organic-sageDark" />,
    title: "Emotionale Integration",
    desc: "Tiefenarbeit zur Verarbeitung von Übergängen, Trauer oder großen Veränderungen durch künstlerische und somatische Praktiken.",
    coach: "Leon",
    theme: "sage"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <span className="text-organic-textLight text-sm tracking-[0.3em] uppercase mb-4 block font-medium">Unser Angebot</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-organic-charcoal">Tiefe & Klarheit</h2>
          <p className="text-organic-text max-w-2xl mx-auto font-light leading-relaxed">
            Ob du deinen inneren Kompass neu justieren oder eine unternehmerische Eroberung planen willst – unser dualer Ansatz deckt das gesamte Spektrum menschlichen Potenzials ab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-10 rounded-3xl group relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle Color Accent Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${service.theme === 'sage' ? 'bg-organic-sageDark' : 'bg-organic-skyDark'}`}></div>

              <div className="relative z-10 flex-grow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.theme === 'sage' ? 'bg-organic-sage/50 group-hover:bg-organic-sage' : 'bg-organic-sky/50 group-hover:bg-organic-sky'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif mb-4 text-organic-charcoal">{service.title}</h3>
                <p className="text-organic-text/80 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-organic-charcoal/5 pt-6 mt-auto">
                <span className="text-xs uppercase tracking-widest text-organic-textLight font-medium">Mit {service.coach}</span>
                <button className={`text-sm font-medium transition-colors flex items-center gap-2 ${service.theme === 'sage' ? 'text-organic-sageDark hover:text-organic-charcoal' : 'text-organic-skyDark hover:text-organic-charcoal'}`}>
                  Details <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;