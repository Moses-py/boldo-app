/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0A2640",
      hero: "#65E4A3",
      slate: "#F1F1F1",
      textGrey: "#777777",
      textLight: "#FFFFFF",
      textDark: "#000000",
      textGreen: "#69E6A6",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xs: "16px",
      sm: "20px",
      md: "24px",
      lg: "28px",
      xl: "48px",
      "2xl": "96px",
    },
    fontFamily: {
      primary: ["var(--font-manrope)"],
      secondary: ["var(--font-open_sans)"],
    },
    lineHeight: {
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      48: "48px",
      56: "56px",
      72: "72px",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
