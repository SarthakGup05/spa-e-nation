import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { LotusIcon } from "./common/Icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[620px] lg:min-h-[730px] flex items-center w-full overflow-x-hidden"
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
          // Shift focus on mobile and set opacity to let background color blend
          className="w-full h-full object-cover object-[75%_center] md:object-center opacity-75"
        />
        {/* Desktop-only horizontal dark-to-transparent blend */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-spa-bg via-spa-bg/85 to-transparent sm:w-3/4 lg:w-2/3 z-1"></div>
        {/* Mobile-only vertical dark vignette (clearer in the middle, dark at top/bottom for text & blending) */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-spa-bg/80 via-spa-bg/30 to-spa-bg/95 z-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 sm:py-0">
        {/* Constrain text width on the left */}
        <div className="max-w-md sm:max-w-lg lg:max-w-xl text-center sm:text-left mt-0 sm:mt-6 animate-fade-in-up mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-spa-rose/10 border border-spa-rose/25 text-spa-rose text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase mb-4 sm:mb-6 shadow-sm">
            WELCOME TO SANCTUARY
          </div>

          {/* Heading - Added elegant display text */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[76px] font-normal text-spa-text leading-[1.08] mb-4">
            Spa <span className="italic font-light text-spa-rose">e</span>{" "}
            Nation
          </h1>

          {/* Golden Lotus Divider */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-6">
            <LotusIcon
              className="w-5 h-5 sm:w-6 sm:h-6 hover:rotate-12 transition-transform duration-300"
              color="#D4AF37"
            />
            <div className="h-[1.5px] w-12 sm:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>

          <p className="text-spa-muted text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-8 max-w-[280px] sm:max-w-md mx-auto sm:mx-0">
            Indulge in the art of relaxation and rejuvenation. Designed to
            refresh your body, mind, and spirit in Agra's premier wellness sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="tel:+919997372360"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-spa-rose hover:bg-[#E7748B] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              Book Your Escape
              <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-spa-card/90 hover:bg-spa-card text-spa-text border border-spa-border hover:border-spa-rose/40 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group"
            >
              Explore Services
              <ChevronRight className="w-4 h-4 text-spa-muted group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>    </section>
  );
};
