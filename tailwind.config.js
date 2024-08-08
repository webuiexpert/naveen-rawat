/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': 'repeating-linear-gradient(45deg, #0d6efd, #0d6efd 2.5px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 6px)',
      },
    },
  },
  plugins: [],
}

