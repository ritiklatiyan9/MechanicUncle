/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0057FF', // A more vibrant, modern blue
        'brand-blue-dark': '#0044CC',
        'light-blue': '#F0F6FF', // A very light blue for backgrounds
        'dark-gray': '#1F2937',
        'medium-gray': '#6B7280',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // A clean, modern font
      },
    },
  },
  plugins: [],
}