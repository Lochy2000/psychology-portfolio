
import React from 'react';
import { Mail, MessageCircle, Linkedin, Phone } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';

const Contact = () => {
  const mousePosition = useMouseParallax(0.03);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6 text-shimmer">
              Let's Connect
            </h1>
            <p className="text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Ready to start your journey of transformation? I'm here to support you every step of the way.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-sage-green/10 animate-scale-in hover-lift">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Email */}
              <div 
                className="text-center group mouse-parallax"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
              >
                <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-sage-green/20 h-full flex flex-col justify-between hover-lift pulse-glow">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float">
                      <Mail className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">Email</h3>
                  </div>
                  <a 
                    href="mailto:mette@metteteilmann.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sage-green to-deep-teal text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div 
                className="text-center group mouse-parallax"
                style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              >
                <div className="bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-blush-pink/20 h-full flex flex-col justify-between hover-lift pulse-glow">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float" style={{ animationDelay: '2s' }}>
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">WhatsApp</h3>
                  </div>
                  <a 
                    href="https://wa.me/33745233230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blush-pink to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="text-center group mouse-parallax"
                style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
              >
                <div className="bg-gradient-to-br from-deep-teal/10 to-blush-pink/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-deep-teal/20 h-full flex flex-col justify-between hover-lift pulse-glow">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float" style={{ animationDelay: '4s' }}>
                      <Phone className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">Phone</h3>
                  </div>
                  <a 
                    href="tel:+33745233230" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-deep-teal to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div 
                className="text-center group mouse-parallax"
                style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
              >
                <div className="bg-gradient-to-br from-sage-green/10 to-deep-teal/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-sage-green/20 h-full flex flex-col justify-between hover-lift pulse-glow">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-deep-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float" style={{ animationDelay: '6s' }}>
                      <Linkedin className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">LinkedIn</h3>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/mette-nyholm-theilmann-207947227/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sage-green to-deep-teal text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-serif font-bold text-deep-teal mb-4 text-shimmer">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
                Whether you're seeking individual support, parenting guidance, or corporate solutions, 
                I'm here to help you rewrite your story and step into your power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
