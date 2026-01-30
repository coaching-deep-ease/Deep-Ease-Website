import React from 'react';
import AuroraBackground from './components/AuroraBackground';
import Navigation from './components/Navigation';
import HeroSplit from './components/HeroSplit';
import IntroHeader from './components/IntroHeader';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Investition from './components/Investition';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen text-organic-charcoal font-sans selection:bg-organic-sage/30 selection:text-organic-charcoal">
      <AuroraBackground />
      <Navigation />
      
      <main>
        <IntroHeader />
        <HeroSplit />
        
        {/* Quote Interstitial - Philosophy */}
        <section id="philosophie" className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/30 -z-10 backdrop-blur-sm"></div>
          <div className="container mx-auto max-w-4xl">
            <blockquote className="text-3xl md:text-5xl font-cursive font-medium leading-relaxed text-organic-charcoal/90 mb-10 tracking-wide">
              "Tiefe schafft Klarheit und Klarheit schafft Leichtigkeit. Wir begleiten dich dabei den Kern deiner Stärke freizulegen damit du deinen Weg mit echtem Vertrauen gehen kannst."
            </blockquote>
            <div className="flex justify-center items-center gap-4">
               <div className="h-[1px] w-12 bg-organic-charcoal/20"></div>
               <span className="text-xs tracking-[0.2em] text-organic-textLight uppercase font-medium">Die Deep Ease Philosophie</span>
               <div className="h-[1px] w-12 bg-organic-charcoal/20"></div>
            </div>
          </div>
        </section>

        <Services />
        
        <Testimonials />

        <Investition />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;