import React from 'react';
import { BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ChapterOne: React.FC = () => {
  const { ref: chapterOneRef, isVisible: chapterOneVisible } = useScrollAnimation();

  return (
    <section ref={chapterOneRef} className="py-4 sm:py-6 lg:py-10 xl:py-16 section-connector">
      <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${chapterOneVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
        {/* Chapter Header - Centered */}
        <div className="text-center mb-3 sm:mb-4 lg:mb-6">
          <div className="flex flex-col items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 icon-professional rounded-full flex items-center justify-center">
              <BookOpen className="text-white" size={14} />
            </div>
            <div className="text-center">
              <span className="text-[10px] sm:text-xs lg:text-sm font-handwritten text-sage-green/70 block">Chapter One</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal leading-tight">Who You Are</h2>
            </div>
          </div>
        </div>

        {/* Main Content - Laptop Optimized */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8">
            {/* Primary Message - Laptop Sized */}
            <div className="bg-gradient-to-r from-sage-green/15 via-sage-green/10 to-transparent p-3 sm:p-4 lg:p-6 xl:p-8 rounded-2xl border-l-4 border-sage-green shadow-sm">
              <p className="text-sm sm:text-base lg:text-xl xl:text-2xl font-semibold text-deep-teal leading-relaxed">
                You crave control, freedom, and authenticity - but inner doubts hold you back.
              </p>
            </div>
            
            {/* Content with Tighter Spacing */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-8">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-warm-gray leading-relaxed">
                You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
              </p>
            </div>
          </div>
          
          {/* Visual Element - Laptop Optimized */}
          <div className="lg:col-span-5 relative">
            <div className="relative group h-60 sm:h-72 lg:h-96 xl:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-blush-pink/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
                alt="Trees reaching towards light - symbolizing growth"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-sage-green/20 rounded-2xl"></div>
              
              {/* Quote Overlay */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl border border-sage-green/20 shadow-lg">
                  <p className="text-xs sm:text-sm lg:text-lg xl:text-xl font-handwritten text-deep-teal/90 text-center leading-relaxed">
                    Every story can be rewritten. You hold the pen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterOne;