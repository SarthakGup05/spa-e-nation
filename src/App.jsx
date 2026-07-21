import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PromoBanner } from './components/PromoBanner';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9FA] text-gray-800 antialiased selection:bg-pink-100 selection:text-[#E7748B]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PromoBanner />
        <AboutSection />
        <LocationSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
