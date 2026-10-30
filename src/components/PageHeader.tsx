import { SectionHeading } from './SectionHeading';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/** En-tête des pages intérieures. */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-surface-cream">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" />
      <div className="container-page relative py-14 sm:py-20">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={subtitle} />
      </div>
    </section>
  );
}
