'use client';

import { useTranslation } from 'react-i18next';
import { AnimateIn, StaggerContainer, StaggerItem, fadeUp, fadeLeft, scaleIn } from '@/components/AnimateIn';

const principleIcons = {
  safety: (
    <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  quality: (
    <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  professionalism: (
    <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-900 flex items-center justify-center text-center px-4" style={{ minHeight: '280px', paddingTop: '100px', paddingBottom: '60px' }}>
        <AnimateIn variants={fadeUp} duration={0.7}>
          <h1 className="font-display text-4xl sm:text-[3.1rem] text-white font-medium tracking-[-0.02em] leading-[1.2em]">{t('aboutPage.eyebrow')}</h1>
        </AnimateIn>
      </section>

      {/* Mission */}
      <section className="bg-white py-[100px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[80px] lg:gap-[120px] items-center">
          <AnimateIn className="hidden lg:flex w-20 h-20 rounded-2xl bg-brand-900 items-center justify-center shrink-0" variants={scaleIn} duration={0.6}>
            <svg className="w-10 h-10 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth={1.5} strokeLinecap="round" />
              <circle cx="12" cy="12" r="5" strokeWidth={1.5} strokeLinecap="round" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </AnimateIn>
          <div className="flex-1">
            <StaggerContainer stagger={0.13}>
              <StaggerItem variants={fadeLeft}>
                <h2 className="text-3xl sm:text-[3.1rem] font-medium text-brand-900 tracking-[-0.02em] leading-[1.2em] mb-6">
                  {t('aboutPage.missionTitle')}
                </h2>
              </StaggerItem>
              <StaggerItem variants={fadeUp}>
                <p className="text-[1.13rem] leading-[1.8em] text-gray-600 max-w-2xl">
                  {t('aboutPage.missionText')}
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-brand-50 py-[100px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto space-y-[60px]">
          {/* Header */}
          <AnimateIn className="max-w-[560px]" variants={fadeLeft}>
            <h2 className="text-3xl sm:text-[3.1rem] font-medium text-brand-900 tracking-[-0.02em] leading-[1.2em] mb-3">
              {t('aboutPage.principlesEyebrow')}
            </h2>
            <p className="text-[1.13rem] leading-[1.7em] text-gray-500">
              {t('aboutPage.principlesSubtitle')}
            </p>
          </AnimateIn>

          {/* Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.14}>
            {(['safety', 'quality', 'professionalism'] as const).map((key) => (
              <StaggerItem key={key} variants={fadeUp}>
                <div className="bg-white rounded-[16px] p-8 h-full flex flex-col gap-5 shadow-sm border border-black/[0.04]">
                  <div className="w-14 h-14 rounded-[12px] bg-brand-900 flex items-center justify-center shrink-0">
                    {principleIcons[key]}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[1.25rem] font-medium text-brand-900 leading-[1.4em] tracking-[-0.02em]">
                      {t(`aboutPage.principles.${key}.title`)}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.8em] text-gray-500">
                      {t(`aboutPage.principles.${key}.desc`)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
