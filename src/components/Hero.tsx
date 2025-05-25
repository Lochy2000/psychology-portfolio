
import React from 'react';
import { Book, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-bold text-deep-teal leading-tight">
            Mette Nyholm Theilmann
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
        <p className="text-lg text-warm-gray italic border-l-4 border-blush-pink pl-4">
          "Our identity is not formed in isolation - we develop, heal, and grow through connections with others. People are shaped by people."
        </p>
        <div className="flex space-x-4 pt-4">
          <a 
            href="/services" 
            className="flex items-center bg-gradient-to-r from-blush-pink to-sage-green text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Book className="mr-2" /> Explore Services
          </a>
          <a 
            href="/about" 
            className="flex items-center border-2 border-sage-green text-deep-teal px-8 py-4 rounded-full hover:bg-sage-green hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            <Heart className="mr-2" /> About Mette
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative">
          <img 
            src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177635/mette-website_baxurn.jpg" 
            alt="Mette Nyholm Theilmann - Narrative Psychologist" 
            className="rounded-2xl shadow-2xl object-cover w-full h-[600px] transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
