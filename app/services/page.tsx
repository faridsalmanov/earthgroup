import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Xidmətlərimiz | Earth Group MMC',
  description:
    'Məkan idarəetməsi, sərgi və ticarət yarmarkalarının təşkili, konqres və konfrans xidmətləri, görüşlərin idarə olunması, kadr təminatı və texniki-loqistik dəstək — tək bir görüşdən beynəlxalq tədbirlərə qədər hərtərəfli həllər.',
  keywords: [
    'tədbir xidmətləri',
    'məkan idarəetməsi',
    'sərgi təşkili',
    'konqres xidmətləri',
    'konfrans təşkili',
    'kadr təminatı',
    'event services Azerbaijan',
  ],
  openGraph: {
    title: 'Xidmətlərimiz | Earth Group MMC',
    description:
      'Tək bir korporativ görüşdən beynəlxalq konqreslərə qədər tələblərinizə uyğun hərtərəfli tədbir idarəetmə həlləri.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'Earth Group MMC',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function Page() {
  return <ServicesClient />;
}
