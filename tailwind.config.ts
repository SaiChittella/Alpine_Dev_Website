import { plugin } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryText":"#E2EBE2",
        "background":"#070b07",
        "primary":"#9cd298",
        "secondary":"#3A6436",
        "accent":"#1cb47c"
      },

      fontSize: {
        "H1":"5rem",
        "H4":"1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
