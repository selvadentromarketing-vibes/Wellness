import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="bg-selva-deep text-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-8 md:mb-10">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img
              src="/images/selvadentro-logo-cream.png"
              alt="Suspiro at Selvadentro"
              className="h-10 md:h-12 w-auto opacity-80"
            />
            <div>
              <span className="font-display text-lg md:text-xl block leading-tight">
                {t('nav.logo')}
              </span>
              <span className="text-micro text-[9px] md:text-[10px] text-white/50">
                {t('footer.tagline')}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href={`mailto:${t('footer.email')}`} className="flex items-center gap-2.5 min-h-[44px]">
              <Mail size={16} className="text-accent-gold flex-shrink-0" />
              <span className="text-body text-sm text-white/70">{t('footer.email')}</span>
            </a>
            <a href={`tel:${String(t('footer.phone')).replace(/\s/g, '')}`} className="flex items-center gap-2.5 min-h-[44px]">
              <Phone size={16} className="text-accent-gold flex-shrink-0" />
              <span className="text-body text-sm text-white/70">{t('footer.phone')}</span>
            </a>
            <div className="flex items-center gap-2.5 min-h-[44px]">
              <MapPin size={16} className="text-accent-gold flex-shrink-0" />
              <span className="text-body text-sm text-white/70">{t('footer.location')}</span>
            </div>
          </div>

          {/* Social */}
          <a
            href="https://www.instagram.com/selvadentro.tulum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:bg-white hover:text-selva-deep transition-all duration-300 rounded-lg"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] md:text-[11px] text-white/40 tracking-wider">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a
              href="https://selvadentrotulum.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-[11px] text-white/40 hover:text-white transition-colors tracking-wider min-h-[44px] flex items-center"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="https://selvadentrotulum.com/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-[11px] text-white/40 hover:text-white transition-colors tracking-wider min-h-[44px] flex items-center"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
