module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        baskervville: ['Baskervville', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/bg.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
