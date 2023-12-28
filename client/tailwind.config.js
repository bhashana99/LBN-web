/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
       'neutralSilver':'#f5f7fa',
       'neutralDGrey':'#4d4d4d',
       'brandPrimary':'#4caf4f',
       'neutralGrey':'#717171',
      },
      screens: {
        xs : "550px",
        md : "850px",
        xl : "1180px",
        "2xl" : "1280px"
      },

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}