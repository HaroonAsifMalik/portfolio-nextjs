/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#373598', 
        'primary_dark':'#2e2c82',
        'secondary': '#FEE36E',
        'secondary_hover': '#CEB92C',
        'dark_bg': '#2A2A2A',
        'third': '#F16775',
      },
    },
  },
  plugins: [],
}