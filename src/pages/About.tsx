
import React, { useState } from 'react';
import { Globe, Heart, BookOpen, Sparkles, Award, Users, ChevronDown, GraduationCap, Certificate, Star, CheckCircle, Brain, FileText, School } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useTypewriterOnce } from '../hooks/useTypewriterOnce';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: passionRef, isVisible: passionVisible } = useScrollAnimation();
  const { ref: qualRef, isVisible: qualVisible } = useScrollAnimation();
  const mousePosition = useMouseParallax(0.03);
  const { text: typewriterSubtitle } = useTypewriterOnce({
    text: "Every therapist has their own journey of transformation. Here's mine.",
    speed: 80,
    startDelay: 1000,
  });

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
    { text: "Author and blogger (for schools and companies)", icon: FileText },
    { text: "Social Psychology Degree", icon: GraduationCap }, 
    { text: "Narrative Therapist", icon: Brain },
    { text: "Parent, Family & Youth Coach with the Coaching Academy of London", icon: Star },
    { text: "Level 3 City & Guilds 'Working with Parents'", icon: Certificate },
    { text: "Webster Stratton Group & Facilitation Leader", icon: Users },
    { text: "Family Link Parent Facilitator", icon: Heart },
    { text: "NLP practitioner", icon: CheckCircle }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Unified Hero Section */}
          <div ref={headerRef} className={`relative transition-all duration-1000 ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            {/* Header */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 gentle-float">
                <BookOpen className="text-white" size={28} />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-4 lg:mb-6 leading-tight">
                <span className="text-shimmer-safe">My Story</span>
              </h1>
              <p className="handwritten-quote text-lg lg:text-xl font-handwritten text-warm-gray/80 max-w-2xl mx-auto leading-relaxed min-h-[2em]">
                {typewriterSubtitle}
                <span className="typewriter-cursor text-warm-gray/80">|</span>
              </p>
            </div>
            
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              {/* Image */}
              <div className="relative order-1 group">
                <img 
                  src="https://res.cloudinary.com/dpw2txejq/image/upload/v1748177633/mette-beach_sa2rgp.jpg"
                  alt="Mette at the beach - reflecting her journey"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-blush-pink/10 rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Experience Stats Overlay */}
                <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-sage-green pulse-glow" />
                        <span className="font-bold text-deep-teal text-sm lg:text-base">25+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-sage-green pulse-glow" />
                        <span className="font-bold text-deep-teal text-sm lg:text-base">500+ Clients Supported</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="order-2 space-y-6">
                <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 p-6 lg:p-8 rounded-2xl border border-sage-green/20 hover-lift paper-texture">
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-4 lg:mb-6">Welcome to My World</h2>
                  <p className="text-base lg:text-lg text-warm-gray leading-relaxed prose">
                    I'm Mette, and like you, I've walked the path of questioning, exploring, and rewriting my own story. My journey across six countries has taught me that our narratives shape not just how we see ourselves, but how we move through the world.
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
                    className="p-6 lg:p-8 cursor-pointer hover-lift"
                    onClick={() => toggleSection(story.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center gentle-float">
                          <story.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <span className="text-xs lg:text-sm font-handwritten text-sage-green/70 block mb-1">{story.chapter}</span>
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-2">{story.title}</h3>
                          <p className="text-warm-gray text-base lg:text-lg">{story.summary}</p>
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
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        <div className="space-y-4">
                          {story.fullContent.split('\n').map((paragraph, i) => (
                            paragraph.trim() && (
                              <p key={i} className="text-warm-gray leading-relaxed prose text-sm lg:text-base">
                                {paragraph.trim()}
                              </p>
                            )
                          ))}
                        </div>
                        <div className="relative">
                          <img 
                            src={story.backgroundImage}
                            alt={`Visual representation of ${story.title}`}
                            className="rounded-xl shadow-lg object-cover w-full h-[250px] lg:h-[300px] hover:scale-105 transition-transform duration-500"
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

          {/* Qualifications Section */}
          <div ref={qualRef} className="space-y-8 pb-12">
            <div className={`text-center mb-12 transition-all duration-1000 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-sage-green rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
                <Award className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal mb-6">My Professional Journey</h2>
              <div className="handwritten-quote text-base lg:text-lg font-handwritten text-warm-gray/80 max-w-2xl mx-auto leading-relaxed">
                Every qualification tells a story of growth, learning, and deepening understanding.
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl p-6 lg:p-12 border border-sage-green/20 paper-texture">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {qualifications.map((qualification, index) => {
                  const IconComponent = qualification.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-white/60 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-sage-green/10 hover-lift ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-deep-teal/90 rounded-lg flex items-center justify-center mt-1 shadow-sm">
                          <IconComponent className="text-white" size={12} />
                        </div>
                        <span className="text-warm-gray font-medium leading-relaxed text-sm lg:text-base">{qualification.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
