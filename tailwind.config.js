/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: { colors: {
        'blue': '#1fb6ff',
        'purple': { 100: '#7e5bef', 500: '#6141da',400: '#4a19dc', },
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',

      },},
  },
  plugins: [],
}

