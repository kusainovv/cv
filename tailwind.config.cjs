const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/index.html',
    './src/index.tsx',
    
    './src/**/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      m: '600px',
      s: '480px',
      xs: '320px',
      ...defaultTheme.screens
    },

    extend: {
      keyframes: {
        'scroll': {
          'from': { top: '-100%' },
          'to': { top: '100%' },
        },

        'show_menu': {
          'from': { 
            left: '-100%' 
          },
          'to': { 
            left: '100%' 
          },
        }
      },

      animation: {
        'scroll': 'scroll 2s linear infinite',
        'show_menu': 'show_menu 2s linear infinite',
      },

      colors: {
        scroll_border: '#ac91b0 '
      },

      transitionDuration: {
        '2000': '2000ms'
      }
    },

    fontFamily: {
      'network': 'Network',
      'unbounded': 'Unbounded',
      'kalam': 'Kalam'
    },

    backgroundImage: {
      'section_first': "url('~sections/greeting/bg.jpeg')",
      'section_second': "url('~sections/bio/bg.jpg')",
      'section_third': "url('~sections/projects/bg.jpeg')",
      'section_fourd': "url('~sections/projects/bg.jpg')",

      'section_first_neon': "url('~sections/dac-neon.webp')",
    
      'main_menu_background_texture': "url(~sections/texture.png)",
      'main_menu_background': "url('~sections/air.jpg')",

      'cloud': "url('~sections/cloud.svg')",
    }
  },
  variants: {
    extend: {},
  }
}