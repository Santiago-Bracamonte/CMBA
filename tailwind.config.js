/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cian': {
          DEFAULT: '#00BCD4',
          light: '#4DD0E1',
          dark: '#0097A7',
        },
        'cobalto': {
          DEFAULT: '#0047AB',
          light: '#1976D2',
          dark: '#002F6C',
        },
        'magenta': {
          DEFAULT: '#E91E63',
          light: '#FF4081',
          dark: '#C2185B',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-cian-cobalto': 'linear-gradient(135deg, #00BCD4 0%, #0047AB 100%)',
        'gradient-magenta': 'linear-gradient(135deg, #E91E63 0%, #FF4081 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(0, 71, 171, 0.95) 0%, rgba(0, 188, 212, 0.85) 100%)',
      },
    },
  },
  plugins: [],
}
