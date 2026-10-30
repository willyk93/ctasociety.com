import { CalendarDays, MapPin } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { DemoBadge } from './DemoBadge';

export interface EventItem {
  id: string;
  demo: boolean;
  title: string;
  date: string;
  location: string;
  description: string;
}

export function EventCard({ event }: { event: EventItem }) {
  const { t } = useLanguage();
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-card-hover">
      <div className="flex items-center justify-between gap-3 border-b border-surface-line bg-surface-cream px-6 py-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-red" />
          {t.events.upcoming}
        </span>
        {event.demo && <DemoBadge />}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <dl className="mt-4 space-y-2 text-sm text-ink-muted">
          <div className="flex items-center gap-2.5">
            <dt className="sr-only">{t.events.dateLabel}</dt>
            <CalendarDays className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
            <dd>{event.date}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <dt className="sr-only">{t.events.locationLabel}</dt>
            <MapPin className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
            <dd>{event.location}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{event.description}</p>
      </div>
    </article>
  );
}
