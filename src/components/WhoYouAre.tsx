
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhoYouAre: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 paper-texture">
      <div className={`bg-gradient-to-br from-sage-green/15 to-blush-pink/15 backdrop-blur-sm rounded-2xl p-12 lg:p-16 shadow-xl border border-sage-green/30 transition-all duration-1000 story-chapter ${isVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
            <span className="text-white font-serif text-xl">✦</span>
          </div>
          <span className="text-sm font-handwritten text-sage-green/70 block mb-2">Prologue</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6 text-shimmer">
            Who You Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-sage-green via-blush-pink to-deep-teal rounded-full journey-path"></div>
            <div className="pl-12">
              <p className="text-2xl lg:text-3xl text-warm-gray leading-relaxed font-serif prose">
                You're someone who craves more control, freedom, and authenticity in your life - but inner doubts and external voices from society, culture, family or religion hold you back.
              </p>
              <div className="mt-8 pt-8 border-t border-sage-green/20">
                <p className="text-xl text-warm-gray leading-relaxed prose">
                  You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                </p>
              </div>
            </div>
          </div>
          
          {/* Handwritten margin note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-sage-green/20">
              <p className="handwritten-quote text-lg font-handwritten text-deep-teal/80">
                Your story is waiting to be rewritten. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoYouAre;
