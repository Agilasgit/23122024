import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <footer className="bg-black py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Mendley. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}