import React from 'react';
import { SectionDivider } from './common/Icons';
import {
  MassageOilIcon,
  DeepTissueIcon,
  FacialIcon,
  BodyScrubIcon,
  SpaPackagesIcon,
  WellnessTherapyIcon
} from './common/Icons';

export const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Aromatherapy Massage',
      description: 'Relax your mind and body with essential oil therapy.',
      IconComponent: MassageOilIcon,
    },
    {
      id: 2,
      title: 'Deep Tissue Massage',
      description: 'Relieve deep muscle tension and improve mobility.',
      IconComponent: DeepTissueIcon,
    },
    {
      id: 3,
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin and bring out your natural glow.',
      IconComponent: FacialIcon,
    },
    {
      id: 4,
      title: 'Body Scrub',
      description: 'Exfoliate and nourish your skin for a fresh and smooth feel.',
      IconComponent: BodyScrubIcon,
    },
    {
      id: 5,
      title: 'Spa Packages',
      description: 'Curated packages for complete relaxation and care.',
      IconComponent: SpaPackagesIcon,
    },
    {
      id: 6,
      title: 'Wellness Therapy',
      description: 'Holistic therapies for balance, healing and well-being.',
      IconComponent: WellnessTherapyIcon,
    },
  ];

  return (
    <section id="services" className="py-14 bg-white relative overflow-hidden">
      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#EE8297] font-semibold mb-2">OUR LUXURY SERVICES</p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-gray-900 mb-2 leading-snug py-0.5">
            Pamper <span className="italic text-[#EE8297] font-serif font-light px-1">Yourself</span>
          </h2>
          <div className="flex justify-center">
             <SectionDivider className="w-10 h-auto text-[#D4AF37]" />
          </div>
        </div>

        {/* 6-Column Single Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-5">
          {services.map((item, idx) => {
            const Icon = item.IconComponent;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className="group relative bg-[#FFFBFD] hover:bg-white rounded-3xl p-5 border border-pink-100/70 hover:border-[#EE8297]/40 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1.5"
              >
                {/* Top Glowing Pill Accent */}
                <div className="w-10 h-1 rounded-full bg-transparent group-hover:bg-[#EE8297] transition-all duration-300 mb-3 opacity-0 group-hover:opacity-100" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-pink-50/80 group-hover:bg-[#FFF2F5] border border-pink-100 flex items-center justify-center mb-4 text-[#EE8297] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xs">
                  <Icon className="w-7 h-7 stroke-[1.5]" color="#EE8297" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-serif text-base font-medium text-gray-900 mb-1.5 group-hover:text-[#EE8297] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[11.5px] leading-relaxed font-light mb-1 tracking-wide">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};