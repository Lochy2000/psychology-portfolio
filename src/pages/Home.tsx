
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import WhoYouAre from '../components/WhoYouAre';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Home: React.FC = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const mousePosition = useMouseParallax(0.02);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="space-y-20">
          {/* Hero Section */}
          <Hero />
          
          {/* Who You Are Section */}
          <WhoYouAre />
          
          {/* Journey Section */}
          <section ref={journeyRef} className="py-16">
            <div className={`text-center transition-all duration-1000 ${journeyVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-8 text-shimmer">
                Your Journey to Transformation
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div 
                  className={`transition-all duration-1000 hover-lift mouse-parallax ${journeyVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} 
                  style={{ 
                    animationDelay: '0.2s',
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  }}
                >
                  <div className="bg-gradient-to-br from-sage-green/10 to-transparent p-6 rounded-2xl border border-sage-green/20 h-full pulse-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-4 gentle-float">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-teal mb-3">Explore</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      We begin by gently exploring the stories that have shaped your life and identity.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-1000 hover-lift mouse-parallax ${journeyVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} 
                  style={{ 
                    animationDelay: '0.4s',
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                  }}
                >
                  <div className="bg-gradient-to-br from-blush-pink/10 to-transparent p-6 rounded-2xl border border-blush-pink/20 h-full pulse-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-4 gentle-float" style={{ animationDelay: '2s' }}>
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-teal mb-3">Transform</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Together, we'll challenge limiting beliefs and create new empowering narratives.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-1000 hover-lift mouse-parallax ${journeyVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} 
                  style={{ 
                    animationDelay: '0.6s',
                    transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`
                  }}
                >
                  <div className="bg-gradient-to-br from-deep-teal/10 to-transparent p-6 rounded-2xl border border-deep-teal/20 h-full pulse-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-4 gentle-float" style={{ animationDelay: '4s' }}>
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-teal mb-3">Thrive</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Step into your authentic power and live the life you truly want to create.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services Preview */}
          <ServicePreview />
          
          {/* Call to Action */}
          <section ref={ctaRef} className="text-center">
            <div className={`bg-gradient-to-br from-sage-green/10 to-blush-pink/10 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto border border-sage-green/20 transition-all duration-1000 hover-lift ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="text-blush-pink gentle-float" size={24} />
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal text-shimmer">
                  Ready to Rewrite Your Story?
                </h2>
                <Sparkles className="text-blush-pink gentle-float" size={24} style={{ animationDelay: '3s' }} />
              </div>
              <p className="max-w-3xl mx-auto text-xl mb-10 text-warm-gray leading-relaxed">
                Every story can be rewritten. Together, we'll uncover the narratives that shape your life and transform them into powerful, empowering scripts that truly reflect who you are and who you want to become.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105 text-lg font-medium group pulse-glow"
              >
                Book a Consultation 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-20">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
