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
        black: "#000000",
        "apple-dark": "#1a1a1a",
        "apple-light": "#f5f5f7",
        anthracite: "#0a0a0a",
        bento: "#1c1c1e",
        gold: "#D4AF37",
        charcoal: "#1a1a1a",
        cream: "#f9f9f9",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      transitionDuration: {
        "500": "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
