import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom cozy neutral palette - NO YELLOW
        warm: {
          50: "#faf9f7", // off-white
          100: "#f5f3f0", // warm white
          200: "#e8e4df", // light sand
          300: "#d4cfc7", // sand
          400: "#b8b0a5", // warm gray
          500: "#9c9389", // medium warm gray
          600: "#7a7067", // darker warm gray
          700: "#5a5248", // soft black
          800: "#3d3832", // deep soft black
          900: "#2a251f", // darkest soft black
          950: "#181C14", // Very dark for dark mode
          975: "#0c0e0a", // Even darker for ultra dark mode
        },
        // Muted earthy accents - NO YELLOW
        olive: {
          50: "#f7f8f3",
          100: "#eef0e6",
          200: "#dde2cd",
          300: "#c4ccaa",
          400: "#a8b285",
          500: "#8f9a68",
          600: "#898483", // Updated to match our gray theme
          700: "#575f40",
          800: "#474d35",
          900: "#3c412e",
        },
        clay: {
          50: "#faf7f5",
          100: "#f4ede8",
          200: "#e8d8d0",
          300: "#d7bfb1",
          400: "#c39e8a",
          500: "#b08268",
          600: "#9a6b52",
          700: "#7f5643",
          800: "#69473a",
          900: "#573c32",
        },
        dusk: {
          50: "#faf8f8",
          100: "#f4efef",
          200: "#e8dcdc",
          300: "#d7c2c2",
          400: "#c19e9e",
          500: "#a87d7d",
          600: "#8f6363",
          700: "#755050",
          800: "#624343",
          900: "#533a3a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
