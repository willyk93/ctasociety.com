import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

interface CTASectionProps {
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export function CTASection({ eyebrow, title, text, primary, secondary }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-blue px-6 py-12 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue-700 blur-2xl" />
          <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1.5 bg-brand-yellow" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <SectionHeading eyebrow={eyebrow} title={title} intro={text} tone="light" />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button to={primary.to} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="outline-light" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
