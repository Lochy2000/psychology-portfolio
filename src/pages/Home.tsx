
import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        <div className="space-y-12 lg:space-y-16 xl:space-y-24">
          
          {/* Identity Quote Section - Moved Up */}
          <section className="py-8 lg:py-10 xl:py-16">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center content-flow rounded-3xl p-4 lg:p-6 xl:p-10 section-transition">
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
                  <div className="text-center lg:text-left space-y-3 lg:space-y-4">
                    <div>
                      <span className="text-sage-green font-medium text-xs lg:text-sm uppercase tracking-wider">Core Belief</span>
                    </div>
                    <blockquote className="text-lg lg:text-xl xl:text-3xl font-serif text-deep-teal leading-relaxed">
                      "Our identity is not formed in isolation - we develop, heal, and grow through connections with others."
                    </blockquote>
                    <p className="text-base lg:text-lg xl:text-xl font-medium text-sage-green">People are shaped by people.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 1: Who You Are - Compact Layout */}
          <section ref={chapterOneRef} className="py-8 lg:py-10 xl:py-16 section-connector">
            <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${chapterOneVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header - Centered */}
              <div className="text-center mb-4 lg:mb-6">
                <div className="flex flex-col items-center gap-2 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 icon-professional rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" size={16} />
                  </div>
                  <div className="text-center">
                    <span className="text-xs lg:text-sm font-handwritten text-sage-green/70 block">Chapter One</span>
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal leading-tight">Who You Are</h2>
                  </div>
                </div>
              </div>

              {/* Main Content - Laptop Optimized */}
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-5 lg:space-y-6 xl:space-y-8">
                  {/* Primary Message - Laptop Sized */}
                  <div className="bg-gradient-to-r from-sage-green/15 via-sage-green/10 to-transparent p-4 lg:p-6 xl:p-8 rounded-2xl border-l-4 border-sage-green shadow-sm">
                    <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-deep-teal leading-relaxed">
                      You crave control, freedom, and authenticity - but inner doubts hold you back.
                    </p>
                  </div>
                  
                  {/* Content with Tighter Spacing */}
                  <div className="space-y-4 lg:space-y-5 xl:space-y-8">
                    <p className="text-base lg:text-lg xl:text-xl text-warm-gray leading-relaxed">
                      You're seeking a safe, supportive space and guide to help you explore the stories you've been told - and the ones you tell yourself - so you can reconnect with your true power.
                    </p>
                    <div className="bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent p-4 lg:p-6 xl:p-8 rounded-2xl border-l-4 border-sage-green/30 shadow-sm">
                      <p className="text-lg lg:text-xl xl:text-2xl font-handwritten text-deep-teal/80 text-center">
                        Every story can be rewritten. You hold the pen.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Element - Laptop Optimized */}
                <div className="lg:col-span-5 relative">
                  <div className="relative group h-80 lg:h-96 xl:h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-blush-pink/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop"
                      alt="Trees reaching towards light - symbolizing growth"
                      className="relative rounded-2xl shadow-2xl object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/30 via-transparent to-sage-green/20 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2: Journey - Compact Layout */}
          <section ref={chapterTwoRef} className="py-10 lg:py-12 xl:py-20 section-connector organic-bg">
            <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${chapterTwoVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              {/* Chapter Header - Compact */}
              <div className="text-center mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 icon-professional-pink rounded-full flex items-center justify-center">
                    <Compass className="text-white" size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs lg:text-sm font-handwritten text-blush-pink/70 block">Chapter Two</span>
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal leading-tight">
                      Your Journey
                    </h2>
                  </div>
                </div>
              </div>

              {/* Journey Steps - Streamlined for Laptops */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  { icon: Heart, title: "Explore", content: "Discover the stories that have shaped your identity and explore new possibilities." },
                  { icon: Sparkles, title: "Transform", content: "Rewrite limiting beliefs into empowering narratives that serve you." },
                  { icon: Star, title: "Thrive", content: "Live authentically with confidence, clarity, and personal power." }
                ].map((step, index) => (
                  <div 
                    key={step.title} 
                    className="story-chapter content-flow p-4 lg:p-6 rounded-2xl text-center hover-lift min-h-[200px] lg:min-h-[220px] xl:min-h-[300px] flex flex-col justify-center section-transition"
                  >
                    <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 icon-professional rounded-full flex items-center justify-center mb-4 lg:mb-6 mx-auto">
                      <step.icon className="text-white" size={18} />
                    </div>
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif font-bold text-deep-teal mb-3 lg:mb-4">{step.title}</h3>
                    <p className="text-warm-gray leading-relaxed text-sm lg:text-base xl:text-lg">
                      {step.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Chapter 3: Services Preview */}
          <section ref={chapterThreeRef} className="py-10 lg:py-12 xl:py-20">
            <div className={`w-full transition-all duration-1000 ${chapterThreeVisible ? 'story-reveal' : 'opacity-0 translate-y-10'}`}>
              <ServicePreview />
            </div>
          </section>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-10 lg:py-12 xl:py-20">
        <Testimonials />
      </div>
      
      {/* Call to Action - Streamlined & Last */}
      <section ref={ctaRef} className="text-center py-10 lg:py-12 xl:py-20 bg-gradient-to-br from-white/90 to-sage-green/5">
        <div className={`max-w-4xl mx-auto px-4 transition-all duration-1000 ${ctaVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
          <div className="space-y-6 lg:space-y-8">
            <div>
              <div className="w-12 h-12 lg:w-16 lg:h-16 icon-professional rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={18} />
              </div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold text-deep-teal leading-tight">
                Ready to Begin?
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-warm-gray leading-relaxed font-medium">
                Transform your story. Reconnect with your power.
              </p>
              <p className="text-base lg:text-lg text-warm-gray/80 leading-relaxed">
                Together, we'll rewrite the narratives that truly reflect who you are.
              </p>
            </div>

            <div className="bg-gradient-to-r from-sage-green/10 via-sage-green/5 to-transparent p-4 lg:p-5 rounded-2xl border-l-4 border-sage-green/40 max-w-2xl mx-auto">
              <p className="text-base lg:text-lg font-handwritten text-deep-teal/80">
                Your story matters. Let's write it together.
              </p>
            </div>

            <a 
              href="mailto:mette@metteteilmann.com?subject=Ready to Begin My Journey" 
              className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-3.5 bg-deep-teal text-white rounded-full hover:shadow-2xl hover:bg-opacity-90 transition-all duration-500 transform hover:scale-105 text-base lg:text-lg font-medium group shadow-xl"
            >
              Start Your Journey 
              <ChevronRight className="ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
