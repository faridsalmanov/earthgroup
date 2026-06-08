import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Earth Group MMC | Tədbir və Məkan İdarəetməsi Azərbaycanda',
  description:
    'Earth Group MMC — Azərbaycanda salonların, sərgilərin, konqreslərin, konfransların və korporativ tədbirlərin peşəkar səviyyədə idarə olunması və təşkili üzrə ixtisaslaşmış şirkət.',
  keywords: [
    'Earth Group',
    'tədbir idarəetməsi',
    'məkan idarəetməsi',
    'event management Azerbaijan',
    'konfrans təşkili',
    'sərgi təşkili',
    'Bakı tədbir şirkəti',
  ],
  openGraph: {
    title: 'Earth Group MMC | Tədbir və Məkan İdarəetməsi',
    description:
      'Azərbaycanda salonların, sərgilərin, konqreslərin və korporativ tədbirlərin peşəkar idarə olunması və təşkili.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'Earth Group MMC',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomeClient />;
}
