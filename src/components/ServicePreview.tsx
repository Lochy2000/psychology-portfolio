
import React from 'react';
import { Brain, Users, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Narrative Psychology",
    description: "Explore and challenge the stories that shape your identity. Unravel limiting narratives and reclaim your truth.",
  },
  {
    icon: Users,
    title: "NLP Coaching",
    description: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action towards your desired life.",
  },
  {
    icon: MessageCircle,
    title: "Parenting Support",
    description: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
  }
];

const ServicePreview: React.FC = () => {
  return (
    <section className="mt-20 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-deep-teal mb-4">
          My Services
        </h2>
        <p className="text-warm-gray max-w-2xl mx-auto text-lg leading-relaxed">
          Tailored approaches to help you transform your life story and step into your personal power.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white/80 backdrop-blur-sm border border-sage-green/20 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/90 group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-sage-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-deep-teal">
              {service.title}
            </h3>
            <p className="text-warm-gray leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreview;
