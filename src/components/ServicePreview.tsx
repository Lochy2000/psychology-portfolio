
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
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-deep-teal">
          My Services
        </h2>
        <p className="text-warm-gray max-w-2xl mx-auto mt-4">
          Tailored approaches to help you transform your life story and step into your personal power.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-cream border border-sage-green/20 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <service.icon size={48} className="text-blush-pink" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-deep-teal">
              {service.title}
            </h3>
            <p className="text-warm-gray">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreview;
