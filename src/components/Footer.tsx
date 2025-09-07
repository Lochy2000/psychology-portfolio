
import React from 'react';
import { Phone, Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const contactLinks = [
    { icon: Mail, href: "mailto:mette@metteteilmann.com", label: "Email" },
    { icon: Phone, href: "tel:+33745233230", label: "Phone France" },
    { icon: Phone, href: "tel:+447756918126", label: "Phone UK" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/mette", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/mette", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/mette", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/mette", label: "Twitter" },
  ];

  return (
    <footer className="bg-deep-teal text-cream py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Contact Links */}
          <div className="flex space-x-6">
            {contactLinks.map((contact, index) => (
              <a
                key={`${contact.label}-${index}`}
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : undefined}
                rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="hover:text-sage-green transition-colors p-2"
                aria-label={contact.label}
              >
                <contact.icon size={24} />
              </a>
            ))}
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sage-green/20 hover:bg-sage-green/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-cream" />
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-sm space-y-1">
              <p className="break-words">Email: mette@metteteilmann.com</p>
              <p className="break-words">France: 0033 745 233 230 | UK: 0447 756 918 126</p>
            </div>
            <div className="border-t border-sage-green/30 pt-4 mt-4">
              <p className="text-xs">© 2025 Mette Nyholm Theilmann. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
