interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  tone?: 'dark' | 'light';
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
  tone = 'dark',
  id,
}: SectionHeadingProps) {
  const centered = align === 'center';
  const light = tone === 'light';
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
            light ? 'text-brand-yellow' : 'text-brand-red'
          }`}
        >
          <span aria-hidden="true" className={`h-0.5 w-6 rounded ${light ? 'bg-brand-yellow' : 'bg-brand-yellow'}`} />
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`${Tag === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-semibold leading-tight ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/85' : 'text-ink-muted'}`}>{intro}</p>
      )}
    </div>
  );
}
