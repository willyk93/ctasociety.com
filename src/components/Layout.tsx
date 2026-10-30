import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../translations/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  // Retour en haut de page à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
