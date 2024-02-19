import plugin from 'tailwindcss/plugin'
import aspectRatio from '@tailwindcss/aspect-ratio'
import formPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {},
      animation: {},
      keyframes: {},
      colors: {},
      fontFamily: {},
      fontSize: {},
      spacing: {}
    }
  },
  plugins: [
    aspectRatio,
    formPlugin,
    plugin(({ addUtilities }) => {
      addUtilities({})
    })
  ]
}
