/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        half: "1 1 50%",
        oneThird: "0 0 30%",
      },
      backgroundColor: {
        blur: "rgba(0, 51, 128, 0.7)",
        bannerBlur: "rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
