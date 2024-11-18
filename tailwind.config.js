/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },

      screens: {
        "2xl": "1484px",
      },

      fontFamily: {
        jost: ["Jost", "serif"],
      },

      colors: {
        primary: "#FEDR9C",
        "w-c": "#383838",
        "b-g": "EAEAEA",
      },
    },
  },
  plugins: [],
};
