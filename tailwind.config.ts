import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'hero-name-xl': '11.75rem',
        'hero-name-lg': '8.75rem',
        'hero-name-md': '6.25rem',
        'hero-name-sm': '5rem',
        'hero-name-xs': '2.875rem',
        'hero-title-xl': '7.188rem',
        'hero-title-lg': '5.375rem',
        'hero-title-md': '3.875rem',
        'hero-title-sm': '3.063rem',
        'hero-title-xs': '1.75rem',
      },
      lineHeight: {
        'hero-name-xl': '9.188rem',
        'hero-name-lg': '6.938rem',
        'hero-name-md': '4.938rem',
        'hero-name-sm': '3.938rem',
        'hero-name-xs': '2.25rem',
        'hero-title-xl': '5.688rem',
        'hero-title-lg': '4.25rem',
        'hero-title-md': '3.063rem',
        'hero-title-sm': '2.438rem',
        'hero-title-xs': '1.375rem',
      },
      colors: {
        'orange-toy': '#FF7C0A',
        'green-toy': '#1DB12C',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark', 'vibrant'],
    },
  },
  plugins: [
    createThemes({
      vibrant: {},
    }),
  ],
}
export default config
