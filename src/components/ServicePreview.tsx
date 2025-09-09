import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicePreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="mt-8 lg:mt-12">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-sage-green/10">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image */}
            <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
              <img 
                src="/img/my-services.png" 
                alt="Woman jumping freely at sunset - representing transformation and freedom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-teal/10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Arrow SVG positioned in top right */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                <img 
                  src="/svg/haINwM01.svg" 
                  alt="Decorative arrow"
                  className="w-16 h-16 lg:w-20 lg:h-20 opacity-20"
                  style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1352%) hue-rotate(142deg) brightness(95%) contrast(86%)' }}
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal">
                  My Services
                </h2>
                
                <p className="text-base lg:text-lg text-warm-gray leading-relaxed">
                  Tailored approaches to help you transform your life story and step into your personal power.
                </p>

                <Link 
                  to="/services" 
                  className="inline-flex items-center px-6 py-3 bg-sage-green text-white rounded-full hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base font-medium group w-fit"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;