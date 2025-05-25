
import React from 'react';
import { Facebook, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const contactLinks = [
    { icon: Mail, href: "mailto:mette@example.com", label: "Email" },
    { icon: Phone, href: "tel:+33745233230", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mette-nyholm-theilmann-207947227/", label: "LinkedIn" },
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
          <p className="text-sm">© 2025 Mette Nyholm Theilmann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
