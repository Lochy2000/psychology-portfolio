
import React, { useState, useEffect } from 'react';
import { Quote, ChevronDown } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    text: "Mette conducted interactive parenting events for the Parents of Year 10 boys. They were run in an informative, helpful and professional way.",
    fullText: "Mette conducted interactive parenting events for the Parents of Year 10 boys. They were run in an informative, helpful and professional way. The sessions provided valuable insights into understanding teenage behavior and effective communication strategies.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Helpful support materials were made available for parents along with tools to create a healthier, happier & stronger relationship with their sons.",
    fullText: "Helpful support materials were made available for parents along with tools to create a healthier, happier & stronger relationship with their sons. The practical resources have been invaluable in improving family dynamics and building trust.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Mette's clear experience shone through, and her facilitation skills were very strong, specifically she handled sensitive questions very well.",
    fullText: "Mette's clear experience shone through, and her facilitation skills were very strong, specifically she handled sensitive questions very well. The feedback received was very strong with requests for further sessions. Parents felt comfortable sharing their concerns and found the guidance extremely practical.",
    author: "Lorraine Soares",
    title: "Academic Director, St. James's Boy School Ashford"
  },
  {
    text: "Mette is a wonderful presenter who clearly knows her stuff.",
    fullText: "Mette is a wonderful presenter who clearly knows her stuff. Her expertise in child psychology and family dynamics is evident in every session. She has a natural ability to connect with parents and provide actionable advice.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "Mette's workshops were clearly structured, providing valuable and insightful information on raising a resilient child.",
    fullText: "Mette's workshops were clearly structured, providing valuable and insightful information on raising a resilient child. I would fully recommend Mette's services and plan to use her company to run more workshops in the future. The impact on our parent community has been remarkable.",
    author: "Dan Boorman",
    title: "Deputy Headmaster, Bishopsgate School Egham"
  },
  {
    text: "I had done quite a lot of research to find a partner to deliver interventions to help our working parents.",
    fullText: "I had done quite a lot of research to find a partner to deliver interventions to help our working parents. Mette was the best choice by far in terms of expertise, value and impact. Her understanding of the challenges faced by working parents is exceptional.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  },
  {
    text: "I have no hesitation in recommending Mette. In fact, I would actively encourage my colleagues in other organisations to use her services.",
    fullText: "I have no hesitation in recommending Mette. In fact, I would actively encourage my colleagues in other organisations to use her services to address the challenges of modern parenting. The positive feedback from our employees has been overwhelming.",
    author: "Hamza Siddiq",
    title: "HR Manager, Elavon U.S, Global Bank"
  },
  {
    text: "Mette has organised and run a series of very successful separated parents' groups.",
    fullText: "Mette has organised and run a series of very successful separated parents' groups. The workshops are always on a relevant, engaging topic and are delivered with compassion, empathy and professionalism. Her ability to create a safe space for difficult conversations is remarkable.",
    author: "Emma Newman",
    title: "Managing Partner, Stowe Family Law"
  },
  {
    text: "Mette is incredibly easy to work with. She really listens to what you need and adapts her materials to suit the audience.",
    fullText: "Mette is incredibly easy to work with. She really listens to what you need and adapts her materials to suit the audience. Her flexibility and responsiveness make collaboration effortless, and the results consistently exceed expectations.",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  },
  {
    text: "Mette's relaxed and engaging personal style has allowed our parents to really open up about their issues and to share their stories.",
    fullText: "Mette's relaxed and engaging personal style has allowed our parents to really open up about their issues and to share their stories. This creates a supportive environment where real learning and growth can happen. The transformation we've seen in families is incredible.",
    author: "Emily Sampson",
    title: "Trustee, Homestart Slough"
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality - only when no card is expanded
  useEffect(() => {
    if (!api || !isAutoScrolling || expandedCard !== null) return;

    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [api, isAutoScrolling, expandedCard]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleCardClick = (index: number) => {
    // Stop auto-scrolling when a card is clicked
    setIsAutoScrolling(false);
    
    // Toggle expanded state
    if (expandedCard === index) {
      setExpandedCard(null);
      // Resume auto-scrolling after collapse
      setTimeout(() => setIsAutoScrolling(true), 1000);
    } else {
      setExpandedCard(index);
    }
  };

  const handleCloseExpanded = () => {
    setExpandedCard(null);
    // Resume auto-scrolling after closing
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-sage-green/10 via-sage-green/5 to-blush-pink/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex flex-col items-center gap-4 mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-sage-green to-blush-pink rounded-full flex items-center justify-center gentle-float shadow-lg">
              <Quote className="text-white" size={18} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-teal leading-tight">
              What People Say
            </h2>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    index={index}
                    isExpanded={expandedCard === index}
                    onClick={() => handleCardClick(index)}
                    onClose={handleCloseExpanded}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden lg:flex -left-16 bg-white/80 hover:bg-white border-sage-green/30 text-sage-green hover:text-deep-teal shadow-lg" />
            <CarouselNext className="hidden lg:flex -right-16 bg-white/80 hover:bg-white border-sage-green/30 text-sage-green hover:text-deep-teal shadow-lg" />
          </Carousel>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(current * testimonials.length / testimonials.length) === index ? 'bg-sage-green scale-125' : 'bg-sage-green/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Auto-scroll indicator */}
          {isAutoScrolling && expandedCard === null && (
            <div className="text-center mt-4">
              <p className="text-sm text-sage-green/70 font-medium">
                Click any card to pause and read more
              </p>
            </div>
          )}
        </div>

        {/* Expanded Card Overlay */}
        {expandedCard !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={handleCloseExpanded}>
            <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <Quote className="text-sage-green flex-shrink-0" size={32} />
                <button
                  onClick={handleCloseExpanded}
                  className="text-warm-gray hover:text-deep-teal transition-colors p-2"
                >
                  <ChevronDown className="rotate-180" size={24} />
                </button>
              </div>
              
              <p className="text-warm-gray mb-6 leading-relaxed text-lg">
                "{testimonials[expandedCard].fullText}"
              </p>
              
              <div className="border-t border-sage-green/10 pt-4">
                <p className="font-bold text-deep-teal text-lg">{testimonials[expandedCard].author}</p>
                <p className="text-warm-gray/80 text-sm leading-relaxed">{testimonials[expandedCard].title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  testimonial, 
  index, 
  isExpanded, 
  onClick,
  onClose
}: {
  testimonial: typeof testimonials[0];
  index: number;
  isExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
}) => {
  return (
    <div 
      className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sage-green/20 hover-lift h-full flex flex-col cursor-pointer transition-all duration-300 ${
        isExpanded ? 'ring-2 ring-sage-green/50' : 'hover:shadow-xl'
      }`}
      onClick={onClick}
    >
      <Quote className="text-sage-green mb-4 flex-shrink-0" size={28} />
      
      <div className="flex-1">
        <p className="text-warm-gray mb-6 leading-relaxed text-base line-clamp-4">
          "{testimonial.text}"
        </p>
      </div>
      
      <div className="border-t border-sage-green/10 pt-4 mt-auto">
        <p className="font-bold text-deep-teal text-base">{testimonial.author}</p>
        <p className="text-warm-gray/80 text-sm leading-relaxed">{testimonial.title}</p>
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <span className="text-sage-green text-sm font-medium">Click to read full testimony</span>
        <ChevronDown className="ml-2 text-sage-green" size={16} />
      </div>
    </div>
  );
};

export default Testimonials;
