/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'royal-green':'#272C24',
          'creame': '#F0E4D8',
          'bordergray': "#d9d9d9",
          'navback':"#faf9f9",
      },

      
    },
    fontFamily :{
      paw: ["Josefin Sans"],
      caveatB: ["Caveat Brush"],
    },
  },
  plugins: [],
}