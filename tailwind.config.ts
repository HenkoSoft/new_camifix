import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#18181B",
        primary: "#2563EB",
        success: "#22C55E",
        text: "#FAFAFA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(37, 99, 235, 0.25)",
        success: "0 0 48px rgba(34, 197, 94, 0.18)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.22), transparent 34rem)",
      },
    },
  },
  plugins: [],
};

export default config;
