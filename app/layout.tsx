import type { Metadata } from 'next';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Earth Group MMC',
  description: 'Professional event management and venue services in Azerbaijan',
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
