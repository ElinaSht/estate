const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black-gray-text': '#262626',
        'gray-dark-3': '#6C6C6C',
        'gray-dark-4': '#5B5B5B',
        'gray-light-4': '#D9D9D9',
        'gray-dark-1': '#ABABAB',
        'green-links': '#428D26',
        'gray-light-2': '#F3F3F3',
        'black-gray': '#101010',
        'green-logo': '#63D23A',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
}
