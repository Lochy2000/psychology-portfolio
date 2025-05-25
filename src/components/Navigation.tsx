
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
    <nav className="bg-cream border-b border-sage-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif font-bold text-xl text-deep-teal">
            Mette
          </Link>
          
          {!isMobile && (
            <div className="hidden md:flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-warm-gray hover:text-deep-teal transition-colors ${
                    location.pathname === link.path ? 'text-deep-teal font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/contact"
              className="bg-sage-green text-white px-4 py-2 rounded-full hover:bg-deep-teal transition-colors"
            >
              {isMobile ? 'Contact' : 'Book a Consultation'}
            </Link>
            
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-deep-teal p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-green/20 py-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-warm-gray hover:text-deep-teal transition-colors ${
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
