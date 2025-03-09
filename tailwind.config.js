/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src//*.html",
    "./src//*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#007BFF',
      }
    }
  },
  plugins: [
    ('tailwind-scrollbar'),
  ],
};