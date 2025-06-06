/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#008CFF',
        'dark-bg': '#0C0D17',
        'light-bg': '#FFFFFF',
        'dark-text': '#FFFFFF',
        'light-text': '#000000',
      },
    },
  },
  plugins: [],
}
