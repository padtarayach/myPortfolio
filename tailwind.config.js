
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src//*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#F96E6E",

"secondary": "#FFF0D9",

        },
      },
    ],
  },

  plugins: [require("daisyui")]
}