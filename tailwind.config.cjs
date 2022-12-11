/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      orange: '#ff5400',
      midOrange: '#ff4800',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}

//