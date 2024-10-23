import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        default: "hsl(var(--default))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        ternary: {
          DEFAULT: "hsl(var(--ternary))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
