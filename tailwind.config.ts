
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        violet: {
          500: '#8b7aa8',
          600: '#7c6a9a',
          700: '#6b5a87',
        },
        warm: {
          50: '#faf9f7',
          100: '#f5f3f0',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
