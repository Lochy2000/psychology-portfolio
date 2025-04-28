
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
    <div className="bg-white/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-sage-green" size={24} />
        <h3 className="text-xl font-serif font-bold text-deep-teal">{title}</h3>
      </div>
      <p className="text-warm-gray mb-6">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center gap-2 text-warm-gray">
            <span className="w-1.5 h-1.5 bg-sage-green rounded-full"></span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
