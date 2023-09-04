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
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'benefit-box': "url('/assets/images/benefit_box.svg')",
        'box-string': "url('/assets/images/box_string.svg')",

        'about1': "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80')",
        'about2': "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'about3': "url('https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",

        'cta': "url('https://assets.website-files.com/63b8916a2666a32bc26a89ba/63b8916a2666a315fe6a89fe_image-1-hero-v1-dataplus-template-p-1600.png')"
      },
      colors: {
        primary: '#6843EC',
        secondary: '#00FF68',
        tertiary: '#efefe599', //GRAY
        quaternary: '#19161C', //black box
      },
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
}
export default config


