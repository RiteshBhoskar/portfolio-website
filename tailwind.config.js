/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ["Lato", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
      }
    },
  },
  plugins: [],
}

