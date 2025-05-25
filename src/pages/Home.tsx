
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream to-blush-pink/10 text-deep-teal">
      <div className="container mx-auto px-4 py-12">
        <Hero />
        <ServicePreview />
        <section className="mt-20 text-center animate-fade-in">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-blush-pink" size={24} />
              <h2 className="text-4xl font-serif font-bold text-deep-teal">
                Rewrite Your Narrative
              </h2>
              <Sparkles className="text-blush-pink" size={24} />
            </div>
            <p className="max-w-3xl mx-auto text-xl mb-10 text-warm-gray leading-relaxed">
              Every story can be rewritten. Together, we'll uncover the narratives that shape your life and transform them into powerful, empowering scripts that truly reflect who you are and who you want to become.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-medium"
            >
              Book a Consultation <ChevronRight className="ml-2" />
            </a>
          </div>
        </section>
      </div>
      <div className="mt-16">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
