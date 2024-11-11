import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      base: '1.5rem',
      md: '1.25rem',
      lg: '1.6rem',
      xl: '2rem',
      '2xl': '4rem',
      '3xl': '6rem',
      '4xl': '8rem',
      '5xl': '10rem',
    }
  },
  plugins: [],
} satisfies Config;
