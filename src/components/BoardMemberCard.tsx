import { useLanguage } from '../translations/LanguageContext';
import type { BoardMember } from '../content/board';

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function BoardMemberCard({ member }: { member: BoardMember }) {
  const { t } = useLanguage();
  return (
    <article className="card flex items-center gap-5 p-5 sm:flex-col sm:p-7 sm:text-center">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
        />
      ) : (
        // Emplacement réservé : aucune photo officielle fournie
        <div
          role="img"
          aria-label={`${member.name} — ${t.about.board.photoAlt}`}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 font-display text-2xl font-semibold text-brand-blue ring-4 ring-white sm:h-24 sm:w-24"
        >
          {initials(member.name)}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-red">{t.roles[member.role]}</p>
        <h3 className="mt-1 break-words font-sans text-lg font-bold text-ink">{member.name}</h3>
      </div>
    </article>
  );
}
