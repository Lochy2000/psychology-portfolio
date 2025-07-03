
# Technical Documentation - Mette Theilmann Website

## 🏗️ Architecture Overview

This React application follows a component-based architecture with TypeScript for type safety and Tailwind CSS for styling. The project is structured around single-page application (SPA) principles with client-side routing.

## 📁 Detailed File Structure

```
mette-theilmann-website/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ui/                 # Shadcn/ui components (35+ components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── ExpandableContentCard.tsx
│   │   ├── Footer.tsx          # Site footer with contact info
│   │   ├── Hero.tsx           # Homepage hero section
│   │   ├── Navigation.tsx     # Main navigation component
│   │   ├── ScrollToTop.tsx    # Route change scroll management
│   │   ├── ServiceCard.tsx    # Reusable service card
│   │   ├── ServicePreview.tsx # Homepage services section
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   └── WhoYouAre.tsx     # About section component
│   ├── hooks/
│   │   ├── use-mobile.tsx     # Mobile device detection
│   │   ├── use-toast.ts       # Toast notification hook
│   │   ├── useMouseParallax.tsx # Mouse parallax effect
│   │   └── useScrollAnimation.tsx # Scroll-triggered animations
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── About.tsx          # Personal story and background
│   │   ├── Contact.tsx        # Contact information and CTAs
│   │   ├── Home.tsx           # Homepage layout
│   │   ├── Index.tsx          # Landing page redirect
│   │   ├── NotFound.tsx       # 404 error page
│   │   └── Services.tsx       # Detailed services page
│   ├── App.tsx                # Main application component
│   ├── main.tsx              # React root and providers
│   ├── index.css             # Global styles and Tailwind
│   └── vite-env.d.ts         # Vite type definitions
├── components.json            # Shadcn/ui configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build configuration
```

## 🔧 Technology Stack Deep Dive

### Core Technologies
- **React 18.3.1**: Latest React with concurrent features
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI & Design System
- **Shadcn/ui**: High-quality, accessible React components
- **Lucide React**: Consistent icon library (462+ icons)
- **Custom Design System**: Brand-consistent colors and typography
- **Responsive Design**: Mobile-first approach

### State Management & Data
- **TanStack React Query**: Server state management and caching
- **React Router DOM**: Client-side routing
- **React Hook Form**: Form handling and validation
- **Zod**: Runtime type validation

### Development Tools
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Tailwind CSS Animate**: Animation utilities

## 🎨 Design System Implementation

### Color System
```typescript
// Tailwind config custom colors
colors: {
  'sage-green': '#9CAF88',
  'blush-pink': '#E6D1C5', 
  'cream': '#F5F0E6',
  'deep-teal': '#2C5F6B',
  'warm-gray': '#8A8276',
}
```

### Typography Scale
```css
/* Font families */
.font-serif { font-family: 'Lora', serif; }
.font-sans { font-family: 'Open Sans', sans-serif; }
.font-handwritten { font-family: 'Dancing Script', cursive; }

/* Text sizes */
.text-xs     /* 12px */
.text-sm     /* 14px */
.text-base   /* 16px */
.text-lg     /* 18px */
.text-xl     /* 20px */
.text-2xl    /* 24px */
.text-3xl    /* 30px */
.text-4xl    /* 36px */
.text-5xl    /* 48px */
```

### Animation System
```css
/* Custom animations */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes gentle-pulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}

@keyframes subtle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```

## 📱 Responsive Design Strategy

### Breakpoint System
```typescript
// Tailwind breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices  
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
2xl: '1536px' // 2X Extra large devices
```

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized navigation for mobile

### Responsive Patterns
```tsx
// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

// Responsive text sizing
<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">

// Responsive spacing
<div className="p-4 sm:p-6 lg:p-8 xl:p-12">
```

## 🔄 State Management

### React Query Implementation
```typescript
// Query client setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Usage pattern
const { data, isLoading, error } = useQuery({
  queryKey: ['service-data'],
  queryFn: fetchServiceData,
});
```

### Local State Patterns
```typescript
// Service expansion state
const [expandedService, setExpandedService] = useState<string | null>(null);

// Mobile menu state
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

## 🎭 Animation System

### CSS-based Animations
- **Fade In**: Smooth content appearance
- **Scale In**: Card hover effects
- **Gentle Pulse**: Decorative elements
- **Subtle Float**: Background elements
- **Hover Lift**: Interactive components

### Performance Considerations
- Hardware acceleration with `transform` and `opacity`
- Minimal layout thrashing
- Reduced motion support via `prefers-reduced-motion`

## 🔒 Security & Performance

### Security Measures
- TypeScript for type safety
- Input validation with Zod
- Secure external links (`rel="noopener noreferrer"`)
- XSS prevention through React's built-in protection

### Performance Optimizations
- Tree-shaking with Vite
- Component lazy loading potential
- Optimized image handling
- Minimal bundle size focus

## 🧪 Testing Strategy

### Component Testing Approach
```typescript
// Example test structure
describe('ServiceCard', () => {
  it('renders service information correctly', () => {
    render(<ServiceCard title="Test" icon={Brain} description="Test desc" details={['Detail']} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Testing Utilities
- React Testing Library for component tests
- Jest for unit testing
- Mock Service Worker for API mocking
- Accessibility testing with jest-axe

## 🚀 Build & Deployment

### Build Process
```bash
# Development
npm run dev        # Start dev server

# Production
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run linting
```

### Build Output
```
dist/
├── assets/
│   ├── index-[hash].js    # Main application bundle
│   ├── index-[hash].css   # Compiled styles
│   └── [asset]-[hash].*   # Static assets
├── index.html             # Entry HTML file
└── robots.txt             # SEO robots file
```

### Deployment Configuration
- **Vite Config**: SPA routing support
- **Build Optimization**: Code splitting and minification
- **Asset Optimization**: Image compression and caching headers

## 🔧 Development Workflow

### Code Quality
- **ESLint**: Code linting and formatting
- **TypeScript**: Compile-time error checking
- **Prettier**: Code formatting (implicit)
- **Git Hooks**: Pre-commit quality checks

### Development Best Practices
- Component composition over inheritance
- Custom hooks for shared logic
- Consistent naming conventions
- Proper TypeScript interfaces
- Responsive-first development

## 📊 Monitoring & Analytics

### Performance Monitoring
- Vite build analysis
- Bundle size tracking
- Core Web Vitals monitoring
- Lighthouse performance scores

### User Analytics (Future)
- Google Analytics 4 integration
- Contact conversion tracking
- User journey analysis
- A/B testing capabilities

## 🔄 Version Control & Branching

### Git Strategy
- **Main Branch**: Production-ready code
- **Development**: Integration branch
- **Feature Branches**: Individual features
- **Hotfix Branches**: Critical fixes

### Commit Convention
```
feat: add new service card component
fix: resolve mobile navigation issue
docs: update README with deployment info
style: improve responsive design
refactor: extract custom hooks
test: add component unit tests
```

---

This technical documentation provides a comprehensive overview of the website's architecture, implementation details, and development practices. It serves as a reference for future development and maintenance work.
