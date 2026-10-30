import type { Translation } from '../translations';

/** Liste des pages du site — utilisée par la navigation, le menu mobile et le pied de page. */
export const navLinks: { to: string; key: keyof Translation['nav'] }[] = [
  { to: '/', key: 'home' },
  { to: '/a-propos', key: 'about' },
  { to: '/communaute', key: 'community' },
  { to: '/evenements', key: 'events' },
  { to: '/actualites', key: 'news' },
  { to: '/participer', key: 'getInvolved' },
  { to: '/contact', key: 'contact' },
];
