import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ServicesApproach = () => {
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();

  return (
    <section ref={approachRef} className="mb-20">
      <div className={`bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm border-2 border-gray-100 transition-all duration-1000 ${
        approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-teal mb-4">
            My Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of transformation through three essential steps
          </p>
        </div>
        
        <div className="space-y-8">
          {[
            {
              step: 1,
              title: "Discovery Through Curiosity",
              description: "We begin with curiosity: gently exploring the stories that shape your life today.",
              icon: "🔍"
            },
            {
              step: 2,
              title: "Creating Safe Space",
              description: "Together, we'll create a safe space to question these stories and bring them out into the open.",
              icon: "🤝"
            },
            {
              step: 3,
              title: "Writing New Narratives",
              description: "From there, we'll begin to shape a new narrative that reflects how you want your life to feel.",
              icon: "✍️"
            }
          ].map((step, index) => (
            <div key={step.step} className="flex items-start gap-6">
              {/* Step Number */}
              <div className="w-12 h-12 bg-sage-green/10 border-2 border-sage-green/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-deep-teal font-bold text-lg">{step.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-deep-teal text-xl mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesApproach;