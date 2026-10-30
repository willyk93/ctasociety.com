import { CalendarDays, FileText, Newspaper } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { NewsCard } from '../components/NewsCard';

export default function News() {
  const { t } = useLanguage();
  usePageMeta('news');
  const n = t.news;
  const f = n.featured;

  return (
    <>
      <PageHeader {...n.header} />

      {/* COMMUNIQUÉ VEDETTE */}
      <section aria-labelledby="featured-title" className="section pb-0 sm:pb-0">
        <div className="container-page">
          <article className="relative overflow-hidden rounded-3xl bg-brand-blue text-white">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-brand-yellow" />
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue">
                    {n.featuredLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                    <Newspaper className="h-4 w-4" aria-hidden="true" />
                    {n.categories.pressRelease}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {f.date}
                  </span>
                </div>
                <h2 id="featured-title" className="mt-5 text-3xl font-semibold !text-white sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{f.excerpt}</p>
                <p className="mt-6 inline-flex items-start gap-2 rounded-xl border border-dashed border-white/30 px-4 py-3 text-sm text-white/80">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {f.bodyPlaceholder}
                </p>
              </div>
              <div aria-hidden="true" className="hidden h-40 w-40 items-center justify-center rounded-3xl bg-white/5 lg:flex">
                <Newspaper className="h-16 w-16 text-brand-yellow" strokeWidth={1.25} />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* TOUTES LES ACTUALITÉS */}
      <section aria-labelledby="all-news" className="section">
        <div className="container-page">
          <h2 id="all-news" className="text-3xl font-semibold">{n.latestTitle}</h2>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={n.latestTitle}>
            {Object.values(n.categories).map((label) => (
              <li key={label} className="rounded-full border border-surface-line bg-white px-4 py-1.5 text-sm font-medium text-ink-muted">
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {n.items.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
