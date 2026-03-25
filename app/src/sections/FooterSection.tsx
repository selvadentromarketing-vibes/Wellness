import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function FooterSection() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '#manifesto', label: 'footer.project' },
    { href: '#bluezones', label: 'footer.bluezones' },
    { href: '#architecture', label: 'footer.architecture' },
    { href: '#wellness', label: 'footer.wellness' },
    { href: '#masterplan', label: 'footer.masterplan' },
    { href: '#gallery', label: 'footer.gallery' },
    { href: '#contact', label: 'footer.contact' },
  ];

  return (
    <footer className="bg-selva-deep text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-2xl mb-6 block">
              {t('nav.logo')}
            </a>
            <p className="text-body text-white/60">
              {t('hero.subheadline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-micro text-white/40 mb-6">{t('nav.menu')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-body text-white/70 hover:text-white transition-colors"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-micro text-white/40 mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cenote" />
                <span className="text-body text-white/70">{t('footer.email')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cenote" />
                <span className="text-body text-white/70">{t('footer.phone')}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cenote mt-1" />
                <span className="text-body text-white/70">{t('footer.location')}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-micro text-white/40 mb-6">Social</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:bg-white hover:text-selva-deep transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:bg-white hover:text-selva-deep transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:bg-white hover:text-selva-deep transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-micro text-white/40">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-micro text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-micro text-white/40 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
