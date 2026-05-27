import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#09090b',
        secondary: '#111113',
        card: '#161618',
        border: '#2a2a2e',
        gold: {
          DEFAULT: '#C9A05A',
          light: '#E8C47A',
        },
        ivory: '#F0EDE6',
        muted: '#8A8680',
      },
      fontFamily: {
        display: ['var(--font-cormorant)'],
        body: ['var(--font-syne)'],
        mono: ['var(--font-dm-mono)'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }
  },
  plugins: []
};

export default config;