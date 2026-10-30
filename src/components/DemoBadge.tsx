import { FlaskConical } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';

/** Étiquette indiquant un contenu de démonstration temporaire. */
export function DemoBadge() {
  const { t } = useLanguage();
  return (
    <span className="placeholder-badge">
      <FlaskConical className="h-3 w-3" aria-hidden="true" />
      {t.common.demoContent}
    </span>
  );
}
