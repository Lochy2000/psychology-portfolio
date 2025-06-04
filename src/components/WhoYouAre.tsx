
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhoYouAre: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16">
      <div className={`bg-gradient-to-br from-blush-pink/5 via-sage-green/5 to-deep-teal/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-sage-green/20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-6">
            Who You Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sage-green via-blush-pink to-deep-teal rounded-full"></div>
            <p className="text-lg lg:text-xl text-warm-gray leading-relaxed pl-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              You're someone who craves more control, freedom, and authenticity in your life - but inner doubts and external voices from society, culture, family or religion hold you back. You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-sage-green/20 to-blush-pink/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-deep-teal/20 to-sage-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default WhoYouAre;
