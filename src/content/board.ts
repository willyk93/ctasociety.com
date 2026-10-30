import type { Translation } from '../translations';

/**
 * Conseil d'administration de CTAS.
 * `role` renvoie aux libellés traduits dans fr.ts / en.ts (section `roles`).
 * `photo` : chemin vers une photo officielle (ex. '/images/board/presidente.jpg'),
 *           laisser `null` tant qu'aucune photo officielle n'est fournie.
 * Aucune biographie n'est ajoutée tant qu'elle n'a pas été fournie par l'association.
 */
export interface BoardMember {
  name: string;
  role: keyof Translation['roles'];
  photo: string | null;
}

export const boardMembers: BoardMember[] = [
  { name: 'Aurélie Noudjihoundalar', role: 'president', photo: null },
  { name: 'Derping Koussigué', role: 'secretary', photo: null },
  { name: 'Namayo Gondje', role: 'treasurer', photo: null },
  { name: 'Denebeye Emily Lodoum', role: 'assistantTreasurer', photo: null },
  { name: 'Ngakoutou Georges', role: 'advisor', photo: null },
  { name: 'Nadjibe Djetoude', role: 'advisor', photo: null },
];
