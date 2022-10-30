/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height : {
        'screen-player':  'calc(100vh - 6rem - 5rem)' 
      },

      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
