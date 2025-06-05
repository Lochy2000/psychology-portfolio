
import React from 'react';
import { Book, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        {/* Title and subtitle above image on mobile */}
        <div className="px-6 py-6 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-serif font-bold text-deep-teal">
              Mette Theilmann
            </h1>
            <p className="text-base font-medium text-sage-green">
              Narrative Psychologist | NLP Coach | Parenting Consultant
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative h-[45vh] overflow-hidden rounded-2xl mx-6 mb-6">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
            alt="Mette Nyholm Theilmann - Narrative Psychologist" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-transparent rounded-2xl"></div>
        </div>
        
        {/* Content below image on mobile */}
        <div className="px-6 pb-8 space-y-6">
          <h2 className="text-xl font-serif font-bold text-deep-teal leading-relaxed">
            Become the author of your own life by rewriting the story you tell yourself and others tell you
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-5 rounded-xl border border-sage-green/20">
            <div className="space-y-2 text-sm">
              <p className="text-deep-teal font-semibold">Get in touch:</p>
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

          <div className="flex flex-col space-y-3 pt-2">
            <a 
              href="/services" 
              className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base font-medium"
            >
              <Book className="mr-2" size={18} /> Explore Services
            </a>
            <a 
              href="/about" 
              className="flex items-center justify-center border-2 border-sage-green text-sage-green px-6 py-3 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 text-base font-medium"
            >
              <Heart className="mr-2" size={18} /> About
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-3">
            <h1 className="text-5xl font-serif font-bold text-deep-teal">
              Mette Theilmann
            </h1>
            <p className="text-xl text-sage-green font-medium">
              Narrative Psychologist | NLP Coach | Parenting Consultant
            </p>
          </div>
          <h2 className="text-3xl font-serif font-bold text-deep-teal leading-relaxed">
            Become the author of your own life by rewriting the story you tell yourself and others tell you
          </h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
          </p>
          <p className="text-lg text-warm-gray italic border-l-4 border-sage-green pl-6 bg-gradient-to-r from-sage-green/5 to-transparent py-4 rounded-r-lg">
            "Our identity is not formed in isolation - we develop, heal, and grow through connections with others. People are shaped by people."
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-6 rounded-xl border border-sage-green/20">
            <div className="space-y-4">
              <p className="text-deep-teal font-semibold text-lg">Get in touch:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                <p className="text-warm-gray">
                  <span className="font-medium">Email:</span><br />
                  mette@metteteilmann.com
                </p>
                <p className="text-warm-gray">
                  <span className="font-medium">Mobile (France):</span><br />
                  0033 745 233 230
                </p>
                <p className="text-warm-gray md:col-span-1">
                  <span className="font-medium">Mobile (UK):</span><br />
                  0447 756 918 126
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="/services" 
              className="flex items-center justify-center bg-gradient-to-r from-sage-green to-blush-pink text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-medium"
            >
              <Book className="mr-2" /> Explore Services
            </a>
            <a 
              href="/about" 
              className="flex items-center justify-center border-2 border-sage-green text-deep-teal px-8 py-4 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 hover:shadow-lg text-lg font-medium"
            >
              <Heart className="mr-2" /> About
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative group">
            <img 
              src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
              alt="Mette Nyholm Theilmann - Narrative Psychologist" 
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px] transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
