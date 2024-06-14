/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Cgreen: "#00373a",
        Cheader: "#f9f6e9",
      },
      colors: {
        header: "#007932",
      },
    },
  },
  plugins: [],
};
