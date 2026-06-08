'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem, fadeUp, fadeLeft, scaleIn } from '@/components/AnimateIn';

const heroImages = [
  '/assets/hero/event1.jpg',
  '/assets/hero/event2.jpg',
  '/assets/hero/event3.jpg',
];

const processKeys = [
  { num: '01.', key: 'discovery' },
  { num: '02.', key: 'planning' },
  { num: '03.', key: 'execution' },
  { num: '04.', key: 'followup' },
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

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative flex flex-col justify-center overflow-hidden -mt-[76px]"
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

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full pb-16 pt-[150px]">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[5rem] font-medium leading-[1.1em] tracking-[-0.02em] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="block lg:whitespace-nowrap">{t('hero.title')}</span>
            <span className="block lg:whitespace-nowrap">
              <span className="text-brand-400">{t('hero.titleAccent')}</span>
              {' '}{t('hero.titleEnd')}
            </span>
          </motion.h1>

          <motion.p
            className="text-white/75 text-[1.13rem] leading-[1.7em] max-w-[520px] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link href="/services" className="px-7 py-3.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors">
              {t('hero.cta1')}
            </Link>
            <Link href="/contact" className="px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              {t('hero.cta2')}
            </Link>
          </motion.div>
        </div>

      </section>

      {/* ─── OUR SERVICES ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[75px]">
          {/* Split header */}
          <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-start lg:items-end justify-between">
            <AnimateIn className="flex-1 max-w-[500px]" variants={fadeLeft}>
              <SectionLabel text={t('services.eyebrow')} />
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                {t('services.title')}
              </h2>
            </AnimateIn>
            <AnimateIn className="flex-1 max-w-[550px]" delay={0.15}>
              <p className="text-[1.13rem] leading-[1.7em] text-gray-600">{t('services.subtitle')}</p>
            </AnimateIn>
          </div>

          {/* Asymmetric cards */}
          <StaggerContainer className="flex flex-col lg:flex-row gap-5" stagger={0.1}>
            {/* Large left card */}
            <StaggerItem className="lg:flex-1" variants={scaleIn}>
              <div className="relative rounded-[15px] overflow-hidden min-h-[520px] lg:min-h-[580px] flex flex-col justify-end group cursor-default">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/assets/services/venue_management.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 p-8 sm:p-10">
                  <h3 className="text-2xl font-medium text-white mb-3">{t('services.items.venue.title')}</h3>
                  <p className="text-white/70 text-[0.9rem] leading-[1.8em] mb-5">{t('services.items.venue.desc')}</p>
                  <Link href="/services" className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors">{t('home.learnMore')}</Link>
                </div>
              </div>
            </StaggerItem>

            {/* Right column: 2 stacked */}
            <div className="lg:flex-1 flex flex-col gap-5">
              {[
                { key: 'fairs',   img: '/assets/services/exhibitions.jpg' },
                { key: 'congress', img: '/assets/services/conference.jpg' },
              ].map(({ key, img }) => (
                <StaggerItem key={key} variants={scaleIn}>
                  <div className="relative rounded-[15px] overflow-hidden h-[280px] flex flex-col justify-end group cursor-default">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${img}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="relative z-10 p-7">
                      <h3 className="text-xl font-medium text-white mb-2">{t(`services.items.${key}.title`)}</h3>
                      <p className="text-white/70 text-[0.9rem] leading-[1.8em] mb-4 line-clamp-2">{t(`services.items.${key}.desc`)}</p>
                      <Link href="/services" className="text-white/60 hover:text-brand-400 text-sm font-medium transition-colors">{t('home.learnMore')}</Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <AnimateIn>
            <Link href="/services" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all">
              {t('services.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[100px] items-center">
            {/* Image */}
            <AnimateIn className="flex-1 relative rounded-[15px] overflow-hidden" variants={scaleIn} duration={0.8}
              style={{ height: '560px' } as React.CSSProperties}>
              <div className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/projects/whoweare.jpeg')" }} />
              <AnimateIn className="absolute bottom-8 left-8 right-8" delay={0.3} variants={fadeUp}>
                <div className="bg-white rounded-[10px] px-6 pt-5 pb-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-800 text-sm">{t('home.eventOutcomes')}</span>
                    <span className="text-brand-600 font-semibold text-sm flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                      </svg>
                      +100%
                    </span>
                  </div>
                  <svg viewBox="-4 -5 212 65" className="w-full" preserveAspectRatio="none" style={{ height: '72px' }}>
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,52 C25,48 45,42 65,35 S95,22 115,16 S155,6 180,3 L200,1 L200,56 L0,56 Z"
                      fill="url(#areaGrad)"
                    />
                    <path
                      d="M0,52 C25,48 45,42 65,35 S95,22 115,16 S155,6 180,3 L200,1"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="200" cy="1" r="3.5" fill="#16a34a" />
                  </svg>
                </div>
              </AnimateIn>
            </AnimateIn>

            {/* Text */}
            <div className="flex-1 space-y-5">
              <AnimateIn variants={fadeLeft}>
                <SectionLabel text={t('about.eyebrow')} />
                <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                  {t('about.title')}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-[1.13rem] leading-[1.7em] text-gray-600">{t('about.p1')}</p>
              </AnimateIn>
              <div className="h-3" />
              <StaggerContainer stagger={0.12} delay={0.15}>
                {[t('about.pillar1.title'), t('about.pillar2.title'), t('about.pillar3.title')].map((point) => (
                  <StaggerItem key={point}>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="shrink-0 w-8 h-8 rounded-[5px] bg-brand-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[1.25rem] font-medium leading-[1.5em] tracking-[-0.02em]">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <AnimateIn delay={0.4}>
                <Link href="/about" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all">
                  {t('about.learnMore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─── */}
      <section className="bg-brand-600 py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[75px] items-start">
            <AnimateIn className="lg:max-w-[400px] space-y-5" variants={fadeLeft}>
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] text-white">
                {t('home.process.eyebrow')}
              </h2>
              <p className="text-[1.13rem] leading-[1.7em] text-white/75">
                {t('home.process.desc')}
              </p>
              <div className="pt-2">
                <Link href="/about" className="px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/15 transition-colors inline-block">
                  {t('home.process.learnMore')}
                </Link>
              </div>
            </AnimateIn>

            <StaggerContainer className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.1} delay={0.1}>
              {processKeys.map((step) => (
                <StaggerItem key={step.num} variants={fadeUp}>
                  <div className="rounded-[10px] p-7 space-y-3 h-full transition-all duration-300 cursor-default group bg-black/10 hover:bg-white">
                    <p className="text-[1.25rem] font-medium text-white/50 group-hover:text-gray-400 transition-colors">{step.num}</p>
                    <h3 className="text-[1.25rem] font-medium leading-[1.5em] tracking-[-0.02em] text-white group-hover:text-gray-900 transition-colors">{t(`home.process.steps.${step.key}.title`)}</h3>
                    <p className="text-[0.9rem] leading-[1.8em] text-white/70 group-hover:text-gray-500 transition-colors">{t(`home.process.steps.${step.key}.desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── OUR COMMITMENT ─── */}
      <section className="bg-white py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[100px] items-center">
            {/* Image with stat badges */}
            <AnimateIn className="flex-1 relative pb-[60px] pr-0 lg:pr-[60px]" variants={scaleIn} duration={0.8}>
              <div className="rounded-[10px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/projects/baku marathon/marathon_2025.jpg')", height: '500px' }} />
              <AnimateIn className="absolute bottom-0 right-0 flex gap-4" delay={0.3}>
                <div className="bg-brand-600 rounded-[10px] px-5 py-7 text-center min-w-[110px]">
                  <svg className="w-6 h-6 text-white mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-3xl font-medium text-white tracking-[-0.02em] leading-none mb-1">15+</p>
                  <p className="text-xs text-white/80 font-medium">{t('home.commitment.venues')}</p>
                </div>
                <div className="bg-white rounded-[10px] px-5 py-7 text-center min-w-[110px] shadow-xl border border-black/5">
                  <svg className="w-6 h-6 text-gray-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-3xl font-medium tracking-[-0.02em] leading-none mb-1">10+</p>
                  <p className="text-xs text-gray-500 font-medium">{t('home.commitment.years')}</p>
                </div>
              </AnimateIn>
            </AnimateIn>

            {/* Text */}
            <div className="flex-1 space-y-5">
              <AnimateIn variants={fadeLeft}>
                <SectionLabel text={t('home.commitment.eyebrow')} />
                <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em]">
                  {t('home.commitment.title')}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
                  {t('home.commitment.desc')}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <Link href="/contact" className="px-7 py-3.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors inline-block mt-2">
                  {t('home.commitment.cta')}
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PROJECTS ─── */}
      <section className="bg-gray-50 py-[125px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[75px]">
          <AnimateIn className="max-w-[600px] mx-auto text-center">
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="w-[50px] h-px bg-brand-600" />
              <span className="text-[1.25rem] font-medium tracking-[-0.02em]">{t('projects.eyebrow')}</span>
            </div>
            <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] mb-5">
              {t('projects.title')}
            </h2>
            <p className="text-[1.13rem] leading-[1.7em] text-gray-600">
              {t('home.projects.desc')}
            </p>
          </AnimateIn>

          <StaggerContainer className="flex flex-col sm:flex-row gap-5" stagger={0.12}>
            {[
              { key: 'marathon25', img: '/assets/projects/baku marathon/marathon_2025.jpg' },
              { key: 'bbq',        img: '/assets/projects/bbq/bbq.jpg' },
              { key: 'wine',       img: '/assets/projects/serab/serab1.jpg' },
            ].map(({ key, img }) => (
              <StaggerItem key={key} variants={fadeUp} className="flex-1">
                <Link href="/projects" className="block h-full">
                  <div
                    className="rounded-[15px] overflow-hidden bg-white group cursor-pointer h-full transition-all duration-300 hover:-translate-y-2"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.09)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.16)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.09)')}
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${img}')` }} />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-[1.13rem] font-medium leading-[1.5em] tracking-[-0.02em]">
                        {t(`projects.items.${key}.title`)}
                      </h3>
                      <span className="inline-block text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors">
                        {t('projects.readMore')}
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn className="text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all">
              {t('projects.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-brand-600 py-[100px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
            <AnimateIn className="flex-1" variants={fadeLeft}>
              <h2 className="text-3xl sm:text-[3.1rem] font-medium leading-[1.2em] tracking-[-0.02em] text-white max-w-[600px]">
                {t('cta.title')}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <Link href="/contact" className="shrink-0 px-7 py-3.5 border border-white/30 text-white font-medium rounded-lg hover:bg-white/15 transition-colors">
                {t('cta.button')}
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
