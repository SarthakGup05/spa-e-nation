import React from 'react';
import { Phone } from 'lucide-react';

export const ContactFloatingButtons = () => {
  const phoneNumber = "+919997372360";

  return (
    <div className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-50">
      {/* Outer Floating Pill Container */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Now"
        className="bg-spa-card/95 backdrop-blur-lg border border-spa-border rounded-full p-2 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group animate-float"
      >
        {/* Glowing aura effect behind the pill */}
        <div className="absolute inset-0 -z-10 rounded-full bg-spa-rose/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Inner Circle Call Icon */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-spa-rose text-white flex items-center justify-center shadow-md">
          <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white" />
        </div>

        {/* Label Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-spa-dark border border-spa-border text-spa-text text-[11px] px-3 py-1.5 rounded-full transition-transform duration-200 origin-right shadow-lg whitespace-nowrap pointer-events-none font-semibold tracking-wider uppercase">
          Call Now
        </span>
      </a>
    </div>
  );
};
