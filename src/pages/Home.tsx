
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import WhoYouAre from '../components/WhoYouAre';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="space-y-20">
          <Hero />
          <WhoYouAre />
          <ServicePreview />
          
          <section ref={ctaRef} className="text-center">
            <div className={`bg-gradient-to-br from-sage-green/10 to-blush-pink/10 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto border border-sage-green/20 transition-all duration-1000 ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="text-blush-pink animate-pulse" size={24} />
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal">
                  Rewrite Your Narrative
                </h2>
                <Sparkles className="text-blush-pink animate-pulse" size={24} />
              </div>
              <p className="max-w-3xl mx-auto text-xl mb-10 text-warm-gray leading-relaxed">
                Every story can be rewritten. Together, we'll uncover the narratives that shape your life and transform them into powerful, empowering scripts that truly reflect who you are and who you want to become.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-lg font-medium group"
              >
                Book a Consultation 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-20">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
