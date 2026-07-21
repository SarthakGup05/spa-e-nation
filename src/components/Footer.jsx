import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { LotusIcon } from './common/Icons';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#FFF5F7] border-t border-pink-100/80 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white border border-pink-200 flex items-center justify-center shadow-xs">
                <LotusIcon className="w-5 h-5" color="#D4AF37" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-wider text-gray-800 uppercase">
                  SPA E NATION
                </span>
                <span className="text-[8px] tracking-[0.2em] text-[#C5A059] uppercase -mt-1 font-medium">
                  RELAX • REJUVENATE • RENEW
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
              Your destination for relaxation, rejuvenation, and timeless beauty.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-600 hover:text-[#E7748B] flex items-center gap-1.5 transition-colors font-light">
                    <span className="text-[#E7748B] text-xs">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gray-800 mb-3">Contact Us</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E7748B] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#E7748B] shrink-0" />
                <span>info@spaenation.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E7748B] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-normal text-gray-800">
                    2nd Floor, T.S. Sehra Tower, Bansal Nagar,
                  </span>
                  <span>Fatehabad Road, Tajganj, Agra - 282001</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Spa+E+Nation+2nd+floor+T.S.+SEHRA+TOWER+BANSAL+NAGAR+FATEHABAD+ROAD+TAJGANJ+AGRA+282001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E7748B] hover:underline text-[11px] mt-0.5 font-medium inline-flex items-center gap-1"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#E7748B] shrink-0" />
                <span>Mon - Sun : 10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Pink Bar */}
        <div className="bg-[#EE8297] -mx-4 sm:-mx-6 lg:-mx-8 -mb-4 py-2.5 text-center text-[11px] text-white font-medium">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1.5">
            <p>© 2025 Spa e Nation. All Rights Reserved.</p>
            <p className="flex items-center gap-1.5 font-normal opacity-95">
              <span>Made with</span>
              <Heart className="w-3 h-3 fill-white text-white inline" />
              <span>by</span>
              <a
                href="https://saarthak.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-100 transition-colors font-semibold tracking-wide"
              >
                saarthak.xyz
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
