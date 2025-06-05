
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhoYouAre: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16">
      <div className={`bg-gradient-to-br from-sage-green/10 to-blush-pink/10 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg border border-sage-green/20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold text-deep-teal mb-4">
            Who You Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sage-green to-blush-pink rounded-full"></div>
            <p className="text-xl text-warm-gray leading-relaxed pl-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              You're someone who craves more control, freedom, and authenticity in your life - but inner doubts and external voices from society, culture, family or religion hold you back. You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoYouAre;
