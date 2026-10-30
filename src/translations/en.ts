/**
 * ─────────────────────────────────────────────────────────────
 *  ENGLISH TEXT
 * ─────────────────────────────────────────────────────────────
 *  Must mirror the structure of fr.ts exactly — TypeScript will
 *  flag any missing or extra key.
 *
 *  The association's official name stays in French.
 *  RULE: never invent official information. Use `common.comingSoon`
 *  when something has not been confirmed yet.
 * ─────────────────────────────────────────────────────────────
 */
import type { Translation } from './fr';

export const en: Translation = {
  meta: {
    siteName: 'CTAS — La Communauté des Tchadiens de l’Alberta Society',
    defaultDescription:
      'La Communauté des Tchadiens de l’Alberta Society (CTAS) supports the well-being, integration, solidarity and growth of the Chadian community in Alberta.',
    pages: {
      home: {
        title: 'Home',
        description:
          'CTAS: a strong, caring and engaged Chadian community in Alberta. Learn about our mission, our values and our activities.',
      },
      about: {
        title: 'About Us',
        description:
          'Who we are: the mission, values and Board of Directors of La Communauté des Tchadiens de l’Alberta Society.',
      },
      community: {
        title: 'Community',
        description:
          'Mutual support, welcoming newcomers, Chadian culture, passing on our heritage to young people, and community partnerships: our areas of focus.',
      },
      events: {
        title: 'Events',
        description: 'Events and gatherings of the Chadian community in Alberta.',
      },
      news: {
        title: 'News',
        description: 'Press releases, announcements and community news from La Communauté des Tchadiens de l’Alberta Society.',
      },
      getInvolved: {
        title: 'Get Involved',
        description:
          'Become a member, volunteer, partner with us or support CTAS — find out how you can get involved.',
      },
      contact: {
        title: 'Contact',
        description: 'Get in touch with La Communauté des Tchadiens de l’Alberta Society in Edmonton, Alberta.',
      },
      notFound: {
        title: 'Page not found',
        description: 'The page you requested could not be found.',
      },
    },
  },

  common: {
    comingSoon: 'Coming soon',
    infoComingSoon: 'Information coming soon',
    dateTbc: 'Date to be confirmed',
    locationTbc: 'Location to be confirmed',
    demoContent: 'Sample content',
    photoPlaceholder: 'Official photo coming soon',
    learnMore: 'Learn more',
    readMore: 'Read more',
    seeAll: 'See all',
    contactUs: 'Write to us',
    skipToContent: 'Skip to main content',
    backHome: 'Back to home',
  },

  nav: {
    home: 'Home',
    about: 'About Us',
    community: 'Community',
    events: 'Events',
    news: 'News',
    getInvolved: 'Get Involved',
    contact: 'Contact',
    join: 'Join us',
    mainLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Choose language',
    switchTo: 'Switch to French',
  },

  org: {
    name: 'La Communauté des Tchadiens de l’Alberta Society',
    shortName: 'CTAS',
    tagline: 'Chadian Community of Alberta',
    location: 'Edmonton, Alberta, Canada',
  },

  values: {
    solidarity: {
      title: 'Solidarity',
      text: 'Standing by one another — in times of celebration and in times of hardship.',
    },
    respect: {
      title: 'Respect',
      text: 'Welcoming everyone with dignity, whatever their background or journey.',
    },
    transparency: {
      title: 'Transparency',
      text: 'Acting clearly and openly to build lasting trust.',
    },
    participation: {
      title: 'Participation',
      text: 'Making sure everyone has the chance to contribute to community life and projects.',
    },
    openness: {
      title: 'Openness',
      text: 'Building bridges with Alberta society and with other communities.',
    },
  },

  mission: {
    eyebrow: 'Our mission',
    title: 'Supporting the well-being and growth of the Chadian community in Alberta',
    text: 'CTAS’s mission is to support the well-being, integration, solidarity and growth of the Chadian community in Alberta, while encouraging its openness to and active participation in Alberta society.',
  },

  priorities: {
    mutualAid: {
      title: 'Mutual support',
      text: 'Fostering solidarity and support among members of the community.',
    },
    newcomers: {
      title: 'Welcoming newcomers',
      text: 'Helping Chadian newcomers settle in and feel at home in Alberta.',
    },
    culture: {
      title: 'Culture & traditions',
      text: 'Celebrating Chadian culture and traditions and sharing them widely.',
    },
    youth: {
      title: 'The next generation',
      text: 'Passing our cultural heritage on to young people.',
    },
    partnerships: {
      title: 'Partnerships',
      text: 'Building relationships with organizations and partners across Alberta.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Edmonton · Alberta',
      title: 'A strong, caring and engaged Chadian community in Alberta',
      subtitle:
        'La Communauté des Tchadiens de l’Alberta Society works to strengthen mutual support, help newcomers settle in and share the richness of Chadian culture — hand in hand with Alberta society.',
      primaryCta: 'Discover our community',
      secondaryCta: 'Join us',
    },
    values: {
      eyebrow: 'Our values',
      title: 'What brings us together',
      intro: 'Five values guide the work of the association and the life of our community.',
    },
    priorities: {
      eyebrow: 'Our priorities',
      title: 'Where we want to make a difference',
      intro: 'The main directions that shape CTAS’s work in Alberta.',
    },
    events: {
      eyebrow: 'Events',
      title: 'Upcoming events',
      intro: 'The association’s calendar of activities will be published soon.',
      cta: 'See all events',
    },
    news: {
      eyebrow: 'News',
      title: 'Latest news',
      intro: 'Press releases, announcements and community news.',
      cta: 'See all news',
    },
  },

  cta: {
    collaboration: {
      eyebrow: 'Work with us',
      title: 'Let’s build bridges across Alberta, together',
      text: 'CTAS is looking to build relationships with African associations, francophone organizations, settlement and newcomer services, community organizations, institutions and other partners across Alberta.',
      primary: 'Propose a partnership',
      secondary: 'Get involved',
    },
    join: {
      eyebrow: 'Join us',
      title: 'Our community grows with you',
      text: 'Whether you have just arrived or have called Alberta home for years, there is a place for you at CTAS.',
      primary: 'Ways to get involved',
      secondary: 'Contact us',
    },
  },

  about: {
    header: {
      eyebrow: 'About Us',
      title: 'Who we are',
      subtitle: 'A community organization serving the Chadian community in Edmonton and across Alberta.',
    },
    who: {
      title: 'An association rooted in Edmonton',
      paragraphs: [
        'La Communauté des Tchadiens de l’Alberta Society (CTAS) is a community organization based in Edmonton, Alberta.',
        'It brings members of the Chadian community together around shared values, with a commitment to mutual support, to welcoming and integrating newcomers, and to celebrating Chadian culture and traditions and passing them on to younger generations.',
      ],
      imageAlt: 'Placeholder for an official community photo',
    },
    missionTitle: 'Our mission',
    valuesTitle: 'Our values',
    valuesIntro: 'Solidarity, respect, transparency, participation and openness — values we strive to live by every day.',
    commitment: {
      eyebrow: 'Our commitment',
      title: 'Open to Alberta society',
      text: 'CTAS aims to build relationships with everyone who contributes to community life in Alberta:',
      partners: [
        'African associations',
        'Francophone organizations',
        'Settlement and newcomer services',
        'Community organizations',
        'Institutions',
        'Other partners across Alberta',
      ],
    },
    board: {
      eyebrow: 'Governance',
      title: 'Board of Directors',
      intro: 'Members of the CTAS Board of Directors.',
      photoAlt: 'Photo coming soon',
    },
  },

  roles: {
    president: 'President',
    secretary: 'Secretary',
    treasurer: 'Treasurer',
    assistantTreasurer: 'Assistant Treasurer',
    advisor: 'Advisor',
  },

  community: {
    header: {
      eyebrow: 'Community',
      title: 'Our areas of focus',
      subtitle: 'The areas around which CTAS seeks to bring together and mobilize the Chadian community in Alberta.',
    },
    areas: {
      mutualAid: {
        title: 'Mutual support',
        text: 'Fostering solidarity among community members, so that no one has to face the challenges of life in Alberta alone.',
      },
      newcomers: {
        title: 'Welcoming and integrating newcomers',
        text: 'Supporting Chadians who are settling in Alberta and helping them find their footing in their new home.',
      },
      culture: {
        title: 'Chadian culture and traditions',
        text: 'Celebrating the richness of Chadian culture and traditions and sharing it with Alberta society.',
      },
      youth: {
        title: 'Passing it on to the next generation',
        text: 'Passing our cultural heritage on to young people, so they grow up proud of their roots.',
      },
      collaboration: {
        title: 'Community partnerships',
        text: 'Building relationships with African associations, francophone organizations, settlement services and other community partners.',
      },
    },
    note: 'Specific activities and initiatives in each of these areas will be shared here as they are officially announced.',
  },

  events: {
    header: {
      eyebrow: 'Events',
      title: 'Events and gatherings',
      subtitle: 'Find the activities, gatherings and celebrations organized by CTAS.',
    },
    upcoming: 'Upcoming',
    past: 'Past events',
    noPast: 'No past events yet.',
    demoNotice:
      'The cards below are temporary examples. CTAS’s actual events will be posted as soon as they are confirmed.',
    dateLabel: 'Date',
    locationLabel: 'Location',
    items: [
      {
        id: 'demo-1',
        demo: true,
        title: 'Upcoming event',
        date: 'Date to be confirmed',
        location: 'Location to be confirmed',
        description: 'Information coming soon.',
      },
      {
        id: 'demo-2',
        demo: true,
        title: 'Upcoming event',
        date: 'Date to be confirmed',
        location: 'Location to be confirmed',
        description: 'Information coming soon.',
      },
      {
        id: 'demo-3',
        demo: true,
        title: 'Upcoming event',
        date: 'Date to be confirmed',
        location: 'Location to be confirmed',
        description: 'Information coming soon.',
      },
    ],
  },

  news: {
    header: {
      eyebrow: 'News',
      title: 'Community news',
      subtitle: 'Press releases, announcements, community news and CTAS activities.',
    },
    featuredLabel: 'Featured',
    categories: {
      pressRelease: 'Press release',
      announcement: 'Announcement',
      community: 'Community news',
      activity: 'Activities',
    },
    featured: {
      category: 'pressRelease',
      title: 'Official press release',
      date: 'Date to be confirmed',
      // TODO: replace this summary with the English version of CTAS's official press release.
      excerpt:
        'La Communauté des Tchadiens de l’Alberta Society (CTAS), a community organization based in Edmonton, is dedicated to supporting the well-being, integration, solidarity and growth of the Chadian community in Alberta.',
      bodyPlaceholder: 'The full text of the official press release will be published here.',
    },
    latestTitle: 'All news',
    items: [
      { id: 'n-1', demo: true, category: 'announcement', title: 'Announcement coming soon', date: 'Date to be confirmed', excerpt: 'Information coming soon.' },
      { id: 'n-2', demo: true, category: 'community', title: 'Community news coming soon', date: 'Date to be confirmed', excerpt: 'Information coming soon.' },
      { id: 'n-3', demo: true, category: 'activity', title: 'Activity coming soon', date: 'Date to be confirmed', excerpt: 'Information coming soon.' },
    ],
  },

  getInvolved: {
    header: {
      eyebrow: 'Get Involved',
      title: 'Be part of the journey',
      subtitle: 'There are many ways to contribute to the life of the Chadian community in Alberta.',
    },
    sections: {
      membership: {
        title: 'Become a member',
        text: 'Join the association and take an active part in community life.',
        details: 'Membership requirements and process: information coming soon.',
        cta: 'Express my interest',
      },
      volunteer: {
        title: 'Volunteer',
        text: 'Share a little of your time and skills to support CTAS activities.',
        details: 'Volunteer opportunities: information coming soon.',
        cta: 'I’d like to help',
      },
      partnerships: {
        title: 'Partnerships',
        text: 'Organizations, institutions and associations — let’s work together for the community in Alberta.',
        details: 'Partnership details: information coming soon.',
        cta: 'Propose a partnership',
      },
      support: {
        title: 'Support the association',
        text: 'Help the association grow its initiatives.',
        details: 'Ways to support CTAS: information coming soon.',
        cta: 'Contact us',
      },
    },
    note: 'If you have questions in the meantime, please reach us by phone or through the contact form.',
  },

  contact: {
    header: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      subtitle: 'A question, an idea, a partnership proposal? We would be glad to hear from you.',
    },
    infoTitle: 'Contact information',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    webLabel: 'Website / Facebook',
    formTitle: 'Send us a message',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      required: 'required',
      submit: 'Send',
      notice:
        'This form will be connected to the association’s email system at a later date. For now, no message is actually sent.',
      success:
        'Thank you! Your message is valid, but online sending has not been activated yet. In the meantime, please reach us by phone.',
      errors: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address (e.g. name@example.com).',
        subjectRequired: 'Please enter a subject.',
        messageRequired: 'Please write your message.',
        messageTooShort: 'Your message must be at least 10 characters long.',
        summary: 'Please correct the fields marked below.',
      },
    },
  },

  footer: {
    about: 'A community organization serving the Chadian community in Alberta.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    followTitle: 'Follow us',
    email: 'Email: coming soon',
    social: 'Social media: coming soon',
    rights: 'All rights reserved.',
    madeIn: 'Edmonton, Alberta, Canada',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has been moved.',
  },
};
