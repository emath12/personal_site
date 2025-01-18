/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '65': '65px',
      },

      scale: {
        '102': '1.02',
      },


      colors: {
        'custom-blue': '#082b4dfc'
      },
    },
  },
  
  plugins: [],
}

