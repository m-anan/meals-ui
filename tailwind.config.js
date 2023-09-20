/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work_Sans", ...fontFamily.sans],
      },
      colors: {
        text: {
          primary: "#020A05",
          green: "#79E003",
          blue: "#410DEB",
          bluesecondary:'#410DEB',
          gray: "#2F3333A6",
        },
        border: { primary: "#D3DBDA" },
      },
      screens: {
        xs: { raw: "(max-width: 768px)" },
        // => @media (min-width: 500px) { ... }
      },
    },
    plugins: [],
  },
};
