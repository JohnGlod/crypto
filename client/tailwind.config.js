module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin')],
  darkMode: 'class',
  theme: {
    colors: {
      red: '#DA18A3',
      white: '#ffffff',
      dark: '#24252D',
      orange: '#ee7752',
      pink: '#e73c7e',
      'azalea-pink': '#e73c7e',
      fireflies: '#f7186a',
      yellow: '#FBB03B',
      blue: '#23a6d5',
      green: '#23d5ab',
      'gray-light': '#E3E1E3',
      'gray-middle': '#888888',
      'gray-dark': '#4F4F4F',
      'black-1': '#2D2E36',
      'black-2': '#1B1A21',
      'black-3': '#2A2D3A',
      'black-4': '#24252D',
    },
  },
};
