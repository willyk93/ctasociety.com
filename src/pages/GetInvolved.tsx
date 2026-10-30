import { ArrowRight, Clock, HandHeart, Handshake, Phone, UserPlus, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { siteContact, toTelHref } from '../content/site';

type SectionKey = 'membership' | 'volunteer' | 'partnerships' | 'support';

const config: Record<SectionKey, { icon: LucideIcon; accent: string }> = {
  membership: { icon: UserPlus, accent: 'bg-brand-blue text-white' },
  volunteer: { icon: Users, accent: 'bg-brand-yellow text-brand-blue' },
  partnerships: { icon: Handshake, accent: 'bg-brand-red text-white' },
  support: { icon: HandHeart, accent: 'bg-brand-blue-50 text-brand-blue' },
};

export default function GetInvolved() {
  const { t } = useLanguage();
  usePageMeta('getInvolved');
  const g = t.getInvolved;
  const keys = Object.keys(g.sections) as SectionKey[];

  return (
    <>
      <PageHeader {...g.header} />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {keys.map((key) => {
              const { icon: Icon, accent } = config[key];
              const s = g.sections[key];
              return (
                <article key={key} id={key} aria-labelledby={`gi-${key}`} className="card flex flex-col p-7 sm:p-9">
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}>
                    <Icon className="h-7 w-7" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h2 id={`gi-${key}`} className="mt-6 text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink-muted">{s.text}</p>
                  <p className="mt-5 inline-flex items-start gap-2 rounded-xl border border-dashed border-ink-muted/30 bg-surface-gray/70 px-4 py-3 text-sm text-ink-muted">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {s.details}
                  </p>
                  <div className="mt-auto pt-7">
                    <Button to="/contact" variant={key === 'membership' ? 'primary' : 'outline'} icon={<ArrowRight className="h-4 w-4" />}>
                      {s.cta}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-surface-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl leading-relaxed text-ink">{g.note}</p>
            <div className="flex flex-col gap-1">
              {siteContact.phones.map((p) => (
                <a key={p} href={toTelHref(p)} className="inline-flex items-center gap-2 font-semibold text-brand-blue hover:underline">
                  <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
