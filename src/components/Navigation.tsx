import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-cream border-b border-sage-green/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-deep-teal hover:text-sage-green transition-colors duration-300 group"
          >
            <span className="text-2xl font-serif font-bold tracking-wide group-hover:scale-105 transition-transform duration-300">Mette</span>
            <span className="hidden sm:inline text-sm text-warm-gray/70 font-light">Coaching</span>
          </Link>
          
          {!isMobile && (
            <div className="flex space-x-8 flex-1 justify-center">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-warm-gray hover:text-deep-teal transition-colors whitespace-nowrap ${
                    location.pathname === link.path ? 'text-deep-teal font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sage-green to-deep-teal rounded-full animate-slide-in"></span>
                  )}
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/contact"
              className="bg-sage-green text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-deep-teal transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              {isMobile ? 'Contact' : 'Book a Consultation'}
            </Link>
            
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-deep-teal p-2 z-50 relative"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-green/20 py-4 absolute left-0 right-0 top-16 shadow-lg z-40">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-warm-gray hover:text-deep-teal transition-colors ${
                  location.pathname === link.path ? 'text-deep-teal font-semibold bg-sage-green/10' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
