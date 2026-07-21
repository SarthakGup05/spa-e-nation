import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MapPin, Clock } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
      {/* Top Address & Info Bar */}
      <div className="bg-[#EE8297] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-pink-300/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-white" />
            <span className="truncate font-light text-[11px] sm:text-xs">
              2nd floor, T.S. SEHRA TOWER BANSAL NAGAR, FATEHABAD ROAD TAJGANJ, AGRA-282001
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 shrink-0 text-[11px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5 opacity-90">
              <Clock className="w-3 h-3" /> Mon - Sun: 10:00 AM - 9:00 PM
            </span>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Spa+E+Nation+2nd+floor+T.S.+SEHRA+TOWER+BANSAL+NAGAR+FATEHABAD+ROAD+TAJGANJ+AGRA+282001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-amber-100 transition-colors"
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
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-gray-900 uppercase leading-none">
                SPA E NATION
              </span>
              <span className="text-[8px] sm:text-[8.5px] tracking-[0.22em] text-[#D4AF37] uppercase mt-1 font-medium">
                RELAX • REJUVENATE • RENEW
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-200 pb-0.5 border-b-2 ${
                  link.active
                    ? 'text-gray-900 border-[#EE8297]'
                    : 'text-gray-700 border-transparent hover:text-[#EE8297]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Book Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-[#EE8297] hover:bg-[#E7748B] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs hover:shadow-md"
            >
              Book Now
              <ShoppingBag className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#EE8297] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-5 space-y-1.5 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                link.active 
                  ? 'text-[#EE8297] bg-pink-50/50' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#EE8297]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 px-2">
            <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#EE8297] text-white px-6 py-3 rounded-full text-sm font-medium shadow-xs"
            >
              Book Now
              <ShoppingBag className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};