const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'roboto':["Roboto", "sans-serif"],
        'poppins':["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-image': "url(./assets/landing_hero.png)",
        'plan':"url(./assets/tic-tac-toe.png)",
        'about':"url(./assets/Moses.webp)",
      },

      height: {
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
  ]
}
