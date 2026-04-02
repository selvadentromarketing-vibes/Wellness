import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';

export default function ProblemSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="min-h-screen bg-marfil"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="reveal reveal-left relative h-[40vh] sm:h-[50vh] lg:h-auto overflow-hidden">
          <img
            src="/images/svd_render_01.webp"
            alt="Selvadentro architectural render — jungle-integrated residential design in Tulum"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-center p-6 py-12 md:p-8 lg:p-16 xl:p-24">
          <div className="max-w-lg">
            <h2 className="reveal font-display text-display-2 text-negro-suave mb-6 md:mb-8">
              {t('manifesto.headline')}
            </h2>

            <p className="reveal text-body-lg text-gris-medio mb-5 md:mb-6">
              {t('manifesto.body1')}
            </p>

            <p className="reveal text-body-lg text-gris-medio mb-8 md:mb-10">
              {t('manifesto.body2')}
            </p>

            <a
              href="#bluezones"
              className="reveal inline-block btn-primary cta-pulse"
            >
              {t('manifesto.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
