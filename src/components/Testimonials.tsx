
import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const testimonials = [
  {
    text: "Mette conducted interactive parenting events for the Parents of Year 10 boys. They were run in an informative, helpful and professional way.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Helpful support materials were made available for parents along with tools to create a healthier, happier & stronger relationship with their sons.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Mette's clear experience shone through, and her facilitation skills were very strong, specifically she handled sensitive questions very well. The feedback received was very strong with requests for further sessions.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Mette is a wonderful presenter who clearly knows her stuff.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "Mette's workshops were clearly structured, providing valuable and insightful information on raising a resilient child. I would fully recommend Mette's services and plan to use her company to run more workshops in the future.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "I had done quite a lot of research to find a partner to deliver interventions to help our working parents. Mette was the best choice by far in terms of expertise, value and impact.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  },
  {
    text: "I have no hesitation in recommending Mette. In fact, I would actively encourage by colleagues in other organisations to use her services to address the challenges of modern parenting.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  },
  {
    text: "Mette has organised and run a series of very successful separated parents' groups. The workshops are always on a relevant, engaging topic and are delivered with compassion, empathy and professionalism.",
    author: "Emma Newman",
    title: "Managing Partner, Stowe Family Law"
  },
  {
    text: "Mette is incredibly easy to work with. She really listens to what you need and adapts her materials to suit the audience.",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  },
  {
    text: "Mette's relaxed and engaging personal style has allowed our parents to really open up about their issues and to share their stories.",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  },
  {
    text: "Mette offers practical tips for building strong bonds between family members, which parents can immediately take away and use!",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  },
  {
    text: "As well as running courses for us, Mette has been to speak at our Annual General Meeting where she won over an audience of Trustees, volunteers and referrers with her enthusiasm and passion for the work that she does.",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  return (
    <section className="py-16 bg-sage-green/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-deep-teal text-center mb-12">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {currentTestimonials.map((testimonial, index) => (
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Testimonials;
