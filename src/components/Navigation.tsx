
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
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
          
          <Link 
            to="/contact"
            className="bg-sage-green text-white px-4 py-2 rounded-full hover:bg-deep-teal transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
