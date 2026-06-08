'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { AnimateIn, StaggerContainer, StaggerItem, fadeUp, fadeLeft } from '@/components/AnimateIn';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

type FormState = { name: string; email: string; company: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          company:    form.company,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="bg-brand-900 flex items-center justify-center text-center px-4" style={{ minHeight: '280px', paddingTop: '100px', paddingBottom: '60px' }}>
        <AnimateIn variants={fadeUp} duration={0.7}>
          <h1 className="font-display text-4xl sm:text-[3.1rem] text-white font-medium tracking-[-0.02em] leading-[1.2em]">{t('contact.title')}</h1>
        </AnimateIn>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact details */}
          <AnimateIn variants={fadeLeft} duration={0.7}>
            <h2 className="font-display text-2xl font-bold text-brand-900 mb-6">{t('contact.details')}</h2>
            <StaggerContainer className="space-y-5 text-gray-600 text-sm" stagger={0.12} delay={0.1}>
              <StaggerItem>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-900">{t('contact.emailLabel')}</div>
                    <div>info@earthgroup.az</div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-900">{t('contact.phoneLabel')}</div>
                    <div>+994 12 000 00 00</div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-900">{t('contact.addressLabel')}</div>
                    <div>{t('contact.address')}</div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </AnimateIn>

          {/* Form */}
          <AnimateIn variants={fadeUp} delay={0.2} duration={0.7}>
            {status === 'success' ? (
              <div className="rounded-xl bg-brand-50 border border-brand-200 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-brand-800 mb-2">{t('contact.form.successTitle')}</h2>
                <p className="text-gray-600 text-sm">{t('contact.form.successText')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.company')}</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-600">{t('contact.form.errorText', 'Something went wrong. Please try again or email us directly.')}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? t('contact.form.sending', 'Sending…') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </AnimateIn>

        </div>
      </section>
    </>
  );
}
