import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-general": "#F2F2F2",
        "green-nosotros": "#A9D18E",
        "orange-nosotros": "#F4B183",
        "blue-nosotros": "#0F98C2",
        "purple-nosotros": "#523851",
        "background-proser": "#595959",
        "background-values": "#13467C",
        "color-values": "#F78D1B",
        "text-values": "#f6f0f7",
      },
      backgroundImage: {
        hero: "url(/fondo.jpg)",
      },
      keyframes: {
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(200px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      animation: {
        "slide-right": "slide-right 0.75s",
        "slide-right-slow": "slide-right 1.25s",
        "slide-left": "slide-left 1s",
      },
    },
  },
  plugins: [typography, "prettier-plugin-tailwindcss", "prettier-plugin-astro"],
};
