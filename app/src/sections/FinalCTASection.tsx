import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/use-reveal';
import { Send, Check } from 'lucide-react';

export default function FinalCTASection() {
  const sectionRef = useReveal();
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '', phone: '', country: '', budget: '', timeline: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(false);

    try {
      const response = await fetch(
        'https://services.leadconnectorhq.com/hooks/crN2IhAuOBAl7D8324yI/webhook-trigger/bf242f2c-7825-46ea-97d6-d7a05e7cd84d',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`.trim(),
            country: formData.country,
            budget: formData.budget,
            investment_timeline: formData.timeline,
            source: 'wellness-landing-page',
          }),
        }
      );

      if (!response.ok) throw new Error('Submit failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', countryCode: '', phone: '', country: '', budget: '', timeline: '' });
    } catch {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          src="/images/svd_render_05.webp"
          alt="Selvadentro sunset jungle view — contact us for Blue Zone living in Tulum"
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
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 bg-accent-gold rounded-full flex items-center justify-center">
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
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/50 focus:outline-none focus:border-accent-gold transition-colors min-h-[44px]"
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
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/50 focus:outline-none focus:border-accent-gold transition-colors min-h-[44px]"
              />
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">{t('finalcta.phone')}</label>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-[110px] shrink-0 bg-transparent border-b border-white/30 py-3 text-white text-base focus:outline-none focus:border-accent-gold transition-colors min-h-[44px] [&>option]:text-black"
                >
                  <option value="" disabled>Code</option>
                  <option value="+1">+1 US/CA</option>
                  <option value="+52">+52 MX</option>
                  <option value="+44">+44 UK</option>
                  <option value="+34">+34 ES</option>
                  <option value="+33">+33 FR</option>
                  <option value="+49">+49 DE</option>
                  <option value="+39">+39 IT</option>
                  <option value="+55">+55 BR</option>
                  <option value="+57">+57 CO</option>
                  <option value="+54">+54 AR</option>
                  <option value="+56">+56 CL</option>
                  <option value="+51">+51 PE</option>
                  <option value="+593">+593 EC</option>
                  <option value="+61">+61 AU</option>
                  <option value="+91">+91 IN</option>
                  <option value="+81">+81 JP</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="555 123 4567"
                  className="flex-1 bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors min-h-[44px]"
                />
              </div>
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">
                {language === 'es' ? 'País de residencia' : 'Country of residence'}
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors min-h-[44px]"
              />
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">
                {language === 'es' ? 'Presupuesto' : 'Budget'}
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base focus:outline-none focus:border-accent-gold transition-colors min-h-[44px] [&>option]:text-black"
              >
                <option value="" disabled>{language === 'es' ? 'Selecciona un rango' : 'Select a range'}</option>
                <option value="70k-100k">$70,000 – $100,000 USD</option>
                <option value="100k-150k">$100,000 – $150,000 USD</option>
                <option value="150k+">$150,000+ USD</option>
              </select>
            </div>

            <div className="reveal">
              <label className="text-micro text-white/70 block mb-2">
                {language === 'es' ? 'Plazo de inversión' : 'Investment timeline'}
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-base focus:outline-none focus:border-accent-gold transition-colors min-h-[44px] [&>option]:text-black"
              >
                <option value="" disabled>{language === 'es' ? 'Selecciona un plazo' : 'Select a timeline'}</option>
                <option value="immediate">{language === 'es' ? 'Inmediato (1-3 meses)' : 'Immediate (1-3 months)'}</option>
                <option value="short">{language === 'es' ? 'Corto plazo (3-6 meses)' : 'Short-term (3-6 months)'}</option>
                <option value="medium">{language === 'es' ? 'Mediano plazo (6-12 meses)' : 'Medium-term (6-12 months)'}</option>
                <option value="exploring">{language === 'es' ? 'Explorando opciones' : 'Just exploring'}</option>
              </select>
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

            {submitError && (
              <p className="text-center text-sm text-red-400 mt-3">
                Submission error. Please try again or contact us via WhatsApp.
              </p>
            )}

            <p className="reveal text-center text-micro text-white/60">
              {t('finalcta.note')}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
