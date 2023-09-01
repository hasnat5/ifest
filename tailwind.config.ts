import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-violet-sans)'],
        mono: ['var(--font-roboto-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'benefit-box': "url('/assets/images/benefit_box.svg')",
      },
      colors: {
        primary: '#6843EC',
        secondary: '#00FF68',
        tertiary: '#a3a3a3', //GRAY
        quaternary: '#19161C', //black box
      },
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
}
export default config


