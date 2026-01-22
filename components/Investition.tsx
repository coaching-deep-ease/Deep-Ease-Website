import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Investition: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('anfrage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-white">
          
          {/* Decorative soft gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-organic-sage/20 via-transparent to-organic-sky/20 opacity-60"></div>

          <div className="relative z-10">
             <span className="text-organic-textLight text-xs tracking-[0.3em] uppercase mb-6 block font-medium">Zusammenarbeit</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-organic-charcoal">Deine Investition</h2>
            
            <p className="text-xl text-organic-text font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Wirkliche Transformation lässt sich nicht in Standard-Pakete pressen. 
              Wir gestalten den Rahmen unserer Zusammenarbeit basierend auf deiner Situation und deinen Zielen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-left">
              <div className="bg-white/50 rounded-xl p-6 border border-white">
                <h4 className="font-serif text-lg mb-2 text-organic-charcoal">Orientierungsrahmen</h4>
                <p className="text-sm text-organic-textLight">Klarheit über Status Quo und erste Schritte.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-6 border border-white">
                 <h4 className="font-serif text-lg mb-2 text-organic-charcoal">Intensiv-Begleitung</h4>
                <p className="text-sm text-organic-textLight">Langfristige Partnerschaft für nachhaltigen Wandel.</p>
              </div>
            </div>

            <div className="inline-flex flex-col items-center">
              <button 
                onClick={scrollToContact}
                className="px-10 py-4 bg-organic-charcoal text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-organic-sage/20"
              >
                Individuelles Angebot anfragen
              </button>
              <span className="mt-4 text-xs text-organic-textLight">
                Unverbindliches Vorgespräch (30 Min)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investition;