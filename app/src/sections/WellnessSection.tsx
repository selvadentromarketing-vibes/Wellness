import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';

export default function WellnessSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const experiences = [
    { key: 'wellness.exp1', image: '/images/yoga_jungle.webp' },
    { key: 'wellness.exp2', image: '/images/jungle_canopy.webp' },
    { key: 'wellness.exp3', image: '/images/jungle_path.webp' },
    { key: 'wellness.exp4', image: '/images/gallery_cenote.webp' },
    { key: 'wellness.exp5', image: '/images/spa_render.webp' },
    { key: 'wellness.exp6', image: '/images/jungle_gym.webp' },
  ];

  return (
    <section
      ref={sectionRef}
      id="wellness"
      className="py-16 md:py-24 lg:py-32 bg-marfil"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-4 md:mb-6">
          {t('wellness.headline')}
        </h2>

        <p className="reveal text-body-lg text-gris-medio text-center max-w-2xl mx-auto mb-10 md:mb-16">
          {t('wellness.body')}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="reveal group relative aspect-square overflow-hidden bg-negro-suave rounded-lg"
            >
              <img
                src={exp.image}
                alt={t(exp.key) as string}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <span className="text-micro text-[9px] md:text-[11px] text-white">{t(exp.key)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10 md:mt-14">
          <a href="#contact" className="btn-primary cta-pulse">
            {t('wellness.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
