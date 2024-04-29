/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "global-bg": "url('/globalBG.webp')",
        "ff-bg": "url('/ffBG.webp')",
      },
      colors: { primary: "#00B3FF", darkBlue: "#001D29" },
      animation: {
        slideInRight: "slide-in-right 0.3s ease",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          // "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
