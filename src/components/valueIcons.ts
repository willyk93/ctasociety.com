import { DoorOpen, Drum, Eye, Globe, Handshake, HandHeart, HeartHandshake, Scale, Sprout, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Translation } from '../translations';

/** Icône associée à chaque valeur (clés de `values` dans les traductions). */
export const valueIcons: Record<keyof Translation['values'], LucideIcon> = {
  solidarity: HandHeart,
  respect: Scale,
  transparency: Eye,
  participation: Users,
  openness: Globe,
};

/** Icône associée à chaque priorité / domaine d'engagement. */
export const priorityIcons: Record<keyof Translation['priorities'], LucideIcon> = {
  mutualAid: HeartHandshake,
  newcomers: DoorOpen,
  culture: Drum,
  youth: Sprout,
  partnerships: Handshake,
};
