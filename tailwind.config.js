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
        'merah': '#ff0000'
      },
    },
  },
  plugins: [],
}

