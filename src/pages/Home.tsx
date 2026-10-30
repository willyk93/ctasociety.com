import { ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { IconCard } from '../components/IconCard';
import { EventCard } from '../components/EventCard';
import { NewsCard } from '../components/NewsCard';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { valueIcons, priorityIcons } from '../components/valueIcons';

export default function Home() {
  const { t } = useLanguage();
  usePageMeta('home');

  const valueKeys = Object.keys(t.values) as (keyof typeof t.values)[];
  const priorityKeys = Object.keys(t.priorities) as (keyof typeof t.priorities)[];
  const accents = ['blue', 'yellow', 'red'] as const;

  const featuredNews = { id: 'featured', demo: false, ...t.news.featured, excerpt: t.news.featured.excerpt };

  return (
    <>
      <Hero />

      {/* MISSION */}
      <section aria-labelledby="mission-title" className="section">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="mission-title" eyebrow={t.mission.eyebrow} title={t.mission.title} />
          </div>
          <div className="lg:col-span-7">
            <blockquote className="relative rounded-3xl border border-surface-line bg-surface-cream p-8 sm:p-10">
              <Quote className="absolute -top-4 left-8 h-9 w-9 rounded-xl bg-brand-yellow p-2 text-brand-blue" aria-hidden="true" />
              <p className="text-lg leading-relaxed text-ink sm:text-xl">{t.mission.text}</p>
            </blockquote>
            <div className="mt-6">
              <Button to="/a-propos" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
                {t.common.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section aria-labelledby="values-title" className="section bg-surface-gray/60">
        <div className="container-page">
          <SectionHeading id="values-title" align="center" eyebrow={t.home.values.eyebrow} title={t.home.values.title} intro={t.home.values.intro} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {valueKeys.map((key, i) => (
              <IconCard key={key} icon={valueIcons[key]} title={t.values[key].title} text={t.values[key].text} accent={accents[i % 3]} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIORITÉS */}
      <section aria-labelledby="priorities-title" className="section">
        <div className="container-page">
          <SectionHeading id="priorities-title" eyebrow={t.home.priorities.eyebrow} title={t.home.priorities.title} intro={t.home.priorities.intro} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-surface-line bg-surface-line sm:grid-cols-2 lg:grid-cols-5">
            {priorityKeys.map((key, i) => {
              const Icon = priorityIcons[key];
              return (
                <li key={key} className="flex flex-col bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-brand-blue" aria-hidden="true" strokeWidth={1.75} />
                    <span className="font-display text-3xl font-semibold text-brand-yellow" aria-hidden="true">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-sans text-lg font-bold text-ink">{t.priorities[key].title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{t.priorities[key].text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ÉVÉNEMENTS */}
      <section aria-labelledby="events-title" className="section bg-surface-cream">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="events-title" eyebrow={t.home.events.eyebrow} title={t.home.events.title} intro={t.home.events.intro} />
            <Button to="/evenements" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="self-start sm:self-auto">
              {t.home.events.cta}
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.events.items.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section aria-labelledby="news-title" className="section">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="news-title" eyebrow={t.home.news.eyebrow} title={t.home.news.title} intro={t.home.news.intro} />
            <Button to="/actualites" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="self-start sm:self-auto">
              {t.home.news.cta}
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <NewsCard item={featuredNews} />
            {t.news.items.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* APPEL À LA COLLABORATION */}
      <CTASection
        eyebrow={t.cta.collaboration.eyebrow}
        title={t.cta.collaboration.title}
        text={t.cta.collaboration.text}
        primary={{ label: t.cta.collaboration.primary, to: '/contact' }}
        secondary={{ label: t.cta.collaboration.secondary, to: '/participer' }}
      />
    </>
  );
}
