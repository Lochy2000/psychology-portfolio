import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTypewriterOnce } from '../../hooks/useTypewriterOnce';

const AboutHero = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { text: typewriterSubtitle } = useTypewriterOnce({
    text: "Every therapist has their own journey of transformation. Here's mine.",
    speed: 80,
    startDelay: 1000,
  });

  return (
    <div ref={headerRef} className={`relative transition-all duration-1000 ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-sage-green/20 border-2 border-sage-green rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
          <BookOpen className="text-sage-green" size={28} />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-4 lg:mb-6 leading-tight">
          <span className="text-shimmer-safe">My Story</span>
        </h1>
        <p className="text-lg lg:text-xl font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed min-h-[2em]">
          {typewriterSubtitle}
          <span className="typewriter-cursor text-gray-600">|</span>
        </p>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
        {/* Image */}
        <div className="relative order-1 group">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
            alt="Mette at the beach - reflecting her journey"
            className="rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] transform group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Experience Stats Overlay */}
          <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-sage-green" />
                  <span className="font-bold text-deep-teal text-sm lg:text-base">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-sage-green" />
                  <span className="font-bold text-deep-teal text-sm lg:text-base">500+ Clients Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="order-2 space-y-6">
          <div className="bg-white p-6 lg:p-8 rounded-2xl border-2 border-sage-green/10 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-4 lg:mb-6">Welcome to My World</h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              I'm Mette, and like you, I've walked the path of questioning, exploring, and rewriting my own story. My journey across six countries has taught me that our narratives shape not just how we see ourselves, but how we move through the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;