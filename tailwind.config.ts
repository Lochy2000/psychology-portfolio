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
        'sans': ['Open Sans', 'sans-serif'],
        'handwritten': ['Kalam', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'sage-green': '#9CAF88',
        'blush-pink': '#E6D1C5',
        'cream': '#F5F0E6',
        'deep-teal': '#2C5F6B',
        'warm-gray': '#8A8276',
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
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "floating-orbs": "floating-orbs 25s ease-in-out infinite",
        "gradient-shift": "gradient-shift 20s ease infinite",
        "subtle-float": "subtle-float 6s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        "book-zoom": "book-zoom 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "portal-emerge": "portal-emerge 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "pulse-slow": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "floating-orbs": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0.1"
          },
          "33%": {
            transform: "translateY(-20px) translateX(10px) scale(1.1)",
            opacity: "0.2"
          },
          "66%": {
            transform: "translateY(10px) translateX(-5px) scale(0.9)",
            opacity: "0.15"
          }
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          }
        },
        "subtle-float": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        },
        "gentle-pulse": {
          "0%, 100%": {
            opacity: "0.8",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.02)"
          }
        },
        "book-zoom": {
          "0%": {
            transform: "scale(1) blur(0px)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(5) blur(3px)",
            opacity: "0.1"
          }
        },
        "portal-emerge": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
            clipPath: "circle(0% at center)"
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(0.7)",
            clipPath: "circle(30% at center)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            clipPath: "circle(100% at center)"
          }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
