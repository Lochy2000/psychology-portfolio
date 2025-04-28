
import React from 'react';
import { Brain, Users, Heart } from 'lucide-react';
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
        "Reclaim your authentic voice"
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
      description: "With over 25 years of experience working with parents, I support families in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness.",
      details: [
        "Navigate divorce and family transitions",
        "Support expat family dynamics",
        "Balance work and family life",
        "Build confidence in parenting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-deep-teal text-center mb-16">Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-deep-teal mb-8 text-center">
            How We Can Work Together
          </h2>
          <div className="space-y-6">
            <div className="bg-white/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif font-bold text-deep-teal mb-2">1:1 Sessions</h3>
              <p className="text-warm-gray">In-person (Côte d'Azur) or international online, tailored to your unique situation and goals.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif font-bold text-deep-teal mb-2">Workshops & Talks</h3>
              <p className="text-warm-gray">Interactive, practical, and designed to meet the needs of your organisation - whether it's a company, school, or community group.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif font-bold text-deep-teal mb-2">Customised Programs</h3>
              <p className="text-warm-gray">Developed in collaboration with your company or school to create long-term, meaningful impact for parents, staff, and students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
