
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Mette conducted interactive parenting events for the Parents of Year 10 boys. They were run in an informative, helpful and professional way.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Mette is a wonderful presenter who clearly knows her stuff.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "I had done quite a lot of research to find a partner to deliver interventions to help our working parents. Mette was the best choice by far in terms of expertise, value and impact.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-sage-green/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-deep-teal text-center mb-12">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <Quote className="text-sage-green mb-4" size={24} />
              <p className="text-warm-gray mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-deep-teal">{testimonial.author}</p>
                <p className="text-sm text-warm-gray">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
