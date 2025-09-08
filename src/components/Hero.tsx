
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Award, Users } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Hero: React.FC = () => {
  const mousePosition = useMouseParallax(0.05);

  return (
    <div className="relative animated-background paper-texture overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        {/* Mobile Title - Above Image with proper spacing */}
        <div className="px-4 pt-8 pb-6 text-center space-y-4 safe-text-container">
          <div className="title-safe overflow-visible">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-deep-teal px-2 py-4 leading-tight">
              <span className="text-shimmer-safe block">Mette Theilmann</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-medium text-sage-green gentle-float px-2 py-1 leading-relaxed">
            Narrative Psychologist | NLP Coach | Parenting Consultant
          </p>
          {/* Mobile Trust Indicators */}
          <div className="flex justify-center items-center gap-4 text-xs sm:text-sm text-warm-gray mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-1 hover-lift">
              <Award size={14} className="text-sage-green pulse-glow shrink-0" />
              <span className="whitespace-nowrap">25+ Years</span>
            </div>
            <div className="flex items-center gap-1 hover-lift">
              <Users size={14} className="text-sage-green pulse-glow shrink-0" />
              <span className="whitespace-nowrap">500+ Clients</span>
            </div>
          </div>
        </div>

        {/* Cinematic intro with overlay */}
        <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden rounded-3xl mx-4 mb-6 story-chapter">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
            alt="Mette Nyholm Theilmann - Narrative Psychologist" 
            className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 via-deep-teal/40 to-transparent rounded-3xl"></div>
        </div>
        
        {/* Content below image on mobile */}
        <div className="px-4 pb-8 space-y-6">
          {/* Main headline with journal background feel */}
          <div className="bg-gradient-to-br from-white/80 to-sage-green/5 backdrop-blur-sm rounded-2xl p-6 border border-sage-green/20 story-chapter">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-deep-teal leading-tight animate-fade-in mb-4 py-1" style={{ animationDelay: '0.3s' }}>
              Become the author of your own life
            </h2>
            <div className="handwritten-quote text-lg sm:text-xl font-handwritten text-deep-teal/70 italic border-l-4 border-sage-green/30 pl-4 py-2">
              Every story can be rewritten. You hold the pen.
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed animate-fade-in prose" style={{ animationDelay: '0.4s' }}>
            Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-4 sm:p-6 rounded-xl border border-sage-green/20 hover-lift animate-fade-in paper-texture" style={{ animationDelay: '0.5s' }}>
            <div className="space-y-3 text-sm">
              <p className="text-deep-teal font-semibold text-base sm:text-lg mb-3">Let's Connect</p>
              <p className="text-warm-gray break-words">
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

          <div className="flex flex-col space-y-3 pt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/services" 
              className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-6 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base font-medium pulse-glow"
            >
              <Book className="mr-2 shrink-0" size={18} /> 
              <span>Explore My Work</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center justify-center border-2 border-sage-green text-sage-green px-6 py-3 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 text-base font-medium story-chapter"
            >
              <Heart className="mr-2 shrink-0" size={18} /> 
              <span>My Story</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Title Section - Full Width with proper padding and spacing */}
          <div className="text-center mb-12 py-12 px-8 safe-text-container">
            <div 
              className="space-y-6 mouse-parallax"
              style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
            >
              <div className="title-safe overflow-visible">
                <h1 className="text-5xl xl:text-6xl font-serif font-bold text-deep-teal leading-tight px-8 py-6">
                  <span className="text-shimmer-safe block">Mette Theilmann</span>
                </h1>
              </div>
              <p className="text-xl xl:text-2xl text-sage-green font-medium gentle-float px-4 py-2">
                Narrative Psychologist | NLP Coach | Parenting Consultant
              </p>
              {/* Desktop Trust Indicators */}
              <div className="flex justify-center items-center gap-8 text-base text-warm-gray animate-fade-in pt-4" style={{ animationDelay: '0.2s' }}>
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

          {/* Content Grid - Better balanced layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main headline with journal feel */}
              <div className="bg-gradient-to-br from-white/70 to-sage-green/5 backdrop-blur-sm rounded-2xl p-8 border border-sage-green/20 story-chapter animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-deep-teal leading-tight mb-6 py-2">
                  Become the author of your own life
                </h2>
                <div className="handwritten-quote text-xl xl:text-2xl font-handwritten text-deep-teal/70 italic border-l-4 border-sage-green/30 pl-6 py-2">
                  Every story can be rewritten. You hold the pen.
                </div>
              </div>
              
              <p className="text-lg text-warm-gray leading-relaxed animate-fade-in prose py-2" style={{ animationDelay: '0.4s' }}>
                Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
              </p>
              
              <p className="text-lg text-warm-gray italic border-l-4 border-blush-pink/30 pl-6 bg-gradient-to-r from-blush-pink/5 to-transparent py-6 rounded-r-xl hover-lift animate-fade-in" style={{ animationDelay: '0.5s' }}>
                "Our identity is not formed in isolation - we develop, heal, and grow through connections with others. People are shaped by people."
              </p>
              
              <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-6 animate-fade-in pt-4" style={{ animationDelay: '0.7s' }}>
                <Link 
                  to="/services" 
                  className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg font-medium pulse-glow whitespace-nowrap"
                >
                  <Book className="mr-3" size={20} /> Explore My Work
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center justify-center border-2 border-sage-green text-deep-teal px-8 py-4 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 hover:shadow-lg text-lg font-medium story-chapter whitespace-nowrap"
                >
                  <Heart className="mr-3" size={20} /> My Story
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:sticky lg:top-8">
              <div 
                className="relative group mouse-parallax story-chapter"
                style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
              >
                <img 
                  src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
                  alt="Mette Nyholm Theilmann - Narrative Psychologist" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[500px] xl:h-[600px] transform group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-3xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Floating quote overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl gentle-float">
                    <p className="handwritten-quote text-base lg:text-lg font-handwritten text-deep-teal italic text-center py-1">
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
              <p className="text-deep-teal font-semibold text-2xl py-2">Let's Begin Your Journey</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base max-w-4xl mx-auto">
                <p className="text-warm-gray break-words">
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
