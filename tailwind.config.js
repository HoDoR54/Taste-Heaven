/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/index.html"],
  theme: {
    colors: {
      primary: "#551938",
      accent: "#F9A826",
      light: "#EFF1D3",
      dark: "#171717",
    },
    extend: {
      fontFamily: {
        nerko: ["Nerko One", "serif"],
      },
    },
  },
  plugins: [],
};
