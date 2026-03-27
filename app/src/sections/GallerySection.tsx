import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { X } from 'lucide-react';

export default function GallerySection() {
  const sectionRef = useReveal();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const filters = [
    { key: 'all', label: 'gallery.filter.all' },
    { key: 'nature', label: 'gallery.filter.nature' },
    { key: 'architecture', label: 'gallery.filter.architecture' },
    { key: 'wellness', label: 'gallery.filter.wellness' },
  ];

  const images = [
    { src: '/images/cenote_mirador.jpg', category: 'nature', size: 'large' },
    { src: '/images/svd_render_01.jpg', category: 'nature', size: 'small' },
    { src: '/images/svd_render_03.jpg', category: 'nature', size: 'small' },
    { src: '/images/svd_render_02.jpg', category: 'architecture', size: 'medium' },
    { src: '/images/aerial_casa_cenotes.jpg', category: 'architecture', size: 'medium' },
    { src: '/images/pabellon_holistico.jpg', category: 'wellness', size: 'small' },
    { src: '/images/spa_render.jpg', category: 'wellness', size: 'small' },
    { src: '/images/mirador_render.jpg', category: 'architecture', size: 'large' },
    { src: '/images/jungle_gym.jpg', category: 'wellness', size: 'medium' },
    { src: '/images/jungle_bar.jpg', category: 'nature', size: 'medium' },
    { src: '/images/jungle_courts.jpg', category: 'wellness', size: 'small' },
    { src: '/images/svd_render_05.jpg', category: 'nature', size: 'small' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

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

        {/* Horizontally scrollable filters on mobile */}
        <div className="reveal flex overflow-x-auto gap-1 md:gap-4 mb-8 md:mb-12 md:justify-center pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-micro whitespace-nowrap px-4 py-2.5 min-h-[44px] transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'text-negro-suave border-b-2 border-cenote'
                  : 'text-gris-medio hover:text-negro-suave'
              }`}
            >
              {t(filter.label)}
            </button>
          ))}
        </div>

        <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {filteredImages.map((image, index) => (
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
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-cenote transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
