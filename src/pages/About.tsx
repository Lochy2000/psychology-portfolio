
import React from 'react';
import { Globe, Heart, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-deep-teal mb-8 text-center">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Mette - Narrative Psychologist"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-deep-teal mb-4">My Journey</h2>
                <p className="text-warm-gray">
                  I am Danish by birth, but my journey has taken me around the world. Since I was 18, 
                  I've lived in six different countries, raising three children with my Irish husband. 
                  This unique blend of cultures has shaped both my personal and professional life.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-bold text-deep-teal mb-4">My Philosophy</h2>
                <p className="text-warm-gray">
                  I believe that people are the experts of their own lives. Every individual has the 
                  knowledge, wisdom, and insight to create change and growth in their own way. But 
                  sometimes we just need a little support to find this force and some steps in how 
                  to use them to our benefits.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-serif font-bold text-deep-teal text-center mb-8">
              My Qualifications
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Author and blogger (for schools and companies)",
                "Social Psychology Degree",
                "Narrative Therapist",
                "Parent, Family & Youth Coach with the Coaching Academy of London",
                "Level 3 City & Guilds 'Working with Parents'",
                "Webster Stratton Group & Facilitation Leader",
                "Family Link Parent Facilitator",
                "NLP practitioner"
              ].map((qualification, index) => (
                <li 
                  key={index}
                  className="bg-white/50 p-4 rounded-lg shadow-sm flex items-center gap-3"
                >
                  <BookOpen className="text-sage-green" size={20} />
                  <span className="text-warm-gray">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
