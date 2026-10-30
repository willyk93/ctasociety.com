import { useId } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import type { Lang } from '../translations';

/* Drapeaux en SVG (les émojis 🇫🇷 🇬🇧 ne s'affichent pas sous Windows) */
function FlagFR() {
  return (
    <svg viewBox="0 0 3 2" className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

function FlagGB() {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 60 30" className="h-3.5 w-5 rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
      <clipPath id={`s${id}`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`t${id}`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#s${id})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#t${id})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const options: { code: Lang; label: string; full: string; Flag: () => JSX.Element }[] = [
  { code: 'fr', label: 'FR', full: 'Français', Flag: FlagFR },
  { code: 'en', label: 'EN', full: 'English', Flag: FlagGB },
];

export function LanguageSwitcher({ showFullName = false }: { showFullName?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.nav.languageLabel} className="inline-flex items-center rounded-full border border-surface-line bg-surface-gray p-1">
      {options.map(({ code, label, full, Flag }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={full}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              active ? 'bg-white text-brand-blue shadow-sm' : 'text-ink-muted hover:text-brand-blue'
            }`}
          >
            <Flag />
            <span>{showFullName ? full : label}</span>
          </button>
        );
      })}
    </div>
  );
}
