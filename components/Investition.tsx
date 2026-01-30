import React, { useState } from 'react';

const Investition: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('anfrage');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const buttonStyle: React.CSSProperties = {
    background: isHovered ? '#FFFFFF' : '#FFF9E6', // White on Hover, Light Pastel Yellow-Orange Default
    borderRadius: '50px',
    color: '#1A1A1A', // Always Black
    fontWeight: '600',
    border: '1px solid rgba(0,0,0,0.02)',
    padding: '12px 24px',
    // Soft neutral shadows
    boxShadow: isHovered 
      ? '0 6px 20px rgba(0, 0, 0, 0.08)' 
      : '0 4px 15px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.8)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div 
          className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-white/60 shadow-[0_0_60px_-15px_rgba(180,210,200,0.4)]"
          style={{
            background: 'linear-gradient(135deg, rgba(228,245,245,0.7) 0%, rgba(240,249,255,0.7) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          
          <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>

          <div className="relative z-10">
             <span className="text-organic-textLight text-xs tracking-[0.3em] uppercase mb-6 block font-medium">Zusammenarbeit</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-organic-charcoal">Deine Investition</h2>
            
            <p className="text-xl text-organic-text font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Wirkliche Transformation lässt sich nicht in Standard-Pakete pressen. 
              Wir gestalten den Rahmen unserer Zusammenarbeit basierend auf deiner Situation und deinen Zielen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-center">
              <div className="bg-white/60 rounded-xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif text-lg mb-2 text-organic-charcoal">Orientierungsrahmen</h4>
                <p className="text-sm text-organic-textLight">Klarheit über Status Quo und erste Schritte.</p>
              </div>
              <div className="bg-white/60 rounded-xl p-6 border border-white/80 shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="font-serif text-lg mb-2 text-organic-charcoal">Intensiv-Begleitung</h4>
                <p className="text-sm text-organic-textLight">Langfristige Partnerschaft für nachhaltigen Wandel.</p>
              </div>
            </div>

            <div className="inline-flex flex-col items-center">
              <button 
                onClick={scrollToContact}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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