import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Bizimlə Əlaqə | Earth Group MMC',
  description:
    'Layihəniz var? Earth Group MMC ilə əlaqə saxlayın — mükəmməl bir tədbir keçirməyinizə necə kömək edə biləcəyimizi müzakirə edək. E-poçt, telefon və ünvan məlumatları.',
  keywords: [
    'Earth Group əlaqə',
    'tədbir sifarişi',
    'contact event company Azerbaijan',
    'Bakı tədbir şirkəti əlaqə',
  ],
  openGraph: {
    title: 'Bizimlə Əlaqə | Earth Group MMC',
    description:
      'Layihəniz var? Mükəmməl bir tədbir keçirməyinizə necə kömək edə biləcəyimizi müzakirə etməkdən məmnun olarıq.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'Earth Group MMC',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Page() {
  return <ContactClient />;
}
