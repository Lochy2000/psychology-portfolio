import React from 'react';
import { Award, FileText, GraduationCap, Brain, Star, Medal, Users, Heart, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutQualifications = () => {
  const { ref: qualRef, isVisible: qualVisible } = useScrollAnimation();

  const qualifications = [
    { text: "Author and blogger (for schools and companies)", icon: FileText },
    { text: "Social Psychology Degree", icon: GraduationCap }, 
    { text: "Narrative Therapist", icon: Brain },
    { text: "Parent, Family & Youth Coach with the Coaching Academy of London", icon: Star },
    { text: "Level 3 City & Guilds 'Working with Parents'", icon: Medal },
    { text: "Webster Stratton Group & Facilitation Leader", icon: Users },
    { text: "Family Link Parent Facilitator", icon: Heart },
    { text: "NLP practitioner", icon: CheckCircle }
  ];

  return (
    <div ref={qualRef} className="space-y-8 pb-12">
      <div className={`text-center mb-12 transition-all duration-1000 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
        <div className="w-16 h-16 bg-deep-teal/10 border-2 border-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Award className="text-deep-teal" size={24} />
        </div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal mb-6">My Professional Journey</h2>
        <p className="text-base lg:text-lg font-serif italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every qualification tells a story of growth, learning, and deepening understanding.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 lg:p-10 border-2 border-gray-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {qualifications.map((qualification, index) => {
            const IconComponent = qualification.icon;
            return (
              <div 
                key={index}
                className={`bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-100 hover:border-sage-green/30 ${qualVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-deep-teal/10 border border-deep-teal/30 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-deep-teal" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed text-sm lg:text-base flex-1">{qualification.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutQualifications;