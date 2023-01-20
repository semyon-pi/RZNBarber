/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#101011',
        'dark': '#2D2D2D',
        'light': '#D6D6D6',
        'light-2': '#E8E8E8',
        'light-3': '#F6F7F9',
      },
    },
    fontFamily: {
      'sans': ['"Jost"', 'sans-serif'],
    },
    fontWeight: {
      '400': 400,
      '600': 600,
      '700': 700,
      '800': 800,
    },
  },
  plugins: [],
}