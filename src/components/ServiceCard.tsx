
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
}

const ServiceCard = ({ title, icon: Icon, description, details }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full border border-sage-green/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-deep-teal">{title}</h3>
      </div>
      <p className="text-warm-gray mb-8 leading-relaxed text-lg">{description}</p>
      <div className="space-y-3">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start gap-3 text-warm-gray">
            <div className="w-2 h-2 bg-gradient-to-r from-sage-green to-blush-pink rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-base leading-relaxed">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
