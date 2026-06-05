'use client';

import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-brand-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">{t('aboutPage.title')}</h1>
          <p className="text-brand-200 text-lg max-w-xl">{t('aboutPage.subtitle')}</p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-8 items-start">
            <div className="hidden sm:flex w-14 h-14 rounded-xl bg-brand-900 items-center justify-center shrink-0 mt-1">
              <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-3">{t('aboutPage.missionEyebrow')}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 mb-5">{t('aboutPage.missionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">{t('aboutPage.missionText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-8 items-start">
            <div className="hidden sm:flex w-14 h-14 rounded-xl bg-brand-900 items-center justify-center shrink-0 mt-1">
              <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-3">{t('aboutPage.visionEyebrow')}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 mb-5">{t('aboutPage.visionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">{t('aboutPage.visionText')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
