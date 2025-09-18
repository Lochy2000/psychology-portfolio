import React, { useState, useEffect } from 'react';
import { Brain, Users, Heart, Building2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServicesList: React.FC = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [cardsRevealed, setCardsRevealed] = useState<boolean[]>([]);

  // Simple card reveal animation on visibility
  useEffect(() => {
    if (servicesVisible) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setCardsRevealed(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 200);
      });
    }
  }, [servicesVisible]);

  const services = [
    {
      id: 'narrative',
      title: "Narrative Therapist",
      icon: Brain,
      summary: "Transform limiting beliefs into empowering narratives",
      fullContent: `As a Narrative Therapist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society.

These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential.

I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power. It's not about changing who you are or denying what the past brought you.

It's about helping you accept it and by becoming the author of your own life - not only cope but fully thrive.`,
      highlights: [
        "Identity exploration",
        "Story rewriting",
        "Personal empowerment"
      ],
      color: 'sage'
    },
    {
      id: 'nlp',
      title: "NLP Coaching", 
      icon: Users,
      summary: "Rewire thought patterns for lasting positive change",
      fullContent: `As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.

Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.

Together, we'll identify the unconscious patterns that may be holding you back and replace them with empowering strategies that support your growth and success.`,
      highlights: [
        "Habit building",
        "Mindset shifts",
        "Aligned action"
      ],
      color: 'blush'
    },
    {
      id: 'parenting',
      title: "Parenting Support",
      icon: Heart, 
      summary: "Build deeper family connections with empathy",
      fullContent: `As a Parenting Consultant, I support parents in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness.

Having worked with parents for over 25 years, I bring deep insight and compassion to the journey of parenting. My approach focuses on curiosity and exploration, creating safe spaces to question existing narratives.

I specialize in:
• Parenting before, during, and after divorce
• Parenting an expat family
• Navigating family, life, and work balance
• Empowering parents with confidence
• Supporting guilt-free work-life integration

Together, we'll create a new narrative that reflects how you want your family life to feel, look, and sound.`,
      highlights: [
        "25+ years experience",
        "Divorce support",
        "Work-life balance"
      ],
      color: 'sage'
    },
    {
      id: 'heredge-local',
      title: "HerEdge Côte d'Azur",
      icon: Building2,
      summary: "Local women's empowerment community",
      fullContent: `HerEdge Côte d'Azur is our local chapter dedicated to supporting women in the French Riviera region.

Visit heredge.club to learn more about our community.

We create opportunities for networking, professional development, and personal growth specifically tailored to the unique needs of women living and working on the Côte d'Azur.

Our local initiatives include:
• Monthly networking events
• Professional mentorship programs
• Work-life balance workshops
• Cultural integration support for expat women
• Local business development opportunities

Join our community of empowered women making their mark on the French Riviera.`,
      highlights: [
        "Networking",
        "Mentorship",
        "Community"
      ],
      color: 'blush'
    },
    {
      id: 'heredge-corporate',
      title: "HerEdge Corporate",
      icon: Building2,
      summary: "Creating truly inclusive workplaces for women",
      fullContent: `At HerEdge Corporate, we go beyond checking boxes for female representation in the workplace - we help companies create workplaces where women are truly seen, supported, and empowered.

Together with my professional team, we partner with organizations to build systems that prioritize women's well-being, professional growth, and inclusion.

How we work:
• Consultation: Company-wide assessment and vision clarification
• Workshops & Webinars: Tailored sessions on work-life balance, parenting, menopause, health & wellbeing
• Accountability & Networking: Communities where female leaders connect and stay accountable
• Membership Community: Exclusive platform for professional development

We believe true progress includes everyone. That's why we actively engage men - educating and empowering them to become allies in creating more equitable workplaces.`,
      highlights: [
        "Consultation",
        "Workshops",
        "Leadership"
      ],
      color: 'sage'
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section 
      ref={servicesRef} 
      className="mb-20 sm:mb-24 relative"
    >
      {/* Subtle decorative background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-amber-50/20 to-transparent rounded-t-3xl opacity-30"
        />
      </div>
      {/* Mobile: Single column | Tablet: Dual column with full-width expansion */}
      <div className="xl:hidden">
        {/* Mobile: Single column */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
              isExpanded={expandedService === service.id}
              onToggle={() => toggleService(service.id)}
              isVisible={servicesVisible}
              isRevealed={cardsRevealed[index]}
              isFullWidth={expandedService === service.id}
            />
          ))}
        </div>
        
        {/* Tablet: Dual column with smart expansion */}
        <div className="hidden md:block">
          {expandedService ? (
            <div className="space-y-6 animate-fade-in">
              {/* Expanded Card - Full Width */}
              <div className="w-full">
                <ServiceCard 
                  service={services.find(s => s.id === expandedService)!}
                  index={services.findIndex(s => s.id === expandedService)}
                  isExpanded={true}
                  onToggle={() => toggleService(expandedService)}
                  isVisible={servicesVisible}
                  isRevealed={true}
                  isFullWidth={true}
                />
              </div>
              
              {/* Other Cards - 2 Column Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services
                  .filter(service => service.id !== expandedService)
                  .map((service) => {
                    const originalIndex = services.findIndex(s => s.id === service.id);
                    return (
                      <div key={service.id} className="opacity-75 hover:opacity-100 transition-all duration-300">
                        <ServiceCard 
                          service={service}
                          index={originalIndex}
                          isExpanded={false}
                          onToggle={() => toggleService(service.id)}
                          isVisible={servicesVisible}
                          isRevealed={cardsRevealed[originalIndex]}
                          isCompact={true}
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          ) : (
            /* Default 2x3 grid for tablet */
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  service={service}
                  index={index}
                  isExpanded={false}
                  onToggle={() => toggleService(service.id)}
                  isVisible={servicesVisible}
                  isRevealed={cardsRevealed[index]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Large screens: Dynamic grid layout */}
      <div className="hidden xl:block">
        {expandedService ? (
          /* Expanded layout: Full width for expanded card, stacked others */
          <div className="space-y-8 animate-fade-in">
            {/* Expanded Card - Full Width */}
            <div className="w-full transform transition-all duration-700 animate-scale-in">
              <ServiceCard 
                service={services.find(s => s.id === expandedService)!}
                index={services.findIndex(s => s.id === expandedService)}
                isExpanded={true}
                onToggle={() => toggleService(expandedService)}
                isVisible={servicesVisible}
                isRevealed={true}
                isFullWidth={true}
              />
            </div>
            
            {/* Other Cards - Compact Grid */}
            <div className="transform transition-all duration-500" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-serif font-semibold text-deep-teal mb-4 text-center opacity-75">
                Other Services
              </h3>
              <div className="grid grid-cols-4 gap-4 transition-all duration-300">
                {services
                  .filter(service => service.id !== expandedService)
                  .map((service, index) => {
                    const originalIndex = services.findIndex(s => s.id === service.id);
                    return (
                      <div key={service.id} className="opacity-75 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                        <ServiceCard 
                          service={service}
                          index={originalIndex}
                          isExpanded={false}
                          onToggle={() => toggleService(service.id)}
                          isVisible={servicesVisible}
                          isRevealed={cardsRevealed[originalIndex]}
                          isCompact={true}
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        ) : (
          /* Default bento grid layout */
          <div className="transition-all duration-700 animate-fade-in">
            <div className="grid grid-cols-3 gap-6 transition-all duration-500">
              {/* First row: 3 cards */}
              {services.slice(0, 3).map((service, index) => (
                <div key={service.id} className="col-span-1">
                  <ServiceCard 
                    service={service}
                    index={index}
                    isExpanded={false}
                    onToggle={() => toggleService(service.id)}
                    isVisible={servicesVisible}
                    isRevealed={cardsRevealed[index]}
                  />
                </div>
              ))}
            </div>
            
            {/* Second row: 2 cards centered */}
            {services.length > 3 && (
              <div className="grid grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto transition-all duration-500">
                {services.slice(3).map((service, index) => (
                  <div key={service.id} className="col-span-1">
                    <ServiceCard 
                      service={service}
                      index={index + 3}
                      isExpanded={false}
                      onToggle={() => toggleService(service.id)}
                      isVisible={servicesVisible}
                      isRevealed={cardsRevealed[index + 3]}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

// Extract ServiceCard component for reusability
const ServiceCard = ({ 
  service, 
  index, 
  isExpanded, 
  onToggle, 
  isVisible, 
  isRevealed = false, 
  isFullWidth = false, 
  isCompact = false 
}) => {
  return (
    <div className="relative h-full">
      <div 
        className={`
          ${index % 2 === 0 
            ? 'bg-white shadow-sm border border-gray-100' 
            : 'bg-gradient-to-br from-cream via-white to-sage-green/5 shadow-md border border-sage-green/10'
          }
          rounded-2xl h-full flex flex-col
          transition-all duration-700 hover:shadow-lg transform-gpu
          ${isRevealed 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
          }
          ${isExpanded 
            ? 'ring-2 ring-sage-green/30 shadow-2xl border-sage-green/20' 
            : isCompact 
              ? 'hover:ring-1 hover:ring-sage-green/10' 
              : ''
          }
          ${isFullWidth ? 'shadow-2xl border-2 border-sage-green/20' : ''}
        `}
        style={{ 
          transitionDelay: `${index * 100}ms`,
          transformOrigin: 'center top'
        }}
      >
        {/* Service Content */}
        <div className={`relative flex-1 flex flex-col ${
          isCompact 
            ? 'px-3 py-4' 
            : isFullWidth 
              ? 'px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16'
              : 'px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12'
        }`}>
          {/* Decorative accent for alternating items */}
          {index % 2 === 1 && (
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage-green/5 rounded-full blur-2xl" />
          )}
          
          <div className="relative flex-1 flex flex-col">
            {/* Service Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              {/* Small inline icon */}
              <div className={`
                w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0
                ${service.color === 'sage' 
                  ? 'bg-sage-green/15 text-sage-green' 
                  : 'bg-blush-pink/20 text-deep-teal'
                }
              `}>
                <service.icon size={16} className="sm:hidden" />
                <service.icon size={20} className="hidden sm:block" />
              </div>
              
              <div className="flex-1">
                {/* Title with underline accent */}
                <h3 className={`font-serif font-bold text-deep-teal mb-2 relative inline-block ${
                  isCompact 
                    ? 'text-sm' 
                    : isFullWidth 
                      ? 'text-2xl sm:text-3xl lg:text-4xl'
                      : 'text-xl sm:text-2xl lg:text-3xl'
                }`}>
                  {service.title}
                  <span className={`
                    absolute bottom-0 left-0 w-full h-0.5 
                    ${service.color === 'sage' ? 'bg-sage-green/30' : 'bg-blush-pink/40'}
                  `} />
                </h3>
                
                {/* Summary text */}
                <p className={`text-gray-600 leading-relaxed mt-2 ${
                  isCompact 
                    ? 'text-xs' 
                    : isFullWidth 
                      ? 'text-base sm:text-lg'
                      : 'text-sm sm:text-base'
                }`}>
                  {service.summary}
                </p>
                
                {/* Badge pills */}
                <div className={`flex flex-wrap items-center mt-3 ${
                  isCompact ? 'gap-1.5' : 'gap-2'
                }`}>
                  {service.highlights.map((highlight, idx) => (
                    <span 
                      key={idx} 
                      className={`
                        inline-flex items-center justify-center
                        rounded-full font-medium
                        ${isCompact 
                          ? 'text-xs px-2.5 py-1' 
                          : isFullWidth 
                            ? 'text-sm px-3 py-1.5'
                            : 'text-xs px-2.5 py-1 sm:text-sm sm:px-3 sm:py-1.5'
                        }
                        ${service.color === 'sage' 
                          ? 'bg-sage-green/10 text-sage-green' 
                          : 'bg-blush-pink/15 text-deep-teal'
                        }
                      `}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Read More Button - pushed to bottom */}
            <div className="mt-auto pt-4">
              <button
                onClick={onToggle}
                className={`inline-flex items-center gap-2 font-medium text-sage-green hover:text-deep-teal transition-colors duration-300 group ${
                  isCompact ? 'text-xs' : 'text-sm'
                }`}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
                {isExpanded ? 
                  <ChevronUp size={isCompact ? 12 : 16} className="group-hover:translate-y-[-2px] transition-transform duration-300" /> : 
                  <ChevronDown size={isCompact ? 12 : 16} className="group-hover:translate-y-[2px] transition-transform duration-300" />
                }
              </button>
            </div>
            
            {/* Expanded Content */}
            {isExpanded && (
              <div className="mt-6 animate-fade-in">
                {/* Grid layout for expanded content */}
                <div className="bg-gray-50/50 rounded-lg p-4 sm:p-6">
                  <div className={`grid grid-cols-1 gap-6 ${
                    isFullWidth ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                  }`}>
                    {/* Main content */}
                    <div className={isFullWidth ? 'lg:col-span-3' : 'lg:col-span-2'}>
                      <div className="prose prose-sm max-w-none text-gray-700">
                        {service.fullContent.split('\n').map((paragraph, i) => (
                          paragraph.trim() && (
                            <p key={i} className="mb-3 leading-relaxed text-sm">
                              {paragraph.trim()}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                    
                    {/* Sidebar with highlights and CTA */}
                    <div className="space-y-4">
                      {/* All highlights */}
                      <div>
                        <h4 className="font-semibold text-deep-teal text-sm mb-2">What You'll Gain:</h4>
                        <div className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                service.color === 'sage' ? 'bg-sage-green' : 'bg-deep-teal'
                              }`} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-2">
                        {service.id === 'heredge-local' ? (
                          <a 
                            href="https://heredge.club"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green text-white rounded-full hover:bg-sage-green/90 transition-all duration-300 font-medium text-xs group w-full justify-center"
                          >
                            Visit HerEdge Club
                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
                          </a>
                        ) : (
                          <a 
                            href="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-deep-teal text-white rounded-full hover:bg-deep-teal/90 transition-all duration-300 font-medium text-xs group w-full justify-center"
                          >
                            Start Your Journey
                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;