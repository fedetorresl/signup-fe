/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techieGray: {
          600: '#5A5F70',
          700: '#3F4559',
          900: '#1C202E',
        },
        complementaryRed: {
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        background: {
          100: '#FEF2F2'
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}