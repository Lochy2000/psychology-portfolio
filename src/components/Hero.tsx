
import React from 'react';
import { Book, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
      <div className="space-y-6 order-2 lg:order-1">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-deep-teal leading-tight">
            Mette Nyholm Theilmann
          </h1>
          <p className="text-lg sm:text-xl text-sage-green font-medium">
            Narrative Psychologist | NLP Coach | Parenting Consultant
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-deep-teal leading-relaxed">
          Become the author of your own life by rewriting the story you tell yourself and others tell you
        </h2>
        <p className="text-base lg:text-lg text-warm-gray leading-relaxed">
          Let's uncover the limiting beliefs that hold you back from living fully. By releasing what no longer serves you, we can rewrite a story that truly empowers and reflects who you are and want to be.
        </p>
        <p className="text-base lg:text-lg text-warm-gray italic border-l-4 border-gradient-to-b from-blush-pink to-sage-green pl-4 bg-gradient-to-r from-blush-pink/10 to-sage-green/10 p-4 rounded-r-lg">
          "Our identity is not formed in isolation - we develop, heal, and grow through connections with others. People are shaped by people."
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <a 
            href="/services" 
            className="flex items-center justify-center bg-gradient-to-r from-blush-pink via-sage-green to-deep-teal text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-deep-teal hover:to-blush-pink"
          >
            <Book className="mr-2" /> Explore Services
          </a>
          <a 
            href="/about" 
            className="flex items-center justify-center border-2 border-sage-green text-deep-teal px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-gradient-to-r hover:from-sage-green hover:to-blush-pink hover:text-white transition-all duration-300 hover:shadow-xl"
          >
            <Heart className="mr-2" /> About Mette
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="relative group">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
            alt="Mette Nyholm Theilmann - Narrative Psychologist" 
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px] transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/20 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
