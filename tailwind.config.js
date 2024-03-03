/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'dasar': '#cecece',
        'merah': '#ff0000',
        'login': '#5e5a00',
        'silver': '#595959',
        'bulog': '#5e5a00',
        'abu': '#e5e5e5',
        'garis': '#828282',
        'gold-ochre': '#ffcd56',
        'cyan' : '#56fff5',
        'hijau-lakban': '#00585E',
        'merah-maroon': '#ff5656',
        'merah-tomat': '#5e0000',
        'abu2': '#d9d9d9',
        'brink-pink': '#FF6384',
        'merah-marun': '#5E0000',
        'biru-laut': '#36a2eb',
        'hijau-gelap': '#005e4d',
        'gray89' : '#e3e3e3'

      },
      fontFamily: {
        'login' : ["Inter", "sans-serif"]
      },
      zIndex: {
        '100': 100,
        '200': 200,
        '500': 500,
        '1000': 1000,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("rippleui"),
  ],
}

