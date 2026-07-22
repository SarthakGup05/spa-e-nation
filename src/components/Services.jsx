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
    <section id="services" className="py-16 bg-spa-bg bg-jali-pattern relative overflow-hidden">
      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-spa-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-spa-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-spa-rose font-semibold mb-2">OUR LUXURY SERVICES</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-spa-text mb-3 leading-snug py-0.5">
            Pamper <span className="italic text-spa-rose font-light px-1">Yourself</span>
          </h2>
          <div className="flex justify-center">
             <SectionDivider className="w-10 h-auto text-[#D4AF37]" />
          </div>
        </div>

        {/* 6-Column Single Row Layout - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((item, idx) => {
            const Icon = item.IconComponent;
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className="group relative bg-spa-card/90 hover:bg-spa-card rounded-3xl p-6 border border-spa-border hover:border-spa-rose/30 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between items-center text-center cursor-pointer hover:-translate-y-1.5"
              >
                {/* Top Glowing Pill Accent */}
                <div className="w-10 h-1 rounded-full bg-transparent group-hover:bg-spa-rose transition-all duration-300 mb-3 opacity-0 group-hover:opacity-100" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-spa-bg/85 group-hover:bg-spa-rose/10 border border-spa-border group-hover:border-spa-rose/30 flex items-center justify-center mb-5 text-spa-rose group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                  <Icon className="w-7 h-7 stroke-[1.5]" color="#EE8297" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-[17px] font-medium text-spa-text mb-2 group-hover:text-spa-rose transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-spa-muted text-[12px] leading-relaxed font-light mb-1.5 tracking-wide">
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