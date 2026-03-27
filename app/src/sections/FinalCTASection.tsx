import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Send, Check } from 'lucide-react';

export default function FinalCTASection() {
  const sectionRef = useReveal();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/svd_render_05.jpg"
          alt="Selva atardecer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-5 md:px-6">
        <h2 className="reveal font-display text-display-2 text-white text-center mb-8 md:mb-12">
          {t('finalcta.headline')}
        </h2>

        {isSubmitted ? (
          <div className="reveal text-center text-white">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 bg-cenote rounded-full flex items-center justify-center">
              <Check size={28} />
            </div>
            <p className="text-body-lg">{t('finalcta.note')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">{t('finalcta.name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/50 focus:outline-none focus:border-cenote transition-colors min-h-[44px]"
              />
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">{t('finalcta.email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/50 focus:outline-none focus:border-cenote transition-colors min-h-[44px]"
              />
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">{t('finalcta.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/50 focus:outline-none focus:border-cenote transition-colors min-h-[44px]"
              />
            </div>

            <div className="reveal pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary justify-center gap-3 disabled:opacity-50 min-h-[52px]"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {t('finalcta.submit')}
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>

            <p className="reveal text-center text-micro text-white/60">
              {t('finalcta.note')}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
