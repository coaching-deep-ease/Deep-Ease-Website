import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverDesktop, setHoverDesktop] = useState(false);
  const [hoverMobile, setHoverMobile] = useState(false);

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
    { label: 'Erfahrungen', href: '#testimonials' },
    { label: 'Kontakt', href: '#anfrage' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setMobileMenuOpen(false);
      
      // Calculate offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const getButtonStyle = (isHovered: boolean, isMobile: boolean = false): React.CSSProperties => ({
    background: isHovered ? '#FFFFFF' : '#FFF9E6', // White on Hover, Light Pastel Yellow-Orange Default
    borderRadius: '50px',
    color: '#1A1A1A', // Always Black/Dark Charcoal
    fontWeight: '600',
    border: '1px solid rgba(0,0,0,0.02)', // Very subtle border for definition
    padding: isMobile ? '16px' : '12px 24px',
    // Shiny Effect replaced with softer warm/neutral shadows
    boxShadow: isHovered 
      ? '0 6px 20px rgba(0, 0, 0, 0.08)' 
      : '0 4px 15px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.8)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    width: isMobile ? '100%' : 'auto',
  });

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-white/60 backdrop-blur-xl border-white/20 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleLogoClick}>
          <div className="w-8 h-8 rounded-full border border-organic-charcoal/20 flex items-center justify-center group-hover:border-organic-charcoal/50 transition-colors">
            <div className="w-1 h-4 bg-gradient-to-b from-organic-sageDark to-organic-skyDark rounded-full"></div>
          </div>
          <span className="text-xl font-sans tracking-[0.2em] font-light text-organic-charcoal transition-all">
            DEEP EASE
          </span>
        </div>

        {/* Desktop Links & Main CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-light text-organic-text hover:text-organic-charcoal transition-colors tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-organic-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <button 
            onClick={(e) => handleNavClick(e, '#anfrage')}
            style={getButtonStyle(hoverDesktop)}
            onMouseEnter={() => setHoverDesktop(true)}
            onMouseLeave={() => setHoverDesktop(false)}
          >
            Gespräch vereinbaren
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
        <div className="md:hidden absolute top-full left-0 w-full bg-organic-cream/95 backdrop-blur-xl border-b border-black/5 p-8 flex flex-col gap-6 animate-fade-in shadow-xl h-screen">
           {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-serif text-organic-charcoal"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, '#anfrage')}
            style={getButtonStyle(hoverMobile, true)}
            onMouseEnter={() => setHoverMobile(true)}
            onMouseLeave={() => setHoverMobile(false)}
          >
            Gespräch vereinbaren
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;