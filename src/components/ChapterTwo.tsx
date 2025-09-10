import React from 'react';
import { Sparkles, Heart, Compass, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ChapterTwo: React.FC = () => {
  const { ref: chapterTwoRef, isVisible: chapterTwoVisible } = useScrollAnimation();

  return (
    <section ref={chapterTwoRef} className="py-6 sm:py-8 lg:py-12 xl:py-20 section-connector organic-bg">
      <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${chapterTwoVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
        {/* Chapter Header - Compact */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 icon-professional-pink rounded-full flex items-center justify-center">
              <Compass className="text-white" size={14} />
            </div>
            <div className="text-left">
              <span className="text-[10px] sm:text-xs lg:text-sm font-handwritten text-blush-pink/70 block">Chapter Two</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal leading-tight">
                Your Journey
              </h2>
            </div>
          </div>
        </div>

        {/* Journey Steps - Streamlined for Laptops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            { icon: Heart, title: "Explore", content: "Discover the stories that have shaped your identity and explore new possibilities." },
            { icon: Sparkles, title: "Transform", content: "Rewrite limiting beliefs into empowering narratives that serve you." },
            { icon: Star, title: "Thrive", content: "Live authentically with confidence, clarity, and personal power." }
          ].map((step, index) => (
            <div 
              key={step.title} 
              className="story-chapter content-flow p-3 sm:p-4 lg:p-6 rounded-2xl text-center hover-lift min-h-[160px] sm:min-h-[180px] lg:min-h-[220px] xl:min-h-[300px] flex flex-col justify-center section-transition"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 icon-professional rounded-full flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto">
                <step.icon className="text-white" size={16} />
              </div>
              <h3 className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-2 sm:mb-3 lg:mb-4">{step.title}</h3>
              <p className="text-warm-gray leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterTwo;