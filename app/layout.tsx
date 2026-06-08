import type { Metadata } from 'next';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: {
    default: 'Earth Group MMC | Tədbir və Məkan İdarəetməsi Azərbaycanda',
    template: '%s',
  },
  description:
    'Earth Group MMC — Azərbaycanda salonların, sərgilərin, konqreslərin, konfransların və korporativ tədbirlərin peşəkar səviyyədə idarə olunması və təşkili üzrə ixtisaslaşmış şirkət.',
  applicationName: 'Earth Group MMC',
  authors: [{ name: 'Earth Group MMC' }],
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    siteName: 'Earth Group MMC',
    locale: 'az_AZ',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>
        <I18nProvider>
          <Layout>{children}</Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
