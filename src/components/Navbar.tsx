import { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../translations/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Button } from './Button';
import { FlagBar } from './FlagBar';
import { navLinks } from './navLinks';

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-card' : ''}`}>
      <FlagBar className="h-1" />
      <div className="mx-auto flex h-[68px] w-full max-w-[80rem] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav aria-label={t.nav.mainLabel} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map(({ to, key }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-brand-blue after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-brand-yellow'
                        : 'text-ink-muted hover:text-brand-blue'
                    }`
                  }
                >
                  {t.nav[key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Button to="/participer" variant="primary" className="whitespace-nowrap">
            {t.nav.join}
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-blue hover:bg-brand-blue-50"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileMenu id="mobile-menu" open={open} onClose={close} />
    </header>
  );
}
