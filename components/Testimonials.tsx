import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
  },
  {
    text: "Endlich eine Beratung, die den Menschen hinter der Rolle sieht. Mein Führungsstil ist authentischer und wirksamer denn je.",
    author: "Thomas B.",
    role: "Abteilungsleiter",
    theme: "sky"
  },
  {
    text: "Nach dem Burnout wusste ich nicht weiter. Leon hat mir geholfen, meine Werte neu zu sortieren und gestärkt zurückzukehren.",
    author: "Julia M.",
    role: "Architektin",
    theme: "sage"
  },
  {
    text: "Unser Team war zerstritten. Simon hat die Dynamiken sichtbar gemacht und uns zu einer echten Einheit geformt.",
    author: "David L.",
    role: "Agentur-Inhaber",
    theme: "sky"
  },
  {
    text: "Ich habe lange nach einem Coach gesucht, der nicht nur an der Oberfläche kratzt. Hier habe ich ihn gefunden.",
    author: "Anna P.",
    role: "Selbstständige",
    theme: "sage"
  },
  {
    text: "Strukturiert, empathisch und immer auf den Punkt. Die Investition hat sich mehrfach ausgezahlt.",
    author: "Michael S.",
    role: "CFO",
    theme: "neutral"
  },
  {
    text: "Klarheit ist wirklich das richtige Wort. Ich sehe meinen Karrierepfad nun ohne Nebel.",
    author: "Lisa H.",
    role: "Senior Consultant",
    theme: "sage"
  },
  {
    text: "Zwei Perspektiven, die sich perfekt ergänzen. Für mich die beste Entscheidung des Jahres.",
    author: "Christian F.",
    role: "Unternehmer",
    theme: "sky"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Handle resize logic to switch between 1 item (Mobile/Tablet) and 3 items (Desktop)
  useEffect(() => {
    const handleResize = () => {
      // Switch to 3 items only on Large screens (lg = 1024px)
      // This ensures tablets (<1024px) show 1 item
      setItemsPerSlide(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length; // Loop logic handles overflow

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
  };
  
  return (
    <section id="testimonials" className="relative py-32 px-4 md:px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-full h-1/2 -skew-y-3 bg-white/40 -z-10"></div>

      <div className="container mx-auto max-w-7xl relative">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 md:mb-20 text-organic-charcoal">Was Klienten sagen</h2>
        
        {/* Navigation Arrows - Adjusted for better mobile tap targets */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-organic-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg text-organic-charcoal"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-organic-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg text-organic-charcoal"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Carousel Window */}
        <div className="overflow-hidden py-12 -my-12 px-0 md:px-12 lg:px-16">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`
                  flex-shrink-0 
                  w-full lg:w-1/3
                  px-4
                  transition-all duration-500
                  ${i % 2 !== 0 ? 'lg:translate-y-12' : 'lg:translate-y-0'} 
                `}
              >
                <div className={`
                  glass-card p-8 md:p-10 rounded-3xl relative h-full flex flex-col
                  mx-auto max-w-md lg:max-w-none
                  hover:shadow-xl transition-shadow duration-500
                `}>
                  <Quote className={`w-8 h-8 mb-6 opacity-40 ${t.theme === 'sage' ? 'text-organic-sageDark' : t.theme === 'sky' ? 'text-organic-skyDark' : 'text-organic-charcoal'}`} />
                  
                  <p className="text-lg font-cursive font-medium text-organic-text mb-8 leading-relaxed flex-grow">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-organic-charcoal/5 pt-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-white text-lg shadow-md
                      ${t.theme === 'sage' ? 'bg-organic-sageDark' : t.theme === 'sky' ? 'bg-organic-skyDark' : 'bg-organic-charcoal'}
                    `}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-base text-organic-charcoal">{t.author}</h4>
                      <span className="text-xs text-organic-textLight uppercase tracking-wide">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentIndex(i)}
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 currentIndex === i ? 'w-8 bg-organic-charcoal' : 'w-2 bg-organic-charcoal/20 hover:bg-organic-charcoal/40'
               }`}
             />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;