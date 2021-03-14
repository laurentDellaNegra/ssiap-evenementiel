module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#da4042",
        secondary: "#40b2e5",
        tertiary: "#8f8a8f",
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
      },
      maxHeight: {
        100: "28rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
