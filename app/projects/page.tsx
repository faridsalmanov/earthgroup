'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const projectKeys = ['marathon25', 'marathon26', 'bbq', 'wine'];

const projectImages: Record<string, string> = {
  marathon25: '/assets/projects/baku marathon/marathon_2025.jpg',
  marathon26: '/assets/projects/baku marathon/marathon_2026.jpg',
  bbq:        '/assets/projects/bbq/bbq.jpg',
  wine:       '/assets/projects/serab/serab1.jpg',
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-brand-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">{t('projects.page.title')}</h1>
          <p className="text-brand-200 text-lg max-w-xl">{t('projects.page.subtitle')}</p>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectKeys.map((key) => (
            <div key={key} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={projectImages[key]}
                  alt={t(`projects.items.${key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-900 mb-3">{t(`projects.items.${key}.title`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(`projects.items.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
