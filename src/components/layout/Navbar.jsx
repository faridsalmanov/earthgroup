import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/EG logo.png';

const langs = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

function LangSwitcher() {
  const { i18n } = useTranslation();
  const change = (code) => {
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
              i18n.language === code
                ? 'text-brand-700 font-bold'
                : 'text-gray-400 hover:text-brand-600'
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

  const links = [
    { to: '/',         label: t('nav.home') },
    { to: '/about',    label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact',  label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Earth Group MMC" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-gray-600 hover:text-brand-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="w-px h-4 bg-gray-200" />
            <LangSwitcher />
            <Link
              to="/contact"
              className="ml-1 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              {t('nav.getInTouch')}
            </Link>
          </nav>

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
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${
                  isActive ? 'text-brand-700' : 'text-gray-600 hover:text-brand-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2 py-3 border-t border-gray-100 mt-2">
            <span className="text-xs text-gray-400">Lang:</span>
            <LangSwitcher />
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            {t('nav.getInTouch')}
          </Link>
        </nav>
      )}
    </header>
  );
}
