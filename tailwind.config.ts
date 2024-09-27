import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '33%': 'calc(33% - 24px)',
      },
      flex: {
        '33%': '1 0 calc(33.33% - 12px)',
        '50%': '0 0 calc(50% - 8px)',
        '62%': '0 0 calc(62% - 36px)',
        '100': '0 0 100%',
        '38': '0 0 38%',
      },
      backgroundImage: {
        'bg-pattern': "url('/public/bg_light.png')",
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), nextui()],
};

export default config;
