/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media  ',
  content: ['./index.html', './youtuube/**/*.{html, vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  colors: {
    sky: colors.sky,
    cyan: colors.cyan,
    variants: {},

  },
}
