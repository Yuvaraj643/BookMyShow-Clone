/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif','Roboto',],
      },
      colors: {
        navCol: {
          50: "#2E3147",
          200: "#2B3148",
        },
        SignIn :{
          50: "#f84464",
        },
      },
    },
  },
  plugins: [],
};
