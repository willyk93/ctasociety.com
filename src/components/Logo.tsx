import { Link } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';

/**
 * Logo provisoire (monogramme). Remplacer par le logo officiel de CTAS
 * lorsqu'il sera disponible : placer le fichier dans /public et
 * remplacer le bloc <span> du monogramme par une balise <img>.
 */
export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const { t } = useLanguage();
  const light = tone === 'light';
  return (
    <Link to="/" className="group flex items-center gap-3 rounded-lg" aria-label={`${t.org.shortName} — ${t.nav.home}`}>
      <span
        aria-hidden="true"
        className={`relative flex h-11 w-11 shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl ${
          light ? 'bg-white text-brand-blue' : 'bg-brand-blue text-white'
        }`}
      >
        <span className="font-display text-lg font-bold leading-none">CT</span>
        <span className="absolute bottom-1.5 flex h-[3px] w-6">
          <span className={`flex-1 ${light ? 'bg-brand-blue' : 'bg-white'}`} />
          <span className="flex-1 bg-brand-yellow" />
          <span className="flex-1 bg-brand-red" />
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-xl font-bold ${light ? 'text-white' : 'text-brand-blue'}`}>
          {t.org.shortName}
        </span>
        <span className={`text-[11px] font-medium ${light ? 'text-white/75' : 'text-ink-muted'}`}>{t.org.tagline}</span>
      </span>
    </Link>
  );
}
