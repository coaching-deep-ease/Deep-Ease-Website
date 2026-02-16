import React from 'react';
import { ArrowDown, Sparkles, Briefcase } from 'lucide-react';

const ThemeHero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Höherer Offset (100px), um sicherzustellen, dass die Gateway-Felder 
      // bei der Landung auf dem Profil komplett aus dem Sichtfeld verschwunden sind.
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="lg:hidden relative w-full bg-organic-cream overflow-hidden h-[100svh] flex flex-col">
      {/* Zentraler Header - Nutzt dynamische Viewport-Einheiten für konsistenten Platz oben */}
      <div className="container mx-auto px-6 text-center pt-[10vh] md:pt-[8vh] pb-[4vh] md:pb-[3vh] animate-fade-in flex-shrink-0">
        <h1 className="text-3xl md:text-5xl font-serif text-organic-charcoal mb-3 leading-tight">
          Bereit für den nächsten Schritt?
        </h1>
        <p className="text-sm md:text-xl text-organic-textLight font-light italic">
          Wir schaffen Raum für Perspektiven
        </p>
      </div>

      {/* Gateway Container: Fills the remaining viewport space perfectly */}
      <div className="flex flex-col flex-grow w-full gap-0 px-0 border-t border-white/20 overflow-hidden">
        
        {/* Sinn & Orientierung (Shiny Sage Glass) */}
        <div 
          onClick={() => scrollToSection('leon-profile')}
          className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 overflow-hidden active:brightness-110"
        >
          {/* Iridescent Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-organic-sage/95 to-organic-sageDark/50 backdrop-blur-3xl"></div>
          
          {/* Inner Glow and Border Softening */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.4)] border-b border-white/40"></div>
          
          {/* Animated Tech Shimmer */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform ease-in-out"></div>

          <div className="relative z-10 text-center p-4 transition-transform duration-500 group-hover:scale-105 max-w-[85%] md:max-w-md mx-auto">
            <div className="flex justify-center mb-2 md:mb-4">
               <div className="p-1.5 md:p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-organic-sageDark">
                  <Sparkles size={14} className="md:w-5 md:h-5" />
               </div>
            </div>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.4em] text-organic-sageDark font-bold mb-2 md:mb-3 opacity-90 drop-shadow-sm">
              Privat
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-organic-charcoal mb-3 md:mb-5 leading-tight drop-shadow-sm">
              Sinn & <span className="italic font-light text-organic-textLight">Orientierung</span>
            </h2>
            <div className="flex justify-center items-center">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/40 flex items-center justify-center border border-white/60 text-organic-sageDark shadow-sm">
                 <ArrowDown size={14} className="animate-bounce md:w-5 md:h-5" />
               </div>
            </div>
          </div>
        </div>

        {/* Führung & Teamentwicklung (Shiny Sky Glass) */}
        <div 
          onClick={() => scrollToSection('simon-profile')}
          className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 overflow-hidden active:brightness-110"
        >
          {/* Iridescent Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-organic-sky/95 to-organic-skyDark/50 backdrop-blur-3xl"></div>

          {/* Inner Glow and Border Softening */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.4)] border-t border-white/40"></div>

          {/* Animated Tech Shimmer */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform ease-in-out"></div>

          <div className="relative z-10 text-center p-4 transition-transform duration-500 group-hover:scale-105 max-w-[85%] md:max-w-md mx-auto">
            <div className="flex justify-center mb-2 md:mb-4">
               <div className="p-1.5 md:p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-organic-skyDark">
                  <Briefcase size={14} className="md:w-5 md:h-5" />
               </div>
            </div>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.4em] text-organic-skyDark font-bold mb-2 md:mb-3 opacity-90 drop-shadow-sm">
              Business
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-organic-charcoal mb-3 md:mb-5 leading-tight drop-shadow-sm">
              Führung & <span className="italic font-light text-organic-textLight whitespace-nowrap md:whitespace-normal">Teamentwicklung</span>
            </h2>
            <div className="flex justify-center items-center">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/40 flex items-center justify-center border border-white/60 text-organic-skyDark shadow-sm">
                 <ArrowDown size={14} className="animate-bounce md:w-5 md:h-5" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThemeHero;