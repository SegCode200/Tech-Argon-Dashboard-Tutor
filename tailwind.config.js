/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "main-height": 'calc(100vh - 6px)' 
      }
    },
  },
  plugins: [],
}