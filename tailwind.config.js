/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        detroitRed: "#FF0000",
        detroitOrange: "#FF8C00",
        glassBase: "rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        'detroit-gradient': "linear-gradient(135deg, #FF0000 0%, #FF8C00 100%)",
      },
      borderRadius: {
        '2xl': '1.25rem', // Medium rounded corners
      },
      fontFamily: {
        detroitBold: ['Inter', 'sans-serif'], // Extra Bold feel
      },
    },
  },
  plugins: [],
};
