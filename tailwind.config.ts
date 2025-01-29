import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      primary: ["var(--font-primary)", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#df3e0d",
        secondary: "#eeeeee",
        dark: "#000000",
        accent: {
          DEFAULT: "#df3e0d",
          hover: "#df3e0d/10",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
