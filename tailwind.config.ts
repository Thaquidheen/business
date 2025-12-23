import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#E5C85C',
          dark: '#B8972E',
          50: '#FBF8EC',
          100: '#F5EDCC',
          200: '#EADA9A',
          300: '#E0C768',
          400: '#D4AF37',
          500: '#B8972E',
          600: '#917623',
          700: '#6A5619',
          800: '#44370F',
          900: '#1D1706',
        },
        secondary: {
          DEFAULT: '#1D4E89',
          light: '#2A6AB8',
          dark: '#163C6A',
          50: '#E8F0F9',
          100: '#C5D9F0',
          200: '#8BB4E1',
          300: '#528FD2',
          400: '#2A6AB8',
          500: '#1D4E89',
          600: '#163C6A',
          700: '#102B4B',
          800: '#0A1B2D',
          900: '#040A0F',
        },
        accent: {
          DEFAULT: '#E63946',
          light: '#EF5A66',
          dark: '#C92D39',
          50: '#FDECEE',
          100: '#FACFD2',
          200: '#F4A0A7',
          300: '#EE717C',
          400: '#E63946',
          500: '#C92D39',
          600: '#9B232C',
          700: '#6D1920',
          800: '#400F13',
          900: '#120406',
        },
        dark: '#1A1A2E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
      },
    },
  },
  plugins: [],
}
export default config
