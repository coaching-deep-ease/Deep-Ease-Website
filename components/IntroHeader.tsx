import React from 'react';

const IntroHeader: React.FC = () => {
  return (
    <section className="
      /* Desktop: In Flow but only visible here */
      hidden lg:block
      pt-40 pb-0 px-6 relative z-10 text-center
      animate-fade-in
    ">
      <div className="container mx-auto max-w-2xl">
        <h1 className="
          text-5xl lg:text-6xl 
          font-serif text-organic-charcoal 
          mb-6 leading-tight
        ">
          Bereit für den nächsten Schritt?
        </h1>
        <p className="
          text-xl lg:text-2xl 
          text-organic-text font-light leading-relaxed
        ">
          Wir schaffen Raum für neue Perspektiven.
        </p>
      </div>
    </section>
  );
};

export default IntroHeader;