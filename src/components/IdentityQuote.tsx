import React from 'react';

const IdentityQuote: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 lg:py-10 xl:py-16">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 xl:gap-12 items-center content-flow rounded-3xl p-3 sm:p-4 lg:p-6 xl:p-10 section-transition">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative max-w-[250px] lg:max-w-[350px] xl:max-w-[400px]">
              {/* Decorative background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-sage-green/10 blur-2xl"></div>
              </div>
              {/* Main image */}
              <img 
                src="/img/quote-svg.png" 
                alt="Mind growth and transformation - tree growing from head silhouette"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex items-center">
            <div className="text-center lg:text-left space-y-2 sm:space-y-3 lg:space-y-4">
              <div>
                <span className="text-sage-green font-medium text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider">Core Belief</span>
              </div>
              <blockquote className="text-sm sm:text-base lg:text-xl xl:text-3xl font-serif text-deep-teal leading-relaxed">
                "Our identity is not formed in isolation - we develop, heal, and grow through connections with others."
              </blockquote>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-sage-green">People are shaped by people.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityQuote;