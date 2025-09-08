
# Mette Theilmann - Narrative Psychology & Coaching Website

A modern, responsive website for Mette Nyholm Theilmann, featuring narrative psychology services, NLP coaching, parenting support, and corporate wellness solutions through HerEdge.

## 🌐 Live Demo
// ...existing code...

## 🛠️ Tech Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Animation**: CSS animations with Tailwind utilities
// ...existing code...

## ✨ Key Features
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern Animations**: Smooth, elegant animations and transitions
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Performance Optimized**: Tree-shaken components and optimized assets
- **SEO Ready**: Semantic HTML structure and meta tag support
- **Interactive Elements**: Expandable service cards, hover effects, and scroll animations
- **Multi-page Navigation**: Home, About, Services, and Contact pages
- **Contact Integration**: Direct email, phone, and WhatsApp contact options

## 🎨 Design System
- **Color Palette**: 
  - Cream (#F5F0E6) - Background
  - Sage Green (#9CAF88) - Primary accent
  - Blush Pink (#E6D1C5) - Secondary accent
  - Deep Teal (#2C5F6B) - Text headers
  - Warm Gray (#8A8276) - Body text
- **Typography**: 
  - Headers: Lora serif font
  - Body: Open Sans
  - Decorative: Dancing Script for quotes
- **Components**: Consistent card layouts, gradient backgrounds, and glass-morphism effects

## 📱 Screenshots
- Homepage with hero section and service preview
- Responsive services page with expandable cards
- Contact page with multiple communication options
- Mobile-optimized navigation and layouts

---

## ⚙️ Installation & Development Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd mette-theilmann-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🧩 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Footer.tsx      # Site footer with contact info
│   ├── Navigation.tsx  # Main navigation bar
│   ├── ServiceCard.tsx # Individual service card component
│   ├── ServicePreview.tsx # Services section for homepage
│   └── ScrollToTop.tsx # Auto-scroll to top on route change
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero and overview
│   ├── About.tsx       # About page with personal story
│   ├── Services.tsx    # Detailed services with expandable cards
│   ├── Contact.tsx     # Contact information and CTAs
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile device detection
│   ├── useMouseParallax.tsx # Mouse movement parallax effect
│   └── useScrollAnimation.tsx # Scroll-triggered animations
├── lib/                # Utility functions
│   └── utils.ts        # Common utility functions
├── App.tsx             # Main app component with routing
├── main.tsx           # React app entry point
└── index.css          # Global styles and Tailwind config
```

### Key Components
- **Navigation**: Responsive nav with mobile menu
- **ServiceCard**: Reusable card component for services
- **Footer**: Contact information and social links
- **ScrollToTop**: Ensures pages load at top on navigation

---

## 🖼️ Design & Styling

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom Design System**: Consistent color palette and typography
- **Component-based**: Modular, reusable styled components
- **Responsive-first**: Mobile-first approach with breakpoint utilities

### Global Styles (`src/index.css`)
- Custom color variables matching brand palette
- Animation keyframes for smooth transitions
- Typography scale and font loading
- Responsive utilities and helper classes

### Theme Configuration (`tailwind.config.ts`)
- Custom color extensions
- Font family definitions
- Animation configurations
- Responsive breakpoint customizations

### Styling Guidelines
- Use semantic color names (sage-green, deep-teal)
- Maintain consistent spacing scale (4, 8, 12, 16, 20, 24)
- Apply hover states for interactive elements
- Ensure proper contrast ratios for accessibility

---

## 📦 Component Documentation

### ServiceCard Component
**Props:**
- `title: string` - Service title
- `icon: LucideIcon` - Icon component from Lucide
- `description: string` - Service description
- `details: string[]` - Array of service detail points

**Usage:**
```tsx
<ServiceCard
  title="Narrative Psychology"
  icon={Brain}
  description="Explore and challenge..."
  details={["Detail 1", "Detail 2"]}
/>
```

### Navigation Component
- Responsive navigation with mobile hamburger menu
- Active route highlighting
- Sticky positioning with backdrop blur
- Contact CTA button

### Footer Component
- Contact information display
- Social media links (email, phone)
- Copyright information
- Responsive layout

---

## 🔁 Deployment Instructions

// ...existing code...
1. Push changes to the main branch
// ...existing code...
3. Click "Share" → "Publish"
// ...existing code...

### Custom Domain Setup
// ...existing code...
2. Click "Connect Domain"
3. Follow DNS configuration instructions
4. Domain will be active within 24-48 hours

### Manual Build Deployment
For other platforms (Vercel, Netlify):
1. Run `npm run build`
2. Upload `dist/` folder contents
3. Configure single-page application (SPA) routing

---

## 🔐 Environment Variables

This project currently doesn't require environment variables for basic functionality. 

For future integrations, create a `.env` file:
```env
# Analytics (if added)
VITE_GA_TRACKING_ID=

# Contact Forms (if added)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## 📈 Analytics & Integrations

### Potential Integrations
- **Google Analytics**: Track visitor behavior and conversions
- **Contact Forms**: EmailJS or similar service for contact form handling
- **Scheduling**: Calendly integration for booking consultations
- **CRM**: Integration with client management systems

### Current Contact Methods
- Direct email links (`mailto:`)
- Phone number links (`tel:`)
- WhatsApp integration (`wa.me/`)

---

## 📋 Known Issues & Future Improvements

### Known Issues
- None currently identified

### Future Enhancements
- **Contact Form**: Add interactive contact form with validation
- **Booking System**: Integrate appointment scheduling
- **Blog Section**: Add content management for articles/insights
- **Testimonials**: Client testimonial carousel
- **Multilingual**: French language support for local clients
- **Analytics**: Visitor tracking and conversion metrics
- **SEO**: Enhanced meta tags and structured data
- **Performance**: Image optimization and lazy loading

### Accessibility Improvements
- Enhanced keyboard navigation
- Screen reader optimizations
- Focus management improvements
- Color contrast validation

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design across all breakpoints
- [ ] Navigation functionality on mobile/desktop
- [ ] All contact links working properly
- [ ] Service card expansion/collapse
- [ ] Smooth animations and transitions
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### Future Testing Implementation
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress or Playwright
- **Accessibility Tests**: axe-core integration
- **Performance Tests**: Lighthouse CI

---

## 👨‍💻 Contributors

**Mette Nyholm Theilmann** - Content and Requirements
**Development Team** - Lochlann O'Higgins - Cai Panesar 

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 📞 Contact & Support

For technical support or questions about this website:
- **Email**: mette@metteteilmann.com
- **Phone France**: +33 745 233 230
- **Phone UK**: +44 775 691 8126
- **WhatsApp**: [+33 745 233 230](https://wa.me/33745233230)

---

*Built with ❤️ using modern web technologies for optimal performance and user experience.*
