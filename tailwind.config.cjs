/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '991px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
 
    extend: {
      colors : {
        primary : 'blue',
          },
    },
  },
  plugins: [],
}
