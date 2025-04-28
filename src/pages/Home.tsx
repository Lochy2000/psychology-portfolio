
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-deep-teal">
      <div className="container mx-auto px-4 py-12">
        <Hero />
        <ServicePreview />
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Rewrite Your Narrative
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Every story can be rewritten. Together, we'll uncover the narratives that shape your life and transform them into powerful, empowering scripts.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-sage-green text-white rounded-full hover:bg-deep-teal transition-colors"
          >
            Book a Consultation <ChevronRight className="ml-2" />
          </a>
        </section>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
