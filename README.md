# Adam Architect Portfolio

A stunning, professional architect portfolio built with React, TypeScript, Framer Motion, Three.js, and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Professional gold and black color scheme
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **3D Elements**: Interactive Three.js components
- **Smooth Scrolling**: Lenis smooth scroll implementation
- **Particle Effects**: TSParticles background
- **Responsive**: Fully responsive design for all devices
- **Contact Form**: EmailJS integration for form submissions
- **Performance Optimized**: Code splitting and lazy loading

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Lenis** - Smooth scrolling
- **TSParticles** - Particle effects
- **Swiper** - Carousels
- **EmailJS** - Contact form
- **Lucide React** - Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adam-architect-portfolio.git
cd adam-architect-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Click Deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### GitHub Pages Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/adam-architect-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.ts:
```typescript
export default defineConfig({
  base: '/adam-architect-portfolio/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `src/components/Contact.tsx`:
```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

## 📁 Project Structure

```
adam-architect-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── MarqueeText.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── TextReveal.tsx
│   │   │   ├── TiltCard.tsx
│   │   │   └── index.ts
│   │   ├── About.tsx
│   │   ├── Awards.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticlesBackground.tsx
│   │   ├── Preloader.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Scene3D.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── hooks/
│   │   └── useLenis.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

## 🎯 Key Components

### Hero Section
- Animated text with Typewriter effect
- Parallax scrolling
- Interactive statistics

### Projects Gallery
- Filterable project grid
- Modal detail view
- Smooth animations

### Services Section
- Feature cards with hover effects
- Icon animations

### Contact Form
- Form validation
- EmailJS integration
- Toast notifications

### Custom UI Components
- GlassCard - Glassmorphism effect cards
- TiltCard - 3D tilt effect on hover
- MagneticButton - Magnetic hover effect
- AnimatedCounter - Number counting animation
- TextReveal - Scroll-based text reveal
- ParallaxImage - Parallax scroll effect

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  gold: {
    500: '#D4AF37', // Primary gold
    // ... other shades
  },
  dark: {
    900: '#0a0a0a', // Primary dark
    // ... other shades
  }
}
```

### Fonts
Fonts are loaded from Google Fonts. Update in `index.html` and `tailwind.config.js`.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for architects who appreciate great design.
