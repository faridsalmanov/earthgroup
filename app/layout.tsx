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
  icons: {
    icon: [
      { url: '/assets/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/fav/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/fav/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/assets/fav/favicon.ico',
    apple: '/assets/fav/apple-touch-icon.png',
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
