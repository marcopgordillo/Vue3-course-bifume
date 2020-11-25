const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.green[500],
        teal: colors.teal,
      },
      width: {
        '1/7': '14.2857143%',
      },
      height: {
        '350': '350px',
        '340': '340px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
