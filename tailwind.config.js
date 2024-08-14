/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinBlack: ["Poppins-Black", "sans-serif"],
        poppinSemiBold: ["Poppins-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
