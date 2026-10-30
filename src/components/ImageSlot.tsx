import { useId } from 'react';
import { Camera } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';

interface ImageSlotProps {
  src: string | null;
  alt: string;
  className?: string;
  tone?: 'light' | 'dark';
}

/**
 * Affiche une photo si `src` est fourni, sinon un emplacement réservé
 * clairement identifié « Photo officielle à venir ».
 * Les photos se configurent dans src/content/images.ts.
 */
export function ImageSlot({ src, alt, className = '', tone = 'light' }: ImageSlotProps) {
  const { t } = useLanguage();
  const patternId = `dots-${useId().replace(/:/g, '')}`;

  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }

  const dark = tone === 'dark';
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${
        dark ? 'bg-white/[0.06]' : 'bg-gradient-to-br from-brand-blue-50 via-surface-cream to-brand-yellow-50'
      } ${className}`}
    >
      {/* Motif géométrique discret */}
      <svg aria-hidden="true" className={`absolute inset-0 h-full w-full ${dark ? 'opacity-[0.08]' : 'opacity-[0.35]'}`}>
        <defs>
          <pattern id={patternId} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill={dark ? '#ffffff' : '#002664'} fillOpacity={dark ? 1 : 0.18} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className={`relative flex flex-col items-center gap-2 text-center ${dark ? 'text-white/70' : 'text-brand-blue/60'}`}>
        <Camera className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
        <span className="px-4 text-xs font-medium uppercase tracking-wider">{t.common.photoPlaceholder}</span>
      </div>
    </div>
  );
}
