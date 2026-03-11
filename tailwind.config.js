/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // The extra quotes are required for font names with spaces!
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}