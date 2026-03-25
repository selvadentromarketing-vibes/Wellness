# SELVADENTRO
## Especificaciones de Diseño Visual
### Guía de Implementación

---

## 1. WIREFRAMES DE ALTO NIVEL

### 1.1 Hero Section (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│  [EN/ES]         SELVADENTRO              [☰]  [AGENDAR]   │  ← Nav sticky
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│                    ┌─────────────┐                          │
│                    │   VIDEO     │                          │
│                    │   SELVA     │  ← Fullscreen video      │
│                    │   + CENOTE  │     with dark overlay    │
│                    └─────────────┘                          │
│                                                             │
│         "Vive donde la longevidad comienza"                 │  ← H1 Playfair
│              "Selvadentro — Tulum"                          │  ← Subheadline
│                                                             │
│                      [  ↓  ]                                │  ← Scroll indicator
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Video: 1920x1080, H.265, autoplay, muted, loop
- Overlay: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))
- Nav: Transparente -> Blanco al scroll (con blur)
- Scroll indicator: Animación bounce infinita

---

### 1.2 Manifiesto Section (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │                     │  │                             │  │
│  │                     │  │  LA VIDA MODERNA            │  │
│  │    IMAGEN SELVA     │  │  NOS HA DESCONECTADO        │  │
│  │    (fullscreen)     │  │                             │  │
│  │                     │  │  Las ciudades son más       │  │
│  │                     │  │  rápidas, más ruidosas...   │  │
│  │                     │  │                             │  │
│  │                     │  │  [Descubre la solución]     │  │
│  │                     │  │                             │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Split: 50/50 desktop, stacked mobile
- Imagen: object-fit cover, parallax sutil
- Texto: Alineado izquierda, max-width 500px
- CTA: Link con underline animado

---

### 1.3 Blue Zones Section (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │           IMAGEN OKINAWA/SARDINIA                   │   │  ← Full bleed
│  │           (con overlay oscuro)                      │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│         "Las Blue Zones tienen la clave"                    │  ← H2 blanco
│                                                             │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│  │MOVIMI- │ │ALIMEN- │ │CONE-   │ │PROPO-  │ │CONTACTO│   │
│  │ENTO    │ │TACIÓN  │ │XIÓN    │ │SITO    │ │NATURALE│   │
│  │NATURAL │ │CONSCIENT││SOCIAL  │ │DE VIDA │ │ZA      │   │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘   │
│                                                             │
│     "Selvadentro aplica estos principios a la selva"        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Background: Imagen fija con parallax
- Cards: 5 pilares en row (horizontal scroll en mobile)
- Cards: Icono + título, hover scale 1.05
- Transición: Fade in stagger de izquierda a derecha

---

### 1.4 Visión Section (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │              VIDEO DRONE MASTERPLAN                 │   │  ← Fullscreen
│  │                                                     │   │
│  │     "Una comunidad diseñada para vivir mejor"       │   │
│  │                                                     │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐            │   │
│  │   │ARQUITEC-│  │NATURALEZ│  │BIENESTAR│            │   │
│  │   │TURA     │  │A        │  │         │            │   │
│  │   └─────────┘  └─────────┘  └─────────┘            │   │
│  │                                                     │   │
│  │        [Conoce el proyecto]                         │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Video: Drone lento, 15-20s loop
- Overlay: Gradiente oscuro para legibilidad
- 3 pilares: Cards con icono, hover revela descripción

---

### 1.5 Arquitectura Section (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           "Tres visiones, una filosofía"                    │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐│
│  │                 │  │                 │  │              ││
│  │   IMAGEN JJF    │  │  IMAGEN AMA     │  │ IMAGEN MATH  ││
│  │                 │  │                 │  │              ││
│  │                 │  │                 │  │              ││
│  ├─────────────────┤  ├─────────────────┤  ├──────────────┤│
│  │ JJF ARQUITECTOS │  │ ESTUDIO AMA     │  │ MATHANDASA   ││
│  │ Arquitectura    │  │ Diseño de       │  │ Arquitectura ││
│  │ contemporánea...│  │ paisaje...      │  │ consciente...││
│  └─────────────────┘  └─────────────────┘  └──────────────┘│
│                                                             │
│                    [←]  [→]  (carousel dots)                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Carousel: Swipe en mobile, flechas en desktop
- Cards: Aspect ratio 3:4, hover lift + shadow
- Auto-play: No (usuario controla)
- Transición: Slide suave 0.5s

---

### 1.6 Experiencias Wellness (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              "El bienestar es la base"                      │
│                                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │ YOGA   │  │MEDITA- │  │SENDEROS│                        │
│  │        │  │CIÓN    │  │        │                        │
│  │        │  │        │  │        │                        │
│  └────────┘  └────────┘  └────────┘                        │
│                                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │CENOTES │  │NUTRICI-│  │COMUNI- │                        │
│  │        │  │ÓN      │  │DAD    │                        │
│  │        │  │        │  │        │                        │
│  └────────┘  └────────┘  └────────┘                        │
│                                                             │
│  "Cada espacio está diseñado para cultivar equilibrio"      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Grid: 3x2 desktop, 2x3 tablet, 1 column mobile
- Cards: Cuadradas, hover revela descripción
- Imágenes: Object-fit cover, zoom sutil en hover
- Gap: 24px

---

### 1.7 Masterplan (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         "Diseñado para respetar la selva"                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │              MAPA ILUSTRADO                         │   │
│  │                                                     │   │
│  │     [●] Residencias        [●] Wellness Center    │   │
│  │     [●] Cenote             [●] Senderos           │   │
│  │     [●] Áreas comunes                               │   │
│  │                                                     │   │
│  │     ┌─────────────────────────────────────────┐    │   │
│  │     │ 20,000 m² selva  |  45 residencias      │    │   │
│  │     │ 2,000 m² wellness | 3km senderos        │    │   │
│  │     └─────────────────────────────────────────┘    │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│           [Explorar el masterplan]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Mapa: Ilustración vectorial, no satelital
- Hotspots: Pulsing animation, tooltip en hover
- Stats: Counter animation al scroll into view
- Interacción: Click en hotspot abre modal con info

---

### 1.8 Galería (auto-height)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Todas] [Naturaleza] [Arquitectura] [Wellness]             │  ← Filter tabs
│                                                             │
│  ┌──────────────────┐  ┌────────┐  ┌────────┐              │
│  │                  │  │        │  │        │              │
│  │   IMAGEN         │  │ IMG 2  │  │ IMG 3  │              │
│  │   GRANDE         │  │        │  │        │              │
│  │   (2x2)          │  └────────┘  └────────┘              │
│  │                  │                                       │
│  │                  │  ┌────────┐  ┌────────┐              │
│  │                  │  │ IMG 4  │  │ IMG 5  │              │
│  └──────────────────┘  │        │  │        │              │
│                        └────────┘  └────────┘              │
│  ┌────────┐  ┌────────┐  ┌──────────────────┐              │
│  │ IMG 6  │  │ IMG 7  │  │    IMG 8         │              │
│  │        │  │        │  │    (2x1)         │              │
│  └────────┘  └────────┘  └──────────────────┘              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Layout: Masonry grid
- Filter: Fade out/in al cambiar categoría
- Lightbox: Click abre imagen fullscreen
- Lazy loading: Intersection observer

---

### 1.9 Inversión (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │                     │  │                             │  │
│  │   IMAGEN            │  │  OPORTUNIDAD ÚNICA          │  │
│  │   RESIDENCIA        │  │  EN TULUM                   │  │
│  │   EXTERIOR          │  │                             │  │
│  │                     │  │  Proyectos con cenotes...   │  │
│  │                     │  │                             │  │
│  │                     │  │  Entrega: 2027              │  │
│  │                     │  │  45 residencias             │  │
│  │                     │  │  Desde $XXX,XXX USD         │  │
│  │                     │  │                             │  │
│  │                     │  │  [Solicitar prospecto]      │  │
│  │                     │  │  [Agendar tour privado]     │  │
│  │                     │  │                             │  │
│  │                     │  │  *Para compradores          │  │
│  │                     │  │   calificados               │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Split: 50/50
- Precio: Opcional (si es público)
- CTAs: Primary y Secondary
- Disclaimer: Texto pequeño al final

---

### 1.10 Testimoniales (auto-height)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     "Lo que dicen quienes ya viven la experiencia"          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  "Vine por la arquitectura. Me quedé por el ritmo."│   │
│  │                                                     │   │
│  │              ┌──────────┐                          │   │
│  │              │  FOTO    │                          │   │
│  │              │  PERSONA │                          │   │
│  │              └──────────┘                          │   │
│  │              María G.                              │   │
│  │              Residente desde 2024                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                         ●  ○  ○                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Slider: Auto-play 5s, pausa en hover
- Foto: Circular, 80px
- Quote: Italic, comillas decorativas
- Navegación: Dots o flechas

---

### 1.11 CTA Final (100vh)

```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │           VIDEO ATARDECER SELVA                     │   │
│  │                                                     │   │
│  │     "Tu viaje hacia el bienestar                    │   │
│  │      comienza aquí"                                 │   │
│  │                                                     │   │
│  │     ┌─────────────────────────────────────────┐    │   │
│  │     │                                         │    │   │
│  │     │  Nombre completo                        │    │   │
│  │     │  ___________________________________    │    │   │
│  │     │                                         │    │   │
│  │     │  Correo electrónico                     │    │   │
│  │     │  ___________________________________    │    │   │
│  │     │                                         │    │   │
│  │     │  Teléfono                               │    │   │
│  │     │  ___________________________________    │    │   │
│  │     │                                         │    │   │
│  │     │  [Agendar presentación privada]         │    │   │
│  │     │                                         │    │   │
│  │     └─────────────────────────────────────────┘    │   │
│  │                                                     │   │
│  │     Te contactaremos en 24 horas                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Especificaciones:**
- Background: Video fullscreen
- Formulario: Centrado, max-width 400px
- Inputs: Border-bottom only, animación focus
- Submit: Botón primary, loading state
- Success: Mensaje de confirmación

---

### 1.12 Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  SELVADENTRO                                                │
│                                                             │
│  El Proyecto    Blue Zones    Arquitectura    Wellness      │
│  Masterplan     Galería       Contacto                      │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  hello@selvadentro.com                                      │
│  +52 (984) XXX XXXX                                         │
│  Tulum, Quintana Roo, México                                │
│                                                             │
│  [Instagram] [Facebook] [LinkedIn]                          │
│                                                             │
│  © 2025 Selvadentro. Todos los derechos reservados.        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. ESPECIFICACIONES DE ANIMACIÓN

### 2.1 Scroll Animations (GSAP)

```javascript
// Fade Up
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

// Stagger Children
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Parallax
const parallax = {
  transform: `translateY(${scrollY * 0.1}px)`
};
```

### 2.2 Hover Effects

```css
/* Card Lift */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

/* Link Underline */
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.link:hover::after {
  transform: scaleX(1);
}

/* Image Zoom */
.image-container {
  overflow: hidden;
}
.image {
  transition: transform 0.5s ease;
}
.image-container:hover .image {
  transform: scale(1.05);
}
```

### 2.3 Page Transitions

```javascript
// Section Reveal
const sectionReveal = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1 }
};

// Text Split Animation
const splitText = {
  initial: { y: '100%' },
  animate: { y: 0 },
  transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
};
```

---

## 3. RESPONSIVE BEHAVIOR

### 3.1 Breakpoints

```css
/* Mobile First */
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1440px;
}

/* Usage */
@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

@media (min-width: 1440px) {
  /* Large desktop */
}
```

### 3.2 Mobile Adaptations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero Video | Full video | Poster image |
| Nav | Horizontal | Hamburger |
| Split sections | Side-by-side | Stacked |
| Grid | 3 columns | 1 column |
| Typography | 100% | 80% |
| Spacing | 100% | 60% |
| Masterplan | Interactive | Static image |

---

## 4. ASSETS NECESARIOS

### 4.1 Video

| Sección | Formato | Duración | Notas |
|---------|---------|----------|-------|
| Hero | MP4/WebM | 15-20s | Loop, no audio |
| Visión | MP4/WebM | 15-20s | Drone masterplan |
| CTA Final | MP4/WebM | 10-15s | Atardecer selva |

### 4.2 Imágenes

| Sección | Cantidad | Tipo | Resolución |
|---------|----------|------|------------|
| Manifiesto | 1 | Selva densa | 1920x1080 |
| Blue Zones | 1 | Comunidad longeva | 1920x1080 |
| Arquitectura | 6 | Renders/photos | 1200x1600 |
| Wellness | 6 | Experiencias | 1200x1200 |
| Galería | 16 | Mix | 2400x1600 |
| Inversión | 1 | Residencia | 1920x1080 |
| Testimoniales | 3 | Retratos | 800x800 |

### 4.3 Iconos

- Set: Lucide o Feather Icons
- Estilo: Outline, 1.5px stroke
- Tamaños: 24px, 32px, 48px

---

## 5. CHECKLIST DE IMPLEMENTACIÓN

### 5.1 Pre-launch

- [ ] Videos optimizados y comprimidos
- [ ] Imágenes en WebP con fallback
- [ ] Fuentes cargadas con font-display: swap
- [ ] Meta tags SEO completos
- [ ] Analytics configurado
- [ ] Formularios funcionando
- [ ] Responsive test en todos los breakpoints
- [ ] Performance audit (Lighthouse > 90)
- [ ] Accesibilidad audit (WCAG 2.1 AA)
- [ ] Cross-browser testing

### 5.2 Post-launch

- [ ] Heatmaps activos (Hotjar)
- [ ] Event tracking configurado
- [ ] Form submission tracking
- [ ] Scroll depth tracking
- [ ] Video engagement tracking
- [ ] CTA click tracking

---

*Documento de especificaciones para implementación*
*Selvadentro - Wellness Real Estate Tulum*
