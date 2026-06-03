/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
