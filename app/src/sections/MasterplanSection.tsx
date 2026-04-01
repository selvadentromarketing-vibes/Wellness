import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';

export default function MasterplanSection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const stats = [
    { key: 'masterplan.area', value: '35%', unit: '' },
    { key: 'masterplan.residences', value: '9', unit: '' },
    { key: 'masterplan.wellness', value: '15+', unit: '' },
    { key: 'masterplan.trails', value: '450', unit: 'm²' },
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

        {/* Suspiro Render + Stats — side by side on desktop */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center mb-16 md:mb-24">
          {/* Left: Render — scaled down, centered in column */}
          <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-lg overflow-hidden shadow-xl w-[260px] md:w-[300px]">
            <img
              src="/images/suspiro_render.png"
              alt="Suspiro at Selvadentro"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-micro text-[9px] md:text-[10px] text-white">{t('masterplan.suspiroLabel')}</span>
            </div>
          </div>
          </div>

          {/* Right: Stats as cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="reveal p-5 md:p-6 bg-marfil rounded-lg border border-piedra/30 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="font-display text-3xl md:text-4xl text-negro-suave mb-1">
                  {stat.value}
                  <span className="text-lg md:text-xl text-accent-gold">{stat.unit}</span>
                </div>
                <p className="text-micro text-[9px] md:text-[10px] text-gris-medio">{t(stat.key)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Masterplan Overview */}
        <div className="reveal mb-16 md:mb-24">
          <h3 className="font-display text-display-3 text-negro-suave text-center mb-4 md:mb-6">
            {t('masterplan.cenotesHeadline')}
          </h3>
          <p className="text-body-lg text-gris-medio text-center max-w-2xl mx-auto mb-8 md:mb-12">
            {t('masterplan.cenotesBody')}
          </p>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/masterplan_full.jpg"
              alt="Masterplan Selvadentro — 103 hectáreas"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Location Map */}
        <div className="reveal">
          <h3 className="font-display text-display-3 text-negro-suave text-center mb-6 md:mb-8">
            {t('masterplan.locationHeadline')}
          </h3>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
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

        <div className="reveal text-center mt-10 md:mt-14">
          <a href="#contact" className="btn-primary cta-pulse">
            {t('masterplan.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
