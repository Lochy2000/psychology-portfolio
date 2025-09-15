import React from 'react';
import { Phone, Video, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServicesContact = () => {
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();

  const options = [
    {
      title: "Discovery Call",
      description: "Free 20-minute Zoom call to explore if we're a good fit",
      icon: Phone,
      pattern: 'dots',
      color: 'sage',
      duration: "20 min",
      type: "Free"
    },
    {
      title: "Online Sessions",
      description: "3 x 60-minute sessions via Zoom with personalized resources",
      icon: Video,
      pattern: 'waves',
      color: 'blush',
      duration: "60 min",
      type: "Package"
    },
    {
      title: "In-Person Support",
      description: "Creative, hands-on exploration in the Côte d'Azur region",
      icon: MapPin,
      pattern: 'circles',
      color: 'sage',
      duration: "Custom",
      type: "Local"
    }
  ];

  return (
    <section ref={workingRef}>
      <div className={`transition-all duration-1000 ${
        workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
      }`}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-3">
            Ways to Connect
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Choose the approach that works best for you
          </p>
        </div>
        
        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {options.map((option, index) => (
            <a
              key={index}
              href="/contact"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl block"
            >
              {/* Background with pattern */}
              <div className={`
                absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300
                ${option.color === 'sage' 
                  ? 'bg-gradient-to-br from-sage-green to-sage-green/50' 
                  : 'bg-gradient-to-br from-blush-pink to-blush-pink/50'
                }
              `}>
                {/* Pattern overlay */}
                {option.pattern === 'dots' && (
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(156, 175, 136, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                )}
                {option.pattern === 'waves' && (
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M0 10c10-5 20-5 30 0s20 5 30 0" stroke="#E6D1C5" strokeWidth="1" fill="none"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#waves)" />
                  </svg>
                )}
                {option.pattern === 'circles' && (
                  <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-sage-green/20" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-sage-green/20" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 border-2 border-gray-100 group-hover:border-sage-green/30 rounded-xl transition-colors duration-300">
                {/* Icon and badges */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center
                    ${option.color === 'sage' 
                      ? 'bg-sage-green/15 text-sage-green' 
                      : 'bg-blush-pink/20 text-deep-teal'
                    }
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <option.icon size={24} />
                  </div>
                  
                  <div className="flex gap-2">
                    <span className="text-xs sm:text-[10px] px-3 py-1.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 rounded-full">
                      {option.duration}
                    </span>
                    <span className={`
                      text-xs sm:text-[10px] px-3 py-1.5 sm:px-2 sm:py-1 rounded-full
                      ${option.type === 'Free'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                      }
                    `}>
                      {option.type}
                    </span>
                  </div>
                </div>
                
                {/* Title and description */}
                <h3 className="font-serif font-bold text-deep-teal text-lg mb-2 group-hover:text-sage-green transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {option.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center gap-2 text-sage-green font-medium text-sm group-hover:text-deep-teal transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-sage-green/5 via-cream to-blush-pink/5 rounded-2xl p-8 sm:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-handwritten text-deep-teal/70 text-lg sm:text-xl mb-4 italic">
              "Every journey begins with a single conversation"
            </p>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Ready to explore how we can work together to transform your story?
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-teal text-white rounded-full hover:bg-deep-teal/90 transition-all duration-300 font-medium group"
            >
              Book Your Discovery Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                ✓ No obligation
              </span>
              <span className="flex items-center gap-1">
                ✓ 100% confidential
              </span>
              <span className="flex items-center gap-1">
                ✓ Safe space guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContact;