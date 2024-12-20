/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/index.html"],
  theme: {
    colors: {
      accent: "#0BAE3A",
      secondary: "#F9A826",
      primary: "#EFF1D3",
      dark: "#171717",
    },
    extend: {
      fontFamily: {
        handWritten: ["Handlee", "serif"],
      },
    },
  },
  plugins: [],
};
