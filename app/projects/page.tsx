import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Layihələrimiz | Earth Group MMC',
  description:
    'Bakı Marafonu, Barbekü Festivalı, Şərab Festivalı və digər tədbirlər — Earth Group MMC-nin Azərbaycanda uğurla həyata keçirdiyi seçilmiş layihələrlə tanış olun.',
  keywords: [
    'Earth Group layihələri',
    'Bakı Marafonu',
    'Barbekü Festivalı',
    'Şərab Festivalı',
    'keçirilmiş tədbirlər',
    'event portfolio Azerbaijan',
  ],
  openGraph: {
    title: 'Layihələrimiz | Earth Group MMC',
    description:
      'Azərbaycanda uğurla həyata keçirdiyimiz tədbirlərin seçmə nümunələri — Bakı Marafonu, Barbekü Festivalı, Şərab Festivalı və daha çoxu.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'Earth Group MMC',
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function Page() {
  return <ProjectsClient />;
}
