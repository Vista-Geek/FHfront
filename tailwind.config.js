const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class", // or 'media' or 'class'
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
      blueCust: "var(--blue)",
      white: "var(--light)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      display: ["Oswald"],
      herbo: ["Heebo"],
    },
    minHeight: {
      380: "380px",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero.jpg')",
      }),
      borderRadius: (theme) => ({
        fh: "5px 10px 5px 10px",
        card: "15px 15px 15px 15px",
      }),
      borderWidth: (theme) => ({
        3: "3px",
      }),
      minWidth: (theme) => ({
        medium: "50%",
      }),
      maxHeight: (theme) => ({
        100: "26rem",
      }),
      inset: (theme) => ({
        "-30": "-7.8rem",
        "-22": "-6.8rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
