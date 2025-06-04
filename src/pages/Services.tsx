
import React, { useState } from 'react';
import { Brain, Users, Heart, Building2, X } from 'lucide-react';
import ExpandableContentCard from '../components/ExpandableContentCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useIsMobile } from '../hooks/use-mobile';

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { ref: workingRef, isVisible: workingVisible } = useScrollAnimation();
  const isMobile = useIsMobile();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      title: "Narrative Psychology",
      icon: Brain,
      summary: "Explore and challenge the stories that shape your identity. Transform limiting beliefs into empowering narratives.",
      fullContent: `As a Narrative Psychologist, I help you explore and challenge the stories that shape your identity – stories you tell yourself, but also the voices of others and the expectations of society.

These inner narratives influence how you see yourself, what you believe is possible, and how you move through the world. Some stories empower you. Others hold you back from living your full potential.

I support you in gently unraveling those limiting narratives - so you can reclaim your truth, rewrite your story, and step fully into your own power. It's not about changing who you are or denying what the past brought you.

It's about helping you accept it and by becoming the author of your own life - not only cope but fully thrive.`,
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      iconBg: 'from-purple-500 to-indigo-600'
    },
    {
      title: "NLP Coaching", 
      icon: Users,
      summary: "Unlock limiting beliefs, build empowering habits, and gain clarity to take aligned action toward your desired life.",
      fullContent: `As an NLP coach, I help you unlock limiting beliefs, build empowering habits, gain clarity, and take aligned action toward the life you truly want.

Through powerful neuro-linguistic programming techniques, we'll rewire your thought patterns and create lasting positive change in your mindset and behaviors.

Together, we'll identify the unconscious patterns that may be holding you back and replace them with empowering strategies that support your growth and success.`,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconBg: 'from-emerald-500 to-teal-600'
    },
    {
      title: "Parenting Support",
      icon: Heart, 
      summary: "Build deeper, healthier family connections rooted in respect, empathy, and emotional awareness.",
      fullContent: `As a Parenting Consultant, I support parents in building deeper, healthier connections—rooted in respect, empathy, and emotional awareness.

Having worked with parents for over 25 years, I bring deep insight and compassion to the journey of parenting. My approach focuses on curiosity and exploration, creating safe spaces to question existing narratives.

I specialize in:
• Parenting before, during, and after divorce
• Parenting an expat family
• Navigating family, life, and work balance
• Empowering parents with confidence
• Supporting guilt-free work-life integration

Together, we'll create a new narrative that reflects how you want your family life to feel, look, and sound.`,
      gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
      iconBg: 'from-rose-500 to-pink-600'
    },
    {
      title: "HerEdge Côte d'Azur",
      icon: Building2,
      summary: "Local networking and support for women in the French Riviera region.",
      fullContent: `HerEdge Côte d'Azur is our local chapter dedicated to supporting women in the French Riviera region.

We create opportunities for networking, professional development, and personal growth specifically tailored to the unique needs of women living and working on the Côte d'Azur.

Our local initiatives include:
• Monthly networking events
• Professional mentorship programs
• Work-life balance workshops
• Cultural integration support for expat women
• Local business development opportunities

Join our community of empowered women making their mark on the French Riviera.`,
      gradient: 'from-blue-500/20 via-teal-500/10 to-transparent',
      iconBg: 'from-blue-500 to-teal-600'
    },
    {
      title: "HerEdge Corporate Support",
      icon: Building2,
      summary: "Creating workplaces where women are truly seen, supported, and empowered beyond simple representation.",
      fullContent: `At HerEdge Corporate, we go beyond checking boxes for female representation in the workplace - we help companies create workplaces where women are truly seen, supported, and empowered.

Together with my professional team, we partner with organizations to build systems that prioritize women's well-being, professional growth, and inclusion.

How we work:
• Consultation: Company-wide assessment and vision clarification
• Workshops & Webinars: Tailored sessions on work-life balance, parenting, menopause, health & wellbeing
• Accountability & Networking: Communities where female leaders connect and stay accountable
• Membership Community: Exclusive platform for professional development

We believe true progress includes everyone. That's why we actively engage men - educating and empowering them to become allies in creating more equitable workplaces.`,
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      iconBg: 'from-amber-500 to-orange-600'
    }
  ];

  const workingOptions = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      gradient: 'from-sage-green/20 via-sage-green/10 to-transparent',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-sage-green rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-deep-teal">
              Free 20-Minute Discovery Call (on Zoom)
            </h3>
          </div>
          <p className="text-warm-gray mb-4 leading-relaxed">We begin with a free 20-minute Zoom call where:</p>
          <ul className="space-y-2 text-warm-gray mb-4">
            <li className="flex items-start">
              <span className="text-sage-green mr-2">•</span>
              You get a feel for how I work.
            </li>
            <li className="flex items-start">
              <span className="text-sage-green mr-2">•</span>
              I gain a deeper understanding of your situation and needs.
            </li>
            <li className="flex items-start">
              <span className="text-sage-green mr-2">•</span>
              We both decide if we're a good fit to work together.
            </li>
          </ul>
          <p className="text-deep-teal font-medium">➡️ No pressure, just a friendly intro chat to explore possibilities.</p>
        </div>
      )
    },
    {
      id: 'ongoing',
      title: 'Ongoing Support',
      gradient: 'from-blush-pink/20 via-blush-pink/10 to-transparent',
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blush-pink rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-deep-teal">
              Online or In-Person Support
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-sage-green/10 to-transparent p-4 rounded-2xl border border-sage-green/20">
            <h4 className="font-serif font-bold text-deep-teal mb-3">Option A: Online via Zoom</h4>
            <p className="text-warm-gray mb-3"><strong>Format:</strong> 3 x 60-minute sessions</p>
            <p className="text-warm-gray mb-2">Between sessions, you'll receive:</p>
            <ul className="space-y-1 text-warm-gray text-sm">
              <li className="flex items-start">
                <span className="text-sage-green mr-2">•</span>
                A personalized summary report with key insights and next steps
              </li>
              <li className="flex items-start">
                <span className="text-sage-green mr-2">•</span>
                Relevant articles to support your journey
              </li>
              <li className="flex items-start">
                <span className="text-sage-green mr-2">•</span>
                For parenting clients: Access to supportive videos
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-deep-teal/10 to-transparent p-4 rounded-2xl border border-deep-teal/20">
            <h4 className="font-serif font-bold text-deep-teal mb-3">Option B: In Person (Côte d'Azur)</h4>
            <p className="text-warm-gray mb-3"><strong>Format:</strong> 3 x 60-minute sessions</p>
            <p className="text-warm-gray mb-2"><strong>Location options:</strong></p>
            <ul className="space-y-1 text-warm-gray text-sm mb-3">
              <li className="flex items-start">
                <span className="text-deep-teal mr-2">•</span>
                At your home
              </li>
              <li className="flex items-start">
                <span className="text-deep-teal mr-2">•</span>
                In a rented space (+ €15/session)
              </li>
            </ul>
            <p className="text-warm-gray mb-2"><strong>Experience:</strong> Creative, hands-on exploration using practical methods</p>
            <p className="text-warm-gray mb-2">Between sessions, you'll receive:</p>
            <ul className="space-y-1 text-warm-gray text-sm">
              <li className="flex items-start">
                <span className="text-deep-teal mr-2">•</span>
                A personalized action report
              </li>
              <li className="flex items-start">
                <span className="text-deep-teal mr-2">•</span>
                Articles for further support
              </li>
              <li className="flex items-start">
                <span className="text-deep-teal mr-2">•</span>
                Parenting videos + a journal for reflection
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'organisations',
      title: 'Organisations & Schools',
      gradient: 'from-deep-teal/20 via-deep-teal/10 to-transparent',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-deep-teal rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-deep-teal">
              Tailored Support for Businesses, Schools & Community Groups
            </h3>
          </div>
          <p className="text-warm-gray mb-4 leading-relaxed">We offer bespoke packages, developed collaboratively to create meaningful, lasting impact.</p>
          
          <p className="text-warm-gray mb-3 font-medium">Step-by-step approach:</p>
          <ol className="space-y-2 text-warm-gray">
            <li className="flex items-start">
              <span className="text-deep-teal mr-3 font-bold">1.</span>
              Free Introductory Zoom Call
            </li>
            <li className="flex items-start">
              <span className="text-deep-teal mr-3 font-bold">2.</span>
              Two in-person consultation sessions at your office
            </li>
            <li className="flex items-start">
              <span className="text-deep-teal mr-3 font-bold">3.</span>
              Custom Package Creation including:
              <ul className="ml-6 mt-1 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-deep-teal mr-2">•</span>
                  Webinars
                </li>
                <li className="flex items-start">
                  <span className="text-deep-teal mr-2">•</span>
                  In-house workshops
                </li>
                <li className="flex items-start">
                  <span className="text-deep-teal mr-2">•</span>
                  Resource memberships
                </li>
                <li className="flex items-start">
                  <span className="text-deep-teal mr-2">•</span>
                  Curated articles & toolkits
                </li>
                <li className="flex items-start">
                  <span className="text-deep-teal mr-2">•</span>
                  Other tailored services
                </li>
              </ul>
            </li>
          </ol>
          
          <p className="text-deep-teal font-medium mt-4"><strong>Outcome:</strong> A plan that aligns with your team's needs, values, and vision for long-term change.</p>
        </div>
      )
    }
  ];

  const MobileModal = ({ option, isOpen, onClose }: { option: typeof workingOptions[0], isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-0">
        <div className="bg-white rounded-t-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-slide-in-right">
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-3xl">
            <h2 className="text-lg font-serif font-bold text-deep-teal">{option.title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-sage-green/10 rounded-full">
              <X size={20} />
            </button>
          </div>
          <div className="p-6">
            {option.content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream/90 to-blush-pink/15 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-br from-deep-teal/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-deep-teal mb-6">Services I Offer</h1>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Tailored approaches to help you transform your life story and step into your personal power.
          </p>
        </div>
        
        <section ref={servicesRef} className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className={`bg-gradient-to-br from-white/90 via-white/80 to-transparent backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/30 cursor-pointer group relative overflow-hidden ${servicesVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-deep-teal">{service.title}</h3>
                      </div>
                      <p className="text-warm-gray leading-relaxed mb-6">{service.summary}</p>
                      <div className="text-sage-green font-medium hover:text-deep-teal transition-colors duration-300">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-white via-white/95 to-blush-pink/10">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-serif font-bold text-deep-teal flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-warm-gray leading-relaxed">
                    {service.fullContent.split('\n').map((paragraph, i) => (
                      paragraph.trim() && (
                        <p key={i} className="text-base lg:text-lg">
                          {paragraph.trim()}
                        </p>
                      )
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <section ref={approachRef} className="mb-20">
          <div className={`bg-gradient-to-br from-white/90 via-white/80 to-sage-green/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 transition-all duration-1000 ${approachVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-8 text-center">
              My Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-sage-green/10 to-blush-pink/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-sage-green/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Curiosity</h3>
                <p className="text-warm-gray text-sm leading-relaxed">We begin with curiosity: gently exploring the stories that shape your life today.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blush-pink/10 to-sage-green/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blush-pink to-blush-pink/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">Safe Space</h3>
                <p className="text-warm-gray text-sm leading-relaxed">Together, we'll create a safe space to question these stories and bring them out into the open.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-deep-teal/10 to-blush-pink/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-deep-teal/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-serif font-bold text-deep-teal mb-3 text-lg">New Narrative</h3>
                <p className="text-warm-gray text-sm leading-relaxed">From there, we'll begin to shape a new narrative that reflects how you want your life to feel.</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={workingRef}>
          <div className={`bg-gradient-to-br from-white/90 via-white/80 to-blush-pink/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 transition-all duration-1000 ${workingVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-teal mb-8 text-center">
              How We Can Work Together
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {workingOptions.map((option) => (
                <div key={option.id}>
                  {isMobile ? (
                    <>
                      <button
                        onClick={() => setActiveModal(option.id)}
                        className={`w-full p-6 bg-gradient-to-br ${option.gradient} hover:shadow-lg rounded-2xl text-left transition-all duration-300 border border-sage-green/20 group`}
                      >
                        <h3 className="font-serif font-bold text-deep-teal text-lg mb-2">{option.title}</h3>
                        <p className="text-sage-green text-sm group-hover:text-deep-teal transition-colors">
                          Tap to learn more →
                        </p>
                      </button>
                      <MobileModal 
                        option={option} 
                        isOpen={activeModal === option.id} 
                        onClose={() => setActiveModal(null)} 
                      />
                    </>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className={`w-full p-6 bg-gradient-to-br ${option.gradient} hover:shadow-lg rounded-2xl text-left transition-all duration-300 border border-sage-green/20 group cursor-pointer hover:scale-105`}>
                          <h3 className="font-serif font-bold text-deep-teal text-lg mb-2">{option.title}</h3>
                          <p className="text-sage-green text-sm group-hover:text-deep-teal transition-colors">
                            Click to learn more →
                          </p>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-white via-white/95 to-blush-pink/10">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-serif font-bold text-deep-teal">
                            {option.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          {option.content}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
