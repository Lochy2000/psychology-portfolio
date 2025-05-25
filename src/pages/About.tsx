
import React from 'react';
import { Globe, Heart, BookOpen, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-blush-pink/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-blush-pink" size={24} />
              <h1 className="text-4xl font-serif font-bold text-deep-teal">About Me</h1>
              <Sparkles className="text-blush-pink" size={24} />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16 animate-fade-in">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-sage-green" size={24} />
                  <h2 className="text-2xl font-serif font-bold text-deep-teal">My Journey</h2>
                </div>
                <p className="text-warm-gray leading-relaxed">
                  Since leaving Denmark at 18, I've lived in six countries, raising three children with my Irish husband. 
                  This cross-cultural life has deeply influenced both who I am and how I work.
                </p>
                <p className="text-warm-gray leading-relaxed mt-4">
                  I'm passionate about helping others - especially those living away from their home countries - 
                  uncover limiting beliefs, release what no longer serves them, and create an empowered, authentic life.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-blush-pink" size={24} />
                  <h2 className="text-2xl font-serif font-bold text-deep-teal">My Philosophy</h2>
                </div>
                <p className="text-warm-gray leading-relaxed mb-4">
                  I believe each person is the expert of their own life.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  We all hold the insight, wisdom, and strength to create meaningful change – however life can be busy, 
                  overwhelming, and distracting. Sometimes, we just need space, support, and a gentle guide to reconnect 
                  with that inner knowing and learn how to use it to move forward with clarity and confidence.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                alt="Mette at the beach - reflecting her journey"
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-green/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-sage-green" size={24} />
              <h2 className="text-3xl font-serif font-bold text-deep-teal">My Education and Passion</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-deep-teal mb-4">
                  Narrative Psychologist | NLP Coach | Parenting Consultant
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  I have always been fascinated by storytelling and how we make sense of our lives through the stories we tell. 
                  These stories shape our identities and influence the choices we make and how in return our environment see and perceive us.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  But sometimes, we can get stuck in stories that no longer serve us - stories that hold us back rather than empower us.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Together, we will embark on a journey of curiosity and exploration. We will look at the origins of your story - 
                  who shaped it and how. We will uncover the counter-stories that exist alongside the problem narrative, 
                  and we will separate the problem from who you truly are.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-xl p-6">
                <p className="text-warm-gray leading-relaxed font-medium">
                  "By the end of our work together, you will have the tools to rewrite your story - transforming it into a 
                  powerful narrative that supports your well-being and growth."
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-16 animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-deep-teal text-center mb-8">
              My Qualifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/90"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-sage-green flex-shrink-0" size={20} />
                    <span className="text-warm-gray">{qualification}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
