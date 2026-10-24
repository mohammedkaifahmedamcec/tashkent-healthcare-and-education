import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        // Premium Brand System
        ink: "#1A1A1A",
        canvas: "#FAFAF8",
        line: "#E5E5E0",
        
        // Medical (Hospital, Nursing, Physio)
        med: {
          white: "#FFFFFF",
          bg: "#F4F9FB",
          blue: "#176B87",
          navy: "#123047",
          teal: "#16A6A1",
          green: "#43A77A",
          text: "#243746",
          muted: "#647786",
        },

        // Real Estate
        realty: {
          navy: "#0F1B2D",
          ivory: "#F5F1E8",
          gold: "#C9A961",
          stone: "#A8B2C1",
        }
      },
    },
  },
  plugins: [],
};
export default config;