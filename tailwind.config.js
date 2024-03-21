/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#040813",
        "color-primary-light": "#040813",
        "color-primary-dark": "#010417",
        "color-secondary": "#000d3d",
        "color-tercero": "#ffe992",
        "color-cuarto": "#a8d7ff",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#152d65",
      }
    },
    container: {
      center: true,
      pavding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
}
