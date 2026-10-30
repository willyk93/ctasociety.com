import { CalendarDays, Megaphone, Newspaper, Sparkles, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import type { Translation } from '../translations';
import { DemoBadge } from './DemoBadge';

export type NewsCategory = keyof Translation['news']['categories'];

export interface NewsItem {
  id: string;
  demo: boolean;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

const categoryIcons: Record<NewsCategory, LucideIcon> = {
  pressRelease: Newspaper,
  announcement: Megaphone,
  community: Users,
  activity: Sparkles,
};

export function NewsCard({ item }: { item: NewsItem }) {
  const { t } = useLanguage();
  const category = item.category as NewsCategory;
  const Icon = categoryIcons[category] ?? Newspaper;

  return (
    <article className="card flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-card-hover">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {t.news.categories[category] ?? item.category}
        </span>
        {item.demo && <DemoBadge />}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-muted">
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        {item.date}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.excerpt}</p>
    </article>
  );
}
