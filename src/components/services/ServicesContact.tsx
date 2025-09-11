import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServicesContact = () => {
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();

  return (
    <section ref={workingRef}>
      <div className={`bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm border-2 border-gray-100 transition-all duration-1000 ${
        workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-teal mb-4">
            Ways to Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the approach that works best for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Discovery Call",
              description: "Free 20-minute Zoom call to explore if we're a good fit",
              icon: "📞"
            },
            {
              title: "Online Sessions",
              description: "3 x 60-minute sessions via Zoom with personalized resources",
              icon: "💻"
            },
            {
              title: "In-Person Support",
              description: "Creative, hands-on exploration in the Côte d'Azur region",
              icon: "🏡"
            }
          ].map((option, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-sage-green/30 transition-all duration-300 hover:shadow-md">
              <div className="text-3xl mb-4">{option.icon}</div>
              <h3 className="font-serif font-bold text-deep-teal text-lg mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
              <a href="/contact" className="text-sage-green font-medium hover:text-deep-teal transition-colors duration-300 text-sm">
                Learn More →
              </a>
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to begin your transformation journey?</p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-sage-green text-white rounded-full hover:bg-sage-green/90 transition-all duration-300 font-medium text-lg group"
          >
            Book Your Discovery Call
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesContact;