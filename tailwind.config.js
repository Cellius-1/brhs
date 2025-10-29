/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DA291C', // BRHS Red (RGB: 218,41,28)
          dark: '#B91C1C',
          light: '#EF4444',
        },
        dark: {
          DEFAULT: '#000000', // Black (RGB: 0,0,0)
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        silver: {
          DEFAULT: '#999999', // Gray 2 (RGB: 153,153,153)
          light: '#C0C0C0', // Silver
          dark: '#595959', // Gray 1 (RGB: 89,89,89)
        },
        gray: {
          1: '#333333', // Grey 1 (RGB: 51,51,51)
          2: '#999999', // Gray 2 (RGB: 153,153,153)
        },
        accent: {
          red: '#DA291C',
          silver: '#C0C0C0',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
