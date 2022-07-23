/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        greenbarMain1: '#076140',
        greenbarMain2: '#9BB0A4',
        greenbarMain3: '#687B71',
        greenbarMain4: '#005D89',
        greenbarMain5: '#298FBF'
      }
    },
    fontFamily: {
      raleway: "'Raleway', sans-serif"
    }
  },
  safelist: [
    {
        pattern: /./,
    },
],
  plugins: [require('daisyui')],
  
}
