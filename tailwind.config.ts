
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'sage-green': '#9CAF88',
        'blush-pink': '#E6D1C5',
        'cream': '#F5F0E6',
        'deep-teal': '#2C5F6B',
        'warm-gray': '#8A8276',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
