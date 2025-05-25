
import React, { useState } from 'react';
import { Globe, Heart, BookOpen, Sparkles, X } from 'lucide-react';
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

Living in different cultures has taught me the power of perspective and how our environment shapes our stories. This experience allows me to understand the unique challenges faced by expats and those navigating cultural transitions.`,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconBg: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'philosophy',
      icon: Heart,
      title: 'My Philosophy',
      summary: 'Each person is the expert of their own life, holding the wisdom for meaningful change.',
      fullContent: `I believe each person is the expert of their own life.

We all hold the insight, wisdom, and strength to create meaningful change – however life can be busy, overwhelming, and distracting. Sometimes, we just need space, support, and a gentle guide to reconnect with that inner knowing and learn how to use it to move forward with clarity and confidence.

My role is not to fix you or provide all the answers, but to create a safe space where you can explore, question, and rediscover your own truth. Together, we'll uncover the stories that shape your life and help you rewrite them in a way that truly serves you.`,
      gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
      iconBg: 'from-rose-500 to-pink-600'
    },
    {
      id: 'passion',
      icon: BookOpen,
      title: 'My Education & Passion',
      summary: 'Fascinated by storytelling and how narratives shape our identities and choices.',
      fullContent: `I have always been fascinated by storytelling and how we make sense of our lives through the stories we tell. These stories shape our identities and influence the choices we make and how in return our environment see and perceive us.

But sometimes, we can get stuck in stories that no longer serve us - stories that hold us back rather than empower us.

Together, we will embark on a journey of curiosity and exploration. We will look at the origins of your story - who shaped it and how. We will uncover the counter-stories that exist alongside the problem narrative, and we will separate the problem from who you truly are.

By the end of our work together, you will have the tools to rewrite your story - transforming it into a powerful narrative that supports your well-being and growth.`,
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      iconBg: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blush-pink/5 to-sage-green/10 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-sage-green/10 to-deep-teal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-blush-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
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
              {aboutSections.map((section, index) => (
                <Dialog key={section.id}>
                  <DialogTrigger asChild>
                    <div className={`bg-gradient-to-br from-white/90 via-white/80 to-transparent backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 cursor-pointer group relative overflow-hidden ${contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${section.iconBg} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <section.icon className="text-white" size={24} />
                          </div>
                          <h2 className="text-xl lg:text-2xl font-serif font-bold text-deep-teal">{section.title}</h2>
                        </div>
                        <p className="text-warm-gray leading-relaxed mb-4">{section.summary}</p>
                        <div className="text-sage-green font-medium text-sm hover:text-deep-teal transition-colors duration-300">
                          Read More →
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-white via-white/95 to-blush-pink/10">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif font-bold text-deep-teal flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${section.iconBg} rounded-full flex items-center justify-center`}>
                          <section.icon className="text-white" size={20} />
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
              <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-blush-pink/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
              <img 
                src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                alt="Mette at the beach - reflecting her journey"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px] transform group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-green/20 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-20"></div>
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
                  className={`bg-gradient-to-br from-white/90 via-white/80 to-transparent backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/30 group cursor-pointer relative overflow-hidden ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="text-white flex-shrink-0" size={16} />
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
