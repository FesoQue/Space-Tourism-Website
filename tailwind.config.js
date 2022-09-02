/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home-mobile': 'url("/assets/home/background-home-mobile.jpg")',
        'bg-destination-mobile': 'url("/assets/destination/background-destination-mobile.jpg")'
      }
    },
  },
  plugins: [],
}