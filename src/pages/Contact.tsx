
import React from 'react';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/90 to-blush-pink/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6">
              Let's Connect
            </h1>
            <p className="text-lg lg:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Ready to start your journey of transformation? I'm here to support you every step of the way.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/80 via-white/70 to-sage-green/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-sage-green/20 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Email */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-sage-green/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">Email Me</h3>
                  <p className="text-warm-gray mb-6 text-sm leading-relaxed">
                    Send me a message and I'll get back to you within 24 hours.
                  </p>
                  <a 
                    href="mailto:mette@example.com" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sage-green to-deep-teal text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-blush-pink/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">WhatsApp</h3>
                  <p className="text-warm-gray mb-6 text-sm leading-relaxed">
                    Chat with me directly for quick questions or to schedule a consultation.
                  </p>
                  <a 
                    href="https://wa.me/33123456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blush-pink to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-deep-teal/10 to-blush-pink/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-deep-teal/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Linkedin className="text-white" size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">LinkedIn</h3>
                  <p className="text-warm-gray mb-6 text-sm leading-relaxed">
                    Connect with me professionally and stay updated on my latest insights.
                  </p>
                  <a 
                    href="https://linkedin.com/in/mette-nyholm-theilmann" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-deep-teal to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-serif font-bold text-deep-teal mb-4">
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
