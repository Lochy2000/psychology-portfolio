
import React from 'react';
import { Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const contactLinks = [
    { icon: Mail, href: "mailto:mette@metteteilmann.com", label: "Email" },
    { icon: Phone, href: "tel:+33745233230", label: "Phone France" },
    { icon: Phone, href: "tel:+447756918126", label: "Phone UK" },
    { icon: Facebook, href: "https://www.facebook.com/mette.theilmann", label: "Facebook" },
  ];

  return (
    <footer className="bg-deep-teal text-cream py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : undefined}
                rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="hover:text-sage-green transition-colors"
                aria-label={contact.label}
              >
                <contact.icon size={24} />
              </a>
            ))}
          </div>
          <div className="text-center space-y-2">
            <div className="text-sm space-y-1">
              <p>Email: mette@metteteilmann.com</p>
              <p>France: 0033 745 233 230 | UK: 0447 756 918 126</p>
            </div>
            <p className="text-xs">© 2025 Mette Nyholm Theilmann. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
