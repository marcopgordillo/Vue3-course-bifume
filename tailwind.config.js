const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.green[500]
      },
      width: {
        '1/7': '14.2857143%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
