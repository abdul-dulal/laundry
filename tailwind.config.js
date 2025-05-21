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
      colors: {
        primary: "#142137",
        secondary: "#4375e7",
        accent: "#07000e",
        light: "#031f42",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1300px",
      "2xl": "1640px",
    },
    container: {
      center: true,
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        xxl: "1300px",
        "2xl": "1640px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
