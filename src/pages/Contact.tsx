
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-deep-teal text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-center text-warm-gray mb-12">
            Ready to start your journey of transformation? Reach out today to schedule a consultation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 p-8 rounded-xl shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can I help you?"
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full bg-sage-green hover:bg-deep-teal">
              <Send className="mr-2" size={18} />
              Send Message
            </Button>
          </form>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="text-sage-green" />
              <a href="mailto:contact@mette.com" className="text-warm-gray hover:text-deep-teal">
                contact@mette.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-sage-green" />
              <a href="tel:+1234567890" className="text-warm-gray hover:text-deep-teal">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
