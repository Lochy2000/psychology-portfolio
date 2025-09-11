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
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border-2 border-gray-100 hover:border-sage-green/30">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-sage-green/10 border-2 border-sage-green/30 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="text-deep-teal" size={24} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-deep-teal">{title}</h3>
      </div>
      <p className="text-gray-700 mb-8 leading-relaxed text-lg">{description}</p>
      <div className="space-y-3">
        {details.map((detail, index) => (
          <div key={index} className="flex items-start gap-3 text-gray-600">
            <div className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-base leading-relaxed">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;