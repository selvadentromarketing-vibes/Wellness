# SELVADENTRO
## Arquitectura UX/UI Completa
### Wellness Real Estate Premium - Tulum, México

---

## 1. ANÁLISIS DE REFERENTES PREMIUM

### 1.1 Patrones Comunes Identificados

#### **One&Only Resorts**
- **Hero**: Video fullscreen con overlay oscuro sutil
- **Navegación**: Minimalista, centrada, con tipografía serif elegante
- **Tipografía**: Playfair Display o similar para títulos, sans-serif ligera para body
- **Paleta**: Tonos cálidos, arena, blanco roto, negro suave
- **CTAs**: Botones outline finos, texto en mayúsculas con tracking amplio
- **Transiciones**: Fade suaves entre secciones

#### **Six Senses Yao Noi**
- **Hero**: Video de drone con play button central
- **Navegación**: Hamburguesa + logo centrado + CTA "Book Now" flotante
- **Info bar**: Datos contextuales (hora local, clima, contacto) en overlay
- **Tipografía**: Serif clásica para títulos, sans-serif para contenido
- **Experiencias**: Cards con imágenes grandes y texto minimalista
- **Scroll**: Parallax sutil en imágenes de fondo

#### **Chenot Palace**
- **Hero**: Slideshow de imágenes con transiciones suaves
- **Mensaje central**: "Live Healthier for Longer" - enfoque en longevidad
- **Tipografía**: Serif elegante, peso ligero
- **Paleta**: Blanco, beige, tonos tierra
- **Contenido**: Secciones con mucho aire, texto centrado
- **CTAs**: Links sutiles con underline animado

#### **Lanserhof Sylt**
- **Hero**: Imagen arquitectónica nocturna con logo grande centrado
- **Navegación**: Superior flotante, idioma + iconos de contacto
- **Tipografía**: Sans-serif geométrica (similar a Futura), mayúsculas
- **Paleta**: Grises, blanco, negro, verde bosque sutil
- **Estructura**: Secciones largas con scroll storytelling
- **Interacciones**: Hover states elegantes, transiciones suaves

---

## 2. DIRECCIÓN CREATIVA SELVADENTRO

### 2.1 Posicionamiento de Marca

**Selvadentro NO es:**
- Una desarrolladora inmobiliaria tradicional
- Un proyecto residencial convencional
- Un sitio de bienes raíces comercial

**Selvadentro SÍ es:**
- Una experiencia wellness internacional
- Un retiro de longevidad inspirado en Blue Zones
- Un santuario de arquitectura consciente
- Una comunidad de bienestar en armonía con la naturaleza

### 2.2 Esencia de la Marca

**Pilares Fundamentales:**
1. **Naturaleza**: La selva como protagonista, no como decoración
2. **Bienestar**: Experiencias que nutren cuerpo, mente y espíritu
3. **Longevidad**: Principios científicos de las Blue Zones
4. **Arquitectura**: Diseño consciente que respeta el entorno
5. **Comunidad**: Conexión humana y propósito compartido
6. **Exclusividad**: Acceso limitado, experiencia única

---

## 3. ARQUITECTURA DE INFORMACIÓN

### 3.1 Estructura de Navegación

```
NAV PRINCIPAL (sticky, minimal)
├── Logo: SELVADENTRO (centrado o izquierda)
├── Idioma: ES / EN (toggle sutil)
├── Menú: Hamburguesa elegante (3 líneas finas)
│   ├── El Proyecto
│   ├── Blue Zones
│   ├── Arquitectura
│   ├── Wellness
│   ├── Masterplan
│   ├── Galería
│   └── Contacto
└── CTA: "Agendar Visita" (botón outline)
```

### 3.2 Mapa de Secciones

```
LANDING PAGE
│
├── 01. HERO (100vh, video)
│   ├── Video: Selva + cenote (amanecer/atardecer)
│   ├── Overlay: Gradiente oscuro sutil
│   ├── Headline: "Vive donde la longevidad comienza"
│   ├── Subheadline: "Selvadentro - Tulum"
│   └── Scroll indicator: Flecha animada
│
├── 02. MANIFIESTO (100vh, split screen)
│   ├── Izquierda: Imagen selva densa
│   ├── Derecha: Texto
│   │   ├── "La vida moderna nos ha desconectado"
│   │   └── Narrativa del problema
│   └── CTA: "Descubre la solución"
│
├── 03. BLUE ZONES (100vh, full bleed)
│   ├── Background: Imagen Okinawa/Sardinia
│   ├── Headline: "Las Blue Zones tienen la clave"
│   ├── 5 pilares animados:
│   │   ├── Movimiento natural
│   │   ├── Alimentación consciente
│   │   ├── Conexión social
│   │   ├── Propósito de vida
│   │   └── Contacto con la naturaleza
│   └── Texto: "Selvadentro aplica estos principios"
│
├── 04. VISIÓN (100vh, video)
│   ├── Video: Drone del masterplan
│   ├── Headline: "Una comunidad diseñada para vivir mejor"
│   ├── 3 pilares:
│   │   ├── Arquitectura
│   │   ├── Naturaleza
│   │   └── Bienestar
│   └── CTA: "Conoce el proyecto"
│
├── 05. ARQUITECTURA (100vh, carousel)
│   ├── Headline: "Tres visiones, una filosofía"
│   ├── Cards de estudios:
│   │   ├── JJF Arquitectos
│   │   ├── Estudio AMA
│   │   └── Mathandasa
│   └── Imágenes de referencia arquitectónica
│
├── 06. EXPERIENCIAS WELLNESS (100vh, grid)
│   ├── Headline: "El bienestar es la base"
│   ├── 6 experiencias:
│   │   ├── Yoga al amanecer
│   │   ├── Meditación en la selva
│   │   ├── Senderos naturales
│   │   ├── Cenotes
│   │   ├── Nutrición consciente
│   │   └── Comunidad
│   └── Imágenes cuadradas con hover effect
│
├── 07. MASTERPLAN (100vh, interactivo)
│   ├── Headline: "Diseñado para respetar la selva"
│   ├── Mapa ilustrado del proyecto
│   ├── Hotspots interactivos:
│   │   ├── Residencias
│   │   ├── Wellness center
│   │   ├── Cenote
│   │   ├── Senderos
│   │   └── Áreas comunes
│   └── Leyenda de especificaciones
│
├── 08. GALERÍA (auto-height, masonry)
│   ├── Grid asimétrico de imágenes
│   ├── Categorías:
│   │   ├── Naturaleza
│   │   ├── Arquitectura
│   │   ├── Wellness
│   │   └── Experiencias
│   └── Lightbox al hacer click
│
├── 09. INVERSIÓN (100vh, split)
│   ├── Izquierda: Imagen residencia
│   ├── Derecha:
│   │   ├── Headline: "Oportunidad única en Tulum"
│   │   ├── Texto de escasez
│   │   ├── Entrega: 2027
│   │   └── Dos CTAs:
│   │       ├── "Solicitar prospecto"
│   │       └── "Agendar tour privado"
│   └── Disclaimer: "Para compradores calificados"
│
├── 10. TESTIMONIALES (auto-height, slider)
│   ├── Headline: "Lo que dicen quienes ya viven la experiencia"
│   ├── 3 testimoniales con fotos
│   └── Navegación: Dots o flechas
│
├── 11. CTA FINAL (100vh, video)
│   ├── Video: Atardecer en la selva
│   ├── Headline: "Tu viaje hacia el bienestar comienza aquí"
│   ├── Formulario simple:
│   │   ├── Nombre
│   │   ├── Email
│   │   └── Teléfono
│   └── Botón: "Agendar presentación privada"
│
└── 12. FOOTER
    ├── Logo
    ├── Links rápidos
    ├── Contacto
    ├── Redes sociales
    └── Copyright
```

---

## 4. SISTEMA DE DISEÑO

### 4.1 Paleta de Colores

#### **Primarios**
```
Verde Selva Profundo:   #1F3D2B (fondos oscuros, headers)
Verde Selva Claro:      #5A7D63 (acentos, hover states)
Turquesa Cenote:        #0FA3B1 (CTAs, links principales)
```

#### **Secundarios**
```
Arena Natural:          #E8DCC8 (fondos claros, secciones)
Piedra Natural:         #C9C4B8 (bordes, separadores)
Blanco Marfil:          #F7F5EF (background principal)
```

#### **Neutros**
```
Negro Suave:            #1A1A1A (texto principal)
Gris Medio:             #6E7572 (texto secundario)
Gris Claro:             #B8B8B8 (bordes sutiles)
```

#### **Uso**
- **Fondos**: 80% Blanco Marfil / 20% Arena Natural
- **Texto principal**: Negro Suave
- **Texto secundario**: Gris Medio
- **CTAs**: Turquesa Cenote
- **Acentos**: Verde Selva Claro
- **Secciones oscuras**: Verde Selva Profundo (CTA final)

### 4.2 Tipografía

#### **Headlines (Display)**
```
Fuente: Playfair Display (Google Fonts)
Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
Estilo: Serif elegante, contrastado
Uso: Títulos principales, headlines de sección
```
- H1: 72px / 80px line-height / -0.02em tracking
- H2: 56px / 64px line-height / -0.01em tracking
- H3: 42px / 50px line-height / 0 tracking

#### **Body Text**
```
Fuente: Inter (Google Fonts)
Weights: 300 (Light), 400 (Regular), 500 (Medium)
Estilo: Sans-serif moderna, legible
Uso: Párrafos, descripciones, navegación
```
- Body Large: 20px / 32px line-height
- Body Regular: 16px / 28px line-height
- Body Small: 14px / 22px line-height

#### **Micro/Labels**
```
Fuente: Inter
Weight: 500
Transform: Uppercase
Tracking: 0.15em
Size: 11px / 16px line-height
Uso: Etiquetas, captions, metadata
```

### 4.3 Espaciado

```
Base: 8px

Escalas:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
- 4xl: 128px

Secciones:
- Padding vertical: 96px - 128px
- Padding horizontal: 64px - 128px (responsive)
- Gap entre elementos: 24px - 48px
```

### 4.4 Componentes UI

#### **Botones**

**Primary (CTA)**
```
Background: #0FA3B1
Color: #FFFFFF
Padding: 16px 32px
Border-radius: 0 (cuadrado)
Font: Inter 12px uppercase
Tracking: 0.15em
Hover: Background #1FB6C9, translateY(-2px)
Transition: all 0.3s ease
```

**Secondary (Outline)**
```
Background: transparent
Border: 1px solid #1A1A1A
Color: #1A1A1A
Padding: 16px 32px
Border-radius: 0
Hover: Background #1A1A1A, Color #FFFFFF
```

**Tertiary (Link)**
```
Background: transparent
Color: #1A1A1A
Text-decoration: underline
Underline offset: 4px
Hover: Color #0FA3B1
```

#### **Cards**

**Experience Card**
```
Background: #FFFFFF
Border-radius: 0
Shadow: none
Border: 1px solid rgba(0,0,0,0.05)
Hover: translateY(-8px), shadow suave
Imagen: aspect-ratio 1:1
```

#### **Formularios**

**Input Field**
```
Background: transparent
Border: none
Border-bottom: 1px solid #B8B8B8
Padding: 12px 0
Font: Inter 16px
Focus: Border-bottom #0FA3B1
Placeholder: #B8B8B8
```

---

## 5. ANIMACIONES Y TRANSICIONES

### 5.1 Micro-interacciones

#### **Hover States**
```css
/* Botones */
transform: translateY(-2px);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Links */
underline animation: scaleX(0) -> scaleX(1);
transform-origin: left;

/* Cards */
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(0,0,0,0.08);

/* Imágenes */
transform: scale(1.05);
overflow: hidden;
```

#### **Scroll Animations**
```css
/* Fade up */
opacity: 0 -> 1;
transform: translateY(40px) -> translateY(0);
duration: 0.8s;
easing: cubic-bezier(0.4, 0, 0.2, 1);

/* Stagger */
delay: index * 0.1s;

/* Parallax sutil */
transform: translateY(scroll * 0.1);
```

### 5.2 Transiciones de Sección

#### **Fade Transition**
```
Trigger: Scroll into view
Effect: Opacity 0 -> 1
Duration: 1s
Easing: ease-out
```

#### **Slide Up**
```
Trigger: Scroll into view
Effect: translateY(60px) -> translateY(0) + opacity
Duration: 0.8s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

#### **Split Reveal**
```
Trigger: Scroll
Effect: clip-path reveal from center
Duration: 1.2s
Easing: cubic-bezier(0.77, 0, 0.175, 1)
```

### 5.3 Loading States

#### **Page Load**
```
1. Fade in de 0 a 1 (0.5s)
2. Hero content stagger (0.1s entre elementos)
3. Video autoplay con fade in (1s)
```

#### **Lazy Loading Images**
```
Placeholder: Blur hash o color sólido
Transition: opacity 0 -> 1 (0.5s)
Easing: ease-out
```

---

## 6. EXPERIENCIA DE USUARIO

### 6.1 User Journey

```
1. DESCUBRIMIENTO
   └── Usuario llega al sitio
       ├── Video hero captura atención
       ├── Mensaje claro: Longevidad + Naturaleza
       └── Scroll indicator invita a explorar

2. CONEXIÓN EMOCIONAL
   └── Sección Manifiesto
       ├── Identifica con el problema (vida moderna)
       └── Genera deseo de escape/reconexión

3. INSPIRACIÓN
   └── Blue Zones
       ├── Credibilidad científica
       ├── Principios de longevidad
       └── Aspiración de estilo de vida

4. EXPLORACIÓN
   └── Visión + Arquitectura + Wellness
       ├── Conoce el proyecto en detalle
       ├── Visualiza la experiencia
       └── Conecta con los valores

5. CONSIDERACIÓN
   └── Masterplan + Galería
       ├── Evalúa la oferta
       ├── Ve la calidad del proyecto
       └── Imagina vivir allí

6. CONVERSIÓN
   └── Inversión + CTA Final
       ├── Entiende la oportunidad
       ├── Completa formulario
       └── Agenda visita
```

### 6.2 Responsive Breakpoints

```
Desktop XL: 1440px+
Desktop: 1024px - 1439px
Tablet: 768px - 1023px
Mobile: 480px - 767px
Mobile XS: < 480px
```

#### **Adaptaciones Mobile**
- Hero: Video reemplazado por imagen (performance)
- Navegación: Hamburguesa full-screen
- Split screens: Apilados verticalmente
- Grid: 1-2 columnas
- Tipografía: Reducida 20-30%
- Espaciado: Reducido 40%

### 6.3 Performance

#### **Objetivos**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

#### **Optimizaciones**
- Videos: Compresión H.265, poster images
- Imágenes: WebP con fallback JPG
- Lazy loading: Intersection Observer
- Fonts: Subset, font-display: swap
- Animaciones: GPU-accelerated (transform, opacity)

---

## 7. CONTENIDO POR SECCIÓN

### 7.1 Hero

**Video**: 15-20 segundos, loop
- Amanecer en la selva
- Rayos de luz a través de los árboles
- Cenote cristalino
- Cámara lenta, movimiento suave

**Copy**:
```
Headline: Vive donde la longevidad comienza
Subheadline: Selvadentro — Tulum, México
Scroll CTA: Descubre más
```

### 7.2 Manifiesto

**Imagen**: Selva densa, atmósfera misteriosa

**Copy**:
```
Headline: La vida moderna nos ha desconectado

Body: Las ciudades son más rápidas, más ruidosas, más exigentes. 
Nos movemos menos, respiramos menos naturaleza, nos sentimos 
más lejos de lo que nos sostiene.

Pero hay lugares donde las personas viven de forma diferente.
Lugares donde la gente vive más de 100 años con energía, 
propósito y bienestar.

CTA: Descubre la solución
```

### 7.3 Blue Zones

**Imagen**: Okinawa o Sardinia, comunidad longeva

**Copy**:
```
Headline: Las Blue Zones tienen la clave

Body: En Okinawa, Cerdeña, Ikaria y Nicoya, las personas viven 
más tiempo y más saludables que en cualquier otro lugar del planeta.

Pilares:
1. Movimiento natural
2. Alimentación consciente  
3. Conexión social
4. Propósito de vida
5. Contacto con la naturaleza

CTA: Selvadentro aplica estos principios a la selva de Tulum
```

### 7.4 Visión

**Video**: Drone del masterplan

**Copy**:
```
Headline: Una comunidad diseñada para vivir mejor

Body: Selvadentro integra arquitectura, naturaleza y bienestar 
en una experiencia de vida única. Aquí la selva no es decoración—
es el centro del proyecto.

Pilares:
- Arquitectura consciente
- Naturaleza preservada
- Bienestar integral

CTA: Conoce el proyecto
```

### 7.5 Arquitectura

**Imágenes**: Renders arquitectónicos, materiales naturales

**Copy**:
```
Headline: Tres visiones, una filosofía

Estudios:
- JJF Arquitectos: Arquitectura contemporánea integrada con el paisaje
- Estudio AMA: Diseño de paisaje y experiencias espaciales
- Mathandasa: Arquitectura consciente enfocada en bienestar

CTA: Ver portfolio completo
```

### 7.6 Experiencias Wellness

**Imágenes**: Yoga, meditación, senderos, cenotes

**Copy**:
```
Headline: El bienestar es la base

Experiencias:
- Yoga al amanecer
- Meditación en la selva
- Senderos naturales
- Cenotes cristalinos
- Nutrición consciente
- Comunidad vibrante

Body: Cada espacio está diseñado para cultivar equilibrio 
entre mente, cuerpo y naturaleza.
```

### 7.7 Masterplan

**Mapa**: Ilustración del proyecto con hotspots

**Copy**:
```
Headline: Diseñado para respetar la selva

Especificaciones:
- 20,000 m² de selva preservada
- Cenote natural integrado
- 45 residencias de lujo
- Wellness center de 2,000 m²
- Senderos de 3km
- Áreas comunes

CTA: Explorar el masterplan
```

### 7.8 Galería

**Imágenes**: 12-16 fotos de alta calidad
- Naturaleza (4)
- Arquitectura (4)
- Wellness (4)
- Experiencias (4)

### 7.9 Inversión

**Imagen**: Residencia exterior

**Copy**:
```
Headline: Oportunidad única en Tulum

Body: Proyectos con cenotes naturales y grandes extensiones 
de selva son extremadamente escasos. Selvadentro representa 
una oportunidad única para formar parte de una comunidad 
diseñada para el futuro del bienestar.

Detalles:
- Entrega: 2027
- 45 residencias disponibles
- Desde $XXX,XXX USD
- Para compradores calificados

CTAs:
- Solicitar prospecto
- Agendar tour privado
```

### 7.10 Testimoniales

**3 testimoniales**:
```
1. "Vine por la arquitectura. Me quedé por el ritmo."
   — Residente, 45 años

2. "Es el primer lugar donde mi rutina matutina se siente como medicina."
   — Residente, 52 años

3. "La comunidad aquí no es una amenidad—es el diseño."
   — Residente, 38 años
```

### 7.11 CTA Final

**Video**: Atardecer en la selva

**Copy**:
```
Headline: Tu viaje hacia el bienestar comienza aquí

Formulario:
- Nombre completo
- Correo electrónico
- Teléfono

Botón: Agendar presentación privada

Texto secundario: Te contactaremos en 24 horas
```

---

## 8. RECOMENDACIONES TÉCNICAS

### 8.1 Stack Tecnológico

```
Frontend:
- React / Next.js (SSG para performance)
- Tailwind CSS (utility-first)
- Framer Motion (animaciones)
- GSAP (scroll animations)

Assets:
- Cloudinary / AWS S3 (imágenes)
- Vimeo Pro (videos)
- Cloudflare (CDN)

Analytics:
- Google Analytics 4
- Hotjar (heatmaps)
- Meta Pixel
```

### 8.2 SEO

```
Meta tags:
- Title: Selvadentro | Wellness Real Estate Tulum
- Description: Comunidad de bienestar inspirada en las Blue Zones. 
  Residencias de lujo en armonía con la selva de Tulum.
- Keywords: wellness real estate, tulum, blue zones, longevity, 
  arquitectura sustentable, bienestar, selva, cenote

Open Graph:
- og:title
- og:description
- og:image (1200x630)
- og:url

Structured Data:
- Organization
- Real Estate Listing
- Local Business
```

### 8.3 Accesibilidad

```
- WCAG 2.1 AA compliance
- Alt text en todas las imágenes
- Keyboard navigation
- Focus states visibles
- Color contrast ratio 4.5:1
- Reduced motion support
```

---

## 9. MÉTRICAS DE ÉXITO

### 9.1 KPIs

```
Engagement:
- Time on site: > 3 minutos
- Pages per session: > 4
- Scroll depth: > 70%

Conversion:
- Form submissions: > 5%
- CTA clicks: > 10%
- Return visits: > 30%

Performance:
- Bounce rate: < 40%
- Load time: < 3s
- Mobile traffic: > 60%
```

---

## 10. CONCLUSIÓN

Selvadentro debe sentirse como una experiencia, no como un sitio web. Cada scroll, cada hover, cada transición debe transmitir la misma calma, sofisticación y conexión con la naturaleza que el proyecto promete.

La clave está en:
1. **Contenido visual de primera**: Video e imágenes cinematográficas
2. **Narrativa clara**: Del problema a la solución
3. **Diseño minimalista**: Menos es más
4. **Transiciones suaves**: Nada brusco, todo fluido
5. **CTAs estratégicos**: Presentes pero no invasivos

El resultado debe ser un sitio que, al cerrarlo, deje al usuario con una sensación de paz y deseo de ser parte de Selvadentro.

---

*Documento creado por análisis UX de referentes premium*
*One&Only | Six Senses | Chenot | Lanserhof*
