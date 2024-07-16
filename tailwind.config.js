/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        summer: {
          light: '#f5ebde',
          primary: '#9f2100',
          secondary: '#CB9897',
          accent: '#abdecf',
          accentPlus: '#4e7683',
          muted: '#947481',
        },
      },
      fontFamily: {
        'sans': ["Montserrat", 'sans-serif'],
        'heading': ["Sofia", 'cursive'],
      },
    },

  },
  plugins: [],
}

