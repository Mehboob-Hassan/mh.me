// filepath: /E:/Projects/current-tech/tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec5b53",
        secondary: "#fbd354",
        grayAccent: "#f4f0f8",
        blackAccent: "#232536"
      },
      fontFamily: {
        sen: "var(--font-sen)",
        inter: "var(--font-inter)",
        poppins: ['Poppins', 'sans-serif']
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};