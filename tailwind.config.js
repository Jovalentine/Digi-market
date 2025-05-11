/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#ccdcff',
          200: '#99b9ff',
          300: '#6696ff',
          400: '#3366ff', // Main primary color
          500: '#0044ff',
          600: '#0033cc',
          700: '#002299',
          800: '#001166',
          900: '#000833',
        },
        accent: {
          50: '#fcf7e6',
          100: '#f9f0cc',
          200: '#f3e199',
          300: '#edd266',
          400: '#dda63a', // Main accent color
          500: '#cc8800',
          600: '#a36c00',
          700: '#7a5100',
          800: '#523600',
          900: '#291b00',
        },
        success: {
          400: '#22c55e',
          500: '#16a34a',
        },
        warning: {
          400: '#f59e0b',
          500: '#d97706',
        },
        error: {
          400: '#ef4444',
          500: '#dc2626',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};