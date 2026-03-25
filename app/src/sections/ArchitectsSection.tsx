import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArchitectsSection() {
  const sectionRef = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const studios = [
    {
      name: 'architecture.studio1.name',
      desc: 'architecture.studio1.desc',
      image: '/images/architecture_detail.jpg',
    },
    {
      name: 'architecture.studio2.name',
      desc: 'architecture.studio2.desc',
      image: '/images/gallery_terrace.jpg',
    },
    {
      name: 'architecture.studio3.name',
      desc: 'architecture.studio3.desc',
      image: '/images/residence_exterior.jpg',
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % studios.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + studios.length) % studios.length);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="py-24 lg:py-32 bg-marfil"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-16">
          {t('architecture.headline')}
        </h2>

        <div className="reveal relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-smooth"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {studios.map((studio, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="aspect-[4/3] overflow-hidden img-zoom">
                    <img
                      src={studio.image}
                      alt={t(studio.name) as string}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display text-display-3 text-negro-suave mb-4">
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

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-3 border border-negro-suave text-negro-suave hover:bg-negro-suave hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-3">
            {studios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cenote w-6' : 'bg-gris-claro hover:bg-gris-medio'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 border border-negro-suave text-negro-suave hover:bg-negro-suave hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
