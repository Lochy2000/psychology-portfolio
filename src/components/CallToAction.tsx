import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CallToAction: React.FC = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section ref={ctaRef} className="text-center py-6 sm:py-8 lg:py-12 xl:py-20 bg-gradient-to-br from-white/90 to-sage-green/5">
      <div className={`max-w-4xl mx-auto px-4 transition-all duration-1000 ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 icon-professional rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <BookOpen className="text-white" size={16} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal leading-tight">
              Ready to Begin?
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">

            <p className="text-sm sm:text-base lg:text-lg text-warm-gray/80 leading-relaxed">
              Together, we'll rewrite the narratives that truly reflect who you are.
            </p>
          </div>

          <div className="bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent p-3 sm:p-4 lg:p-5 rounded-2xl border-l-4 border-sage-green/40 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg font-handwritten text-deep-teal/80">
              Your story matters. Let's write it together.
            </p>
          </div>

          <a 
            href="mailto:mette@metteteilmann.com?subject=Ready to Begin My Journey" 
            className="inline-flex items-center px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 bg-deep-teal text-white rounded-full hover:shadow-2xl hover:bg-opacity-90 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-lg font-medium group shadow-xl"
          >
            Start Your Journey 
            <ChevronRight className="ml-1.5 sm:ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;