# SELVADENTRO
## Resumen Ejecutivo del Proyecto UX/UI

---

## VISIÓN GENERAL

Selvadentro es una **landing page premium** para un proyecto de wellness real estate en Tulum, México. Inspirada en los principios de las **Blue Zones** y en el diseño de los mejores resorts wellness del mundo (Six Senses, Aman Resorts, Chenot, Lanserhof), la experiencia digital debe transmitir la misma calma, sofisticación y conexión con la naturaleza que el proyecto promete.

**Objetivo principal**: Convertir visitantes en leads calificados a través de una experiencia inmersiva que venda un estilo de vida, no solo propiedades.

---

## ANÁLISIS DE REFERENTES

### Patrones Comunes Identificados

| Marca | Fortaleza Clave | Patrón Destacado |
|-------|-----------------|------------------|
| **One&Only** | Elegancia atemporal | Tipografía serif + navegación minimalista |
| **Six Senses** | Experiencia sensorial | Video hero + info contextual flotante |
| **Chenot** | Ciencia del bienestar | Narrativa de longevidad + diseño clínico-limpio |
| **Lanserhof** | Arquitectura médica | Grid estructurado + tipografía geométrica |

### Insights Clave

1. **Ningún sitio se siente como "venta"** - Todos venden experiencias
2. **El video es protagonista** - Hero sections con video fullscreen
3. **La tipografía habla** - Serif para lujo, sans-serif para claridad
4. **El espacio respira** - Generosos whitespaces
5. **Las transiciones son fluidas** - Nada brusco, todo suave

---

## PROPUESTA DE VALOR

### Selvadentro NO es:
- ❌ Un desarrollo inmobiliario tradicional
- ❌ Un sitio de bienes raíces comercial
- ❌ Un catálogo de propiedades

### Selvadentro SÍ es:
- ✅ Una experiencia wellness internacional
- ✅ Un retiro de longevidad inspirado en Blue Zones
- ✅ Un santuario de arquitectura consciente
- ✅ Una comunidad de bienestar en armonía con la naturaleza

---

## ARQUITECTURA DE LA EXPERIENCIA

### Flujo de Usuario

```
1. DESCUBRIMIENTO (Hero)
   └── Video cinematográfico captura atención
   └── Mensaje claro: Longevidad + Naturaleza
   └── Scroll indicator invita a explorar

2. CONEXIÓN EMOCIONAL (Manifiesto)
   └── Identifica con el problema (vida moderna)
   └── Genera deseo de escape/reconexión

3. INSPIRACIÓN (Blue Zones)
   └── Credibilidad científica
   └── Principios de longevidad
   └── Aspiración de estilo de vida

4. EXPLORACIÓN (Visión + Arquitectura + Wellness)
   └── Conoce el proyecto en detalle
   └── Visualiza la experiencia
   └── Conecta con los valores

5. CONSIDERACIÓN (Masterplan + Galería)
   └── Evalúa la oferta
   └── Ve la calidad del proyecto
   └── Imagina vivir allí

6. CONVERSIÓN (Inversión + CTA Final)
   └── Entiende la oportunidad
   └── Completa formulario
   └── Agenda visita
```

---

## ESTRUCTURA DE SECCIONES

| # | Sección | Propósito | Tipo |
|---|---------|-----------|------|
| 01 | **Hero** | Captar atención, establecer tono | Video fullscreen |
| 02 | **Manifiesto** | Conectar emocionalmente | Split screen |
| 03 | **Blue Zones** | Dar credibilidad científica | Full bleed image |
| 04 | **Visión** | Presentar el proyecto | Video + pilares |
| 05 | **Arquitectura** | Mostrar equipo de diseño | Carousel |
| 06 | **Experiencias** | Detallar oferta wellness | Grid |
| 07 | **Masterplan** | Visualizar el desarrollo | Mapa interactivo |
| 08 | **Galería** | Mostrar calidad visual | Masonry |
| 09 | **Inversión** | Presentar oportunidad | Split screen |
| 10 | **Testimoniales** | Generar confianza | Slider |
| 11 | **CTA Final** | Convertir | Formulario |
| 12 | **Footer** | Información de contacto | Standard |

---

## SISTEMA DE DISEÑO

### Paleta de Colores

```
PRIMARIOS
├── Verde Selva Profundo:   #1F3D2B (fondos oscuros)
├── Verde Selva Claro:      #5A7D63 (acentos)
└── Turquesa Cenote:        #0FA3B1 (CTAs)

SECUNDARIOS
├── Arena Natural:          #E8DCC8 (fondos)
├── Piedra Natural:         #C9C4B8 (bordes)
└── Blanco Marfil:          #F7F5EF (background)

NEUTROS
├── Negro Suave:            #1A1A1A (texto)
├── Gris Medio:             #6E7572 (secundario)
└── Gris Claro:             #B8B8B8 (bordes)
```

### Tipografía

```
HEADLINES
├── Fuente: Playfair Display
├── Weights: 400, 500, 600
├── Estilo: Serif elegante
└── Uso: Títulos principales

BODY
├── Fuente: Inter
├── Weights: 300, 400, 500
├── Estilo: Sans-serif moderna
└── Uso: Párrafos, navegación

MICRO
├── Fuente: Inter
├── Weight: 500
├── Transform: Uppercase
├── Tracking: 0.15em
└── Uso: Labels, captions
```

### Componentes Clave

| Componente | Estilo | Interacción |
|------------|--------|-------------|
| **Botón Primary** | Filled, cuadrado | Hover: lift + shadow |
| **Botón Secondary** | Outline, cuadrado | Hover: fill invertido |
| **Link** | Texto + underline | Hover: underline slide |
| **Card** | Blanco, sin radius | Hover: lift + image zoom |
| **Input** | Border-bottom only | Focus: color change |

---

## ANIMACIONES Y TRANSICIONES

### Principios de Movimiento

1. **Sutileza** - Animaciones naturales, nunca forzadas
2. **Propósito** - Cada animación guía o da feedback
3. **Consistencia** - Mismos patrones en toda la experiencia
4. **Performance** - Solo transform y opacity

### Curvas de Easing

```
Standard:     cubic-bezier(0.4, 0, 0.2, 1)
Decelerate:   cubic-bezier(0, 0, 0.2, 1)
Accelerate:   cubic-bezier(0.4, 0, 1, 1)
Smooth:       cubic-bezier(0.77, 0, 0.175, 1)
```

### Duraciones

```
Micro (hover):      150-200ms
Small (buttons):    200-300ms
Medium (cards):     300-500ms
Large (sections):   500-800ms
Extra (hero):       1000-1500ms
```

---

## CONTENIDO CLAVE

### Mensajes Principales

| Sección | Headline | Submensaje |
|---------|----------|------------|
| Hero | "Vive donde la longevidad comienza" | Selvadentro — Tulum |
| Manifiesto | "La vida moderna nos ha desconectado" | Narrativa del problema |
| Blue Zones | "Las Blue Zones tienen la clave" | 5 pilares de longevidad |
| Visión | "Una comunidad diseñada para vivir mejor" | Arquitectura + Naturaleza + Bienestar |
| Arquitectura | "Tres visiones, una filosofía" | JJF + AMA + Mathandasa |
| Wellness | "El bienestar es la base" | 6 experiencias |
| Inversión | "Oportunidad única en Tulum" | Escasez + Entrega 2027 |
| CTA Final | "Tu viaje hacia el bienestar comienza aquí" | Formulario de contacto |

### Call-to-Actions

```
PRIMARY CTAs:
- "Agendar visita" (nav)
- "Descubre la solución" (manifiesto)
- "Conoce el proyecto" (visión)
- "Agendar presentación privada" (final)

SECONDARY CTAs:
- "Solicitar prospecto" (inversión)
- "Agendar tour privado" (inversión)
- "Explorar el masterplan" (masterplan)
```

---

## REQUERIMIENTOS TÉCNICOS

### Stack Recomendado

```
Frontend:
├── React / Next.js (SSG)
├── Tailwind CSS
├── Framer Motion
└── GSAP (ScrollTrigger)

Assets:
├── Cloudinary (imágenes)
├── Vimeo Pro (videos)
└── Cloudflare (CDN)

Analytics:
├── Google Analytics 4
├── Hotjar
└── Meta Pixel
```

### Performance Targets

```
First Contentful Paint:  < 1.5s
Largest Contentful Paint: < 2.5s
Time to Interactive:      < 3.5s
Lighthouse Score:         > 90
```

### SEO

```
Title: Selvadentro | Wellness Real Estate Tulum
Description: Comunidad de bienestar inspirada en las Blue Zones.
             Residencias de lujo en armonía con la selva de Tulum.
Keywords: wellness real estate, tulum, blue zones, longevity,
          arquitectura sustentable, bienestar, selva, cenote
```

---

## MÉTRICAS DE ÉXITO

### KPIs

| Métrica | Target |
|---------|--------|
| Time on site | > 3 minutos |
| Pages per session | > 4 |
| Scroll depth | > 70% |
| Form submissions | > 5% |
| CTA clicks | > 10% |
| Bounce rate | < 40% |

### Eventos a Trackear

- Video engagement (play, pause, complete)
- Scroll depth (25%, 50%, 75%, 100%)
- CTA clicks (todos los botones)
- Form submissions
- Gallery interactions
- Masterplan hotspot clicks

---

## ENTREGABLES

### Documentos Creados

1. **SELVADENTRO_UX_ARCHITECTURE.md**
   - Análisis completo de referentes
   - Arquitectura de información
   - Sistema de diseño
   - Contenido por sección

2. **SELVADENTRO_DESIGN_SPECIFICATIONS.md**
   - Wireframes de alto nivel
   - Especificaciones visuales detalladas
   - Responsive behavior
   - Assets necesarios

3. **SELVADENTRO_INTERACTION_GUIDE.md**
   - Sistema de movimiento
   - Interacciones por componente
   - Scroll animations
   - Guía de performance

---

## PRÓXIMOS PASOS

### Fase 1: Diseño Visual (1-2 semanas)
- [ ] Crear moodboard visual
- [ ] Diseñar UI kit completo
- [ ] Crear mockups de alta fidelidad
- [ ] Definir assets visuales (fotos, videos)

### Fase 2: Desarrollo (3-4 semanas)
- [ ] Setup de proyecto
- [ ] Desarrollo de componentes
- [ ] Implementación de animaciones
- [ ] Integración de CMS

### Fase 3: Testing (1 semana)
- [ ] Performance testing
- [ ] Cross-browser testing
- [ ] Responsive testing
- [ ] Accessibility audit

### Fase 4: Launch (1 semana)
- [ ] SEO optimization
- [ ] Analytics setup
- [ ] Domain configuration
- [ ] Launch

---

## CONCLUSIÓN

Selvadentro debe ser una experiencia que, al cerrarla, deje al usuario con una sensación de paz y deseo de ser parte del proyecto. La clave está en:

1. **Contenido visual de primera** - Video e imágenes cinematográficas
2. **Narrativa clara** - Del problema a la solución
3. **Diseño minimalista** - Menos es más
4. **Transiciones suaves** - Nada brusco, todo fluido
5. **CTAs estratégicos** - Presentes pero no invasivos

El resultado debe ser un sitio al nivel de los mejores resorts wellness del mundo: sofisticado, inmersivo y memorable.

---

*Resumen ejecutivo del proyecto Selvadentro*
*Wellness Real Estate Premium - Tulum, México*
