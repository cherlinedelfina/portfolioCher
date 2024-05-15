/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '8.5xl': '5rem',  // Example size, adjust as needed
      }
    },
  },
  plugins: [],
  
};
