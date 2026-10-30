import { fr } from './fr';
import { en } from './en';
import type { Translation } from './fr';

export type Lang = 'fr' | 'en';

/** Langue affichée lors de la première visite */
export const DEFAULT_LANG: Lang = 'fr';

export const translations: Record<Lang, Translation> = { fr, en };

export type { Translation };
