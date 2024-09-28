/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        acme: ['"Acme"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

