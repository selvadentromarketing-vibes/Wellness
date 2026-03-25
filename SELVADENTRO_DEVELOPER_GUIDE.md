# SELVADENTRO
## Guía de Implementación para Desarrolladores

---

## STACK TECNOLÓGICO

```
Framework:      Next.js 14 (App Router)
Language:       TypeScript
Styling:        Tailwind CSS
Animations:     Framer Motion + GSAP
Icons:          Lucide React
Fonts:          Google Fonts (Playfair Display, Inter)
Images:         Next/Image + Cloudinary
Video:          HTML5 Video / Vimeo Player
Forms:          React Hook Form + Zod
Analytics:      Google Analytics 4 + GTM
```

---

## ESTRUCTURA DE CARPETAS

```
my-app/
├── app/
│   ├── layout.tsx              # Root layout con fonts
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles + Tailwind
│   │
│   ├── sections/               # Secciones de la landing
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── BlueZones.tsx
│   │   ├── Vision.tsx
│   │   ├── Architecture.tsx
│   │   ├── Wellness.tsx
│   │   ├── Masterplan.tsx
│   │   ├── Gallery.tsx
│   │   ├── Investment.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── Navigation.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── AnimatedText.tsx
│   │   └── SectionWrapper.tsx
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useInView.ts
│   │   └── useReducedMotion.ts
│   │
│   └── lib/                    # Utilidades
│       ├── utils.ts
│       └── animations.ts
│
├── components/
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── dialog.tsx
│
├── public/
│   ├── images/                 # Imágenes estáticas
│   ├── videos/                 # Videos (o usar CDN)
│   └── fonts/                  # Fonts locales (opcional)
│
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## DEPENDENCIAS

```bash
# Instalar dependencias principales
npm install framer-motion gsap @gsap/react
npm install lucide-react
npm install react-hook-form zod @hookform/resolvers
npm install clsx tailwind-merge

# shadcn/ui components
npx shadcn add button input dialog
```

---

## CONFIGURACIÓN

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primarios
        'selva-deep': '#1F3D2B',
        'selva-light': '#5A7D63',
        'cenote': '#0FA3B1',
        
        // Secundarios
        'arena': '#E8DCC8',
        'piedra': '#C9C4B8',
        'marfil': '#F7F5EF',
        
        // Neutros
        'negro-suave': '#1A1A1A',
        'gris-medio': '#6E7572',
        'gris-claro': '#B8B8B8',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em' }],
        'display-2': ['56px', { lineHeight: '64px', letterSpacing: '-0.01em' }],
        'display-3': ['42px', { lineHeight: '50px' }],
        'body-lg': ['20px', { lineHeight: '32px' }],
        'body': ['16px', { lineHeight: '28px' }],
        'body-sm': ['14px', { lineHeight: '22px' }],
        'micro': ['11px', { lineHeight: '16px', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'decelerate': 'cubic-bezier(0, 0, 0.2, 1)',
        'accelerate': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
```

### app/layout.tsx

```typescript
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selvadentro | Wellness Real Estate Tulum",
  description: "Comunidad de bienestar inspirada en las Blue Zones. Residencias de lujo en armonía con la selva de Tulum.",
  keywords: ["wellness real estate", "tulum", "blue zones", "longevity", "arquitectura sustentable"],
  openGraph: {
    title: "Selvadentro | Wellness Real Estate Tulum",
    description: "Vive donde la longevidad comienza.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-marfil text-negro-suave antialiased">
        {children}
      </body>
    </html>
  );
}
```

### app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-marfil text-negro-suave;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

/* Custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .animation-paused {
    animation-play-state: paused;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Selection */
::selection {
  background-color: #5A7D63;
  color: #F7F5EF;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #F7F5EF;
}

::-webkit-scrollbar-thumb {
  background: #5A7D63;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1F3D2B;
}
```

---

## COMPONENTES REUTILIZABLES

### Button.tsx

```typescript
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-body text-micro uppercase tracking-wider transition-all duration-300 ease-standard";
  
  const variants = {
    primary: "bg-cenote text-white hover:bg-selva-light disabled:bg-gris-claro",
    secondary: "bg-transparent border border-negro-suave text-negro-suave hover:bg-negro-suave hover:text-white disabled:border-gris-claro disabled:text-gris-claro",
    tertiary: "bg-transparent text-negro-suave underline underline-offset-4 hover:text-cenote",
  };
  
  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-4",
    lg: "px-12 py-5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ y: variant === "primary" ? -2 : 0 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
```

### AnimatedText.tsx

```typescript
"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

### SectionWrapper.tsx

```typescript
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative w-full", className)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}
```

---

## SECCIONES

### Hero.tsx

```typescript
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
        Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="font-display text-display-1 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Vive donde la longevidad comienza
        </motion.h1>
        
        <motion.p
          className="font-body text-body-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Selvadentro — Tulum, México
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### Manifesto.tsx

```typescript
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Manifesto() {
  return (
    <section className="min-h-screen flex items-center" id="manifiesto">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Image */}
        <motion.div
          className="relative h-[50vh] lg:h-screen"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/selva-densa.jpg"
            alt="Selva densa"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg">
            <motion.h2
              className="font-display text-display-2 mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La vida moderna nos ha desconectado
            </motion.h2>
            
            <motion.p
              className="font-body text-body-lg text-gris-medio mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Las ciudades son más rápidas, más ruidosas, más exigentes. 
              Nos movemos menos, respiramos menos naturaleza, nos sentimos 
              más lejos de lo que nos sostiene.
            </motion.p>
            
            <motion.a
              href="#blue-zones"
              className="inline-block font-body text-micro uppercase tracking-wider text-negro-suave relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Descubre la solución
              <span className="absolute bottom-0 left-0 w-full h-px bg-negro-suave transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## ANIMACIONES GSAP (ScrollTrigger)

```typescript
// lib/animations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initParallax() {
  gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((element) => {
    gsap.to(element, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

export function initFadeUp() {
  gsap.utils.toArray<HTMLElement>(".fade-up").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

export function initStagger() {
  gsap.utils.toArray<HTMLElement>(".stagger-container").forEach((container) => {
    const items = container.querySelectorAll(".stagger-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
```

---

## HOOKS PERSONALIZADOS

### useInView.ts

```typescript
"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
```

### useReducedMotion.ts

```typescript
"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}
```

---

## DEPLOYMENT

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

### Build

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# El output estará en /dist
```

---

## CHECKLIST PRE-LAUNCH

### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Images optimizadas (WebP)
- [ ] Videos comprimidos
- [ ] Fonts con font-display: swap

### SEO
- [ ] Meta tags completos
- [ ] Open Graph tags
- [ ] Structured data
- [ ] Sitemap.xml
- [ ] Robots.txt

### Accesibilidad
- [ ] Alt text en imágenes
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Color contrast 4.5:1
- [ ] Reduced motion support

### Funcionalidad
- [ ] Formularios funcionan
- [ ] Links correctos
- [ ] Videos reproducen
- [ ] Animaciones suaves (60fps)
- [ ] Responsive en todos los breakpoints

### Analytics
- [ ] Google Analytics configurado
- [ ] Event tracking implementado
- [ ] Goals configurados

---

## RECURSOS

### Documentación
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/docs/)

### Herramientas
- [Google Fonts](https://fonts.google.com)
- [Lucide Icons](https://lucide.dev)
- [shadcn/ui](https://ui.shadcn.com)

---

*Guía de implementación para desarrolladores*
*Selvadentro - Wellness Real Estate Tulum*
