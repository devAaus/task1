/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#282c35',
        'text': '#e4e4e6',
        'title': '#e6b4ef'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

