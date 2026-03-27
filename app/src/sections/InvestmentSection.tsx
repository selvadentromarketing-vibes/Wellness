import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';

export default function InvestmentSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  return (
    <section
      ref={sectionRef}
      id="investment"
      className="min-h-screen bg-marfil"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="reveal reveal-left relative h-[40vh] sm:h-[50vh] lg:h-auto overflow-hidden">
          <img
            src="/images/svd_phase_01.jpg"
            alt="Residencia Selvadentro"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-center p-6 py-10 md:p-8 lg:p-16 xl:p-24">
          <div className="max-w-lg w-full">
            <h2 className="reveal font-display text-display-2 text-negro-suave mb-6 md:mb-8">
              {t('investment.headline')}
            </h2>

            <p className="reveal text-body-lg text-gris-medio mb-6 md:mb-8">
              {t('investment.body')}
            </p>

            {/* Price highlight */}
            <div className="reveal mb-6 md:mb-8">
              <p className="text-micro text-gris-medio mb-2">{t('investment.priceLabel')}</p>
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-negro-suave">
                {t('investment.price')}
              </p>
            </div>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              <div className="p-4 md:p-5 bg-arena rounded-lg">
                <p className="text-micro text-[10px] md:text-[11px] text-gris-medio">{t('investment.delivery')}</p>
              </div>
              <div className="p-4 md:p-5 bg-arena rounded-lg">
                <p className="text-micro text-[10px] md:text-[11px] text-gris-medio">{t('investment.residences')}</p>
              </div>
            </div>

            <div className="reveal flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <a href="#contact" className="btn-primary text-center flex-1">
                {t('investment.cta1')}
              </a>
              <a href="#contact" className="btn-secondary text-center flex-1">
                {t('investment.cta2')}
              </a>
            </div>

            <p className="reveal text-micro text-[9px] md:text-[11px] text-gris-medio leading-relaxed">
              {t('investment.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
