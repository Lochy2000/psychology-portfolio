import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesApproach from '../components/services/ServicesApproach';
import ServicesContact from '../components/services/ServicesContact';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services Content */}
      <div 
        className="bg-gradient-to-b from-white via-cream/30 to-white"
        data-services-section
      >
        <div className="container mx-auto px-4 py-16 sm:py-20">
          {/* Services List */}
          <ServicesList />
          
          {/* My Approach - Visual Timeline */}
          <div className="mt-16 sm:mt-20">
            <ServicesApproach />
          </div>
          
          {/* Ways to Connect with enhanced CTAs */}
          <div className="mt-16 sm:mt-20">
            <ServicesContact />
          </div>
          
          {/* Bottom spacing for footer */}
          <div className="h-8 sm:h-12" />
        </div>
      </div>
    </div>
  );
};

export default Services;