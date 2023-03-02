/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./out/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'des': [
          "0 4px 24px -4px rgba(0, 0, 0, 0.1)",
          "0 6px 8px -2px rgba(0, 0, 0, 0.03)",
        ],
      },
    },
  },
  plugins: [],
};
