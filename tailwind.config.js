/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray500: colors.gray['500'],
      },
    },
    screens: {
      xs: '375px',
      sm: '576px',
      md: '960px',
      lg: '1200px',
    },
    fontFamily: {
      nanum: 'Nanum Brush Script',
      gaegu: 'Gaegu',
      sanspro: 'Source Sans Pro',
      jua: 'Jua',
      myeongjo: 'Nanum Myeongjo',
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.description': {
          fontFamily: theme('fontFamily.font-sanspro'),
          fontSize: theme('fontSize.xs'),
          color: theme('colors.gray500'),
        },
        '.button': {
          display: 'block',
          paddingTop: '14px',
          paddingBottom: '14px',
          fontFamily: theme('fontFamily.font-sanspro'),
          borderRadius: '5px',
          border: '1px solid black',
        },
        '.text-input': {
          width: '100%',
          border: '1px solid #e5e7eb',
          borderRadius: '0.25rem',
          padding: '8px 12px',
        },
      });
    }),
  ],
};
