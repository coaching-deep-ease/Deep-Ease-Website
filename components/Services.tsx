import React from 'react';
import { Compass, Users, Target, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Compass className="text-organic-sageDark" />,
    title: "Persönliche Neuausrichtung",
    desc: "Du suchst nach einer neuen Richtung oder willst dich beruflich verändern. Gemeinsam identifizieren wir deine Werte und überwinden Blockaden damit du deinen Weg mit Klarheit und einem konkreten Plan weitergehen kannst.",
    coach: "Leon",
    theme: "sage"
  },
  {
    icon: <Target className="text-organic-skyDark" />,
    title: "Own Your Leadership",
    desc: "Coaching für Führungskräfte, die ihre eigene Leadership Identity entwickeln wollen. Klar in der Rolle. Authentisch im Führungsstil. Wirksam im Team.",
    coach: "Simon",
    theme: "sky"
  },
  {
    icon: <ShieldCheck className="text-organic-sageDark" />,
    title: "Resilienz im Wandel",
    desc: "Schwierige Lebensphasen fordern uns heraus. Mit systemischen Methoden unterstütze ich dich dabei neue Perspektiven einzunehmen und innere Stärke aufzubauen um Krisen in echte Chancen zur Weiterentwicklung zu verwandeln.",
    coach: "Leon",
    theme: "sage"
  },
  {
    icon: <Users className="text-organic-skyDark" />,
    title: "Evolving Teams",
    desc: "Teams verändern sich ständig, ebenso wie ihre Dynamik. Wir richten den Blick auf Menschen, ihre Stärken und das Zusammenspiel im Team. Coaching unterstützt dabei, individuelle Potenziale gezielt einzusetzen und ein nachhaltiges, positives Arbeitsklima zu gestalten.",
    coach: "Simon",
    theme: "sky"
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
            Ob du deinen inneren Kompass neu justieren oder die volle Kraft deines Unternehmens ausschöpfen willst – unser dualer Ansatz deckt das gesamte Spektrum menschlichen Potenzials ab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-10 rounded-3xl group relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${service.theme === 'sage' ? 'bg-organic-sageDark' : 'bg-organic-skyDark'}`}></div>

              <div className="relative z-10 flex-grow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.theme === 'sage' ? 'bg-organic-sage/50 group-hover:bg-organic-sage' : 'bg-organic-sky/50 group-hover:bg-organic-sky'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-4 text-organic-charcoal">{service.title}</h3>
                <p className="text-organic-text/80 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-organic-charcoal/5 pt-6 mt-auto">
                <span className="text-xs uppercase tracking-widest text-organic-textLight font-medium">Mit {service.coach}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;