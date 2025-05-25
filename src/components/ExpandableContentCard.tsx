
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExpandableContentCardProps {
  title: string;
  summary: string;
  fullContent: string;
  bgGradient?: string;
  textColor?: string;
}

const ExpandableContentCard = ({ 
  title, 
  summary, 
  fullContent, 
  bgGradient = "bg-gradient-to-br from-white via-white/90 to-sage-green/10",
  textColor = "text-deep-teal"
}: ExpandableContentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${bgGradient} backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-green/20`}>
      <h3 className={`text-xl lg:text-2xl font-serif font-bold ${textColor} mb-4`}>
        {title}
      </h3>
      
      <p className="text-warm-gray leading-relaxed mb-4">
        {summary}
      </p>
      
      {isExpanded && (
        <div className="space-y-4 text-warm-gray leading-relaxed animate-fade-in">
          {fullContent.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="text-sm lg:text-base">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
      )}
      
      <Button 
        onClick={() => setIsExpanded(!isExpanded)}
        variant="ghost"
        className="mt-4 text-sage-green hover:text-deep-teal hover:bg-sage-green/10 transition-all duration-300"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="ml-2" size={16} />
          </>
        ) : (
          <>
            Read More <ChevronDown className="ml-2" size={16} />
          </>
        )}
      </Button>
    </div>
  );
};

export default ExpandableContentCard;
