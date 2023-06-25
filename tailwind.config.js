/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        caveat: ["Caveat", "cursive"],
        indieflower: ["Indie Flower", "cursive"],
      },
      colors: {
        "ui-100": "#F8F6F4",
        "ui-200": "#E3F4F4",
        "ui-300": "#D2E9E9",
        "ui-400": "#C4DFDF",
      },
    },
  },
  plugins: [],
};
