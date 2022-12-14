/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      orange: '#ff6600',
      midOrange: '#ff4800',
      black: '#000000',
      white: '#ffffff',
      gray: '#cccccc',
    },
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'quicksand': ['Unbounded', 'cursive'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif']
      }
    },
  },
  plugins: [],
}

//