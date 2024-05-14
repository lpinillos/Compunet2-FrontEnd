/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-orange':'#f8872e',
        'hover-orange':'#fc580c',
      }
    },
  },
  plugins: [],
}

