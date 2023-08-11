/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#67e8f9",
          "secondary": "#5EFCED",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-300": "#000000",
        },
      },
      "synthwave",
      "cupcake",
    ],
  },
}

