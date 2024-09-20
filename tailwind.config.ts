import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        urbanist: ["Urbanist"],
        crimson: ["Crimson Pro"],
      },
    },
    colors: {
      primary: {
        100: "#C0DBC6",
        200: "#CACA59",
        300: "#617389",
        400: "#2d3e54",
      },
      "secondary-100": "#F7D796",
      "secondary-200": "#E8BB3A",
      "secondary-300": "#E3672A",
      white: "#FFFFFF",
      grey: "#D9D9D9",
    },
  },
  plugins: [],
};
export default config;
