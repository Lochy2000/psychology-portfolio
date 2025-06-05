
import React from 'react';
import { Brain, Users, Heart, Building2 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Brain,
    title: "Narrative Psychology",
    description: "Explore and challenge the stories that shape your identity. Unravel limiting narratives and reclaim your truth.",
    details: [
      "Explore identity-shaping stories and narratives",
      "Challenge limiting beliefs and social expectations", 
      "Reclaim your personal truth and authentic self",
      "Become the author of your own empowering life story"
    ]
  },
  {
    icon: Users,
    title: "NLP Coaching",
    description: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action towards your desired life.",
    details: [
      "Break through unconscious limiting beliefs",
      "Develop empowering daily habits and routines",
      "Gain crystal-clear direction and purpose",
      "Create sustainable positive behavioral changes"
    ]
  },
  {
    icon: Heart,
    title: "Parenting Support",
    description: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
    details: [
      "Parenting before, during, and after divorce",
      "Supporting expat families and cultural transitions",
      "Balancing family, work, and personal life",
      "Building confidence in parenting decisions",
      "Creating guilt-free work-life integration"
    ]
  },
  {
    icon: Building2,
    title: "HerEdge Corporate",
    description: "Creating workplaces where women are truly seen, supported, and empowered beyond simple representation.",
    details: [
      "Company-wide consultation and assessment",
      "Workshops on work-life balance and wellbeing",
      "Leadership development for women",
      "Networking and accountability communities",
      "Exclusive membership platform access"
    ]
  }
];

const ServicePreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="mt-16 lg:mt-20">
      <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-4">
          My Services
        </h2>
        <p className="text-warm-gray max-w-2xl mx-auto text-base lg:text-lg leading-relaxed px-4">
          Tailored approaches to help you transform your life story and step into your personal power.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreview;
