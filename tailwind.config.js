/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Note: No whitespace is allowed in the glob string
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
