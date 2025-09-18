import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutQualifications from '../components/about/AboutQualifications';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 pt-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <AboutHero />

          {/* Story Chapters - Expandable Sections */}
          <AboutStory />

          {/* Qualifications Section */}
          <AboutQualifications />
        </div>
      </div>
    </div>
  );
};

export default About;