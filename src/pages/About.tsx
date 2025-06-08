
import React, { useState } from 'react';
import { Globe, Heart, BookOpen, Sparkles, Award, Users, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: passionRef, isVisible: passionVisible } = useScrollAnimation();
  const { ref: qualRef, isVisible: qualVisible } = useScrollAnimation();
  const mousePosition = useMouseParallax(0.03);

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const aboutStories = [
    {
      id: 'journey',
      icon: Globe,
      chapter: 'Chapter One',
      title: 'My Journey Across Cultures',
      summary: 'From Denmark to six countries, raising three children with my Irish husband.',
      fullContent: `Since leaving Denmark at 18, I've lived in six countries, raising three children with my Irish husband. This cross-cultural life has deeply influenced both who I am and how I work.

I'm passionate about helping others - especially those living away from their home countries - uncover limiting beliefs, release what no longer serves them, and create an empowered, authentic life.

Living in different cultures has taught me the power of perspective and how our environment shapes our stories. This experience allows me to understand the unique challenges faced by expats and those navigating cultural transitions.

Each move taught me something new about resilience, adaptation, and the stories we tell ourselves about home, belonging, and identity.`,
      backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
    },
    {
      id: 'philosophy',
      icon: Heart,
      chapter: 'Chapter Two',
      title: 'My Core Philosophy',
      summary: 'You are the expert of your own life, holding all the wisdom you need.',
      fullContent: `I believe each person is the expert of their own life.

We all hold the insight, wisdom, and strength to create meaningful change – however life can be busy, overwhelming, and distracting. Sometimes, we just need space, support, and a gentle guide to reconnect with that inner knowing and learn how to use it to move forward with clarity and confidence.

My role is not to fix you or provide all the answers, but to create a safe space where you can explore, question, and rediscover your own truth. Together, we'll uncover the stories that shape your life and help you rewrite them in a way that truly serves you.

This approach honors your autonomy while providing the guidance and support you need to navigate your journey of transformation.`,
      backgroundImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop'
    },
    {
      id: 'passion',
      icon: BookOpen,
      chapter: 'Chapter Three',
      title: 'The Power of Story',
      summary: 'How narratives shape our identities and the magic of rewriting them.',
      fullContent: `I have always been fascinated by storytelling and how we make sense of our lives through the stories we tell. These stories shape our identities and influence the choices we make and how in return our environment see and perceive us.

But sometimes, we can get stuck in stories that no longer serve us - stories that hold us back rather than empower us.

Together, we will embark on a journey of curiosity and exploration. We will look at the origins of your story - who shaped it and how. We will uncover the counter-stories that exist alongside the problem narrative, and we will separate the problem from who you truly are.

By the end of our work together, you will have the tools to rewrite your story - transforming it into a powerful narrative that supports your well-being and growth.

This is where the real magic happens - when you realize you've always held the pen.`,
      backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop'
    }
  ];

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

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header - Book Opening */}
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="relative py-8">
              <div className="w-24 h-24 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
                <BookOpen className="text-white" size={32} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-4 text-shimmer leading-tight">My Story</h1>
              <div className="handwritten-quote text-xl font-handwritten text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
                Every therapist has their own journey of transformation. Here's mine.
              </div>
              
              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 text-sm text-warm-gray mt-8">
                <div className="flex items-center gap-2 hover-lift">
                  <Award size={18} className="text-sage-green pulse-glow" />
                  <span className="font-medium">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 hover-lift">
                  <Users size={18} className="text-sage-green pulse-glow" />
                  <span className="font-medium">500+ Clients Supported</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Portrait */}
          <div className="relative mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1 group mouse-parallax" 
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
                <img 
                  src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                  alt="Mette at the beach - reflecting her journey"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <p className="handwritten-quote text-lg font-handwritten text-deep-teal italic">
                      "Our identity is not formed in isolation - we develop, heal, and grow through connections with others."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-8 rounded-2xl border border-sage-green/20 hover-lift paper-texture">
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-deep-teal mb-6">Welcome to My World</h2>
                  <p className="text-lg text-warm-gray leading-relaxed mb-4 prose">
                    I'm Mette, and like you, I've walked the path of questioning, exploring, and rewriting my own story. My journey across six countries has taught me that our narratives shape not just how we see ourselves, but how we move through the world.
                  </p>
                  <p className="text-base text-warm-gray leading-relaxed prose">
                    Through years of study, practice, and my own personal transformation, I've discovered that the most powerful tool we have is our ability to rewrite the stories that no longer serve us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Chapters - Expandable Sections */}
          <div className="space-y-8 mb-20">
            {aboutStories.map((story, index) => (
              <div 
                key={story.id}
                ref={index === 0 ? journeyRef : index === 1 ? philosophyRef : passionRef}
                className={`story-chapter paper-texture transition-all duration-1000 ${
                  (index === 0 && journeyVisible) || (index === 1 && philosophyVisible) || (index === 2 && passionVisible)
                    ? 'story-reveal' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-sage-green/10 overflow-hidden">
                  {/* Chapter Header */}
                  <div 
                    className="p-8 cursor-pointer hover-lift"
                    onClick={() => toggleSection(story.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center gentle-float">
                          <story.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <span className="text-sm font-handwritten text-sage-green/70 block mb-1">{story.chapter}</span>
                          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-deep-teal mb-2">{story.title}</h3>
                          <p className="text-warm-gray text-lg">{story.summary}</p>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`text-sage-green transition-transform duration-300 ${
                          expandedSection === story.id ? 'rotate-180' : ''
                        }`} 
                        size={24} 
                      />
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedSection === story.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                          {story.fullContent.split('\n').map((paragraph, i) => (
                            paragraph.trim() && (
                              <p key={i} className="text-warm-gray leading-relaxed prose">
                                {paragraph.trim()}
                              </p>
                            )
                          ))}
                        </div>
                        <div className="relative">
                          <img 
                            src={story.backgroundImage}
                            alt={`Visual representation of ${story.title}`}
                            className="rounded-xl shadow-lg object-cover w-full h-[300px] hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 to-transparent rounded-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Qualifications - Redesigned as Story Elements */}
          <div ref={qualRef} className="space-y-8 pb-16">
            <div className={`text-center mb-12 transition-all duration-1000 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-sage-green rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-4">My Professional Journey</h2>
              <div className="handwritten-quote text-lg font-handwritten text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
                Every qualification tells a story of growth, learning, and deepening understanding.
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl p-8 lg:p-12 border border-sage-green/20 paper-texture">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {qualifications.map((qualification, index) => (
                  <div 
                    key={index}
                    className={`bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-sage-green/10 hover-lift ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mt-1">
                        <BookOpen className="text-white" size={14} />
                      </div>
                      <span className="text-warm-gray font-medium leading-relaxed">{qualification}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
