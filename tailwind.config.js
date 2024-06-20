/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        'merienda': ['Merienda', 'cursive'],
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: "#f42c37",
        secondary:"#f42c37",
        brandYellow:"#fdc62e",
        brandGreen:"#2dcc6f",
        brandBlue:"#1376f4",
        brandWhite: "#eeeeee"
      },
      container:{
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      }
    },
  },
  plugins: [],
}