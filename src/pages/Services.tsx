
import React from 'react';
import { Brain, Users, Heart, Building2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Narrative Psychology",
      icon: Brain,
      description: "As a Narrative Psychologist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society. Together, we'll unravel limiting narratives so you can reclaim your truth and step fully into your own power.",
      details: [
        "Explore and challenge identity-shaping stories",
        "Uncover empowering narratives", 
        "Transform limiting beliefs",
        "Become the author of your own life"
      ]
    },
    {
      title: "NLP Coaching",
      icon: Users,
      description: "As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.",
      details: [
        "Break through limiting beliefs",
        "Develop empowering habits",
        "Gain clarity and direction",
        "Create lasting positive change"
      ]
    },
    {
      title: "Parenting Support",
      icon: Heart,
      description: "As a Parenting Consultant, I support parents in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness. Having worked with parents for over 25 years, I bring deep insight and compassion to the journey of parenting.",
      details: [
        "Parenting before, during, and after divorce",
        "Parenting an expat family",
        "Navigating family, life, and work balance",
        "Empowering parents with confidence"
      ]
    },
    {
      title: "HerEdge Corporate Support",
      icon: Building2,
      description: "At HerEdge Corporate, we go beyond checking boxes for female representation in workplace - we help companies create workplaces where women are truly seen, supported, and empowered.",
      details: [
        "Company-wide consultation and assessment",
        "Workshops & webinars (work-life balance, parenting, menopause)",
        "Accountability & networking communities",
        "Exclusive membership platform access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-sage-green/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-serif font-bold text-deep-teal mb-4">Services I Offer</h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Tailored approaches to help you transform your life story and step into your personal power.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16 animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-deep-teal mb-8 text-center">
            My Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-xl">
              <div className="w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sage-green font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif font-bold text-deep-teal mb-3">Curiosity</h3>
              <p className="text-warm-gray text-sm">We begin with curiosity: gently exploring the stories that shape your life today.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-xl">
              <div className="w-12 h-12 bg-blush-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blush-pink font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif font-bold text-deep-teal mb-3">Safe Space</h3>
              <p className="text-warm-gray text-sm">Together, we'll create a safe space to question these stories and bring them out into the open.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-xl">
              <div className="w-12 h-12 bg-deep-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-deep-teal font-bold text-xl">3</span>
              </div>
              <h3 className="font-serif font-bold text-deep-teal mb-3">New Narrative</h3>
              <p className="text-warm-gray text-sm">From there, we'll begin to shape a new narrative that reflects how you want your life to feel.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-deep-teal mb-8 text-center">
            How We Can Work Together
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sage-green/5 to-blush-pink/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-serif font-bold text-deep-teal mb-3">1:1 Sessions</h3>
              <p className="text-warm-gray">In-person (Côte d'Azur) or international online, tailored to your unique situation and goals.</p>
            </div>
            <div className="bg-gradient-to-br from-blush-pink/5 to-sage-green/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-serif font-bold text-deep-teal mb-3">Workshops & Talks</h3>
              <p className="text-warm-gray">Interactive, practical, and designed to meet the needs of your organisation - whether it's a company, school, or community group.</p>
            </div>
            <div className="bg-gradient-to-br from-sage-green/5 to-blush-pink/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-serif font-bold text-deep-teal mb-3">Customised Programs</h3>
              <p className="text-warm-gray">Developed in collaboration with your company or school to create long-term, meaningful impact for parents, staff, and students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
