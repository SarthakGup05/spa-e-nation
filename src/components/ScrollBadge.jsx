import React from 'react';
import { LotusIcon } from './common/Icons';

export const ScrollBadge = () => {
  const handleScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-0 z-20 pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 translate-y-[-1px] pointer-events-auto">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-24 block"
        >
          <path
            d="M0,60 C320,120 420,0 720,40 C1020,80 1120,0 1440,60 L1440,120 L0,120 Z"
            className="fill-spa-border/30"
            transform="translate(0, -10)"
          />
          <path
            d="M0,80 C320,140 420,20 720,60 C1020,100 1120,20 1440,80 L1440,120 L0,120 Z"
            className="fill-spa-bg"
          />
        </svg>

        {/* Floating Center Badge */}
        <div 
          onClick={handleScroll}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-spa-card rounded-full p-3 sm:p-4 md:p-5 shadow-xl border border-spa-border flex items-center justify-center z-30 group cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <LotusIcon
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform duration-500"
            color="#D4AF37"
          />
        </div>
      </div>
    </div>
  );
};
