const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'roboto':["Roboto", "sans-serif"],
        'poppins':["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-image': "url(./assets/landing_hero.webp)",
        'plan':"url(./assets/tic-tac-toe.png)",
        'about':"url(./assets/Moses.webp)",
      },
      listStyleImage: {
        checkmark: 'url("/assets/checkmark.png")',
      },

      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '100vh':'100vh',
        '600px':'600px',
        '900px': '900px',
      },

      width: {
        '34rem':'34rem',
        '72rem':'72rem',
        '900px':'900px',
      },

      boxShadow: {
        'custom-blue': '0 4px 6px rgba(59, 130, 246)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('preline/plugin'),
  ]
}
