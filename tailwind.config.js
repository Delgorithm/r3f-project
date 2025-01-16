module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        baskervville: ['Baskervville', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/bg.webp')",
      },
    },
  },
}
