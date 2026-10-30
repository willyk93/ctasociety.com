import { DoorOpen, Drum, Handshake, HeartHandshake, Info, Sprout } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { ImageSlot } from '../components/ImageSlot';
import { images } from '../content/images';

type AreaKey = 'mutualAid' | 'newcomers' | 'culture' | 'youth' | 'collaboration';

const areaIcons: Record<AreaKey, LucideIcon> = {
  mutualAid: HeartHandshake,
  newcomers: DoorOpen,
  culture: Drum,
  youth: Sprout,
  collaboration: Handshake,
};

const areaAccent: Record<AreaKey, string> = {
  mutualAid: 'bg-brand-blue text-white',
  newcomers: 'bg-brand-yellow text-brand-blue',
  culture: 'bg-brand-red text-white',
  youth: 'bg-brand-blue text-white',
  collaboration: 'bg-brand-yellow text-brand-blue',
};

export default function Community() {
  const { t } = useLanguage();
  usePageMeta('community');
  const c = t.community;
  const keys = Object.keys(c.areas) as AreaKey[];

  return (
    <>
      <PageHeader {...c.header} />

      <section className="section">
        <div className="container-page space-y-6">
          {keys.map((key, i) => {
            const Icon = areaIcons[key];
            return (
              <article
                key={key}
                aria-labelledby={`area-${key}`}
                className="card grid items-center gap-6 p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-10"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl sm:h-20 sm:w-20 ${areaAccent[key]}`}>
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-brand-red" aria-hidden="true">
                    0{i + 1}
                  </p>
                  <h2 id={`area-${key}`} className="mt-1 text-2xl font-semibold sm:text-3xl">
                    {c.areas[key].title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-muted">{c.areas[key].text}</p>
                </div>
              </article>
            );
          })}

          <div className="grid gap-6 pt-4 lg:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-dashed border-brand-blue/25 bg-brand-blue-50 p-6 text-brand-blue">
              <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="leading-relaxed">{c.note}</p>
            </div>
            <div className="aspect-[16/7] overflow-hidden rounded-2xl border border-surface-line">
              <ImageSlot src={images.community} alt={t.about.who.imageAlt} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={t.cta.join.eyebrow}
        title={t.cta.join.title}
        text={t.cta.join.text}
        primary={{ label: t.cta.join.primary, to: '/participer' }}
        secondary={{ label: t.cta.join.secondary, to: '/contact' }}
      />
    </>
  );
}
