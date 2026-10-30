/** @type {import('tailwindcss').Config} */
// ─────────────────────────────────────────────────────────────
// PALETTE CTAS — inspirée du drapeau du Tchad.
// Pour modifier une couleur du site, changez-la ici uniquement.
// ─────────────────────────────────────────────────────────────
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#002664', // bleu officiel — navigation, titres, éléments principaux
          'blue-700': '#0A3478', // bleu légèrement plus clair (survols)
          'blue-50': '#EEF2F9', // bleu très pâle (fonds d'icônes)
          yellow: '#FECB00', // jaune officiel — accents, mises en évidence
          'yellow-50': '#FFF8DB',
          red: '#C60C30', // rouge officiel — appels à l'action
          'red-700': '#A30A28',
          'red-50': '#FCEEF1',
        },
        ink: {
          DEFAULT: '#1A1D24', // texte principal (presque noir)
          muted: '#4B5160', // texte secondaire (contraste AA sur blanc)
        },
        surface: {
          DEFAULT: '#FFFFFF',
          cream: '#FAF8F4', // blanc cassé
          gray: '#F3F4F6', // gris très clair
          line: '#E5E7EB', // bordures
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 4px 16px rgba(16,24,40,0.06)',
        'card-hover': '0 2px 4px rgba(16,24,40,0.06), 0 12px 32px rgba(0,38,100,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
