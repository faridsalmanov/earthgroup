'use client';

import { useState, useEffect } from 'react';
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
              i18n.language === code ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {label}
          </button>
          {i < langs.length - 1 && <span className="text-white/20 select-none">|</span>}
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
  ];

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <>
      {/* Pill navbar — absolute so it overlays the hero without pushing it down */}
      <header className="absolute top-5 left-0 right-0 z-50 px-4 sm:px-8">
        <div className="max-w-[1320px] mx-auto">
          <div
            className="flex items-center justify-between h-[76px] px-8 rounded-full"
            style={{
              background: 'rgba(15, 15, 15, 0.18)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/assets/logo/logo-Photoroom.png"
                alt="Earth Group MMC"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-9">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  href={to}
                  className={`text-[1.05rem] font-normal transition-colors ${
                    isActive(to) ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side: lang + CTA */}
            <div className="hidden md:flex items-center gap-5">
              <LangSwitcher />
              <Link
                href="/contact"
                className="px-6 py-2.5 text-white text-[0.95rem] font-medium rounded-full transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.35)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {t('nav.getInTouch')}
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white"
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

          {/* Mobile dropdown */}
          {open && (
            <div
              className="md:hidden mt-2 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15, 15, 15, 0.60)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  href={to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-sm border-b border-white/[0.06] last:border-0 transition-colors ${
                    isActive(to) ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-6 py-4">
                <LangSwitcher />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 text-white text-sm font-medium rounded-full"
                  style={{ border: '1px solid rgba(255,255,255,0.35)' }}
                >
                  {t('nav.getInTouch')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

    </>
  );
}
