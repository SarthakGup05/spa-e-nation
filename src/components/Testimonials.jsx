import React from 'react';
import { Star } from 'lucide-react';
import { SectionDivider } from './common/Icons';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      initials: 'PS',
      rating: 5,
      comment: 'The best spa experience I\'ve ever had! The ambience, staff, and service were absolutely amazing.',
    },
    {
      id: 2,
      name: 'Ananya Verma',
      initials: 'AV',
      rating: 5,
      comment: 'I felt so relaxed and rejuvenated. Highly recommend Spa e Nation for everyone!',
    },
    {
      id: 3,
      name: 'Neha Malhotra',
      initials: 'NM',
      rating: 5,
      comment: 'Professional therapists and top-notch hygiene. A perfect place to unwind and de-stress.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-spa-bg bg-jali-pattern relative overflow-hidden">
      
      {/* Background Petal Soft Ornaments with Float - lowered opacity for dark mode */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 opacity-5 pointer-events-none animate-float-slow">
        <img src="/svg/flower.png" alt="Flower Background" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/3 right-0 w-48 h-48 opacity-5 pointer-events-none animate-float" style={{ animationDelay: '2s' }}>
        <img src="/svg/flower.png" alt="Flower Background" className="w-full h-full object-contain rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-spa-rose font-semibold mb-2">HAPPY CLIENTS</p>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-spa-text mb-3">
            What Our Clients Say
          </h2>
          <SectionDivider />
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <div
              key={review.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="group bg-spa-card/90 backdrop-blur-md p-6 rounded-[2rem] border border-spa-border hover:border-spa-rose/30 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="text-spa-rose opacity-60 group-hover:opacity-100 text-4xl font-display leading-none mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                “
              </div>
              
              <div className="mb-5">
                <p className="text-spa-muted text-xs sm:text-sm leading-relaxed font-light group-hover:text-spa-text transition-colors">
                  {review.comment}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-spa-border/70">
                {/* Initial Badge */}
                <div className="w-10 h-10 rounded-full bg-spa-bg border-2 border-spa-border text-spa-rose group-hover:bg-spa-rose group-hover:border-spa-rose group-hover:text-white flex items-center justify-center font-display text-xs font-semibold shadow-sm transition-all duration-300 shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text text-xs sm:text-sm group-hover:text-spa-rose transition-colors">{review.name}</h4>
                  <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
