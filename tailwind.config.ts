import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "primaryText":"#E2EBE2",
        "background":"#070b07",
        "primary":"#9cd298",
        "secondary":"#3A6436",
        "accent":"#1cb47c"
      },

      fontSize: {
        "H1":"5.3rem"
      },
    },
  },
  plugins: [],
};
export default config;
