'use client';

import { useTranslation } from 'react-i18next';
import { AnimateIn, StaggerContainer, StaggerItem, fadeUp, scaleIn } from '@/components/AnimateIn';

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
      <section className="bg-brand-900 flex items-center justify-center text-center px-4" style={{ minHeight: '280px', paddingTop: '100px', paddingBottom: '60px' }}>
        <AnimateIn variants={fadeUp} duration={0.7}>
          <h1 className="font-display text-4xl sm:text-[3.1rem] text-white font-medium tracking-[-0.02em] leading-[1.2em]">{t('projects.page.title')}</h1>
        </AnimateIn>
      </section>

      <section className="bg-white py-20 px-4">
        <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.13}>
          {projectKeys.map((key) => (
            <StaggerItem key={key} variants={fadeUp}>
              <div className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <AnimateIn className="relative h-56 overflow-hidden" variants={scaleIn} duration={0.8}>
                  <img
                    src={projectImages[key]}
                    alt={t(`projects.items.${key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimateIn>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-900 mb-3">{t(`projects.items.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`projects.items.${key}.desc`)}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
