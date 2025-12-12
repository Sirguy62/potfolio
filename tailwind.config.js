/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hotel.png')",
      },
      fontFamily: {
        great: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
