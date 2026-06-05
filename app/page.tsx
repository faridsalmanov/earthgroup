'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const heroImages = [
  '/assets/hero/event1.jpg',
  '/assets/hero/event2.jpg',
  '/assets/hero/event3.jpg',
];

const processSteps = [
  { num: '01.', titleKey: 'Discovery',       descKey: 'We gain a deep understanding of your event goals and requirements.' },
  { num: '02.', titleKey: 'Planning',         descKey: 'We develop a detailed, tailored plan for your event scope and audience.' },
  { num: '03.', titleKey: 'Execution',        descKey: 'Our team coordinates every detail precisely on the day of your event.' },
  { num: '04.', titleKey: 'Follow-up',        descKey: 'We review outcomes and gather feedback to continuously improve.' },
];

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-5 mb-5">
      <div className={`w-[50px] h-px ${light ? 'bg-white/60' : 'bg-brand-600'}`} />
      <span className={`text-[1.25rem] font-medium leading-[1.3em] tracking-[-0.02em] ${light ? 'text-white' : 'text-gray-800'}`}>
        {text}
      </span>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whyCards = [
    { title: t('about.pillar3.title'), desc: t('about.pillar3.desc'), link: '/about' },
    { title: t('about.pillar2.title'), desc: t('about.pillar2.desc'), link: '/about' },
    { title: t('about.pillar1.title'), desc: t('about.pillar1.desc'), link: '/services' },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '800px', maxHeight: '1000px', height: '100vh' }}
      >
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: i === activeSlide ? 1 : 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full pb-16 pt-8">
          <SectionLabel text="Earth Group MMC" light />
          <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-medium leading-[1.1em] tracking-[-0.02em] text-white mb-6 max-w-[660px]">
            {t('hero.title')}<br />
            <span className="text-brand-400">{t('hero.titleAccent')}</span>
            {' '}{t('hero.titleEnd')}
          </h1>
          <p className="text-white/75 text-[1.13rem] leading-[1.7em] max-w-[520px] mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/services"
              className="px-7 py-3.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              {t('hero.cta1')}
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              {t('hero.cta2')}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 sm:left-12 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ─── OUR SERVICES ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[75px]">
          {/* Split header */}
          <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-start lg:items-end justify-between">
            <div className="flex-1 max-w-[500px]">
              <SectionLabel text={t('services.eyebrow')} />
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                {t('services.title')}
              </h2>
            </div>
            <div className="flex-1 max-w-[550px]">
              <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
                {t('services.subtitle')}
              </p>
            </div>
          </div>

          {/* Asymmetric cards: 1 tall left + 2 stacked right */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Large card — Venue Management */}
            <div className="lg:flex-1 relative rounded-[15px] overflow-hidden min-h-[520px] lg:min-h-[580px] flex flex-col justify-end group cursor-default">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/services/venue_management.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 p-8 sm:p-10">
                <p className="text-brand-400 text-sm font-medium mb-3">01.</p>
                <h3 className="text-2xl font-medium text-white mb-3">{t('services.items.venue.title')}</h3>
                <p className="text-white/70 text-[0.9rem] leading-[1.8em] mb-5">{t('services.items.venue.desc')}</p>
                <Link href="/services" className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Right column: 2 smaller stacked cards */}
            <div className="lg:flex-1 flex flex-col gap-5">
              {[
                { num: '02.', key: 'fairs',   img: '/assets/services/exhibitions.jpg' },
                { num: '03.', key: 'congress', img: '/assets/services/conference.jpg' },
              ].map(({ num, key, img }) => (
                <div key={key} className="relative rounded-[15px] overflow-hidden h-[280px] flex flex-col justify-end group cursor-default">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 p-7">
                    <p className="text-brand-400 text-sm font-medium mb-2">{num}</p>
                    <h3 className="text-xl font-medium text-white mb-2">{t(`services.items.${key}.title`)}</h3>
                    <p className="text-white/70 text-[0.9rem] leading-[1.8em] mb-4 line-clamp-2">{t(`services.items.${key}.desc`)}</p>
                    <Link href="/services" className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors">
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all"
            >
              {t('services.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER (green accent) ─── */}
      <section className="bg-brand-600 py-[100px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
            <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] text-white max-w-[600px]">
              {t('cta.title')}
            </h2>
            <Link
              href="/contact"
              className="shrink-0 px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[100px] items-center">
            {/* Image with stats overlay */}
            <div className="flex-1 relative rounded-[15px] overflow-hidden" style={{ height: '560px' }}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/projects/whoweare.jpeg')" }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white rounded-[10px] p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="font-medium text-gray-800">Event outcomes</span>
                    </div>
                    <span className="text-brand-600 font-medium">100%</span>
                  </div>
                  <div className="bg-gray-100 rounded-[8px] h-[72px] flex items-end gap-1.5 px-4 pb-3 pt-0">
                    {[55, 76, 68, 73, 68, 88, 80, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-brand-600 rounded-t-[3px]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text + key points */}
            <div className="flex-1 space-y-5">
              <SectionLabel text={t('about.eyebrow')} />
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                {t('about.title')}
              </h2>
              <p className="text-[1.13rem] leading-[1.7em] text-gray-600">{t('about.p1')}</p>
              <div className="h-3" />
              <div className="space-y-5">
                {[
                  t('about.pillar1.title'),
                  t('about.pillar2.title'),
                  t('about.pillar3.title'),
                ].map((point) => (
                  <div key={point} className="flex items-center gap-5">
                    <div className="shrink-0 w-8 h-8 rounded-[5px] bg-brand-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[1.25rem] font-medium leading-[1.5em] tracking-[-0.02em]">{point}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all"
                >
                  {t('about.learnMore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT FULL-BLEED ─── */}
      <section className="relative py-[250px] sm:py-[350px] px-6 sm:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero/event2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
            <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] text-white max-w-[600px]">
              {t('about.p2')}
            </h2>
            <Link
              href="/about"
              className="shrink-0 px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
            >
              {t('about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[75px]">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="w-[50px] h-px bg-brand-600" />
              <span className="text-[1.25rem] font-medium tracking-[-0.02em]">Why choose us</span>
            </div>
            <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] mb-5">
              We strive to deliver exceptional events
            </h2>
            <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
              We are dedicated to providing the highest level of service, delivering innovative solutions, and exceeding expectations in everything we do.
            </p>
          </div>

          {/* Info cards with vertical dividers */}
          <div className="flex flex-col lg:flex-row">
            {whyCards.map((card, i) => (
              <div key={card.title} className="flex flex-col lg:flex-row flex-1">
                <div className="flex-1 space-y-3 py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0">
                  <h3 className="text-[1.4rem] font-medium leading-[1.5em] tracking-[-0.02em]">{card.title}</h3>
                  <p className="text-[0.9rem] leading-[1.8em] text-gray-600">{card.desc}</p>
                  <Link href={card.link} className="inline-block text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                    Learn more →
                  </Link>
                </div>
                {i < whyCards.length - 1 && (
                  <div className="w-full h-px lg:w-px lg:h-auto bg-black/5 my-0 lg:mx-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS (green accent bg) ─── */}
      <section className="bg-brand-600 py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[75px] items-start">
            <div className="lg:max-w-[400px] space-y-5">
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] text-white">
                Our process
              </h2>
              <p className="text-[1.13rem] leading-[1.7em] text-white/75">
                We developed a flexible, client-centred process that allows us to understand your goals and deliver outstanding results every time.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/15 transition-colors inline-block"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-[10px] p-7 space-y-3"
                  style={{ backgroundColor: 'rgba(0,0,0,0.12)' }}
                >
                  <p className="text-[1.25rem] font-medium text-white/50">{step.num}</p>
                  <h3 className="text-[1.25rem] font-medium leading-[1.5em] tracking-[-0.02em] text-white">{step.titleKey}</h3>
                  <p className="text-[0.9rem] leading-[1.8em] text-white/70">{step.descKey}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR COMMITMENT ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[100px] items-center">
            {/* Image with key numbers */}
            <div className="flex-1 relative pb-[60px] pr-0 lg:pr-[60px]">
              <div
                className="rounded-[10px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/projects/baku marathon/marathon_2025.jpg')",
                  height: '500px',
                }}
              />
              <div className="absolute bottom-0 right-0 flex gap-4">
                <div className="bg-brand-600 rounded-[10px] px-5 py-7 text-center min-w-[110px]">
                  <svg className="w-6 h-6 text-white mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-3xl font-medium text-white tracking-[-0.02em] leading-none mb-1">15+</p>
                  <p className="text-xs text-white/80 font-medium">Venues</p>
                </div>
                <div className="bg-white rounded-[10px] px-5 py-7 text-center min-w-[110px] shadow-xl border border-black/5">
                  <svg className="w-6 h-6 text-gray-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-3xl font-medium tracking-[-0.02em] leading-none mb-1">10+</p>
                  <p className="text-xs text-gray-500 font-medium">Years</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 space-y-5">
              <SectionLabel text="Our commitment" />
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                We build events that leave a lasting impression
              </h2>
              <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
                With our proven track record, collaborative approach, and commitment to excellence, we are uniquely positioned to help you create events that resonate long after they end.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors inline-block"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PROJECTS ─── */}
      <section className="bg-gray-50 py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[75px]">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="w-[50px] h-px bg-brand-600" />
              <span className="text-[1.25rem] font-medium tracking-[-0.02em]">{t('projects.eyebrow')}</span>
            </div>
            <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] mb-5">
              {t('projects.title')}
            </h2>
            <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
              A selection of events we have successfully organized and managed across Azerbaijan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            {[
              { key: 'marathon25', img: '/assets/projects/baku marathon/marathon_2025.jpg', category: 'Co-Organizer' },
              { key: 'bbq',        img: '/assets/projects/bbq/bbq.jpg',                     category: 'Festival' },
              { key: 'wine',       img: '/assets/projects/serab/serab1.jpg',                 category: 'Festival' },
            ].map(({ key, img, category }) => (
              <div key={key} className="flex-1 rounded-[15px] overflow-hidden bg-white group cursor-default" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div className="relative h-[220px] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-brand-600 text-xs font-medium uppercase tracking-widest">{category}</p>
                  <h3 className="text-[1.13rem] font-medium leading-[1.5em] tracking-[-0.02em]">
                    {t(`projects.items.${key}.title`)}
                  </h3>
                  <Link href="/projects" className="inline-block text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                    {t('projects.readMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all"
            >
              {t('projects.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
