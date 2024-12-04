/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* Hide scrollbar for IE and Edge */
          'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Hide scrollbar for Chrome, Safari, and Opera */
        },
      });
    },
  ],
};
