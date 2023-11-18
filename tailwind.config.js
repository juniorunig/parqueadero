/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'lg': '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e, 0 0 40px #22c55e',
      },
    },
    
  },
  plugins: [],
}

