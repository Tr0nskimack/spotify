/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        greencolor: "#1d8954",
        blackcolor: "#191414",
        whitecolor: "#ffffff",
        graycolor: "#10101b",
        lightgreycolor: "#1d1d1d",

      }
    }
        },
  plugins: [],
}