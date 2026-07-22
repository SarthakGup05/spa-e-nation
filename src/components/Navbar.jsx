import React, { useState } from 'react';
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react';
// Assuming LotusIcon is correctly imported from your local files
import { LotusIcon } from './common/Icons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-spa-bg/85 backdrop-blur-md shadow-md border-b border-spa-border/50">
      {/* Top Address & Info Bar */}
      <div className="bg-spa-dark/80 text-spa-muted text-[10.5px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-spa-border/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-spa-rose" />
            <span className="truncate font-light tracking-wide text-spa-text/95">
              2nd Floor, T.S. Sehra Tower, Bansal Nagar, Fatehabad Road, Tajganj, Agra - 282001
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 shrink-0 text-[11px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5 opacity-90">
              <Clock className="w-3 h-3 text-spa-gold" /> Mon - Sun: 10:00 AM - 9:00 PM
            </span>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Spa+E+Nation+2nd+floor+T.S.+SEHRA+TOWER+BANSAL+NAGAR+FATEHABAD+ROAD+TAJGANJ+AGRA+282001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-spa-rose transition-colors text-spa-gold"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <LotusIcon className="w-7 h-7 sm:w-9 sm:h-9" color="#D4AF37" />
            </div>
            <div className="flex flex-col mt-0.5">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wider text-spa-text uppercase leading-none">
                SPA E NATION
              </span>
              <span className="text-[8px] sm:text-[8.5px] tracking-[0.25em] text-spa-gold uppercase mt-1 font-medium">
                PAUSE • RESTORE • REVIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13.5px] tracking-wide font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
                  link.active
                    ? 'text-spa-rose border-spa-rose'
                    : 'text-spa-muted border-transparent hover:text-spa-rose'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Call Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="tel:+919997372360"
              className="inline-flex items-center gap-2 bg-spa-rose hover:bg-[#E7748B] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
            >
              Call Now
              <Phone className="w-3.5 h-3.5 fill-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-spa-muted hover:text-spa-rose focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-spa-card/95 backdrop-blur-lg border-b border-spa-border px-4 pt-2 pb-5 space-y-1.5 shadow-xl absolute w-full left-0 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                link.active 
                  ? 'text-spa-rose bg-spa-rose/10' 
                  : 'text-spa-muted hover:bg-spa-bg hover:text-spa-rose'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 px-2">
            <a
              href="tel:+919997372360"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-spa-rose text-white px-6 py-3 rounded-full text-sm font-medium shadow-md"
            >
              Call Now
              <Phone className="w-4 h-4 fill-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};