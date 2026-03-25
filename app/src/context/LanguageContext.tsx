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
    'nav.logo': 'Selvadentro',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.project': 'El Proyecto',
    'nav.bluezones': 'Blue Zones',
    'nav.architecture': 'Arquitectura',
    'nav.wellness': 'Wellness',
    'nav.masterplan': 'Masterplan',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agendar visita',
    
    // Hero
    'hero.headline': 'Vive donde la longevidad comienza',
    'hero.subheadline': 'Selvadentro — Tulum, México',
    'hero.scroll': 'Descubre más',
    
    // Manifesto (Problem Section)
    'manifesto.headline': 'La vida moderna nos ha desconectado',
    'manifesto.body1': 'Las ciudades son más rápidas, más ruidosas, más exigentes. Nos movemos menos, respiramos menos naturaleza, nos sentimos más lejos de lo que nos sostiene.',
    'manifesto.body2': 'Pero hay lugares donde las personas viven de forma diferente. Lugares donde la gente vive más de 100 años con energía, propósito y bienestar.',
    'manifesto.cta': 'Descubre la solución',
    
    // Blue Zones
    'bluezones.headline': 'Las Blue Zones tienen la clave',
    'bluezones.body': 'En Okinawa, Cerdeña, Ikaria y Nicoya, las personas viven más tiempo y más saludables que en cualquier otro lugar del planeta.',
    'bluezones.pillar1': 'Movimiento natural',
    'bluezones.pillar2': 'Alimentación consciente',
    'bluezones.pillar3': 'Conexión social',
    'bluezones.pillar4': 'Propósito de vida',
    'bluezones.pillar5': 'Contacto con la naturaleza',
    'bluezones.cta': 'Selvadentro aplica estos principios a la selva de Tulum',
    
    // Vision
    'vision.headline': 'Una comunidad diseñada para vivir mejor',
    'vision.body': 'Selvadentro integra arquitectura, naturaleza y bienestar en una experiencia de vida única. Aquí la selva no es decoración—es el centro del proyecto.',
    'vision.pillar1': 'Arquitectura consciente',
    'vision.pillar2': 'Naturaleza preservada',
    'vision.pillar3': 'Bienestar integral',
    'vision.cta': 'Conoce el proyecto',
    
    // Architecture
    'architecture.headline': 'Tres visiones, una filosofía',
    'architecture.studio1.name': 'JJF Arquitectos',
    'architecture.studio1.desc': 'Arquitectura contemporánea integrada con el paisaje natural.',
    'architecture.studio2.name': 'Estudio AMA',
    'architecture.studio2.desc': 'Diseño de paisaje y experiencias espaciales que conectan.',
    'architecture.studio3.name': 'Maat Handasa',
    'architecture.studio3.desc': 'Arquitectura consciente enfocada en bienestar y armonía.',
    
    // Wellness
    'wellness.headline': 'El bienestar es la base',
    'wellness.body': 'Cada espacio está diseñado para cultivar equilibrio entre mente, cuerpo y naturaleza.',
    'wellness.exp1': 'Yoga al amanecer',
    'wellness.exp2': 'Meditación en la selva',
    'wellness.exp3': 'Senderos naturales',
    'wellness.exp4': 'Cenotes cristalinos',
    'wellness.exp5': 'Nutrición consciente',
    'wellness.exp6': 'Comunidad vibrante',
    
    // Masterplan
    'masterplan.headline': 'Diseñado para respetar la selva',
    'masterplan.area': 'Solo 35% edificable — baja densidad real',
    'masterplan.residences': '9 cenotes naturales',
    'masterplan.wellness': '15+ amenidades',
    'masterplan.trails': 'Lotes desde 400 m²',
    'masterplan.cta': 'Explorar el masterplan',
    
    // Gallery
    'gallery.headline': 'Un lugar para moverse, descansar y reconectar',
    'gallery.body': 'Desde senderos en la selva hasta plataformas de quietud—cada espacio está diseñado para devolverte al equilibrio.',
    'gallery.filter.all': 'Todas',
    'gallery.filter.nature': 'Naturaleza',
    'gallery.filter.architecture': 'Arquitectura',
    'gallery.filter.wellness': 'Wellness',
    
    // Investment
    'investment.headline': 'Oportunidad única en Tulum',
    'investment.body': 'Proyectos con cenotes naturales y grandes extensiones de selva son extremadamente escasos. Selvadentro representa una oportunidad única para formar parte de una comunidad diseñada para el futuro del bienestar.',
    'investment.delivery': 'Financiamiento a 48 meses, 0% interés',
    'investment.residences': '9 cenotes naturales',
    'investment.priceLabel': 'Lotes desde',
    'investment.price': '$67,500 USD',
    'investment.cta1': 'Reservar llamada',
    'investment.cta2': 'Agendar tour privado',
    'investment.disclaimer': '+134% apreciación confirmada entre Fase 1 y Fase 4. Enganche mínimo del 20%.',
    
    // Testimonials
    'testimonials.headline': 'Lo que dicen quienes ya viven la experiencia',
    'testimonials.quote1': 'Vine por la arquitectura. Me quedé por el ritmo.',
    'testimonials.author1': 'María G., Residente',
    'testimonials.quote2': 'Es el primer lugar donde mi rutina matutina se siente como medicina.',
    'testimonials.author2': 'Carlos R., Residente',
    'testimonials.quote3': 'La comunidad aquí no es una amenidad—es el diseño.',
    'testimonials.author3': 'Ana L., Residente',
    
    // Final CTA
    'finalcta.headline': 'Tu viaje hacia el bienestar comienza aquí',
    'finalcta.name': 'Nombre completo',
    'finalcta.email': 'Correo electrónico',
    'finalcta.phone': 'Teléfono',
    'finalcta.submit': 'Agendar presentación privada',
    'finalcta.note': 'Te contactaremos en 24 horas',
    
    // Footer
    'footer.project': 'El Proyecto',
    'footer.bluezones': 'Blue Zones',
    'footer.architecture': 'Arquitectura',
    'footer.wellness': 'Wellness',
    'footer.masterplan': 'Masterplan',
    'footer.gallery': 'Galería',
    'footer.contact': 'Contacto',
    'footer.email': 'd.comercial@selvadentrotulum.com',
    'footer.phone': '+52 (984) 137 4927',
    'footer.location': 'Tulum, Quintana Roo, México',
    'footer.copyright': '© 2026 Selvadentro Tulum. Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.logo': 'Selvadentro',
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
    'hero.subheadline': 'Selvadentro — Tulum, Mexico',
    'hero.scroll': 'Discover more',
    
    // Manifesto
    'manifesto.headline': 'Modern life has disconnected us',
    'manifesto.body1': 'Cities are faster, louder, more demanding. We move less, breathe less nature, feel further from what sustains us.',
    'manifesto.body2': 'But there are places where people live differently. Places where people live beyond 100 years with energy, purpose, and wellbeing.',
    'manifesto.cta': 'Discover the solution',
    
    // Blue Zones
    'bluezones.headline': 'The Blue Zones hold the key',
    'bluezones.body': 'In Okinawa, Sardinia, Ikaria, and Nicoya, people live longer and healthier than almost anywhere else on Earth.',
    'bluezones.pillar1': 'Natural movement',
    'bluezones.pillar2': 'Conscious nutrition',
    'bluezones.pillar3': 'Social connection',
    'bluezones.pillar4': 'Purpose',
    'bluezones.pillar5': 'Nature contact',
    'bluezones.cta': 'Selvadentro applies these principles to the Tulum jungle',
    
    // Vision
    'vision.headline': 'A community designed to live better',
    'vision.body': 'Selvadentro integrates architecture, nature, and wellness into a unique living experience. Here, the jungle is not decoration—it is the center of the project.',
    'vision.pillar1': 'Conscious architecture',
    'vision.pillar2': 'Preserved nature',
    'vision.pillar3': 'Integral wellness',
    'vision.cta': 'Discover the project',
    
    // Architecture
    'architecture.headline': 'Three visions, one philosophy',
    'architecture.studio1.name': 'JJF Architects',
    'architecture.studio1.desc': 'Contemporary architecture integrated with the natural landscape.',
    'architecture.studio2.name': 'Estudio AMA',
    'architecture.studio2.desc': 'Landscape design and spatial experiences that connect.',
    'architecture.studio3.name': 'Maat Handasa',
    'architecture.studio3.desc': 'Conscious architecture focused on wellness and harmony.',
    
    // Wellness
    'wellness.headline': 'Wellness is the foundation',
    'wellness.body': 'Every space is designed to cultivate balance between mind, body, and nature.',
    'wellness.exp1': 'Sunrise yoga',
    'wellness.exp2': 'Jungle meditation',
    'wellness.exp3': 'Natural trails',
    'wellness.exp4': 'Crystal cenotes',
    'wellness.exp5': 'Conscious nutrition',
    'wellness.exp6': 'Vibrant community',
    
    // Masterplan
    'masterplan.headline': 'Designed to respect the jungle',
    'masterplan.area': 'Only 35% buildable — true low density',
    'masterplan.residences': '9 natural cenotes',
    'masterplan.wellness': '15+ amenities',
    'masterplan.trails': 'Lots from 4,300 sqft',
    'masterplan.cta': 'Explore the masterplan',
    
    // Gallery
    'gallery.headline': 'A place to move, rest, and reconnect',
    'gallery.body': 'From jungle trails to stillness decks—every space is designed to bring you back to balance.',
    'gallery.filter.all': 'All',
    'gallery.filter.nature': 'Nature',
    'gallery.filter.architecture': 'Architecture',
    'gallery.filter.wellness': 'Wellness',
    
    // Investment
    'investment.headline': 'A unique opportunity in Tulum',
    'investment.body': 'Projects with natural cenotes and large jungle extensions are extremely rare. Selvadentro represents a unique opportunity to become part of a community designed for the future of wellness.',
    'investment.delivery': '48-month financing, 0% interest',
    'investment.residences': '9 natural cenotes',
    'investment.priceLabel': 'Lots from',
    'investment.price': '$67,500 USD',
    'investment.cta1': 'Book a call',
    'investment.cta2': 'Schedule private tour',
    'investment.disclaimer': '+134% confirmed appreciation from Phase 1 to Phase 4. 20% minimum down payment.',
    
    // Testimonials
    'testimonials.headline': 'What those who already live the experience say',
    'testimonials.quote1': 'I came for the architecture. I stayed for the rhythm.',
    'testimonials.author1': 'María G., Resident',
    'testimonials.quote2': "It's the first place where my morning routine feels like medicine.",
    'testimonials.author2': 'Carlos R., Resident',
    'testimonials.quote3': 'Community here is not an amenity—it is the design.',
    'testimonials.author3': 'Ana L., Resident',
    
    // Final CTA
    'finalcta.headline': 'Your journey into wellness begins here',
    'finalcta.name': 'Full name',
    'finalcta.email': 'Email address',
    'finalcta.phone': 'Phone number',
    'finalcta.submit': 'Schedule private presentation',
    'finalcta.note': 'We will contact you within 24 hours',
    
    // Footer
    'footer.project': 'The Project',
    'footer.bluezones': 'Blue Zones',
    'footer.architecture': 'Architecture',
    'footer.wellness': 'Wellness',
    'footer.masterplan': 'Masterplan',
    'footer.gallery': 'Gallery',
    'footer.contact': 'Contact',
    'footer.email': 'd.comercial@selvadentrotulum.com',
    'footer.phone': '+52 (984) 137 4927',
    'footer.location': 'Tulum, Quintana Roo, Mexico',
    'footer.copyright': '© 2026 Selvadentro Tulum. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

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
