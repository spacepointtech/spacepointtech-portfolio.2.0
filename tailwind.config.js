/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightText: "#FAFAFA",
        darkBg: "#18181B",
        mainTheme: '#EA580C',
        fadeMainTheme: '#FB923C'

      },
      backgroundColor: {
        'opacity-30': 'rgba(255, 255, 255, 0.3)',
      },
      borderColor: {
        'opacity-10': 'rgba(0, 0, 0, 0.1)',
      },
      bodyScroll: {
        open: 'overflow-hidden',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
