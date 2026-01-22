import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Philosophie', href: '#philosophie' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Angebote', href: '#services' },
    { label: 'Stimmen', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-white/60 backdrop-blur-xl border-white/20 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-organic-charcoal/20 flex items-center justify-center group-hover:border-organic-charcoal/50 transition-colors">
             {/* Gradient Pill Logo */}
            <div className="w-1 h-4 bg-gradient-to-b from-organic-sageDark to-organic-skyDark rounded-full"></div>
          </div>
          <span className="text-xl font-sans tracking-[0.2em] font-light text-organic-charcoal transition-all">
            DEEP EASE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-light text-organic-text hover:text-organic-charcoal transition-colors tracking-wide relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-organic-charcoal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2.5 bg-organic-charcoal text-white rounded-full text-xs font-medium tracking-widest hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg shadow-black/5">
            GESPRÄCH VEREINBAREN
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-organic-charcoal hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-organic-cream/95 backdrop-blur-xl border-b border-black/5 p-8 flex flex-col gap-6 animate-fade-in shadow-xl">
           {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-serif text-organic-charcoal"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full py-4 mt-4 bg-organic-charcoal text-white rounded-lg text-sm font-medium tracking-widest hover:bg-black transition-all">
            GESPRÄCH VEREINBAREN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;