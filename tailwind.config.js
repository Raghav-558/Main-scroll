/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
      },
      fontFamily: {
        poppins: "'poppins', sans-serif",
      },
      colors: {
        'dark-blue': "#0E1122",
        'cream': "#EFECE6",
        'custum-blue': "#4C57FF",
        'custum-gray': "#76767F",
        'custom-light-gray':"#DDDDDF",
      },
    },
  },
  plugins: [],
}