import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Home, Trees, Footprints, Droplets, Dumbbell, UtensilsCrossed, Palmtree } from 'lucide-react';

export default function MasterplanSection() {
  const sectionRef = useReveal();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const { t } = useLanguage();

  const stats = [
    { key: 'masterplan.area', value: '35%', unit: '' },
    { key: 'masterplan.residences', value: '9', unit: '' },
    { key: 'masterplan.wellness', value: '15+', unit: '' },
    { key: 'masterplan.trails', value: '450', unit: 'm²' },
  ];

  const hotspots = [
    { x: 25, y: 30, icon: Home, label: 'Refugio' },
    { x: 45, y: 45, icon: Droplets, label: 'Casa de los Cenotes' },
    { x: 65, y: 30, icon: Home, label: 'Mirador' },
    { x: 35, y: 65, icon: Trees, label: 'Pabellón Holístico' },
    { x: 55, y: 70, icon: Dumbbell, label: 'Jungle Gym' },
    { x: 75, y: 55, icon: Home, label: 'Suspiro' },
    { x: 20, y: 55, icon: UtensilsCrossed, label: 'Jungle Bar' },
    { x: 50, y: 25, icon: Palmtree, label: 'Senderos' },
    { x: 80, y: 40, icon: Footprints, label: 'Jungle Courts' },
  ];

  return (
    <section
      ref={sectionRef}
      id="masterplan"
      className="py-16 md:py-24 lg:py-32 bg-arena"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-8 md:mb-16">
          {t('masterplan.headline')}
        </h2>

        {/* Masterplan — horizontally scrollable on mobile for detail */}
        <div className="reveal relative mb-8 md:mb-16 -mx-5 md:mx-0">
          <div className="overflow-x-auto md:overflow-visible">
            <div className="relative w-[150vw] md:w-full aspect-[16/9] bg-selva-deep md:rounded-lg overflow-hidden">
              <img
                src="/images/masterplan_full.jpg"
                alt="Masterplan Selvadentro"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />

              {hotspots.map((hotspot, index) => {
                const Icon = hotspot.icon;
                return (
                  <button
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                  >
                    <span className="absolute inset-0 bg-cenote rounded-full animate-ping opacity-30" />
                    <div className={`relative w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-cenote rounded-full text-white transition-transform duration-300 ${activeHotspot === index ? 'scale-125' : 'scale-100'}`}>
                      <Icon size={14} className="md:w-4 md:h-4" />
                    </div>
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 md:px-3 md:py-2 bg-white text-negro-suave text-[9px] md:text-[11px] tracking-wider uppercase font-medium whitespace-nowrap rounded shadow-lg transition-all duration-300 ${activeHotspot === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                      {hotspot.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-center text-micro text-gris-claro mt-3 md:hidden">
            ← DESLIZA PARA EXPLORAR →
          </p>
        </div>

        {/* Location Map */}
        <div className="reveal mb-8 md:mb-16">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src="/images/masterplan_map.jpg"
              alt="Ubicación Selvadentro — Tulum, Quintana Roo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-micro text-gris-medio mt-3 md:mt-4">
            {t('masterplan.location')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="reveal text-center">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl text-negro-suave mb-1 md:mb-2">
                {stat.value}
                <span className="text-xl md:text-2xl lg:text-3xl text-cenote">{stat.unit}</span>
              </div>
              <p className="text-micro text-[9px] md:text-[11px] text-gris-medio">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
