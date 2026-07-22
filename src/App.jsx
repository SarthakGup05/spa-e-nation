import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollBadge } from './components/ScrollBadge';
import { Services } from './components/Services';
import { PromoBanner } from './components/PromoBanner';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ContactFloatingButtons } from './components/ContactFloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-spa-bg text-spa-text antialiased selection:bg-spa-rose/20 selection:text-spa-rose">
      <Navbar />
      <main>
        <Hero />
        <ScrollBadge />
        <Services />
        <PromoBanner />
        <AboutSection />
        <LocationSection />
        <Testimonials />
      </main>
      <Footer />
      <ContactFloatingButtons />
    </div>
  );
}
