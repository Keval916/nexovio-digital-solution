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
        background: "#03050A",
        surface: {
          DEFAULT: "#070B12",
          elevated: "#0A1020",
          subtle: "#0E1528",
        },
        brand: {
          electric: "#1769FF",
          bright: "#008CFF",
          cyan: "#00C6FF",
          glow: "rgba(23, 105, 255, 0.35)",
        },
        muted: {
          DEFAULT: "#A7B0C0",
          light: "#CBD3E1",
          dark: "#626D82",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.10)",
          highlight: "rgba(0, 198, 255, 0.35)",
          active: "rgba(23, 105, 255, 0.50)",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1769FF 0%, #00C6FF 100%)",
        "gradient-surface": "linear-gradient(135deg, #0A1020 0%, #07172E 100%)",
        "gradient-dark": "linear-gradient(180deg, #03050A 0%, #070B12 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(23, 105, 255, 0.18) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(23, 105, 255, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(0, 198, 255, 0.4)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(0, 198, 255, 0.4))" },
          "50%": { opacity: "0.85", filter: "drop-shadow(0 0 30px rgba(0, 198, 255, 0.7))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
