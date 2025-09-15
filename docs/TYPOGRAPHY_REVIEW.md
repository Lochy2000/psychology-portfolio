# Typography Review - Mette Coaching Portfolio

## Current Typography Analysis

### Font Families
- **Serif (Lora)**: Headings, titles, and important quotes
- **Sans-serif (Open Sans)**: Body text and general content
- **Handwritten (Dancing Script)**: Quotes and special emphasis

### Typography Consistency Issues Found

#### 1. **Heading Sizes Inconsistency**
- Home page hero: `text-3xl sm:text-4xl lg:text-5xl` (mobile) vs `text-5xl xl:text-6xl` (desktop)
- Services page: `text-3xl sm:text-4xl lg:text-5xl`
- About page: Various sizes without clear hierarchy
- Contact page: `text-3xl sm:text-4xl lg:text-5xl`

**Recommendation**: Standardize to:
- H1: `text-4xl sm:text-5xl lg:text-6xl` 
- H2: `text-3xl sm:text-4xl lg:text-5xl`
- H3: `text-2xl sm:text-3xl lg:text-4xl`
- H4: `text-xl sm:text-2xl lg:text-3xl`

#### 2. **Body Text Sizes**
- Inconsistent use of `text-base`, `text-lg`, and `text-sm`
- Mobile sizes not always properly adjusted
- Some paragraphs use `leading-relaxed` while others don't

**Recommendation**:
- Standard paragraph: `text-base sm:text-lg leading-relaxed`
- Small text/captions: `text-sm sm:text-base`
- Large emphasis: `text-lg sm:text-xl`

#### 3. **Color Contrast Issues**
- `text-warm-gray` (#8A8276) on light backgrounds may have accessibility issues
- Some gradient text overlays lack sufficient contrast

**Recommendation**:
- Use `text-warm-gray-enhanced` (darker) for better readability
- Add text shadows or backgrounds where needed

#### 4. **Font Weight Consistency**
- Mixed use of `font-medium`, `font-semibold`, and `font-bold`
- No clear hierarchy for when to use which weight

**Recommendation**:
- Headings: `font-bold`
- Subheadings: `font-semibold`
- Body emphasis: `font-medium`
- Regular text: `font-normal`

#### 5. **Line Height & Spacing**
- Inconsistent use of `leading-tight`, `leading-relaxed`, etc.
- Some text blocks lack proper spacing

**Recommendation**:
- Headings: `leading-tight`
- Body text: `leading-relaxed`
- Quotes: `leading-loose`

### Proposed Typography System

```css
/* Headings */
.h1 { @apply text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight; }
.h2 { @apply text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight; }
.h3 { @apply text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold leading-tight; }
.h4 { @apply text-xl sm:text-2xl lg:text-3xl font-serif font-semibold leading-snug; }

/* Body Text */
.body-large { @apply text-lg sm:text-xl font-sans leading-relaxed; }
.body-normal { @apply text-base sm:text-lg font-sans leading-relaxed; }
.body-small { @apply text-sm sm:text-base font-sans leading-relaxed; }

/* Special Text */
.quote { @apply font-handwritten italic text-lg sm:text-xl lg:text-2xl leading-loose; }
.caption { @apply text-sm text-warm-gray-enhanced; }
```

### Files Requiring Typography Updates

1. **Hero.tsx**: Standardize heading sizes and body text
2. **Home.tsx**: Fix inconsistent chapter headings
3. **Services.tsx**: Align service card typography
4. **About.tsx**: Improve text hierarchy
5. **Contact.tsx**: Ensure form labels are readable

### Accessibility Improvements Needed

1. Ensure all text has WCAG AA contrast ratio (4.5:1 for normal text)
2. Add focus states for all interactive elements
3. Improve gradient text readability with shadows/outlines
4. Test with screen readers for proper heading hierarchy