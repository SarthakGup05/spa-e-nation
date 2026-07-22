import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Building2, Compass } from 'lucide-react';
import { LotusIcon, TajMahalIcon } from './common/Icons';

export const LocationSection = () => {
  const [copied, setCopied] = useState(false);

  const addressLines = [
    "2nd Floor, T.S. Sehra Tower",
    "Bansal Nagar, Fatehabad Road",
    "Tajganj, Agra - 282001",
    "Uttar Pradesh, India"
  ];

  const fullAddressString = "2nd floor, T.S. SEHRA TOWER BANSAL NAGAR, FATEHABAD ROAD TAJGANJ, AGRA-282001";
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("T.S. Sehra Tower, Bansal Nagar, Fatehabad Road, Tajganj, Agra, Uttar Pradesh 282001")}`;
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 relative bg-spa-bg bg-jali-pattern overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-spa-rose/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-spa-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-spa-rose mb-2 block">
            FIND OUR SANCTUARY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-spa-text mb-3 leading-tight">
            Visit <span className="italic text-spa-gold">Spa e Nation</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1.5px] w-10 bg-spa-gold/40" />
            <LotusIcon className="w-5 h-5 hover:rotate-12 transition-transform duration-300" color="#D4AF37" />
            <div className="h-[1.5px] w-10 bg-spa-gold/40" />
          </div>
          <p className="text-spa-muted text-xs sm:text-sm font-light">
            Conveniently located on Fatehabad Road in Tajganj, Agra. Come immerse yourself in ultimate tranquility.
          </p>
        </div>

        {/* Content Container */}
        <div className="max-w-2xl mx-auto">
          
          {/* Address Details Card */}
          <div className="bg-spa-card/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-spa-border shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top decorative Lotus watermark */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <LotusIcon className="w-56 h-56" color="#EE8297" />
            </div>

            <div>
              {/* Card Badge - Now featuring TajMahalIcon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spa-rose/15 border border-spa-rose/25 text-spa-rose text-[11px] font-semibold tracking-wider uppercase mb-5 shadow-sm">
                <TajMahalIcon className="w-4 h-4 text-spa-gold" color="#D4AF37" />
                Agra Center
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-medium text-spa-text mb-4 group-hover:text-spa-rose transition-colors duration-300">
                Spa e Nation
              </h3>

              {/* Location details list */}
              <div className="space-y-4 text-spa-muted">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-spa-rose/15 text-spa-rose flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-spa-muted/60 font-semibold mb-0.5">Official Address</h4>
                    {addressLines.map((line, idx) => (
                      <p key={idx} className={`text-xs sm:text-sm ${idx === 0 ? 'font-semibold text-spa-text' : 'text-spa-muted font-light'}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-spa-gold/15 text-spa-gold flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-spa-muted/60 font-semibold mb-0.5">Landmark</h4>
                    <p className="text-xs sm:text-sm text-spa-text font-medium">T.S. Sehra Tower, Bansal Nagar</p>
                    <p className="text-[11px] text-spa-muted/70 font-light">Near Tajganj Fatehabad Road hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-spa-muted/60 font-semibold mb-0.5">Opening Hours</h4>
                    <p className="text-xs sm:text-sm text-spa-text font-medium">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-spa-border flex flex-col sm:flex-row gap-2.5 z-10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-spa-rose hover:bg-[#E7748B] text-white px-4 py-3 rounded-full text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group/btn"
              >
                <Navigation className="w-3.5 h-3.5 fill-white group-hover/btn:translate-x-0.5 transition-transform" />
                Get Directions
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 bg-spa-bg/85 hover:bg-spa-bg text-spa-text border border-spa-border px-4 py-3 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-spa-muted" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
