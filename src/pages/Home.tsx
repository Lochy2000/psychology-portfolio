
import React from 'react';
import Hero from '../components/Hero';
import IdentityQuote from '../components/IdentityQuote';
import ChapterOne from '../components/ChapterOne';
import ChapterTwo from '../components/ChapterTwo';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const { ref: chapterThreeRef, isVisible: chapterThreeVisible } = useScrollAnimation();

  return (
    <div className="bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        <div className="space-y-3 sm:space-y-6 md:space-y-8 lg:space-y-16 xl:space-y-24">
          
          {/* Identity Quote Section */}
          <IdentityQuote />
          
          <div className="mobile-section-divider"></div>

          {/* Chapter 1: Who You Are */}
          <ChapterOne />
          
          <div className="mobile-section-divider"></div>

          {/* Chapter 2: Your Journey */}
          <ChapterTwo />
        </div>
      </div>

      {/* Transition to Services */}
      <div className="mobile-section-divider"></div>

      {/* Chapter 3: Services Preview - Outside container for full width */}
      <section ref={chapterThreeRef} className={`py-4 sm:py-6 md:py-8 lg:py-12 xl:py-20 transition-all duration-1000 ${chapterThreeVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
        <ServicePreview />
      </section>
      
      <div className="mobile-section-divider"></div>
      
      {/* Testimonials Section */}
      <div className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-20">
        <Testimonials />
      </div>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
