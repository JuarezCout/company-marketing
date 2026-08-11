# L8 Studio - Premium Custom 3D Printing Website

A modern, high-converting Next.js website for L8 Studio, showcasing custom 3D printing services. Built with React 19, Next.js 16, and Tailwind CSS following the StoryBrand framework.

## 🚀 Features

- **Hero Section**: Impactful headline positioning the customer as the hero with premium CTAs
- **Problem Section**: Identifies frustrations with generic items and positions custom 3D printing as the solution
- **Visual 3-Step Process**: Clear workflow visualization (Share → Design → Print)
- **Portfolio Gallery**: Showcase of past projects with social proof and testimonials
- **FAQ Section**: Comprehensive answers about materials, production times, shipping, and pricing
- **Lead Generation CTAs**: WhatsApp integration and contact forms for inquiries
- **Responsive Design**: Mobile-first approach with full mobile optimization
- **Modern Aesthetic**: Tech-focused, premium styling with gradient accents and smooth animations

## 💻 Tech Stack

- **Framework**: Next.js 16.2 with App Router
- **UI Library**: React 19 with latest features
- **Styling**: Tailwind CSS with custom utilities
- **Language**: TypeScript
- **Build Tool**: Turbopack for fast development builds
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global Tailwind styles
└── components/
    ├── Navigation.tsx    # Header with mobile menu
    ├── Hero.tsx          # Hero section with CTAs
    ├── Problem.tsx       # Problem identification section
    ├── Process.tsx       # 3-step process visualization
    ├── Portfolio.tsx     # Project showcase with stats
    ├── FAQ.tsx           # FAQ with collapsible items
    ├── CTA.tsx           # Primary call-to-action section
    └── Footer.tsx        # Footer with links and social
```

## 🎨 Design Highlights

- **Color Scheme**: Slate, Blue, Purple gradients for premium feel
- **Typography**: Bold, modern fonts with clear hierarchy
- **Animations**: Smooth transitions and hover effects
- **Mobile Responsive**: Fully optimized for all screen sizes
- **Accessibility**: Semantic HTML and ARIA labels

## ⚙️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed
- Git (optional, for version control)

### Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

3. **Build for production**:

   ```bash
   npm run build
   npm run start
   ```

4. **Linting**:
   ```bash
   npm run lint
   ```

## 🔧 Customization

### Update WhatsApp Links

Replace `https://wa.me/1234567890` throughout the components with your actual WhatsApp number.

### Update Contact Information

- **Footer**: Update email and phone number
- **WhatsApp Integration**: Use format `https://wa.me/COUNTRYCODE+NUMBER`

### Modify Colors

Edit Tailwind color classes in components:

- Primary: `blue-` classes
- Secondary: `purple-` classes
- Neutrals: `gray-` and `slate-` classes

### Update Portfolio Items

Edit the `projects` array in `Portfolio.tsx` to showcase your own 3D printing projects.

### Customize FAQ Categories

Modify the `faqs` array in `FAQ.tsx` with your specific questions and answers.

## 📈 Performance

- Optimized production build with Turbopack
- Image optimization ready for next/image
- CSS tree-shaking via Tailwind
- Static page generation where possible
- Mobile-first responsive design

## 🎯 Conversion Optimization

The site follows the StoryBrand framework:

1. **Hero Section** - Positions customer as hero, L8 Studio as guide
2. **Problem Section** - Identifies pain points with generic products
3. **Solution** - Clear 3-step process to resolution
4. **Social Proof** - Portfolio and testimonials build trust
5. **CTA** - Multiple conversion opportunities (WhatsApp, contact form, newsletter)

## 🚀 Deployment

This site is ready to deploy to:

- **Vercel** (recommended, seamless Next.js integration)
- **Netlify** with next-on-netlify adapter
- **Traditional Hosting** with `npm run build`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📞 Lead Generation

Current CTAs:

- WhatsApp direct messaging
- Contact form modal
- Newsletter signup
- Footer contact links

To integrate with backend:

1. Add API route at `src/app/api/contact/route.ts`
2. Connect to CRM (HubSpot, Pipedrive, etc.)
3. Set up email notifications

## 📝 Future Enhancements

- [ ] Blog section for 3D printing tips
- [ ] Interactive 3D model viewer
- [ ] Live chat integration
- [ ] Customer testimonial videos
- [ ] Pricing calculator
- [ ] Project request form with file uploads
- [ ] Team bio section
- [ ] Integration with 3D design tools

## 🔐 Security

- No sensitive data stored client-side
- HTTPS ready for production
- CORS configured for API endpoints
- XSS protection with React sanitization

## 📄 License

© 2026 L8 Studio. All rights reserved.

## 🤝 Support

For questions or customizations, contact L8 Studio support.
