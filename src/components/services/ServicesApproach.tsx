import React from 'react';
import { Search, Heart, PenTool } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServicesApproach = () => {
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();

  const steps = [
    {
      step: 1,
      title: "Discovery",
      subtitle: "Through Curiosity",
      description: "We begin with curiosity: gently exploring the stories that shape your life today.",
      icon: Search,
      color: 'sage'
    },
    {
      step: 2,
      title: "Safe Space",
      subtitle: "Creating Connection",
      description: "Together, we'll create a safe space to question these stories and bring them out into the open.",
      icon: Heart,
      color: 'blush'
    },
    {
      step: 3,
      title: "New Narratives",
      subtitle: "Writing Your Story",
      description: "From there, we'll begin to shape a new narrative that reflects how you want your life to feel.",
      icon: PenTool,
      color: 'sage'
    }
  ];

  return (
    <section ref={approachRef} className="mb-20 sm:mb-24">
      {/* Section with gradient background */}
      <div className={`relative bg-gradient-to-br from-white via-cream/30 to-sage-green/5 rounded-2xl overflow-hidden transition-all duration-1000 ${
        approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
      }`}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blush-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-green/5 rounded-full blur-3xl" />
        
        <div className="relative px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-3">
              My Approach
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A journey of transformation through three essential steps
            </p>
          </div>
          
          {/* Desktop: Horizontal Timeline | Mobile: Vertical Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden sm:block">
              <div className="flex items-start justify-between relative">
                {steps.map((step, index) => (
                  <div key={step.step} className="flex-1 relative">
                    <div className="flex flex-col items-center text-center">
                      {/* Step circle with icon */}
                      <div className={`
                        w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center relative
                        ${step.color === 'sage' 
                          ? 'bg-gradient-to-br from-sage-green/20 to-sage-green/10 border-2 border-sage-green/30' 
                          : 'bg-gradient-to-br from-blush-pink/25 to-blush-pink/15 border-2 border-blush-pink/40'
                        }
                        transform hover:scale-110 transition-transform duration-300
                      `}
                      style={{ zIndex: 10 }}>
                        <step.icon className={`
                          ${step.color === 'sage' ? 'text-sage-green' : 'text-deep-teal'}
                        `} size={28} />
                        
                        {/* Step number badge */}
                        <div className={`
                          absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                          ${step.color === 'sage' 
                            ? 'bg-sage-green text-white' 
                            : 'bg-deep-teal text-white'
                          }
                        `}>
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="mt-4 px-2">
                        <h3 className="font-serif font-bold text-deep-teal text-lg lg:text-xl mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-sage-green font-medium mb-2">
                          {step.subtitle}
                        </p>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile: Vertical Timeline */}
            <div className="sm:hidden">
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sage-green/20 via-blush-pink/20 to-sage-green/20" />
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={step.step} className="relative flex items-start gap-4">
                      {/* Step circle with icon */}
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0
                        ${step.color === 'sage' 
                          ? 'bg-gradient-to-br from-sage-green/20 to-sage-green/10 border-2 border-sage-green/30' 
                          : 'bg-gradient-to-br from-blush-pink/25 to-blush-pink/15 border-2 border-blush-pink/40'
                        }
                      `}>
                        <step.icon className={`
                          ${step.color === 'sage' ? 'text-sage-green' : 'text-deep-teal'}
                        `} size={20} />
                        
                        {/* Step number badge */}
                        <div className={`
                          absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold
                          ${step.color === 'sage' 
                            ? 'bg-sage-green text-white' 
                            : 'bg-deep-teal text-white'
                          }
                        `}>
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <h3 className="font-serif font-bold text-deep-teal text-base mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-xs text-sage-green font-medium mb-1.5">
                          {step.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">Ready to begin your transformation journey?</p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-deep-teal text-white rounded-full hover:bg-deep-teal/90 transition-all duration-300 font-medium text-sm"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesApproach;