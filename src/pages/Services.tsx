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
        className="relative bg-transparent lg:bg-gradient-to-b lg:from-white lg:via-cream/30 lg:to-white"
        data-services-section
      >
        <div className="container mx-auto px-4 py-8 sm:py-12">
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