/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          "text-blue": "hsl(238, 29%, 16%)",
          "text-red": "hsl(14, 88%, 65%)",
          "bg-violet": "hsl(273, 75%, 66%)",
          "bg-blue": "hsl(240, 73%, 65%)",
        },
        base: {
          50: "hsl(240, 5%, 91%)",
          100: "hsl(240, 6%, 50%)",
          200: "hsl(237, 12%, 33%)",
        },
      },
      fontFamily: {
        body: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
