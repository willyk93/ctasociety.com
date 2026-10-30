import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './Button';
import { navLinks } from './navLinks';
import { siteContact, toTelHref } from '../content/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  id: string;
}

export function MobileMenu({ open, onClose, id }: MobileMenuProps) {
  const { t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  // Fermeture avec Échap + blocage du défilement de la page
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div id={id} className="fixed inset-x-0 bottom-0 top-[72px] z-40 xl:hidden">
      <button type="button" aria-label={t.nav.closeMenu} tabIndex={-1} className="absolute inset-0 bg-brand-blue/30 backdrop-blur-sm" onClick={onClose} />
      <div ref={panelRef} className="relative max-h-full overflow-y-auto border-t border-surface-line bg-white px-5 pb-8 pt-4 shadow-xl animate-fade-up">
        <nav aria-label={t.nav.mainLabel}>
          <ul className="flex flex-col">
            {navLinks.map(({ to, key }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-surface-line py-4 text-lg font-semibold ${
                      isActive ? 'text-brand-red' : 'text-brand-blue'
                    }`
                  }
                >
                  {t.nav[key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-5">
          <LanguageSwitcher showFullName />
          <Button to="/participer" variant="primary" size="lg" className="w-full">
            {t.nav.join}
          </Button>
          <a href={toTelHref(siteContact.phones[0])} className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
            <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
            {siteContact.phones[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
