/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    "text-[6rem]",
    "text-dark",
    "mb-4",
    "mt-5",
    "text-lg",
    "border-[2px]",
    "border-dotted",
    "border-accent",
    "text-accent",
    "rounded",
    "hover:bg-accent",
    "hover:text-dark",
    "transition",
    ".overflow-hidden",
    ".shadow-xl",
    ".rounded-xl",
    ".w-[300px]",
    ".h-[200px]",
    ".p-3",
    ".text-lg",
    ".font-bold",
    ".text-sm",
    ".opacity-80",
    ".flex",
    ".justify-end",
    ".p-2",
    "hover:border-dotted",
    "hover:border-[2px]",
    "rounded",
    "bg-accent",
    "text-dark",
    "hover:border-accent",
    "hover:bg-primary",
    "hover:text-accent",
    "min-w-[300px]",
    "h-3/4",
    "object-cover",
    "flex-col",
    "justify-end",
    "flex-1",
    "align-bottom",
    "absolute",
    "top-0",
    "right-0",
    "z-10",
    "flex",
    "p-2",
    "rounded-tr-lg",
    "rounded-bl-lg",
    "bg-primary",
    "text-dark",
    "text-lg",
    "cursor-pointer",
    "add-to-favorite",
    "hidden",
    "relative",
  ],
  theme: {
    colors: {
      accent: "#6ac15c",
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
