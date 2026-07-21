import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <section id="packages" className="py-10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#EE8297] text-white shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-stretch">
          
          {/* Left Image */}
          <div className="w-full md:w-[45%] h-52 md:h-auto relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
              alt="Spa Relaxation Towels & Candles"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#EE8297] to-transparent hidden md:block"></div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col items-center md:items-start justify-center relative text-center md:text-left z-10">
            
            {/* Watermark SVG */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none translate-x-1/4 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="w-80 h-80 text-white fill-current">
                <path d="M100 20 C80 60 40 80 20 100 C40 120 80 140 100 180 C120 140 160 120 180 100 C160 80 120 60 100 20 Z" fill="currentColor" />
                <path d="M20 100 C60 80 80 40 100 20 C120 40 140 80 180 100 C140 120 120 160 100 180 C80 160 60 120 20 100 Z" fill="currentColor" className="rotate-45 origin-center" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-pink-100 text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold mb-2.5 border border-white/30 backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-amber-200 animate-pulse" />
              LIMITED TIME OFFER
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight mb-3">
              Relax More, Save More
            </h2>

            <p className="text-pink-50 text-sm sm:text-base font-light mb-6 max-w-md">
              Enjoy up to <span className="font-semibold text-[#FFD700] drop-shadow-xs">20% off</span> on selected spa packages.
            </p>

            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-white text-[#EE8297] hover:bg-pink-50 px-7 py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group/btn"
            >
              View Packages
              <span className="w-5 h-5 rounded-full border border-[#EE8297]/30 flex items-center justify-center text-[#EE8297] group-hover/btn:bg-[#EE8297] group-hover/btn:text-white transition-all duration-300">
                <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};