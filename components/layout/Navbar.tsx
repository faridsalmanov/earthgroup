'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const langs = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

function LangSwitcher() {
  const { i18n } = useTranslation();
  const change = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
  };
  return (
    <div className="flex items-center gap-0.5 text-xs font-semibold">
      {langs.map(({ code, label }, i) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => change(code)}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              i18n.language === code ? 'text-brand-600 font-bold' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            {label}
          </button>
          {i < langs.length - 1 && <span className="text-gray-200 select-none">|</span>}
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  const links = [
    { to: '/',         label: t('nav.home') },
    { to: '/about',    label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact',  label: t('nav.contact') },
  ];

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between h-[70px]">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/assets/logo/EG logo.png"
              alt="Earth Group MMC"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                href={to}
                className={`text-[1rem] font-normal transition-colors ${
                  isActive(to)
                    ? 'text-brand-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LangSwitcher />
            <div className="w-px h-5 bg-gray-200" />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              {t('nav.getInTouch')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-black/[0.06] bg-white px-6 pb-5 pt-3">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-normal border-b border-gray-100 last:border-0 ${
                isActive(to) ? 'text-brand-600 font-medium' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4">
            <LangSwitcher />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              {t('nav.getInTouch')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
