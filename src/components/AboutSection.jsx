import React from 'react';
import { UserCheck, Award, ShieldCheck, ChevronRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff, #fff9fb, #ffffff)' }}
    >
      {/* Background Depth & Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blur-[120px] bg-pink-100 opacity-50 pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100 blur-[150px] pointer-events-none z-0 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout & Spacing */}
        <div className="grid lg:grid-cols-[0.45fr_0.55fr] items-center gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <div className="text-center lg:text-left">
            
            {/* About Label */}
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-[#EE8297] mb-3 block">
              ABOUT US
            </span>

            {/* Heading */}
            <h2 className="font-serif text-[36px] lg:text-[48px] leading-tight font-normal text-[#1E1E1E] mb-4 py-0.5">
              Where <span className="italic text-[#D4AF37] font-serif font-light px-1">Wellness</span> Becomes a Lifestyle
            </h2>

            {/* Paragraph */}
            <p className="text-[#707070] leading-relaxed font-light max-w-[470px] text-[15px] mb-8 mx-auto lg:mx-0 tracking-wide">
              At Spa e Nation, we believe true beauty comes from within. Our expert therapists, luxurious treatments, and serene ambience are designed to refresh your mind, body, and soul.
            </p>

            {/* Feature Icons */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mb-10">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-[#F6D8DE] flex items-center justify-center mb-3 text-[#EE8297] bg-pink-50/50 group-hover:bg-[#EE8297] group-hover:border-[#EE8297] group-hover:text-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <UserCheck className="w-6 h-6 stroke-[1.5] group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[12px] font-medium text-gray-900 leading-tight group-hover:text-[#EE8297] transition-colors tracking-wide">Expert<br/>Therapists</span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-[#F6D8DE] flex items-center justify-center mb-3 text-[#EE8297] bg-pink-50/50 group-hover:bg-[#EE8297] group-hover:border-[#EE8297] group-hover:text-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <Award className="w-6 h-6 stroke-[1.5] group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[12px] font-medium text-gray-900 leading-tight group-hover:text-[#EE8297] transition-colors tracking-wide">Premium<br/>Products</span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-[#F6D8DE] flex items-center justify-center mb-3 text-[#EE8297] bg-pink-50/50 group-hover:bg-[#EE8297] group-hover:border-[#EE8297] group-hover:text-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 stroke-[1.5] group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[12px] font-medium text-gray-900 leading-tight group-hover:text-[#EE8297] transition-colors tracking-wide">Hygienic &<br/>Safe</span>
              </div>
            </div>

            {/* Button */}
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 bg-[#EE8297] hover:bg-[#E7748B] text-white h-12 px-8 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              Know More About Us
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>

          {/* Right Image Frame */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            
            {/* Main Circular Container */}
            <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] group">
              
              {/* Gold Ring */}
              <div className="absolute inset-[-14px] rounded-full border-[1.5px] border-[#D4AF37] opacity-60 pointer-events-none z-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>

              {/* Botanical Golden Decorations */}
              <img src="/svg/luxury_golden_flower.png" alt="luxury_golden_flower" className="absolute -right-8 top-10 w-28 pointer-events-none z-0 opacity-80 animate-float-slow" />
              <img src="/svg/luxury_golden_flower.png" alt="luxury_golden_flower" className="absolute -right-2 bottom-10 w-20 pointer-events-none z-0 opacity-80 animate-float" />

              {/* Core Image Element */}
              <div className="w-full h-full rounded-full border-[6px] border-white shadow-[0_30px_60px_rgba(0,0,0,.15)] overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
                  alt="Spa e Nation Luxury Spa Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Pink Floral Accents */}
              <img src="/svg/flower.png" alt="Flower Top" className="absolute top-2 right-4 w-20 rotate-12 pointer-events-none z-20 drop-shadow-xl animate-float" />
              <img src="/svg/flower.png" alt="Flower Middle" className="absolute right-0 top-1/2 w-14 -rotate-6 pointer-events-none z-20 drop-shadow-xl animate-float-slow" />
              <img src="/svg/flower.png" alt="Flower Bottom" className="absolute left-2 bottom-4 w-24 pointer-events-none z-20 drop-shadow-xl animate-float" style={{ animationDelay: '1.5s' }} />

              {/* Floating Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[280px] h-10 bg-black/10 blur-2xl rounded-full pointer-events-none z-0" />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};