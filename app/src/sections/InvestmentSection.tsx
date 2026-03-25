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
        <div className="reveal reveal-left relative h-[50vh] lg:h-auto overflow-hidden">
          <img
            src="/images/residence_exterior.jpg"
            alt="Residencia Selvadentro"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center p-8 lg:p-16 xl:p-24">
          <div className="max-w-lg">
            <h2 className="reveal font-display text-display-2 text-negro-suave mb-8">
              {t('investment.headline')}
            </h2>

            <p className="reveal text-body-lg text-gris-medio mb-8">
              {t('investment.body')}
            </p>

            {/* Price highlight */}
            <div className="reveal mb-8">
              <p className="text-micro text-gris-medio mb-2">{t('investment.priceLabel')}</p>
              <p className="font-display text-4xl lg:text-5xl text-negro-suave">
                {t('investment.price')}
              </p>
            </div>

            <div className="reveal grid grid-cols-2 gap-4 mb-10">
              <div className="p-5 bg-arena">
                <p className="text-micro text-gris-medio">{t('investment.delivery')}</p>
              </div>
              <div className="p-5 bg-arena">
                <p className="text-micro text-gris-medio">{t('investment.residences')}</p>
              </div>
            </div>

            <div className="reveal flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-primary text-center">
                {t('investment.cta1')}
              </a>
              <a href="#contact" className="btn-secondary text-center">
                {t('investment.cta2')}
              </a>
            </div>

            <p className="reveal text-micro text-gris-medio">
              {t('investment.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
