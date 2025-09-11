import React, { useState } from 'react';
import { Brain, Users, Heart, Building2, ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'narrative',
      title: "Narrative Psychology",
      icon: Brain,
      summary: "Explore and challenge the stories that shape your identity. Transform limiting beliefs into empowering narratives.",
      fullContent: `As a Narrative Psychologist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society.

These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential.

I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power. It's not about changing who you are or denying what the past brought you.

It's about helping you accept it and by becoming the author of your own life - not only cope but fully thrive.`,
      highlights: [
        "Identify limiting narratives",
        "Reclaim your personal truth",
        "Rewrite empowering stories",
        "Step into your power"
      ]
    },
    {
      id: 'nlp',
      title: "NLP Coaching", 
      icon: Users,
      summary: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action toward your desired life.",
      fullContent: `As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.

Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.

Together, we'll identify the unconscious patterns that may be holding you back and replace them with empowering strategies that support your growth and success.`,
      highlights: [
        "Rewire thought patterns",
        "Build empowering habits",
        "Create lasting change",
        "Achieve aligned action"
      ]
    },
    {
      id: 'parenting',
      title: "Parenting Support",
      icon: Heart, 
      summary: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
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
        "Divorce & separation support",
        "Expat family guidance",
        "Work-life integration"
      ]
    },
    {
      id: 'heredge-local',
      title: "HerEdge Côte d'Azur",
      icon: Building2,
      summary: "Local networking and support for women in the French Riviera region.",
      fullContent: `HerEdge Côte d'Azur is our local chapter dedicated to supporting women in the French Riviera region.

We create opportunities for networking, professional development, and personal growth specifically tailored to the unique needs of women living and working on the Côte d'Azur.

Our local initiatives include:
• Monthly networking events
• Professional mentorship programs
• Work-life balance workshops
• Cultural integration support for expat women
• Local business development opportunities

Join our community of empowered women making their mark on the French Riviera.`,
      highlights: [
        "Monthly networking events",
        "Mentorship programs",
        "Cultural integration",
        "Local community"
      ]
    },
    {
      id: 'heredge-corporate',
      title: "HerEdge Corporate",
      icon: Building2,
      summary: "Creating workplaces where women are truly seen, supported, and empowered beyond simple representation.",
      fullContent: `At HerEdge Corporate, we go beyond checking boxes for female representation in the workplace - we help companies create workplaces where women are truly seen, supported, and empowered.

Together with my professional team, we partner with organizations to build systems that prioritize women's well-being, professional growth, and inclusion.

How we work:
• Consultation: Company-wide assessment and vision clarification
• Workshops & Webinars: Tailored sessions on work-life balance, parenting, menopause, health & wellbeing
• Accountability & Networking: Communities where female leaders connect and stay accountable
• Membership Community: Exclusive platform for professional development

We believe true progress includes everyone. That's why we actively engage men - educating and empowering them to become allies in creating more equitable workplaces.`,
      highlights: [
        "Company consultation",
        "Tailored workshops",
        "Leadership communities",
        "Ally engagement"
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Hero Section - Clean and Professional */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-deep-teal mb-6">
            How I Can Help You
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the different ways we can work together to transform your story and create meaningful change in your life.
          </p>
        </div>
        
        {/* Services Grid - Clean Cards */}
        <section ref={servicesRef} className="mb-20">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-100 hover:border-sage-green/30 overflow-hidden ${
                  servicesVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-expanded={expandedService === service.id}
              >
                {/* Service Header - Clean and Clickable */}
                <button
                  className="w-full text-left p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sage-green/30 focus:bg-gray-50 group"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={expandedService === service.id}
                  aria-label={`${expandedService === service.id ? 'Close' : 'Open'} ${service.title} details`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Clean Icon Design */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sage-green/10 border-2 border-sage-green/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-sage-green transition-colors duration-300">
                          <service.icon className="text-deep-teal" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-deep-teal mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            {service.summary}
                          </p>
                        </div>
                      </div>
                      
                      {/* Key Highlights - Visible Always */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="text-sm text-sage-green font-medium px-3 py-1 bg-sage-green/10 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-sm text-gray-500 group-hover:text-sage-green transition-colors duration-300">
                        {expandedService === service.id ? 'Less' : 'More'}
                      </span>
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-sage-green/20 rounded-full flex items-center justify-center transition-all duration-300">
                        {expandedService === service.id ? 
                          <ChevronUp className="text-deep-teal" size={20} /> : 
                          <ChevronDown className="text-deep-teal" size={20} />
                        }
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* Expandable Content - Clean Layout */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedService === service.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10 border-t border-gray-100">
                    <div className="pt-6 sm:pt-8">
                      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
                        {service.fullContent.split('\n').map((paragraph, i) => (
                          paragraph.trim() && (
                            <p key={i} className="mb-4">
                              {paragraph.trim()}
                            </p>
                          )
                        ))}
                      </div>
                      
                      {/* All Highlights */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-sage-green" size={16} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-8 flex justify-center">
                        <button className="inline-flex items-center px-6 py-3 bg-sage-green text-white rounded-full hover:bg-sage-green/90 transition-all duration-300 font-medium group">
                          Start Your Journey
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Approach - Clean Design */}
        <section ref={approachRef} className="mb-20">
          <div className={`bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm border-2 border-gray-100 transition-all duration-1000 ${
            approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-teal mb-4">
                My Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A journey of transformation through three essential steps
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Discovery Through Curiosity",
                  description: "We begin with curiosity: gently exploring the stories that shape your life today.",
                  icon: "🔍"
                },
                {
                  step: 2,
                  title: "Creating Safe Space",
                  description: "Together, we'll create a safe space to question these stories and bring them out into the open.",
                  icon: "🤝"
                },
                {
                  step: 3,
                  title: "Writing New Narratives",
                  description: "From there, we'll begin to shape a new narrative that reflects how you want your life to feel.",
                  icon: "✍️"
                }
              ].map((step, index) => (
                <div key={step.step} className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-sage-green/10 border-2 border-sage-green/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-deep-teal font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-deep-teal text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Together - Clean Grid */}
        <section ref={workingRef}>
          <div className={`bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm border-2 border-gray-100 transition-all duration-1000 ${
            workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-teal mb-4">
                Ways to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the approach that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Discovery Call",
                  description: "Free 20-minute Zoom call to explore if we're a good fit",
                  icon: "📞"
                },
                {
                  title: "Online Sessions",
                  description: "3 x 60-minute sessions via Zoom with personalized resources",
                  icon: "💻"
                },
                {
                  title: "In-Person Support",
                  description: "Creative, hands-on exploration in the Côte d'Azur region",
                  icon: "🏡"
                }
              ].map((option, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-sage-green/30 transition-all duration-300 hover:shadow-md">
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className="font-serif font-bold text-deep-teal text-lg mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
                  <button className="text-sage-green font-medium hover:text-deep-teal transition-colors duration-300 text-sm">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
            
            {/* Final CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Ready to begin your transformation journey?</p>
              <button className="inline-flex items-center px-8 py-3 bg-sage-green text-white rounded-full hover:bg-sage-green/90 transition-all duration-300 font-medium text-lg group">
                Book Your Discovery Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;