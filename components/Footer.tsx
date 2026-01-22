import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-organic-charcoal/5 bg-organic-cream py-20 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="max-w-xs">
          <h4 className="text-2xl font-serif mb-6 text-organic-charcoal">Deep Ease</h4>
          <p className="text-organic-textLight font-light text-sm leading-relaxed mb-6">
            Wo die seelenvolle Kunst des Seins auf die rigorose Architektur des Tuns trifft. Zwei Pfade, ein Ziel: Exzellenz.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 rounded-full bg-organic-charcoal/5 hover:bg-organic-charcoal/10 transition-colors cursor-pointer"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-6 text-organic-charcoal">Menü</h5>
            <ul className="space-y-4 text-organic-textLight text-sm font-light">
              <li className="hover:text-organic-charcoal cursor-pointer transition-colors">Philosophie</li>
              <li className="hover:text-organic-charcoal cursor-pointer transition-colors">Coaching</li>
              <li className="hover:text-organic-charcoal cursor-pointer transition-colors">Retreats</li>
              <li className="hover:text-organic-charcoal cursor-pointer transition-colors">Journal</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest mb-6 text-organic-charcoal">Kontakt</h5>
            <ul className="space-y-4 text-organic-textLight text-sm font-light">
              <li>hallo@deepease.co</li>
              <li>+49 (0) 30 1234567</li>
              <li className="hover:text-organic-charcoal cursor-pointer transition-colors pt-4 font-medium">Gespräch buchen</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-20 pt-8 border-t border-organic-charcoal/5 flex flex-col md:flex-row justify-between items-center text-xs text-organic-textLight">
        <p>&copy; {new Date().getFullYear()} Deep Ease Coaching. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-organic-charcoal cursor-pointer">Impressum</span>
          <span className="hover:text-organic-charcoal cursor-pointer">Datenschutz</span>
          <span className="hover:text-organic-charcoal cursor-pointer">AGB</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;