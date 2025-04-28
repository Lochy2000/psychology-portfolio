
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
    text: "Mette is a wonderful presenter who clearly knows her stuff.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "I had done quite a lot of research to find a partner to deliver interventions to help our working parents. Mette was the best choice by far in terms of expertise, value and impact.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  },
  {
    text: "The workshop provided excellent insights into modern parenting challenges. Highly recommended!",
    author: "Sarah Johnson",
    title: "Parent Coordinator, Brighton International School"
  },
  {
    text: "Mette's approach to parenting education is both practical and enlightening. A true expert in her field.",
    author: "Michael Chen",
    title: "School Principal, Westminster Academy"
  },
  {
    text: "The strategies shared in the workshop have made a significant difference in our school community.",
    author: "Emma Thompson",
    title: "Head of Parent Relations, St. Mary's College"
  },
  {
    text: "An invaluable resource for parents and educators alike. Mette's expertise shines through.",
    author: "James Wilson",
    title: "Education Consultant"
  },
  {
    text: "The parent-teacher workshops were transformative for our school's approach to family engagement.",
    author: "Rebecca Martinez",
    title: "Family Engagement Coordinator, Global Education Institute"
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
