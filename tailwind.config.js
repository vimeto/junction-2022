/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      boxShadow: {
        "aapon-varjo": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      },
      backgroundImage: {
        "happy-bear": "url('/happy_bear.svg')",
        "sad-bear": "url('/sad_bear.svg')",
        "concerned-bear": "url('/concerned_bear.svg')",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
