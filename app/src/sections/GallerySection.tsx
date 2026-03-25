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
    { src: '/images/hero_cenote.jpg', category: 'nature', size: 'large' },
    { src: '/images/jungle_canopy.jpg', category: 'nature', size: 'small' },
    { src: '/images/jungle_path.jpg', category: 'nature', size: 'small' },
    { src: '/images/architecture_detail.jpg', category: 'architecture', size: 'medium' },
    { src: '/images/residence_exterior.jpg', category: 'architecture', size: 'medium' },
    { src: '/images/yoga_jungle.jpg', category: 'wellness', size: 'small' },
    { src: '/images/gallery_cenote.jpg', category: 'nature', size: 'small' },
    { src: '/images/gallery_terrace.jpg', category: 'architecture', size: 'large' },
    { src: '/images/gallery_yoga.jpg', category: 'wellness', size: 'medium' },
    { src: '/images/final_cta_jungle.jpg', category: 'nature', size: 'medium' },
    { src: '/images/blue_zones.jpg', category: 'wellness', size: 'small' },
    { src: '/images/gallery_canopy.jpg', category: 'nature', size: 'small' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 lg:py-32 bg-marfil"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-12">
          <h2 className="font-display text-display-2 text-negro-suave mb-6">
            {t('gallery.headline')}
          </h2>
          <p className="text-body-lg text-gris-medio max-w-2xl mx-auto">
            {t('gallery.body')}
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-micro px-4 py-2 transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'text-negro-suave border-b-2 border-cenote'
                  : 'text-gris-medio hover:text-negro-suave'
              }`}
            >
              {t(filter.label)}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`reveal break-inside-avoid group relative overflow-hidden cursor-pointer ${
                image.size === 'large' ? 'aspect-[4/5]' :
                image.size === 'medium' ? 'aspect-square' : 'aspect-[4/3]'
              }`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-cenote transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
