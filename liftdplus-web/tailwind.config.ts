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
        primary: "#b9a590",
        primaryBlue: "#ADC9C8",
        secondaryBlue: "#D4EAE8",
        primaryText: "#2e3129",
        secondaryText:"#1d231c",
        brown:"#36302a",
        lightBrown:"#ECE4DA",
        green:"#D9D68F",
        white:"#F5F5F7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
