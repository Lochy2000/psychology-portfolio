
import React from 'react';
import { Brain, Users, Heart, Building2 } from 'lucide-react';
import ExpandableServiceCard from './ExpandableServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Brain,
    title: "Narrative Psychology",
    description: "Explore and challenge the stories that shape your identity. Unravel limiting narratives and reclaim your truth.",
    fullContent: "As a Narrative Psychologist I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society. These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential. I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power.",
    details: [
      "Explore identity-shaping stories and narratives",
      "Challenge limiting beliefs and social expectations", 
      "Reclaim your personal truth and authentic self",
      "Become the author of your own empowering life story"
    ],
    bgGradient: "bg-gradient-to-br from-purple-50 via-white to-purple-100/50",
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "NLP Coaching",
    description: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action towards your desired life.",
    fullContent: "As an NLP coach I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want. Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.",
    details: [
      "Break through unconscious limiting beliefs",
      "Develop empowering daily habits and routines",
      "Gain crystal-clear direction and purpose",
      "Create sustainable positive behavioral changes"
    ],
    bgGradient: "bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    icon: Heart,
    title: "Parenting Support",
    description: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
    fullContent: "As a Parenting Consultant, I support parents in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness. Having worked with parents for over 25 years, I bring deep insight and compassion to the journey of parenting, especially for expat families and those navigating major life transitions.",
    details: [
      "Parenting before, during, and after divorce",
      "Supporting expat families and cultural transitions",
      "Balancing family, work, and personal life",
      "Building confidence in parenting decisions",
      "Creating guilt-free work-life integration"
    ],
    bgGradient: "bg-gradient-to-br from-rose-50 via-white to-pink-100/50",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    icon: Building2,
    title: "HerEdge Corporate",
    description: "Creating workplaces where women are truly seen, supported, and empowered beyond simple representation.",
    fullContent: "At HerEdge Corporate, we go beyond checking boxes for female representation in workplace - we help companies create workplaces where women are truly seen, supported, and empowered. We partner with organizations to build systems that prioritize women's well-being, professional growth, and inclusion while actively engaging men as allies.",
    details: [
      "Company-wide consultation and assessment",
      "Workshops on work-life balance and wellbeing",
      "Leadership development for women",
      "Networking and accountability communities",
      "Exclusive membership platform access"
    ],
    bgGradient: "bg-gradient-to-br from-amber-50 via-white to-yellow-100/50",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600"
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ExpandableServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreview;
