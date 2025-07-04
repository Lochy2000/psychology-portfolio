
import React, { useState } from 'react';
import { ChevronRight, Sparkles, BookOpen, Heart, Compass, Star, ChevronDown } from 'lucide-react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Home: React.FC = () => {
  const { ref: chapterOneRef, isVisible: chapterOneVisible } = useScrollAnimation();
  const { ref: chapterTwoRef, isVisible: chapterTwoVisible } = useScrollAnimation();
  const { ref: chapterThreeRef, isVisible: chapterThreeVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const mousePosition = useMouseParallax(0.02);

  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="space-y-16 lg:space-y-32">
          {/* Hero Section */}
          <Hero />
          
          {/* Chapter 1: Who You Are - Condensed with Expand Option */}
          <section ref={chapterOneRef} className="paper-texture">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ${chapterOneVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header */}
              <div className="text-center mb-8 lg:mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center gentle-float">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <div className="chapter-number">
                    <span className="text-sm font-handwritten text-sage-green/70 block">Chapter One</span>
                    <h2 className="text-2xl lg:text-4xl font-serif font-bold text-deep-teal">Who You Are</h2>
                  </div>
                </div>
              </div>

              {/* Story Content - Mobile Optimized */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                  {/* Key Message - Always Visible */}
                  <div className="bg-gradient-to-r from-sage-green/10 to-transparent p-4 lg:p-6 rounded-r-2xl border-l-4 border-sage-green/30">
                    <p className="text-lg lg:text-xl font-medium text-deep-teal leading-relaxed">
                      You crave control, freedom, and authenticity - but inner doubts hold you back.
                    </p>
                  </div>
                  
                  {/* Expandable Content - Mobile */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => toggleSection('chapter1')}
                      className="flex items-center justify-between w-full text-left p-4 bg-white/50 rounded-lg border border-sage-green/20 hover:bg-sage-green/5 transition-colors"
                    >
                      <span className="text-sage-green font-medium">Learn more about your journey</span>
                      <ChevronDown className={`transform transition-transform ${expandedSections.chapter1 ? 'rotate-180' : ''}`} size={20} />
                    </button>
                    
                    {expandedSections.chapter1 && (
                      <div className="mt-4 p-4 bg-white/30 rounded-lg space-y-4 animate-fade-in">
                        <p className="text-warm-gray leading-relaxed">
                          You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                        </p>
                        <div className="handwritten-quote text-base font-handwritten text-deep-teal/80 italic text-center p-3 bg-sage-green/5 rounded-lg">
                          Every story can be rewritten. You hold the pen. ✨
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop Content - Always Visible */}
                  <div className="hidden lg:block space-y-6">
                    <p className="text-lg text-warm-gray leading-relaxed prose">
                      You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                    </p>
                    <div className="bg-gradient-to-r from-sage-green/5 to-transparent p-6 rounded-r-2xl border-l-4 border-sage-green/30 hover-lift">
                      <p className="handwritten-quote text-lg font-handwritten text-deep-teal/80 italic">
                        Every story can be rewritten. You hold the pen.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="order-1 lg:order-2 relative">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
                      alt="Trees reaching towards light - symbolizing growth"
                      className="rounded-2xl shadow-2xl object-cover w-full h-[250px] lg:h-[400px] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 via-transparent to-sage-green/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2: Interactive Journey - Simplified */}
          <section ref={chapterTwoRef} className="paper-texture">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ${chapterTwoVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header */}
              <div className="text-center mb-8 lg:mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blush-pink to-deep-teal rounded-full flex items-center justify-center gentle-float">
                    <Compass className="text-white" size={20} />
                  </div>
                  <div className="chapter-number">
                    <span className="text-sm font-handwritten text-blush-pink/70 block">Chapter Two</span>
                    <h2 className="text-2xl lg:text-4xl font-serif font-bold text-deep-teal text-shimmer">Your Transformation Journey</h2>
                  </div>
                </div>
              </div>

              {/* Mobile - Simplified Cards */}
              <div className="lg:hidden space-y-4">
                {[
                  { icon: Heart, title: "Explore", color: "sage-green", brief: "Discover your authentic self" },
                  { icon: Sparkles, title: "Transform", color: "blush-pink", brief: "Challenge limiting beliefs" },
                  { icon: Star, title: "Thrive", color: "deep-teal", brief: "Live with confidence & clarity" }
                ].map((step, index) => (
                  <div key={step.title} className="bg-white/40 rounded-xl p-4 border border-sage-green/20">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${step.color} to-${step.color}/80 rounded-full flex items-center justify-center shrink-0`}>
                        <step.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-deep-teal text-lg">{step.title}</h3>
                        <p className="text-warm-gray text-sm">{step.brief}</p>
                      </div>
                      <button
                        onClick={() => toggleSection(`step${index}`)}
                        className="text-sage-green p-2"
                      >
                        <ChevronDown className={`transform transition-transform ${expandedSections[`step${index}`] ? 'rotate-180' : ''}`} size={16} />
                      </button>
                    </div>
                    
                    {expandedSections[`step${index}`] && (
                      <div className="mt-4 pt-4 border-t border-sage-green/10 animate-fade-in">
                        <p className="text-warm-gray text-sm leading-relaxed">
                          {index === 0 && "We begin by gently exploring the stories that have shaped your life and identity, creating space for authentic self-discovery."}
                          {index === 1 && "Together, we'll challenge limiting beliefs and create new empowering narratives that align with your authentic self."}
                          {index === 2 && "Step into your authentic power and live the life you truly want to create, with confidence and clarity."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop - Full Experience */}
              <div className="hidden lg:block">
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  <div className="story-chapter bg-gradient-to-br from-sage-green/10 to-transparent p-8 rounded-2xl border border-sage-green/20 hover-lift mouse-parallax" 
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-teal mb-4 text-center">Explore</h3>
                    <p className="text-warm-gray leading-relaxed text-center prose">
                      We begin by gently exploring the stories that have shaped your life and identity, creating space for authentic self-discovery.
                    </p>
                  </div>
                  
                  <div className="story-chapter bg-gradient-to-br from-blush-pink/10 to-transparent p-8 rounded-2xl border border-blush-pink/20 hover-lift mouse-parallax" 
                    style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-6 gentle-float" style={{ animationDelay: '2s' }}>
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-teal mb-4 text-center">Transform</h3>
                    <p className="text-warm-gray leading-relaxed text-center prose">
                      Together, we'll challenge limiting beliefs and create new empowering narratives that align with your authentic self.
                    </p>
                  </div>
                  
                  <div className="story-chapter bg-gradient-to-br from-deep-teal/10 to-transparent p-8 rounded-2xl border border-deep-teal/20 hover-lift mouse-parallax" 
                    style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-6 gentle-float" style={{ animationDelay: '4s' }}>
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-teal mb-4 text-center">Thrive</h3>
                    <p className="text-warm-gray leading-relaxed text-center prose">
                      Step into your authentic power and live the life you truly want to create, with confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 3: Services Preview */}
          <section ref={chapterThreeRef} className="paper-texture">
            <div className={`transition-all duration-1000 ${chapterThreeVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              <ServicePreview />
            </div>
          </section>
          
          {/* Call to Action - Simplified */}
          <section ref={ctaRef} className="text-center paper-texture">
            <div className={`bg-gradient-to-br from-sage-green/15 to-blush-pink/15 backdrop-blur-sm rounded-2xl p-8 lg:p-16 shadow-xl max-w-5xl mx-auto border border-sage-green/30 transition-all duration-1000 hover-lift ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="mb-6 lg:mb-8">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 gentle-float">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-teal mb-4 lg:mb-6 text-shimmer">
                  Ready to Begin?
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto mb-8 lg:mb-10">
                <p className="text-lg lg:text-xl text-warm-gray leading-relaxed mb-4 lg:mb-6">
                  Transform your story. Reconnect with your power.
                </p>
                
                {/* Mobile - Expandable Details */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleSection('cta')}
                    className="flex items-center justify-center gap-2 text-sage-green font-medium mb-4"
                  >
                    <span>Learn more</span>
                    <ChevronDown className={`transform transition-transform ${expandedSections.cta ? 'rotate-180' : ''}`} size={16} />
                  </button>
                  
                  {expandedSections.cta && (
                    <div className="text-center mb-6 animate-fade-in">
                      <p className="text-base text-warm-gray leading-relaxed mb-4">
                        Together, we'll uncover the narratives that shape your life and rewrite them into powerful, empowering scripts that truly reflect who you are.
                      </p>
                      <div className="handwritten-quote text-lg font-handwritten text-deep-teal/80 italic">
                        Your story matters. You matter. Let's write it together.
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Desktop - Full Content */}
                <div className="hidden lg:block">
                  <p className="text-xl text-warm-gray leading-relaxed mb-6">
                    Together, we'll uncover the narratives that shape your life and rewrite them into powerful, empowering scripts that truly reflect who you are.
                  </p>
                  <div className="handwritten-quote text-2xl font-handwritten text-deep-teal/80 italic">
                    Your story matters. You matter. Let's write it together.
                  </div>
                </div>
              </div>
              
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-lg lg:text-xl font-medium group pulse-glow"
              >
                Start Your Journey 
                <ChevronRight className="ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-16 lg:mt-32">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
