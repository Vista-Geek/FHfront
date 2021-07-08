const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: ["./src/**/*.tsx", "./public/index.html"],
  mode: "jit",
  theme: {
    colors: {
      ...colors,
      purpleCust: {
        DEFAULT: "var(--purple)",
        bg: "var(--purple-bg)",
        dark: "var(--purple-dark)",
        light: "var(--purple-light)",
        card: "var(--purple-card)",
        text: "var(--purple-text)",
      },
      orangeCust: "var(--orange)",
      white: "var(--light)",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      'display': ['Oswald'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
