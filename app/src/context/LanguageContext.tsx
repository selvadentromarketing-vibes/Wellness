import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  es: {
    // Navigation
    'nav.logo': 'Suspiro en Selvadentro',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.project': 'El Proyecto',
    'nav.bluezones': 'Zonas Azules',
    'nav.architecture': 'Arquitectura',
    'nav.wellness': 'Wellness',
    'nav.masterplan': 'Masterplan',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agendar visita',

    // Hero
    'hero.headline': 'Vive donde la longevidad comienza',
    'hero.subheadline': 'Suspiro en Selvadentro — Tulum, México',
    'hero.scroll': 'Descubre más',

    // Manifesto (Problem Section)
    'manifesto.headline': 'La vida moderna nos ha desconectado',
    'manifesto.body1': 'Las ciudades son más rápidas, más ruidosas, más exigentes. Nos movemos menos, respiramos menos naturaleza, nos sentimos más lejos de lo que nos sostiene.',
    'manifesto.body2': 'Pero hay lugares donde las personas viven de forma diferente. Lugares donde la gente vive más de 100 años con energía, propósito y bienestar.',
    'manifesto.cta': 'Descubre la solución',

    // Blue Zones
    'bluezones.headline': 'Inspirados en las Zonas Azules',
    'bluezones.subtitle': 'Zonas Azules — las regiones del mundo donde las personas viven más de 100 años',
    'bluezones.body': 'En Okinawa, Cerdeña, Ikaria y Nicoya, las personas viven más tiempo y más saludables. Aplicamos estos mismos principios para crear una comunidad en la selva de Tulum.',
    'bluezones.pillar1': 'Movimiento natural',
    'bluezones.pillar2': 'Alimentación consciente',
    'bluezones.pillar3': 'Conexión social',
    'bluezones.pillar4': 'Propósito de vida',
    'bluezones.pillar5': 'Contacto con la naturaleza',
    'bluezones.cta': 'Ver la inversión',

    // Vision
    'vision.headline': 'Una comunidad diseñada para vivir mejor',
    'vision.body': 'Arquitectura, naturaleza y bienestar se fusionan en una experiencia de vida. Aquí la selva no es decoración — es el corazón de todo.',
    'vision.pillar1': 'Arquitectura consciente',
    'vision.pillar2': 'Naturaleza preservada',
    'vision.pillar3': 'Bienestar holístico',
    'vision.cta': 'Conoce el proyecto',

    // Architecture
    'architecture.headline': 'Tres visiones, una filosofía',
    'architecture.studio1.name': 'JJF Creando',
    'architecture.studio1.desc': 'Arquitectura contemporánea integrada con el paisaje natural.',
    'architecture.studio2.name': 'Estudio AMA',
    'architecture.studio2.desc': 'Diseño de paisaje y experiencias espaciales que conectan.',
    'architecture.studio3.name': 'Maat Handasa',
    'architecture.studio3.desc': 'Arquitectura consciente enfocada en bienestar y armonía.',
    'architecture.swipe': 'DESLIZA',

    // Wellness
    'wellness.headline': 'El bienestar es la base',
    'wellness.body': 'Cada espacio está diseñado para cultivar equilibrio entre mente, cuerpo y naturaleza.',
    'wellness.exp1': 'Yoga al amanecer',
    'wellness.exp2': 'Meditación en la selva',
    'wellness.exp3': 'Senderos naturales',
    'wellness.exp4': 'Cenotes cristalinos',
    'wellness.exp5': 'Spa & bienestar',
    'wellness.exp6': 'Fitness en la selva',
    'wellness.cta': 'Agenda tu visita',

    // Masterplan
    'masterplan.headline': 'Diseñado para respetar la selva',
    'masterplan.suspiroLabel': 'Suspiro en Selvadentro',
    'masterplan.locationHeadline': 'La Ubicación',
    'masterplan.area': 'Solo 35% edificable — baja densidad real',
    'masterplan.residences': '9 cenotes naturales',
    'masterplan.wellness': '15+ amenidades',
    'masterplan.trails': 'Lotes desde 450 m²',
    'masterplan.location': '103 hectáreas en la selva de Tulum — cerca del Tren Maya y el nuevo aeropuerto internacional',
    'masterplan.cta': 'Explorar el masterplan',
    'masterplan.cenotesHeadline': 'El Masterplan',
    'masterplan.cenotesBody': 'Selva preservada, cenotes naturales y densidad cuidada — cada detalle diseñado para vivir en armonía con la naturaleza.',

    // Gallery
    'gallery.headline': 'Un lugar para moverse, descansar y reconectar',
    'gallery.body': 'Desde senderos en la selva hasta plataformas de quietud—cada espacio está diseñado para devolverte al equilibrio.',
    'gallery.cta': 'Agenda tu visita privada',
    'gallery.img1': 'Cenote Mirador',
    'gallery.img2': 'Residencia en la selva',
    'gallery.img3': 'Vista aérea',
    'gallery.img4': 'Arquitectura integrada',
    'gallery.img5': 'Casa de los Cenotes',
    'gallery.img6': 'Pabellón Holístico',
    'gallery.img7': 'Spa & Wellness',
    'gallery.img8': 'Mirador',
    'gallery.img9': 'Jungle Gym',
    'gallery.img10': 'Jungle Bar',
    'gallery.img11': 'Jungle Courts',
    'gallery.img12': 'Atardecer en la selva',

    // Investment
    'investment.headline': 'Tu lote en la selva',
    'investment.body': 'Desarrollos con cenotes naturales y vastas reservas de selva son excepcionalmente escasos. Esta es tu entrada a una comunidad construida para el futuro del bienestar.',
    'investment.lotSize': 'Desde 450 m²',
    'investment.lotSizeLabel': 'Tamaño de lote',
    'investment.delivery': 'Financiamiento a 48 meses, 0% interés',
    'investment.residences': '9 cenotes naturales',
    'investment.appreciation': '+134% apreciación',
    'investment.appreciationLabel': 'Fase 1 a Fase 4',
    'investment.priceLabel': 'Lotes desde',
    'investment.price': '$70,000 USD',
    'investment.cta1': 'Reservar llamada',
    'investment.cta2': 'Agendar tour privado',
    'investment.disclaimer': 'Precios en dólares americanos (USD). Sujetos a disponibilidad y fase de venta. +134% apreciación confirmada entre Fase 1 y Fase 4. Enganche mínimo del 20%.',

    // Testimonials
    'testimonials.headline': 'Lo que dicen quienes ya viven la experiencia',
    'testimonials.quote1': 'Buscábamos un lugar donde nuestros hijos crecieran conectados con la naturaleza. Selvadentro es exactamente eso.',
    'testimonials.author1': 'Familia Rodríguez, Propietarios Fase 1',
    'testimonials.quote2': 'La combinación de cenotes, selva preservada y arquitectura consciente no existe en ningún otro desarrollo en Tulum.',
    'testimonials.author2': 'Inversionista, Ciudad de México',
    'testimonials.quote3': 'Vine a conocer el proyecto y me quedé. El ritmo de vida aquí te cambia desde el primer día.',
    'testimonials.author3': 'Propietario, Fase 2',

    // Final CTA
    'finalcta.headline': 'Tu viaje hacia el bienestar comienza aquí',
    'finalcta.name': 'Nombre completo',
    'finalcta.email': 'Correo electrónico',
    'finalcta.phone': 'Teléfono',
    'finalcta.submit': 'Agendar presentación privada',
    'finalcta.note': 'Te contactaremos en 24 horas',

    // Footer
    'footer.tagline': 'Donde la longevidad comienza',
    'footer.contact': 'Contacto',
    'footer.email': 'd.comercial@selvadentrotulum.com',
    'footer.phone': '+52 (984) 137 4927',
    'footer.location': 'Tulum, Quintana Roo, México',
    'footer.privacy': 'Aviso de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.copyright': '© 2026 Suspiro en Selvadentro. Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.logo': 'Suspiro at Selvadentro',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.project': 'The Project',
    'nav.bluezones': 'Blue Zones',
    'nav.architecture': 'Architecture',
    'nav.wellness': 'Wellness',
    'nav.masterplan': 'Masterplan',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a visit',

    // Hero
    'hero.headline': 'Live where longevity begins',
    'hero.subheadline': 'Suspiro at Selvadentro — Tulum, Mexico',
    'hero.scroll': 'Discover more',

    // Manifesto
    'manifesto.headline': 'Modern life has disconnected us',
    'manifesto.body1': 'Cities are faster, louder, more demanding. We move less, breathe less nature, feel further from what sustains us.',
    'manifesto.body2': 'But there are places where people live differently. Places where people live beyond 100 years with energy, purpose, and wellbeing.',
    'manifesto.cta': 'Discover the solution',

    // Blue Zones
    'bluezones.headline': 'Inspired by the Blue Zones',
    'bluezones.subtitle': 'Blue Zones — the regions where people live beyond 100 years',
    'bluezones.body': 'In Okinawa, Sardinia, Ikaria, and Nicoya, people live longer and healthier. We applied these same principles to create a community in the Tulum jungle.',
    'bluezones.pillar1': 'Natural movement',
    'bluezones.pillar2': 'Mindful eating',
    'bluezones.pillar3': 'Social connection',
    'bluezones.pillar4': 'Life purpose',
    'bluezones.pillar5': 'Nature immersion',
    'bluezones.cta': 'See the investment',

    // Vision
    'vision.headline': 'A community designed to live better',
    'vision.body': 'Architecture, nature, and wellness merge into one living experience. Here, the jungle is not decoration — it is the heart of everything.',
    'vision.pillar1': 'Conscious architecture',
    'vision.pillar2': 'Preserved nature',
    'vision.pillar3': 'Holistic wellness',
    'vision.cta': 'Discover the project',

    // Architecture
    'architecture.headline': 'Three visions, one philosophy',
    'architecture.studio1.name': 'JJF Creando',
    'architecture.studio1.desc': 'Contemporary architecture integrated with the natural landscape.',
    'architecture.studio2.name': 'Estudio AMA',
    'architecture.studio2.desc': 'Landscape design and spatial experiences that connect.',
    'architecture.studio3.name': 'Maat Handasa',
    'architecture.studio3.desc': 'Conscious architecture focused on wellness and harmony.',
    'architecture.swipe': 'SWIPE',

    // Wellness
    'wellness.headline': 'Wellness is the foundation',
    'wellness.body': 'Every space is designed to cultivate balance between mind, body, and nature.',
    'wellness.exp1': 'Sunrise yoga',
    'wellness.exp2': 'Jungle meditation',
    'wellness.exp3': 'Natural trails',
    'wellness.exp4': 'Crystal cenotes',
    'wellness.exp5': 'Spa & wellness',
    'wellness.exp6': 'Jungle fitness',
    'wellness.cta': 'Book your visit',

    // Masterplan
    'masterplan.headline': 'Designed to respect the jungle',
    'masterplan.suspiroLabel': 'Suspiro at Selvadentro',
    'masterplan.locationHeadline': 'The Location',
    'masterplan.area': 'Only 35% buildable — true low density',
    'masterplan.residences': '9 natural cenotes',
    'masterplan.wellness': '15+ amenities',
    'masterplan.trails': 'Lots from 4,800 sqft',
    'masterplan.location': '103 hectares in the Tulum jungle — near the Tren Maya and the new international airport',
    'masterplan.cta': 'Explore the masterplan',
    'masterplan.cenotesHeadline': 'The Masterplan',
    'masterplan.cenotesBody': 'Preserved jungle, natural cenotes, and thoughtful density — every detail designed for harmony with nature.',

    // Gallery
    'gallery.headline': 'A place to move, rest, and reconnect',
    'gallery.body': 'From jungle trails to stillness decks—every space is designed to bring you back to balance.',
    'gallery.cta': 'Schedule your private visit',
    'gallery.img1': 'Cenote Mirador',
    'gallery.img2': 'Jungle residence',
    'gallery.img3': 'Aerial view',
    'gallery.img4': 'Integrated architecture',
    'gallery.img5': 'Casa de los Cenotes',
    'gallery.img6': 'Holistic Pavilion',
    'gallery.img7': 'Spa & Wellness',
    'gallery.img8': 'Mirador',
    'gallery.img9': 'Jungle Gym',
    'gallery.img10': 'Jungle Bar',
    'gallery.img11': 'Jungle Courts',
    'gallery.img12': 'Jungle sunset',

    // Investment
    'investment.headline': 'Own a piece of the jungle',
    'investment.body': 'Developments with natural cenotes and vast jungle reserves are vanishingly rare. This is your entry point into a community built for the future of wellness.',
    'investment.lotSize': 'From 4,800 sqft',
    'investment.lotSizeLabel': 'Lot size',
    'investment.delivery': '48-month financing, 0% interest',
    'investment.residences': '9 natural cenotes',
    'investment.appreciation': '+134% appreciation',
    'investment.appreciationLabel': 'Phase 1 to Phase 4',
    'investment.priceLabel': 'Lots from',
    'investment.price': '$70,000 USD',
    'investment.cta1': 'Book a call',
    'investment.cta2': 'Schedule private tour',
    'investment.disclaimer': 'Prices in US dollars (USD). Subject to availability and sales phase. +134% confirmed appreciation from Phase 1 to Phase 4. 20% minimum down payment.',

    // Testimonials
    'testimonials.headline': 'What our owners say',
    'testimonials.quote1': 'We were looking for a place where our children could grow up connected to nature. Selvadentro is exactly that.',
    'testimonials.author1': 'Rodríguez Family, Phase 1 Owners',
    'testimonials.quote2': 'The combination of cenotes, preserved jungle, and conscious architecture doesn\'t exist in any other development in Tulum.',
    'testimonials.author2': 'Investor, Mexico City',
    'testimonials.quote3': 'I came to see the project and I stayed. The rhythm of life here changes you from day one.',
    'testimonials.author3': 'Owner, Phase 2',

    // Final CTA
    'finalcta.headline': 'Your journey into wellness begins here',
    'finalcta.name': 'Full name',
    'finalcta.email': 'Email address',
    'finalcta.phone': 'Phone number',
    'finalcta.submit': 'Schedule private presentation',
    'finalcta.note': 'We will contact you within 24 hours',

    // Footer
    'footer.tagline': 'Where longevity begins',
    'footer.contact': 'Contact',
    'footer.email': 'd.comercial@selvadentrotulum.com',
    'footer.phone': '+52 (984) 137 4927',
    'footer.location': 'Tulum, Quintana Roo, Mexico',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.copyright': '© 2026 Suspiro at Selvadentro. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string): string | string[] => {
    const value = translations[language][key as keyof typeof translations.es];
    return value || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
