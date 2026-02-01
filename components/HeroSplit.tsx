import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Briefcase, X } from 'lucide-react';
import { SplitState } from '../types';

const HeroSplit: React.FC = () => {
  const [splitState, setSplitState] = useState<SplitState>('neutral');
  const [showLeonBio, setShowLeonBio] = useState(false);
  const [showSimonBio, setShowSimonBio] = useState(false);

  // Refs für das automatische Scrollen zu den Texten
  const leonBioRef = useRef<HTMLDivElement>(null);
  const simonBioRef = useRef<HTMLDivElement>(null);

  // Easing Funktion für weiches Scrollen (Ease-In-Out Quad)
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // Custom Scroll Funktion
  const smoothScrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    // Kurzer Timeout, damit das Element erst gerendert wird und die Höhe korrekt ist
    setTimeout(() => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isMobile = window.innerWidth < 1024; // Tailwind lg breakpoint

      let targetPosition;

      if (isMobile) {
          // Mobile: Fokus auf den Anfang des Textes + Header Offset (ca. 120px Puffer für Header und Luft)
          targetPosition = rect.top + scrollTop - 120;
      } else {
          // Desktop: Element vertikal im Viewport zentrieren
          const elementCenter = rect.top + scrollTop + (rect.height / 2);
          targetPosition = elementCenter - (window.innerHeight / 2);
      }

      const startPosition = scrollTop;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 Sekunden für "easy hingleiten"
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          
          // Berechne neue Position
          const nextScroll = easeInOutQuad(timeElapsed, startPosition, distance, duration);

          window.scrollTo(0, nextScroll);

          if (timeElapsed < duration) {
              requestAnimationFrame(animation);
          } else {
              // Sicherstellen, dass wir am Ende exakt ankommen
              window.scrollTo(0, targetPosition);
          }
      };

      requestAnimationFrame(animation);
    }, 100);
  };

  // Helper zum Umschalten und Scrollen
  const toggleLeon = () => {
    const willOpen = !showLeonBio;
    setShowLeonBio(willOpen);
    setSplitState('left');
    
    if (willOpen) {
      smoothScrollToRef(leonBioRef);
    }
  };

  const toggleSimon = () => {
    const willOpen = !showSimonBio;
    setShowSimonBio(willOpen);
    setSplitState('right');

    if (willOpen) {
      smoothScrollToRef(simonBioRef);
    }
  };

  // Desktop: Fixed 50% width base, slide effect via transform
  // Mobile: Stacked full width
  const baseLayoutClass = "lg:w-1/2 w-full";

  // Hintergrundfarbe des Hauptcontainers basierend auf Hover-Status
  const getContainerBackground = () => {
    if (splitState === 'left') return 'bg-gradient-to-r from-organic-sage/40 via-organic-sage/15 to-transparent';
    if (splitState === 'right') return 'bg-gradient-to-l from-organic-sky/40 via-organic-sky/15 to-transparent';
    return 'bg-transparent';
  };

  // Transform-Logik für den Slide-Effekt (Nur Desktop)
  const getTransformClass = (side: 'left' | 'right') => {
    if (splitState === 'neutral') return 'lg:translate-x-0';
    
    if (side === 'left') {
      return splitState === 'right' ? 'lg:-translate-x-[15%]' : 'lg:translate-x-0';
    } else {
      return splitState === 'left' ? 'lg:translate-x-[15%]' : 'lg:translate-x-0';
    }
  };

  const getOpacityClass = (side: 'left' | 'right') => {
    if (splitState === 'neutral') return 'opacity-100';
    if (splitState === side) return 'opacity-100';
    return 'opacity-60 grayscale-[40%] hover:opacity-100 hover:grayscale-0';
  };

  // Common glass button style
  const glassButtonStyle = "group/btn relative px-8 py-3 bg-white/40 hover:bg-white/60 text-organic-charcoal border border-white/50 backdrop-blur-md rounded-full font-medium overflow-hidden transition-all shadow-sm hover:shadow-lg hover:shadow-organic-sage/10";

  return (
    <div 
      id="coaches" 
      className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-transparent"
    >
      {/* Background Layer mit Maske für Fade-In/Out */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-in-out z-0 pointer-events-none ${getContainerBackground()}`}
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}
      />
      
      {/* LEON FELDMEIER - Left Side */}
      <div 
        className={`
          relative flex flex-col items-center lg:items-end px-6 lg:px-20 pt-10 pb-20 lg:py-20 lg:pt-56
          transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          border-b lg:border-b-0 border-organic-charcoal/5
          group
          justify-start
          z-20
          ${baseLayoutClass}
          ${getTransformClass('left')}
        `}
        onMouseLeave={() => setSplitState('neutral')} 
      >
        <div className={`relative z-10 max-w-xl text-center lg:text-right transition-all duration-500 ${getOpacityClass('left')}`}>
          <div className="inline-flex items-center gap-2 mb-8 text-organic-sageDark tracking-widest text-xs font-semibold uppercase bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-sm backdrop-blur-sm">
            <Sparkles size={12} />
            <span>Sinn & Orientierung</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-8 leading-tight text-organic-charcoal">
            Leon <br />
            <span className="text-organic-textLight italic font-light">Feldmeier</span>
          </h1>
          
          <p className="text-lg text-organic-text font-light mb-6 md:mb-4 lg:mb-6 leading-relaxed min-h-[140px] flex flex-col justify-start">
            Fokus für Suchende und Klarheit für alle, die ihren Weg neu definieren. Mit systemischer Tiefe begleite ich dich dabei, deine inneren Werte zu ordnen und Blockaden zu lösen. Gemeinsam schaffen wir das Fundament für ein Leben, das wirklich zu dir passt.
          </p>

           {/* Photo Card - KLICKBAR */}
           <div 
             className={`
               w-full aspect-[3/4] max-w-[320px] md:max-w-[480px] lg:max-w-[580px] mx-auto lg:mx-0 lg:ml-auto
               rounded-2xl overflow-hidden relative
               bg-white/70 backdrop-blur-md border border-white/80 shadow-sm
               transition-all duration-700 delay-100 transform-gpu
               cursor-pointer
               ${splitState === 'left' ? 'scale-[1.02] shadow-2xl shadow-organic-sage/20' : 'scale-100'}
             `}
             style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
             onMouseEnter={() => setSplitState('left')}
             onClick={toggleLeon}
           >
              <img 
                src="https://res.cloudinary.com/dgwme3a8e/image/upload/v1769863464/Leon_Lightning_Low_uhj2sk.jpg" 
                alt="Leon Feldmeier"
                className="w-full h-full object-cover transition-opacity duration-700 image-sharp"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('images.unsplash.com')) {
                    target.src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-organic-sage/80 via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center bg-white/60 backdrop-blur-md border border-white/40 rounded-xl py-4 px-4 shadow-sm">
                <p className="font-sans font-medium text-[10px] tracking-[0.25em] text-organic-charcoal uppercase leading-none">
                  "Tiefe schafft Klarheit"
                </p>
              </div>
           </div>

           {/* Leons Pfad Button */}
           <div className="mt-8 flex justify-center lg:justify-end">
              <button 
                onClick={toggleLeon}
                onMouseEnter={() => setSplitState('left')}
                className={glassButtonStyle}
              >
                <span className="relative z-10 flex items-center gap-2 text-sm tracking-widest uppercase">
                  Leons Pfad {showLeonBio ? <X size={14} /> : <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
                </span>
              </button>
           </div>

           {/* Expanded Bio Section */}
           {showLeonBio && (
             <div 
                ref={leonBioRef}
                className="mt-8 p-8 glass-panel rounded-3xl text-left animate-slide-up !border-0"
             >
                <h3 className="font-serif text-2xl mb-6 text-organic-charcoal">Wer ich bin: Leon Feldmeier, dein Begleiter für Veränderung.</h3>
                <div className="space-y-4 text-organic-text font-light leading-relaxed">
                  <p>Hallo, ich bin Leon Feldmeier. Mein eigener Weg verlief alles andere als geradlinig. Das Studium der Musik und Sprache, Jahre in der Eventbranche sowie die tägliche Begleitung von Menschen in herausfordernden Lebenssituationen haben meinen Blick für das Wesentliche geschärft.</p>
                  <p>Diese Erfahrungen helfen mir heute dabei, dich jenseits von Standardschemata zu verstehen. Ich weiß aus eigener Erfahrung, dass echte Entwicklung Zeit braucht und dass der Mut zur Lücke oft der Anfang von etwas völlig Neuem ist.</p>
                  <p>Meine Ausbildung zum systemischen Coach am INEKO Institut an der Universität zu Köln bildet das fundierte Fundament meiner Arbeit. Ich biete dir einen geschützten Raum für deine Themen. Gemeinsam schauen wir auf das Zusammenspiel deiner Überzeugungen und Ziele, um Blockaden zu lösen und verborgene Ressourcen zu aktivieren. Mein Ansatz ist wertschätzend, klar und immer auf Augenhöhe.</p>
                </div>
             </div>
           )}
        </div>
      </div>

      {/* SIMON KUHN - Right Side */}
      <div 
        className={`
          relative flex flex-col items-center lg:items-start px-6 lg:px-20 py-20 lg:pb-20 lg:pt-56
          transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          group
          justify-start
          z-20
          ${baseLayoutClass}
          ${getTransformClass('right')}
        `}
        onMouseLeave={() => setSplitState('neutral')} 
      >
        <div className={`relative z-10 max-w-xl text-center lg:text-left transition-all duration-500 ${getOpacityClass('right')}`}>
           <div className="inline-flex items-center gap-2 mb-8 text-organic-skyDark tracking-widest text-xs font-semibold uppercase bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-sm backdrop-blur-sm">
            <Briefcase size={12} />
            <span>Führung & Teamentwicklung</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-8 leading-tight text-organic-charcoal">
            Simon <br />
            <span className="text-organic-textLight italic font-light">Kuhn</span>
          </h1>
          
          <p className="text-lg text-organic-text font-light mb-6 md:mb-4 lg:mb-6 leading-relaxed min-h-[140px] flex flex-col justify-start">
            Gute Teams sind kein Zufall.
            Sie wachsen durch klare Führung, individuelle Förderung und bewusste Entwicklung.
            Ich begleite Führungskräfte und Teams dabei, sich wirksam zu entwickeln.
          </p>

           {/* Photo Card - KLICKBAR */}
           <div 
             className={`
               w-full aspect-[3/4] max-w-[320px] md:max-w-[480px] lg:max-w-[580px] mx-auto lg:mx-0 lg:mr-auto
               rounded-2xl overflow-hidden relative
               bg-white/70 backdrop-blur-md border border-white/80 shadow-sm
               transition-all duration-700 delay-100 transform-gpu
               cursor-pointer
               ${splitState === 'right' ? 'scale-[1.02] shadow-2xl shadow-organic-sky/20' : 'scale-100'}
             `}
             style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
             onMouseEnter={() => setSplitState('right')}
             onClick={toggleSimon}
           >
              <img 
                src="https://res.cloudinary.com/dgwme3a8e/image/upload/v1769863465/Simon_Lightning_Low_czuhay.jpg" 
                alt="Simon Kuhn"
                className="w-full h-full object-cover transition-opacity duration-700 image-sharp"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('images.unsplash.com')) {
                    target.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1740&auto=format&fit=crop";
                  }
                }}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-organic-sky/80 via-transparent to-transparent opacity-40"></div>
               <div className="absolute bottom-8 left-8 right-8 text-center bg-white/60 backdrop-blur-md border border-white/40 rounded-xl py-4 px-4 shadow-sm">
                <p className="font-sans font-medium text-[10px] tracking-[0.25em] text-organic-charcoal uppercase leading-none">
                  "Führung braucht Tiefe"
                </p>
              </div>
           </div>

           {/* Simons Pfad Button */}
           <div className="mt-8 flex justify-center lg:justify-start">
              <button 
                onClick={toggleSimon}
                onMouseEnter={() => setSplitState('right')}
                className={glassButtonStyle}
              >
                <span className="relative z-10 flex items-center gap-2 text-sm tracking-widest uppercase">
                  Simons Pfad {showSimonBio ? <X size={14} /> : <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
                </span>
              </button>
           </div>

           {/* Expanded Bio Section for Simon */}
           {showSimonBio && (
             <div 
                ref={simonBioRef}
                className="mt-8 p-8 glass-panel rounded-3xl text-left animate-slide-up !border-0"
             >
                <h3 className="font-serif text-2xl mb-6 text-organic-charcoal">Ich bin Simon, systemischer Coach und seit vielen Jahren in Führungs- und Entwicklungsprozessen tätig.</h3>
                <div className="space-y-4 text-organic-text font-light leading-relaxed">
                  <p>In meinen frühen zwanzigern durfte ich schon Verantwortung übernehmen und Teams mit über 15 Mitarbeitenden führen. Dabei ging es für mich nie nur um Zahlen oder Ergebnisse, sondern immer um die Menschen dahinter. Teams, in denen Menschen gerne gearbeitet und sich weiterentwickelt haben.</p>
                  <p>Meine Arbeit ist geprägt von der Überzeugung, dass gute Führung dort entsteht, wo Menschen als Individuen gesehen werden. Unterschiedliche Persönlichkeiten, Stärken und Bedürfnisse ernst zu nehmen und gezielt zu fördern, ist für mich der Schlüssel zu wirksamer Zusammenarbeit.</p>
                  <p>Fundiert wird meine praktische Erfahrung durch meine Ausbildung zum zertifizierten systemischen Coach am INEKO Institut in Köln sowie durch meine NLP-Practitioner-Ausbildung. Heute verbinde ich über sieben Jahre Führungserfahrung mit systemischem Coaching und einem klaren Blick auf Teamdynamiken.</p>
                  <p>Nicht Perfektion ist das Ziel, sondern Wirksamkeit. Für Führungskräfte, für Teams und für jede einzelne Person darin.</p>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default HeroSplit;