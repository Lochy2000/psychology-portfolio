
import React, { useState } from 'react';
import { Brain, Users, Heart, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();
  const mousePosition = useMouseParallax(0.02);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'narrative',
      title: "Narrative Psychology",
      icon: Brain,
      summary: "Explore and challenge the stories that shape your identity. Transform limiting beliefs into empowering narratives.",
      pullQuote: "\"We are the stories we tell ourselves\"",
      fullContent: `As a Narrative Psychologist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society.

These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential.

I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power. It's not about changing who you are or denying what the past brought you.

It's about helping you accept it and by becoming the author of your own life - not only cope but fully thrive.`,
      gradient: 'from-purple-100/80 via-indigo-50/60 to-transparent',
      iconBg: 'from-purple-500 to-indigo-600',
      illustration: '📖'
    },
    {
      id: 'nlp',
      title: "NLP Coaching", 
      icon: Users,
      summary: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action toward your desired life.",
      pullQuote: "\"Change your thoughts, change your world\"",
      fullContent: `As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.

Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.

Together, we'll identify the unconscious patterns that may be holding you back and replace them with empowering strategies that support your growth and success.`,
      gradient: 'from-emerald-100/80 via-teal-50/60 to-transparent',
      iconBg: 'from-emerald-500 to-teal-600',
      illustration: '🌱'
    },
    {
      id: 'parenting',
      title: "Parenting Support",
      icon: Heart, 
      summary: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
      pullQuote: "\"Children learn who they are through our eyes\"",
      fullContent: `As a Parenting Consultant, I support parents in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness.

Having worked with parents for over 25 years, I bring deep insight and compassion to the journey of parenting. My approach focuses on curiosity and exploration, creating safe spaces to question existing narratives.

I specialize in:
• Parenting before, during, and after divorce
• Parenting an expat family
• Navigating family, life, and work balance
• Empowering parents with confidence
• Supporting guilt-free work-life integration

Together, we'll create a new narrative that reflects how you want your family life to feel, look, and sound.`,
      gradient: 'from-rose-100/80 via-pink-50/60 to-transparent',
      iconBg: 'from-rose-500 to-pink-600',
      illustration: '🤗'
    },
    {
      id: 'heredge-local',
      title: "HerEdge Côte d'Azur",
      icon: Building2,
      summary: "Local networking and support for women in the French Riviera region.",
      pullQuote: "\"Together we rise\"",
      fullContent: `HerEdge Côte d'Azur is our local chapter dedicated to supporting women in the French Riviera region.

We create opportunities for networking, professional development, and personal growth specifically tailored to the unique needs of women living and working on the Côte d'Azur.

Our local initiatives include:
• Monthly networking events
• Professional mentorship programs
• Work-life balance workshops
• Cultural integration support for expat women
• Local business development opportunities

Join our community of empowered women making their mark on the French Riviera.`,
      gradient: 'from-blue-100/80 via-teal-50/60 to-transparent',
      iconBg: 'from-blue-500 to-teal-600',
      illustration: '🌊'
    },
    {
      id: 'heredge-corporate',
      title: "HerEdge Corporate Support",
      icon: Building2,
      summary: "Creating workplaces where women are truly seen, supported, and empowered beyond simple representation.",
      pullQuote: "\"Representation is just the beginning\"",
      fullContent: `At HerEdge Corporate, we go beyond checking boxes for female representation in the workplace - we help companies create workplaces where women are truly seen, supported, and empowered.

Together with my professional team, we partner with organizations to build systems that prioritize women's well-being, professional growth, and inclusion.

How we work:
• Consultation: Company-wide assessment and vision clarification
• Workshops & Webinars: Tailored sessions on work-life balance, parenting, menopause, health & wellbeing
• Accountability & Networking: Communities where female leaders connect and stay accountable
• Membership Community: Exclusive platform for professional development

We believe true progress includes everyone. That's why we actively engage men - educating and empowering them to become allies in creating more equitable workplaces.`,
      gradient: 'from-amber-100/80 via-orange-50/60 to-transparent',
      iconBg: 'from-amber-500 to-orange-600',
      illustration: '🏢'
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/90 to-blush-pink/15 relative overflow-hidden animated-background">
      {/* Floating decorative elements - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-4 sm:right-10 text-4xl sm:text-6xl opacity-10 animate-gentle-pulse">📚</div>
        <div className="absolute bottom-32 left-4 sm:left-10 text-3xl sm:text-4xl opacity-15 animate-gentle-pulse" style={{ animationDelay: '2s' }}>✨</div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <div 
            className="handwritten-quote text-lg sm:text-xl text-deep-teal/70 mb-4 mouse-parallax"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          >
            "Every story can be rewritten..."
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-deep-teal mb-4 sm:mb-6 text-shimmer px-4">
            Chapters of Transformation
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-warm-gray max-w-3xl mx-auto leading-relaxed px-4">
            Journey through the different ways we can work together to rewrite your story and step into your personal power.
          </p>
        </div>
        
        {/* Services as Story Chapters */}
        <section ref={servicesRef} className="mb-12 sm:mb-20">
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`story-chapter bg-gradient-to-br from-white/90 via-white/80 to-transparent backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/30 transition-all duration-700 hover:shadow-2xl ${servicesVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Chapter Header */}
                <div 
                  className={`p-6 sm:p-8 lg:p-12 bg-gradient-to-br ${service.gradient} cursor-pointer group relative overflow-hidden`}
                  onClick={() => toggleService(service.id)}
                >
                  {/* Responsive decorative illustration */}
                  <div className="absolute top-4 right-4 text-2xl sm:text-3xl lg:text-4xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {service.illustration}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                        {/* Responsive icon sizing */}
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <service.icon className="text-white" size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-sm sm:text-base text-warm-gray/70 font-medium">Chapter {index + 1}</span>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-deep-teal break-words">{service.title}</h3>
                        </div>
                      </div>
                      
                      <div className="handwritten-quote text-base sm:text-lg lg:text-xl text-deep-teal/80 mb-4 font-serif">
                        {service.pullQuote}
                      </div>
                      
                      <p className="text-warm-gray leading-relaxed text-base sm:text-lg lg:text-xl max-w-none pr-0 sm:pr-12">
                        {service.summary}
                      </p>
                    </div>
                    
                    {/* Responsive chevron button */}
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0 self-center sm:self-start">
                      {expandedService === service.id ? 
                        <ChevronUp className="text-deep-teal" size={16} /> : 
                        <ChevronDown className="text-deep-teal" size={16} />
                      }
                    </div>
                  </div>
                </div>
                
                {/* Expandable Content - improved overflow handling */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  expandedService === service.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 sm:p-8 lg:p-12 bg-white/50 backdrop-blur-sm border-t border-white/30">
                    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-warm-gray leading-relaxed">
                      {service.fullContent.split('\n').map((paragraph, i) => (
                        paragraph.trim() && (
                          <p key={i} className="mb-4 break-words">
                            {paragraph.trim()}
                          </p>
                        )
                      ))}
                    </div>
                    <div className="mt-6 sm:mt-8 text-center">
                      <button className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base">
                        Let's start your story today →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Approach - responsive improvements */}
        <section ref={approachRef} className="mb-12 sm:mb-20">
          <div className={`bg-gradient-to-br from-white/90 via-white/80 to-sage-green/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/30 transition-all duration-1000 ${approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <div className="handwritten-quote text-base sm:text-lg text-warm-gray/80 mb-4">
                "The journey of a thousand miles begins with a single step..."
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-deep-teal px-4">
                The Path We Walk Together
              </h2>
            </div>
            
            <div className="relative">
              {/* Journey Path Line - responsive */}
              <div className="absolute left-6 sm:left-8 top-12 sm:top-16 bottom-12 sm:bottom-16 w-0.5 sm:w-1 bg-gradient-to-b from-sage-green via-blush-pink to-deep-teal rounded-full opacity-30"></div>
              
              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    step: 1,
                    title: "Curiosity",
                    description: "We begin with curiosity: gently exploring the stories that shape your life today.",
                    icon: "🔍",
                    color: "from-sage-green to-sage-green/80"
                  },
                  {
                    step: 2,
                    title: "Safe Space",
                    description: "Together, we'll create a safe space to question these stories and bring them out into the open.",
                    icon: "🤝",
                    color: "from-blush-pink to-blush-pink/80"
                  },
                  {
                    step: 3,
                    title: "New Narrative",
                    description: "From there, we'll begin to shape a new narrative that reflects how you want your life to feel.",
                    icon: "✍️",
                    color: "from-deep-teal to-deep-teal/80"
                  }
                ].map((step, index) => (
                  <div key={step.step} className="flex items-start gap-4 sm:gap-6 relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg z-10 gentle-float flex-shrink-0`} style={{ animationDelay: `${index * 2}s` }}>
                      <span className="text-lg sm:text-xl lg:text-2xl">{step.icon}</span>
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2 min-w-0">
                      <h3 className="font-serif font-bold text-deep-teal mb-2 text-lg sm:text-xl break-words">{step.title}</h3>
                      <p className="text-warm-gray leading-relaxed text-sm sm:text-base break-words">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Together - responsive grid */}
        <section ref={workingRef}>
          <div className={`bg-gradient-to-br from-white/90 via-white/80 to-blush-pink/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/30 transition-all duration-1000 ${workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <div className="text-center mb-8 sm:mb-12">
              <div className="handwritten-quote text-base sm:text-lg text-warm-gray/80 mb-4">
                "Choose your own adventure..."
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-deep-teal px-4">
                Ways We Can Work Together
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Discovery Call",
                  description: "Free 20-minute Zoom call to explore if we're a good fit",
                  icon: "📞",
                  cta: "Book a Call"
                },
                {
                  title: "Online Sessions",
                  description: "3 x 60-minute sessions via Zoom with personalized resources",
                  icon: "💻",
                  cta: "Start Online"
                },
                {
                  title: "In-Person Support",
                  description: "Creative, hands-on exploration in the Côte d'Azur region",
                  icon: "🏡",
                  cta: "Meet in Person"
                }
              ].map((option, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl sm:rounded-2xl border border-sage-green/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{option.icon}</div>
                  <h3 className="font-serif font-bold text-deep-teal text-base sm:text-lg mb-2 sm:mb-3 break-words">{option.title}</h3>
                  <p className="text-warm-gray text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed break-words">{option.description}</p>
                  <button className="text-sage-green font-medium hover:text-deep-teal transition-colors duration-300 text-sm">
                    {option.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
