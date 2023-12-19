/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['"Montserrat", sans-serif'],
      serif: ['"Fraunces", serif'],
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'fm-cream': 'hsl(30, 38%, 92%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'gray-blue': 'hsl(228, 12%, 48%)',
      },
    },
  },
  plugins: [],
};
