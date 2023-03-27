/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./main-content/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
    plugins: [
        require('flowbite/plugin')
    ], 
}