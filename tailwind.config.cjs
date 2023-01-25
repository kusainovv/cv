/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/index.html',
    './src/index.tsx',
    
    './src/**/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'scroll': {
          'from': { top: '-100%' },
          'to': { top: '100%' },
        }
      },

      animation: {
        'scroll': 'scroll 2s linear infinite'
      },

      colors: {
        scroll_border: '#ac91b0 '
      },
    },

    fontFamily: {
      'network': 'Network',
      'unbounded': 'Unbounded'
    },

    backgroundImage: {
      'section_first': "url('~sections/first.jpeg')",
      'section_first_neon': "url('~sections/dac-neon.webp')",
    }
  },
  variants: {
    extend: {},
  }
}