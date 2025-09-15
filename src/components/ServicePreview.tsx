import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicePreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`w-full transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      {/* Services Section - Organic Layout */}
      <div className="relative overflow-hidden">
          {/* Background Shape - Hidden on mobile to prevent harsh corners */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-0 w-2/3 h-96 bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent rounded-r-[3rem] transform -translate-y-1/2"></div>
          </div>
          
        <div className="relative">
          <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-[280px] lg:min-h-[350px] xl:min-h-[450px] items-stretch">
            {/* Mobile Layout - Restructured with title above */}
            <div className="lg:hidden relative -mx-4 mb-2">
              {/* Title and intro above the columns */}
              <div className="px-4 text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-deep-teal mb-2">
                  My Services
                </h2>
                <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                  Tailored approaches to transform your life story
                </p>
              </div>

              <div className="flex">
                {/* Image container - pushed to left, half cut off */}
                <div className="w-3/5 -ml-8">
                  <div className="relative overflow-hidden rounded-r-2xl shadow-2xl h-40 sm:h-48">
                    <img
                      src="/img/my-services.png"
                      alt="Woman jumping freely at sunset - representing transformation and freedom"
                      className="w-full h-full object-cover object-left transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-sage-green/20"></div>
                  </div>
                </div>
                {/* Service badges/highlights - right side */}
                <div className="flex-1 px-2 flex items-center">
                  <div className="w-full">
                    <div className="flex flex-col items-center gap-1 mt-4">
                      {/* First row - 2 badges */}
                      <div className="flex gap-1">
                        <span className="inline-block bg-sage-green/5 border border-sage-green/30 px-1.5 py-0.5 rounded-md">
                          <span className="text-[9px] font-medium text-deep-teal/80">1-on-1</span>
                        </span>
                        <span className="inline-block bg-transparent border border-blush-pink/30 px-1.5 py-0.5 rounded-md">
                          <span className="text-[9px] font-medium text-deep-teal/80">Groups</span>
                        </span>
                      </div>
                      {/* Second row - 1 badge centered */}
                      <div className="flex">
                        <span className="inline-block bg-sage-green/5 border border-sage-green/30 px-1.5 py-0.5 rounded-md">
                          <span className="text-[9px] font-medium text-deep-teal/80">Workshops</span>
                        </span>
                      </div>
                      {/* Third row - 2 badges */}
                      <div className="flex gap-1">
                        <span className="inline-block bg-transparent border border-blush-pink/30 px-1.5 py-0.5 rounded-md">
                          <span className="text-[9px] font-medium text-deep-teal/80">Online</span>
                        </span>
                        <span className="inline-block bg-sage-green/5 border border-sage-green/30 px-1.5 py-0.5 rounded-md">
                          <span className="text-[9px] font-medium text-deep-teal/80">Speaking</span>
                        </span>
                      </div>
                    </div>
                    {/* Arrow positioned closer to button */}
                    <div className="flex justify-end mt-1">
                      <img
                        src="/svg/haINwM01.svg"
                        alt="Arrow pointing to services"
                        className="w-28 h-28 sm:w-32 sm:h-32 opacity-60"
                        style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1352%) hue-rotate(142deg) brightness(95%) contrast(86%)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Button - minimal spacing to keep it close */}
              <div className="flex items-center justify-center -mt-1 px-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 bg-sage-green text-white rounded-full hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg font-medium group"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </div>
            </div>

            {/* Desktop Layout - Original */}
            <div className="hidden lg:block w-full lg:col-span-5">
              <div className="relative overflow-hidden lg:rounded-r-3xl lg:rounded-l-none shadow-2xl h-full lg:min-h-[350px] xl:min-h-[450px]">
                <img 
                  src="/img/my-services.png" 
                  alt="Woman jumping freely at sunset - representing transformation and freedom"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-sage-green/20"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:col-span-7 px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-6 lg:py-10 relative flex items-center justify-center lg:justify-start">
                
                <div className="space-y-3 sm:space-y-4 lg:space-y-5 max-w-lg text-center lg:text-left w-full">
                  {/* Desktop Content */}
                  <div className="hidden lg:block">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal mb-4">
                      My Services
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg text-warm-gray leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                      Tailored approaches to help you transform your life story and step into your <span className="font-semibold">personal power</span>.
                    </p>
                  </div>


                  {/* Desktop Button with Arrow */}
                  <div className="hidden lg:flex items-center justify-start gap-4">
                    <Link
                      to="/services"
                      className="inline-flex items-center px-7 py-3.5 bg-sage-green text-white rounded-full hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-lg font-medium group"
                    >
                      Explore All Services
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                    </Link>
                    {/* Arrow positioned right next to button */}
                    <img
                      src="/svg/haINwM01.svg"
                      alt="Arrow pointing to services"
                      className="w-20 h-20 lg:w-24 lg:h-24 opacity-70 transform rotate-[15deg] -mt-12"
                      style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1352%) hue-rotate(142deg) brightness(95%) contrast(86%)' }}
                    />
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