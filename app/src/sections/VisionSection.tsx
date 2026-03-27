import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Home, Leaf, Sparkles } from 'lucide-react';

export default function VisionSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const pillars = [
    { key: 'vision.pillar1', icon: Home },
    { key: 'vision.pillar2', icon: Leaf },
    { key: 'vision.pillar3', icon: Sparkles },
  ];

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/aerial_casa_cenotes.jpg"
          alt="Selvadentro masterplan"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-5 md:px-6 max-w-4xl mx-auto">
        <h2 className="reveal font-display text-display-2 mb-5 md:mb-6">
          {t('vision.headline')}
        </h2>

        <p className="reveal text-body-lg text-white/80 mb-10 md:mb-16 max-w-2xl mx-auto">
          {t('vision.body')}
        </p>

        <div className="reveal grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/30 rounded-full">
                  <Icon size={22} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>
                <span className="text-micro text-[10px] md:text-[11px]">{t(pillar.key)}</span>
              </div>
            );
          })}
        </div>

        <a href="#architecture" className="reveal inline-block btn-primary">
          {t('vision.cta')}
        </a>
      </div>
    </section>
  );
}
