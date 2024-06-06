/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-orange':'#195874',
        'hover-orange':'#3A7992',
        'navbar-color':'#09738A',
        'custom-black':'#2C2C2C'
      }
    },
  },
  plugins: [],
}

