/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#458FF6',
        },
        gray: {
          100: '#3F4559',
        },
        red: {
          100: '#EF4444'
        },
        background: {
          100: '#FEF2F2'
        },
        error: {
          100: '#DC2626'
        }
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}