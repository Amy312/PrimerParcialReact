/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ["./index.html", "./src/**/*.jsx", "./src/**/*.svg" ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Helvetica'],
      },
    },
  },
  plugins: [],
}

