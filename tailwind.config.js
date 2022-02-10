module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
    fontFamily: {
      nanum: 'Nanum Brush Script',
      gaegu: 'Gaegu',
    },
  },
  plugins: [],
};
