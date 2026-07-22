import React from 'react';

// Exact Lotus Emblem from Design.jpeg
export const LotusIcon = ({ className = "w-6 h-6", color = "#D4AF37" }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Center Petal */}
    <path d="M50 5 C45 25 40 45 50 65 C60 45 55 25 50 5 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Left Inner Petal */}
    <path d="M50 65 C35 55 25 35 25 22 C38 25 46 42 50 65 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    {/* Right Inner Petal */}
    <path d="M50 65 C65 55 75 35 75 22 C62 25 54 42 50 65 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    {/* Left Outer Petal */}
    <path d="M50 65 C25 62 10 45 10 32 C28 35 42 50 50 65 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* Right Outer Petal */}
    <path d="M50 65 C75 62 90 45 90 32 C72 35 58 50 50 65 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* Base Stem Curve */}
    <path d="M30 68 Q 50 78 70 68" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// Exact Section Divider Ornament with Lotus motif beneath titles
export const SectionDivider = () => (
  <div className="flex flex-col items-center justify-center gap-1 my-2">
    <div className="flex items-center gap-3">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
      <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
    </div>
    <LotusIcon className="w-4 h-4 text-[#D4AF37] opacity-80" color="#D4AF37" />
  </div>
);

// Custom SVG Icons matching the fine line-art style of Design.jpeg
export const MassageOilIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 14h8v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4z"/>
    <rect x="16" y="14" width="16" height="24" rx="4"/>
    <path d="M24 22c-3 3-4 5-4 7a4 4 0 0 0 8 0c0-2-1-4-4-7z" fill={color} fillOpacity="0.3"/>
  </svg>
);

export const DeepTissueIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="14" cy="20" rx="4" ry="4"/>
    <path d="M8 36c0-6 4-10 12-10s12 4 12 10"/>
    <path d="M26 18c4 0 8 2 10 6"/>
    <circle cx="34" cy="14" r="3"/>
  </svg>
);

export const FacialIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M24 8a14 14 0 0 0-14 14c0 10 6 18 14 18s14-8 14-18A14 14 0 0 0 24 8z"/>
    <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    <path d="M30 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    <path d="M20 30c2 2 6 2 8 0"/>
    <path d="M10 16c2-4 6-6 14-6"/>
  </svg>
);

export const BodyScrubIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20h24l-3 16H15l-3-16z"/>
    <path d="M10 20c0-4 6-6 14-6s14 2 14 6"/>
    <circle cx="20" cy="12" r="2" fill={color} fillOpacity="0.4"/>
    <circle cx="28" cy="10" r="1.5" fill={color} fillOpacity="0.4"/>
  </svg>
);

export const SpaPackagesIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <LotusIcon className={className} color={color} />
);

export const WellnessTherapyIcon = ({ className = "w-8 h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="24" cy="36" rx="14" ry="4"/>
    <ellipse cx="24" cy="26" rx="10" ry="3"/>
    <ellipse cx="24" cy="18" rx="7" ry="2.5"/>
    <ellipse cx="24" cy="11" rx="4" ry="2" fill={color} fillOpacity="0.4"/>
  </svg>
);

// Elegant line-art vector icon of Taj Mahal representing Agra heritage
export const TajMahalIcon = ({ className = "w-6 h-6", color = "#D4AF37" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Main Dome */}
    <path d="M50 22 C42 22 40 31 40 38 C40 44 43 47 50 47 C57 47 60 44 60 38 C60 31 58 22 50 22 Z" fill={color} fillOpacity="0.12" />
    {/* Dome Finial */}
    <path d="M50 22 V14 M48 16 H52" />
    {/* Main Structure Base */}
    <path d="M26 47 H74 V76 H26 Z" fill={color} fillOpacity="0.06" />
    {/* Arch Portal (Pishtaq) */}
    <path d="M43 76 V58 C43 53 46 50 50 50 C54 50 57 53 57 58 V76" strokeWidth="2" />
    {/* Left side niches */}
    <path d="M31 63 V54 C31 52 32 51 34 51 C36 51 37 52 37 54 V63" />
    <path d="M31 73 V67 C31 65 32 64 34 64 C36 64 37 65 37 67 V73" />
    {/* Right side niches */}
    <path d="M63 63 V54 C63 52 64 51 66 51 C68 51 69 52 69 54 V63" />
    <path d="M63 73 V67 C63 65 64 64 66 64 C68 64 69 65 69 67 V73" />
    {/* Left Small Domes */}
    <path d="M31 47 C30 42 27 42 27 47 Z" />
    <path d="M35 47 C34 42 31 42 31 47 Z" />
    {/* Right Small Domes */}
    <path d="M65 47 C66 42 69 42 69 47 Z" />
    <path d="M69 47 C70 42 73 42 73 47 Z" />
    {/* Left Minaret */}
    <path d="M14 76 V35 M11 35 H17 M14 35 V29 M11 29 C11 26 17 26 17 29 V35" />
    {/* Right Minaret */}
    <path d="M86 76 V35 M83 35 H89 M86 35 V29 M83 29 C83 26 89 26 89 29 V35" />
    {/* Plinth */}
    <path d="M6 76 H94 V81 H6 Z" fill={color} fillOpacity="0.2" />
  </svg>
);
