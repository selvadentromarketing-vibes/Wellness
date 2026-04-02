import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';

export default function ArchitectsSection() {
  const sectionRef = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const studios = [
    {
      name: 'architecture.studio1.name',
      desc: 'architecture.studio1.desc',
      image: '/images/svd_render_02.webp',
      logo: '/images/logo_jjf.webp',
    },
    {
      name: 'architecture.studio2.name',
      desc: 'architecture.studio2.desc',
      image: '/images/mirador_render.webp',
      logo: '/images/logo_estudio_ama.webp',
    },
    {
      name: 'architecture.studio3.name',
      desc: 'architecture.studio3.desc',
      image: '/images/spa_render.webp',
      logo: '/images/logo_maat_handasa.webp',
    },
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % studios.length), [studios.length]);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + studios.length) % studios.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="py-16 md:py-24 lg:py-32 bg-marfil"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-10 md:mb-16">
          {t('architecture.headline')}
        </h2>

        <div
          className="reveal relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-smooth"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {studios.map((studio, index) => (
              <div key={index} className="w-full flex-shrink-0 px-0 md:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                  <div className="aspect-[4/3] overflow-hidden img-zoom rounded-lg">
                    <img
                      src={studio.image}
                      alt={t(studio.name) as string}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center lg:text-left py-4 md:py-0">
                    {/* Studio Logo */}
                    <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
                      <img
                        src={studio.logo}
                        alt={t(studio.name) as string}
                        className="h-12 md:h-16 w-auto object-contain opacity-80"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-display-3 text-negro-suave mb-3 md:mb-4">
                      {t(studio.name)}
                    </h3>
                    <p className="text-body-lg text-gris-medio">
                      {t(studio.desc)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators — larger touch targets on mobile */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="flex gap-3">
            {studios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-8 flex items-center justify-center transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent-gold w-8 h-2' : 'bg-gris-claro hover:bg-gris-medio w-2 h-2'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Swipe hint on mobile */}
        <p className="text-center text-micro text-gris-claro mt-4 md:hidden">
          ← {t('architecture.swipe') || 'DESLIZA'} →
        </p>
      </div>
    </section>
  );
}
