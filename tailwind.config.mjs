import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'white-general': '#F2F2F2',
        'green-nosotros': '#A9D18E',
        'orange-nosotros': '#F4B183',
        'blue-nosotros': '#0F98C2',
        'purple-nosotros': '#7D557A',
        'background-proser': '#595959'
      },
      backgroundImage: {
        'hero': 'url(/fondo.jpg)',
      },
    },
  },
  plugins: [typography],
}