import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { Button } from '../components/Button';

export default function NotFound() {
  const { t } = useLanguage();
  usePageMeta('notFound');
  return (
    <section className="section">
      <div className="container-page max-w-xl text-center">
        <p className="font-display text-7xl font-bold text-brand-yellow">404</p>
        <h1 className="mt-4 text-3xl font-semibold">{t.notFound.title}</h1>
        <p className="mt-3 text-lg text-ink-muted">{t.notFound.text}</p>
        <div className="mt-8">
          <Button to="/" variant="secondary">{t.common.backHome}</Button>
        </div>
      </div>
    </section>
  );
}
