import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { LotusIcon } from "./common/Icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[620px] lg:min-h-[730px] flex items-center w-full overflow-hidden"
    >
      {/* Background Depth Orbs - Scaled for mobile */}
      <div className="absolute top-0 left-[-10%] sm:top-10 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200/40 sm:bg-pink-200/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" />
      <div
        className="absolute bottom-10 right-[-10%] sm:bottom-20 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-amber-100/50 sm:bg-amber-100/40 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero.png"
          alt="Spa Woman Relaxing"
          // Shift object focus on mobile to keep the subject visible
          className="w-full h-full object-cover object-[75%_center] md:object-center"
        />
        {/* Soft gradient fade from the left (Removed solid white overlay) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent w-full sm:w-3/4 lg:w-2/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 sm:py-0">
        {/* Constrain text width on the left */}
        <div className="max-w-md sm:max-w-lg lg:max-w-xl text-center sm:text-left mt-0 sm:mt-6 animate-fade-in-up mx-auto sm:mx-0">
          
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#EE8297] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6 shadow-sm">
            
            WELCOME TO SANCTUARY
          </div>

          {/* Heading - Adjusted for smaller viewports */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-gray-900 leading-[1.1] sm:leading-[1.08] mb-4">
            Spa <span className="italic font-light text-[#EE8297]">e</span>{" "}
            Nation
          </h1>

          {/* Golden Lotus Divider */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
            <LotusIcon
              className="w-5 h-5 sm:w-6 sm:h-6 hover:rotate-12 transition-transform duration-300"
              color="#D4AF37"
            />
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>

          <p className="text-gray-900 sm:text-gray-700 text-sm sm:text-base lg:text-lg font-medium sm:font-light leading-relaxed mb-8 max-w-[280px] sm:max-w-md mx-auto sm:mx-0 drop-shadow-sm sm:drop-shadow-none">
            Indulge in the art of relaxation and rejuvenation. Designed to
            refresh your body, mind, and spirit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EE8297] hover:bg-[#E7748B] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              Book Your Escape
              <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-800 border border-gray-300 hover:border-gray-500 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group"
            >
              Explore Services
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-24 block"
        >
          <path
            d="M0,60 C320,120 420,0 720,40 C1020,80 1120,0 1440,60 L1440,120 L0,120 Z"
            className="fill-pink-100/60"
            transform="translate(0, -10)"
          />
          <path
            d="M0,80 C320,140 420,20 720,60 C1020,100 1120,20 1440,80 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>

        {/* Floating Center Badge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] sm:translate-y-1/2 bg-white rounded-full p-3 sm:p-4 md:p-5 shadow-xl border border-pink-100 flex items-center justify-center z-30 animate-float group cursor-pointer hover:scale-110 transition-transform duration-300">
          <LotusIcon
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform duration-500"
            color="#D4AF37"
          />
        </div>
      </div>
    </section>
  );
};