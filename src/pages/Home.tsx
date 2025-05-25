
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/90 to-blush-pink/20 text-deep-teal">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <Hero />
        <ServicePreview />
        <section ref={ctaRef} className="mt-16 lg:mt-20 text-center">
          <div className={`bg-gradient-to-br from-white/80 via-white/70 to-sage-green/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto border border-sage-green/20 transition-all duration-1000 ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
              <h2 className="text-2xl lg:text-4xl font-serif font-bold text-deep-teal">
                Rewrite Your Narrative
              </h2>
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
            </div>
            <p className="max-w-3xl mx-auto text-lg lg:text-xl mb-8 lg:mb-10 text-warm-gray leading-relaxed px-4">
              Every story can be rewritten. Together, we'll uncover the narratives that shape your life and transform them into powerful, empowering scripts that truly reflect who you are and who you want to become.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-sage-green via-blush-pink to-deep-teal text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-base lg:text-lg font-medium hover:from-deep-teal hover:to-sage-green group"
            >
              Book a Consultation 
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </section>
      </div>
      <div className="mt-12 lg:mt-16">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
