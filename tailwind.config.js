// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}