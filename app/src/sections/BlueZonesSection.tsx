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
      className="relative min-h-screen flex items-center justify-center py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/blue_zones.jpg"
          alt="Blue Zones lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h2 className="reveal font-display text-display-2 mb-6">
          {t('bluezones.headline')}
        </h2>

        <p className="reveal text-body-lg text-white/80 mb-16 max-w-2xl mx-auto">
          {t('bluezones.body')}
        </p>

        <div className="reveal grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={32} strokeWidth={1.5} />
                <span className="text-micro">{t(pillar.key)}</span>
              </div>
            );
          })}
        </div>

        <p className="reveal text-body text-white/90">
          {t('bluezones.cta')}
        </p>
      </div>
    </section>
  );
}
