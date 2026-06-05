import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/EG logo.png';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('nav.home'),     to: '/' },
    { label: t('nav.about'),    to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.contact'),  to: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <img src={logo} alt="Earth Group MMC" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-brand-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li>info@earthgroup.az</li>
              <li>+994 12 000 00 00</li>
              <li>{t('contact.address')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Earth Group MMC. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
