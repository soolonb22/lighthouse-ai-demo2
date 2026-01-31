import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lighthouse: {
          blue: '#1E3A8A',
          gold: '#F59E0B',
          teal: '#06B6D4',
          slate: '#64748B',
        },
      },
    },
  },
  plugins: [],
}
export default config
