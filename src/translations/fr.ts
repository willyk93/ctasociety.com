/**
 * ─────────────────────────────────────────────────────────────
 *  TEXTES FRANÇAIS — langue par défaut du site
 * ─────────────────────────────────────────────────────────────
 *  Tout le texte visible du site (navigation, pages, formulaires,
 *  messages d'erreur, pied de page, métadonnées SEO) se trouve ici.
 *
 *  Le fichier anglais (en.ts) DOIT avoir exactement la même structure :
 *  TypeScript signalera toute clé manquante ou en trop.
 *
 *  RÈGLE : n'inventez aucune information officielle. Si une information
 *  n'est pas encore confirmée, utilisez `common.comingSoon`.
 * ─────────────────────────────────────────────────────────────
 */
export const fr = {
  meta: {
    siteName: 'CTAS — La Communauté des Tchadiens de l’Alberta Society',
    defaultDescription:
      'La Communauté des Tchadiens de l’Alberta Society (CTAS) contribue au bien-être, à l’intégration, à la solidarité et à l’épanouissement de la communauté tchadienne en Alberta.',
    pages: {
      home: {
        title: 'Accueil',
        description:
          'CTAS, une communauté tchadienne forte, solidaire et engagée en Alberta. Découvrez notre mission, nos valeurs et nos activités.',
      },
      about: {
        title: 'À propos',
        description:
          'Qui sommes-nous ? Découvrez la mission, les valeurs et le conseil d’administration de La Communauté des Tchadiens de l’Alberta Society.',
      },
      community: {
        title: 'Communauté',
        description:
          'Entraide, accueil des nouveaux arrivants, culture tchadienne, transmission aux jeunes et collaboration : nos domaines d’engagement.',
      },
      events: {
        title: 'Événements',
        description: 'Les événements et rencontres de la communauté tchadienne en Alberta.',
      },
      news: {
        title: 'Actualités',
        description: 'Communiqués, annonces et nouvelles de La Communauté des Tchadiens de l’Alberta Society.',
      },
      getInvolved: {
        title: 'Participer',
        description:
          'Devenir membre, faire du bénévolat, proposer un partenariat ou soutenir CTAS : découvrez comment vous impliquer.',
      },
      contact: {
        title: 'Contact',
        description: 'Communiquez avec La Communauté des Tchadiens de l’Alberta Society à Edmonton, Alberta.',
      },
      notFound: {
        title: 'Page introuvable',
        description: 'La page demandée est introuvable.',
      },
    },
  },

  common: {
    comingSoon: 'À venir',
    infoComingSoon: 'Informations à venir',
    dateTbc: 'Date à confirmer',
    locationTbc: 'Lieu à confirmer',
    demoContent: 'Contenu de démonstration',
    photoPlaceholder: 'Photo officielle à venir',
    learnMore: 'En savoir plus',
    readMore: 'Lire la suite',
    seeAll: 'Tout voir',
    contactUs: 'Nous écrire',
    skipToContent: 'Aller au contenu principal',
    backHome: 'Retour à l’accueil',
  },

  nav: {
    home: 'Accueil',
    about: 'À propos',
    community: 'Communauté',
    events: 'Événements',
    news: 'Actualités',
    getInvolved: 'Participer',
    contact: 'Contact',
    join: 'Nous rejoindre',
    mainLabel: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    languageLabel: 'Choisir la langue',
    switchTo: 'Passer en anglais',
  },

  org: {
    name: 'La Communauté des Tchadiens de l’Alberta Society',
    shortName: 'CTAS',
    tagline: 'Communauté des Tchadiens de l’Alberta',
    location: 'Edmonton, Alberta, Canada',
  },

  values: {
    solidarity: {
      title: 'Solidarité',
      text: 'Être présents les uns pour les autres, dans les moments heureux comme dans les épreuves.',
    },
    respect: {
      title: 'Respect',
      text: 'Accueillir chaque personne avec dignité, dans la diversité de ses origines et de ses parcours.',
    },
    transparency: {
      title: 'Transparence',
      text: 'Agir de manière claire et ouverte, pour bâtir une relation de confiance.',
    },
    participation: {
      title: 'Participation',
      text: 'Donner à chacun la possibilité de contribuer à la vie et aux projets de la communauté.',
    },
    openness: {
      title: 'Ouverture',
      text: 'Tisser des liens avec la société albertaine et avec les autres communautés.',
    },
  },

  mission: {
    eyebrow: 'Notre mission',
    title: 'Contribuer au bien-être et à l’épanouissement de la communauté tchadienne en Alberta',
    text: 'CTAS a pour mission de contribuer au bien-être, à l’intégration, à la solidarité et à l’épanouissement de la communauté tchadienne en Alberta, tout en favorisant son ouverture et sa participation à la société albertaine.',
  },

  priorities: {
    mutualAid: {
      title: 'Entraide',
      text: 'Favoriser la solidarité et le soutien mutuel entre les membres de la communauté.',
    },
    newcomers: {
      title: 'Accueil et intégration',
      text: 'Soutenir l’accueil et l’intégration des nouveaux arrivants tchadiens en Alberta.',
    },
    culture: {
      title: 'Culture et traditions',
      text: 'Valoriser la culture et les traditions tchadiennes et les faire rayonner.',
    },
    youth: {
      title: 'Transmission aux jeunes',
      text: 'Favoriser la transmission de notre héritage culturel auprès des jeunes générations.',
    },
    partnerships: {
      title: 'Collaboration',
      text: 'Développer des liens avec les organismes et partenaires de la société albertaine.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Edmonton · Alberta',
      title: 'Une communauté tchadienne forte, solidaire et engagée en Alberta',
      subtitle:
        'La Communauté des Tchadiens de l’Alberta Society œuvre pour l’entraide, l’intégration et le rayonnement de la culture tchadienne, en lien étroit avec la société albertaine.',
      primaryCta: 'Découvrir notre communauté',
      secondaryCta: 'Nous rejoindre',
    },
    values: {
      eyebrow: 'Nos valeurs',
      title: 'Ce qui nous rassemble',
      intro: 'Cinq valeurs guident l’action de l’association et la vie de notre communauté.',
    },
    priorities: {
      eyebrow: 'Nos priorités',
      title: 'Là où nous voulons agir',
      intro: 'Les grandes orientations qui structurent l’engagement de CTAS en Alberta.',
    },
    events: {
      eyebrow: 'Événements',
      title: 'Prochains rendez-vous',
      intro: 'Le calendrier des activités de l’association sera publié prochainement.',
      cta: 'Voir tous les événements',
    },
    news: {
      eyebrow: 'Actualités',
      title: 'Dernières nouvelles',
      intro: 'Communiqués, annonces et nouvelles de la communauté.',
      cta: 'Voir toutes les actualités',
    },
  },

  cta: {
    collaboration: {
      eyebrow: 'Collaborer avec nous',
      title: 'Construisons ensemble des ponts en Alberta',
      text: 'CTAS souhaite développer des liens avec les associations africaines, les organismes francophones, les organismes d’accueil et d’établissement, les organisations communautaires, les institutions et d’autres partenaires en Alberta.',
      primary: 'Proposer une collaboration',
      secondary: 'Participer',
    },
    join: {
      eyebrow: 'Rejoignez-nous',
      title: 'La communauté se construit avec vous',
      text: 'Que vous soyez arrivé récemment ou installé depuis longtemps en Alberta, il y a une place pour vous au sein de CTAS.',
      primary: 'Comment participer',
      secondary: 'Nous contacter',
    },
  },

  about: {
    header: {
      eyebrow: 'À propos',
      title: 'Qui sommes-nous ?',
      subtitle: 'Une organisation communautaire au service de la communauté tchadienne d’Edmonton et de l’Alberta.',
    },
    who: {
      title: 'Une association enracinée à Edmonton',
      paragraphs: [
        'La Communauté des Tchadiens de l’Alberta Society (CTAS) est une organisation communautaire basée à Edmonton, en Alberta.',
        'Elle rassemble les membres de la communauté tchadienne autour de valeurs communes et s’engage à favoriser l’entraide, à soutenir l’accueil et l’intégration des nouveaux arrivants, ainsi qu’à valoriser la culture et les traditions tchadiennes auprès des jeunes générations.',
      ],
      imageAlt: 'Emplacement réservé pour une photo officielle de la communauté',
    },
    missionTitle: 'Notre mission',
    valuesTitle: 'Nos valeurs',
    valuesIntro: 'Solidarité, respect, transparence, participation et ouverture : des valeurs que nous voulons vivre au quotidien.',
    commitment: {
      eyebrow: 'Notre engagement',
      title: 'Ouverts sur la société albertaine',
      text: 'CTAS souhaite développer des liens avec l’ensemble des acteurs qui contribuent à la vie communautaire en Alberta :',
      partners: [
        'Associations africaines',
        'Organismes francophones',
        'Organismes d’accueil et d’établissement',
        'Organisations communautaires',
        'Institutions',
        'Autres partenaires en Alberta',
      ],
    },
    board: {
      eyebrow: 'Gouvernance',
      title: 'Conseil d’administration',
      intro: 'Les membres du conseil d’administration de CTAS.',
      photoAlt: 'Photo à venir',
    },
  },

  /** Libellés des rôles du conseil d'administration (clés utilisées dans src/content/board.ts) */
  roles: {
    president: 'Présidente',
    secretary: 'Secrétaire',
    treasurer: 'Trésorière',
    assistantTreasurer: 'Trésorière adjointe',
    advisor: 'Conseiller',
  },

  community: {
    header: {
      eyebrow: 'Communauté',
      title: 'Nos domaines d’engagement',
      subtitle: 'Les axes autour desquels CTAS souhaite rassembler et mobiliser la communauté tchadienne en Alberta.',
    },
    areas: {
      mutualAid: {
        title: 'Entraide',
        text: 'Favoriser la solidarité entre les membres de la communauté, afin que personne ne se sente seul face aux défis de la vie en Alberta.',
      },
      newcomers: {
        title: 'Accueil et intégration des nouveaux arrivants',
        text: 'Soutenir l’accueil des Tchadiennes et des Tchadiens qui s’installent en Alberta et faciliter leur intégration dans leur nouveau milieu de vie.',
      },
      culture: {
        title: 'Culture et traditions tchadiennes',
        text: 'Valoriser la richesse de la culture et des traditions tchadiennes et la partager avec la société albertaine.',
      },
      youth: {
        title: 'Transmission aux jeunes générations',
        text: 'Favoriser la transmission de notre héritage culturel aux jeunes, pour qu’ils grandissent fiers de leurs racines.',
      },
      collaboration: {
        title: 'Collaboration communautaire',
        text: 'Développer des liens avec les associations africaines, les organismes francophones, les organismes d’établissement et les autres acteurs communautaires.',
      },
    },
    note: 'Les activités et initiatives concrètes liées à chacun de ces domaines seront présentées ici au fur et à mesure de leur annonce officielle.',
  },

  events: {
    header: {
      eyebrow: 'Événements',
      title: 'Événements et rencontres',
      subtitle: 'Retrouvez ici les activités, rencontres et célébrations organisées par CTAS.',
    },
    upcoming: 'À venir',
    past: 'Événements passés',
    noPast: 'Aucun événement passé pour le moment.',
    demoNotice:
      'Les cartes ci-dessous sont des exemples temporaires. Les véritables événements de CTAS seront publiés dès qu’ils seront confirmés.',
    dateLabel: 'Date',
    locationLabel: 'Lieu',
    /**
     * Liste des événements. Pour ajouter un événement réel, ajoutez un objet
     * ici ET dans en.ts (même `id`). Retirez `demo: true` pour un vrai événement.
     */
    items: [
      {
        id: 'demo-1',
        demo: true,
        title: 'Événement à venir',
        date: 'Date à confirmer',
        location: 'Lieu à confirmer',
        description: 'Informations à venir.',
      },
      {
        id: 'demo-2',
        demo: true,
        title: 'Événement à venir',
        date: 'Date à confirmer',
        location: 'Lieu à confirmer',
        description: 'Informations à venir.',
      },
      {
        id: 'demo-3',
        demo: true,
        title: 'Événement à venir',
        date: 'Date à confirmer',
        location: 'Lieu à confirmer',
        description: 'Informations à venir.',
      },
    ],
  },

  news: {
    header: {
      eyebrow: 'Actualités',
      title: 'Actualités de la communauté',
      subtitle: 'Communiqués, annonces, nouvelles de la communauté et activités de CTAS.',
    },
    featuredLabel: 'À la une',
    categories: {
      pressRelease: 'Communiqué',
      announcement: 'Annonce',
      community: 'Nouvelles de la communauté',
      activity: 'Activités',
    },
    /** Communiqué de presse officiel — contenu vedette */
    featured: {
      category: 'pressRelease',
      title: 'Communiqué de presse officiel',
      date: 'Date à confirmer',
      // TODO : remplacer ce résumé par le texte du communiqué de presse officiel de CTAS.
      excerpt:
        'La Communauté des Tchadiens de l’Alberta Society (CTAS), organisation communautaire basée à Edmonton, a pour mission de contribuer au bien-être, à l’intégration, à la solidarité et à l’épanouissement de la communauté tchadienne en Alberta.',
      bodyPlaceholder: 'Le texte intégral du communiqué de presse officiel sera publié ici.',
    },
    latestTitle: 'Toutes les actualités',
    /**
     * Liste des actualités. Même principe que les événements :
     * ajoutez l'élément ici ET dans en.ts avec le même `id`.
     */
    items: [
      { id: 'n-1', demo: true, category: 'announcement', title: 'Annonce à venir', date: 'Date à confirmer', excerpt: 'Informations à venir.' },
      { id: 'n-2', demo: true, category: 'community', title: 'Nouvelle de la communauté à venir', date: 'Date à confirmer', excerpt: 'Informations à venir.' },
      { id: 'n-3', demo: true, category: 'activity', title: 'Activité à venir', date: 'Date à confirmer', excerpt: 'Informations à venir.' },
    ],
  },

  getInvolved: {
    header: {
      eyebrow: 'Participer',
      title: 'Faites partie de l’aventure',
      subtitle: 'Il existe plusieurs façons de contribuer à la vie de la communauté tchadienne en Alberta.',
    },
    sections: {
      membership: {
        title: 'Devenir membre',
        text: 'Rejoignez l’association et participez pleinement à la vie de la communauté.',
        details: 'Conditions et modalités d’adhésion : informations à venir.',
        cta: 'Manifester mon intérêt',
      },
      volunteer: {
        title: 'Faire du bénévolat',
        text: 'Offrez un peu de votre temps et de vos compétences pour soutenir les activités de CTAS.',
        details: 'Possibilités de bénévolat : informations à venir.',
        cta: 'Je souhaite m’impliquer',
      },
      partnerships: {
        title: 'Partenariats',
        text: 'Organismes, institutions et associations : collaborons au service de la communauté en Alberta.',
        details: 'Modalités de partenariat : informations à venir.',
        cta: 'Proposer un partenariat',
      },
      support: {
        title: 'Soutenir l’association',
        text: 'Contribuez au développement des initiatives de l’association.',
        details: 'Façons de soutenir CTAS : informations à venir.',
        cta: 'Nous contacter',
      },
    },
    note: 'Pour toute question en attendant la publication de ces informations, communiquez avec nous par téléphone ou au moyen du formulaire de contact.',
  },

  contact: {
    header: {
      eyebrow: 'Contact',
      title: 'Communiquer avec nous',
      subtitle: 'Une question, une idée, une proposition de collaboration ? Nous serons heureux d’échanger avec vous.',
    },
    infoTitle: 'Coordonnées',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'Courriel',
    webLabel: 'Site Web / Facebook',
    formTitle: 'Envoyer un message',
    form: {
      name: 'Nom',
      email: 'Courriel',
      subject: 'Sujet',
      message: 'Message',
      required: 'obligatoire',
      submit: 'Envoyer',
      notice:
        'Ce formulaire sera connecté ultérieurement au système de courriel de l’association. Pour le moment, aucun message n’est réellement transmis.',
      success:
        'Merci ! Votre message est valide, mais l’envoi en ligne n’est pas encore activé. En attendant, veuillez communiquer avec nous par téléphone.',
      errors: {
        nameRequired: 'Veuillez indiquer votre nom.',
        emailRequired: 'Veuillez indiquer votre adresse courriel.',
        emailInvalid: 'Veuillez indiquer une adresse courriel valide (ex. : nom@exemple.com).',
        subjectRequired: 'Veuillez indiquer le sujet de votre message.',
        messageRequired: 'Veuillez écrire votre message.',
        messageTooShort: 'Votre message doit contenir au moins 10 caractères.',
        summary: 'Veuillez corriger les champs indiqués ci-dessous.',
      },
    },
  },

  footer: {
    about: 'Organisation communautaire au service de la communauté tchadienne en Alberta.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    followTitle: 'Nous suivre',
    email: 'Courriel : à venir',
    social: 'Réseaux sociaux : à venir',
    rights: 'Tous droits réservés.',
    madeIn: 'Edmonton, Alberta, Canada',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée.',
  },
};

export type Translation = typeof fr;
