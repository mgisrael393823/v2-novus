import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Novus brand colors
        "novus-gold": {
          DEFAULT: "hsl(var(--brand-primary))", // #CAB06B
          light: "hsl(var(--brand-primary-light))", // #E8DFC0
          dark: "hsl(var(--brand-primary-hover))", // #A38E53
          50: "#FAF8F0", 
          100: "#F5F2E0",
          200: "#EBE5C1",
          300: "#E0D8A2",
          400: "#D6CB83",
          500: "#CAB06B", // brand primary
          600: "#B89B56",
          700: "#A38E53", // brand primary hover
          800: "#826F42",
          900: "#615231",
        },
        "novus-cream": {
          DEFAULT: "hsl(var(--brand-bg-light))", // #F9F8F4
          dark: "#F2F0E8",
        },
        "novus-border": "hsl(var(--brand-border))", // #E5E2D9
        
        // Text color system
        "text": {
          primary: "hsl(var(--text-primary))", // #333333
          secondary: "hsl(var(--text-secondary))", // #666666
          muted: "hsl(var(--text-muted))", // #999999
        },
        
        // Semantic colors
        "success": {
          DEFAULT: "#60A561",
          light: "#E6F0E6",
        },
        "warning": {
          DEFAULT: "#E89D4F",
          light: "#FDF4EA",
        },
        "error": {
          DEFAULT: "#E5826D",
          light: "#FDE9E6",
        },
        "info": {
          DEFAULT: "#5B9BD5",
          light: "#E6F0FA",
        },
        
        // UI colors (expanded from existing)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        none: "0px",
        sm: "var(--radius)", // 0.25rem or 4px
        md: "calc(var(--radius) * 2)", // 0.5rem or 8px
        lg: "calc(var(--radius) * 3)", // 0.75rem or 12px
        xl: "calc(var(--radius) * 4)", // 1rem or 16px
        full: "9999px",
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      spacing: {
        // Standardized spacing values
        xs: "var(--space-1)", // 0.25rem
        sm: "var(--space-2)", // 0.5rem
        md: "var(--space-4)", // 1rem
        lg: "var(--space-6)", // 1.5rem
        xl: "var(--space-8)", // 2rem
        "2xl": "var(--space-12)", // 3rem
        "3xl": "var(--space-16)", // 4rem
        "4xl": "var(--space-24)", // 6rem
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-in-right': 'slide-in-right 0.3s ease-in-out',
        'slide-out-right': 'slide-out-right 0.3s ease-in-out',
        'slide-in-bottom': 'slide-in-bottom 0.4s ease-out',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;