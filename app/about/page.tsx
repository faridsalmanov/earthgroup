import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Haqqımızda | Earth Group MMC',
  description:
    'Earth Group MMC — tədbir sektorunda etibarlı ad. Missiyamız, dəyərlərimiz (təhlükəsizlik, keyfiyyət, peşəkarlıq) və peşəkar komandamızla tanış olun.',
  keywords: [
    'Earth Group haqqında',
    'tədbir şirkəti Azərbaycan',
    'peşəkar komanda',
    'missiya və dəyərlər',
    'about Earth Group MMC',
  ],
  openGraph: {
    title: 'Haqqımızda | Earth Group MMC',
    description:
      'Tədbir sektorunda etibarlı ad — missiyamız, əsas prinsiplərimiz və peşəkar komandamız haqqında ətraflı məlumat.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'Earth Group MMC',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function Page() {
  return <AboutClient />;
}
