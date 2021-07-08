const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: ["./src/**/*.tsx", "./public/index.html"],
  mode: "jit",
  theme: {
    colors: {
      ...colors,
      purpleCust: "var(--purple)",
      purpleBgCust: "var(--purple-bg)",
      purpleDarkCust: "var(--purple-dark)",
      purpleLightCust: "var(--purple-light)",
      purpleCardCust: "var(--purple-card)",
      orangeCust: "var(--orange)",
      purpleFontCust: "var(--purple-text)",
      white: "var(--light)",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
