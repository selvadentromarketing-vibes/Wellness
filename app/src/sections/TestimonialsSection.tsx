import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const sectionRef = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    { quote: 'testimonials.quote1', author: 'testimonials.author1', initials: 'FR' },
    { quote: 'testimonials.quote2', author: 'testimonials.author2', initials: 'IN' },
    { quote: 'testimonials.quote3', author: 'testimonials.author3', initials: 'PR' },
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { diff > 0 ? nextSlide() : prevSlide(); }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 bg-arena"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-10 md:mb-16">
          {t('testimonials.headline')}
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col items-center text-center px-2 md:px-4">
                  <Quote size={36} className="text-cenote mb-6 md:mb-8 md:w-12 md:h-12" strokeWidth={1} />
                  <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-negro-suave mb-8 md:mb-10 max-w-2xl leading-snug">
                    "{t(testimonial.quote)}"
                  </blockquote>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-cenote/20 flex items-center justify-center">
                      <span className="font-display text-sm md:text-lg text-cenote">{testimonial.initials}</span>
                    </div>
                    <p className="text-micro text-[10px] md:text-[11px] text-gris-medio">{t(testimonial.author)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="h-8 flex items-center justify-center"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`block rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cenote w-8 h-2' : 'bg-gris-claro hover:bg-gris-medio w-2 h-2'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
