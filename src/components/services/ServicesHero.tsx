import React from 'react';
import { ArrowDown } from 'lucide-react';

const ServicesHero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('[data-services-section]');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[60vh] lg:min-h-screen flex items-center bg-gradient-to-br from-cream via-white to-soft-sage/10">
      {/* Tree image - background on mobile, left side on desktop */}
      <div className="absolute top-0 left-0 right-0 bottom-0 lg:inset-y-0 lg:left-0 lg:right-1/3 z-0 h-[150%] lg:h-full">
        <img
          src="/img/tree-services.png"
          alt="Growth and transformation tree"
          className="h-full w-full object-contain object-left-bottom lg:object-left opacity-75 lg:opacity-100"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))',
            transform: 'translateY(5%) lg:translateY(0%)'
          }}
        />
      </div>

      {/* Enhanced gradient overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/70 to-white/50 backdrop-blur-[1px] lg:hidden z-5" />

      {/* Content container - positioned right on desktop */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Spacer for tree image on desktop */}
            <div className="hidden lg:block" />
            
            {/* Text content */}
            <div className="text-center lg:text-left py-4 sm:py-12 lg:py-0">
              {/* Personal quote */}
              <p className="font-handwritten text-deep-teal text-lg sm:text-xl lg:text-3xl mb-3 italic">
                "Your story matters, and together we'll help it unfold"
              </p>

              {/* Main title */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-deep-teal mb-6">
                How I Can Help You
              </h1>
              
              {/* Description - hidden on mobile */}
              <p className="hidden sm:block text-lg text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
                Explore the different ways we can work together to transform your story and create meaningful change in your life.
              </p>

              {/* Scroll indicator */}
              <div className="flex flex-col items-center lg:items-start">
                <button
                  onClick={scrollToServices}
                  className="group hover:animate-none transition-all duration-300"
                  aria-label="Scroll to services"
                >
                  <div className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 mobile-arrow-animate">
                    <ArrowDown 
                      className="text-deep-teal group-hover:text-deep-teal/80 group-hover:translate-y-1 transition-all duration-300" 
                      size={24} 
                    />
                  </div>
                </button>
                <p className="text-charcoal/60 text-sm mt-3 font-medium">
                  Discover Your Journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - hidden on mobile for tree continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent hidden lg:block" />
      
      {/* Accessibility: Skip to content button */}
      <button
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-deep-teal text-white px-4 py-2 rounded-lg z-50"
        onClick={scrollToServices}
        tabIndex={0}
      >
        Skip to Services
      </button>
    </div>
  );
};

export default ServicesHero;