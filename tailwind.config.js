/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#5700FF",
        secondary: "#0096FF",
        tertiary: "#00D7FE",
        darkPrimary: "#4700D0"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
    },
  },
  plugins: [],
}