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
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightGrey: " hsl(217, 12%, 63%)",
          darkBlue: "hsl(213, 19%, 18%)",
          veryDarkBlue: "hsl(216, 12%, 8%)",
        },
      },
      animation: {
        up: "up 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
