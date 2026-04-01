import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#manifesto', label: 'nav.project' },
    { href: '#bluezones', label: 'nav.bluezones' },
    { href: '#architecture', label: 'nav.architecture' },
    { href: '#wellness', label: 'nav.wellness' },
    { href: '#masterplan', label: 'nav.masterplan' },
    { href: '#gallery', label: 'nav.gallery' },
    { href: '#contact', label: 'nav.contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-marfil/95 backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-5 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={isScrolled ? '/images/selvadentro-logo.webp' : '/images/selvadentro-logo-cream.png'}
              alt="Suspiro at Selvadentro"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-micro link-underline transition-colors ${
                  isScrolled
                    ? 'text-negro-suave hover:text-accent-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Toggle */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => language !== 'es' && toggleLanguage()}
                className={`lang-toggle ${language === 'es' ? 'active' : ''} ${
                  !isScrolled ? '!text-white/80' : ''
                } ${language === 'es' && !isScrolled ? '!text-white' : ''}`}
              >
                ES
              </button>
              <span className={`text-xs ${isScrolled ? 'text-gris-medio' : 'text-white/50'}`}>/</span>
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`lang-toggle ${language === 'en' ? 'active' : ''} ${
                  !isScrolled ? '!text-white/80' : ''
                } ${language === 'en' && !isScrolled ? '!text-white' : ''}`}
              >
                EN
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className={`hidden md:inline-flex text-micro px-6 py-3 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'btn-secondary'
                  : 'bg-accent-gold/90 text-selva-deep hover:bg-accent-gold'
              }`}
            >
              {t('nav.cta')}
            </a>

            {/* Menu Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? 'text-negro-suave' : 'text-white'}`}
              aria-label={isMenuOpen ? String(t('nav.close')) : String(t('nav.menu'))}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu - Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-marfil transition-all duration-700 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-3xl sm:text-4xl text-negro-suave hover:text-accent-gold transition-colors"
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease'
              }}
            >
              {t(link.label)}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-8"
            style={{
              transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease'
            }}
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </>
  );
}
