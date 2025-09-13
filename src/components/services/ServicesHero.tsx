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
    <div className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-gradient-to-br from-cream via-white to-soft-sage/10 overflow-hidden">
      {/* Tree image - background on mobile, left side on desktop */}
      <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:right-1/3">
        <img 
          src="/img/tree-services.png" 
          alt="Growth and transformation tree"
          className="h-full w-full object-contain object-left-bottom lg:object-left opacity-50 lg:opacity-100"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>

      {/* Enhanced gradient overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/60 backdrop-blur-[2px] lg:hidden" />

      {/* Content container - positioned right on desktop */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Spacer for tree image on desktop */}
            <div className="hidden lg:block" />
            
            {/* Text content */}
            <div className="text-center lg:text-left py-8 sm:py-12 lg:py-0">
              {/* Personal quote */}
              <p className="font-handwritten text-deep-teal text-xl sm:text-2xl lg:text-3xl mb-6 italic">
                "Your story matters, and together we'll help it unfold"
              </p>
              
              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6">
                How I Can Help You
              </h1>
              
              {/* Description - always visible */}
              <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
                Explore the different ways we can work together to transform your story and create meaningful change in your life.
              </p>

              {/* Scroll indicator */}
              <div className="flex flex-col items-center lg:items-start">
                <button
                  onClick={scrollToServices}
                  className="group animate-bounce hover:animate-none transition-all duration-300"
                  aria-label="Scroll to services"
                >
                  <div className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300">
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      
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