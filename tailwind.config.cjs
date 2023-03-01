/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        navbarExtend: {
          "0%": { width: "90%", borderBottom: "red 1px solid", },

          "50%": { width: "95%", borderBottom: "blue 1px solid" },

          "100%": { width: "100%", borderBottom: "green 1px solid" },
        },
      },

      animation: {
        nav: "navbarExtend 2s ease-in-out",
      },
    },
  },
  plugins: [],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};
