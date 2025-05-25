
import React from 'react';
import { Brain, Users, Heart, Building2 } from 'lucide-react';
import ExpandableContentCard from '../components/ExpandableContentCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();

  const services = [
    {
      title: "Narrative Psychology",
      icon: Brain,
      summary: "Explore and challenge the stories that shape your identity. Transform limiting beliefs into empowering narratives.",
      fullContent: `As a Narrative Psychologist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society.

These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential.

I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power. It's not about changing who you are or denying what the past brought you.

It's about helping you accept it and by becoming the author of your own life - not only cope but fully thrive.`,
      bgGradient: "bg-gradient-to-br from-purple-50 via-white to-purple-100/30"
    },
    {
      title: "NLP Coaching", 
      icon: Users,
      summary: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action toward your desired life.",
      fullContent: `As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.

Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.

Together, we'll identify the unconscious patterns that may be holding you back and replace them with empowering strategies that support your growth and success.`,
      bgGradient: "bg-gradient-to-br from-emerald-50 via-white to-emerald-100/30"
    },
    {
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
      bgGradient: "bg-gradient-to-br from-rose-50 via-white to-pink-100/30"
    },
    {
      title: "HerEdge Corporate Support",
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
      bgGradient: "bg-gradient-to-br from-amber-50 via-white to-yellow-100/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/90 to-blush-pink/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6">Services I Offer</h1>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Tailored approaches to help you transform your life story and step into your personal power.
          </p>
        </div>
        
        <section ref={servicesRef} className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 ${servicesVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ExpandableContentCard
                  title={service.title}
                  summary={service.summary}
                  fullContent={service.fullContent}
                  bgGradient={service.bgGradient}
                />
              </div>
            ))}
          </div>
        </section>

        <section ref={approachRef} className="mb-20">
          <div className={`bg-gradient-to-br from-white/80 via-white/70 to-sage-green/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-sage-green/20 transition-all duration-1000 ${approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-8 text-center">
              My Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Curiosity</h3>
                <p className="text-warm-gray text-sm leading-relaxed">We begin with curiosity: gently exploring the stories that shape your life today.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Safe Space</h3>
                <p className="text-warm-gray text-sm leading-relaxed">Together, we'll create a safe space to question these stories and bring them out into the open.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-deep-teal/10 to-blush-pink/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">New Narrative</h3>
                <p className="text-warm-gray text-sm leading-relaxed">From there, we'll begin to shape a new narrative that reflects how you want your life to feel.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={workingRef}>
          <div className={`bg-gradient-to-br from-white/80 via-white/70 to-blush-pink/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-sage-green/20 transition-all duration-1000 ${workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-8 text-center">
              How We Can Work Together
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-sage-green/5 to-blush-pink/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-sage-green/10">
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">1:1 Sessions</h3>
                <p className="text-warm-gray text-sm leading-relaxed">In-person (Côte d'Azur) or international online, tailored to your unique situation and goals.</p>
              </div>
              <div className="bg-gradient-to-br from-blush-pink/5 to-sage-green/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blush-pink/10">
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Workshops & Talks</h3>
                <p className="text-warm-gray text-sm leading-relaxed">Interactive, practical, and designed to meet the needs of your organisation - whether it's a company, school, or community group.</p>
              </div>
              <div className="bg-gradient-to-br from-deep-teal/5 to-blush-pink/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-deep-teal/10">
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Customised Programs</h3>
                <p className="text-warm-gray text-sm leading-relaxed">Developed in collaboration with your company or school to create long-term, meaningful impact for parents, staff, and students.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
