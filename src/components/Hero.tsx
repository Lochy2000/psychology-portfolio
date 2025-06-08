
import React from 'react';
import { Book, Heart, Award, Users } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Hero: React.FC = () => {
  const mousePosition = useMouseParallax(0.05);

  return (
    <div className="relative animated-background paper-texture overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        {/* Cinematic intro with overlay */}
        <div className="relative h-[60vh] overflow-hidden rounded-3xl mx-6 mb-8 story-chapter">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
            alt="Mette Nyholm Theilmann - Narrative Psychologist" 
            className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 via-deep-teal/40 to-transparent rounded-3xl"></div>
        </div>
        
        {/* Content below image on mobile */}
        <div className="px-6 pb-8 space-y-8">
          {/* Title and credentials */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-deep-teal text-shimmer">
              Mette Theilmann
            </h1>
            <p className="text-lg font-medium text-sage-green gentle-float">
              Narrative Psychologist | NLP Coach | Parenting Consultant
            </p>
            {/* Mobile Trust Indicators */}
            <div className="flex justify-center items-center gap-4 text-sm text-warm-gray mt-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-1 hover-lift">
                <Award size={14} className="text-sage-green pulse-glow" />
                <span>25+ Years</span>
              </div>
              <div className="flex items-center gap-1 hover-lift">
                <Users size={14} className="text-sage-green pulse-glow" />
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
          
          {/* Main headline with journal background feel */}
          <div className="bg-gradient-to-br from-white/80 to-sage-green/5 backdrop-blur-sm rounded-2xl p-8 border border-sage-green/20 story-chapter">
            <h2 className="text-2xl font-serif font-bold text-deep-teal leading-relaxed animate-fade-in mb-4" style={{ animationDelay: '0.3s' }}>
              Become the author of your own life by rewriting the story you tell yourself and others tell you
            </h2>
            <div className="handwritten-quote text-lg font-handwritten text-warm-gray/80 italic border-l-4 border-sage-green/30 pl-4">
              Every story can be rewritten. You hold the pen.
            </div>
          </div>
          
          <p className="text-base text-warm-gray leading-relaxed animate-fade-in prose" style={{ animationDelay: '0.4s' }}>
            Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-6 rounded-xl border border-sage-green/20 hover-lift animate-fade-in paper-texture" style={{ animationDelay: '0.5s' }}>
            <div className="space-y-3 text-sm">
              <p className="text-deep-teal font-semibold text-lg mb-4">Let's Connect</p>
              <p className="text-warm-gray">
                <span className="font-medium">Email:</span> mette@metteteilmann.com
              </p>
              <p className="text-warm-gray">
                <span className="font-medium">Mobile (France):</span> 0033 745 233 230
              </p>
              <p className="text-warm-gray">
                <span className="font-medium">Mobile (UK):</span> 0447 756 918 126
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="/services" 
              className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-medium pulse-glow"
            >
              <Book className="mr-2" size={20} /> Explore My Work
            </a>
            <a 
              href="/about" 
              className="flex items-center justify-center border-2 border-sage-green text-sage-green px-8 py-4 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 text-lg font-medium story-chapter"
            >
              <Heart className="mr-2" size={20} /> My Story
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Title Section - Full Width */}
          <div className="text-center mb-16 py-8">
            <div 
              className="space-y-6 mouse-parallax"
              style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
            >
              <h1 className="text-6xl xl:text-7xl font-serif font-bold text-deep-teal text-shimmer leading-tight">
                Mette Theilmann
              </h1>
              <p className="text-2xl text-sage-green font-medium gentle-float">
                Narrative Psychologist | NLP Coach | Parenting Consultant
              </p>
              {/* Desktop Trust Indicators */}
              <div className="flex justify-center items-center gap-8 text-base text-warm-gray animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 hover-lift">
                  <Award size={20} className="text-sage-green pulse-glow" />
                  <span className="font-medium">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 hover-lift">
                  <Users size={20} className="text-sage-green pulse-glow" />
                  <span className="font-medium">500+ Clients Supported</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid - Balanced Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Main headline with journal feel */}
              <div className="bg-gradient-to-br from-white/70 to-sage-green/5 backdrop-blur-sm rounded-2xl p-8 border border-sage-green/20 story-chapter animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal leading-relaxed mb-6">
                  Become the author of your own life by rewriting the story you tell yourself and others tell you
                </h2>
                <div className="handwritten-quote text-xl font-handwritten text-warm-gray/80 italic border-l-4 border-sage-green/30 pl-6">
                  Every story can be rewritten. You hold the pen.
                </div>
              </div>
              
              <p className="text-lg text-warm-gray leading-relaxed animate-fade-in prose" style={{ animationDelay: '0.4s' }}>
                Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
              </p>
              
              <p className="text-lg text-warm-gray italic border-l-4 border-blush-pink/30 pl-6 bg-gradient-to-r from-blush-pink/5 to-transparent py-6 rounded-r-xl hover-lift animate-fade-in" style={{ animationDelay: '0.5s' }}>
                "Our identity is not formed in isolation - we develop, heal, and grow through connections with others. People are shaped by people."
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <a 
                  href="/services" 
                  className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg font-medium pulse-glow"
                >
                  <Book className="mr-3" size={20} /> Explore My Work
                </a>
                <a 
                  href="/about" 
                  className="flex items-center justify-center border-2 border-sage-green text-deep-teal px-8 py-4 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 hover:shadow-lg text-lg font-medium story-chapter"
                >
                  <Heart className="mr-3" size={20} /> My Story
                </a>
              </div>
            </div>
            
            {/* Right Image - 2 columns */}
            <div className="lg:col-span-2">
              <div 
                className="relative group mouse-parallax story-chapter"
                style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
              >
                <img 
                  src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
                  alt="Mette Nyholm Theilmann - Narrative Psychologist" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[600px] transform group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-3xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Floating quote overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl gentle-float">
                    <p className="handwritten-quote text-lg font-handwritten text-deep-teal italic text-center">
                      "Your story is not your destiny. It's your starting point."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Full Width */}
          <div className="mt-16 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-8 rounded-2xl border border-sage-green/20 hover-lift animate-fade-in paper-texture" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-6">
              <p className="text-deep-teal font-semibold text-2xl">Let's Begin Your Journey</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base max-w-4xl mx-auto">
                <p className="text-warm-gray">
                  <span className="font-medium text-deep-teal">Email:</span><br />
                  mette@metteteilmann.com
                </p>
                <p className="text-warm-gray">
                  <span className="font-medium text-deep-teal">Mobile (France):</span><br />
                  0033 745 233 230
                </p>
                <p className="text-warm-gray">
                  <span className="font-medium text-deep-teal">Mobile (UK):</span><br />
                  0447 756 918 126
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
