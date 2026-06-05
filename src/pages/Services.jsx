import { useTranslation } from 'react-i18next';
import venueImg from '../assets/services/venue_management.jpg';
import fairsImg from '../assets/services/exhibitions.jpg';
import congressImg from '../assets/services/conference.jpg';
import meetingsImg from '../assets/services/meeting.jpg';
import staffingImg from '../assets/services/staff.jpg';
import logisticsImg from '../assets/services/tech.jpeg';

const services = [
  { key: 'venue',     image: venueImg },
  { key: 'fairs',     image: fairsImg },
  { key: 'congress',  image: congressImg },
  { key: 'meetings',  image: meetingsImg },
  { key: 'staffing',  image: staffingImg },
  { key: 'logistics', image: logisticsImg },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <section className="bg-brand-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">{t('servicesPage.title')}</h1>
          <p className="text-brand-200 text-lg max-w-xl">{t('servicesPage.subtitle')}</p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white">
        {services.map(({ key, image }, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={key}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[420px]`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[280px] lg:min-h-0">
                <img
                  src={image}
                  alt={t(`services.items.${key}.title`)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-900/30" />
              </div>

              {/* Text */}
              <div className={`w-full lg:w-1/2 flex items-center px-8 py-14 lg:px-16 ${isEven ? 'bg-white' : 'bg-brand-50'}`}>
                <div className="max-w-md">
                  <div className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-3">
                    0{index + 1}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 mb-4">
                    {t(`services.items.${key}.title`)}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    {t(`services.items.${key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
