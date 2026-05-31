/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ink':     '#131313',
        'canvas':  '#FEF9FF',
        'blue':    '#48ACF0',
        'yellow':  '#FFDB4D',
        'green':   '#23CE6B',
        'red':     '#E63841',
      },
      fontFamily: {
        'sans': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
