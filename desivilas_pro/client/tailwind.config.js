/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // This is where you register your custom font.
      fontFamily: {
        asimovian: ['Asimovian', 'serif'] // 'serif' is a fallback font
      }
    },
  },
  plugins: [],
}
