import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-700': 'var(--gray-700)',
        'gray-600': 'var(--gray-600)',
        'gray-500': 'var(--gray-500)',
        'gray-400': 'var(--gray-400)',
        'gray-300': 'var(--gray-300)',
        'gray-200': 'var(--gray-200)',
        'gray-100': 'var(--gray-100)',
        'blue': 'var(--blue)',
        'blue-dark': 'var(--blue-dark)',
        'purple': 'var(--purple)',
        'purple-dark': 'var(--purple-dark)',
        'danger': 'var(--danger)',
      },
    },
  },
  plugins: [],
}
export default config
