import React, { useState } from 'react';
import { Globe, Heart, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutStory = () => {
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();
  const { ref: passionRef, isVisible: passionVisible } = useScrollAnimation();
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

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-6 mb-24">
      {aboutStories.map((story, index) => (
        <div 
          key={story.id}
          ref={index === 0 ? journeyRef : index === 1 ? philosophyRef : passionRef}
          className={`story-chapter transition-all duration-1000 ${
            (index === 0 && journeyVisible) || (index === 1 && philosophyVisible) || (index === 2 && passionVisible)
              ? 'story-reveal' : 'opacity-0 translate-y-10'
          }`}
          data-expanded={expandedSection === story.id}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-100 hover:border-sage-green/30 overflow-hidden">
            {/* Chapter Header */}
            <button 
              className="w-full text-left p-6 lg:p-8 cursor-pointer transition-all duration-300 hover:bg-sage-green/5 group dropdown-trigger focus:outline-none focus:ring-2 focus:ring-sage-green/30 focus:bg-sage-green/5"
              onClick={() => toggleSection(story.id)}
              data-mobile-dropdown
              aria-expanded={expandedSection === story.id}
              aria-label={`${expandedSection === story.id ? 'Close' : 'Open'} ${story.title} section`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-white border-2 border-sage-green/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-sage-green group-hover:shadow-md">
                    <story.icon className="text-deep-teal" size={28} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs lg:text-sm font-handwritten text-sage-green block mb-1 font-medium">{story.chapter}</span>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-2">{story.title}</h3>
                    <p className="text-gray-700 text-base lg:text-lg">{story.summary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden lg:inline text-xs text-sage-green font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {expandedSection === story.id ? 'Click to close' : 'Click to read more'}
                  </span>
                  <ChevronDown 
                    className={`text-sage-green/60 transition-all duration-300 group-hover:text-sage-green ${
                      expandedSection === story.id ? 'rotate-180 text-sage-green' : ''
                    }`} 
                    size={24} 
                  />
                </div>
              </div>
            </button>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-500 ${
              expandedSection === story.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                <div className="pt-6 lg:pt-8">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div className="space-y-4">
                      {story.fullContent.split('\n').map((paragraph, i) => (
                        paragraph.trim() && (
                          <p key={i} className="text-gray-700 leading-relaxed text-sm lg:text-base">
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
        </div>
      ))}
    </div>
  );
};

export default AboutStory;