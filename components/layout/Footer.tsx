'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav.home'),     to: '/' },
    { label: t('nav.about'),    to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.contact'),  to: '/contact' },
  ];

  const serviceLinks = [
    { label: t('services.items.venue.title'),   to: '/services' },
    { label: t('services.items.fairs.title'),   to: '/services' },
    { label: t('services.items.congress.title'), to: '/services' },
    { label: t('services.items.meetings.title'), to: '/services' },
    { label: t('services.items.staffing.title'), to: '/services' },
  ];

  return (
    <footer className="bg-brand-600 text-white/60">
      {/* Partial divider — separates CTA from footer visually */}
      <div className="flex justify-center pt-0">
        <div className="w-[120px] h-px bg-white/20" />
      </div>
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12 py-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="bg-white/10 rounded-lg px-3 py-2 inline-block">
              <img
                src="/assets/logo/EG logo.png"
                alt="Earth Group MMC"
                className="h-9 w-auto object-contain brightness-[10] invert"
              />
            </div>
            <p className="text-[0.9rem] leading-[1.8em]">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-[1rem]">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    href={to}
                    className="text-[0.9rem] leading-[1.8em] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-[1rem]">{t('nav.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    href={to}
                    className="text-[0.9rem] leading-[1.8em] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-[1rem]">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-[0.9rem] leading-[1.8em]">
              <li>
                <a href="mailto:info@earthgroup.az" className="hover:text-white transition-colors">
                  info@earthgroup.az
                </a>
              </li>
              <li>
                <a href="tel:+994120000000" className="hover:text-white transition-colors">
                  +994 12 000 00 00
                </a>
              </li>
              <li>{t('contact.address')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.15] mt-[60px] pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Earth Group MMC. {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}
