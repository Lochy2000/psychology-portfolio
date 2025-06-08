
import React from 'react';
import { ChevronRight, Sparkles, BookOpen, Heart, Compass, Star } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="space-y-32">
          {/* Hero Section */}
          <Hero />
          
          {/* Chapter 1: Who You Are - Story Unfolds */}
          <section ref={chapterOneRef} className="paper-texture">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ${chapterOneVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center gentle-float">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <div className="chapter-number">
                    <span className="text-sm font-handwritten text-sage-green/70 block">Chapter One</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal">Who You Are</h2>
                  </div>
                </div>
              </div>

              {/* Story Content with Visual Flow */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-sage-green to-blush-pink rounded-full journey-path"></div>
                    <div className="pl-8">
                      <p className="text-xl text-warm-gray leading-relaxed mb-6 prose">
                        You're someone who craves more control, freedom, and authenticity in your life - but inner doubts and external voices from society, culture, family or religion hold you back.
                      </p>
                      <p className="text-lg text-warm-gray leading-relaxed prose">
                        You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                      </p>
                    </div>
                  </div>
                  
                  {/* Handwritten Quote */}
                  <div className="bg-gradient-to-r from-sage-green/5 to-transparent p-6 rounded-r-2xl border-l-4 border-sage-green/30 hover-lift">
                    <p className="handwritten-quote text-lg font-handwritten text-deep-teal/80 italic">
                      Every story can be rewritten. You hold the pen.
                    </p>
                  </div>
                </div>
                
                {/* Visual Metaphor - Growth/Journey */}
                <div className="order-1 lg:order-2 relative">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
                      alt="Trees reaching towards light - symbolizing growth"
                      className="rounded-2xl shadow-2xl object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/20 via-transparent to-sage-green/10 rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/90 font-handwritten text-sm bg-deep-teal/30 backdrop-blur-sm rounded-lg p-3">
                        "Growth happens when we reach for the light, even through the shadows."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2: Your Journey - Interactive Path */}
          <section ref={chapterTwoRef} className="paper-texture">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ${chapterTwoVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              {/* Chapter Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blush-pink to-deep-teal rounded-full flex items-center justify-center gentle-float" style={{ animationDelay: '2s' }}>
                    <Compass className="text-white" size={20} />
                  </div>
                  <div className="chapter-number">
                    <span className="text-sm font-handwritten text-blush-pink/70 block">Chapter Two</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal text-shimmer">Your Journey to Transformation</h2>
                  </div>
                </div>
              </div>

              {/* Interactive Journey Steps */}
              <div className="relative">
                {/* Journey Path SVG */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-32" viewBox="0 0 800 100" fill="none">
                    <path 
                      d="M50 50 Q200 20, 400 50 T750 50" 
                      stroke="url(#journeyGradient)" 
                      strokeWidth="2" 
                      fill="none"
                      className="journey-path"
                    />
                    <defs>
                      <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9CAF88" />
                        <stop offset="50%" stopColor="#E6D1C5" />
                        <stop offset="100%" stopColor="#2C5F6B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

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

          {/* Chapter 3: Your Next Chapter */}
          <section ref={chapterThreeRef} className="paper-texture">
            <div className={`transition-all duration-1000 ${chapterThreeVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
              <ServicePreview />
            </div>
          </section>
          
          {/* Emotional Call to Action - Final Chapter */}
          <section ref={ctaRef} className="text-center paper-texture">
            <div className={`bg-gradient-to-br from-sage-green/15 to-blush-pink/15 backdrop-blur-sm rounded-2xl p-12 lg:p-16 shadow-xl max-w-5xl mx-auto border border-sage-green/30 transition-all duration-1000 hover-lift ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 gentle-float">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6 text-shimmer">
                  Ready to Begin Your New Chapter?
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-xl text-warm-gray leading-relaxed mb-6">
                  Every story has the power to transform. Together, we'll uncover the narratives that shape your life and rewrite them into powerful, empowering scripts that truly reflect who you are.
                </p>
                <div className="handwritten-quote text-2xl font-handwritten text-deep-teal/80 italic">
                  Your story matters. You matter. Let's write it together.
                </div>
              </div>
              
              <a 
                href="/contact" 
                className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-sage-green to-blush-pink text-white rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-xl font-medium group pulse-glow"
              >
                Start Your Journey 
                <ChevronRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-32">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
