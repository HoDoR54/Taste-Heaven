/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        accent: "#6ac15c",
        secondary: "#F9A826",
        primary: "#EFF1D3",
        dark: "#171717",
      },
      fontFamily: {
        handWritten: ["Handlee", "serif"],
      },
    },
  },
  plugins: [],
};
