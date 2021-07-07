module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: ["./src/**/*.tsx", "./public/index.html"],
  mode: "jit",
  theme: {
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
