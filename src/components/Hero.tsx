
import React from 'react';
import { Book, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-serif font-bold mb-6 text-deep-teal">
          Rewrite Your Life's Narrative
        </h1>
        <p className="text-xl text-warm-gray mb-8">
          Guiding individuals through transformative change with passion and professionalism. Let's bring to the surface those limited beliefs that hold you back from living a full life.
        </p>
        <div className="flex space-x-4">
          <a 
            href="/services" 
            className="flex items-center bg-blush-pink text-deep-teal px-6 py-3 rounded-full hover:bg-sage-green transition-colors"
          >
            <Book className="mr-2" /> Services
          </a>
          <a 
            href="/about" 
            className="flex items-center border-2 border-sage-green text-deep-teal px-6 py-3 rounded-full hover:bg-sage-green hover:text-white transition-colors"
          >
            <Heart className="mr-2" /> About Mette
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1588348981396-71c6c9d74149" 
          alt="Narrative Psychology Session" 
          className="rounded-xl shadow-lg object-cover w-full h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
