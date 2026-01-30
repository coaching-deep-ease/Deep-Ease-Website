import React from 'react';

const IntroHeader: React.FC = () => {
  return (
    <section className="
      /* Mobile: In Flow */
      pt-32 pb-4 px-6 relative z-10 text-center
      /* Desktop: Absolute Overlay */
      lg:absolute lg:top-28 lg:left-0 lg:right-0 lg:p-0 lg:z-20 lg:pointer-events-none
      animate-fade-in
    ">
      <div className="container mx-auto max-w-lg lg:max-w-2xl">
        <h1 className="
          text-4xl md:text-5xl lg:text-4xl 
          font-serif text-organic-charcoal 
          mb-4 lg:mb-3 leading-tight
        ">
          Bereit für den nächsten Schritt?
        </h1>
        <p className="
          text-xl lg:text-lg 
          text-organic-text font-light leading-relaxed
        ">
          Wir schaffen Raum für neue Perspektiven.
        </p>
      </div>
    </section>
  );
};

export default IntroHeader;