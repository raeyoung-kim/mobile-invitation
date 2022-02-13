module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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
  plugins: [],
};
