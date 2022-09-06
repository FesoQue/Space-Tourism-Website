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
        'bg-destination-mobile': 'url("/assets/destination/background-destination-mobile.jpg")',
        'bg-crew-mobile': 'url("/assets/crew/background-crew-mobile.jpg")'
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'sans-serif'],
      }
    },
  },
  plugins: [],
}