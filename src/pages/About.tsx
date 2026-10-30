import { Check } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { IconCard } from '../components/IconCard';
import { BoardMemberCard } from '../components/BoardMemberCard';
import { ImageSlot } from '../components/ImageSlot';
import { CTASection } from '../components/CTASection';
import { valueIcons } from '../components/valueIcons';
import { boardMembers } from '../content/board';
import { images } from '../content/images';

export default function About() {
  const { t } = useLanguage();
  usePageMeta('about');
  const a = t.about;
  const valueKeys = Object.keys(t.values) as (keyof typeof t.values)[];
  const accents = ['blue', 'yellow', 'red'] as const;

  return (
    <>
      <PageHeader {...a.header} />

      {/* QUI SOMMES-NOUS */}
      <section aria-labelledby="who-title" className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="who-title" className="text-3xl font-semibold sm:text-4xl">{a.who.title}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
              {a.who.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-surface-line shadow-card">
            <ImageSlot src={images.about} alt={a.who.imageAlt} />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section aria-labelledby="about-mission" className="bg-brand-blue py-16 sm:py-20">
        <div className="container-page max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">{a.missionTitle}</p>
          <h2 id="about-mission" className="sr-only">{a.missionTitle}</h2>
          <p className="mt-5 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">{t.mission.text}</p>
        </div>
      </section>

      {/* VALEURS */}
      <section aria-labelledby="about-values" className="section">
        <div className="container-page">
          <SectionHeading id="about-values" eyebrow={t.home.values.eyebrow} title={a.valuesTitle} intro={a.valuesIntro} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valueKeys.map((key, i) => (
              <IconCard key={key} icon={valueIcons[key]} title={t.values[key].title} text={t.values[key].text} accent={accents[i % 3]} />
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section aria-labelledby="commitment-title" className="section bg-surface-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading id="commitment-title" eyebrow={a.commitment.eyebrow} title={a.commitment.title} intro={a.commitment.text} />
          <ul className="grid gap-3 sm:grid-cols-2">
            {a.commitment.partners.map((partner) => (
              <li key={partner} className="flex items-start gap-3 rounded-2xl border border-surface-line bg-white p-4 text-[15px] font-medium text-ink">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-blue">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                </span>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONSEIL D'ADMINISTRATION */}
      <section aria-labelledby="board-title" className="section">
        <div className="container-page">
          <SectionHeading id="board-title" align="center" eyebrow={a.board.eyebrow} title={a.board.title} intro={a.board.intro} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((m) => (
              <BoardMemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={t.cta.join.eyebrow}
        title={t.cta.join.title}
        text={t.cta.join.text}
        primary={{ label: t.cta.join.primary, to: '/participer' }}
        secondary={{ label: t.cta.join.secondary, to: '/contact' }}
      />
    </>
  );
}
