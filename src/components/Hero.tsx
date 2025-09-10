
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Award, Users } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const mousePosition = useMouseParallax(0.05);
  const { text: typewriterText } = useTypewriter({
    words: ['life', 'world', 'surroundings', 'mind', 'story', 'journey'],
    speed: 120,
    deleteSpeed: 80,
    pauseTime: 1800,
    loop: true,
  });

  return (
    <section className="relative animated-background paper-texture pt-0 pb-6 lg:py-8">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 py-2">
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Main Content First - Better Hierarchy */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-serif font-bold text-deep-teal leading-tight">
              Become the author of your own{' '}
              <span className="relative">
                <span className="text-sage-green">{typewriterText}</span>
                <span className="typewriter-cursor text-sage-green">|</span>
              </span>
            </h1>
            <p className="text-base text-warm-gray leading-relaxed max-w-lg mx-auto">
              Let's uncover the limiting beliefs that hold you back from living fully and rewrite your story.
            </p>
          </div>

          {/* Professional Image */}
          <div className="relative mx-auto max-w-xs">
            <div className="relative rounded-2xl overflow-hidden story-chapter group">
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
                alt="Professional Portrait" 
                className="w-full h-60 object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent rounded-2xl"></div>
              {/* Floating credentials overlay - smaller for mobile */}
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-xl">
                  <p className="text-[10px] font-medium text-deep-teal text-center mb-1">
                    Narrative Therapist | NLP Coach
                  </p>
                  <div className="flex justify-center items-center gap-2 text-[10px] text-warm-gray">
                    <div className="flex items-center gap-0.5">
                      <Award size={8} className="text-sage-green" />
                      <span>25+ Years</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Users size={8} className="text-sage-green" />
                      <span>500+ Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-2">
            <Link 
              to="/services" 
              className="flex items-center justify-center bg-sage-green text-white px-4 py-2.5 rounded-full hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-sm font-medium"
            >
              <Book className="mr-1.5" size={16} /> 
              <span>Explore My Work</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center justify-center border-2 border-sage-green text-sage-green px-4 py-2.5 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Heart className="mr-1.5" size={16} /> 
              <span>My Story</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full px-6 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid - Tighter Spacing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-deep-teal leading-tight">
                  Become the author of your own{' '}
                  <span className="relative">
                    <span className="text-sage-green">{typewriterText}</span>
                    <span className="typewriter-cursor text-sage-green">|</span>
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-warm-gray leading-relaxed">
                  Uncover limiting beliefs. Rewrite your story. Live authentically.
                </p>
              </div>
              
              <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-4">
                <Link 
                  to="/services" 
                  className="flex items-center justify-center bg-sage-green text-white px-6 py-3 rounded-full hover:shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 text-base lg:text-lg font-medium whitespace-nowrap"
                >
                  <Book className="mr-2" size={18} /> Explore My Work
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center justify-center border-2 border-sage-green text-deep-teal px-6 py-3 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 hover:shadow-lg text-base lg:text-lg font-medium whitespace-nowrap"
                >
                  <Heart className="mr-2" size={18} /> My Story
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative group story-chapter">
                <img 
                  src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
                  alt="Professional Portrait" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[450px] xl:h-[500px] transform group-hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 via-transparent to-blush-pink/10 rounded-3xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Credentials card on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                    <p className="text-sm lg:text-base font-medium text-deep-teal text-center mb-3">
                      Narrative Therapist | Psychology Background | NLP Coach | Parenting Consultant
                    </p>
                    <div className="flex justify-center items-center gap-6 text-sm text-warm-gray">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-sage-green" />
                        <span className="font-medium">25+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-sage-green" />
                        <span className="font-medium">500+ Clients Supported</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
