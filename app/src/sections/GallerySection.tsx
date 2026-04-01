import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { X } from 'lucide-react';

export default function GallerySection() {
  const sectionRef = useReveal();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const images = [
    { src: '/images/cenote_mirador.jpg', label: 'gallery.img1', size: 'large' },
    { src: '/images/svd_render_01.jpg', label: 'gallery.img2', size: 'small' },
    { src: '/images/svd_render_03.jpg', label: 'gallery.img3', size: 'small' },
    { src: '/images/svd_render_02.jpg', label: 'gallery.img4', size: 'medium' },
    { src: '/images/aerial_casa_cenotes.jpg', label: 'gallery.img5', size: 'medium' },
    { src: '/images/pabellon_holistico.jpg', label: 'gallery.img6', size: 'small' },
    { src: '/images/spa_render.jpg', label: 'gallery.img7', size: 'small' },
    { src: '/images/mirador_render.jpg', label: 'gallery.img8', size: 'large' },
    { src: '/images/jungle_gym.jpg', label: 'gallery.img9', size: 'medium' },
    { src: '/images/jungle_bar.jpg', label: 'gallery.img10', size: 'medium' },
    { src: '/images/jungle_courts.jpg', label: 'gallery.img11', size: 'small' },
    { src: '/images/svd_render_05.jpg', label: 'gallery.img12', size: 'small' },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-16 md:py-24 lg:py-32 bg-marfil"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-12">
        <div className="reveal text-center mb-8 md:mb-12">
          <h2 className="font-display text-display-2 text-negro-suave mb-4 md:mb-6">
            {t('gallery.headline')}
          </h2>
          <p className="text-body-lg text-gris-medio max-w-2xl mx-auto">
            {t('gallery.body')}
          </p>
        </div>

        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`reveal break-inside-avoid group relative overflow-hidden cursor-pointer rounded-lg ${
                image.size === 'large' ? 'aspect-[4/5]' :
                image.size === 'medium' ? 'aspect-square' : 'aspect-[4/3]'
              }`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={t(image.label) as string}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                <span className="text-micro text-[9px] md:text-[11px] text-white">
                  {t(image.label)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10 md:mt-14">
          <a href="#contact" className="btn-primary cta-pulse">
            {t('gallery.cta')}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-accent-gold transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
