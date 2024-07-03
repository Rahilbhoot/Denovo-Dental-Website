/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#DAD7FA',
          200: '#B5B0F5',
          300: '#8A83E3',
          400: '#655EC7',
          500: '#3730A3',
          600: '#28238C',
          700: '#1C1875',
          800: '#120F5E',
          900: '#0B094E',
        },
        secondary: {
          100: '#FEEED0',
          200: '#FED7A1',
          300: '#FDBB72',
          400: '#FB9F4F',
          500: '#F97316',
          600: '#D65510',
          700: '#B33C0B',
          800: '#902707',
          900: '#771804',
        },
        ternery: {
          100: '#F8F8F8',
          200: '#F1F1F1',
          300: '#D6D6D6',
          400: '#ADADAD',
          500: '#777777',
        },
        card: {
          100: '#EEE6F9',
        },
        shadow: {
          400: '#FD9367',
        },
      },
      fontFamily: {
        title: ["Libre Bodoni", "serif"],
        primary: ["Source Sans 3", "sans-serif"],
      },
    },

  },
  plugins: [],
}

