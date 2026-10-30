# Site Web — La Communauté des Tchadiens de l’Alberta Society (CTAS)

Site Web officiel, bilingue (français / anglais), de **La Communauté des Tchadiens de l’Alberta Society (CTAS)**, organisation communautaire basée à Edmonton, Alberta.

Cette première version est **statique** : pas de backend, de base de données, d’authentification, de CMS ni de paiement. L’architecture est prévue pour accueillir ces fonctionnalités plus tard.

---

## Technologies

| Outil | Rôle |
|---|---|
| [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | Interface et typage |
| [Vite](https://vitejs.dev) | Serveur de développement et build |
| [Tailwind CSS 3](https://tailwindcss.com) | Styles |
| [React Router 6](https://reactrouter.com) | Navigation entre les pages |
| [Lucide React](https://lucide.dev) | Icônes |

Prérequis : **Node.js 18 ou plus récent**.

---

## Installation et lancement

```bash
npm install        # installe les dépendances
npm run dev        # lance le serveur local → http://localhost:5173
npm run build      # crée le build de production dans /dist
npm run preview    # prévisualise le build de production
```

---

## Structure du projet

```
ctas-site/
├── index.html                 # SEO de base, Open Graph, données structurées, polices
├── public/                    # favicon, image Open Graph, robots.txt, _redirects (Netlify)
├── vercel.json                # routage SPA pour Vercel
├── netlify.toml               # build + routage SPA pour Netlify
├── tailwind.config.js         # ← PALETTE DE COULEURS et polices
└── src/
    ├── translations/          # ← TOUS LES TEXTES DU SITE
    │   ├── fr.ts              #   français (langue par défaut)
    │   ├── en.ts              #   anglais
    │   ├── index.ts           #   langue par défaut, types
    │   └── LanguageContext.tsx#   gestion de la langue (FR | EN)
    ├── content/               # ← DONNÉES INDÉPENDANTES DE LA LANGUE
    │   ├── site.ts            #   téléphones, courriel, site Web / Facebook
    │   ├── board.ts           #   conseil d’administration
    │   └── images.ts          #   photos officielles (emplacements réservés)
    ├── hooks/usePageMeta.ts   # titre + meta description par page et par langue
    ├── components/            # composants réutilisables (Navbar, Footer, Hero, Button…)
    └── pages/                 # Accueil, À propos, Communauté, Événements, Actualités, Participer, Contact
```

Adresses des pages : `/`, `/a-propos`, `/communaute`, `/evenements`, `/actualites`, `/participer`, `/contact`.

---

## Bilinguisme

- Le **français** est affiché par défaut à la première visite.
- Le sélecteur **FR | EN** (navigation et menu mobile) change toute l’interface instantanément, sans recharger la page : menus, titres, boutons, contenus, formulaires, messages d’erreur, pied de page, titres d’onglet et meta descriptions.
- Le choix est mémorisé dans le navigateur du visiteur.
- L’attribut `<html lang>` est mis à jour (`fr-CA` / `en-CA`) pour l’accessibilité et le référencement.

### Modifier les traductions

Tous les textes se trouvent dans `src/translations/fr.ts` et `src/translations/en.ts`. Les deux fichiers ont **exactement la même structure**.

1. Repérez la clé à modifier dans `fr.ts` (ex. `home.hero.title`).
2. Modifiez la même clé dans `en.ts`.
3. Si vous **ajoutez** une clé dans `fr.ts`, ajoutez-la aussi dans `en.ts` : sinon `npm run build` affichera une erreur TypeScript indiquant la clé manquante.

Ajouter une troisième langue : créez `src/translations/xx.ts` (typé `Translation`), ajoutez-le dans `translations/index.ts` et dans les options de `components/LanguageSwitcher.tsx`.

---

## Modifier le contenu

| Je veux modifier… | Fichier |
|---|---|
| Un texte, un titre, un bouton | `src/translations/fr.ts` **et** `en.ts` |
| Téléphones, courriel, site Web / Facebook | `src/content/site.ts` |
| Membres du conseil d’administration | `src/content/board.ts` (libellés des rôles : section `roles` des traductions) |
| Photos | `src/content/images.ts` |
| Événements | `events.items` dans `fr.ts` **et** `en.ts` |
| Actualités / communiqué vedette | `news.items` et `news.featured` dans `fr.ts` **et** `en.ts` |

### Informations à venir

Aucune information officielle n’a été inventée. Ce qui n’est pas encore confirmé s’affiche comme « À venir » / « Coming soon » ou « Informations à venir » / « Information coming soon ».

- **Courriel / Facebook** : remplacez `null` par la valeur dans `src/content/site.ts`, et l’affichage se met à jour partout.
- **Communiqué de presse officiel** : remplacez `news.featured` (titre, date, résumé) dans les deux fichiers de traduction.

### Ajouter un événement réel

Dans `fr.ts` (section `events.items`), ajoutez :

```ts
{
  id: 'fete-2027',            // identifiant unique, identique dans en.ts
  demo: false,                // false = véritable événement (retire l’étiquette « démo »)
  title: 'Titre de l’événement',
  date: '15 mai 2027',
  location: 'Edmonton',
  description: 'Description courte.',
},
```

Ajoutez le même élément, traduit, dans `en.ts`. Supprimez les éléments `demo-1`, `demo-2`, `demo-3` quand ils ne sont plus utiles. Les actualités fonctionnent de la même façon (`category` : `pressRelease`, `announcement`, `community` ou `activity`).

### Ajouter des photos officielles

1. Placez les photos dans `public/images/` (ex. `public/images/hero.jpg`).
2. Dans `src/content/images.ts`, remplacez `null` par `'/images/hero.jpg'`.
3. Photos du conseil d’administration : champ `photo` dans `src/content/board.ts`.

En attendant, chaque emplacement affiche un visuel neutre identifié « Photo officielle à venir ».

### Logo

Le monogramme « CT » est provisoire. Pour utiliser le logo officiel, modifiez `src/components/Logo.tsx`, puis remplacez `public/favicon.svg`, `public/favicon.png` et `public/og-image.png`.

---

## Modifier les couleurs

La palette est définie à un seul endroit, dans `tailwind.config.js` (`theme.extend.colors`) :

| Nom | Valeur | Usage |
|---|---|---|
| `brand-blue` | `#002664` | navigation, titres, sections principales, pied de page |
| `brand-yellow` | `#FECB00` | accents, icônes, bouton secondaire sur fond bleu, focus clavier |
| `brand-red` | `#C60C30` | appels à l’action principaux |
| `ink` / `ink-muted` | `#1A1D24` / `#4B5160` | texte |
| `surface-cream` / `surface-gray` | `#FAF8F4` / `#F3F4F6` | fonds de section |

Modifiez une valeur, et elle s’applique à tout le site.

---

## Formulaire de contact

Le formulaire est **statique** : validation côté client (champs obligatoires, format du courriel, longueur du message) avec des messages bilingues, et **aucun envoi réel**. Un avis l’indique clairement aux visiteurs.

Pour le connecter plus tard (Netlify Forms, Formspree, EmailJS ou une API), modifiez la fonction `handleSubmit` dans `src/components/ContactForm.tsx` (voir le commentaire `TODO`).

---

## Déploiement

### GitHub

```bash
git init
git add .
git commit -m "Première version du site CTAS"
git branch -M main
git remote add origin https://github.com/<compte>/ctas-site.git
git push -u origin main
```

### Vercel

1. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project** et importez le dépôt GitHub.
2. Vercel détecte Vite automatiquement (build : `npm run build`, dossier : `dist`).
3. Cliquez sur **Deploy**. `vercel.json` gère déjà le routage des pages.

### Netlify

1. Sur [netlify.com](https://netlify.com), cliquez sur **Add new site → Import an existing project** et choisissez le dépôt.
2. Les réglages sont lus dans `netlify.toml` (build : `npm run build`, dossier : `dist`).
3. Cliquez sur **Deploy**.

Chaque `git push` sur `main` redéploie ensuite le site automatiquement.

**Après la mise en ligne**, remplacez dans `index.html` l’image Open Graph relative (`/og-image.png`) par l’URL complète du domaine (ex. `https://www.ctas.ca/og-image.png`), afin que les aperçus Facebook et WhatsApp s’affichent correctement.

---

## Accessibilité

HTML sémantique, lien « Aller au contenu principal », navigation complète au clavier, focus visible (contour jaune), libellés de formulaire, erreurs annoncées aux lecteurs d’écran, textes alternatifs, contrastes conformes WCAG AA et respect de la préférence « réduire les animations ».
