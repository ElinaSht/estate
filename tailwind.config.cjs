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
        'telegram': '#039BE5',
        'youtube': '#FF0002',
        'vk': '#4A76A8'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  }
}
