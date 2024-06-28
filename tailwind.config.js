/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(./Assect/Image/bannerImage.png)",
        newBanner: "url('./assect/Images/carosalImage.webp')",
        hight: "h-full",
      },
      boxShadow: {
        insetcustom: "0 4px 40px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        grey: "#868383",
        "light-grey": "#F6F3F4",
        "denim-blue": "#E9EEF6",
        "skin-light": "#e9c8b3",
        "soft-orange": "#e9c8b3",
        "gulf-blue": "#062152",
        "elegant-navy": "#4a536b",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
