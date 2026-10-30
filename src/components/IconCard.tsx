import type { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  accent?: 'blue' | 'yellow' | 'red';
  headingLevel?: 'h3' | 'h2';
}

const accents = {
  blue: 'bg-brand-blue-50 text-brand-blue',
  yellow: 'bg-brand-yellow-50 text-brand-blue',
  red: 'bg-brand-red-50 text-brand-red',
};

/** Carte simple icône + titre + texte (valeurs, priorités, domaines d'engagement). */
export function IconCard({ icon: Icon, title, text, accent = 'blue', headingLevel: H = 'h3' }: IconCardProps) {
  return (
    <div className="card h-full p-6 transition-shadow duration-300 hover:shadow-card-hover sm:p-7">
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${accents[accent]}`}>
        <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <H className="mt-5 font-sans text-lg font-bold text-ink">{title}</H>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
