/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '01': '#ffffff',
          '02': '#c8ddf1',
          '03': '#9d89fc',
          '04': '#051a2f',
        },
        primary: {
          '01': '#e9fa49',
          '02': '#ff8f27',
          '03': '#ff4f3f',
          '04': '#1cb785',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Anton"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
