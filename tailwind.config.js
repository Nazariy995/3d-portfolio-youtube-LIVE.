/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)", ...fontFamily.sans],
      },
      colors: {
        blueOne: "rgba(147, 250, 186, 1)",
        blueTwo: "rgba(140, 238, 214, 1)",
        blueThree: "rgba(130, 224, 249, 1)",
        bannerColor: "rgba(23, 27, 34, 0.4)",
        bannerBorder: "rgba(255,255,255, 0.3)",
      },
    },
  },
  plugins: [],
};
