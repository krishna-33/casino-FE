/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141239",
        secondary: "#262262"
      },
      backgroundImage: {
        'hero1': "url('../public/images/hero1.jpg')",
        'hero2': "url('../public/images/hero2.jpg')",
        'hero3': "url('../public/images/hero3.jpg')",
      },
    },
  },
  plugins: [],
}
