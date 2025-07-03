
# Deployment Guide - Mette Theilmann Website

## 🚀 Quick Deployment (Lovable Platform)

### Current Setup
The website is currently deployed on the Lovable platform with automatic deployment.

1. **Access the Project**
   - URL: https://lovable.dev/projects/a7ab716f-bb20-447c-bee3-b672d0e7f1ce
   - Login to your Lovable account

2. **Deploy Changes**
   - Make changes through the Lovable editor
   - Changes are automatically committed and deployed
   - Live site updates within minutes

3. **Manual Deployment**
   - Click "Share" in the top navigation
   - Select "Publish" to deploy latest changes
   - Monitor deployment status in the interface

---

## 🌐 Custom Domain Setup

### Prerequisites
- Paid Lovable plan required
- Domain ownership and DNS access

### Step-by-Step Domain Connection

1. **Access Domain Settings**
   ```
   Project → Settings → Domains → Connect Domain
   ```

2. **Domain Configuration Options**
   
   **Option A: Root Domain (yourdomain.com)**
   ```
   A Record: @ → [Lovable IP Address]
   CNAME: www → [your-project].lovable.app
   ```

   **Option B: Subdomain (services.yourdomain.com)**
   ```
   CNAME: services → [your-project].lovable.app
   ```

3. **DNS Provider Examples**

   **Cloudflare:**
   ```
   Type: CNAME
   Name: @ (or subdomain)
   Target: [your-project].lovable.app
   TTL: Auto
   ```

   **GoDaddy:**
   ```
   Type: CNAME
   Host: @ (or subdomain)  
   Points to: [your-project].lovable.app
   TTL: 1 Hour
   ```

   **Namecheap:**
   ```
   Type: CNAME Record
   Host: @ (or subdomain)
   Value: [your-project].lovable.app
   TTL: Automatic
   ```

4. **Verification Process**
   - DNS changes take 24-48 hours to propagate
   - Use `nslookup yourdomain.com` to verify
   - Check with online DNS checker tools

---

## 🔧 Alternative Deployment Options

### Vercel Deployment

1. **Prepare Repository**
   ```bash
   git clone [repository-url]
   cd mette-theilmann-website
   npm install
   ```

2. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

3. **Vercel Configuration (vercel.json)**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite",
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

### Netlify Deployment

1. **Build Settings**
   ```
   Build Command: npm run build
   Publish Directory: dist
   ```

2. **Netlify Configuration (_redirects)**
   ```
   /*    /index.html   200
   ```

3. **Environment Variables**
   ```
   NODE_VERSION=18
   NPM_VERSION=8
   ```

### GitHub Pages Deployment

1. **GitHub Actions Workflow (.github/workflows/deploy.yml)**
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

---

## 🔐 Environment Configuration

### Production Environment Variables

Create `.env.production` file:
```env
# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Integration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx

# Performance
VITE_API_URL=https://api.yourdomain.com
```

### Security Headers Configuration

**Netlify (_headers file):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

---

## 📊 Monitoring & Performance

### Build Optimization

1. **Bundle Analysis**
   ```bash
   npm install --save-dev vite-bundle-analyzer
   npm run build -- --analyze
   ```

2. **Performance Monitoring**
   - Google PageSpeed Insights
   - GTmetrix analysis
   - Core Web Vitals tracking

### Error Monitoring Setup

**Sentry Integration:**
```bash
npm install @sentry/react @sentry/tracing
```

```typescript
// main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

---

## 🔄 CI/CD Pipeline

### Automated Testing & Deployment

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Production
        run: |
          # Deploy to your chosen platform
```

---

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Routing Issues (404s)**
   - Ensure SPA redirects are configured
   - Check `.htaccess` or `_redirects` file
   - Verify base URL configuration

3. **Asset Loading Problems**
   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/your-path/', // Set correct base path
     build: {
       assetsDir: 'assets',
     },
   });
   ```

4. **Memory Issues During Build**
   ```json
   // package.json
   {
     "scripts": {
       "build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
     }
   }
   ```

### Performance Issues

1. **Slow Loading**
   - Enable gzip compression on server
   - Implement code splitting
   - Optimize images and assets

2. **Large Bundle Size**
   ```bash
   # Analyze bundle
   npx vite-bundle-analyzer dist/
   
   # Tree-shaking check
   npm run build -- --report
   ```

---

## 📈 Post-Deployment Checklist

### Immediate Verification
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Contact links working
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### SEO & Performance
- [ ] Google Search Console setup
- [ ] Analytics integration
- [ ] Sitemap submission
- [ ] Performance monitoring
- [ ] Security headers configured

### Ongoing Maintenance
- [ ] Regular security updates
- [ ] Performance monitoring
- [ ] Backup procedures
- [ ] Content updates process
- [ ] Error monitoring setup

---

## 📞 Deployment Support

For deployment assistance:
- **Technical Issues**: Check platform documentation
- **DNS Problems**: Contact domain provider
- **Performance Issues**: Use monitoring tools
- **Security Concerns**: Review security headers

**Emergency Contacts:**
- Lovable Support: Platform documentation
- DNS Provider: Your domain registrar support
- CDN Provider: Platform-specific support

---

*This deployment guide covers multiple deployment options and configurations to ensure reliable website hosting across different platforms.*
