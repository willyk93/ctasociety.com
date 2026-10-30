import { Info } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { EventCard } from '../components/EventCard';
import { CTASection } from '../components/CTASection';

export default function Events() {
  const { t } = useLanguage();
  usePageMeta('events');
  const e = t.events;
  const hasDemo = e.items.some((item) => item.demo);

  return (
    <>
      <PageHeader {...e.header} />

      <section aria-labelledby="upcoming-title" className="section">
        <div className="container-page">
          <h2 id="upcoming-title" className="text-3xl font-semibold">{e.upcoming}</h2>
          {hasDemo && (
            <div className="mt-6 flex gap-3 rounded-2xl border border-brand-yellow/60 bg-brand-yellow-50 p-5 text-ink">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
              <p>{e.demoNotice}</p>
            </div>
          )}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {e.items.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <h2 className="mt-20 text-3xl font-semibold">{e.past}</h2>
          <p className="mt-4 rounded-2xl border border-dashed border-surface-line bg-surface-gray/60 p-8 text-center text-ink-muted">
            {e.noPast}
          </p>
        </div>
      </section>

      <CTASection
        eyebrow={t.cta.collaboration.eyebrow}
        title={t.cta.collaboration.title}
        text={t.cta.collaboration.text}
        primary={{ label: t.cta.collaboration.primary, to: '/contact' }}
      />
    </>
  );
}
