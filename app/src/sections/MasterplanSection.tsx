import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { MapPin, Home, Trees, Footprints } from 'lucide-react';

export default function MasterplanSection() {
  const sectionRef = useReveal();
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const { t } = useLanguage();

  const stats = [
    { key: 'masterplan.area', value: '35%', unit: '' },
    { key: 'masterplan.residences', value: '9', unit: '' },
    { key: 'masterplan.wellness', value: '15+', unit: '' },
    { key: 'masterplan.trails', value: '400', unit: 'm²' },
  ];

  const hotspots = [
    { x: 30, y: 40, icon: Home, label: 'Residencias' },
    { x: 50, y: 60, icon: MapPin, label: 'Cenote' },
    { x: 70, y: 35, icon: Trees, label: 'Wellness Center' },
    { x: 40, y: 75, icon: Footprints, label: 'Senderos' },
  ];

  return (
    <section
      ref={sectionRef}
      id="masterplan"
      className="py-24 lg:py-32 bg-arena"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-16">
          {t('masterplan.headline')}
        </h2>

        <div className="reveal relative aspect-[16/9] bg-selva-deep rounded-lg overflow-hidden mb-16">
          <img
            src="/images/selvadentro-masterplan.jpg"
            alt="Masterplan Selvadentro"
            className="w-full h-full object-cover opacity-80"
          />

          {hotspots.map((hotspot, index) => {
            const Icon = hotspot.icon;
            return (
              <button
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                onMouseEnter={() => setActiveHotspot(index)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <span className="absolute inset-0 bg-cenote rounded-full animate-ping opacity-30" />
                <div className={`relative w-10 h-10 flex items-center justify-center bg-cenote rounded-full text-white transition-transform duration-300 ${activeHotspot === index ? 'scale-125' : 'scale-100'}`}>
                  <Icon size={18} />
                </div>
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white text-negro-suave text-micro whitespace-nowrap rounded transition-all duration-300 ${activeHotspot === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  {hotspot.label}
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="reveal text-center">
              <div className="font-display text-4xl lg:text-5xl text-negro-suave mb-2">
                {stat.value}
                <span className="text-2xl lg:text-3xl text-cenote">{stat.unit}</span>
              </div>
              <p className="text-micro text-gris-medio">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
