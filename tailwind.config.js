/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(./Assect/Image/bannerImage.png)",
        hight: "h-full",
      },
      boxShadow: {
        insetcustom: "0 4px 40px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        primary: "#7065f0",
      },
      colorss: {
        footer: "#828282",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
