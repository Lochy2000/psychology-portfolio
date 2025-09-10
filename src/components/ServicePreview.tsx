import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicePreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="w-full">
      <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        {/* Services Section - Organic Layout */}
        <div className="relative overflow-hidden">
          {/* Background Shape */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-0 w-2/3 h-96 bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent rounded-r-[3rem] transform -translate-y-1/2"></div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[280px] lg:min-h-[350px] xl:min-h-[450px] items-center">
              {/* Left Column - Image flush to left edge */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative overflow-hidden lg:rounded-r-3xl shadow-2xl h-60 lg:h-full lg:min-h-[350px] xl:min-h-[450px] lg:-ml-6">
                  <img 
                    src="/img/my-services.png" 
                    alt="Woman jumping freely at sunset - representing transformation and freedom"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-sage-green/20"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="w-full lg:w-3/5 px-6 lg:px-12 xl:px-16 py-6 lg:py-10 relative flex justify-center">
                {/* Large arrow pointing to button - desktop */}
                <div className="hidden lg:block absolute bottom-8 right-4 xl:right-8 transform rotate-12">
                  <img 
                    src="/svg/haINwM01.svg" 
                    alt="Arrow pointing to services"
                    className="w-20 h-20 lg:w-28 lg:h-28 opacity-70"
                    style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1352%) hue-rotate(142deg) brightness(95%) contrast(86%)' }}
                  />
                </div>
                
                <div className="space-y-4 lg:space-y-5 max-w-lg text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal">
                    My Services
                  </h2>
                  
                  <p className="text-base lg:text-lg text-warm-gray leading-relaxed">
                    Tailored approaches to help you transform your life story and step into your personal power.
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center px-6 lg:px-7 py-3 lg:py-3.5 bg-sage-green text-white rounded-full hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base lg:text-lg font-medium group"
                    >
                      Explore All Services
                      <ArrowRight className="ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </Link>
                    {/* Mobile arrow - positioned right of button */}
                    <div className="lg:hidden">
                      <img 
                        src="/svg/haINwM01.svg" 
                        alt="Arrow pointing to services"
                        className="w-8 h-8 opacity-60"
                        style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1352%) hue-rotate(142deg) brightness(95%) contrast(86%)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePreview;