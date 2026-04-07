import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "#0b0c0f",
        foreground: "#e5e7eb",
        electric: {
          DEFAULT: "#3b82f6",
          100: "#c7dbff",
          200: "#9ec2ff",
          300: "#6aa5ff",
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1f357f",
          900: "#1b2a5b"
        }
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
