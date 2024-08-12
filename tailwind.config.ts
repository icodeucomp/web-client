import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        5: "5",
        100: "100",
        1000: "1000",
      },
      minHeight: {
        "custom-header": "calc(100vh - 88px)",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      minWidth: {
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "800px",
        1000: "1000px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
      maxWidth: {
        container: "1180px",
      },
      colors: {
        "light-blue": "#3D96F4",
        blue: "#003153",
        orange: "#FF6C01",
        yellow: "#FF9D00",
        "lemon-yellow": "#FFC700",
        "light-yellow": "#FFC54F",
        "dark-yellow": "#995E00",
        "light-red": "#E44320",
        purple: "#5B0E4E",
        green: "#5CC97B",
        light: "#FFFFFF",
        dark: "#313335",
        "dark-blue": "#161C2D",
      },
      fontFamily: {
        "red-hat": ["Red Hat Display", "sans-serif"],
      },
    },
  },

  plugins: [],
};
export default config;
