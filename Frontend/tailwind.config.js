/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-dark': '#1c1c1c',
        'light-gray': '#494949',
        'light-green': '#c8f46a',
      }
    },
  },
  plugins: [],
}

