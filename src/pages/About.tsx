
import React from 'react';
import { Globe, Heart, BookOpen, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: qualRef, isVisible: qualVisible } = useScrollAnimation();

  const qualifications = [
    "Author and blogger (for schools and companies)",
    "Social Psychology Degree", 
    "Narrative Therapist",
    "Parent, Family & Youth Coach with the Coaching Academy of London",
    "Level 3 City & Guilds 'Working with Parents'",
    "Webster Stratton Group & Facilitation Leader",
    "Family Link Parent Facilitator",
    "NLP practitioner"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blush-pink/10 to-sage-green/15">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal">About Me</h1>
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
            </div>
          </div>
          
          <div ref={contentRef} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 transition-all duration-1000 ${contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-white/80 via-white/70 to-emerald-50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-sage-green/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-deep-teal">My Journey</h2>
                </div>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Since leaving Denmark at 18, I've lived in six countries, raising three children with my Irish husband. 
                  This cross-cultural life has deeply influenced both who I am and how I work.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  I'm passionate about helping others - especially those living away from their home countries - 
                  uncover limiting beliefs, release what no longer serves them, and create an empowered, authentic life.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/80 via-white/70 to-rose-50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blush-pink/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-serif font-bold text-deep-teal">My Philosophy</h2>
                </div>
                <p className="text-warm-gray leading-relaxed mb-4 font-medium">
                  I believe each person is the expert of their own life.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  We all hold the insight, wisdom, and strength to create meaningful change – however life can be busy, 
                  overwhelming, and distracting. Sometimes, we just need space, support, and a gentle guide to reconnect 
                  with that inner knowing and learn how to use it to move forward with clarity and confidence.
                </p>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 group">
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                alt="Mette at the beach - reflecting her journey"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-green/30 via-transparent to-blush-pink/20 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-white/80 via-white/70 to-purple-50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl mb-16 border border-sage-green/20 transition-all duration-1000 ${contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-deep-teal">My Education and Passion</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg lg:text-xl font-serif font-bold text-deep-teal mb-4">
                  Narrative Psychologist | NLP Coach | Parenting Consultant
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  I have always been fascinated by storytelling and how we make sense of our lives through the stories we tell. 
                  These stories shape our identities and influence the choices we make and how in return our environment see and perceive us.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  But sometimes, we can get stuck in stories that no longer serve us - stories that hold us back rather than empower us.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sage-green/10 via-blush-pink/10 to-purple-100/30 rounded-xl p-6 border border-sage-green/20">
                <p className="text-warm-gray leading-relaxed font-medium italic">
                  "By the end of our work together, you will have the tools to rewrite your story - transforming it into a 
                  powerful narrative that supports your well-being and growth."
                </p>
              </div>
            </div>
          </div>

          <div ref={qualRef} className="space-y-8 mb-16">
            <h2 className={`text-2xl lg:text-3xl font-serif font-bold text-deep-teal text-center mb-8 transition-all duration-1000 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
              My Qualifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {qualifications.map((qualification, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-white/80 via-white/70 to-amber-50 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-sage-green/20 group cursor-pointer ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-white flex-shrink-0" size={16} />
                    </div>
                    <span className="text-warm-gray text-sm lg:text-base">{qualification}</span>
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
