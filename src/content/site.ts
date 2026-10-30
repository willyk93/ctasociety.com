/**
 * Coordonnées officielles de CTAS (indépendantes de la langue).
 * Mettre `null` tant qu'une information n'est pas confirmée :
 * le site affichera automatiquement « À venir » / « Coming soon ».
 */
export const siteContact = {
  phones: ['780-902-7407', '780-292-6397'],
  email: null as string | null, // ex. : 'info@exemple.org' — À VENIR
  website: null as string | null, // ex. : 'https://www.facebook.com/...' — À VENIR
  city: 'Edmonton',
  province: 'Alberta',
  country: 'Canada',
};

/** Transforme « 780-902-7407 » en lien tel: */
export function toTelHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}
