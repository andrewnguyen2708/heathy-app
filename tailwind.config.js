/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary300: "#ffcc21",
        primary400: "#ff963c",
        primary500: "#ea6c00",
        secondary: "#8fe9d0",
        white: "#ffffff",
        dark600: "#2e2e2e",
        dark500: "#414141",
        dark400: "#777777",
        primary300400: "linear-gradient(180deg, #ffcc21 0%, #ff963c 100%)",
      },
      backgroundImage: {
        'hero-left': `url('/assets/images/hero_left.jpg'})`,
       }
    },
  },
  plugins: [],
};
