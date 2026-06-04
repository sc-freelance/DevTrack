/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // It tells Tailwind to check ALL subfolders in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}