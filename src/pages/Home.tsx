
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="space-y-16 lg:space-y-24">
          {/* Hero Section */}
          <div className="mb-12 lg:mb-20">
            <Hero />
          </div>
          
          {/* Chapter 1: Who You Are - Redesigned */}
          <section ref={chapterOneRef} className="py-12 lg:py-20">
            <div className={`max-w-7xl mx-auto transition-all duration-1000 ${chapterOneVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header - Centered and Clean */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex flex-col items-center gap-4 mb-8">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 icon-professional rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <span className="text-base font-handwritten text-sage-green/70 block mb-2">Chapter One</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal leading-tight">Who You Are</h2>
                  </div>
                </div>
              </div>

              {/* Main Content - Better Grid Layout */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                  {/* Primary Message - Prominent */}
                  <div className="bg-gradient-to-r from-sage-green/15 via-sage-green/10 to-transparent p-6 lg:p-8 rounded-2xl border-l-4 border-sage-green shadow-sm">
                    <p className="text-lg lg:text-xl font-semibold text-deep-teal leading-relaxed">
                      You crave control, freedom, and authenticity - but inner doubts hold you back.
                    </p>
                  </div>
                  
                  {/* Mobile Expandable Content */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => toggleSection('chapter1')}
                      className="flex items-center justify-between w-full text-left p-4 bg-white/60 rounded-xl border border-sage-green/20 hover:bg-sage-green/5 transition-all duration-300 shadow-sm"
                    >
                      <span className="text-sage-green font-medium">Discover more about your journey</span>
                      <ChevronDown className={`transform transition-transform duration-300 ${expandedSections.chapter1 ? 'rotate-180' : ''}`} size={20} />
                    </button>
                    
                    <div className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${expandedSections.chapter1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 bg-white/40 rounded-xl space-y-6 border border-sage-green/10">
                        <p className="text-warm-gray leading-relaxed text-lg">
                          You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                        </p>
                        <div className="bg-gradient-to-r from-sage-green/10 to-transparent p-4 rounded-xl border-l-3 border-sage-green/40">
                          <p className="handwritten-quote text-xl font-handwritten text-deep-teal/80 italic text-center">
                            Every story can be rewritten. You hold the pen. ✨
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Content - Always Visible */}
                  <div className="hidden lg:block space-y-8">
                    <p className="text-base lg:text-lg text-warm-gray leading-relaxed">
                      You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                    </p>
                    <div className="bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent p-6 lg:p-8 rounded-2xl border-l-4 border-sage-green/30 hover-lift shadow-sm">
                      <p className="handwritten-quote text-xl lg:text-2xl font-handwritten text-deep-teal/80 italic text-center">
                        Every story can be rewritten. You hold the pen. ✨
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="lg:col-span-5 relative">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-blush-pink/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
                      alt="Trees reaching towards light - symbolizing growth"
                      className="relative rounded-2xl shadow-2xl object-cover w-full h-[280px] lg:h-[450px] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-sage-green/20 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2: Journey - Cleaner Layout */}
          <section ref={chapterTwoRef} className="py-12 lg:py-20">
            <div className={`max-w-7xl mx-auto transition-all duration-1000 ${chapterTwoVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex flex-col items-center gap-4 mb-8">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 icon-professional-pink rounded-full flex items-center justify-center">
                    <Compass className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <span className="text-base font-handwritten text-blush-pink/70 block mb-2">Chapter Two</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal text-shimmer leading-tight">
                      Your Transformation Journey
                    </h2>
                  </div>
                </div>
              </div>

              {/* Mobile - Improved Cards */}
              <div className="lg:hidden space-y-4">
                {[
                  { icon: Heart, title: "Explore", color: "sage-green", brief: "Discover your authentic self", detail: "We begin by gently exploring the stories that have shaped your life and identity, creating space for authentic self-discovery." },
                  { icon: Sparkles, title: "Transform", color: "blush-pink", brief: "Challenge limiting beliefs", detail: "Together, we'll challenge limiting beliefs and create new empowering narratives that align with your authentic self." },
                  { icon: Star, title: "Thrive", color: "deep-teal", brief: "Live with confidence & clarity", detail: "Step into your authentic power and live the life you truly want to create, with confidence and clarity." }
                ].map((step, index) => (
                  <div key={step.title} className="bg-white/50 rounded-2xl p-6 border border-sage-green/20 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 icon-subtle rounded-full flex items-center justify-center shrink-0">
                        <step.icon className="text-white" size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-deep-teal text-xl mb-1">{step.title}</h3>
                        <p className="text-warm-gray">{step.brief}</p>
                      </div>
                      <button
                        onClick={() => toggleSection(`step${index}`)}
                        className="text-sage-green p-2 hover:bg-sage-green/10 rounded-full transition-colors"
                      >
                        <ChevronDown className={`transform transition-transform duration-300 ${expandedSections[`step${index}`] ? 'rotate-180' : ''}`} size={18} />
                      </button>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections[`step${index}`] ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="mt-6 pt-6 border-t border-sage-green/20">
                        <p className="text-warm-gray leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop - Enhanced Grid */}
              <div className="hidden lg:block">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                  {[
                    { icon: Heart, title: "Explore", color: "sage-green", content: "We begin by gently exploring the stories that have shaped your life and identity, creating space for authentic self-discovery.", delay: "0s" },
                    { icon: Sparkles, title: "Transform", color: "blush-pink", content: "Together, we'll challenge limiting beliefs and create new empowering narratives that align with your authentic self.", delay: "0.2s" },
                    { icon: Star, title: "Thrive", color: "deep-teal", content: "Step into your authentic power and live the life you truly want to create, with confidence and clarity.", delay: "0.4s" }
                  ].map((step, index) => (
                    <div key={step.title} className={`story-chapter bg-gradient-to-br from-${step.color}/15 to-${step.color}/5 p-8 lg:p-10 rounded-2xl border border-${step.color}/20 hover-lift mouse-parallax shadow-lg`} 
                      style={{ 
                        transform: `translate(${mousePosition.x * (index + 1) * 0.5}px, ${mousePosition.y * (index + 1) * 0.5}px)`,
                        animationDelay: step.delay
                      }}>
                      <div className="w-18 h-18 lg:w-20 lg:h-20 icon-professional rounded-full flex items-center justify-center mx-auto mb-6">
                        <step.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-deep-teal mb-6 text-center">{step.title}</h3>
                      <p className="text-warm-gray leading-relaxed text-center text-lg">
                        {step.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 3: Services Preview */}
          <section ref={chapterThreeRef} className="py-12 lg:py-20">
            <div className={`transition-all duration-1000 ${chapterThreeVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              <ServicePreview />
            </div>
          </section>
          
          {/* Call to Action - Refined */}
          <section ref={ctaRef} className="text-center py-12 lg:py-20">
            <div className={`bg-gradient-to-br from-sage-green/20 via-sage-green/10 to-blush-pink/20 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-2xl max-w-6xl mx-auto border border-sage-green/30 transition-all duration-1000 hover-lift ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="mb-8 lg:mb-10">
                <div className="w-18 lg:w-24 h-18 lg:h-24 icon-professional rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-deep-teal mb-6 lg:mb-8 text-shimmer leading-tight">
                  Ready to Begin?
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto mb-10 lg:mb-12">
                <p className="text-xl lg:text-2xl text-warm-gray leading-relaxed mb-6 lg:mb-8 font-medium">
                  Transform your story. Reconnect with your power.
                </p>
                
                {/* Mobile - Expandable Details */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleSection('cta')}
                    className="flex items-center justify-center gap-3 text-sage-green font-medium mb-6 mx-auto hover:text-deep-teal transition-colors"
                  >
                    <span className="text-lg">Learn more</span>
                    <ChevronDown className={`transform transition-transform duration-300 ${expandedSections.cta ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  
                  <div className={`text-center mb-8 overflow-hidden transition-all duration-500 ease-in-out ${expandedSections.cta ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white/30 rounded-2xl p-6">
                      <p className="text-lg text-warm-gray leading-relaxed mb-6">
                        Together, we'll uncover the narratives that shape your life and rewrite them into powerful, empowering scripts that truly reflect who you are.
                      </p>
                      <div className="bg-gradient-to-r from-sage-green/10 to-transparent p-4 rounded-xl border-l-3 border-sage-green/40">
                        <p className="handwritten-quote text-xl font-handwritten text-deep-teal/80 italic">
                          Your story matters. You matter. Let's write it together. ✨
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop - Full Content */}
                <div className="hidden lg:block">
                  <p className="text-xl text-warm-gray leading-relaxed mb-8">
                    Together, we'll uncover the narratives that shape your life and rewrite them into powerful, empowering scripts that truly reflect who you are.
                  </p>
                  <div className="bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent p-6 rounded-2xl border-l-4 border-sage-green/40">
                    <p className="handwritten-quote text-2xl lg:text-3xl font-handwritten text-deep-teal/80 italic">
                      Your story matters. You matter. Let's write it together. ✨
                    </p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 lg:px-14 py-5 lg:py-6 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-xl lg:text-2xl font-medium group pulse-glow shadow-xl"
              >
                Start Your Journey 
                <ChevronRight className="ml-3 lg:ml-4 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="mt-16 lg:mt-24">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
