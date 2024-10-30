/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customGreens: '#138F82', 
        customLightGreen: '#F3F9F8',
      },
    },
  },
  plugins: [],
}

