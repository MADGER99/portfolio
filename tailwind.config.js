/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neon: {
          DEFAULT: '#14f7ff', ///#00ff99
          hover: '#5a84ff'   ///#00e187
        },
      }
    },
  },
  plugins: [],
}