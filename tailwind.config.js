/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-grey-1": "#474747",
        "brand-grey-2": "#545454",
        "brand-gray-3": "#A5A5A5",
        "brand-gray-4": "#C3C3C3",
        
        "brand-green-1": "#519945",
      },
      screens: {
        'sm': { 'max': '639px' },
        'md': {'max': '900px'},
      }
    },
  },
  plugins: [],
}

