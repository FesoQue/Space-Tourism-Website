/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home-mobile': 'url("/assets/home/background-home-mobile.jpg")',
        'bg-home-desktop': 'url("/assets/home/background-home-desktop.jpg")',

        'bg-destination-mobile':
          'url("/assets/destination/background-destination-mobile.jpg")',
        'bg-destination-desktop':
          'url("/assets/destination/background-destination-desktop.jpg")',

        'bg-crew-mobile': 'url("/assets/crew/background-crew-mobile.jpg")',
        'bg-crew-desktop': 'url("/assets/crew/background-crew-desktop.jpg")',

        'bg-technology-mobile':
          'url("/assets/technology/background-technology-mobile.jpg")',
        'bg-technology-desktop':
          'url("/assets/technology/background-technology-desktop.jpg")',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
