<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# L8 Studio Next.js Website - Project Instructions

## Project Overview

L8 Studio is a premium custom 3D printing brand website built with Next.js 16, React 19, and Tailwind CSS. The site follows the StoryBrand framework for maximum conversion optimization.

## Technology Stack

- Framework: Next.js 16.2 with App Router
- UI: React 19 with TypeScript
- Styling: Tailwind CSS
- Build: Turbopack
- Package Manager: npm

## Key Components

### Page Structure

- **Navigation**: Sticky header with mobile menu
- **Hero Section**: CTA-focused hero with WhatsApp integration
- **Problem Section**: Identifies customer pain points
- **Process Section**: 3-step workflow visualization
- **Portfolio Section**: Project showcase with testimonials
- **FAQ Section**: Collapsible Q&A with category filtering
- **CTA Section**: Lead generation section with newsletter
- **Footer**: Company links and contact info

## Customization Guidelines

### Update Contact Information

1. WhatsApp Links: Replace `https://wa.me/1234567890` with actual number
2. Email: Update in Footer.tsx and layout.tsx metadata
3. Phone: Update in Footer.tsx

### Styling

- Primary Color: Blue (blue-500, blue-600)
- Secondary Color: Purple (purple-500, purple-600)
- Neutral: Slate/Gray for backgrounds
- Gradients: from-blue-600 to-purple-600

### Content Updates

- Portfolio Items: Edit projects array in Portfolio.tsx
- FAQ Items: Edit faqs array in FAQ.tsx
- Hero Copy: Update Hero.tsx for messaging
- Footer Links: Update Footer.tsx for company links

## Development Commands

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Production build
- `npm run start` - Run production build
- `npm run lint` - ESLint check

## Project Conventions

- Use TypeScript for all components
- Client components marked with 'use client'
- Responsive design: mobile-first with Tailwind breakpoints
- No external image assets required (gradients used instead)
- Semantic HTML with proper heading hierarchy

## Component Patterns

- All components are functional components
- Use React hooks (useState) for interactivity
- Props typed with TypeScript interfaces
- Tailwind classes for all styling
- SVG icons inline for better performance

## Deployment

Ready for deployment to:

- Vercel (recommended)
- Netlify with adapter
- Traditional hosting with npm build

## Future Enhancement Areas

- Blog section for 3D printing tips
- Interactive 3D model viewer
- Live chat integration
- Project request form with uploads
- CRM integration for lead management
