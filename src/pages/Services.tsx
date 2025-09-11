import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesApproach from '../components/services/ServicesApproach';
import ServicesContact from '../components/services/ServicesContact';

const Services = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Hero Section - Clean and Professional */}
        <ServicesHero />
        
        {/* Services Grid - Clean Cards */}
        <ServicesList />

        {/* My Approach - Clean Design */}
        <ServicesApproach />

        {/* How We Work Together - Clean Grid */}
        <ServicesContact />
      </div>
    </div>
  );
};

export default Services;