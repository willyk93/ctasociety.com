import { useEffect } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import type { Translation } from '../translations';

type PageKey = keyof Translation['meta']['pages'];

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Met à jour le titre, la meta description et l'Open Graph selon la page et la langue. */
export function usePageMeta(page: PageKey) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const { title, description } = t.meta.pages[page];
    const fullTitle = page === 'home' ? t.meta.siteName : `${title} | CTAS`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', lang === 'fr' ? 'fr_CA' : 'en_CA');
    setMeta(
      'meta[property="og:locale:alternate"]',
      'property',
      'og:locale:alternate',
      lang === 'fr' ? 'en_CA' : 'fr_CA',
    );
  }, [t, lang, page]);
}
