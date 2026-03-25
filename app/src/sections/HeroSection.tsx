import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen bg-negro-suave overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_cenote.jpg"
          alt="Selva y cenote"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="font-display text-display-1 max-w-4xl mb-6">
          {t('hero.headline')}
        </h1>

        <p className="text-body-lg text-white/80 mb-12">
          {t('hero.subheadline')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2">
        <span className="text-micro">{t('hero.scroll')}</span>
        <div className="animate-bounce-slow">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
