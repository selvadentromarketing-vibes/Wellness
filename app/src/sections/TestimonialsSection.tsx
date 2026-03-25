import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const sectionRef = useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    { quote: 'testimonials.quote1', author: 'testimonials.author1', image: '/images/testimonial_01.jpg' },
    { quote: 'testimonials.quote2', author: 'testimonials.author2', image: '/images/testimonial_02.jpg' },
    { quote: 'testimonials.quote3', author: 'testimonials.author3', image: '/images/testimonial_03.jpg' },
  ];

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 lg:py-32 bg-arena"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="reveal font-display text-display-2 text-negro-suave text-center mb-16">
          {t('testimonials.headline')}
        </h2>

        <div className="reveal relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-smooth"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col items-center text-center px-4">
                  <Quote size={48} className="text-cenote mb-8" strokeWidth={1} />
                  <blockquote className="font-display text-2xl lg:text-3xl text-negro-suave mb-10 max-w-2xl">
                    "{t(testimonial.quote)}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={t(testimonial.author) as string}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-micro text-gris-medio">{t(testimonial.author)}</p>
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
            {testimonials.map((_, index) => (
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
