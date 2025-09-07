
import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const mousePosition = useMouseParallax(0.03);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/95 to-blush-pink/10 text-deep-teal animated-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-deep-teal mb-4 sm:mb-6 leading-tight">
              <span className="text-shimmer-safe">Let's Connect</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-warm-gray max-w-2xl mx-auto leading-relaxed px-2">
              Ready to start your journey of transformation? I'm here to support you every step of the way.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-sage-green/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-sage-green/10 animate-scale-in hover-lift">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Email */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-sage-green/20 h-full flex flex-col justify-between hover-lift pulse-glow min-h-[200px]">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float">
                      <Mail className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">Email</h3>
                  </div>
                  <a 
                    href="mailto:mette@metteteilmann.com" 
                    className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-sage-green to-deep-teal text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-blush-pink/20 h-full flex flex-col justify-between hover-lift pulse-glow min-h-[200px]">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float" style={{ animationDelay: '2s' }}>
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">WhatsApp</h3>
                  </div>
                  <a 
                    href="https://wa.me/33745233230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blush-pink to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-deep-teal/10 to-blush-pink/10 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-deep-teal/20 h-full flex flex-col justify-between hover-lift pulse-glow min-h-[200px]">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg gentle-float" style={{ animationDelay: '4s' }}>
                      <Phone className="text-white" size={28} />
                    </div>
                    <h3 className="font-serif font-bold text-deep-teal mb-4 text-xl">Phone</h3>
                    <div className="text-sm text-warm-gray mb-4 space-y-1">
                      <p>France: +33 745 233 230</p>
                      <p>UK: +44 775 691 8126</p>
                    </div>
                  </div>
                  <a 
                    href="tel:+33745233230" 
                    className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-deep-teal to-sage-green text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm font-medium w-full min-h-[48px]"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center px-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-teal mb-4 leading-tight">
                <span className="text-shimmer-safe">Ready to Begin Your Journey?</span>
              </h3>
              <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                Whether you're seeking individual support, parenting guidance, or corporate solutions, 
                I'm here to help you rewrite your story and step into your power.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-white/90 to-blush-pink/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-sage-green/10 animate-fade-in hover-lift">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-deep-teal mb-6 text-center">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-warm-gray mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 border border-sage-green/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-warm-gray mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 border border-sage-green/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-base font-medium text-warm-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-sage-green/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-warm-gray mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/70 border border-sage-green/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your journey and how I can support you..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-green to-deep-teal text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3" size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
