import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { siteContact, toTelHref } from '../content/site';

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue">{icon}</span>
      <div>
        <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">{label}</dt>
        <dd className="mt-1 text-base font-medium text-ink">{children}</dd>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  usePageMeta('contact');
  const c = t.contact;
  const iconCls = 'h-5 w-5';

  return (
    <>
      <PageHeader {...c.header} />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-14">
          <aside aria-labelledby="contact-info" className="lg:col-span-5">
            <div className="rounded-3xl bg-surface-cream p-7 sm:p-9">
              <h2 id="contact-info" className="text-2xl font-semibold">{c.infoTitle}</h2>
              <p className="mt-2 font-semibold text-ink">{t.org.name}</p>
              <dl className="mt-8 space-y-6">
                <InfoRow icon={<MapPin className={iconCls} aria-hidden="true" />} label={c.addressLabel}>
                  {t.org.location}
                </InfoRow>
                <InfoRow icon={<Phone className={iconCls} aria-hidden="true" />} label={c.phoneLabel}>
                  <span className="flex flex-col">
                    {siteContact.phones.map((p) => (
                      <a key={p} href={toTelHref(p)} className="text-brand-blue underline-offset-4 hover:underline">
                        {p}
                      </a>
                    ))}
                  </span>
                </InfoRow>
                <InfoRow icon={<Mail className={iconCls} aria-hidden="true" />} label={c.emailLabel}>
                  {siteContact.email ? (
                    <a href={`mailto:${siteContact.email}`} className="text-brand-blue hover:underline">
                      {siteContact.email}
                    </a>
                  ) : (
                    <span className="text-ink-muted">{t.common.comingSoon}</span>
                  )}
                </InfoRow>
                <InfoRow icon={<Globe className={iconCls} aria-hidden="true" />} label={c.webLabel}>
                  {siteContact.website ? (
                    <a href={siteContact.website} className="text-brand-blue hover:underline" target="_blank" rel="noreferrer">
                      {siteContact.website}
                    </a>
                  ) : (
                    <span className="text-ink-muted">{t.common.comingSoon}</span>
                  )}
                </InfoRow>
              </dl>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="card p-7 sm:p-10">
              <h2 className="text-2xl font-semibold">{c.formTitle}</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
