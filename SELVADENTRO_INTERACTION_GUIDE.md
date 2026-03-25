# SELVADENTRO
## Guía de Interacciones y Micro-animaciones

---

## 1. SISTEMA DE MOVIMIENTO

### 1.1 Principios de Animación

```
1. SUTILEZA
   Las animaciones deben sentirse naturales, nunca forzadas.
   Duración: 0.3s - 0.8s
   Easing: Suave, no lineal

2. PROPÓSITO
   Cada animación guía al usuario o proporciona feedback.
   No animaciones decorativas sin función.

3. CONSISTENCIA
   Mismos patrones de movimiento en toda la experiencia.
   Mismos tiempos, mismos easings.

4. PERFORMANCE
   Solo animar transform y opacity.
   60fps siempre.
```

### 1.2 Curvas de Easing

```css
/* Standard - Para la mayoría de animaciones */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* Decelerate - Para elementos que entran */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);

/* Accelerate - Para elementos que salen */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);

/* Sharp - Para elementos pequeños */
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);

/* Smooth - Para transiciones largas */
--ease-smooth: cubic-bezier(0.77, 0, 0.175, 1);
```

### 1.3 Duraciones

```
Micro (hover, focus):     150ms - 200ms
Small (buttons, links):   200ms - 300ms
Medium (cards, panels):   300ms - 500ms
Large (sections, pages):  500ms - 800ms
Extra (hero animations):  1000ms - 1500ms
```

---

## 2. INTERACCIONES POR COMPONENTE

### 2.1 Navegación

#### **Logo**
```
Hover:
- Opacity: 1 → 0.7
- Duration: 200ms
- Easing: ease-standard

Click:
- Scroll to top
- Duration: 800ms
- Easing: ease-smooth
```

#### **Links de Nav**
```
Hover:
- Underline: scaleX(0) → scaleX(1)
- Transform-origin: left
- Duration: 300ms
- Easing: ease-standard

Active:
- Color: #1A1A1A → #0FA3B1
- Duration: 150ms
```

#### **Menú Hamburguesa**
```
Hover:
- Lines: width 100% → 80%
- Duration: 200ms

Click (Open):
- Line 1: rotate(45deg), translateY(8px)
- Line 2: opacity(0)
- Line 3: rotate(-45deg), translateY(-8px)
- Duration: 300ms
- Easing: ease-smooth

Menu Overlay:
- Background: fade in 0 → 1
- Links: stagger from top, translateY(-20px) → 0
- Stagger delay: 50ms
- Duration: 400ms
```

#### **CTA "Agendar"**
```
Hover:
- Background: transparent → #0FA3B1
- Color: #1A1A1A → #FFFFFF
- Border-color: #1A1A1A → #0FA3B1
- Transform: translateY(-2px)
- Box-shadow: 0 4px 12px rgba(15, 163, 177, 0.3)
- Duration: 300ms
- Easing: ease-standard

Active:
- Transform: translateY(0)
- Duration: 100ms
```

### 2.2 Hero Section

#### **Page Load Sequence**
```
1. Background fade in
   - Opacity: 0 → 1
   - Duration: 800ms
   - Delay: 0ms

2. Video reveal
   - Scale: 1.1 → 1
   - Opacity: 0 → 1
   - Duration: 1200ms
   - Delay: 200ms
   - Easing: ease-smooth

3. Headline
   - Split by words
   - Each word: translateY(40px) → 0, opacity 0 → 1
   - Duration: 600ms
   - Stagger: 80ms
   - Delay: 600ms

4. Subheadline
   - translateY(20px) → 0
   - Opacity: 0 → 1
   - Duration: 500ms
   - Delay: 1000ms

5. Scroll indicator
   - Opacity: 0 → 1
   - Duration: 400ms
   - Delay: 1400ms
   - Then: bounce animation infinite
```

#### **Scroll Indicator**
```
Animation: Bounce
- translateY(0) → translateY(10px) → translateY(0)
- Duration: 1500ms
- Easing: ease-in-out
- Iteration: infinite
```

#### **Parallax Background**
```
On scroll:
- Background: translateY(scroll * 0.3)
- Content: translateY(scroll * 0.1)
- Creates depth effect
```

### 2.3 Cards

#### **Experience Card**
```
Hover In:
1. Card lift
   - translateY(0) → translateY(-8px)
   - Duration: 300ms
   - Easing: ease-standard

2. Shadow appear
   - box-shadow: none → 0 20px 40px rgba(0,0,0,0.08)
   - Duration: 300ms

3. Image zoom
   - scale(1) → scale(1.05)
   - Duration: 500ms
   - Easing: ease-smooth

4. Overlay reveal
   - Opacity: 0 → 1
   - Background: gradient from bottom
   - Duration: 300ms

5. Text slide up
   - translateY(20px) → translateY(0)
   - Opacity: 0 → 1
   - Duration: 300ms
   - Delay: 100ms

Hover Out:
- All reverse
- Duration: 300ms
```

#### **Architecture Card (Carousel)**
```
Slide Transition:
- Current: translateX(0) → translateX(-100%), opacity 1 → 0
- Next: translateX(100%) → translateX(0), opacity 0 → 1
- Duration: 500ms
- Easing: ease-smooth

Drag (Mobile):
- Follow finger with resistance
- Snap to closest slide
- Velocity-based snap
```

### 2.4 Formularios

#### **Input Field**
```
Focus:
1. Border color
   - #B8B8B8 → #0FA3B1
   - Duration: 200ms

2. Label float (if using floating labels)
   - translateY(0) → translateY(-24px)
   - scale(1) → scale(0.85)
   - Color: #6E7572 → #0FA3B1
   - Duration: 200ms

Typing:
- Cursor blink: 1s infinite

Valid:
- Checkmark icon fade in
- Border-color: #5A7D63

Invalid:
- Shake animation
- translateX(0) → translateX(-10px) → translateX(10px) → translateX(0)
- Duration: 300ms
- Border-color: #E74C3C
- Error message slide down
```

#### **Submit Button**
```
Hover:
- Same as CTA button

Click:
- Transform: scale(0.98)
- Duration: 100ms

Loading:
- Text fade out
- Spinner fade in
- Spinner: rotate 360deg infinite
- Duration: 800ms linear

Success:
- Background: #0FA3B1 → #5A7D63
- Spinner fade out
- Checkmark fade in
- Text: "¡Enviado!"
- Duration: 300ms
```

### 2.5 Masterplan

#### **Hotspot**
```
Idle:
- Pulse animation
- Scale: 1 → 1.2 → 1
- Opacity: 0.8 → 0.4 → 0.8
- Duration: 2000ms
- Easing: ease-in-out
- Iteration: infinite

Hover:
- Scale: 1 → 1.5
- Tooltip fade in + slide up
- translateY(10px) → translateY(0)
- Duration: 200ms

Click:
- Modal slide up from bottom
- Backdrop fade in
- Duration: 400ms
- Easing: ease-smooth
```

### 2.6 Galería

#### **Filter Tabs**
```
Hover:
- Color: #6E7572 → #1A1A1A
- Duration: 150ms

Active:
- Underline slide in
- scaleX(0) → scaleX(1)
- Duration: 300ms

Filter Change:
1. Current images fade out
   - Opacity: 1 → 0
   - Scale: 1 → 0.95
   - Duration: 300ms

2. New images fade in (stagger)
   - Opacity: 0 → 1
   - Scale: 0.95 → 1
   - Duration: 400ms
   - Stagger: 50ms
```

#### **Lightbox**
```
Open:
1. Backdrop fade in
   - Opacity: 0 → 1
   - Duration: 300ms

2. Image zoom in
   - Scale: 0.9 → 1
   - Opacity: 0 → 1
   - Duration: 400ms
   - Easing: ease-smooth

Close:
- Reverse
- Duration: 300ms

Navigation:
- Slide left/right
- translateX(±100px) → translateX(0)
- Opacity: 0 → 1
- Duration: 300ms
```

### 2.7 Testimoniales

#### **Slider**
```
Auto-play:
- Interval: 5000ms
- Pause on hover

Transition:
- Current: fade out + slide left
- Next: fade in + slide from right
- Duration: 500ms
- Easing: ease-smooth

Dots:
- Active: scale(1.2), background #0FA3B1
- Inactive: scale(1), background #B8B8B8
- Transition: 200ms
```

### 2.8 Footer

#### **Links**
```
Hover:
- Color: #6E7572 → #1A1A1A
- translateX(0) → translateX(4px)
- Duration: 200ms
```

#### **Social Icons**
```
Hover:
- Scale: 1 → 1.1
- Color: #6E7572 → #0FA3B1
- Duration: 200ms
```

---

## 3. SCROLL ANIMATIONS

### 3.1 Trigger Points

```
Default:
- Trigger: when element is 20% visible
- Offset: -100px from viewport bottom

Early:
- Trigger: when element enters viewport
- Use for: Hero elements

Late:
- Trigger: when element is 50% visible
- Use for: Stats, counters
```

### 3.2 Animation Types

#### **Fade Up (Default)**
```
Initial:
- Opacity: 0
- translateY: 60px

Animate:
- Opacity: 1
- translateY: 0

Duration: 800ms
Easing: ease-standard
```

#### **Fade Left/Right**
```
Initial:
- Opacity: 0
- translateX: ±60px

Animate:
- Opacity: 1
- translateX: 0

Duration: 800ms
Easing: ease-standard
```

#### **Scale In**
```
Initial:
- Opacity: 0
- Scale: 0.9

Animate:
- Opacity: 1
- Scale: 1

Duration: 600ms
Easing: ease-decelerate
```

#### **Stagger Children**
```
Parent:
- staggerChildren: 0.1 (100ms delay each)

Children:
- Same animation
- Applied sequentially

Use for:
- Lists
- Grids
- Navigation items
```

### 3.3 Section Transitions

```
Section A (leaving):
- Opacity: 1 → 0.5
- Duration: 500ms

Section B (entering):
- Opacity: 0 → 1
- translateY: 40px → 0
- Duration: 800ms
- Delay: 200ms

Overlap:
- Sections overlap by 20%
- Creates smooth flow
```

---

## 4. EFECTOS ESPECIALES

### 4.1 Text Reveal

#### **Split by Words**
```
Container:
- overflow: hidden

Each word:
- Initial: translateY(100%)
- Animate: translateY(0)
- Duration: 600ms
- Stagger: 80ms
- Easing: ease-smooth
```

#### **Split by Characters**
```
For headlines only

Each character:
- Initial: translateY(100%), opacity: 0
- Animate: translateY(0), opacity: 1
- Duration: 400ms
- Stagger: 20ms
- Easing: ease-decelerate
```

### 4.2 Image Reveal

#### **Clip Path**
```
Initial:
- clip-path: inset(100% 0 0 0)

Animate:
- clip-path: inset(0 0 0 0)

Duration: 1000ms
Easing: ease-smooth
```

#### **Curtain Reveal**
```
Two panels slide away

Left panel:
- translateX(0) → translateX(-100%)

Right panel:
- translateX(0) → translateX(100%)

Duration: 800ms
Easing: ease-smooth
```

### 4.3 Counter Animation

```
Use for: Stats in masterplan

From: 0
To: target number
Duration: 2000ms
Easing: ease-out

Format:
- Numbers with commas
- Suffix (m², km, etc.)
```

### 4.4 Parallax Layers

```
Layer 1 (Background):
- translateY: scroll * 0.3

Layer 2 (Midground):
- translateY: scroll * 0.2

Layer 3 (Foreground):
- translateY: scroll * 0.1

Content:
- Static or minimal movement

Creates depth without motion sickness
```

---

## 5. ACCESIBILIDAD

### 5.1 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5.2 Focus States

```
All interactive elements:
- outline: 2px solid #0FA3B1
- outline-offset: 4px
- border-radius: inherit

Override browser default:
- outline: none (solo si reemplazado)
```

### 5.3 Screen Readers

```
Decorative animations:
- aria-hidden="true"

Important animations:
- aria-live="polite"
- Announces changes
```

---

## 6. PERFORMANCE

### 6.1 Optimización

```
DO:
✓ Animate only transform and opacity
✓ Use will-change sparingly
✓ Use CSS animations when possible
✓ Throttle scroll events (16ms)
✓ Use Intersection Observer
✓ Lazy load images

DON'T:
✗ Animate width, height, top, left
✗ Use blur filters
✗ Animate during scroll (use requestAnimationFrame)
✗ Create too many layers
```

### 6.2 will-change Usage

```css
/* Add before animation starts */
.element {
  will-change: transform, opacity;
}

/* Remove after animation ends */
.element.animation-complete {
  will-change: auto;
}
```

### 6.3 GPU Acceleration

```css
/* Force GPU layer */
.element {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

---

## 7. TESTING

### 7.1 Dispositivos

```
Must test:
- iPhone 12/13/14 (iOS Safari)
- Samsung Galaxy S21+ (Chrome)
- iPad Pro (iOS Safari)
- MacBook Pro (Chrome, Safari, Firefox)
- Windows Desktop (Chrome, Edge)
```

### 7.2 Checklist

```
Animations:
□ Smooth 60fps
□ No jank on scroll
□ Correct easing
□ Correct duration
□ Stagger works

Interactions:
□ Hover states visible
□ Focus states visible
□ Click feedback clear
□ Touch targets 44px+

Accessibility:
□ Reduced motion works
□ Screen reader compatible
□ Keyboard navigable
```

---

*Guía de interacciones para Selvadentro*
*Wellness Real Estate Tulum*
