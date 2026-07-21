import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Building2, Compass, ExternalLink } from 'lucide-react';
import { LotusIcon } from './common/Icons';

export const LocationSection = () => {
  const [copied, setCopied] = useState(false);

  const addressLines = [
    "2nd Floor, T.S. Sehra Tower",
    "Bansal Nagar, Fatehabad Road",
    "Tajganj, Agra - 282001",
    "Uttar Pradesh, India"
  ];

  const fullAddressString = "2nd floor, T.S. SEHRA TOWER BANSAL NAGAR, FATEHABAD ROAD TAJGANJ, AGRA-282001";
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Spa E Nation 2nd floor T.S. SEHRA TOWER BANSAL NAGAR FATEHABAD ROAD TAJGANJ AGRA 282001")}`;
  
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("2nd floor, T.S. SEHRA TOWER BANSAL NAGAR, FATEHABAD ROAD TAJGANJ, AGRA-282001")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-14 relative bg-gradient-to-b from-white via-[#FFF8FA] to-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#EE8297] mb-2 block">
            FIND OUR SANCTUARY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-gray-900 mb-2 leading-tight">
            Visit <span className="italic text-[#D4AF37]">Spa e Nation</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[1px] w-10 bg-[#D4AF37]/40" />
            <LotusIcon className="w-5 h-5 hover:rotate-12 transition-transform duration-300" color="#D4AF37" />
            <div className="h-[1px] w-10 bg-[#D4AF37]/40" />
          </div>
          <p className="text-gray-600 text-xs sm:text-sm font-light">
            Conveniently located on Fatehabad Road in Tajganj, Agra. Come immerse yourself in ultimate tranquility.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100/90 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top decorative Lotus watermark */}
            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <LotusIcon className="w-56 h-56" color="#EE8297" />
            </div>

            <div>
              {/* Card Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F7] border border-pink-100 text-[#EE8297] text-[11px] font-semibold tracking-wider uppercase mb-5 shadow-xs">
                <Building2 className="w-3.5 h-3.5" />
                Agra Center
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#EE8297] transition-colors duration-300">
                Spa e Nation
              </h3>

              {/* Location details list */}
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EE8297]/10 text-[#EE8297] flex items-center justify-center shrink-0 mt-0.5 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Official Address</h4>
                    {addressLines.map((line, idx) => (
                      <p key={idx} className={`text-xs sm:text-sm ${idx === 0 ? 'font-semibold text-gray-900' : 'text-gray-600 font-light'}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Landmark</h4>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">T.S. Sehra Tower, Bansal Nagar</p>
                    <p className="text-[11px] text-gray-500 font-light">Near Tajganj Fatehabad Road hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Opening Hours</h4>
                    <p className="text-xs sm:text-sm text-gray-800 font-medium">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5 z-10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#EE8297] hover:bg-[#E7748B] text-white px-4 py-3 rounded-full text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group/btn"
              >
                <Navigation className="w-3.5 h-3.5 fill-white group-hover/btn:translate-x-0.5 transition-transform" />
                Get Directions
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 px-4 py-3 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Interactive Map Embed Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-pink-100/80 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[340px] sm:min-h-[400px] flex flex-col relative group">
            <div className="bg-[#FFF5F7] px-5 py-2.5 border-b border-pink-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-[#EE8297] animate-bounce" />
                Interactive Location Map • Tajganj, Agra
              </div>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EE8297] hover:text-[#E7748B] font-medium underline flex items-center gap-1"
              >
                <span>View Larger Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[280px] relative bg-gray-100">
              <iframe
                title="Spa e Nation Location Map"
                src={mapEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
