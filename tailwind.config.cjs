/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/index.html',
    './src/index.tsx',
    
    './src/**/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'section_first': "url('~sections/first.jpeg')",
      'section_first_neon': "url('~sections/dac-neon.webp')",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}