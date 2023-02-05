/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      accent: {
          100: 'hsl(var(--color-accent-100) / <alpha-value>)',
          200: 'hsl(var(--color-accent-200) / <alpha-value>)',
          300: 'hsl(var(--color-accent-300) / <alpha-value>)',
          400: 'hsl(var(--color-accent-400) / <alpha-value>)',
          500: 'hsl(var(--color-accent-500) / <alpha-value>)',
          600: 'hsl(var(--color-accent-600) / <alpha-value>)',
          700: 'hsl(var(--color-accent-700) / <alpha-value>)',
          800: 'hsl(var(--color-accent-800) / <alpha-value>)',
          900: 'hsl(var(--color-accent-900) / <alpha-value>)',
      },
      brand: {
        100: 'hsl(var(--color-brand-100) / <alpha-value>)',
        200: 'hsl(var(--color-brand-200) / <alpha-value>)',
        300: 'hsl(var(--color-brand-300) / <alpha-value>)',
        400: 'hsl(var(--color-brand-400) / <alpha-value>)',
        500: 'hsl(var(--color-brand-500) / <alpha-value>)',
        600: 'hsl(var(--color-brand-600) / <alpha-value>)',
        700: 'hsl(var(--color-brand-700) / <alpha-value>)',
        800: 'hsl(var(--color-brand-800) / <alpha-value>)',
        900: 'hsl(var(--color-brand-900) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
