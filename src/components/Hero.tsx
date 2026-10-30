import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { Button } from './Button';
import { ImageSlot } from './ImageSlot';
import { images } from '../content/images';

export function Hero() {
  const { t } = useLanguage();
  const h = t.home.hero;

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-brand-blue text-white">
      {/* Halo décoratif discret */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-blue-700 opacity-60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-24 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
        <div className="animate-fade-up lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            {h.eyebrow}
          </p>
          <h1 id="hero-title" className="text-4xl font-semibold leading-[1.1] !text-white sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{h.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/communaute" variant="accent" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {h.primaryCta}
            </Button>
            <Button to="/participer" variant="outline-light" size="lg">
              {h.secondaryCta}
            </Button>
          </div>
        </div>

        {/*
          VISUEL PRINCIPAL — emplacements réservés.
          Remplacer par des photos officielles de la communauté via src/content/images.ts
        */}
        <div className="relative hidden h-[26rem] lg:col-span-5 lg:block" aria-hidden="false">
          <div className="absolute right-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <ImageSlot src={images.hero} alt={t.about.who.imageAlt} tone="dark" />
          </div>
          <div className="absolute bottom-0 left-0 h-[46%] w-[52%] overflow-hidden rounded-3xl border-4 border-brand-blue shadow-2xl">
            <ImageSlot src={images.heroSecondary} alt={t.about.who.imageAlt} />
          </div>
          <div aria-hidden="true" className="absolute bottom-[40%] left-[46%] h-16 w-16 rounded-2xl bg-brand-red" />
          <div aria-hidden="true" className="absolute right-[6%] top-[84%] h-3 w-24 rounded-full bg-brand-yellow" />
        </div>
      </div>
    </section>
  );
}
