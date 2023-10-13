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

      colors: {
        'custom-blue': '#3366FF', // Define your custom color here
      },
    },
  },
  
  plugins: [],
}

