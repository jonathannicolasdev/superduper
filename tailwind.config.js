const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // To add the fonts, setup in app/configs/fonts.ts
      fontFamily: {
        brand: ["Archivo", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Chivo Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: {
          50: "#fdf2f3",
          100: "#fbe5e6",
          200: "#f8ced8",
          300: "#f2b0bf",
          400: "#e8829a",
          500: "#db5776",
          600: "#c83c5d",
          700: "#a82e4b",
          800: "#892a40",
          900: "#76283a",
        },
        surface: {
          50: "#f7f6f6",
          100: "#e5e2e3",
          200: "#cbc4c6",
          300: "#a99fa0",
          400: "#867b7b",
          500: "#6b6161",
          600: "#554c4c",
          700: "#463f40",
          800: "#3a3535",
          900: "#0d0c0c",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      content: {
        external: 'url("/assets/icons/arrow-up-right.svg")',
      },
    },
    debugScreens: {
      position: ["bottom", "left"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
    require("tailwindcss-radix")(),
  ],
};
