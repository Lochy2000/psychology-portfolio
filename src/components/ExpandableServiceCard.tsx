
import React, { useState } from 'react';
import { LucideIcon, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ExpandableServiceCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  fullContent: string;
  details: string[];
  bgGradient: string;
  iconBg: string;
}

const ExpandableServiceCard = ({ 
  title, 
  icon: Icon, 
  description, 
  fullContent,
  details, 
  bgGradient,
  iconBg 
}: ExpandableServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={`${bgGradient} backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full group cursor-pointer`}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 lg:w-14 lg:h-14 ${iconBg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="text-white" size={24} />
          </div>
          <h3 className="text-xl lg:text-2xl font-serif font-bold text-deep-teal">{title}</h3>
        </div>
        <p className="text-warm-gray mb-6 leading-relaxed text-sm lg:text-base">{description}</p>
        <Button 
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-sage-green to-deep-teal hover:from-blush-pink hover:to-sage-green text-white w-full group-hover:shadow-lg transition-all duration-300"
        >
          Learn More <ChevronRight className="ml-2" size={16} />
        </Button>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}>
                  <Icon className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-deep-teal">{title}</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsExpanded(false)}
                className="hover:bg-sage-green/10"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-warm-gray leading-relaxed">{fullContent}</p>
              {details.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-deep-teal text-lg">Key Focus Areas:</h4>
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 text-warm-gray">
                      <div className="w-2 h-2 bg-gradient-to-r from-sage-green to-blush-pink rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="pt-4 border-t">
                <Button 
                  onClick={() => setIsExpanded(false)}
                  className="bg-gradient-to-r from-sage-green to-blush-pink hover:from-deep-teal hover:to-sage-green text-white w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableServiceCard;
