/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#162963',
        secondary: '#2ABCBB',
      },
      backgroundImage: {
        'hero-desktop': "url('/img/desktop.svg')",
        'hero-mobile': "url('/img/mobile.svg')",
      },
    },
  },
  plugins: [],
}