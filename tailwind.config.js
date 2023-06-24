/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'roboto': ['Roboto'],
        'poppins': ['poppins','Arial'],
        'black-hole': ['black-hole','Arial'],
      },
      boxShadow: {
        'higher': '0px 2px 12px 0px rgba(30,30,30,0.16);',
      },
      colors: {
        'dark-green': '#096357',
        'soft-green': '#08AE92',
        'dark-brown': '#bb9b77'
      },
      animation: {
        'spin-slow-20s': 'spin 20s linear infinite',
        'spin-slow-30s': 'spin 30s linear infinite',
        'bounce-slow-30s': 'bounce 30s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

