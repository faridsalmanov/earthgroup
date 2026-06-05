import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import marathon25Img from '../assets/projects/baku marathon/marathon_2025.jpg';
import bbqImg from '../assets/projects/bbq/bbq.jpg';
import wineImg from '../assets/projects/serab/serab1.jpg';
import heroImg1 from '../assets/hero/event1.jpg';
import heroImg2 from '../assets/hero/event2.jpg';
import heroImg3 from '../assets/hero/event3.jpg';

const heroSlides = [heroImg1, heroImg2, heroImg3];

const projectImages = {
  marathon25: marathon25Img,
  bbq: bbqImg,
  wine: wineImg,
};

const serviceKeys = ['venue', 'fairs', 'congress'];

const serviceIcons = {
  venue: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-3a1 1 0 011-1h2a1 1 0 011 1v3m-4 0h4" />
    </svg>
  ),
  fairs: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 7h18M3 12h18M3 17h18M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
    </svg>
  ),
  congress: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  meetings: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  staffing: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  logistics: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const projectKeys = ['marathon25', 'bbq', 'wine'];

export default function Home() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const statsData = [
    { value: '15+',  key: 'stats.venues' },
    { value: '10+',  key: 'stats.years' },
    { value: '100%', key: 'stats.satisfaction' },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Slideshow backgrounds */}
        {heroSlides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: i === activeSlide ? 1 : 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: i === activeSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 1s ease, transform 6s ease',
            }}
          />
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full text-white/70 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Earth Group MMC
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
            {t('hero.title')}<br />
            <span className="text-brand-400">{t('hero.titleAccent')}</span>{' '}
            {t('hero.titleEnd')}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-3.5 bg-white text-brand-900 font-semibold rounded-lg hover:bg-brand-50 transition-colors shadow-lg">
              {t('hero.cta1')}
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-white/50 text-white font-semibold rounded-lg hover:bg-white/15 backdrop-blur-sm transition-colors">
              {t('hero.cta2')}
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-brand-800 py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map(({ value, key }, i) => (
            <div key={key} className={`text-center ${i < statsData.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
              <div className="text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-brand-300 uppercase tracking-wide">{t(key)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">{t('services.eyebrow')}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-4">{t('services.title')}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key) => (
              <div key={key} className="p-6 border border-gray-100 rounded-xl hover:border-brand-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-lg bg-brand-900 group-hover:bg-brand-600 flex items-center justify-center mb-5 transition-colors">
                  {serviceIcons[key]}
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{t(`services.items.${key}.title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`services.items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all">
              {t('services.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="bg-brand-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">{t('about.eyebrow')}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t('about.p1')}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t('about.p2')}</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all">
              {t('about.learnMore')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-brand-900 rounded-2xl p-10 flex flex-col gap-6">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', key: 'about.pillar1' },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', key: 'about.pillar2' },
              { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', key: 'about.pillar3' },
            ].map(({ icon, key }) => (
              <div key={key} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">{t(`${key}.title`)}</div>
                  <div className="text-brand-300 text-sm leading-relaxed">{t(`${key}.desc`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS TEASER ── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
            <div>
              <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">{t('projects.eyebrow')}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900">{t('projects.title')}</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all whitespace-nowrap">
              {t('projects.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectKeys.map((key) => (
              <div key={key} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={projectImages[key]}
                    alt={t(`projects.items.${key}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-brand-900 mb-2 leading-snug">{t(`projects.items.${key}.title`)}</h3>
                  <Link to="/projects" className="text-brand-600 text-xs font-semibold hover:text-brand-700 transition-colors">
                    {t('projects.readMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-900 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-0.5 bg-brand-500 mx-auto mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-brand-200 text-lg mb-10">{t('cta.subtitle')}</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-50 transition-colors text-base">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
