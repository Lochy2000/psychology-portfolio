
import React from 'react';
import { Globe, Heart, BookOpen, Sparkles, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

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

  const aboutSections = [
    {
      id: 'journey',
      icon: Globe,
      title: 'My Journey',
      summary: 'Cross-cultural life shaping my approach to helping others uncover their authentic selves.',
      fullContent: `Since leaving Denmark at 18, I've lived in six countries, raising three children with my Irish husband. This cross-cultural life has deeply influenced both who I am and how I work.

I'm passionate about helping others - especially those living away from their home countries - uncover limiting beliefs, release what no longer serves them, and create an empowered, authentic life.

Living in different cultures has taught me the power of perspective and how our environment shapes our stories. This experience allows me to understand the unique challenges faced by expats and those navigating cultural transitions.`
    },
    {
      id: 'philosophy',
      icon: Heart,
      title: 'My Philosophy',
      summary: 'Each person is the expert of their own life, holding the wisdom for meaningful change.',
      fullContent: `I believe each person is the expert of their own life.

We all hold the insight, wisdom, and strength to create meaningful change – however life can be busy, overwhelming, and distracting. Sometimes, we just need space, support, and a gentle guide to reconnect with that inner knowing and learn how to use it to move forward with clarity and confidence.

My role is not to fix you or provide all the answers, but to create a safe space where you can explore, question, and rediscover your own truth. Together, we'll uncover the stories that shape your life and help you rewrite them in a way that truly serves you.`
    },
    {
      id: 'passion',
      icon: BookOpen,
      title: 'My Education & Passion',
      summary: 'Fascinated by storytelling and how narratives shape our identities and choices.',
      fullContent: `I have always been fascinated by storytelling and how we make sense of our lives through the stories we tell. These stories shape our identities and influence the choices we make and how in return our environment see and perceive us.

But sometimes, we can get stuck in stories that no longer serve us - stories that hold us back rather than empower us.

Together, we will embark on a journey of curiosity and exploration. We will look at the origins of your story - who shaped it and how. We will uncover the counter-stories that exist alongside the problem narrative, and we will separate the problem from who you truly are.

By the end of our work together, you will have the tools to rewrite your story - transforming it into a powerful narrative that supports your well-being and growth.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal">About Me</h1>
              <Sparkles className="text-blush-pink animate-pulse" size={24} />
            </div>
            
            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-6 text-sm text-warm-gray mt-4">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-sage-green" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-sage-green" />
                <span>500+ Clients Supported</span>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div ref={contentRef} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 transition-all duration-1000 ${contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6 order-2 lg:order-1">
              {aboutSections.map((section, index) => (
                <Dialog key={section.id}>
                  <DialogTrigger asChild>
                    <div className={`bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-sage-green/10 cursor-pointer group ${contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <section.icon className="text-white" size={20} />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-serif font-bold text-deep-teal">{section.title}</h2>
                      </div>
                      <p className="text-warm-gray leading-relaxed mb-4 text-base">{section.summary}</p>
                      <div className="text-sage-green font-medium text-sm hover:text-deep-teal transition-colors duration-300">
                        Read More →
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-white via-white/95 to-blush-pink/10">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif font-bold text-deep-teal flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center">
                          <section.icon className="text-white" size={16} />
                        </div>
                        {section.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-warm-gray leading-relaxed">
                      {section.fullContent.split('\n').map((paragraph, i) => (
                        paragraph.trim() && (
                          <p key={i} className="text-base">
                            {paragraph.trim()}
                          </p>
                        )
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            
            <div className="relative order-1 lg:order-2 group">
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                alt="Mette at the beach - reflecting her journey"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Qualifications */}
          <div ref={qualRef} className="space-y-8">
            <h2 className={`text-2xl lg:text-3xl font-serif font-bold text-deep-teal text-center mb-8 transition-all duration-1000 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
              My Qualifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {qualifications.map((qualification, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-sage-green/10 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center">
                      <BookOpen className="text-white" size={12} />
                    </div>
                    <span className="text-warm-gray text-sm lg:text-base font-medium">{qualification}</span>
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
