import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { LotusIcon, TajMahalIcon } from './common/Icons';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-spa-dark border-t border-spa-border/60 pt-16 pb-4 relative overflow-hidden bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-spa-card border border-spa-border flex items-center justify-center shadow-sm">
                <TajMahalIcon className="w-6 h-6" color="#D4AF37" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-wider text-spa-text uppercase">
                  SPA E NATION
                </span>
                <span className="text-[8px] tracking-[0.25em] text-spa-gold uppercase -mt-1 font-medium">
                  RELAX • REJUVENATE • RENEW
                </span>
              </div>
            </div>

            <p className="text-spa-muted text-xs sm:text-sm leading-relaxed font-light">
              Your destination for relaxation, rejuvenation, and timeless beauty. Experience luxury inspired by Agra's rich heritage.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-spa-text mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-spa-muted hover:text-spa-rose flex items-center gap-1.5 transition-colors font-light">
                    <span className="text-spa-rose text-xs">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="font-display text-base font-semibold text-spa-text mb-4">Contact Us</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-spa-muted font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-spa-rose shrink-0" />
                <span className="text-spa-text font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-spa-rose shrink-0" />
                <span>info@spaenation.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-spa-rose shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-normal text-spa-text">
                    2nd Floor, T.S. Sehra Tower, Bansal Nagar,
                  </span>
                  <span>Fatehabad Road, Tajganj, Agra - 282001</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Spa+E+Nation+2nd+floor+T.S.+SEHRA+TOWER+BANSAL+NAGAR+FATEHABAD+ROAD+TAJGANJ+AGRA+282001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-spa-gold hover:text-spa-rose hover:underline text-[11px] mt-0.5 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-spa-rose shrink-0" />
                <span>Mon - Sun : 10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Glass Bar */}
        <div className="bg-spa-card/80 border-t border-spa-border/60 -mx-4 sm:-mx-6 lg:-mx-8 -mb-4 py-3 text-center text-[11px] text-spa-muted font-normal relative z-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 2026 Spa e Nation. All Rights Reserved.</p>
            <p className="flex items-center gap-1.5 font-normal opacity-95">
              <span>Made with</span>
              <Heart className="w-3 h-3 fill-spa-rose text-spa-rose inline animate-pulse" />
              <span>by</span>
              <a
                href="https://saarthak.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-spa-gold hover:text-spa-rose transition-colors font-semibold tracking-wide"
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
