import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { Logo } from './Logo';
import { FlagBar } from './FlagBar';
import { navLinks } from './navLinks';
import { siteContact, toTelHref } from '../content/site';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white">
      <FlagBar className="h-1" />
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{t.footer.about}</p>
          <p className="mt-4 text-sm font-medium text-white/90">{t.org.name}</p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider !text-brand-yellow">{t.footer.navTitle}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:grid-cols-1">
            {navLinks.map(({ to, key }) => (
              <li key={to}>
                <Link to={to} className="text-white/80 transition-colors hover:text-white hover:underline underline-offset-4">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider !text-brand-yellow">{t.footer.contactTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
              <span>{t.org.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
              <span className="flex flex-col">
                {siteContact.phones.map((p) => (
                  <a key={p} href={toTelHref(p)} className="hover:text-white hover:underline underline-offset-4">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
              {siteContact.email ? (
                <a href={`mailto:${siteContact.email}`} className="hover:text-white hover:underline">
                  {siteContact.email}
                </a>
              ) : (
                <span>{t.footer.email}</span>
              )}
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
              <span>{t.footer.social}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.org.name}. {t.footer.rights}
          </p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
