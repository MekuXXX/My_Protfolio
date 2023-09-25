import type { Config } from 'tailwindcss'
import {fontFamily} from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circular-light': "repeating-radial-gradient(rgba(0,0,0,0.4) 1px,#f5f5f5 4px,#f5f5f5 40px);",
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: { 
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9", 
      },
      transitionDuration: {
        main: '0.3s'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config
