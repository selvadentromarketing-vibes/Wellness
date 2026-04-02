import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Activity, Apple, Users, Heart, TreePine } from 'lucide-react';

export default function BlueZonesSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const pillars = [
    { key: 'bluezones.pillar1', icon: Activity },
    { key: 'bluezones.pillar2', icon: Apple },
    { key: 'bluezones.pillar3', icon: Users },
    { key: 'bluezones.pillar4', icon: Heart },
    { key: 'bluezones.pillar5', icon: TreePine },
  ];

  return (
    <section
      ref={sectionRef}
      id="bluezones"
      className="relative min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/pabellon_holistico.webp"
          alt="Holistic wellness pavilion at Selvadentro — Blue Zone inspired architecture in Tulum jungle"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-5 md:px-6 max-w-5xl mx-auto">
        <h2 className="reveal font-display text-display-2 mb-4">
          {t('bluezones.headline')}
        </h2>

        <p className="reveal text-body text-white/60 italic mb-6 md:mb-8">
          {t('bluezones.subtitle')}
        </p>

        <p className="reveal text-body-lg text-white/80 mb-10 md:mb-16 max-w-2xl mx-auto">
          {t('bluezones.body')}
        </p>

        {/* 2-col on mobile, 5-col on desktop */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 mb-10 md:mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 ${
                  index === 4 ? 'col-span-2 sm:col-span-1 mx-auto w-full max-w-[200px] sm:max-w-none' : ''
                }`}
              >
                <Icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                <span className="text-micro text-[10px] md:text-[11px]">{t(pillar.key)}</span>
              </div>
            );
          })}
        </div>

        <a href="#investment" className="reveal inline-block btn-primary cta-pulse">
          {t('bluezones.cta')}
        </a>
      </div>
    </section>
  );
}
