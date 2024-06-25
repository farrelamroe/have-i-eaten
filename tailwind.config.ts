import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist"],
      },
    },
    colors: {
      "primary-100": "#C0DBC6",
      "primary-200": "#CACA59",
      "primary-300": "#45ABB5",
      "primary-400": "#05738D",
      "secondary-100": "#F7D796",
      "secondary-200": "#E8BB3A",
      "secondary-300": "#E3672A",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
